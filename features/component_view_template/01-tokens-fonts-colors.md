# Stage 01 — Tokens, fonts, and colors

**Status:** implemented  
**Depends on:** [00-overview.md](00-overview.md)

## Goal

Map the component-view palette and type to Lienzo’s token system. Reuse existing `pio-*` (and related) tokens where the role is the same. Add tokens **only** when nothing similar exists. Load display, UI, and mono fonts library-wide via Tailwind and global CSS.

## In scope

- Written mapping: design name / hex → existing token or **new** token
- New CSS variables in [src/css/tokens.css](../../src/css/tokens.css) and Tailwind maps in [tailwind.config.js](../../tailwind.config.js) for unmatched colors, shadows, and font families
- Google Fonts (or equivalent) load for Playfair Display, Plus Jakarta Sans, and the chosen mono
- Tailwind `fontFamily` entries so Docs and components can use the new faces
- Decision: Title atom keeps Lexend / Poppins for now (coexistence)

## Out of scope

- Rewriting [src/components/atoms/Title/Title.tsx](../../src/components/atoms/Title/Title.tsx) to drop Lexend/Poppins
- Restyling Storybook Docs layout (stage 02)
- Changing component variant colors (`type="red"` etc.) unless a mapped token they already use is updated
- Replacing every mock hex with a new token when an existing pio color fills the same role

## Design mapping

| Design name / hex | Role | Lienzo action |
|---------------------------|------|----------------|
| `lienzo-bg` / `pio-bg` `#FAF8F5` | Page canvas | **Adapt:** existing `--lz-pio-bg` (230 230 222) and `--lz-light-canvas` (250 250 249). Prefer `pio-bg` / `light-canvas` for Docs canvas; do not add a duplicate warm off-white unless contrast against cards fails. |
| `lienzo-card` `#FFFFFF` | Elevated card | **Reuse** `white` |
| `lienzo-card-alt` `#FDFCFA` | Nested panel / Controls column | Near `--lz-pio-bg-opacity-90` (253 252 252) and `pio-bg-light`. **Adapt** to `pio-bg-light` first; add `pio-card-alt` only if the nested column needs a distinct wash. |
| `lienzo-coral` `#FF6B57` | Primary accent | **Adapt:** `--lz-pio-coral` (224 90 90). Same role; do not add a second coral. |
| `lienzo-coral-light` / coral 0.15 | Soft coral wash | **Reuse** `pio-coral-opacity-14` / `pio-coral-opacity-20` |
| `lienzo-coral-soft` `#FFEBE8` | Chip / badge fill | Near `pio-coral-pale` (252 228 226). **Adapt** to `pio-coral-pale` unless badges need a named alias. |
| `lienzo-teal` `#3A7D76` | Secondary accent | Near `--lz-pio-teal-dark-hover` (58 122 112). **Adapt** to `pio-teal-dark` / `pio-teal-dark-hover`. |
| `lienzo-teal-dark` `#2F6D68` | Teal dark | **Adapt:** `--lz-pio-teal-dark` (43 102 93) |
| `lienzo-teal-light` teal 0.15 | Teal wash | **Reuse** `pio-teal-dark-opacity-14` / `20` |
| `lienzo-amber` `#EAA838` | Warning / gallery eyebrow | **Adapt:** `--lz-pio-amber` (244 164 96) |
| `lienzo-stone` `#8C827A` | Muted labels | Near `--lz-pio-text-muted` (107 114 128) and `--lz-pio-stone` (109 76 65, browner). **Adapt** muted UI copy to `pio-text-muted`; keep `pio-stone` for data/chart accent. |
| `lienzo-text` `#1F2421` | Body text | **Adapt:** `--lz-pio-text` (45 45 47) |
| `lienzo-text-muted` `#6D726D` | Secondary copy | **Adapt:** `--lz-pio-text-muted` |
| `lienzo-border` `#EAE5DE` | Card stroke | Near `--lz-pio-grid` (229 231 235). **Adapt** to `pio-grid` first. Add `pio-border` only if warm hairlines are clearly different on Docs cards. |
| `lienzo-border-subtle` `#F2EFEB` | Inner dividers | No close token. **Add** if dividers look wrong on `pio-grid` (candidate: `--lz-pio-border-subtle`). |
| Code panel `#181C1A` | Dark code surface | Near `--lz-dark-canvas` (22 22 26) and `--lz-pio-teal-black`. **Adapt** to `dark-canvas` or `pio-teal-black`; add `pio-code-bg` only if neither reads as the mock. |
| CDN `emerald-*` / `rose-*` | Interactive / don’ts | **Adapt** to `pio-teal-dark` (success/interactive) and `pio-coral` (avoid). Do not add Tailwind default emerald/rose. |
| Shadows `lienzo-soft`, `lienzo-card`, glows | Elevation | **Add** box-shadow theme keys (no color tokens required) if utilities cannot approximate the target shadow profiles. |
| Playfair Display | Display / H1–H2 | **Add** font family (e.g. `font-playfair` or `font-serif`) |
| Plus Jakarta Sans | UI / body | **Add** (e.g. `font-jakarta` or default `font-sans` for Docs) |
| Mono | Code | **Pick JetBrains Mono** (matches the Docs mono choice). Courier Prime is not used for this feature so there is a single mono. |

