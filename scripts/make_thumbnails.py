#!/usr/bin/env python3
"""Create small list images for post covers. Requires Pillow."""

import re
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
POSTS = ROOT / "_posts"
THUMBS = ROOT / "assets/img/thumbs"
IMAGE_FIELD = re.compile(r"^(image|cover_image):\s*[\"']?([^\"'\n]+)", re.MULTILINE)


def source_for(field: str, value: str) -> Path:
    if field == "cover_image" or value.startswith("/"):
        return ROOT / value.lstrip("/")
    return ROOT / "assets/img/pages" / value


def save_thumbnail(source: Path, target: Path) -> None:
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        image = ImageOps.fit(image, (480, 360), method=Image.Resampling.LANCZOS)
        suffix = target.suffix.lower()
        if suffix in {".jpg", ".jpeg"}:
            image.convert("RGB").save(target, "JPEG", quality=78, optimize=True, progressive=True)
        elif suffix == ".webp":
            image.convert("RGB").save(target, "WEBP", quality=75, method=6)
        elif suffix == ".png":
            image.save(target, "PNG", optimize=True)
        else:
            raise ValueError(f"Unsupported cover format: {source}")


def main() -> None:
    THUMBS.mkdir(parents=True, exist_ok=True)
    sources = set()
    for post in POSTS.glob("*.md"):
        frontmatter = post.read_text(encoding="utf-8").split("---", 2)[1]
        for field, value in IMAGE_FIELD.findall(frontmatter):
            sources.add(source_for(field, value.strip()))

    count = 0
    for source in sorted(sources):
        if not source.is_file():
            raise FileNotFoundError(source)
        target = THUMBS / source.name
        save_thumbnail(source, target)
        count += 1
    print(f"Created {count} thumbnails in {THUMBS.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
