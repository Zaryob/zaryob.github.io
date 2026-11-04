// SPDX-License-Identifier: GPL-2.0-or-later
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
const script = readFileSync(new URL('../assets/console/i18n.js', import.meta.url), 'utf8');
function boot({ stored, query = '', blocked = false, browser = 'en-US', languages } = {}) {
  let current = new URL(`https://zaryob.github.io/syscall/?arch=loongarch64&kernel=v7.3&q=write${query}#sys-write`);
  const root = { lang: '', dataset: {} };
  const selectors = new Map();
  const listeners = new Map();
  const documentListeners = new Map();
  const document = { documentElement: root, addEventListener(type, callback) { documentListeners.set(type, callback); }, querySelectorAll: () => [], querySelector: key => selectors.get(key) };
  const context = {
    document, URL, URLSearchParams, Intl, navigator: { language: browser, languages }, CustomEvent: class {},
    location: { get search() { return current.search; }, get href() { return current.href; }, assign(url) { current = new URL(url); }, replace(url) { current = new URL(url); } },
    history: { replaceState(_state, _title, url) { current = new URL(url); } },
    localStorage: { getItem() { if (blocked) throw Error('disabled'); return stored; }, setItem(_key, value) { if (blocked) throw Error('disabled'); stored = value; } },
    window: { addEventListener(type, callback) { listeners.set(type, callback); }, dispatchEvent() {} },
  };
  vm.runInNewContext(script, context);
  return { api: context.window.ZaryobI18n, root, selectors, ready: () => documentListeners.get('DOMContentLoaded')(), storage: value => listeners.get('storage')({ key: 'zaryob-language', newValue: value }), url: () => current };
}
test('the primary browser language selects Turkish only for Turkish locales', () => {
  for (const browser of ['tr', 'tr-TR', 'tr-CY', 'TR-tr']) assert.equal(boot({ browser }).api.language, 'tr');
  for (const browser of ['en-US', 'de-DE', 'fr', '', 'tricky']) assert.equal(boot({ browser }).api.language, 'en');
  assert.equal(boot({ browser: 'tr-TR', languages: ['en-US', 'tr-TR'] }).api.language, 'en');
  assert.equal(boot({ browser: 'en-US', languages: ['tr-TR', 'en-US'] }).api.language, 'tr');
  assert.equal(boot({ browser: 'tr-TR', blocked: true }).api.language, 'tr');
  assert.equal(boot({ browser: 'de-DE', blocked: true }).api.language, 'en');
});
test('manual choice overrides browser detection and invalid storage returns to the browser default', () => {
  assert.equal(boot({ browser: 'tr-TR', stored: 'en' }).api.language, 'en');
  assert.equal(boot({ browser: 'en-US', stored: 'tr' }).api.language, 'tr');
  assert.equal(boot({ browser: 'tr-TR', stored: 'bogus' }).api.language, 'tr');
});
test('clearing a saved choice in another tab restores the browser default', () => {
  for (const [browser, expected] of [['tr-TR', 'tr'], ['de-DE', 'en']]) {
    const page = boot({ browser, stored: expected === 'tr' ? 'en' : 'tr' });
    page.storage(null);
    assert.equal(page.api.language, expected);
  }
});
test('explicit shared URL language takes priority; invalid languages fall back safely', () => {
  assert.equal(boot({ stored: 'tr', query: '&lang=en' }).api.language, 'en');
  assert.equal(boot({ stored: 'en', query: '&lang=bogus' }).api.language, 'en');
  assert.equal(boot({ stored: 'bogus' }).api.language, 'en');
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

test('initial navigation follows an existing content edition without a redirect loop', () => {
  const page = boot({ stored: 'en' });
  page.selectors.set('link[rel="alternate"][hreflang="en"]', { href: 'https://zaryob.github.io/en/about/' });
  page.ready();
  assert.equal(page.url().pathname, '/en/about/');
  assert.equal(page.url().hash, '#sys-write');
  assert.equal(page.url().searchParams.get('lang'), 'en');
  page.ready();
  assert.equal(page.url().pathname, '/en/about/');
});

test('pagination does not redirect back to first page when language matches', () => {
  const page = boot({ stored: 'tr' });
  page.selectors.set('link[rel="alternate"][hreflang="tr"]', { href: 'https://zaryob.github.io/posts/' });
  page.ready();
  assert.equal(page.url().pathname, '/syscall/');
});
