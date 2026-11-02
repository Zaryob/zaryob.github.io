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
  const apply = () => { root.dataset.theme = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference; };
  apply();
  system.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = ['light', 'dark'].includes(event.newValue) ? event.newValue : 'system';
    apply();
    document.querySelectorAll('[data-console-theme]').forEach(select => { select.value = preference; });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const { t, apply: applyLanguage } = window.ZaryobI18n;
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
    const categories = document.querySelector('[data-console-categories]');
    if (categories) {
      const updateCategories = () => categories.querySelector('summary').setAttribute('aria-expanded', String(categories.open));
      updateCategories();
      categories.addEventListener('toggle', updateCategories);
    }
    compactNavigation.addEventListener('change', () => {
      const restoreFocus = compactNavigation.matches && navigation?.contains(document.activeElement);
      setMenuOpen(false);
      if (categories) categories.open = false;
      if (restoreFocus) menu?.focus();
    });
    document.addEventListener('click', event => {
      if (categories?.open && !categories.contains(event.target)) categories.open = false;
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && categories?.open) {
        categories.open = false;
        categories.querySelector('summary').focus();
      } else if (event.key === 'Escape' && compactNavigation.matches && menu?.getAttribute('aria-expanded') === 'true' && !document.querySelector('dialog[open]')) {
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
    let records = [];
    let indexPromise;
    let partial = false;
    const normalize = text => text.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i');
    const addResult = (title, url, type, language) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      const address = new URL(url, suite);
      if (!['http:', 'https:'].includes(address.protocol) || address.origin !== suite.origin) return;
      link.href = address.href;
      if (language) link.lang = language;
      const label = document.createElement('small');
      label.textContent = t(({ 'yazılar/': 'posts/', 'sayfalar/': 'pages/', 'kılavuzlar/': 'guides/', 'kılavuzlar/arşiv/': 'guides/archive/' })[type] || type);
      link.append(label, document.createTextNode(title));
      item.append(link);
      results.append(item);
    };
    const render = () => {
      results.replaceChildren();
      const query = input.value.trim();
      const terms = normalize(query).split(/\s+/).filter(Boolean);
      const matches = records.filter(record => terms.every(term => record.text.includes(term))).slice(0, 12);
      for (const record of matches) addResult(record.title, record.url, record.type, record.lang);
      if (query) {
        const url = new URL('syscall/', suite);
        url.searchParams.set('q', query);
        addResult(t('Search the syscall table: {query}', { query }), url.href, 'syscall/');
      }
      status.textContent = partial ? t('Some indexes could not be loaded. Available results are shown.') : (query ? t('{count} content results', { count: matches.length }) : t('Search by title or topic.'));
    };
    const load = () => indexPromise ||= Promise.allSettled(['search.json', 'kilavuzlar/search.json'].map(async path => {
      const response = await fetch(new URL(path, suite));
      if (!response.ok) throw new Error('Search index unavailable');
      return response.json();
    })).then(items => {
      partial = items.some(item => item.status === 'rejected');
      records = items.flatMap(item => item.status === 'fulfilled' && Array.isArray(item.value) ? item.value : []).map(record => ({ ...record, text: normalize(`${record.title} ${record.description || ''}`) }));
      render();
    });
    const showSearch = () => {
      if (dialog.open) return;
      dialog.showModal();
      input.focus();
      status.textContent = t('Loading indexes…');
      load().then(render);
    };
    openSearch.addEventListener('click', showSearch);
    dialog.querySelector('[data-search-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
      if (compactNavigation.matches && menu?.getAttribute('aria-expanded') !== 'true') menu.focus();
      else openSearch.focus();
    });
    dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
    input.addEventListener('input', render);
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
