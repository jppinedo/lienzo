# Stage 06 — Docs page template

**Status:** spec (not implemented)  
**Depends on:** [04-tabs.md](04-tabs.md), [05-live-preview.md](05-live-preview.md)

## Goal

A composable Docs page wrapper that every `Component.mdx` can use. Always render **required** sections. Render **optional** sections only when the component passes content. Visual language follows Stitch for whatever is present. This is the draft of `Documentation/component-docs.md` (published in stage 07).

## In scope

- React (or MDX) template, e.g. `ComponentDocsPage`, used from component MDX files
- Required: title, description, Live Preview (stage 05 wrapper + Canvas/Controls)
- Optional slots: header extras, overview/use cases, variations (pills Tabs + canvases), props table, usage do/don’t, CodeBlock example
- Shared spacing, max width (`max-w-7xl` spirit), section headers from stage 03
- Keep sibling variant stories in the sidebar

## Out of scope

- Migrating all MDX files (stage 07; only the template ships here—optionally unused until LineChart)
- Filling fake use cases for atoms
- Manager/sidebar changes
- Requiring every slot on every page

## Design mapping

| Stitch section | Template slot | Required? |
|----------------|---------------|-----------|
| `component-header` title | Title | Yes |
| Header breadcrumb / version chip | `breadcrumb` / `badge` | No |
| Short description (overview left copy) | Description (required); full two-column overview optional | Description yes; two-column no |
| `component-overview` use cases | `useCases` | No |
| `live-preview-section` | Live Preview | Yes |
| `component-variations` | `variations` (Tabs pills) | No |
| `props-table-container` | `props` (ArgTypes or hand table) | No |
| `usage-and-props-specification` | `usage` + `example` | No |

## Docs page contract (canonical)

A component documentation file (`ComponentName.mdx`) is the Storybook Docs page for that component.

**Must have**

1. `Meta of={Stories}` (or equivalent) so Docs bind to the CSF file
2. Title (component name)
3. Short description
4. Live Preview: Canvas + Controls on hidden `Default`, style-only argTypes

**May have**

- Breadcrumb, status/version chip
- Overview + use cases
- Variations (tabs); does not replace sidebar galleries
- Props API table
- When to use / avoid
- Copy-paste code example

**Must not**

- Empty optional cards
- Invent props or variants the component does not have
- Use a custom control form instead of Storybook Controls
- Hide or remove variant stories from the sidebar as part of this template

## Current system

Every component MDX is the same shape: heading, one paragraph, Canvas, Controls. There is no shared wrapper. File list is in [Documentation/storybook.md](../../Documentation/storybook.md).

## Implementation notes

1. Place the template under something like `src/docs/ComponentDocsPage.tsx` (Docs infrastructure) **or** `src/components/` only if it is a product component. Prefer `src/docs/` so it is not treated as an atom/molecule in the sidebar unless it has stories. If it has no stories, exclude it from the sidebar via not adding a title, or a Docs-only path included by webpack but not as a story.
2. MDX usage sketch:

```mdx
import { Meta } from '@storybook/blocks';
import * as Stories from './LineChart.stories';
import { ComponentDocsPage } from '@docs/ComponentDocsPage';

<Meta of={Stories} />

<ComponentDocsPage
  title="LineChart"
  description="…"
  stories={Stories}
/>
```

Optional props omitted = section not rendered. `stories={Stories}` is how Live Preview binds Default.

3. Variations: array of `{ id, label, canvas, description? }` using pills Tabs and `<Canvas of={Stories.ChartOnly} />` etc. Do not enable Controls on those canvases.
4. Props table: styled HTML/table or Storybook `ArgTypes` styled to match; do not show disabled-from-Controls props unless documenting them as API (e.g. `data`, `series` for LineChart belong in an API table even if not interactive).
5. Update [Documentation/architecture.md](../../Documentation/architecture.md) if `src/docs/` grows a template module.

## Acceptance criteria

- Template can render **only** required sections without empty optional cards.
- Template can render optional sections when given content.
- Live Preview still updates from Controls.
- No production component MDX is required to switch in this stage except a smoke-test MDX if needed; LineChart migration is stage 07.

## Handoff

Stage 07 pilots LineChart with required + truthful optional sections, then writes `Documentation/component-docs.md` from this contract.
