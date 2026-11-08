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
      t: (text, values = {}) => text.replace(/\{(\w+)\}/g, (match, key) => Object.hasOwn(values, key) ? String(values[key]) : match),
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

    const highlightQuery = new URLSearchParams(location.search).get('highlight');
    if (highlightQuery) {
      const terms = highlightQuery.trim().split(/\s+/).filter(Boolean);
      if (terms.length) {
        const container = document.querySelector('[data-pagefind-body]')
          || document.querySelector('article')
          || document.querySelector('main')
          || document.querySelector('.console-site')
          || document.body;
        if (container) {
          const escapeRegExp = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'gi');
          let firstMark = null;
          const walk = node => {
            if (['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'SELECT', 'NOSCRIPT', 'SVG', 'DIALOG'].includes(node.nodeName)) return;
            if (node.nodeType === Node.TEXT_NODE) {
              const text = node.textContent;
              if (!pattern.test(text)) return;
              pattern.lastIndex = 0;
              const fragment = document.createDocumentFragment();
              let lastIndex = 0;
              let match;
              while ((match = pattern.exec(text)) !== null) {
                const preceding = text.slice(lastIndex, match.index);
                if (preceding) fragment.append(document.createTextNode(preceding));
                const mark = document.createElement('mark');
                mark.className = 'console-highlight';
                mark.textContent = match[0];
                fragment.append(mark);
                if (!firstMark) firstMark = mark;
                lastIndex = pattern.lastIndex;
              }
              if (lastIndex < text.length) {
                fragment.append(document.createTextNode(text.slice(lastIndex)));
              }
              node.replaceWith(fragment);
            } else {
              const children = Array.from(node.childNodes);
              for (const child of children) walk(child);
            }
          };
          walk(container);
          if (firstMark && !location.hash) {
            requestAnimationFrame(() => {
              firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
          }
        }
      }
    }

    const searchTriggers = document.querySelectorAll('[data-console-search], [data-console-search-compact]');
    if (!searchTriggers.length) return;
    const openSearch = searchTriggers[0];
    const searchConfig = document.querySelector('[data-console-search]') || openSearch;
    const suite = new URL(searchConfig.dataset.suiteRoot || '/', location.href);
    const syscallRoot = searchConfig.dataset.syscallRoot
      ? new URL(searchConfig.dataset.syscallRoot, location.href)
      : new URL('syscall/', suite);
    const pinAtlasRoot = searchConfig.dataset.pinAtlasRoot
      ? new URL(searchConfig.dataset.pinAtlasRoot, location.href)
      : new URL('pin-atlas/', suite);
    const guidesRoot = searchConfig.dataset.guidesRoot
      ? new URL(searchConfig.dataset.guidesRoot, location.href)
      : new URL('kilavuzlar/', suite);
    const execmapRoot = new URL('execmap/', suite);
    const dialog = document.createElement('dialog');
    dialog.className = 'console-search';
    dialog.setAttribute('aria-labelledby', 'console-search-title');
    dialog.innerHTML = '<div class="console-search__heading"><h2 id="console-search-title"><span data-i18n="Zaryob / Search">Zaryob / Search</span></h2><button type="button" data-search-close aria-label="Close search" data-i18n-aria-label="Close search"><span data-i18n="Esc / Close">Esc / Close</span></button></div><label for="console-search-input"><span data-i18n="Posts, guides, system calls, pinouts and ELF analysis">Posts, guides, system calls, pinouts and ELF analysis</span></label><input id="console-search-input" type="search" placeholder="Docker, C++, write…" data-i18n-placeholder="Docker, C++, write…" autocomplete="off"><p class="console-search__status" role="status" aria-live="polite"></p><ul class="console-search__results"></ul>';
    document.body.append(dialog);
    applyLanguage(dialog);
    const input = dialog.querySelector('input');
    const results = dialog.querySelector('ul');
    const status = dialog.querySelector('[role="status"]');
    const indexes = new Map();
    let fallbackIndex;
    let execmapIndex;
    let request = 0;
    let debounce;
    const normalize = text => text.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i');
    const addResult = (title, url, type, language, excerpt, searchQuery = '') => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      const base = type === 'execmap/' ? execmapRoot : type === 'syscall/' ? syscallRoot : type === 'pin-atlas/' ? pinAtlasRoot : (type.startsWith('kılavuzlar') ? guidesRoot : suite);
      const address = new URL(url, base);
      if (!['http:', 'https:'].includes(address.protocol) || address.origin !== base.origin) return;
      address.searchParams.set('lang', root.lang);
      if (searchQuery && !address.searchParams.has('highlight') && !['syscall/', 'pin-atlas/'].includes(type)) {
        address.searchParams.set('highlight', searchQuery);
      }
      link.href = address.href;
      if (language) link.lang = language;
      const label = document.createElement('small');
      label.textContent = t(({ 'yazılar/': 'posts/', 'sayfalar/': 'pages/', 'kılavuzlar/': 'guides/', 'kılavuzlar/arşiv/': 'guides/archive/', 'pin-atlas/': 'pin-atlas/', 'syscall/': 'syscall/' })[type] || type);
      link.append(label, document.createTextNode(' ' + title));
      if (excerpt) {
        const snippet = document.createElement('small');
        snippet.textContent = excerpt;
        link.append(snippet);
      }
      item.append(link);
      results.append(item);
    };
    const loadFallback = () => fallbackIndex ||= Promise.allSettled(['search.json', 'kilavuzlar/search.json', 'syscall/search.json', 'pin-atlas/search.json'].map(async path => {
      const response = await fetch(new URL(path, suite));
      if (!response.ok) throw new Error('Search index unavailable');
      return response.json();
    }));
    const loadExecmap = () => execmapIndex ||= fetch(new URL('search.json', execmapRoot)).then(async response => {
      if (!response.ok) throw new Error('Execmap index unavailable');
      const records = await response.json();
      if (!Array.isArray(records)) throw new Error('Invalid execmap index');
      return records.filter(record => typeof record.title === 'string' && typeof record.url === 'string')
        .map(record => ({ ...record, type: 'execmap/' }));
    }).catch(error => { execmapIndex = undefined; throw error; });
    const matchRecords = (records, query) => {
      const terms = normalize(query).split(/\s+/).filter(Boolean);
      return records.filter(record => terms.every(term => normalize(`${record.title} ${record.description || ''} ${record.text || ''}`).includes(term)));
    };
    const loadIndex = async createInstance => {
      const language = root.lang;
      if (!indexes.has(language)) {
        const index = createInstance({ baseUrl: suite.href });
        const guides = new URL('kilavuzlar/', suite);
        indexes.set(language, index.mergeIndex(new URL('pagefind/', guides).href, {
          baseUrl: guides.href,
        }).then(() => index).catch(error => {
          index.destroy();
          throw error;
        }));
      }
      return indexes.get(language);
    };
    const addSyscallResult = query => {
      const syscall = new URL(syscallRoot);
      syscall.searchParams.set('q', query);
      syscall.searchParams.set('highlight', query);
      addResult(t('Search the syscall table: {query}', { query }), syscall.href, 'syscall/', undefined, undefined);
    };
    const addPinAtlasResult = query => {
      const pinAtlas = new URL(pinAtlasRoot);
      pinAtlas.searchParams.set('q', query);
      pinAtlas.searchParams.set('highlight', query);
      addResult(t('Search Pin Atlas: {query}', { query }), pinAtlas.href, 'pin-atlas/', undefined, undefined);
    };
    const showQuery = query => {
      results.replaceChildren();
      if (!query) {
        status.textContent = t('Search by title or full text.');
        return;
      }
      addSyscallResult(query);
      addPinAtlasResult(query);
      status.textContent = t('Searching…');
    };
    const render = async () => {
      const current = ++request;
      const query = input.value.trim();
      showQuery(query);
      if (!query) return;
      let matches;
      let message = '{count} content results';
      // Always search execmap, including when Pagefind is healthy.
      const execmapResults = loadExecmap().then(records => ({ records: matchRecords(records, query), failed: false }), () => ({ records: [], failed: true }));
      try {
        const { createInstance } = await import(new URL('pagefind/pagefind.js', suite).href);
        if (current !== request) return;
        const index = await loadIndex(createInstance);
        if (current !== request) return;
        if (index.options) {
          try { await index.options({ highlightParam: 'highlight' }); } catch {}
        }
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
        matches = matchRecords(items.flatMap(item => item.status === 'fulfilled' && Array.isArray(item.value) ? item.value : []), query).slice(0, 12);
        message = items.some(item => item.status === 'rejected')
          ? 'Some indexes could not be loaded. Available results are shown.'
          : 'Full-text search unavailable. Showing title and topic matches.';
      }
      const extra = await execmapResults;
      matches = [...extra.records.slice(0, 6), ...matches].slice(0, 12);
      if (extra.failed) message = 'Some indexes could not be loaded. Available results are shown.';
      if (current !== request) return;
      results.replaceChildren();
      for (const record of matches) addResult(record.title, record.url, record.type, record.lang, record.excerpt, query);
      addSyscallResult(query);
      addPinAtlasResult(query);
      status.textContent = t(message, { count: matches.length });
    };
    const showSearch = () => {
      if (dialog.open) return;
      dialog.showModal();
      input.focus();
      render();
    };
    searchTriggers.forEach(btn => btn.addEventListener('click', showSearch));
    dialog.querySelector('[data-search-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
      clearTimeout(debounce);
      request++;
      if (compactNavigation.matches && menu?.getAttribute('aria-expanded') !== 'true') menu.focus();
      else openSearch.focus();
    });
    dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
    dialog.addEventListener('keydown', event => {
      const links = Array.from(results.querySelectorAll('a'));
      if (!links.length) return;
      const activeIndex = links.indexOf(document.activeElement);

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        const next = activeIndex < links.length - 1 ? activeIndex + 1 : 0;
        links[next]?.focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (activeIndex > 0) {
          links[activeIndex - 1]?.focus();
        } else {
          input.focus();
        }
      } else if (event.key === 'Enter' && event.target === input) {
        event.preventDefault();
        links[0].click();
      }
    });
    input.addEventListener('input', () => {
      request++;
      clearTimeout(debounce);
      const query = input.value.trim();
      showQuery(query);
      if (query) debounce = setTimeout(render, 140);
    });
    window.addEventListener('zaryob:language', () => {
      setMenuOpen(menu?.getAttribute('aria-expanded') === 'true');
      if (dialog.open) render();
    });
    document.addEventListener('keydown', event => {
      if (event.defaultPrevented) return;
      const target = event.target;
      const editing = target instanceof HTMLElement && (target.matches('input,textarea,select') || target.isContentEditable);
      const isSlash = event.key === '/' && !editing && !event.ctrlKey && !event.metaKey && !event.altKey;
      if (isSlash && (document.querySelector('#pin-search') || document.querySelector('#home-search'))) return;
      const isSearchShortcut = isSlash ||
        ((event.key === 'k' || event.key === 'K') && (event.ctrlKey || event.metaKey));
      if (isSearchShortcut) { event.preventDefault(); showSearch(); }
    });
  });
})();
