# Zaryob shared interface — current visual QA

Date: 2026-11-02

final result: passed

## 2026-11-03 — English fixed pages and guides

Current scope follows the user's choice: fixed pages and guides first; new blog
body translations are deferred. Added 13 English fixed/index editions, complete
English detail data for all 27 projects, and 40 English guide/index/maintenance
Markdown documents plus the 404 page. All 288 fenced samples match their Turkish
sources exactly. Reviewed/status metadata is preserved; scopes and archive warnings
are translated. Historical source inaccuracies are identified as historical rather
than silently presented as verified current instructions. No guide commands were
executed during translation.

Existing-language metadata was corrected for the already-English 2021 GitHub post;
its body was not rewritten. The English posts index lists existing English editions.
English categories without translated articles offer an explicit Turkish link.

The shared runtime now follows a real content counterpart on initial load as well
as on selector changes. Explicit language links retain ?lang= to avoid bouncing
back to a stored preference. Project fragments survive language navigation.
Paginated post indexes no longer generate duplicate hreflang entries. The guide
tree contains the current document language only. The old archive's /linux/ aliases
were removed because the new maintained Linux index owns those routes.

All three builds/output checks pass: main 110 HTML pages; guides 113 pages,
4436 local links and 31 redirects; syscall output/source-archive check passes.
Shared vocabulary/alternate checks pass across 224 HTML pages, with 121 pages
carrying language alternates. Seven runtime tests pass. Content coverage checks
pass for 41 guide/error-page pairs and all 13 fixed-page counterparts.

Browser checks confirm translated About/Projects/Bookshelf pages, all 27 project
entries, guide index/tree navigation, CMake TR→EN→TR switching, direct English
links under a Turkish preference, archive warnings, missing-English-category copy,
and project-anchor preservation. The 390px English guide has no horizontal overflow.
No browser console errors were observed. No actionable P0/P1/P2 findings remain.

Evidence (desktop 1440 × 1024, mobile 390 × 844):
- English guide index: /Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/content-guides-en.png
- English CMake guide: /Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/content-cmake-en.png
- Mobile English guide: /Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/content-cmake-mobile-en.png
- Archive warning: /Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/content-archive-en.png
- Fixed pages: /Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/content-about-en.png, /Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/content-projects-en.png,
  /Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/content-bookshelf-en.png, /Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/content-home-en.png

Older sections below record previous revisions.


## Browser-language default

With no explicit URL or stored language preference, the primary browser language
(`navigator.languages[0]`, with navigator.language fallback) selects TR only for
Turkish language tags and EN for all others. Valid explicit/stored choices retain
precedence. Invalid/cleared storage returns to the browser-derived default.
Six runtime tests cover Turkish regional tags, non-Turkish and missing languages,
primary-language ordering, overrides, blocked/cleared storage and URL preservation.
All three builds, output checks, vocabulary validation and shared parity pass.
The visible selector and existing layout are unchanged from the screenshots below.


## Latest TR/EN interface and translation infrastructure

The shared header now includes a TR/EN selector, inside the expanded mobile menu.
The chosen interface language persists across the three same-origin sites and can
be shared explicitly with `?lang=tr` / `?lang=en`. Theme and language are independent.
The compact header breakpoint is now 1180px to accommodate the extra control.

256 canonical UI strings have Turkish translations. Shared menus, theme options,
search/copy controls, date/read-time metadata, homepage labels and short featured
project summaries are localized. Syscall static documentation, table controls,
comparison/status text, detail labels and example explanations are localized;
source JSON, C declarations and downloadable C templates remain unchanged.

Four existing TR/EN article pairs are linked by translation_key, lang and static
hreflang alternates. The language selector opens the actual counterpart when one
exists. Original article/guide bodies retain their own lang; a missing-translation
notice appears when the interface language differs. Long documents and other
editorial bodies were deliberately retained in their original language, consistent
with the requested first phase. This is UI localization plus content infrastructure,
not a claim that all existing documents have been translated.

Browser verification passed for cross-site language persistence; real TR/EN article
navigation; honest missing-translation fallback; English Docker search results;
and Syscall language switching while retaining loongarch64, Linux v7.3, comparison
v6.18, query write and the expanded write detail. Both themes were switched live
without changing language. Responsive checks at 320, 390, 768, 1180, 1181, 1320 and
1440px found no document overflow. No browser console errors were observed.

[P2, resolved] A newly introduced local apply function name initially shadowed the
theme updater. Renaming the localization callback restored live theme switching;
DOM checks confirmed dark → light independently of EN → TR selection.

Evidence (desktop 1440 × 1024; mobile 390 × 844):
- TR/EN mobile states together: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/locale-mobile-comparison.png`.
- Syscall TR / EN: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/locale-syscall-tr.png`, `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/locale-syscall-en.png`.
- Homepage and guide UI: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/locale-home-en.png`, `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/locale-guides-en.png`.
- Existing English article and untranslated article fallback: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/locale-article-en.png`, `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/locale-untranslated-en.png`.

