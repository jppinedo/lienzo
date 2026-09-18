# Component structure

## Atomic Design in this project

Lienzo organizes UI into:

- **Atoms**: Small, indivisible UI pieces (buttons, inputs, labels, spinners, etc.).
- **Molecules**: Components composed from one or more atoms (e.g. Toolbar, Menu, Tabs, LineChart).

The path `@organisms/*` is set up in `tsconfig.json` for future use, but there are no organism components yet.

## Atoms

| Component | Description |
|-----------|-------------|
| **Background** | Gradient or custom background wrapper |
| **Badge** | Pill label for Docs chrome (version, interactive, pattern); tones `coral`, `teal`, `amber`; optional color dot |
| **Box** | Container with default or glass style; optional header and footer; `headerOutside` places the header in the outer container; supports dark mode |
| **Button** | Primary UI action with variants (type, fill, mode) and optional icon |
| **Card** | Elevated surface (white, subtle, or transparent fill; `rounded-2xl`/`rounded-3xl`; `pio-grid` border; soft/card shadow). Not a substitute for **Box** |
| **Checkbox** | Form checkbox control |
| **CircleSpinner** | Circular loading indicator |
| **Input** | Text input with type, fill (`solid`, `outline`, `ghost`), rounding, optional label, hint, and icon |
| **Label** | Text label with optional icon and type styling |
| **Select** | Dropdown select control |
| **Spinner** | Loading spinner |
| **Switch** | Toggle switch |
| **Title** | Heading / title text; font families `lexend`, `poppins`, `playfair`, `jakarta`; `uppercase` and optional side `dot` (`dotTone`: coral, teal, amber) |

## Molecules

| Component | Description |
|-----------|-------------|
| **Calendar** | Date picker with single or range selection; Lienzo-styled wrapper around React DayPicker |
| **CodeBlock** | Code panel: light filename bar, copy-to-clipboard, JetBrains Mono; `codeMode` (`dark` default, `light`) styles only the syntax pane and ignores the app theme; optional `language` highlighting via prism-react-renderer |
| **LineChart** | Line chart built with Recharts; configurable series, curve type, grid, top-left legend (dot + bold label), tooltip, dots, and reference lines; pio series colors |
| **Menu** | Menu component (dropdown/list) |
| **Tabs** | Tabbed navigation (`tablist` / `tab` / `tabpanel`); variants `underline` (default), `pills` (coral active pill), `segmented` (white chip on beige track); only the active panel is mounted |
| **Toolbar** | Horizontal toolbar of items (buttons or labels); supports menus |

## File conventions per component

Each component lives in its own folder under `atoms/` or `molecules/`. Typical files:

| File | Purpose |
|------|---------|
| `ComponentName.tsx` | React component and its props interface |
| `ComponentNameStyles.ts` | (Optional) Tailwind class strings exported as objects (e.g. [BoxStyles.ts](../src/components/atoms/Box/BoxStyles.ts), [ButtonStyles.ts](../src/components/atoms/Button/ButtonStyles.ts)) |
| `ComponentName.css` | (Optional) Component-specific CSS when Tailwind is not enough (e.g. [Button.css](../src/components/atoms/Button/Button.css)) |
| `ComponentName.stories.tsx` | Storybook CSF stories: a hidden `Default` story for Docs (not listed in the sidebar), plus visible variant galleries |
| `ComponentName.mdx` | Storybook Docs page via **`ComponentDocsPage`** (mandatory template). Required: title, version badge (default `0.1.0`), overview/use cases, Live Preview (style-only Controls), Variations (once stories exist), Props API, and a short code example. Optional: breadcrumb, usage/best practices. Design is owned by the template—do not restyle in MDX. See [Component Docs](component-docs.md) |

**Pattern**: Prefer Tailwind for styling. Use `*Styles.ts` to keep class names in one place. Use `.css` only when Tailwind cannot handle the case (e.g. keyframes, complex selectors). Many components use shared types from `@interfaces/sizes` (e.g. `RoundedSizes`).

---

## Adding a new component

1. Create a folder under `src/components/atoms/` or `src/components/molecules/` (e.g. `src/components/atoms/MyAtom/`).
2. Add `ComponentName.tsx` with the React component and its props interface.
3. Add optional `ComponentNameStyles.ts` for Tailwind class strings and optional `ComponentName.css` if needed.
4. Add `ComponentName.stories.tsx` and `ComponentName.mdx` so the component appears in Storybook. Set `title` to `Atoms/ComponentName`, `Molecules/ComponentName`, or `Organisms/ComponentName`. Docs MDX must use `ComponentDocsPage` and follow the content/design contract in [Component Docs](component-docs.md) (reference: [LineChart.mdx](../src/components/molecules/LineChart/LineChart.mdx)). Also see [Storybook](storybook.md).
5. Use path aliases for imports (e.g. `@atoms/MyAtom/MyAtom`, `@interfaces/sizes`).
6. Use design tokens from the Tailwind theme where possible (see [Design tokens & colors](design-tokens-colors.md)).

For component implementation patterns, see existing atoms (e.g. Box, Button) and molecules (e.g. Toolbar). For Docs pages, follow [Component Docs](component-docs.md) and the LineChart reference.
