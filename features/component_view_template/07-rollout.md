# Stage 07 — LineChart pilot, rollout, and public docs

**Status:** spec (not implemented)  
**Depends on:** [06-docs-page-template.md](06-docs-page-template.md)

## Goal

1. Migrate **LineChart Docs only** first as the full-template pilot.  
2. Then migrate other `Component.mdx` files using the **required core**, adding optional sections only when content is real.  
3. Publish [Documentation/component-docs.md](../../Documentation/component-docs.md) and point Storybook docs at it.

## In scope

- [src/components/molecules/LineChart/LineChart.mdx](../../src/components/molecules/LineChart/LineChart.mdx) on `ComponentDocsPage`
- LineChart optional content that is truthful (see below)
- Remaining component MDX files after the pilot is accepted
- `Documentation/component-docs.md` (what a Docs file is; required vs optional)
- Updates to [Documentation/storybook.md](../../Documentation/storybook.md), [Documentation/index.md](../../Documentation/index.md), and any token/component docs still stale from stages 01–04
- [Documentation/component-structure.md](../../Documentation/component-structure.md) MDX convention row

## Out of scope

- Area Chart component
- Custom LineChart Controls (series editor, palettes, weekly/monthly)
- Rewriting variant story **implementations** (`ChartOnly`, `WithBox`, …) except as Variation canvases
- Storybook manager redesign

## Pilot: LineChart

**Required**

- Title: LineChart
- Description: keep/extend the current one-liner (Recharts, series, axes, grid, tooltip)
- Live Preview: `Default` Canvas + Controls (`height`, `showGrid`, `showTooltip` only)

**Optional — include**

- Overview / use cases: 3–4 bullets that match a **line** chart (trends over time, comparing a small number of series)—not Area Chart volume-under-the-curve copy from Stitch
- Variations: tabs for existing stories, e.g. ChartOnly, WithBox, WithAlternatingDotColors (labels in product language)
- Props API: document real `LineChartProps` (`data`, `series`, `xAxisKey`, `height`, `showGrid`, `showTooltip`, `width`, `yAxisDomain`, etc.), including props hidden from Controls
- Usage: when a line chart is appropriate vs when to prefer another visualization; do not paste Stitch Area Chart do/don’t
- Code example: CodeBlock with a **LineChart** snippet using the same sample shape as stories (not `@lienzo/core` AreaChart)

**Optional — omit**

- Version chip unless the library has a real version to show
- Breadcrumb “Charts / Area Chart”
- Mock-only metrics, spline tension, gradient fills

**Verify**

- Sidebar still lists Docs first, then ChartOnly, WithBox, WithAlternatingDotColors
- Default still hidden
- Theme switcher; dark mode Docs readable
- Controls still update the preview

## Rollout after pilot

Order (suggested): other molecules (Calendar, Tabs, Toolbar, Menu), then atoms. Many atoms stay **title + description + Live Preview** (and props table if useful). Do not add Variations tabs that only duplicate a single sidebar story.

Existing MDX files to migrate:

- Atoms: Background, Box, Button, Checkbox, CircleSpinner, Input, Label, Select, Spinner, Switch, Title
- Molecules: Calendar, LineChart (pilot), Menu, Tabs, Toolbar

## `Documentation/component-docs.md`

Create this file in stage 07 implementation (not in the current spec-only pass). It must state:

- What a component documentation file is (`ComponentName.mdx` + CSF)
- Required sections
- Optional sections
- Style-only Controls rules (can summarize and link [storybook.md](../../Documentation/storybook.md))
- Hidden Default + variant stories remain
- LineChart as the reference of a richer page; Button-like atoms as the minimal page
- Pointer to `features/component_view_template/` only as historical spec, or omit once public docs exist

Update `storybook.md` “Docs vs variant stories” and the example MDX to the template. Index the new doc from `Documentation/index.md`.

## Current system

LineChart MDX today:

```mdx
# LineChart
<Meta of={Stories} />
Line chart built with Recharts. …
<Canvas of={Stories.Default} />
<Controls of={Stories.Default} />
```

## Implementation notes

1. Do not merge “migrate all MDX” in the same session as the LineChart pilot if review is needed; the spec allows two implementation sessions under this stage (07a LineChart + docs page, 07b remaining MDX).
2. Placeholder copy is allowed only for optional sections you choose to show; prefer omitting the section to “lorem ipsum”.
3. If the template lives in `src/docs/`, add a path alias only if the repo already patterns that way; otherwise relative imports from MDX are fine.

## Acceptance criteria

- LineChart Docs uses the new template, required sections, and only truthful optional sections.
- At least one atom Docs page uses required-only template (proves empty optionals are not rendered)—may be part of 07b.
- `Documentation/component-docs.md` exists and is linked from the docs index.
- `storybook.md` no longer describes Docs as “description + Canvas + Controls” only, without the contract.
- Variant stories still work as galleries with Controls disabled.

## Handoff

Feature complete for v1. Further Stitch fidelity (custom Controls, copy-from-args, manager chrome) is out of this sequence.
