# Süleyman Poyraz's site

**English** · [Türkçe](README.tr.md)

The personal site, project showcase and writing archive published at [zaryob.github.io](https://zaryob.github.io/). The sources are turned into static HTML with Jekyll. Posts that also appear on Medium get a permanent copy here, with their text and images kept in this repository.

## Running locally

You need Python 3, Ruby 3.3 or newer, and Bundler. `scripts/jekyll.py` picks a suitable Ruby version. The `Gemfile` loads the plugins used with Jekyll 4 (`jekyll-feed`, `jekyll-paginate`, `jekyll-seo-tag`) directly; versions are pinned in `Gemfile.lock`.

```sh
python3 scripts/jekyll.py install
python3 scripts/jekyll.py serve --livereload
```

The site opens at `http://127.0.0.1:4000`. To check the HTML that will be published and its local links:

```sh
python3 scripts/jekyll.py build --trace
python3 scripts/check_site.py _site
```

GitHub Actions runs the same build and link check for every push and pull request. It then generates the Pagefind full-text index and publishes `main` builds to GitHub Pages. The check verifies the local `href`, `src`, `srcset` and `poster` targets in the generated pages, and that `feed.xml` and `sitemap.xml` exist.

To try full-text search locally, run `npx --yes pagefind@1.6.0 --site _site` after the Jekyll build in the blog and guides repositories. Then open the combined preview from this repository with `python3 scripts/preview_suite.py`.

## Adding a post and the Medium archive

Posts live in `_posts/YYYY-MM-DD-short-title.md`. Example front matter for a new post:

```yaml
---
layout: post
title: "Title of the post"
date: 2025-04-26 20:00:00 +0300
categories: [programlama]
image: "/assets/img/pages/cover.webp"
---
```

Give `image` the full path within the site (the social sharing image is derived from it) and put cover files in `assets/img/pages/`. Keep images used inside a post under `assets/img/posts/` and link them in Markdown with the local `/assets/img/posts/file.webp` path. Add code samples as Markdown code blocks wherever possible; a Gist or Medium embed should not be the only copy.

If the cover is in another folder, use `cover_image: "/assets/img/posts/file.webp"`. After adding a new cover, generate its small copies for the cards:

```sh
python3 -m pip install Pillow
python3 scripts/make_thumbnails.py
```

The script also writes the cover dimensions to `_data/cover_sizes.json`; the `width`/`height` of the image at the top of a page come from there. Commit the generated `assets/img/thumbs/` files and this data file as well.

To shrink images larger than 600 KB, run `python3 scripts/optimize_images.py`: it scales an image down to at most 1920 pixels wide, converts PNGs to WebP, and updates the paths in posts and the digests in the Medium inventory; it leaves animated images alone. Run `make_thumbnails.py` again afterwards.

The site icons (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `assets/icons/icon-*.png`) are generated with `python3 scripts/make_icons.py`.

Turkish posts are published in the `/feed.xml` feed and English posts in `/en/feed.xml`; both use the `_includes/atom-feed.xml` template. `_plugins/turkish_pagination.rb` keeps English posts out of the `/posts/pageN/` pagination.

When adding a post already published on Medium to the archive:

1. Compare the title, original publication date, text, code blocks and images.
2. Add the local Markdown file and the images it needs to the repository. Keep external links where they are sources, but turn links to the site's own posts into local addresses.
3. Run `python3 scripts/jekyll.py build --trace` and `python3 scripts/check_site.py _site`. Check that the post reads well on a phone too.
4. Record the original Medium link in the post's front matter as `medium_url`, so the two versions can be traced to each other.

This is not an automatic sync; new Medium posts have to be brought into the repository separately.

Image sources and their local counterparts are recorded in `_data/medium_media.json`. Each record holds the post file, the local image and its SHA-256 digest; known original addresses are recorded as well. Publisher addresses that have moved are kept in the `resolved_source` field. New archive images are under `assets/img/medium/`; existing local images are not downloaded again or duplicated. Animated GIF files are stored in their original format.

`scripts/check_site.py` verifies the files and content digests in this inventory, and also checks that the images are actually used in pages. It reports photos loaded from an external server as errors. When you add a new Medium image, add its inventory record too.

Social link icons are loaded from `assets/icons/site.svg` through `_includes/icon.html`. The Font Awesome attribution is in `assets/fontawesome/LICENSE.txt`. For the menu icons and the shared theme, see the [shared appearance document](CONSOLE_THEME.md).

## License

Site source code is licensed under GPL-3.0-or-later ([LICENSE](LICENSE)). Posts, pages and the author's own images are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) ([LICENSE-CONTENT](LICENSE-CONTENT)). Third-party material keeps its own licence.
