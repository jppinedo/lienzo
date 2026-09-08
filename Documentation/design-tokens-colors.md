# Design tokens & colors

The **source of truth** for color values is `src/css/tokens.css` (CSS variables). Tailwind utilities are mapped to those variables via [tailwind.config.js](../tailwind.config.js).

## How the token system works

- **Token values (canonical)**: `src/css/tokens.css` defines colors as RGB channels, e.g. `--lz-pio-teal-black: 19 27 38;`.
- **Tailwind utilities**: `tailwind.config.js` maps each Tailwind color name to the token using `rgb(var(--token) / <alpha-value>)` so utilities support opacity (e.g. `bg-pio-teal-black/80`).
- **Plain CSS (e.g. 3rd-party libs)**: component CSS can use the same tokens directly, e.g. `color: rgb(var(--lz-pio-teal-black));`.

## Color groups

### Grays

- **Scale**: `gray-100`, `gray-200`, `gray-300`, `gray-600`, `gray-700`, `gray-800`, `gray-900`
- **Opacity**: `gray-opacity-14`, `gray-opacity-20`, `gray-opacity-30`

### Base

- **White/black**: `white`, `black`
- **Opacity**: `white-opacity-14`, `black-opacity-14`, `black-opacity-20`
- **Transparent**: `transparent`

### Semantic (red, yellow, green)

- **Red**: `red`, `red-dark`, `red-bright`, `red-300`, `red-opacity-14`, `red-opacity-20`, `red-opacity-30`
- **Yellow**: `yellow`, `yellow-dark`, `yellow-bright`, `yellow-ghost`
- **Green**: `green`, `green-bright`, `green-300`, `green-opacity-14`, `green-opacity-20`, `green-opacity-30`

### Pio chart UI

Used for chart backgrounds, tabs, and data series:

- **Backgrounds**: `pio-bg`, `pio-bg-light`, `pio-bg-opacity-90`
- **Teal (active/primary)**: `pio-teal-dark`, `pio-teal-dark-hover`, `pio-teal-dark-opacity-20`
- **Accents**: `pio-coral`, `pio-teal`, `pio-amber`, `pio-stone` (and `pio-coral-500`, `pio-teal-500`, `pio-amber-500`, `pio-stone-700`)
- **Accent opacity**: `pio-coral-opacity-14`, `pio-teal-opacity-14`, `pio-amber-opacity-14`, `pio-stone-opacity-14`
- **Text & UI**: `pio-text`, `pio-text-muted`, `pio-grid`

### Canvas (theming)

- **Dark canvas**: `dark-canvas` (`#16161a`)
- **Light canvas**: `light-canvas` (`#fafaf9`)

These are used for full-page or app-level backgrounds and are listed in Tailwind’s `safelist` so they are always available (e.g. `dark:bg-dark-canvas`, `bg-light-canvas`).

## Dark mode

Configured as:

```js
darkMode: ['class', '[data-mode="dark"]']
```

Dark mode is active when the root element has the `dark` class or a `data-mode="dark"` attribute. In components, use Tailwind’s `dark:` variant (e.g. `dark:bg-gray-800`, `dark:text-gray-200`).

## Extended theme (typography)

- **Font families**: `font-lexend`, `font-poppins` (Lexend and Poppins, sans-serif)
- **Font weights**: `font-thin` (100), `font-regular` (400), `font-bold` (700)

## Using colors in code

- **In JS/TS**: Prefer Tailwind utility classes. When you need a runtime color value (e.g. canvas/chart library), read the computed CSS variable from the DOM (tokens are defined in `src/css/tokens.css`).
- **In components**: Prefer Tailwind utility classes (e.g. `bg-pio-bg`, `text-pio-text`, `border-gray-200`).

For a **visual reference** of the palette, open Storybook and go to the **Colors** story ([src/colors/colors.stories.tsx](../src/colors/colors.stories.tsx)).
