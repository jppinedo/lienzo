# Component Docs

A **component documentation file** is the Storybook **Docs** entry for a component: `ComponentName.mdx`, bound to that component’s CSF stories (`ComponentName.stories.tsx`). It is the interactive reference—live instance, style-only Controls, and written guidance. Variant galleries remain sibling sidebar stories.

Use [ComponentDocsPage](../src/docs/ComponentDocsPage/ComponentDocsPage.tsx) from every `Component.mdx`. Import via `@docs/ComponentDocsPage`.

## Required sections

Every Docs page must include:

1. `<Meta of={Stories} />` (or equivalent) so Docs bind to the CSF file
2. **Title** — component name (Playfair display in the template)
3. **Short description** — one paragraph
4. **Live Preview** — hidden `Default` story via Canvas + style-only Controls (dual-column card from Live Preview)

Pass `title`, `description`, and `stories={Stories}` to `ComponentDocsPage`. Live Preview always binds `stories.Default`.

## Optional sections

Render only when content is real. Omit the prop (or pass empty) so the section is not shown—never leave empty cards.

| Slot | Content |
|------|---------|
| `breadcrumb` | Category path crumbs |
| `badge` | Version or status chip |
| `useCases` | Overview + common use-case list |
| `variations` | Pills Tabs + existing variant story canvases (no Controls on those canvases) |
| `props` | Props API table (hand rows and/or custom/`ArgTypes` node), including props hidden from Controls |
| `usage` | When to use / when to avoid |
| `example` | Copy-paste CodeBlock snippet |

**Do not** invent props, variants, or copy the component does not support. **Do not** replace Storybook Controls with a custom editor form.

## Style-only Controls

Docs Controls expose only props that affect visual appearance. Hide handlers, nodes, data structures, and generic `className` with `control: false` and `table: { disable: true }`. Full rules: [Storybook — Style-only Controls](storybook.md#style-only-controls).

## Hidden Default and variant stories

- **Default** — CSF export used only by Docs; hidden from the sidebar (`tags: ['!dev']` plus the manager filter). Controls on Docs update this instance.
- **Variant stories** — visible galleries in the sidebar; set `parameters: { controls: { disable: true } }`. Variations tabs on Docs (when present) do not replace them.

## Page richness

- **Richer reference**: [LineChart.mdx](../src/components/molecules/LineChart/LineChart.mdx) — use cases, variations, props API (including Control-hidden props), usage, and code example.
- **Minimal page**: most atoms (e.g. [Button.mdx](../src/components/atoms/Button/Button.mdx)) — title, description, and Live Preview only.

## Related

- Running Storybook, addons, and Controls conventions: [Storybook](storybook.md)
- Component folders and file conventions: [Component structure](component-structure.md)
- Historical staged specs (not runtime): [features/component_view_template/](../features/component_view_template/00-overview.md)