All three builds pass their existing output checks. Vocabulary/placeholder/variable
and reciprocal alternate checks pass on 152 generated HTML pages, including eight
translated article pages. Three new runtime tests pass (URL preference, disabled
storage with filter preservation, registered content counterpart navigation).
The existing Syscall suite passes 10 Node and 7 Python tests. Shared-file parity,
JavaScript syntax and whitespace checks pass. No actionable P0/P1/P2 findings remain
for this scope. Earlier sections record previous revisions.

## Latest responsive navigation correction

The mobile header now shows only `zaryob:~$` and the existing licensed Font
Awesome bars icon. Its accessible name/expanded state remain available without
visible “Menü” text. At 1040px and below, navigation links, category disclosure,
search and theme selection share one expandable panel. Above 1040px the header
returns to its horizontal layout. Long expanded categories scroll within the panel.

Browser checks passed at 320, 768, 1024, 1041, 1180 and 1440px with no document
overflow. All three sites were inspected at 320px with search inside the shared
panel. Light/dark mobile screenshots were inspected. Search returned Docker
results; closing it restored focus to search when the panel was open, or the
hamburger when opened by `/` with the panel closed. Escape closed the panel and
restored focus. An expanded 320 × 640 category panel still allowed opening search.

Current evidence (mobile images are 390 × 844, unscaled in the comparison):
- Previous and revised mobile states together: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/mobile-nav-comparison.png`.
- Closed/open dark: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/mobile-nav-closed.png`, `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/mobile-nav-open.png`.
- Open light: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/mobile-nav-open-light.png`.
- Desktop 1440 × 844: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/mobile-nav-desktop.png`.
- Guides/Syscall 320 × 640: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/mobile-nav-guides.png`, `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/mobile-nav-syscall.png`.

All three builds and existing output/link checks pass, together with shared-file
parity, JavaScript syntax and whitespace checks. No actionable P0/P1/P2 findings
remain for this scoped revision. Earlier sections below record previous revisions.

## Latest label/category correction

The latest request standardizes visible menu/action/section labels to initial
capitals, enables the previously plain-text Genel category, and removes the
redundant Yazılar eyebrow from post headers. Post titles were inspected: their
first alphabetic letters were already uppercase, so editorial titles were not
rewritten. The literal `zaryob:~$` identity and source paths remain intentional.

Genel now has a real `/genel/` category page and canonical topic mapping. All
61 matching posts have linked Genel metadata. The dropdown and topic strip use
the existing active/link styling; the selected topic now has aria-current and
a visible accent frame. A browser check followed the menu to the category page,
opened its first post, and followed the post's Genel link back. Light/dark and
390px mobile states passed with no document overflow or console errors.

Current evidence (before uses the verified 1440 × 1024 prior revision; after is
1440 × 1024 at the same desktop viewport; a transitional 720px capture was excluded):
- Before/after together: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/labels-comparison.png`.
- Simplified post: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/labels-post-after.png`.
- Linked Genel in the photo header: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/labels-post-genel-after.png`.
- Selected Genel: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/labels-genel-dark.png`, `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/labels-genel-light.png`.
- Mobile selected category: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/labels-genel-mobile.png`.

All three builds and their existing link/media checks pass. Main output is now
94 HTML pages. All 209 rendered card/header metadata pairs match, and none of
those post headers contains the removed eyebrow. Shared-file parity, JavaScript
syntax and whitespace checks pass. No P0/P1/P2 findings remain in this revision.
Older captures below are retained as the earlier revision's comparison history.

## Current scope and visual truth

The shared console system retains the selected IBM Plex Mono / amber / dark-light
foundation. The current user revision restores the published site's icon language,
writing/category disclosure and photographic headers, centers titles, unifies
post metadata, and requests independently implemented thin rectangular controls
informed by syscall.sh's appearance.

Visual source captures:
- Published photo/header and icons: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/zaryob-live-icons-reference.png`.
- Published category disclosure: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/zaryob-live-dropdown-reference.png`.
- Published post header: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/zaryob-live-post-reference.png`.
- Control appearance reference: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/syscallsh-button-reference.png`.

All source desktop captures are 1440 × 1024 pixels. Final desktop captures are
1440 × 1024 CSS pixels and screenshot pixels (1:1 screenshot/CSS density), with
no device or browser frame. The source and implementation are shown together in:
- Full-view comparison: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-comparison.png`.
- Focused icon/dropdown comparison: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-menu-comparison.png`.

The full-view comparison preserves both complete screens. The focused view keeps
each dropdown with its own header context. Layout alignment and text size differ
from the published source intentionally: the current system keeps the selected
mono typography, shared navigation order, centered headings and console palette.
This is an adaptation, not a pixel clone of the old site or syscall.sh.

