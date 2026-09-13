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
| **Box** | Container with default or glass style; optional header and footer; `headerOutside` places the header in the outer container; supports dark mode |
| **Button** | Primary UI action with variants (type, fill, mode) and optional icon |
| **Checkbox** | Form checkbox control |
| **CircleSpinner** | Circular loading indicator |
| **Input** | Text input with type, fill (`solid`, `outline`, `ghost`), rounding, optional label, hint, and icon |
| **Label** | Text label with optional icon and type styling |
| **Select** | Dropdown select control |
| **Spinner** | Loading spinner |
| **Switch** | Toggle switch |
| **Title** | Heading / title text; optional `className` for extra Tailwind or CSS classes |

## Molecules

| Component | Description |
|-----------|-------------|
| **Calendar** | Date picker with single or range selection; Lienzo-styled wrapper around React DayPicker |
| **LineChart** | Line chart built with Recharts; configurable series, axes, tooltip |
| **Menu** | Menu component (dropdown/list) |
| **Tabs** | Tabbed navigation with tab buttons |
| **Toolbar** | Horizontal toolbar of items (buttons or labels); supports menus |

## File conventions per component

Each component lives in its own folder under `atoms/` or `molecules/`. Typical files:

| File | Purpose |
|------|---------|
| `ComponentName.tsx` | React component and its props interface |
| `ComponentNameStyles.ts` | (Optional) Tailwind class strings exported as objects (e.g. [BoxStyles.ts](../src/components/atoms/Box/BoxStyles.ts), [ButtonStyles.ts](../src/components/atoms/Button/ButtonStyles.ts)) |
| `ComponentName.css` | (Optional) Component-specific CSS when Tailwind is not enough (e.g. [Button.css](../src/components/atoms/Button/Button.css)) |
| `ComponentName.stories.tsx` | Storybook CSF stories: a hidden `Default` story for Docs (not listed in the sidebar), plus visible variant galleries |
| `ComponentName.mdx` | Storybook Docs page: description, one live instance, and style-only Controls |

**Pattern**: Prefer Tailwind for styling. Use `*Styles.ts` to keep class names in one place. Use `.css` only when Tailwind cannot handle the case (e.g. keyframes, complex selectors). Many components use shared types from `@interfaces/sizes` (e.g. `RoundedSizes`).

---

## Adding a new component

1. Create a folder under `src/components/atoms/` or `src/components/molecules/` (e.g. `src/components/atoms/MyAtom/`).
2. Add `ComponentName.tsx` with the React component and its props interface.
3. Add optional `ComponentNameStyles.ts` for Tailwind class strings and optional `ComponentName.css` if needed.
4. Add `ComponentName.stories.tsx` and `ComponentName.mdx` so the component appears in Storybook (see [Storybook](storybook.md) for the Docs page pattern). Set `title` to `Atoms/ComponentName`, `Molecules/ComponentName`, or `Organisms/ComponentName`.
5. Use path aliases for imports (e.g. `@atoms/MyAtom/MyAtom`, `@interfaces/sizes`).
6. Use design tokens from the Tailwind theme where possible (see [Design tokens & colors](design-tokens-colors.md)).

For full conventions and examples, see existing atoms (e.g. Box, Button) and molecules (e.g. Toolbar) in the codebase.
