/* SPDX-License-Identifier: GPL-2.0-or-later */
/* Shared console theme. Loaded before styles to avoid a flash of the wrong theme. */
(() => {
  'use strict';
  const key = 'zaryob-theme';
  const root = document.documentElement;
  root.classList.add('console-js');
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = 'system';
  try { preference = localStorage.getItem(key) || 'system'; } catch { /* Storage may be disabled. */ }
  if (!['system', 'light', 'dark'].includes(preference)) preference = 'system';
  const apply = () => {
    root.dataset.theme = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', root.dataset.theme === 'dark' ? '#171a1f' : '#f5f3ed');
  };
  apply();
  system.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = ['light', 'dark'].includes(event.newValue) ? event.newValue : 'system';
    apply();
    document.querySelectorAll('[data-console-theme]').forEach(select => { select.value = preference; });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const { t, apply: applyLanguage } = window.ZaryobI18n || {
      t: text => ({ 'Open menu': 'Menüyü aç', 'Close menu': 'Menüyü kapat' })[text] || text,
      apply: () => {},
    };
    document.querySelectorAll('[data-console-theme]').forEach(select => {
      select.value = preference;
      select.addEventListener('change', () => {
        preference = select.value;
        try { localStorage.setItem(key, preference); } catch { /* Keep this page usable without storage. */ }
        apply();
      });
    });
    const menu = document.querySelector('[data-console-menu]');
    const navigation = document.getElementById('console-navigation');
    const compactNavigation = matchMedia('(max-width: 1180px)');
    const setMenuOpen = open => {
      menu?.setAttribute('aria-expanded', String(open));
      menu?.setAttribute('aria-label', t(open ? 'Close menu' : 'Open menu'));
      if (menu) menu.dataset.i18nAriaLabel = open ? 'Close menu' : 'Open menu';
      navigation?.classList.toggle('is-open', open);
      if (open && navigation) navigation.scrollTop = 0;
    };
    menu?.addEventListener('click', () => {
      setMenuOpen(menu.getAttribute('aria-expanded') !== 'true');
    });
    const dropdowns = [...document.querySelectorAll('[data-console-categories], [data-console-projects]')];
    const closeDropdown = (dropdown, restoreFocus = false) => {
      dropdown.open = false;
      dropdown.querySelector('summary').setAttribute('aria-expanded', 'false');
      if (restoreFocus) dropdown.querySelector('summary').focus();
    };
    dropdowns.forEach(dropdown => {
      const updateDropdown = () => {
        dropdown.querySelector('summary').setAttribute('aria-expanded', String(dropdown.open));
        if (dropdown.open) dropdowns.forEach(other => { if (other !== dropdown && other.open) closeDropdown(other); });
      };
      updateDropdown();
      dropdown.addEventListener('toggle', updateDropdown);
      dropdown.addEventListener('focusout', event => {
        // Safari can omit the next focus target during a tap. Let the
        // outside-click handler close the menu after the link activates.
        if (event.relatedTarget && !dropdown.contains(event.relatedTarget)) closeDropdown(dropdown);
      });
    });
    compactNavigation.addEventListener('change', () => {
      const restoreFocus = compactNavigation.matches && navigation?.contains(document.activeElement);
      setMenuOpen(false);
      dropdowns.forEach(dropdown => closeDropdown(dropdown));
      if (restoreFocus) menu?.focus();
    });
    document.addEventListener('click', event => {
      dropdowns.forEach(dropdown => {
        if (dropdown.open && !dropdown.contains(event.target)) closeDropdown(dropdown);
      });
      if (compactNavigation.matches && menu?.getAttribute('aria-expanded') === 'true' && !event.target.closest('.console-header')) setMenuOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || document.querySelector('dialog[open]')) return;
      const dropdown = dropdowns.find(item => item.open);
      if (dropdown) {
        closeDropdown(dropdown, true);
      } else if (compactNavigation.matches && menu?.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menu.focus();
      }
    });

    document.querySelectorAll('pre > code').forEach(code => {
      const pre = code.parentElement;
      const wrapper = document.createElement('div');
      wrapper.className = 'console-code';
      pre.before(wrapper);
      wrapper.append(pre);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'console-copy';
      const label = t('Copy');
      button.dataset.i18n = 'Copy';
      button.dataset.i18nAriaLabel = 'Copy code';
      button.textContent = label;
      button.setAttribute('aria-label', t('Copy code'));
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.textContent);
          button.textContent = t('Copied');
        } catch { button.textContent = t('Select code to copy'); }
        setTimeout(() => { button.textContent = t('Copy'); }, 2200);
      });
      wrapper.append(button);
    });

    const openSearch = document.querySelector('[data-console-search]');
    if (!openSearch) return;
    const suite = new URL(openSearch.dataset.suiteRoot || '/', location.href);
    const dialog = document.createElement('dialog');
    dialog.className = 'console-search';
    dialog.setAttribute('aria-labelledby', 'console-search-title');
    dialog.innerHTML = '<div class="console-search__heading"><h2 id="console-search-title"><span data-i18n="Zaryob / Search">Zaryob / Ara</span></h2><button type="button" data-search-close aria-label="Aramayı kapat" data-i18n-aria-label="Close search"><span data-i18n="Esc / Close">Esc / Kapat</span></button></div><label for="console-search-input"><span data-i18n="Posts, guides and system calls">Yazılar, kılavuzlar ve sistem çağrıları</span></label><input id="console-search-input" type="search" placeholder="Docker, C++, write…" data-i18n-placeholder="Docker, C++, write…" autocomplete="off"><p class="console-search__status" role="status" aria-live="polite"></p><ul class="console-search__results"></ul>';
    document.body.append(dialog);
    applyLanguage(dialog);
    const input = dialog.querySelector('input');
    const results = dialog.querySelector('ul');
    const status = dialog.querySelector('[role="status"]');
    const indexes = new Map();
    let fallbackIndex;
    let request = 0;
    let debounce;
    const normalize = text => text.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i');
    const addResult = (title, url, type, language, excerpt) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      const address = new URL(url, suite);
      if (!['http:', 'https:'].includes(address.protocol) || address.origin !== suite.origin) return;
      link.href = address.href;
      if (language) link.lang = language;
      const label = document.createElement('small');
      label.textContent = t(({ 'yazılar/': 'posts/', 'sayfalar/': 'pages/', 'kılavuzlar/': 'guides/', 'kılavuzlar/arşiv/': 'guides/archive/' })[type] || type);
      link.append(label, document.createTextNode(title));
      if (excerpt) {
        const snippet = document.createElement('small');
        snippet.textContent = excerpt;
        link.append(snippet);
      }
      item.append(link);
      results.append(item);
    };
    const loadFallback = () => fallbackIndex ||= Promise.allSettled(['search.json', 'kilavuzlar/search.json'].map(async path => {
      const response = await fetch(new URL(path, suite));
      if (!response.ok) throw new Error('Search index unavailable');
      return response.json();
    }));
    const loadIndex = async createInstance => {
      const language = root.lang;
      if (!indexes.has(language)) {
        const index = createInstance({ baseUrl: suite.href });
        const guides = new URL('kilavuzlar/', suite);
        indexes.set(language, index.mergeIndex(new URL('pagefind/', guides).href, {
          baseUrl: guides.href,
          language,
        }).then(() => index).catch(error => {
          index.destroy();
          throw error;
        }));
      }
      return indexes.get(language);
    };
    const render = async () => {
      const current = ++request;
      const query = input.value.trim();
      results.replaceChildren();
      if (!query) {
        status.textContent = t('Search by title or full text.');
        return;
      }
      const syscall = new URL('syscall/', suite);
      syscall.searchParams.set('q', query);
      addResult(t('Search the syscall table: {query}', { query }), syscall.href, 'syscall/');
      status.textContent = t('Searching…');
      let matches;
      let message = '{count} content results';
      try {
        const { createInstance } = await import(new URL('pagefind/pagefind.js', suite).href);
        if (current !== request) return;
        const index = await loadIndex(createInstance);
        if (current !== request) return;
        const search = await index.search(query);
        if (current !== request) return;
        const fragments = await Promise.all(search.results.slice(0, 12).map(result => result.data()));
        matches = fragments.map(result => ({
          title: result.meta.title || result.url,
          type: result.meta.type || 'sayfalar/',
          url: result.url,
          excerpt: result.plain_excerpt,
          lang: root.lang,
        }));
      } catch {
        const items = await loadFallback();
        const terms = normalize(query).split(/\s+/).filter(Boolean);
        matches = items.flatMap(item => item.status === 'fulfilled' && Array.isArray(item.value) ? item.value : [])
          .filter(record => terms.every(term => normalize(`${record.title} ${record.description || ''}`).includes(term)))
          .slice(0, 12);
        message = items.some(item => item.status === 'rejected')
          ? 'Some indexes could not be loaded. Available results are shown.'
          : 'Full-text search unavailable. Showing title and topic matches.';
      }
      if (current !== request) return;
      results.replaceChildren();
      for (const record of matches) addResult(record.title, record.url, record.type, record.lang, record.excerpt);
      addResult(t('Search the syscall table: {query}', { query }), syscall.href, 'syscall/');
      status.textContent = t(message, { count: matches.length });
    };
    const showSearch = () => {
      if (dialog.open) return;
      dialog.showModal();
      input.focus();
      render();
    };
    openSearch.addEventListener('click', showSearch);
    dialog.querySelector('[data-search-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
      clearTimeout(debounce);
      request++;
      if (compactNavigation.matches && menu?.getAttribute('aria-expanded') !== 'true') menu.focus();
      else openSearch.focus();
    });
    dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
    input.addEventListener('input', () => {
      request++;
      clearTimeout(debounce);
      debounce = setTimeout(render, 140);
    });
    window.addEventListener('zaryob:language', () => {
      setMenuOpen(menu?.getAttribute('aria-expanded') === 'true');
      if (dialog.open) render();
    });
    document.addEventListener('keydown', event => {
      const target = event.target;
      const editing = target instanceof HTMLElement && (target.matches('input,textarea,select') || target.isContentEditable);
      if (event.key === '/' && !editing && !event.ctrlKey && !event.metaKey && !event.altKey) { event.preventDefault(); showSearch(); }
    });
  });
})();
