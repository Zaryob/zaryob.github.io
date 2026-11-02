#!/usr/bin/env python3
"""Copy the canonical console theme to sibling sites, or verify parity with --check."""
import argparse
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
        for source, target in pairs:
            if args.check:
                if not target.is_file() or source.read_bytes() != target.read_bytes():
                    differences.append(str(target))
            else:
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copyfile(source, target)
    if differences:
        raise SystemExit('Console theme differs:\n' + '\n'.join(differences))
    print('Console theme matches in all three repositories.' if args.check else 'Console theme synced to kilavuzlar and syscall.')


if __name__ == '__main__':
    main()
