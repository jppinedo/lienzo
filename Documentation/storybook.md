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
- **Component stories**: Any `*.stories.tsx` or `*.mdx` under `src/` (e.g. `src/components/atoms/Button/Button.stories.tsx`)

The exact globs are set in [.storybook/main.ts](../.storybook/main.ts):

```ts
stories: [
  '../src/docs/index.mdx',
  '../src/**/*.stories.tsx',
  '../src/**/*.mdx',
],
```

The **Intro** story ([src/docs/intro.stories.tsx](../src/docs/intro.stories.tsx)) is the welcome screen that describes Atomic Design and Tailwind; it uses the Background atom and Lienzo logo.

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
