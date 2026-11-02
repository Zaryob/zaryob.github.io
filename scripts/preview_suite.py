#!/usr/bin/env python3
"""Preview the three already-built Jekyll sites together on a loopback address."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from io import BytesIO
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]


class SuiteHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        pathname = urlsplit(path).path
        for prefix, repository in [('/kilavuzlar', 'kilavuzlar'), ('/syscall', 'syscall')]:
            if pathname == prefix or pathname.startswith(prefix + '/'):
                self.directory = str(ROOT.parent / repository / '_site')
                return super().translate_path(pathname[len(prefix):] or '/')
        self.directory = str(ROOT / '_site')
        return super().translate_path(path)

    def send_head(self):
        path = Path(self.translate_path(self.path))
        if path.is_dir() and urlsplit(self.path).path.endswith('/'):
            path /= 'index.html'
        if path.is_file() and path.suffix in {'.html', '.json'}:
            # Production links stay absolute in each standalone build. Only the
            # local response maps them to this combined preview's origin.
            origin = f'http://127.0.0.1:{self.server.server_port}'
            data = path.read_text().replace('https://zaryob.github.io', origin).encode()
            self.send_response(200)
            self.send_header('Content-Type', self.guess_type(str(path)) + '; charset=utf-8')
            self.send_header('Content-Length', str(len(data)))
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()
            return BytesIO(data)
        return super().send_head()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=4180)
    args = parser.parse_args()
    for name in ['zaryob.github.io', 'kilavuzlar', 'syscall']:
        if not (ROOT.parent / name / '_site/index.html').is_file():
            raise SystemExit(f'Build {name} before starting this preview.')
    server = ThreadingHTTPServer(('127.0.0.1', args.port), partial(SuiteHandler, directory=str(ROOT / '_site')))
    print(f'Zaryob preview: http://127.0.0.1:{args.port}', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()


if __name__ == '__main__':
    main()
