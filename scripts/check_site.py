#!/usr/bin/env python3
"""Check that generated pages and their local links exist in a Jekyll build."""

import argparse
import hashlib
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


REQUIRED_FILES = ("index.html", "feed.xml", "sitemap.xml", "robots.txt")
LINK_ATTRIBUTES = {"href", "src", "poster"}
ROOT = Path(__file__).resolve().parents[1]


def check_medium_media(site_dir, rendered_images):
    """Check the archived image files and their recorded content hashes."""
    errors = []
    records = json.loads((ROOT / "_data/medium_media.json").read_text())
    checked = {}
    for record in records:
        path = record["local"].lstrip("/")
        target = site_dir / path
        if path not in checked:
            checked[path] = hashlib.sha256(target.read_bytes()).hexdigest() if target.is_file() else None
        if checked[path] != record["sha256"]:
            errors.append(f"Archived Medium image missing or changed: {path}")
        if target.resolve() not in rendered_images:
            errors.append(f"Archived Medium image is not displayed on any page: {path}")
        source_post = ROOT / record["post"]
        if not source_post.is_file():
            errors.append(f"Medium image references missing post: {record['post']}")
    print(f"Checked {len(records)} Medium image records and {len(checked)} local files")
    return sorted(set(errors))


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if not value:
                continue
            if name in LINK_ATTRIBUTES:
                self.links.append((self.getpos()[0], tag, name, value))
            elif name == "srcset":
                for candidate in value.split(","):
                    parts = candidate.strip().split()
                    if parts:
                        self.links.append((self.getpos()[0], tag, name, parts[0]))
            elif name == "style":
                for match in re.finditer(r"url\(['\"]?([^)'\"]+)['\"]?\)", value):
                    self.links.append((self.getpos()[0], tag, name, match.group(1)))


def local_target(site_dir, page, url):
    """Return a local target, or None for an external or fragment-only URL."""
    parsed = urlsplit(url)
    if parsed.scheme or parsed.netloc or not parsed.path:
        return None

    path = unquote(parsed.path)
    if path.startswith("/"):
        target = site_dir / path.lstrip("/")
    else:
        target = page.parent / path
    target = target.resolve()

    if target.is_dir() or path.endswith("/"):
        target /= "index.html"
    return target


def check_site(site_dir):
    errors = []
    rendered_images = set()
    broken_links = {}
    checked_links = 0
    pages = sorted(site_dir.rglob("*.html"))

    for filename in REQUIRED_FILES:
        if not (site_dir / filename).is_file():
            errors.append(f"Missing generated file: {filename}")

    if not pages:
        errors.append("No generated HTML pages found")

    for page in pages:
        parser = LinkParser()
        parser.feed(page.read_text(encoding="utf-8", errors="replace"))
        for line, tag, attribute, url in parser.links:
            is_image = (tag == "img" and attribute in {"src", "srcset"}) or attribute == "style"
            if is_image and urlsplit(url).netloc:
                errors.append(f"{page.relative_to(site_dir)}:{line}: external image must be archived locally: {url}")
            target = local_target(site_dir, page, url)
            if target is None:
                continue
            if is_image:
                rendered_images.add(target)
            checked_links += 1
            try:
                target.relative_to(site_dir)
                inside_site = True
            except ValueError:
                inside_site = False
            if not inside_site or not target.is_file():
                location = page.relative_to(site_dir)
                broken_links.setdefault((tag, attribute, url), []).append(f"{location}:{line}")

    for (tag, attribute, url), locations in sorted(broken_links.items()):
        more = f" (and {len(locations) - 1} more pages)" if len(locations) > 1 else ""
        errors.append(
            f"{locations[0]}: <{tag}> {attribute}={url!r} has no local target{more}"
        )

    errors.extend(check_medium_media(site_dir, rendered_images))
    return pages, checked_links, errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("site_dir", type=Path, help="Jekyll output directory, usually _site")
    args = parser.parse_args()
    site_dir = args.site_dir.resolve()
    if not site_dir.is_dir():
        parser.error(f"site directory does not exist: {site_dir}")

    pages, checked_links, errors = check_site(site_dir)
    print(f"Checked {len(pages)} HTML pages and {checked_links} local links/assets")
    if errors:
        for error in errors[:60]:
            print(f"ERROR: {error}")
        if len(errors) > 60:
            print(f"... and {len(errors) - 60} more errors")
        raise SystemExit(1)
    print("Generated site links and required files are present")


if __name__ == "__main__":
    main()
