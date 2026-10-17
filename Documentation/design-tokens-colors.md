# Design tokens & colors

The **source of truth** for color values is `src/css/tokens.css` (CSS variables). Tailwind utilities are mapped to those variables in the `@theme inline` block of [src/tailwind.css](../src/tailwind.css).

## How the token system works

- **Token values (canonical)**: `src/css/tokens.css` defines colors as RGB channels, e.g. `--lz-pio-teal-black: 19 27 38;`.
- **Tailwind utilities**: `src/tailwind.css` maps each color name with `--color-*: rgb(var(--lz-…))` so utilities support opacity (e.g. `bg-pio-teal-black/80`).
- **Plain CSS (e.g. 3rd-party libs)**: component CSS can use the same tokens directly, e.g. `color: rgb(var(--lz-pio-teal-black));`.

## Component variant mapping

Public `type` props stay semantic. Chromatic variants use pio tokens; `default` stays gray.

| `type` | Role | Token family |
|--------|------|----------------|
| `default` | Neutral | `gray-*`, white/black (no teal or green) |
| `red` | Error / destructive | `pio-coral` |
| `yellow` | Warning | `pio-amber` |
| `green` | Success / positive | `pio-teal-dark` |

Each chromatic family has a shade ladder: **base**, **hover**, **dark**, **muted**, **pale**, plus **opacity-14** and **opacity-20** washes.

## Color groups

### Grays

Used for the `default` variant and neutral chrome.

- **Scale**: `gray-100`, `gray-300`, `gray-600`, `gray-700`, `gray-800`, `gray-900`
- **Opacity**: `gray-opacity-14`, `gray-opacity-20`, `gray-opacity-30`

### Base

- **White/black**: `white`, `black`
- **Opacity**: `white-opacity-14`, `black-opacity-14`, `black-opacity-20`
- **Transparent**: `transparent`

### Blue

Used mainly for dark-mode text (`blue-200`): `blue-200`, `blue-400`, `blue-600`

### Pio backgrounds

- **Backgrounds**: `pio-bg` (`#FAF8F5`), `pio-bg-light` (`#F5F2EC`), `pio-bg-soft` (`#FDFCFA`, pio-bg mixed toward white), `pio-bg-opacity-90`

### Pio teal dark (green / success)

- **Fill / hover**: `pio-teal-dark`, `pio-teal-dark-hover`
- **Shades**: `pio-teal-dark-muted`, `pio-teal-dark-pale`, `pio-teal-black`
- **Opacity**: `pio-teal-dark-opacity-14`, `pio-teal-dark-opacity-20`

### Pio coral (red / error)

- **Fill / hover / dark / muted / pale**: `pio-coral`, `pio-coral-hover`, `pio-coral-dark`, `pio-coral-muted`, `pio-coral-pale`
- **Opacity**: `pio-coral-opacity-14`, `pio-coral-opacity-20`

### Pio amber (yellow / warning)

- **Fill / hover / dark / muted / pale**: `pio-amber`, `pio-amber-hover`, `pio-amber-dark`, `pio-amber-muted`, `pio-amber-pale`
- **Opacity**: `pio-amber-opacity-14`, `pio-amber-opacity-20`

### Pio stone (chart accent)

Not a control variant. Used for data series.

- `pio-stone`, `pio-stone-dark`, `pio-stone-pale`, `pio-stone-opacity-14`

### Pio text & UI

- `pio-text`, `pio-text-muted`, `pio-grid` (`#E5E0D8` warm structural hairline)
- `pio-border-subtle` (`#F2EFEB`) — warm inner hairlines and nested tracks (Docs dividers). Use `pio-grid` for card strokes and section rules.

### Canvas (theming)

- **Dark canvas**: `dark-canvas` (`#16161a`)
- **Light canvas**: `light-canvas` (`#fafaf9`)

These are used for full-page or app-level backgrounds and are always generated (`@source inline` in `src/tailwind.css`): `dark:bg-dark-canvas`, `bg-light-canvas`.

## Dark mode

Configured as:

```css
@custom-variant dark (&:where([data-mode='dark'] *));
```

