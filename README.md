# Lienzo

A React design system built with Atomic Design, Tailwind CSS, and Storybook.

## What is Lienzo?

**Lienzo** is a React component library developed and documented in Storybook. It follows **Atomic Design** (atoms and molecules) and uses **Tailwind CSS** for utility-first styling, aiming for a robust, scalable, and consistent design system that makes development faster and easier.

Full project documentation lives in **[Documentation](Documentation/index.md)**.

## Features

- **Atomic Design** — UI built from atoms and molecules with clear file conventions
- **Storybook 10** — Isolated development; Docs + Live Preview (`ComponentDocsPage`) for atoms / molecules / organisms; light/dark themes
- **Design tokens** — Colors as CSS variables in `src/css/tokens.css`, mapped through Tailwind (`pio-*` palette)
- **TypeScript path aliases** — Clean imports such as `@atoms/*` and `@molecules/*`
- **Focused UI building blocks** — Charts (Recharts), calendar (react-day-picker), icons (react-feather), and more — see [Libraries](Documentation/libraries.md)

## Tech stack

| Area | Tools |
|------|--------|
| UI | React 19, TypeScript 6 |
| Styling | Tailwind CSS 4 (CSS-first theme in `src/tailwind.css`) |
| Docs & demos | Storybook 10 (Vite) |
| Package manager | Yarn 4 (Corepack) |

Details and supporting libraries: [Documentation/libraries.md](Documentation/libraries.md).

## Quick start

**Requirements:** **Node 24 LTS** (see `.nvmrc`) and **Yarn 4** via Corepack. With [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the project root, then `corepack enable`.

```bash
yarn install
yarn storybook
```

Storybook runs at **http://localhost:6006/**.

To build a static Storybook site:

```bash
yarn build-storybook
```

Output is written to `storybook-static/`.

### Troubleshooting

If macOS reports `EMFILE: too many open files`, raise the limit (`ulimit -n 10240`) and run Storybook again. More setup detail: [Getting started](Documentation/getting-started.md).

## Project structure

| Path | Purpose |
|------|---------|
| `src/components/` | React components (atoms and molecules) |
| `src/css/` | Design tokens and global styles |
| `src/docs/` | Storybook intro and Docs infrastructure |
| `src/assets/` | Static assets and SVG React components |
| `.storybook/` | Storybook configuration |
| `Documentation/` | Project documentation |
| `features/` | Historical staged plans (not runtime) |

Imports use path aliases (configured in `tsconfig.json` and mirrored in `.storybook/main.ts`):

```ts
import Box from '@atoms/Box/Box';
```

See [Architecture](Documentation/architecture.md) for the full layout and alias list.

## Components

- **Atoms** — Small, reusable pieces (e.g. Button, Input, Card, Badge, Title)
- **Molecules** — Composed UI (e.g. Tabs, Toolbar, Calendar, LineChart, CodeBlock)

An `@organisms/*` alias is reserved for future use. Full inventory and conventions: [Component structure](Documentation/component-structure.md). Docs page contract: [Component Docs](Documentation/component-docs.md).

## Design tokens and theming

- **Source of truth:** [`src/css/tokens.css`](src/css/tokens.css) (CSS variables as RGB channels)
- **Tailwind:** theme colors map to those tokens; brand palette uses `pio-*` names
- **Variants:** semantic `type` props (`default`, `red`, `yellow`, `green`) map to gray / coral / amber / teal families
- **Dark mode:** `[data-mode="dark"]` (the `dark:` variant)
- **Fonts:** Lexend, Poppins, Playfair Display, Plus Jakarta Sans, JetBrains Mono

Reference: [Design tokens & colors](Documentation/design-tokens-colors.md).

## Storybook

Storybook is where components are developed, documented, and demoed in isolation. Use light/dark themes from the toolbar and open each component’s Docs page for Controls, examples, and guidance.

More: [Storybook](Documentation/storybook.md).

## Contributing

1. Install dependencies and run Storybook (see [Quick start](#quick-start)).
2. Follow Atomic Design and existing file conventions (`ComponentName.tsx`, stories; Docs MDX only for atoms / molecules / organisms).
3. Prefer path aliases (`@atoms/*`, `@molecules/*`, etc.).
4. For atoms / molecules / organisms, document with `ComponentDocsPage` — see [Component Docs](Documentation/component-docs.md). Pages and Introduction/Welcome do not get Docs / Live Preview.
5. When you change components, tokens, libraries, assets, Storybook, or structure, update the matching file under [Documentation](Documentation/index.md).

Suggested reading order: [Getting started](Documentation/getting-started.md) → [Architecture](Documentation/architecture.md) → [Component structure](Documentation/component-structure.md).

## Documentation

| Section | Description |
|---------|-------------|
| [Getting started](Documentation/getting-started.md) | Requirements, setup, development, build, troubleshooting |
| [Architecture](Documentation/architecture.md) | Repo layout, `src/` structure, path aliases |
| [Component structure](Documentation/component-structure.md) | Atomic Design, atoms/molecules, file conventions |
| [Component Docs](Documentation/component-docs.md) | Docs page template and Controls rules |
| [Design tokens & colors](Documentation/design-tokens-colors.md) | Tokens, palette, dark mode, fonts |
| [Libraries](Documentation/libraries.md) | Core and UI dependencies |
| [Storybook](Documentation/storybook.md) | Running Storybook, stories, addons, build |
| [Assets](Documentation/assets.md) | `src/assets/`, SVG components, `@assets` |

## License

ISC
