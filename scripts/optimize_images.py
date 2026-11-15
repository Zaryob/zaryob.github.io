#!/usr/bin/env python3
"""Shrink oversized site images in place. Requires Pillow.

Files above LIMIT bytes are scaled down to at most MAX_WIDTH pixels and saved
again in their own format; PNG files become WebP, and every reference to the
old name is rewritten. Animated images are left alone. The Medium inventory
hashes are refreshed for the files that changed.
"""

import hashlib
import json
from pathlib import Path
from urllib.parse import quote

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
FOLDERS = ["assets/img/pages", "assets/img/posts", "assets/img/medium"]
TEXT_SOURCES = ["_posts", "_pages", "en", "_data", "index.html", "posts/index.html"]
INVENTORY = ROOT / "_data/medium_media.json"
LIMIT = 600_000
MAX_WIDTH = 1920


def encode(source: Path, target: Path) -> None:
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        if image.width > MAX_WIDTH:
            height = round(image.height * MAX_WIDTH / image.width)
            image = image.resize((MAX_WIDTH, height), Image.Resampling.LANCZOS)
        if target.suffix.lower() in {".jpg", ".jpeg"}:
            image.convert("RGB").save(target, "JPEG", quality=80, optimize=True, progressive=True)
        else:
            if image.mode not in {"RGB", "RGBA"}:
                image = image.convert("RGBA" if "transparency" in image.info else "RGB")
            image.save(target, "WEBP", quality=82, method=6)


def rewrite_references(old: Path, new: Path) -> None:
    pairs = [(f"/{old.as_posix()}", f"/{new.as_posix()}"), (quote(f"/{old.as_posix()}"), quote(f"/{new.as_posix()}"))]
    for entry in TEXT_SOURCES:
        base = ROOT / entry
        for path in [base] if base.is_file() else sorted(p for p in base.rglob("*") if p.is_file()):
            data = path.read_bytes()
            changed = data
            for before, after in pairs:
                changed = changed.replace(before.encode(), after.encode())
            if changed != data:
                path.write_bytes(changed)


def main() -> None:
    changed = []
    for folder in FOLDERS:
        for source in sorted((ROOT / folder).iterdir()):
            if not source.is_file() or source.stat().st_size <= LIMIT:
                continue
            suffix = source.suffix.lower()
            if suffix not in {".jpg", ".jpeg", ".png", ".webp"}:
                continue
            with Image.open(source) as image:
                if getattr(image, "is_animated", False):
                    continue
            target = source.with_suffix(".webp") if suffix == ".png" else source
            scratch = target.with_name(target.name + ".tmp")
            encode(source, scratch)
            before, after = source.stat().st_size, scratch.stat().st_size
            if after > before * 0.9:
                scratch.unlink()
                continue
            scratch.replace(target)
            if target != source:
                source.unlink()
                rewrite_references(source.relative_to(ROOT), target.relative_to(ROOT))
                thumb = ROOT / "assets/img/thumbs" / source.name
                if thumb.is_file():
                    thumb.unlink()  # scripts/make_thumbnails.py writes the new one
            changed.append(target)
            print(f"{before / 1e6:5.2f} MB -> {after / 1e6:5.2f} MB  {target.relative_to(ROOT)}")

    records = json.loads(INVENTORY.read_text())
    for record in records:
        local = ROOT / record["local"].lstrip("/")
        if local in changed:
            record["sha256"] = hashlib.sha256(local.read_bytes()).hexdigest()
    INVENTORY.write_text(json.dumps(records, ensure_ascii=False, indent=2) + "\n")
    print(f"Re-encoded {len(changed)} images")


if __name__ == "__main__":
    main()
