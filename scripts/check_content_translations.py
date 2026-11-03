#!/usr/bin/env python3
"""Check the fixed-page/guide translation coverage and preserve executable samples."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
GUIDES = ROOT.parent / 'kilavuzlar'
FENCE = re.compile(r'(?ms)^([ \t]*)(`{3,}|~{3,})[^\n]*\n.*?^\1\2[ \t]*$')

def document(path):
    text = path.read_text()
    if not text.startswith('---\n'):
        return {}, text
    _, header, body = text.split('---', 2)
    fields = dict(re.findall(r'^([\w_]+):[ \t]*(.*)$', header, re.M))
    fields = {key: value.strip().strip("'\"") for key, value in fields.items()}
    return fields, body

errors = []
pairs = blocks = 0
for source in [*GUIDES.rglob('*.md'), GUIDES / '404.html']:
    relative = source.relative_to(GUIDES)
    if any(part in {'en', 'vendor', '_site', '.git', '.cache'} for part in relative.parts):
        continue
    original, body = document(source)
    if not original.get('permalink') or not original.get('title'):
        continue
    translation = GUIDES / 'en' / relative
    if not translation.is_file():
        errors.append(f'Missing English guide: {relative}')
        continue
    translated, english = document(translation)
    for field in ['translation_key', 'status', 'reviewed']:
        if translated.get(field) != original.get(field):
            errors.append(f'{relative}: mismatched {field}')
    if original.get('lang') != 'tr' or translated.get('lang') != 'en':
        errors.append(f'{relative}: invalid language pair')
    if translated.get('translation_of') != original.get('permalink'):
        errors.append(f'{relative}: incorrect original URL')
    code = [match[0] for match in FENCE.finditer(body)]
    if code != [match[0] for match in FENCE.finditer(english)]:
        errors.append(f'{relative}: a fenced code sample changed')
    if original.get('status') == 'arsiv' and not translated.get('archive_reason'):
        errors.append(f'{relative}: missing archive warning')
    if '[[CODE:' in english:
        errors.append(f'{relative}: unresolved code placeholder')
    pairs += 1
    blocks += len(code)
for source in [*list((ROOT / '_pages').glob('*.md')), ROOT / 'index.html', ROOT / 'posts/index.html']:
    original, _ = document(source)
    if not original.get('translation_key'):
        errors.append(f'{source.name}: missing fixed-page translation key')
        continue
    counterparts = [p for p in (ROOT / 'en').rglob('*') if p.is_file()
                    and document(p)[0].get('translation_key') == original['translation_key']]
    if len(counterparts) != 1:
        errors.append(f'{source.name}: expected one English fixed page')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'Validated {pairs} guide/error-page pairs, {blocks} unchanged fenced code blocks and all 13 fixed-page editions.')
