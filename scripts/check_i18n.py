#!/usr/bin/env python3
"""Validate the shared UI vocabulary and translation links in the three built sites."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
source = (ROOT / 'assets/console/i18n.js').read_text()
vocabulary = json.JSONDecoder().raw_decode(source.split('  const translations = ', 1)[1])[0]
errors = []
for original, translated in vocabulary.items():
    if set(re.findall(r'\{\w+\}', original)) != set(re.findall(r'\{\w+\}', translated)):
        errors.append(f'Placeholder mismatch: {original}')

class TranslationParser(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.alternates = {}

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        names = [key for key, _ in attrs]
        for key in names:
            if key.startswith('data-i18n') and names.count(key) > 1:
                errors.append(f'{self.path}: repeated {key}')
        for key in ['data-i18n', 'data-i18n-aria-label', 'data-i18n-placeholder', 'data-i18n-title']:
            if key in values and values[key] not in vocabulary:
                errors.append(f'{self.path}: missing vocabulary: {values[key]}')
        if 'data-i18n-vars' in values:
            try:
                json.loads(values['data-i18n-vars'])
            except ValueError:
                errors.append(f'{self.path}: invalid translation variables')
        if tag == 'link' and values.get('rel') == 'alternate' and 'hreflang' in values:
            lang = values['hreflang']
            if lang in self.alternates:
                errors.append(f'{self.path}: duplicate {lang} alternate')
            self.alternates[lang] = values.get('href')

pages = 0
translated_pages = 0
for site in [ROOT / '_site', ROOT.parent / 'kilavuzlar/_site', ROOT.parent / 'syscall/_site']:
    for path in site.rglob('*.html'):
        parser = TranslationParser(path)
        parser.feed(path.read_text())
        pages += 1
        if parser.alternates:
            translated_pages += 1
            if set(parser.alternates) != {'tr', 'en'}:
                errors.append(f'{path}: translation group needs one TR and one EN alternate')
            for address in parser.alternates.values():
                relative = unquote(urlsplit(address).path).removeprefix('/kilavuzlar') if site.parent.name == 'kilavuzlar' else unquote(urlsplit(address).path)
                target = site / relative.lstrip('/')
                if not target.suffix:
                    target /= 'index.html'
                if not target.is_file():
                    errors.append(f'{path}: missing alternate {address}')
if errors:
    raise SystemExit('\n'.join(sorted(set(errors))))
print(f'Validated {len(vocabulary)} UI strings, {pages} HTML pages and {translated_pages} HTML pages with language alternates.')
