# Stage 05 — Live Preview layout

**Status:** spec (not implemented)  
**Depends on:** [03-surfaces-and-code-block.md](03-surfaces-and-code-block.md) (cards, badges). Does not replace Controls.

## Goal

Restyle the required **Live Preview** block so it approaches the Stitch dual-column card while keeping Storybook `<Canvas>` + `<Controls>` as the interaction system.

## In scope

- A wrapper (React component used from MDX) around Canvas + Controls
- Desktop: Controls in a left column (~4/12), Canvas in a right column (~8/12), shared rounded card, min-height in the spirit of the mock
- Mobile: stack (controls above or below canvas; pick one and document it—controls above matches the mock)
- Section title “Live Preview” + Interactive badge + optional helper text
- CSS restyle of the Controls table toward the customization panel (labels, spacing, hide redundant Storybook chrome where selectors allow)
- Document brittle Storybook class names and a fallback (stacked, still usable Controls)

## Out of scope

- Custom React form instead of Controls
- Series add/remove, palette theme buttons, segmented pills as **arg editors**
- “Copy React `<AreaChart />` Code” as a new codegen pipeline (optional Storybook `Source` later)
- Chart legend / time-granularity chrome that is not a component prop
- Changing which props appear in Controls (still [Documentation/storybook.md](../../Documentation/storybook.md) style-only rules)

## Design mapping

| Stitch `live-preview-section` | v1 |
|------------------------------|----|
| Dual-column card | CSS grid wrapper around blocks |
| “Control Panel” + Reset | Restyle Controls; use Storybook reset if present |
| Data series list | **Leave** — `data` / `series` are `control: false` |
| Line Style segmented | **Leave** as Control (radio/select if a prop exists; LineChart has no curveType) |
| Toggles | Boolean Controls, restyled if possible |
| Range sliders | Number Controls (LineChart `height`); native range only if Storybook control type is range |
| Palette theme | **Leave** |
| Copy React code button | **Leave** or later `Source` |
| Legend + Weekly/Monthly | **Leave** (not LineChart props) |
| SVG chart | The component inside Canvas |
| Status footer | Optional decorative caption; not a functional claim |

## Control-by-control (mock vs Storybook)

| Mock control | Typical Storybook Control | v1 |
|--------------|---------------------------|----|
| Add/remove series, color dots | Object/array | Untouched (`control: false`) |
| Line style Smooth/Straight/Spline | Radio / select | Only if the component has an enum prop |
| Show area gradient / data pins | Boolean | Switch/boolean Control if prop exists |
| Stroke width / curve tension | Number / range | Number Control if prop exists |
| Palette theme | Custom | Untouched |
| Reset defaults | Storybook reset | Keep |
| Copy component code | Source addon / custom | Deferred |

LineChart **Default** Controls today ([LineChart.stories.tsx](../../src/components/molecules/LineChart/LineChart.stories.tsx)): `height` (number), `showGrid` (boolean), `showTooltip` (boolean). Everything else is disabled. Live Preview for the pilot exposes **those three**, not the Area Chart panel.

## Current system

- MDX: `<Canvas of={Stories.Default} />` then `<Controls of={Stories.Default} />`
- Canvas renders an iframe/story; Controls bind to the same story args
- Bottom addon panel hidden (`showPanel: false`)

## Implementation notes

1. Wrapper example: `LivePreview` with `children` = Canvas + Controls, or explicit `of={Stories.Default}` rendering both internally (must still be the Storybook blocks so args stay connected).
2. Storybook 8 Docs DOM (`.docblock-argstable`, `.sbdocs-preview`, etc.) **will change**. Prefer wrapping + layout CSS; treat deep restyles as best-effort. Fallback: card around a vertical stack if grid breaks.
3. Do not fork `@storybook/blocks` Controls implementation.
4. Hide “Show code” on Canvas only if it conflicts with the card; keeping it is acceptable (maps to source).
5. Dark mode: card and table must remain readable under `data-mode="dark"`.

## Acceptance criteria

- Changing a Control still updates the Canvas instance in real time.
- Hidden Default story is unchanged; no new Default sidebar item.
- On a wide Docs viewport, Controls and Canvas sit in one card, two columns.
- LineChart Controls remain height / grid / tooltip only.
- No custom series editor.

## Handoff

Stage 06 always includes this Live Preview as a **required** section. Optional Stitch extras around it (helper caption) are template-level, not new Controls.
