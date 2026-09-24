# Vera Noir Atelier Website Implementation Plan

> **For agentic workers:** Inline execution in this session, as authorized by the user.

**Goal:** Recreate the only approved Stitch screen as a responsive React and TypeScript portfolio page.

**Architecture:** Keep page sections in focused React components, with gallery content in typed data. Use Tailwind CSS v4 through its Vite plugin and encode only tokens and layouts from the approved screen. Add a dependency-free server-render smoke test for page landmarks, approved copy, and gallery counts.

**Tech Stack:** React 19, TypeScript, Vite 8, Tailwind CSS 4, Node built-in test runner.

**Spec:** `DESIGN_SOURCE.md`

## Global Constraints

- Use only Stitch project `2022342490649938668`, screen `16482290136259727788`.
- Do not write to or edit Stitch.
- Preserve screen content, colors, typography, spacing, image proportions, and responsive assumptions in `DESIGN_SOURCE.md`.
- Do not invent markup for sections that are comments only in the approved screen HTML.
- Keep dependencies minimal; add only Tailwind CSS and its Vite integration.
- Use semantic HTML and separate reusable React components.

---

### Task 1: Add failing render smoke test

**Files:**
- Create: `tests/app.test.mjs`
- Modify: `package.json` to add a `test` script.

**Interfaces:**
- Consumes the existing `src/App.tsx` default export via Vite's SSR module loader.
- Produces a server-rendered HTML string for assertions; requires no test framework dependency.

- [x] Add test asserting the rendered app has a `<main>`, approved artist heading, gallery heading, six portfolio cards, three before/after cards, and footer landmark.
- [x] Run `npm test`; initial assertions failed on the starter screen as expected.

### Task 2: Configure Tailwind and design tokens

**Files:**
- Modify: `package.json`, `package-lock.json`, `vite.config.ts`, `src/index.css`, `index.html`.

**Interfaces:**
- Tailwind CSS v4 Vite plugin compiles utility classes imported from `src/index.css`.
- CSS theme exposes screen token colors, typography, spacing, radii, and shadows.

- [x] Add only `tailwindcss` and `@tailwindcss/vite` as direct dependencies.
- [x] Configure Tailwind Vite plugin and import Tailwind CSS.
- [x] Add screen token theme and Playfair Display, Plus Jakarta Sans, and Material Symbols font declarations.
- [x] Remove starter-page reset/theme styles that conflict with approved screen.

### Task 3: Add approved page components and data

**Files:**
- Modify: `src/App.tsx`.
- Create: `src/data/portfolio.ts`, `src/components/SiteHeader.tsx`, `src/components/HeroSection.tsx`, `src/components/PortfolioSection.tsx`, `src/components/BeforeAfterSection.tsx`, `src/components/SiteFooter.tsx`.
- Delete or stop importing: starter-only `src/App.css` and starter image/logo assets.

**Interfaces:**
- `portfolioItems` and `beforeAfterItems` provide screen copy, category IDs, image URLs, and alt text.
- `PortfolioSection` owns selected filter state and renders `PortfolioCard` items.
- `App` composes an empty styled header, semantic main, the screen's rendered sections, and footer.

- [x] Implement only hero, portfolio, static before/after comparisons, and footer elements present in the approved HTML.
- [x] Match screen breakpoints, widths, copy, image aspect ratios, controls, shadows, and responsive grid behavior.
- [x] Add accessible labels and keyboard-visible focus styles without adding new visible elements.
- [x] Re-run `npm test`; all assertions passed.

### Task 4: Verify app

**Files:** No additional files.

**Interfaces:**
- `npm run lint`, `npx tsc -b`, and `npm run build` verify source.
- `npm run dev -- --host 127.0.0.1` exposes app for local smoke and visual review.

- [x] Run test, lint, TypeScript, and production build checks.
- [x] Run Vite app and inspect rendered page at desktop and mobile widths.
- [x] Fix responsive title and logo-loading issues, then repeat relevant checks.
