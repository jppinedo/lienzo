# Design tokens & colors

The **source of truth** for color values is `src/css/tokens.css` (CSS variables). Tailwind utilities are mapped to those variables via [tailwind.config.js](../tailwind.config.js).

## How the token system works

- **Token values (canonical)**: `src/css/tokens.css` defines colors as RGB channels, e.g. `--lz-pio-teal-black: 19 27 38;`.
- **Tailwind utilities**: `tailwind.config.js` maps each Tailwind color name to the token using `rgb(var(--token) / <alpha-value>)` so utilities support opacity (e.g. `bg-pio-teal-black/80`).
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

- **Backgrounds**: `pio-bg`, `pio-bg-light`, `pio-bg-opacity-90`

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

- `pio-text`, `pio-text-muted`, `pio-grid`

### Canvas (theming)

- **Dark canvas**: `dark-canvas` (`#16161a`)
- **Light canvas**: `light-canvas` (`#fafaf9`)

These are used for full-page or app-level backgrounds and are listed in Tailwind’s `safelist` so they are always available (e.g. `dark:bg-dark-canvas`, `bg-light-canvas`).

## Dark mode

Configured as:

```js
darkMode: ['class', '[data-mode="dark"]']
```

Dark mode is active when the root element has the `dark` class or a `data-mode="dark"` attribute. In components, use Tailwind’s `dark:` variant (e.g. `dark:bg-gray-800`, `dark:text-blue-200`).

## Extended theme (typography)

- **Font families**: `font-lexend`, `font-poppins` (Lexend and Poppins, sans-serif)
- **Font weights**: `font-thin` (100), `font-regular` (400), `font-bold` (700)

## Using colors in code

- **In JS/TS**: Prefer Tailwind utility classes. When you need a runtime color value (e.g. canvas/chart library), read the computed CSS variable from the DOM (tokens are defined in `src/css/tokens.css`).
- **In components**: Prefer Tailwind utility classes (e.g. `bg-pio-bg`, `text-pio-text`, `border-gray-300`).

For a **visual reference** of the palette, open Storybook and go to the **Colors** story ([src/colors/colors.stories.tsx](../src/colors/colors.stories.tsx)).