## Findings and history

[P2, resolved] The browser initially exposed the styled native category summary
as a generic accessibility node. The summary now has an explicit button role,
controls relationship and synchronized expanded state. Native details behavior
remains; click/Enter opens it, Escape closes it and restores focus, and clicking
outside dismisses it. Post-fix browser checks reported expanded=true, eight
category links, successful navigation, and SUMMARY focus after Escape.

Final full-view and focused comparisons have no actionable P0/P1/P2 findings.
The photo treatment, white header text, accent icons and metadata remain legible
in both themes. The mobile title and metadata wrap without page overflow.

## Required fidelity surfaces

- Typography: local IBM Plex Mono remains consistent; icon-bearing navigation,
  body text, headings, controls and metadata keep the shared hierarchy. Titles are
  centered. Post and list metadata use the same include, type scale, category
  labels, icons, date format and reading duration.
- Spacing/layout: native category disclosure anchors to Yazılar on desktop and
  expands inline inside the mobile menu. Photo headers use a real image element,
  cover cropping and a flat dark overlay; title/metadata are centered above it.
  Long article images preserve natural aspect ratios; list thumbnails use a
  consistent crop. No generic rounded panels or decorative image substitutes.
- Colors/tokens: the original shared dark/light palette remains. New controls use
  independently authored one-pixel amber borders, square corners, restrained
  fills, hover/active/focus/disabled states and matching selects/search inputs.
  syscall.sh supplied a visual reference only; no source CSS or image assets were
  copied from that service.
- Images/icons: navigation uses the site's existing Font Awesome icon language.
  Calendar/clock/folder/chevron/search shapes come from the already bundled
  licensed Font Awesome assets. Images are existing local article/category/home
  assets. All 253 archived image records still pass original presence/hash checks.
- Copy/content: article text and guide provenance notices remain unchanged. Real
  post categories, dates and duration replace independent header/list formatting.
  Unknown categories render as labels instead of fabricated destination links.
  Source/API/data/license links and syscall columns remain intact.

## Current implementation evidence

- Home: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-home-dark.png`, `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-home-light.png`.
- Post, centered photo/header: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-post-dark.png`,
  `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-post-light.png`.
- Post + open category disclosure: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-post-dropdown-dark.png`.
- Category page: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-category-light.png`.
- Guide: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-guides-dark.png`.
- Syscall controls: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-syscall-dark.png`,
  `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-syscall-light.png`.
- 390 × 844 mobile: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-menu-mobile-dark.png`,
  `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-post-mobile-dark.png`,
  `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-post-mobile-light.png`,
  `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-syscall-mobile.png`.
- 1024 × 768 tablet: `/Users/zaryob/.codex/visualizations/2026/11/02/01a19d61-046d-77a0-a6c2-9a31119d9d67/revision-post-tablet-light.png`.

## Checks completed

- All three Jekyll builds and existing generated-link checks pass.
- Main site: 93 HTML pages; 253 archived media records, 242 unique media files.
- Guides: 54 HTML pages, 29 redirects.
- 148 rendered post-card/header metadata pairs compared using the actual built
  HTML: category, date and duration text match in every pair.
- Shared theme/header/icon/category-data parity check passes across all repos.
- JavaScript syntax and whitespace checks pass.
- Existing syscall suite: 10 Node tests and 7 Python tests pass.
- Desktop and 390px mobile category disclosure: opens, closes, navigates correctly.
- Escape dismisses the disclosure and restores focus; its aria-expanded state
  follows the native open state.
- Theme changes preserve the photo header contrast and persist between sites.
- Syscall search and write detail still operate; the screenshot state uses x64,
  Linux v6.18 and exact query 1. All six argument columns remain available.
- No observed page console errors; no document overflow at desktop, 1024px tablet,
  or 390px mobile in the reviewed states.

## Intentional differences / remaining limits

The user-requested centered mono header differs from the original proportional,
left-aligned site. Photo headers remain dark in the light theme for stable photo
contrast. Only list thumbnails and header backgrounds crop; article illustrations
retain natural proportions. The menu uses native disclosure semantics instead of
reintroducing the old Bootstrap dropdown dependency. No exhaustive browser or
assistive-technology audit was performed. No files have been pushed or deployed.

## Implementation checklist

- [x] Shared icon navigation and real writing categories.
- [x] Photo headers and centered title/metadata.
- [x] One metadata component, verified against rendered pages.
- [x] Natural article imagery and consistent thumbnails.
- [x] Original thin-border control CSS in both themes.
- [x] Mobile/tablet/desktop and keyboard checks.
- [x] Combined full-view and focused visual comparison.
- [x] Existing builds, links, media and syscall tests pass.
