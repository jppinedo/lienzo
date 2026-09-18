# Component view template — overview

**Status:** implemented (stages 01–07)  
**Depends on:** none  
**Purpose:** Index for this folder. Historical staged specs; lasting Docs rules live in [Documentation/component-docs.md](../../Documentation/component-docs.md) (mandatory sections, version badge default `0.1.0`, LineChart reference).

These files are **implementation specs**, not the public Storybook Docs template. When a stage discovers a constraint, update that stage file.

## How to use this folder

1. Read this overview (Docs contract + Live Preview matrix).
2. Implement stages **01 → 07** in order. Later stages assume earlier ones are merged.
3. Do not redesign the Storybook manager sidebar. Scope is the **Docs canvas** plus library primitives (tokens, fonts, Tabs, CodeBlock).
4. The Stitch Area Chart page is the **visual ceiling**, not a mandatory layout for every atom.

Sources of truth:

- [brand/stitch component view/code.html](../../brand/stitch%20component%20view/code.html)
- [brand/stitch component view/screen.png](../../brand/stitch%20component%20view/screen.png)
- [brand/stitch component view/DESIGN.md](../../brand/stitch%20component%20view/DESIGN.md)

Current Docs pattern: [Documentation/storybook.md](../../Documentation/storybook.md). Example: [src/components/atoms/Button/Button.mdx](../../src/components/atoms/Button/Button.mdx).

## Page anatomy (Stitch)

| Order | `data-purpose` in `code.html` | Role |
|-------|-------------------------------|------|
| 1 | `component-header` | Breadcrumb pill, serif title, version chip |
| 2 | `component-overview` | Description + common use cases |
| 3 | `live-preview-section` | Dual-column card: customization panel + live canvas |
| 4 | `component-variations` | Pill tabs + variant preview and copy |
| 5 | `props-table-container` | Props API table (`#props-specification-section`) |
| 6 | `usage-and-props-specification` | When to use / avoid + code example |

Not every component Docs page includes all of these. See **Docs page contract** below.

## Docs page contract

**Superseded for day-to-day work** by [Documentation/component-docs.md](../../Documentation/component-docs.md). That file is the lasting contract: most sections are **mandatory** (title + version badge default `0.1.0`, overview/use cases, Live Preview, Variations, Props API, short code example); **optional** are breadcrumb and usage/best practices. The notes below describe the original staged approach and are kept for history only.

A **component documentation file** is the Storybook **Docs** entry for a component (`ComponentName.mdx`), bound to that component’s CSF stories. It is the interactive reference: live instance, style-only Controls, and written guidance. Variant galleries remain sibling sidebar stories.

The Stitch mock shows the richest page. Lienzo uses a **shared page type** (`ComponentDocsPage`).

## Live Preview: keep vs restyle vs leave

Today every Docs page is description + Canvas + Controls. That **interaction model stays**.

### Keep (behavior)

- Hidden `Default` (`tags: ['!dev']` and sidebar filter in [.storybook/manager.js](../../.storybook/manager.js))
- Style-only Controls (`control: false` / `table: { disable: true }` for handlers, nodes, data, generic `className`)
- Sibling variant stories; `controls: { disable: true }` on galleries
- Real-time args → live instance
- Theme toolbar; `showPanel: false`

### Restyle (same system, closer to the mock)

- Dual-column card: Controls left, Canvas right
- Card radius, borders, shadows, “Live Preview” heading + Interactive badge
- Visual restyle of the Controls table where CSS allows
- Storybook reset if it exists; optional `Source` later as “copy code”

### Leave untouched in v1

- Custom arg editors (series add/remove, palette chips, coral segmented pills as the actual controls)
- Chart chrome that is not a LineChart prop (legend metrics, Weekly/Monthly/Quarterly, “hardware accelerated” footer as functional copy)
- Replacing Controls with a hand-built form
- AreaChart-only props from the mock

Detail and a control-by-control table: [05-live-preview.md](05-live-preview.md).

## Stage index

| Stage | File | Outcome |
|-------|------|---------|
| 01 | [01-tokens-fonts-colors.md](01-tokens-fonts-colors.md) | Token mapping, new tokens only if needed, library-wide fonts |
| 02 | [02-storybook-docs-canvas.md](02-storybook-docs-canvas.md) | Docs canvas background, glows, heading type |
| 03 | [03-surfaces-and-code-block.md](03-surfaces-and-code-block.md) | Cards, badges, section headers, CodeBlock |
| 04 | [04-tabs.md](04-tabs.md) | Tabs variants (underline default + pills / segmented) |
| 05 | [05-live-preview.md](05-live-preview.md) | Dual-column Live Preview around Canvas + Controls |
| 06 | [06-docs-page-template.md](06-docs-page-template.md) | Composable Docs page wrapper |
| 07 | [07-rollout.md](07-rollout.md) | LineChart pilot, then other Docs; `Documentation/component-docs.md` |

```
00-overview
    → 01-tokens-fonts-colors
        → 02-storybook-docs-canvas → 03-surfaces-and-code-block → 05-live-preview
        → 04-tabs
            → 06-docs-page-template (needs 04 + 05)
                → 07-rollout
```

## Conventions for stage files

Each `0N-*.md` uses:

- Status / Depends on
- Goal
- In scope / Out of scope
- Design mapping
- Current system
- Implementation notes
- Acceptance criteria
- Handoff

## What this feature is not

- A new Area Chart component
- A Storybook manager/sidebar redesign
- A requirement that every Docs page clone every Stitch section
