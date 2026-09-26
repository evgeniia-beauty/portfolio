# Design source: Vera Noir Atelier home page

## Approved source

- Stitch project: `2022342490649938668`
- Approved screen: `16482290136259727788`
- Screen title: `Главная — Vera Noir Atelier (с Футером)`
- Screen metadata: desktop, 2560 × 5502 px
- Source rule: this screen governs the visual design, subject to the current technical requirements below. Do not use another Stitch screen as a visual reference.

This document records details exposed by Stitch `get_screen` and the HTML attached to this exact screen. The screen screenshot link returned by Stitch, but its image endpoint responded with an HTTP 400 error in the available viewer. Visual measurements below therefore come from the screen's HTML classes, embedded Tailwind configuration, image elements, and metadata rather than pixel sampling. Where the HTML has only a section comment, no visual specification can be inferred.

## Current technical requirements

- The gallery has no category filters. Gallery items do not need category metadata.
- The before-and-after gallery renders all supplied entries. Supported sets contain 3, 4, or 6 photographs; the current set contains 6.
- The item title is the source of truth for the Russian image description. Correct spelling errors in visible titles.

## Page structure

1. **Fixed top header** — fixed, full-width, `z-50`; translucent surface background (`bg-surface/85`), backdrop blur, and soft shadow. The attached HTML contains an empty `<header>`; it does not expose header contents or navigation. Main content reserves 80 px above it.
2. **Hero** — warm editorial introduction. Left column contains an eyebrow, artist name, experience badge, description, portfolio/phone/email actions, and social links. Right column contains one square portrait image with a bottom gradient overlay and soft decorative shapes.
3. **Portfolio gallery** — section heading and six image cards. The original screen showed five category filters; current technical requirements omit them. Cards use a 3-column desktop grid, 2-column medium grid, and 1-column narrow grid.
4. **Before-and-after results** — the original screen showed three comparison cards. The current gallery displays all supplied composite photographs, with 3, 4, or 6 cards supported and 6 currently present. Cards retain the labels “До” and “После” and their titles.
5. **Services and transparent pricing** — comment only in attached HTML; no rendered markup or measurements are available.
6. **Reviews** — comment only in attached HTML; no rendered markup or measurements are available.
7. **Online booking and studio contacts** — comment only in attached HTML; no rendered markup or measurements are available.
8. **Footer** — separate full-width surface band with top border. Three desktop columns: brand summary, contact details, and social channels. Stacks to two columns at `sm` and one column on narrow screens.

An HTML comment also names a “Philosophy & About Master” section between hero and portfolio, but it has no markup. Do not invent this section from the comment.

## Visual rules

### Colors

Use the embedded semantic colors from this screen:

| Token | Value | Use shown in screen |
|---|---|---|
| `surface` / `background` | `#FCF9F3` | Main warm ivory canvas |
| `on-surface` | `#1C1C18` | Main body text |
| `on-surface-variant` | `#4F4441` | Supporting copy |
| `primary` | `#271711` | Strong text and primary button fill |
| `primary-container` | `#3E2B25` | Deep warm brown accent and gradient tint |
| `secondary` | `#6C5C47` | Labels, icons, and warm secondary accents |
| `secondary-fixed` | `#F6DFC4` | Pale champagne badge/decorative fills |
| `surface-container` | `#F0EEE8` | Secondary panels and controls |
| `surface-container-low` | `#F6F3ED` | Portfolio and comparison card surfaces |
| `surface-variant` | `#E5E2DC` | Fine borders and dividers |
| `outline` | `#817471` | Supporting outline token |

Other colors exist in the embedded theme map; use semantic tokens rather than scattering raw values through components. Keep the warm, low-contrast tonal layering shown here. No dark-mode variation is specified for this screen.

### Typography

- Headings: **Playfair Display**.
- Body, labels, and controls: **Plus Jakarta Sans**.
- `display-lg`: 56 px / 64 px, weight 400, tracking −0.02em.
- `display-lg-mobile`: 38 px / 46 px, weight 400, tracking −0.01em.
- `headline-lg`: 36 px / 44 px, weight 400, tracking −0.01em.
- `headline-lg-mobile`: 28 px / 36 px, weight 400.
- `headline-md`: 24 px / 32 px, weight 500.
- `headline-sm`: 20 px / 28 px, weight 500, tracking 0.01em.
- `body-lg`: 18 px / 28 px, weight 300, tracking 0.01em.
- `body-md`: 15 px / 24 px, weight 400.
- `body-sm`: 13 px / 20 px, weight 400, tracking 0.01em.
- `title-md`: 16 px / 24 px, weight 600.
- `label-md`: 12 px / 16 px, weight 500, tracking 0.08em.
- `label-sm`: 11 px / 14 px, weight 600, tracking 0.12em.
- Labels are commonly uppercase with expanded tracking. Keep Russian copy as supplied in the screen.

