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
    // Interface language. <html lang> describes the page content and is only the fallback
    // when no language adapter is loaded; fallback labels are the English source strings.
    const uiLanguage = () => window.ZaryobI18n?.language || root.dataset.uiLanguage || root.lang;
    const labelLanguage = () => window.ZaryobI18n ? uiLanguage() : 'en';
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
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
      // One panel at a time: the open menu replaces an open project list.
      if (open) dropdowns?.forEach(dropdown => { if (dropdown.open) closeDropdown(dropdown); });
      updateScrollLock();
    };
    menu?.addEventListener('click', () => {
      setMenuOpen(menu.getAttribute('aria-expanded') !== 'true');
    });
    // Keep scroll-padding-top equal to the sticky header's real height, which changes
    // with text size, wrapping and viewport width.
    const header = document.querySelector('.console-header');
    if (header && 'ResizeObserver' in window) {
      const measureHeader = () => {
        if (root.classList.contains('console-scroll-locked')) placePanel();
        const position = getComputedStyle(header).position;
        const height = position === 'sticky' || position === 'fixed' ? Math.ceil(header.getBoundingClientRect().height) : 0;
        root.style.setProperty('--console-header-height', `${height}px`);
      };
      measureHeader();
      new ResizeObserver(measureHeader).observe(header);
    }
    // On compact screens an open menu or project list is a panel that fills the viewport
    // under the header. The page behind it keeps its place and does not scroll.
    let lockedScroll = null;
    function placePanel() {
      const top = header ? Math.max(0, Math.round(header.getBoundingClientRect().bottom)) : 0;
      root.style.setProperty('--console-panel-top', `${top}px`);
    }
    function updateScrollLock() {
      const lock = compactNavigation.matches && (menu?.getAttribute('aria-expanded') === 'true'
        || dropdowns.some(dropdown => dropdown.open && dropdown.matches('[data-console-projects]')));
      if (lock) placePanel();
      if (lock === root.classList.contains('console-scroll-locked')) return;
      if (lock) {
        lockedScroll = window.scrollY;
        // Keep the width the scrollbar used so nothing shifts sideways.
        root.style.setProperty('--console-scrollbar-width', `${Math.max(0, window.innerWidth - root.clientWidth)}px`);
        root.classList.add('console-scroll-locked');
      } else {
        root.classList.remove('console-scroll-locked');
        root.style.removeProperty('--console-scrollbar-width');
        if (lockedScroll !== null && Math.abs(window.scrollY - lockedScroll) > 1) window.scrollTo({ top: lockedScroll, behavior: 'instant' });
        lockedScroll = null;
      }
    }
    window.addEventListener('resize', () => { if (root.classList.contains('console-scroll-locked')) placePanel(); });
    const dropdowns = [...document.querySelectorAll('[data-console-categories], [data-console-projects]')];
    const closeDropdown = (dropdown, restoreFocus = false) => {
      dropdown.open = false;
      dropdown.querySelector('summary').setAttribute('aria-expanded', 'false');
      updateScrollLock();
      if (restoreFocus) dropdown.querySelector('summary').focus();
    };
    dropdowns.forEach((dropdown, index) => {
      const projectPath = dropdown.querySelector('.console-project-path');
      if (projectPath) {
        // The mobile path may be ellipsized; keep its full text as context
        // without replacing the translated action name or other descriptions.
        projectPath.id ||= `console-project-context-${index}`;
        const summary = dropdown.querySelector('summary');
        const descriptions = new Set((summary.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean));
        descriptions.add(projectPath.id);
        summary.setAttribute('aria-describedby', [...descriptions].join(' '));
      }
      const updateDropdown = () => {
        dropdown.querySelector('summary').setAttribute('aria-expanded', String(dropdown.open));
        if (dropdown.open) dropdowns.forEach(other => { if (other !== dropdown && other.open) closeDropdown(other); });
        if (dropdown.open && compactNavigation.matches && dropdown.matches('[data-console-projects]') && menu?.getAttribute('aria-expanded') === 'true') setMenuOpen(false);
        updateScrollLock();
      };
      updateDropdown();
      dropdown.addEventListener('toggle', updateDropdown);
      dropdown.addEventListener('focusout', event => {
        // Safari can omit the next focus target during a tap. Let the
        // outside-click handler close the menu after the link activates.
        if (event.relatedTarget && !dropdown.contains(event.relatedTarget)) closeDropdown(dropdown);
      });
    });
    navigation?.addEventListener('focusout', event => {
      // Tabbing past the end of the open panel would reach controls hidden behind it.
      const next = event.relatedTarget;
      if (compactNavigation.matches && menu?.getAttribute('aria-expanded') === 'true' && next
        && !next.closest('.console-header, dialog')) setMenuOpen(false);
    });
    compactNavigation.addEventListener('change', () => {
      const restoreFocus = compactNavigation.matches && navigation?.contains(document.activeElement);
      setMenuOpen(false);
      dropdowns.forEach(dropdown => closeDropdown(dropdown));
      if (restoreFocus) menu?.focus();
    });
    document.addEventListener('click', event => {
      // A tap on an open panel's empty ground counts as outside the menu.
      const ground = compactNavigation.matches && event.target.matches?.('.console-project-menu, .console-nav');
      dropdowns.forEach(dropdown => {
        if (dropdown.open && (!dropdown.contains(event.target) || (ground && dropdown.matches('[data-console-projects]')))) closeDropdown(dropdown);
      });
      if (compactNavigation.matches && menu?.getAttribute('aria-expanded') === 'true' && (!event.target.closest('.console-header') || event.target === navigation)) setMenuOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || document.querySelector('dialog[open]')) return;
      const dropdown = dropdowns.find(item => item.open);
      if (dropdown) {
        closeDropdown(dropdown, true);
      } else if (compactNavigation.matches && menu?.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menu?.focus();
      }
    });

    let copyStatus;
    const announce = message => {
      if (!copyStatus) {
        copyStatus = document.createElement('p');
        copyStatus.className = 'console-sr-only';
        copyStatus.setAttribute('role', 'status');
        copyStatus.setAttribute('aria-live', 'polite');
        document.body.append(copyStatus);
      }
      copyStatus.lang = labelLanguage();
      copyStatus.textContent = '';
      // Clear first so a repeated message is announced again.
      setTimeout(() => { copyStatus.textContent = message; }, 50);
    };
    document.querySelectorAll('pre > code').forEach(code => {
      const pre = code.parentElement;
      const wrapper = document.createElement('div');
      wrapper.className = 'console-code';
      if (pre.hasAttribute('data-console-declaration')) wrapper.classList.add('console-declaration');
      pre.before(wrapper);
      wrapper.append(pre);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'console-copy';
      const label = t('Copy');
      button.dataset.i18n = 'Copy';
      button.dataset.i18nAriaLabel = 'Copy code';
      button.textContent = label;
      button.lang = labelLanguage();
      button.setAttribute('aria-label', t('Copy code'));
      button.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.textContent);
          button.textContent = t('Copied');
        } catch { button.textContent = t('Select code to copy'); }
        announce(button.textContent);
        setTimeout(() => { button.textContent = t('Copy'); }, 2200);
      });
      wrapper.append(button);
    });

    // A code block that scrolls sideways shows a fade at each edge that hides code,
    // and a toggle that wraps its lines instead. Site scripts may still move the copy
    // button into their own code bar on DOMContentLoaded, so place the toggle afterwards.
    const codeBlocks = [...document.querySelectorAll('.console-code')];
    const codeCues = [];
    codeBlocks.forEach((wrapper, index) => {
      const pre = wrapper.querySelector(':scope > pre');
      if (!pre) return;
      const fades = ['start', 'end'].map(side => {
        const fade = document.createElement('span');
        fade.className = `console-code-fade console-code-fade--${side}`;
        fade.setAttribute('aria-hidden', 'true');
        return fade;
      });
      pre.after(...fades);
      let toggle = null;
      let wrapped = false;
      let inRow = false;
      const copy = wrapper.querySelector('.console-copy');
      // The element that keeps Copy in view while a tall block scrolls past: the group of
      // Copy and the toggle, a site code bar that holds Copy, or a site header above the block.
      let sticky = null;
      let rail = null;
      const place = () => {
        const left = pre.offsetLeft + pre.clientLeft;
        const top = pre.offsetTop + pre.clientTop;
        // A sticky line-number gutter stays visible; the start fade begins after it.
        const gutter = pre.firstElementChild;
        const gutterWidth = gutter && gutter.tagName !== 'CODE' && getComputedStyle(gutter).position === 'sticky'
          ? gutter.offsetWidth : 0;
        wrapper.style.setProperty('--console-code-top', `${top}px`);
        wrapper.style.setProperty('--console-code-height', `${pre.clientHeight}px`);
        wrapper.style.setProperty('--console-code-left', `${left + gutterWidth}px`);
        wrapper.style.setProperty('--console-code-right', `${wrapper.clientWidth - left - pre.clientWidth}px`);
        if (toggle && inRow && copy && !toggle.hidden) {
          // With large text the pair may not fit side by side: the toggle wraps under Copy.
          const group = copy.parentElement;
          if (group.offsetHeight > copy.offsetHeight + 2) wrapper.style.setProperty('--console-code-row', `${group.offsetTop + group.offsetHeight + 8}px`);
          else wrapper.style.removeProperty('--console-code-row');
        }
        if (sticky) {
          const span = rail ? sticky.parentElement : wrapper;
          if (rail) {
            wrapper.style.setProperty('--console-code-head-height', `${sticky.offsetHeight}px`);
            // The rail may follow the header past the block's end, but Copy must stay inside the block.
            const after = Math.max(0, span.getBoundingClientRect().bottom - wrapper.getBoundingClientRect().bottom);
            const overhang = Math.max(0, copy.offsetTop + copy.offsetHeight);
            wrapper.style.setProperty('--console-code-after', `${after - overhang}px`);
          }
          const tall = span.offsetHeight > root.clientHeight - (parseFloat(root.style.getPropertyValue('--console-header-height')) || 0);
          span.classList.toggle('console-code-span--tall', tall);
          wrapper.classList.toggle('console-code--tall', tall);
          float();
        }
      };
      // While stuck below its resting place the floating element gets a shadow.
      const float = () => {
        if (!sticky) return;
        const span = rail ? sticky.parentElement : wrapper;
        const rest = span.getBoundingClientRect().top + parseFloat(getComputedStyle(sticky).marginTop);
        sticky.toggleAttribute('data-console-floating', wrapper.classList.contains('console-code--tall') && sticky.getBoundingClientRect().top > rest + 0.5);
      };
      const update = () => {
        const hidden = pre.scrollWidth - pre.clientWidth;
        // A few pixels are the end padding, not hidden code.
        const overflow = hidden > 4;
        wrapper.classList.toggle('console-code--fade-start', overflow && pre.scrollLeft > 1);
        wrapper.classList.toggle('console-code--fade-end', overflow && pre.scrollLeft < hidden - 1);
        if (toggle && !wrapped) {
          toggle.hidden = !overflow;
          wrapper.classList.toggle('console-code--actions-row', inRow && overflow);
        }
        place();
      };
      if (!wrapper.classList.contains('console-declaration')) {
        toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'console-code-toggle';
        toggle.hidden = true;
        toggle.dataset.i18n = '↔ wrap';
        toggle.dataset.i18nAriaLabel = 'Wrap long lines';
        toggle.textContent = t('↔ wrap');
        toggle.lang = labelLanguage();
        toggle.setAttribute('aria-label', t('Wrap long lines'));
        toggle.setAttribute('aria-pressed', 'false');
        pre.id ||= `console-code-${index + 1}`;
        toggle.setAttribute('aria-controls', pre.id);
        toggle.addEventListener('click', () => {
          wrapped = !wrapped;
          toggle.setAttribute('aria-pressed', String(wrapped));
          wrapper.classList.toggle('console-code--wrapped', wrapped);
          update();
        });
      }
      codeCues.push({ wrapper, pre, copy, update, float, place: () => {
        if (!toggle) return;
        const head = wrapper.previousElementSibling;
        if (copy && copy.parentElement !== wrapper) {
          // The site moved Copy into its own code bar: sit next to it there.
          toggle.classList.add('console-code-toggle--bar');
          copy.before(toggle);
          if (copy.parentElement.parentElement === wrapper) {
            sticky = copy.parentElement;
            sticky.dataset.consoleCode = 'bar';
          }
        } else if (copy && head && getComputedStyle(copy).position === 'absolute' && parseFloat(getComputedStyle(copy).top) < 0) {
          // Copy floats over the site's code header: join that header.
          toggle.classList.add('console-code-toggle--bar');
          head.append(toggle);
          // The header sticks within its own container; Copy rides on a rail that follows it.
          if (head.parentElement.firstElementChild === head) {
            sticky = head;
            head.dataset.consoleCode = 'head';
            rail = document.createElement('div');
            rail.className = 'console-code-actions console-code-actions--rail';
            copy.before(rail);
            rail.append(copy);
            wrapper.classList.add('console-code--grouped');
          }
        } else {
          // Copy sits inside the block: both form one group above the first line.
          inRow = Boolean(copy);
          toggle.classList.toggle('console-code-toggle--row', inRow);
          if (copy) {
            sticky = document.createElement('div');
            sticky.className = 'console-code-actions';
            copy.before(sticky);
            sticky.append(toggle, copy);
            wrapper.classList.add('console-code--grouped');
          } else wrapper.append(toggle);
        }
      } });
      pre.addEventListener('scroll', update, { passive: true });
    });
    setTimeout(() => {
      codeCues.forEach(cue => { cue.place(); cue.update(); });
      if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(entries => entries.forEach(entry => codeCues.find(cue => cue.pre === entry.target || cue.copy === entry.target)?.update()));
        codeCues.forEach(cue => { observer.observe(cue.pre); if (cue.copy) observer.observe(cue.copy); });
      }
      document.fonts?.ready.then(() => codeCues.forEach(cue => cue.update()));
      let floatFrame = 0;
      const floatAll = () => { floatFrame ||= requestAnimationFrame(() => { floatFrame = 0; codeCues.forEach(cue => cue.float()); }); };
      addEventListener('scroll', floatAll, { passive: true });
      addEventListener('resize', () => codeCues.forEach(cue => cue.update()), { passive: true });
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
            if (['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'SELECT', 'NOSCRIPT', 'DIALOG'].includes(node.nodeName)) return;
            // SVG and MathML report lowercase names and cannot hold an HTML <mark>.
            if (node.nodeType === Node.ELEMENT_NODE && node.namespaceURI !== 'http://www.w3.org/1999/xhtml') return;
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
              firstMark.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'center' });
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
    const wireRoot = new URL(searchConfig.dataset.wireRoot || 'wire/', suite);
    const dialog = document.createElement('dialog');
    dialog.className = 'console-search';
    dialog.setAttribute('aria-labelledby', 'console-search-title');
    dialog.innerHTML = '<div class="console-search__heading"><h2 id="console-search-title"><span data-i18n="Zaryob / Search">Zaryob / Search</span></h2><button type="button" data-search-close aria-label="Close search" data-i18n-aria-label="Close search"><span data-i18n="Esc / Close">Esc / Close</span></button></div><label for="console-search-input"><span data-i18n="Posts, guides, system calls, pinouts, ELF analysis and protocols">Posts, guides, system calls, pinouts, ELF analysis and protocols</span></label><input id="console-search-input" type="search" placeholder="Docker, C++, write…" data-i18n-placeholder="Docker, C++, write…" autocomplete="off"><p class="console-search__status" role="status" aria-live="polite"></p><ul class="console-search__results"></ul>';
    document.body.append(dialog);
    applyLanguage(dialog);
    const input = dialog.querySelector('input');
    const results = dialog.querySelector('ul');
    const status = dialog.querySelector('[role="status"]');
    const indexes = new Map();
    let fallbackIndex;
    const adapterIndexes = new Map();
    let request = 0;
    let debounce;
    let settled = false; // The list shows the finished results for the current query.
    let openFirst = false; // Enter was pressed before those results arrived.
    const normalize = text => text.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i');
    const addResult = (title, url, type, language, excerpt, searchQuery = '') => {
      // Index records come from other repositories; skip malformed ones instead of failing the search.
      if (typeof title !== 'string' || typeof url !== 'string') return;
      if (typeof type !== 'string') type = 'sayfalar/';
      const item = document.createElement('li');
      const link = document.createElement('a');
      const base = type === 'wire/' ? wireRoot : type === 'execmap/' ? execmapRoot : type === 'syscall/' ? syscallRoot : type === 'pin-atlas/' ? pinAtlasRoot : (type.startsWith('kılavuzlar') ? guidesRoot : suite);
      let address;
      try { address = new URL(url, base); } catch { return; }
      if (!['http:', 'https:'].includes(address.protocol) || address.origin !== base.origin) return;
      // Carry only an explicit preference; a browser-language guess must not become one downstream.
      const preferred = window.ZaryobLanguage ? (window.ZaryobLanguage.explicit ? uiLanguage() : '') : root.lang;
      if (preferred) address.searchParams.set('lang', preferred);
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
      return true;
    };
    const loadFallback = () => fallbackIndex ||= Promise.allSettled(['search.json', 'kilavuzlar/search.json', 'syscall/search.json', 'pin-atlas/search.json'].map(async path => {
      const response = await fetch(new URL(path, suite));
      if (!response.ok) throw new Error('Search index unavailable');
      return response.json();
    }));
    const loadAdapter = (type, base) => {
      if (!adapterIndexes.has(type)) adapterIndexes.set(type, fetch(new URL('search.json', base)).then(async response => {
        if (!response.ok) throw new Error('Search adapter unavailable');
        const records = await response.json();
        if (!Array.isArray(records)) throw new Error('Invalid search adapter');
        return records.filter(record => record && typeof record.title === 'string' && typeof record.url === 'string')
          .map(record => ({ ...record, type }));
      }).catch(error => { adapterIndexes.delete(type); throw error; }));
      return adapterIndexes.get(type);
    };
    const matchRecords = (records, query) => {
      const terms = normalize(query).split(/\s+/).filter(Boolean);
      return records.filter(record => record && typeof record === 'object' && terms.every(term => normalize(`${record.title} ${record.description || ''} ${record.text || ''}`).includes(term)));
    };
    const loadIndex = async createInstance => {
      const language = uiLanguage();
      if (!indexes.has(language)) {
        // Pagefind reads its index language from <html lang> while createInstance runs and
        // has no option for it. Search follows the interface language, so present that
        // for this synchronous call only and put the content language straight back.
        const contentLanguage = root.getAttribute('lang');
        let index;
        try {
          if (language) root.lang = language;
          index = createInstance({ baseUrl: suite.href });
        } finally {
          if (contentLanguage === null) root.removeAttribute('lang');
          else root.setAttribute('lang', contentLanguage);
        }
        const guides = new URL('kilavuzlar/', suite);
        indexes.set(language, index.mergeIndex(new URL('pagefind/', guides).href, {
          baseUrl: guides.href, ...(language ? { language } : {}),
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
      settled = false;
      dialog.lang = labelLanguage();
      results.replaceChildren();
      if (!query) {
        status.textContent = t('Search by title or full text.');
        return;
      }
      addSyscallResult(query);
      addPinAtlasResult(query);
      status.textContent = t('Searching…');
    };
    const search = async current => {
      const query = input.value.trim();
      showQuery(query);
      if (!query) return;
      let matches;
      let message = '{count} content results';
      // Node-built sites have independent indexes, even when Pagefind is healthy.
      const adapterResults = Promise.all([['execmap/', execmapRoot], ['wire/', wireRoot]].map(([type, base]) =>
        loadAdapter(type, base).then(records => ({ records: matchRecords(records, query), failed: false }))
          .catch(() => ({ records: [], failed: true }))));
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
          lang: uiLanguage(),
        }));
      } catch {
        const items = await loadFallback();
        matches = matchRecords(items.flatMap(item => item.status === 'fulfilled' && Array.isArray(item.value) ? item.value : []), query).slice(0, 12);
        message = items.some(item => item.status === 'rejected')
          ? 'Some indexes could not be loaded. Available results are shown.'
          : 'Full-text search unavailable. Showing title and topic matches.';
      }
      const adapters = await adapterResults;
      // Interleave adapters so either site can contribute without displacing all Pagefind matches.
      const extra = [];
      for (let i = 0; i < 6; i++) for (const adapter of adapters) {
        if (adapter.records[i]) extra.push(adapter.records[i]);
      }
      matches = [...extra.slice(0, 6), ...matches].slice(0, 12);
      if (adapters.some(adapter => adapter.failed)) message = 'Some indexes could not be loaded. Available results are shown.';
      if (current !== request) return;
      results.replaceChildren();
      let count = 0;
      for (const record of matches) if (addResult(record.title, record.url, record.type, record.lang, record.excerpt, query)) count++;
      addSyscallResult(query);
      addPinAtlasResult(query);
      status.textContent = t(message, { count });
      settled = true;
      if (openFirst) results.querySelector('a')?.click();
      openFirst = false;
    };
    const render = async () => {
      const current = ++request;
      try {
        await search(current);
      } catch {
        // Never leave the dialog on "Searching…"; the per-site query links stay usable.
        if (current !== request) return;
        openFirst = false;
        status.textContent = t('Search failed. Try again.');
      }
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
      openFirst = false;
      if (menu && compactNavigation.matches && menu.getAttribute('aria-expanded') !== 'true') menu.focus();
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
        if (settled) { links[0].click(); return; }
        // The list still holds the placeholder links of an unfinished query:
        // search now and open the first real result when it arrives.
        clearTimeout(debounce);
        const waiting = openFirst;
        openFirst = true;
        if (!waiting) render();
      }
    });
    input.addEventListener('input', () => {
      request++;
      clearTimeout(debounce);
      openFirst = false;
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
