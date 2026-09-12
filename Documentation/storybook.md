# Storybook

Storybook is used to develop and document components in isolation, and to run visual demos and regression checks.

## Running Storybook

From the project root:

```bash
npm run storybook
```

The app opens at **http://localhost:6006**. For install and troubleshooting, see [Getting started](getting-started.md).

## Story locations

Stories are picked up automatically from:

- **Welcome / intro**: [src/docs/index.mdx](../src/docs/index.mdx) — landing docs and design system intro
- **Component stories**: Any `*.stories.tsx` or `*.mdx` under `src/components/` (e.g. `src/components/atoms/Button/Button.stories.tsx`)

The exact globs are set in [.storybook/main.cjs](../.storybook/main.cjs):

```js
stories: [
  '../src/docs/index.mdx',
  '../src/**/*.stories.tsx',
  '../src/**/*.mdx',
],
```

The **Intro** story ([src/docs/intro.stories.tsx](../src/docs/intro.stories.tsx)) is the welcome screen that describes Atomic Design and Tailwind; it uses the Background atom and Lienzo logo.

## Sidebar structure

Components appear under capitalized atomic-design folders. Set `title` on each stories file accordingly:

- `Atoms/ComponentName` — atoms (e.g. `Atoms/Button`)
- `Molecules/ComponentName` — molecules (e.g. `Molecules/Toolbar`)
- `Organisms/ComponentName` — reserved for future organism components

Pinned at the top (in order): **Welcome**, **Colors**, **Intro**. Then Atoms, Molecules, Organisms. Within each component, **Docs** is listed first, then variant stories. Sort order is configured in [.storybook/preview.ts](../.storybook/preview.ts).

Each component looks like:

```
Atoms
  Button
    Docs
    DefaultButtons
    ToolButtons
```

## Docs vs variant stories

**Docs** (`ComponentName.mdx`) is the interactive page: a short description, one component instance, and a Controls panel. It does not embed variant galleries. Variant stories live as sibling sidebar entries.

**Default** is a CSF export used only by Docs. It is hidden from the sidebar (`tags: ['!dev']` plus a sidebar filter in [.storybook/manager.js](../.storybook/manager.js)). Changing Docs controls does not surface a separate Default page.

**Variant stories** (e.g. `Sizes`, `AllTypes`) are visible galleries. Set `parameters: { controls: { disable: true } }` on them.

Pattern per component:

| File | Purpose |
|------|---------|
| `ComponentName.stories.tsx` | Hidden `Default` + visible variant stories; `title` uses `Atoms/` / `Molecules/` / `Organisms/` |
| `ComponentName.mdx` | Docs page: description + `<Canvas>` + `<Controls>` bound to `Default` |

Example MDX:

```mdx
import { Meta, Canvas, Controls } from '@storybook/blocks';
import * as Stories from './Button.stories';

# Button

<Meta of={Stories} />

Description of the component.

<Canvas of={Stories.Default} />
<Controls of={Stories.Default} />
```

## Style-only Controls

Docs Controls expose only props that affect visual appearance (size, type, fill, colors, rounded, labels, booleans like `isChecked`). Hide everything else with `control: false` and `table: { disable: true }`:

- Event handlers (`onClick`, `onChange`, …)
- JSX / React nodes (`icon`, `children` when complex, slots)
- Functions and data structures (`options`, `items`, chart `data`)
- Generic `className` passthroughs that do not drive a predefined visual variant

When a class-like prop **does** change appearance (for example Spinner `colorClass`), use a **select** with labeled options (`Red`, `Green`) instead of a free-text class name.

Stub handlers can still be passed in `Default.args` so the component renders; they must not appear in Controls.

## Addons

| Addon | Purpose |
|-------|---------|
| **Essentials** | Controls, actions, viewport, backgrounds, toolbars |
| **Docs** | Auto-generated docs and MDX blocks |
| **Themes** | Switch between light and dark theme in the toolbar |
| **Interactions** | Test user interactions in the canvas |
| **Links** | Navigate between stories via links |
| **Styling (webpack)** | Ensures CSS (including Tailwind) is loaded in Storybook |
| **Chromatic** | Visual testing and regression (when configured) |

They appear in the Storybook UI toolbar and in the docs tab. Use the theme switcher to verify `dark:` styles.

## Building for deploy

To generate a static export:

```bash
npm run build-storybook
```

Output is written to **`storybook-static/`**. You can serve that folder with any static host or CDN.
