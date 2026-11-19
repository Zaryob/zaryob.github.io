/* SPDX-License-Identifier: GPL-2.0-or-later */
/* Shared preference state; application dictionaries subscribe without sharing their keys. */
(() => {
  'use strict';
  const supported = ['tr', 'en'];
  const key = 'zaryob-language';
  const root = document.documentElement;
  const fixedLanguage = supported.includes(root.dataset.fixedUiLanguage) ? root.dataset.fixedUiLanguage : null;
  const routeLanguage = root.dataset.routeLanguage;
  // <html lang> states the language of the page content and is never rewritten;
  // the interface language lives in data-ui-language.
  root.dataset.originalLanguage = root.lang;
  const browserLanguage = () => /^tr(?:-|$)/i.test(navigator.languages?.[0] || navigator.language || '') ? 'tr' : 'en';
  const query = new URL(location.href).searchParams.get('lang');
  let language = browserLanguage();
  const uiLanguage = () => fixedLanguage ?? language;
  // Explicit: chosen by the reader (saved selection or ?lang=), not guessed from the browser.
  let explicit = false;
  try {
    const saved = localStorage.getItem(key);
    if (supported.includes(saved)) { language = saved; explicit = true; }
  } catch { /* Optional persistence. */ }
  if (supported.includes(routeLanguage)) { language = routeLanguage; explicit = true; }
  if (supported.includes(query)) { language = query; explicit = true; }
  const listeners = new Set();
  const projectDefaults = new WeakMap();
  const routeFor = next => {
    if (!supported.includes(next)) return null;
    const link = document.querySelector(`link[rel="alternate"][hreflang="${next}"][data-language-route]`);
    if (!link) return null;
    const current = new URL(location.href);
    const destination = new URL(link.dataset.languageRoute, current);
    destination.search = current.search;
    destination.searchParams.delete('lang');
    destination.hash = current.hash;
    return destination;
  };
  const followRoute = (next, replace = false) => {
    const destination = routeFor(next);
    if (!destination) return false;
    if (destination.pathname !== location.pathname) {
      if (replace) location.replace(destination);
      else location.assign(destination);
    } else if (destination.href !== location.href) {
      history.replaceState(history.state, '', destination);
    }
    return true;
  };
  const applyProjectLinks = (scope = document) => {
    scope.querySelectorAll('[data-console-projects] a[href]').forEach(link => {
      const edition = language === 'tr' ? link.dataset?.projectTr : link.dataset?.projectEn;
      if (edition) {
        if (!projectDefaults.has(link)) projectDefaults.set(link, link.href);
        link.href = explicit ? edition : projectDefaults.get(link);
        return;
      }
      const address = new URL(link.getAttribute('href'), location.href);
      if (!['http:', 'https:'].includes(address.protocol)) return;
      if (explicit) address.searchParams.set('lang', language);
      else address.searchParams.delete('lang');
      link.href = address.href;
    });
  };
  const render = () => {
    root.dataset.uiLanguage = uiLanguage();
    applyProjectLinks();
  };
  const set = (next, { persist = true, updateUrl = true, explicit: chosen = true } = {}) => {
    if (!supported.includes(next)) return;
    language = next;
    explicit = chosen;
    if (!chosen) persist = updateUrl = false;
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
    supported, browserLanguage, set, applyProjectLinks, routeFor, followRoute,
    get language() { return language; },
    get uiLanguage() { return uiLanguage(); },
    get explicit() { return explicit; },
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); },
  };
  root.dataset.uiLanguage = uiLanguage();
  document.addEventListener('DOMContentLoaded', () => {
    if (supported.includes(query)) {
      try { localStorage.setItem(key, language); } catch { /* Optional. */ }
      followRoute(query, true);
    }
    render();
  });
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    if (supported.includes(routeLanguage)) return;
    if (supported.includes(event.newValue)) set(event.newValue, { persist: false });
    else set(browserLanguage(), { explicit: false });
  });
})();
