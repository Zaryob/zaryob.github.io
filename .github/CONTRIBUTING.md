# Contributing

See the [README](../README.md) for local setup and publishing checks. If a change affects the shared theme or translations, see [CONSOLE_THEME.md](../CONSOLE_THEME.md).

Open a pull request against `main` and describe the change and how you checked it. For changes to the site, build it and check the generated links and media:

```sh
python3 scripts/jekyll.py build --trace
python3 scripts/check_site.py _site
```
