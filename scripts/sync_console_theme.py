#!/usr/bin/env python3
"""Copy the canonical console theme to sibling sites, or verify parity with --check."""
import argparse
from html import escape
import json
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
SHARED = ['theme.css', 'theme.js', 'i18n.js', 'regular.svg', 'site.svg', 'select-chevron.svg', 'ICONS-LICENSE.txt', 'fonts/IBMPlexMono-Regular.woff2',
          'fonts/IBMPlexMono-Medium.woff2', 'fonts/OFL.txt']


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    parser.add_argument('--guides', type=Path, default=ROOT.parent / 'kilavuzlar')
    parser.add_argument('--syscall', type=Path, default=ROOT.parent / 'syscall')
    parser.add_argument('--pin-atlas', type=Path, default=ROOT.parent / 'p/pin-atlas')
    args = parser.parse_args()
    differences = []
    for repo, public in [(args.guides, args.guides), (args.syscall, args.syscall / 'public')]:
        if not repo.is_dir():
            raise SystemExit(f'Sibling repository missing: {repo}')
        pairs = [(ROOT / 'assets/console' / name, public / 'assets/console' / name) for name in SHARED]
        pairs.append((ROOT / '_includes/console-header.html', public / '_includes/console-header.html'))
        pairs.append((ROOT / '_includes/console-icon.html', public / '_includes/console-icon.html'))
        pairs.append((ROOT / '_includes/console-content-language.html', public / '_includes/console-content-language.html'))
        pairs.append((ROOT / '_includes/console-alternates.html', public / '_includes/console-alternates.html'))
        pairs.append((ROOT / '_data/writing_topics.yml', public / '_data/writing_topics.yml'))
        pairs.append((ROOT / '_data/console_projects.json', public / '_data/console_projects.json'))
        for source, target in pairs:
            if args.check:
                if not target.is_file() or source.read_bytes() != target.read_bytes():
                    differences.append(str(target))
            else:
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copyfile(source, target)
    # Pin Atlas is a static app. Share the same assets and render its project
    # links from the canonical registry without adding a runtime dependency.
    if args.pin_atlas.is_dir():
        public = args.pin_atlas / 'dist'
        for name in SHARED:
            if name == 'i18n.js':
                continue
            source = ROOT / 'assets/console' / name
            target = public / 'assets/console' / name
            if args.check:
                if not target.is_file() or source.read_bytes() != target.read_bytes():
                    differences.append(str(target))
            else:
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copyfile(source, target)
        index = public / 'index.html'
        content = index.read_text()
        start = '<!-- console-project-links:start -->'
        end = '<!-- console-project-links:end -->'
        links = []
        for project in json.loads((ROOT / '_data/console_projects.json').read_text()):
            current = ' aria-current="location"' if project['key'] == 'pin-atlas' else ''
            links.append(f'          <a href="https://zaryob.github.io{escape(project["path"], quote=True)}"{current}><span>{escape(project["title"])}</span><small>{escape(project["prompt"])}</small></a>')
        before, rest = content.split(start, 1)
        _, after = rest.split(end, 1)
        updated = before + start + '\n' + '\n'.join(links) + '\n          ' + end + after
        if args.check:
            if content != updated:
                differences.append(str(index) + ' (project menu)')
        else:
            index.write_text(updated)
    if differences:
        raise SystemExit('Console theme differs:\n' + '\n'.join(differences))
    print('Console theme matches in all available repositories.' if args.check else 'Console theme and project menus synced to available sibling sites.')


if __name__ == '__main__':
    main()
