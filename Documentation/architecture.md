# Architecture

## Repository layout

- **Root config**: `package.json`, `.yarnrc.yml`, `tsconfig.json`, `eslint.config.mjs`, `.nvmrc`, `.gitignore`
- **`.storybook/`**: Storybook configuration (`main.ts`, `preview.ts`, `manager.ts`, global CSS)
- **`src/`**: All application source code (see below)
- **`Documentation/`**: Project documentation (this folder)
- **`features/`**: Staged feature specs (implementation plans split by step). These are not the public component Docs pages. Component Docs contract: [Documentation/component-docs.md](component-docs.md). Historical component-view sequence: [features/component_view_template/](../features/component_view_template/00-overview.md).

## `src/` folder structure

| Folder | Purpose |
|--------|---------|
| `components/` | React components under `atoms/`, `molecules/`, `templates/`, `pages/` (and future `organisms/`) |
| `assets/` | Static assets and React SVG components (e.g. logos, backgrounds) |
| `colors/` | JS color strings for tokens (see [src/colors/Colors.ts](../src/colors/Colors.ts)) |
| `css/` | Global styles: [tokens.css](../src/css/tokens.css), `fullHeightCanvas.css`. Tailwind entry is [src/tailwind.css](../src/tailwind.css) |
| `docs/` | Storybook Docs infrastructure: [LivePreview](../src/docs/LivePreview/LivePreview.tsx), [ComponentDocsPage](../src/docs/ComponentDocsPage/ComponentDocsPage.tsx) (composable Docs page template) |
| `interfaces/` | Shared TypeScript types (e.g. [sizes.ts](../src/interfaces/sizes.ts)) |

## TypeScript path aliases

Imports use path aliases so you can avoid long relative paths. Configured in `tsconfig.json` and mirrored in [.storybook/main.ts](../.storybook/main.ts) (`viteFinal` `resolve.alias`, including MDX):

| Alias | Resolves to |
|-------|-------------|
| `@interfaces/*` | `src/interfaces/*` |
| `@components/*` | `src/components/*` |
| `@atoms/*` | `src/components/atoms/*` |
| `@molecules/*` | `src/components/molecules/*` |
| `@organisms/*` | `src/components/organisms/*` |
| `@templates/*` | `src/components/templates/*` |
| `@pages/*` | `src/components/pages/*` |
| `@colors/*` | `src/colors/*` |
| `@assets/*` | `src/assets/*` |
| `@css/*` | `src/css/*` |
| `@docs/*` | `src/docs/*` |

**Example**: instead of `import Box from '../../../components/atoms/Box/Box'`, use:

```ts
import Box from '@atoms/Box/Box';
```

Use these aliases consistently for components, assets, interfaces, colors, and Docs helpers.