### Layout and spacing

- Main content and footer use centered `max-width: 1200px` containers.
- Horizontal padding: 20 px on narrow screens (`margin-mobile`), 48 px from `md` (`margin`).
- Spacing tokens: `space-xs` 4 px, `space-sm` 8 px, `space-md` 16 px, `space-lg` 28 px, `space-xl` 48 px. `gutter` is 24 px desktop and 16 px mobile.
- Main starts with 80 px top padding under the fixed header.
- Hero container adds 28 px top padding on narrow screens and 48 px at `lg`; desktop hero uses a 12-column grid with 7/5 content-to-image split and 48 px gap.
- Hero copy aligns left; portrait centers within its column. Portfolio intro aligns left. Comparison panel heading centers. Footer content aligns left.
- Preserve generous section separation. Portfolio and comparison sections each use 48 px vertical spacing; footer uses 48 px vertical padding.

### Corners, borders, and shadows

- Follow the screen's exact per-element corner classes. Embedded Tailwind config maps `rounded-lg` to 4 px, `rounded-xl` to 8 px, and custom `rounded-full` to 12 px; default Tailwind `rounded-2xl` remains 16 px. For example, buttons use `rounded-lg`, comparison cards use `rounded-xl`, and hero/gallery image containers use `rounded-2xl`.
- Fine borders use the `surface-variant` color at reduced opacity (commonly 40%). Footer top divider uses the same treatment.
- Header ambient shadow: `0 12px 36px -4px rgba(62,43,37,0.07)`.
- Hero portrait uses a strong diffuse shadow (`shadow-2xl`). Cards use `shadow-sm` and a modest `shadow-md` hover state. Buttons and social chips use subtle `shadow-sm`/`shadow-lg` as assigned in their source classes.
- Image containers clip overflow. Portfolio images use a restrained hover scale transition; do not add extra animation styles beyond source behavior.

### Image proportions

- Hero portrait: square (`aspect-square`), max width 440 px, `object-fit: cover`.
- Portfolio cards: 4:3 (`aspect-[4/3]`), full card width, `object-fit: cover`.
- Before/after pairs: each image 4:5 (`aspect-[4/5]`); pair sits in a 2-column row with an 8 px gap.
- Preserve each image crop and pair ordering from this screen. Use only its image assets; do not source imagery from other Stitch screens.

### Responsive assumptions

The attached HTML uses Tailwind default breakpoints: `sm` 640 px, `md` 768 px, `lg` 1024 px.

- Hero stacks copy above portrait below `lg`; the portrait follows copy with added top spacing.
- Hero actions fill available width on very narrow screens and become content-width from `sm`.
- Portfolio grid: 1 / 2 / 3 columns at narrow / `md` / `lg` widths.
- Before-and-after cards: 1 column narrow, 3 columns from `md`.
- Footer: 1 column narrow, 2 columns from `sm`, then 12-column grid at `lg`, apportioned 5/4/3.
- Keep horizontal padding responsive and avoid fixed page widths. No mobile screenshot was supplied, so responsive behavior beyond explicit classes remains an assumption encoded by the source HTML.

## Reusable React component proposal

```text
App
├── SiteHeader
├── HomePage
│   ├── HeroSection
│   │   ├── Eyebrow
│   │   ├── ExperienceBadge
│   │   ├── ContactActions
│   │   ├── SocialLinks
│   │   └── HeroPortrait
│   └── PortfolioSection
│       ├── SectionIntro
│       ├── PortfolioGrid
│       │   └── PortfolioCard × 6
│       └── BeforeAfterSection
│           └── BeforeAfterCard × 3, 4, or 6
└── SiteFooter
    ├── BrandSummary
    ├── ContactDetails
    └── FooterSocialLinks
```

`SiteHeader` should stay minimal until its contents are confirmed: approved screen HTML exposes a fixed, styled but empty header. Keep gallery content in typed data and render all supplied entries. The attached JavaScript describes category filtering and time/day slot selection, but current technical requirements omit filters and no time/day slot markup appears in the retrieved HTML. The before/after slider handlers also refer to IDs absent from the retrieved markup; keep static comparisons unless a later approved source specifies interactive sliders.

Do not implement or infer markup for the commented philosophy, services, reviews, or booking sections from this screen's HTML alone.
