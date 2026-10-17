# Libraries

Overview of the main technologies and dependencies used in Lienzo. For full lists, see [package.json](../package.json).

## Core

| Library | Role |
|---------|------|
| **React 18** | UI library; component-based rendering |
| **TypeScript** | Typing, path aliases, and safer refactors |
| **Tailwind CSS 3** | Utility-first styling; custom theme in `tailwind.config.js`; used with PostCSS |

## Styling & build

- **PostCSS** / **autoprefixer** — Process CSS (including Tailwind) and add vendor prefixes.
- **Google Fonts** — CSS `@import` in [.storybook/story-global.css](../.storybook/story-global.css) (not an npm package): Lexend and Poppins for Title, plus Playfair Display, Plus Jakarta Sans, and JetBrains Mono for Docs type. See [Design tokens & colors](design-tokens-colors.md).
- **Babel** — Transpile JS/TS and JSX (React, env presets); used by Storybook’s webpack config.
- **Webpack** — Bundles the Storybook app (Storybook 8 uses Webpack 5).
- **patch-package** — Applies dependency patches after `npm install` (e.g. for Node 23+ compatibility).

## Storybook

- **Storybook 8** — Component development, documentation, and visual testing.
- **Addons**: Essentials (controls, actions, viewport, etc.), Docs, Links, Interactions, Themes (light/dark), Styling (webpack CSS/Tailwind), Chromatic (visual testing). See [Storybook](storybook.md) for how to run and use them.

## Component & UI

| Library | Role |
|---------|------|
| **Recharts** | Charts; used by the **LineChart** molecule |
| **react-feather** | Icon set; used in components (e.g. Label, Button, Welcome pages) |
| **react-day-picker** (v9) | Calendar/date picker logic; used by the **Calendar** molecule (range and single selection) |
| **date-fns** | Date formatting and utilities; used with react-day-picker and Calendar |
| **prism-react-renderer** | Token highlighting inside **CodeBlock**; custom theme uses pio coral/teal/amber on `dark-canvas` |

## Summary

Use **React** and **TypeScript** for components, **Tailwind** (and optional component CSS) for styling, **Storybook** for developing and documenting components, and **Recharts** / **react-feather** / **prism-react-renderer** where charts, icons, or code highlighting are needed.
