#!/usr/bin/env python3
# SPDX-License-Identifier: GPL-2.0-only
"""Run Bundler/Jekyll with Ruby 3.3+, without changing the user's shell."""
import os
from pathlib import Path
import shutil
import subprocess
import sys


def main():
    current = shutil.which('ruby')
    candidates = [
        '/opt/homebrew/opt/ruby@3.3/bin', '/usr/local/opt/ruby@3.3/bin',
    ] + ([str(Path(current).parent)] if current else []) + [
        '/opt/homebrew/opt/ruby/bin', '/usr/local/opt/ruby/bin',
    ]
    for directory in candidates:
        ruby = shutil.which('ruby', path=directory)
        bundle = shutil.which('bundle', path=directory)
        if not ruby or not bundle:
            continue
        if subprocess.run([ruby, '-e', 'exit(Gem::Version.new(RUBY_VERSION) >= Gem::Version.new("3.3") ? 0 : 1)'], capture_output=True).returncode:
            continue
        env = dict(os.environ, PATH=directory + os.pathsep + os.environ.get('PATH', ''))
        if sys.argv[1:] == ['install']:
            subprocess.run([bundle, 'config', 'set', '--local', 'path', 'vendor/bundle'], env=env, check=True)
            command = [bundle, 'install']
        else:
            command = [bundle, 'exec', 'jekyll', *sys.argv[1:]]
        os.execvpe(command[0], command, env)
    print('Ruby 3.3+ and Bundler are required. Install them and add their bin directory to PATH; see README.md.', file=sys.stderr)
    return 1


if __name__ == '__main__':
    sys.exit(main())