Dark mode is active inside an element with `data-mode="dark"`. In components, use Tailwind’s `dark:` variant (e.g. `dark:bg-gray-800`, `dark:text-blue-200`).

## Extended theme (typography)

- **Font families**: `font-lexend`, `font-poppins`, `font-playfair`, `font-jakarta` (Title `fontFamily`), `font-jetbrains` (JetBrains Mono, code). Do not remap `font-sans` for product components.
- **Font weights**: `font-thin` (100), `font-regular` (400), `font-bold` (700)
- **Loading**: Google Fonts CSS `@import` in [.storybook/story-global.css](../.storybook/story-global.css). Preview loads that file for every story and Docs page.

## Box shadows

Elevation utilities (not color tokens): `shadow-pio-soft`, `shadow-pio-card`, `shadow-pio-float`, `shadow-pio-glow-coral`, `shadow-pio-glow-teal`.

## Component-view Stitch mapping

Stitch `lienzo-*` names from the component-view mock map onto existing `pio-*` tokens. New tokens exist only where nothing similar was available.

| Stitch | Hex / profile | Lienzo token | Action |
|--------|---------------|--------------|--------|
| `lienzo-bg` | `#FAF8F5` | `pio-bg` / `light-canvas` | Adapt — `pio-bg` is `#FAF8F5` |
| `lienzo-card` | `#FFFFFF` | `white` | Reuse |
| `lienzo-card-alt` | `#FDFCFA` | `pio-bg-soft` (`#FDFCFA`) | Add — lighter nested surface from pio-bg toward white; `pio-bg-light` stays the warmer recessed wash |
| `lienzo-coral` | `#FF6B57` | `pio-coral` | Adapt |
| `lienzo-coral-light` | coral 0.15 | `pio-coral-opacity-14` / `20` | Reuse |
| `lienzo-coral-soft` | `#FFEBE8` | `pio-coral-pale` | Adapt |
| `lienzo-teal` | `#3A7D76` | `pio-teal-dark-hover` | Adapt |
| `lienzo-teal-dark` | `#2F6D68` | `pio-teal-dark` | Adapt |
| `lienzo-teal-light` | teal 0.15 | `pio-teal-dark-opacity-14` / `20` | Reuse |
| `lienzo-amber` | `#EAA838` | `pio-amber` | Adapt |
| `lienzo-stone` (UI labels) | `#8C827A` | `pio-text-muted` | Adapt |
| `lienzo-stone` (data) | `#8C827A` | `pio-stone` | Keep for charts |
| `lienzo-text` | `#1F2421` | `pio-text` | Adapt |
| `lienzo-text-muted` | `#6D726D` | `pio-text-muted` | Adapt |
| `lienzo-border` / DESIGN `pio-grid` | `#EAE5DE` / `#E5E0D8` | `pio-grid` (`#E5E0D8`) | Adapt — warm hairline; cool gray fails on Docs canvas |
| `lienzo-border-subtle` | `#F2EFEB` | `pio-border-subtle` | Add — no close token; inner Docs dividers |
| Code panel | `#181C1A` | `dark-canvas` | Adapt |
| CDN `emerald-*` / `rose-*` | interactive / don’ts | `pio-teal-dark` / `pio-coral` | Adapt; no emerald/rose brand colors |
| `lienzo-soft` / `lienzo-card` / glows | elevation | `shadow-pio-*` | Add |
| Playfair Display | display | `font-playfair` | Add |
| Plus Jakarta Sans | UI | `font-jakarta` | Add |
| Mono | code | `font-jetbrains` (JetBrains Mono) | Add; Courier Prime is not used |

## Using colors in code

- **In JS/TS**: Prefer Tailwind utility classes. When you need a runtime color value (e.g. canvas/chart library), read the computed CSS variable from the DOM (tokens are defined in `src/css/tokens.css`).
- **In components**: Prefer Tailwind utility classes (e.g. `bg-pio-bg`, `text-pio-text`, `border-gray-300`).

For a **visual reference** of the palette, open Storybook and go to **Welcome** (foundations section) or **Pages/WelcomeFoundations**.
