# Architecture

## Repository layout

- **Root config**: `package.json`, `tailwind.config.js`, `tsconfig.json`, `.nvmrc`, `.gitignore`
- **`.storybook/`**: Storybook configuration (main, preview, webpack, global CSS)
- **`src/`**: All application source code (see below)
- **`Documentation/`**: Project documentation (this folder)
- **`features/`**: Staged feature specs (implementation plans split by step). These are not the public component Docs pages. Component Docs contract: [Documentation/component-docs.md](component-docs.md). Historical component-view sequence: [features/component_view_template/](../features/component_view_template/00-overview.md).
- **`brand/`**: Design references (e.g. Stitch HTML/PNG) used as visual source, not runtime code

## `src/` folder structure

| Folder | Purpose |
|--------|---------|
| `components/` | React components: atoms and molecules (and future organisms) |
| `assets/` | Static assets and React SVG components (e.g. logos, backgrounds) |
| `colors/` | Re-export of Tailwind theme colors (see [src/colors/Colors.ts](../src/colors/Colors.ts)) |
| `css/` | Global styles: [lienzo.css](../src/css/lienzo.css), `fullHeightCanvas.css` |
| `docs/` | Storybook intro/welcome content and Docs infrastructure: [LivePreview](../src/docs/LivePreview/LivePreview.tsx), [ComponentDocsPage](../src/docs/ComponentDocsPage/ComponentDocsPage.tsx) (composable Docs page template) |
| `interfaces/` | Shared TypeScript types (e.g. [sizes.ts](../src/interfaces/sizes.ts)) |

## TypeScript path aliases

Imports use path aliases so you can avoid long relative paths. Configured in `tsconfig.json` (and mirrored in [.babelrc](../.babelrc) / [.storybook/webpack.config.js](../.storybook/webpack.config.js)):

| Alias | Resolves to |
|-------|-------------|
| `@interfaces/*` | `src/interfaces/*` |
| `@components/*` | `src/components/*` |
| `@atoms/*` | `src/components/atoms/*` |
| `@molecules/*` | `src/components/molecules/*` |
| `@organisms/*` | `src/components/organisms/*` |
| `@colors/*` | `src/colors/*` |
| `@assets/*` | `src/assets/*` |
| `@css/*` | `src/css/*` |
| `@docs/*` | `src/docs/*` |

**Example**: instead of `import Box from '../../../components/atoms/Box/Box'`, use:

```ts
import Box from '@atoms/Box/Box';
```

Use these aliases consistently for components, assets, interfaces, colors, and Docs helpers.