Existing tokens that stay the source of truth for component variants: gray scale, pio coral/teal/amber ladders, opacities. See [Documentation/design-tokens-colors.md](../../Documentation/design-tokens-colors.md).

## Current system

- Canonical colors: [src/css/tokens.css](../../src/css/tokens.css)
- Tailwind map: [tailwind.config.js](../../tailwind.config.js)
- Fonts today: Lexend and Poppins in `theme.extend.fontFamily`; loaded in [.storybook/story-global.css](../../.storybook/story-global.css)
- Title `fontFamily?: 'lexend' | 'poppins'`

## Implementation notes

1. Build the mapping table in this stage’s PR/docs update (`Documentation/design-tokens-colors.md`) as the record of reuse vs add.
2. For each **Add** row, define RGB channels in `tokens.css` and a Tailwind color (same `rgb(var(--lz-…) / <alpha-value>)` pattern).
3. Load fonts next to existing `@import` URLs in `story-global.css` and any app global CSS that must render the faces outside Storybook (e.g. [src/css/lienzo.css](../../src/css/lienzo.css) or [src/tailwind.css](../../src/tailwind.css) if that is the shared entry).
4. Extend `fontFamily`: keep `lexend` and `poppins`; add Playfair, Jakarta, JetBrains Mono. Do not silently remap `font-sans` for all product components in this stage unless Docs cannot target a named class.
5. Add shadow tokens under `theme.extend.boxShadow` using the elevation profiles (subtle card, floating, optional coral/teal glow).
6. After adding tokens, update [Documentation/design-tokens-colors.md](../../Documentation/design-tokens-colors.md) and [Documentation/libraries.md](../../Documentation/libraries.md) if a font loader or new dependency is introduced.

## Acceptance criteria

- Every mock color used on the component-view page is either mapped to an existing utility or has a new token with a one-line rationale.
- Playfair Display, Plus Jakarta Sans, and JetBrains Mono render in Storybook (inspect computed `font-family` on a test heading and `<code>`).
- Lexend/Poppins still work on Title stories.
- No emerald/rose utilities added as new brand colors.
- Mono choice is JetBrains Mono (documented here and in design-tokens).

## Handoff

Stage 02 may assume `pio-*` (and any new Docs surfaces) plus the three new font families are available as Tailwind classes. It must not invent one-off hex in CSS except for gradient stops that reference existing tokens (e.g. `rgb(var(--lz-pio-coral) / 0.18)`).
