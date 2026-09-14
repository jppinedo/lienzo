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

**Docs** (`ComponentName.mdx`) is the interactive reference for a component. The contract (required vs optional sections, Controls rules, Default vs variants) is documented in [Component Docs](component-docs.md).

Every production Docs page uses **ComponentDocsPage** ([src/docs/ComponentDocsPage/ComponentDocsPage.tsx](../src/docs/ComponentDocsPage/ComponentDocsPage.tsx)): required `title`, `description`, and `stories` (Live Preview on `stories.Default`); optional `breadcrumb`, `badge`, `useCases`, `variations` (pills Tabs + canvases), `props`, `usage`, and `example` only when content is real. Import via `@docs/ComponentDocsPage`. **LineChart** is the richer reference page; most atoms (e.g. **Button**) stay title + description + Live Preview.

Docs pages use the brand canvas: `pio-bg` in light mode (`dark-canvas` in dark mode), coral/teal ambient glows behind the article, Plus Jakarta Sans for body copy, and Playfair Display for **article** H1/H2 (direct children of `.sbdocs-content`, not headings inside a Canvas preview). Selection uses `pio-coral-pale` / `pio-coral`. This applies only inside `#storybook-docs`; variant **Canvas** stories keep `light-canvas` / `dark-canvas` and are not restyled to the marketing page. The live `.docs-story` frame keeps those canvas colors so the component is not sitting on the Docs article fill.

**Live Preview** ([src/docs/LivePreview/LivePreview.tsx](../src/docs/LivePreview/LivePreview.tsx)) wraps Storybook `<Canvas>` and `<Controls>` for the dual-column card layout (Controls left ~4/12, Canvas right ~8/12 on wide viewports; Controls stack **above** Canvas on small screens). It uses Card, Badge (“Interactive”), and Title. Pass the hidden `Default` story via `of={Stories.Default}` so args stay connected. Optional `helperText` and decorative `caption` are supported. ComponentDocsPage embeds Live Preview; do not hand-roll Canvas + Controls in new MDX.

**Controls restyle (best-effort):** scoped under `.live-preview` in [LivePreview.css](../src/docs/LivePreview/LivePreview.css). Selectors target Storybook 8 Docs classes (`.docblock-argstable`, `.docblock-argstable-head`, `.docblock-argstable-body`, `.sbdocs-preview`, `.docs-story`, `.docblock-code-toggle`). These class names can change between Storybook versions. **Fallback:** if restyles break, the card still stacks Controls above Canvas and Controls remain usable—do not replace Controls with a custom form.

**Default** is a CSF export used only by Docs. It is hidden from the sidebar (`tags: ['!dev']` plus a sidebar filter in [.storybook/manager.js](../.storybook/manager.js)). Changing Docs controls does not surface a separate Default page.

**Variant stories** (e.g. `Sizes`, `AllTypes`) are visible galleries. Set `parameters: { controls: { disable: true } }` on them. Optional Docs Variations tabs preview the same stories without Controls; they do not replace the sidebar. The bottom addon panel (Actions, Visual Tests, Interactions) is hidden by default via `showPanel: false` in [.storybook/manager.js](../.storybook/manager.js).

Pattern per component:

| File | Purpose |
|------|---------|
| `ComponentName.stories.tsx` | Hidden `Default` + visible variant stories; `title` uses `Atoms/` / `Molecules/` / `Organisms/` |
| `ComponentName.mdx` | Docs page via `ComponentDocsPage` (see [Component Docs](component-docs.md)) |

Example MDX (minimal — required only):

```mdx
import { Meta } from '@storybook/blocks';
import * as Stories from './Button.stories';
import { ComponentDocsPage } from '@docs/ComponentDocsPage';

<Meta of={Stories} />

<ComponentDocsPage
  title="Button"
  description="Primary UI action with variants for type, fill, and mode, plus an optional icon."
  stories={Stories}
/>
```

Example MDX (richer — optional slots when content is real):

```mdx
import { Meta, Canvas } from '@storybook/blocks';
import * as Stories from './LineChart.stories';
import { ComponentDocsPage } from '@docs/ComponentDocsPage';

<Meta of={Stories} />

<ComponentDocsPage
  title="LineChart"
  description="Line chart built with Recharts. Configurable series, axes, grid, and tooltip."
  stories={Stories}
  useCases={{ cases: ['Show trends over continuous periods.'] }}
  variations={[
    {
      id: 'chart-only',
      label: 'Chart only',
      canvas: <Canvas of={Stories.ChartOnly} />,
    },
  ]}
/>
```

Omit unused optional props so empty sections are not rendered. Sibling variant stories stay in the sidebar.

`@docs/LivePreview/LivePreview` and `@docs/ComponentDocsPage` resolve via the alias in [.storybook/webpack.config.js](../.storybook/webpack.config.js) (applied from `webpackFinal`). That file merges aliases whether Storybook provides `resolve.alias` as an object or an array (MDX relies on webpack aliases; it does not use Babel `module-resolver`).

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

They appear in the Storybook UI toolbar. The bottom addon panel is hidden by default so variant stories stay as galleries; prop editing happens on **Docs**. Use the theme switcher to verify `dark:` styles.

## Building for deploy

To generate a static export:

```bash
npm run build-storybook
```

Output is written to **`storybook-static/`**. You can serve that folder with any static host or CDN.
