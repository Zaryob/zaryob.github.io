/* SPDX-License-Identifier: GPL-2.0-or-later */
/* Shared preference state; application dictionaries subscribe without sharing their keys. */
(() => {
  'use strict';
  const supported = ['tr', 'en'];
  const key = 'zaryob-language';
  const root = document.documentElement;
  root.dataset.originalLanguage = root.lang;
  const browserLanguage = () => /^tr(?:-|$)/i.test(navigator.languages?.[0] || navigator.language || '') ? 'tr' : 'en';
  const query = new URL(location.href).searchParams.get('lang');
  let language = browserLanguage();
  try {
    const saved = localStorage.getItem(key);
    if (supported.includes(saved)) language = saved;
  } catch { /* Optional persistence. */ }
  if (supported.includes(query)) language = query;
  const listeners = new Set();
  const applyProjectLinks = (scope = document) => {
    scope.querySelectorAll('[data-console-projects] a[href]').forEach(link => {
      const address = new URL(link.getAttribute('href'), location.href);
      if (!['http:', 'https:'].includes(address.protocol)) return;
      address.searchParams.set('lang', language);
      link.href = address.href;
    });
  };
  const render = () => {
    root.lang = language;
    root.dataset.uiLanguage = language;
    applyProjectLinks();
  };
  const set = (next, { persist = true, updateUrl = true } = {}) => {
    if (!supported.includes(next)) return;
    language = next;
    if (persist) try { localStorage.setItem(key, language); } catch { /* Page-local preference. */ }
    if (updateUrl) {
      const address = new URL(location.href);
      address.searchParams.set('lang', language);
      history.replaceState(history.state, '', address);
    }
    render();
    listeners.forEach(listener => listener(language));
  };
  window.ZaryobLanguage = {
    supported, browserLanguage, set, applyProjectLinks,
    get language() { return language; },
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); },
  };
  root.lang = language;
  root.dataset.uiLanguage = language;
  document.addEventListener('DOMContentLoaded', () => {
    if (supported.includes(query)) try { localStorage.setItem(key, language); } catch { /* Optional. */ }
    render();
  });
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    set(supported.includes(event.newValue) ? event.newValue : browserLanguage(), { persist: false });
  });
})();
