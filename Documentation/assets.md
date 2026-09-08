# Assets

## Location

All shared static assets and React asset components live under **[src/assets/](../src/assets/)**, with SVGs in **src/assets/SVG/**.

## Contents

| Asset | Description |
|-------|-------------|
| **LienzoLogo.tsx** | React component that renders the Lienzo logo (used in the Storybook intro/welcome) |
| **lienzo_logo.svg** | Static SVG file of the logo |
| **SquaresBackground.tsx** | React component that renders a squares-pattern background |

## Usage

Import assets via the **`@assets/`** path alias so paths stay short and consistent:

```ts
import LienzoLogo from '@assets/SVG/LienzoLogo';
```

Add new assets (images, SVGs, or React wrappers) under `src/assets/` (and subfolders like `SVG/` if needed), and use `@assets/...` in imports.
