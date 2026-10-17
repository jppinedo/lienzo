# Component structure

## Atomic Design in this project

Lienzo organizes UI into:

- **Atoms**: Small, indivisible UI pieces (buttons, inputs, labels, spinners, etc.).
- **Molecules**: Components composed from one or more atoms (e.g. Toolbar, Menu, Tabs, LineChart).
- **Organisms**: Reserved (`@organisms/*`); no organism components yet.
- **Templates**: Page-level layout shells with content slots (e.g. Phone with `children`).
- **Pages**: Specific instances of templates populated with real design-system content (e.g. CanvasStudio, WelcomeHero).

## Atoms

| Component | Description |
|-----------|-------------|
| **Background** | Full-bleed background wrapper; `type` `gradient` (turbulent SVG gradient; Live Preview default: Amber Dawn; Docs variants: Studio Teal, Charcoal Depth) or `dotted` (fill + dot grid, optional `vignette` / `vignetteColor`). Dotted supports optional `darkColors` / `darkVignetteColor` for Storybook / app `data-mode="dark"` |
| **Badge** | Pill label for Docs chrome (version, interactive, pattern); tones `coral`, `teal`, `amber`; optional color dot |
| **Box** | Container with default (`bg-pio-grid` outer, lighter inner) or glass style; optional header and footer; `headerOutside` places the header in the outer container; `shadow` (`none` / `soft` / `card`, same tokens as Card); supports dark mode |
| **Button** | Primary UI action with variants (type, fill, size, mode) and optional icon |
| **Card** | Elevated surface (white, subtle, or transparent fill; `rounded-2xl`/`rounded-3xl`; `pio-grid` border; soft/card shadow). Not a substitute for **Box** |
| **Checkbox** | Form checkbox (`type`: default gray, red, green, yellow); unchecked uses pio-bg / pio-grid |
| **CircleSpinner** | Circular loading indicator |
| **Input** | Text input with type, fill (`solid`, `outline`, `ghost`), rounding, optional label, hint, and icon |
| **Label** | Text label with optional icon and type styling |
| **Select** | Dropdown select control |
| **Spinner** | Loading spinner |
| **Switch** | Toggle switch (`type`: default gray, red, green, yellow); thumb inset 2px from track. Optional `offLabel` / `onLabel` / `offIcon` / `onIcon` enable a segmented pill; `type` tints the recessed track and active label/icon color |
| **Title** | Heading / title text; sizes `sm`–`xxxxl`; font families `lexend`, `poppins`, `playfair`, `jakarta`; optional `gradient` (`amber-dawn`, `studio-teal`, `charcoal-depth`, `coral-ember`, `teal-mist`, `deep-coral`) and `color` (`coral`, `teal`, `amber`, `stone`); `uppercase` and optional side `dot` (`dotTone`: coral, teal, amber) |

## Molecules

| Component | Description |
|-----------|-------------|
| **Calendar** | Date picker with single or range selection; Lienzo-styled wrapper around React DayPicker |
| **CodeBlock** | Code panel: light filename bar, copy-to-clipboard, JetBrains Mono; `codeMode` (`dark` default, `light`) styles only the syntax pane and ignores the app theme; optional `language` highlighting via prism-react-renderer |
| **LineChart** | Line chart built with Recharts; configurable series, curve type, grid, top-left legend (dot + bold label), tooltip, dots, and reference lines; pio series colors |
| **Menu** | Menu component (dropdown/list) |
| **Tabs** | Tabbed navigation (`tablist` / `tab` / `tabpanel`); variants `underline` (default), `pills` (coral active pill), `segmented` (white chip on beige track); only the active panel is mounted |
| **Toolbar** | Horizontal toolbar of items (buttons or labels); supports menus |

## Templates

| Component | Description |
|-----------|-------------|
| **Phone** | Mobile device-frame template: outer shell, Dynamic Island status bar, scrollable `children` slot, home indicator. Chrome ports the primary phone from the Stitch welcome hero (`lienzo_welcome/`). Content-agnostic. |

## Pages

| Component | Description |
|-----------|-------------|
| **CanvasStudio** | Filled Phone preview composing Input (search), Card, LineChart, Button, Title, Label, and CircleSpinner. Used as the interactive mobile mock inside WelcomeHero. Standalone stories use a Light/Dark Switch that updates Storybook’s global theme (`useGlobals` / addon-themes). |
| **WelcomeHero** | Welcome-page hero section: large LienzoHorizontalLogo (no duplicate wordmark title), “Design System” display title, early-stage product tagline, 13 Atoms / 6 Molecules callout, copyable `git clone` and `yarn install` pills, scroll CTA to `#welcome-foundations`, Core Foundation strip, and CanvasStudio. Accepts `isDark` / `onThemeChange`; stories wire those to Storybook’s global theme via `useGlobals` in the story function. Storybook theme-aware via `dark:` surfaces and Background `darkColors`; soft low-contrast dotted field. Uses Background, Title, Label, Button, Card, Switch, and CanvasStudio. LivePreview includes a stub foundations section for the scroll target. |

## File conventions per component

Each component lives in its own folder under `atoms/`, `molecules/`, `templates/`, or `pages/`. Typical files:

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

1. Create a folder under the matching tier (e.g. `src/components/atoms/MyAtom/`, `src/components/templates/Phone/`).
2. Add `ComponentName.tsx` with the React component and its props interface.
3. Add optional `ComponentNameStyles.ts` for Tailwind class strings and optional `ComponentName.css` if needed.
4. Add `ComponentName.stories.tsx` and `ComponentName.mdx` so the component appears in Storybook. Set `title` to `Atoms/ComponentName`, `Molecules/ComponentName`, `Organisms/ComponentName`, `Templates/ComponentName`, or `Pages/ComponentName`. Docs MDX must use `ComponentDocsPage` and follow the content/design contract in [Component Docs](component-docs.md) (reference: [LineChart.mdx](../src/components/molecules/LineChart/LineChart.mdx)). Also see [Storybook](storybook.md).
5. Use path aliases for imports (e.g. `@atoms/MyAtom/MyAtom`, `@templates/Phone/Phone`, `@interfaces/sizes`).
6. Use design tokens from the Tailwind theme where possible (see [Design tokens & colors](design-tokens-colors.md)).

For component implementation patterns, see existing atoms (e.g. Box, Button), molecules (e.g. Toolbar), and the Phone template. For Docs pages, follow [Component Docs](component-docs.md) and the LineChart reference.
