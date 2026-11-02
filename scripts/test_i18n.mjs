// SPDX-License-Identifier: GPL-2.0-or-later
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
const script = readFileSync(new URL('../assets/console/i18n.js', import.meta.url), 'utf8');
function boot({ stored, query = '', blocked = false } = {}) {
  let current = new URL(`https://zaryob.github.io/syscall/?arch=loongarch64&kernel=v7.3&q=write${query}#sys-write`);
  const root = { lang: '', dataset: {} };
  const selectors = new Map();
  const document = { documentElement: root, addEventListener() {}, querySelectorAll: () => [], querySelector: key => selectors.get(key) };
  const context = {
    document, URL, URLSearchParams, Intl, CustomEvent: class {},
    location: { get search() { return current.search; }, get href() { return current.href; }, assign(url) { current = new URL(url); } },
    history: { replaceState(_state, _title, url) { current = new URL(url); } },
    localStorage: { getItem() { if (blocked) throw Error('disabled'); return stored; }, setItem(_key, value) { if (blocked) throw Error('disabled'); stored = value; } },
    window: { addEventListener() {}, dispatchEvent() {} },
  };
  vm.runInNewContext(script, context);
  return { api: context.window.ZaryobI18n, root, selectors, url: () => current };
}
test('explicit shared URL language takes priority; invalid languages fall back safely', () => {
  assert.equal(boot({ stored: 'tr', query: '&lang=en' }).api.language, 'en');
  assert.equal(boot({ stored: 'en', query: '&lang=bogus' }).api.language, 'en');
  assert.equal(boot({ stored: 'bogus' }).api.language, 'tr');
  assert.equal(boot({ blocked: true, query: '&lang=en' }).api.language, 'en');
});
test('language changes preserve architecture, version, query and detail anchor with storage disabled', () => {
  const page = boot({ blocked: true });
  page.api.setLanguage('en');
  const url = page.url();
  assert.equal(url.searchParams.get('arch'), 'loongarch64');
  assert.equal(url.searchParams.get('kernel'), 'v7.3');
  assert.equal(url.searchParams.get('q'), 'write');
  assert.equal(url.hash, '#sys-write');
  assert.equal(url.searchParams.get('lang'), 'en');
  assert.equal(page.api.t('Loading…'), 'Loading…');
  page.api.setLanguage('tr');
  assert.equal(page.api.t('{minutes} min read', { minutes: 17 }), '17 dakika okuma süresi');
});
test('only a real registered counterpart can be used for article language navigation', () => {
  const page = boot();
  page.selectors.set('[data-translation-lang="en"]', { href: 'https://zaryob.github.io/genel/third-wave-ai-agents/' });
  page.api.setLanguage('en');
  assert.equal(page.url().pathname, '/genel/third-wave-ai-agents/');
  assert.equal(page.url().searchParams.get('lang'), 'en');
  assert.equal(page.api.t('Unknown technical identifier'), 'Unknown technical identifier');
});
