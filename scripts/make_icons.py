#!/usr/bin/env python3
"""Draw the site icon set (favicon, touch icon, manifest icons). Requires Pillow."""

from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
PAPER = "#171a1f"   # --paper of the dark console theme
ACCENT = "#e2b56f"  # --accent of the dark console theme
# The "~" of the `zaryob:~ $` prompt, as two cubic curves on a 64 x 64 grid.
CURVES = [((13, 36), (17, 22), (27, 22), (32, 32)), ((32, 32), (37, 42), (47, 42), (51, 28))]
STROKE = 6
SVG = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">'
    '<rect width="64" height="64" rx="{radius}" fill="{paper}"/>'
    '<path d="M13 36C17 22 27 22 32 32S47 42 51 28" fill="none" stroke="{accent}" '
    'stroke-width="{stroke}" stroke-linecap="round"/></svg>\n'
)


def point(curve, t):
    (x0, y0), (x1, y1), (x2, y2), (x3, y3) = curve
    u = 1 - t
    return (
        u**3 * x0 + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t**3 * x3,
        u**3 * y0 + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t**3 * y3,
    )


def draw(size, radius):
    """Return the mark at size x size; radius is the corner radius on the 64 grid."""
    scale = 8 * size / 64  # draw 8x larger, then scale down for smooth edges
    image = Image.new("RGBA", (8 * size, 8 * size), (0, 0, 0, 0))
    canvas = ImageDraw.Draw(image)
    canvas.rounded_rectangle((0, 0, 8 * size - 1, 8 * size - 1), radius=radius * scale, fill=PAPER)
    half = STROKE * scale / 2
    for curve in CURVES:
        for step in range(201):
            x, y = point(curve, step / 200)
            canvas.ellipse((x * scale - half, y * scale - half, x * scale + half, y * scale + half), fill=ACCENT)
    return image.resize((size, size), Image.Resampling.LANCZOS)


def main():
    (ROOT / "favicon.svg").write_text(SVG.format(radius=4, paper=PAPER, accent=ACCENT, stroke=STROKE))
    draw(48, 4).save(ROOT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    # Touch and manifest icons are full squares; the platform applies its own mask.
    draw(180, 0).convert("RGB").save(ROOT / "apple-touch-icon.png", optimize=True)
    draw(192, 0).convert("RGB").save(ROOT / "assets/icons/icon-192.png", optimize=True)
    draw(512, 0).convert("RGB").save(ROOT / "assets/icons/icon-512.png", optimize=True)
    print("Wrote favicon.svg, favicon.ico, apple-touch-icon.png and two manifest icons")


if __name__ == "__main__":
    main()
