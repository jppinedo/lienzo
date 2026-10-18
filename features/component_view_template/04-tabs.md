# Stage 04 — Tabs evolution

**Status:** implemented  
**Depends on:** [01-tokens-fonts-colors.md](01-tokens-fonts-colors.md) (tokens/fonts). Canvas (02) and CodeBlock (03) are not required.

## Goal

Evolve the Tabs molecule so Docs can use pill and segmented patterns, without breaking existing underline tabs.

## In scope

- Variant API on Tabs (and TabButton as needed)
- **Default:** current underline tablist (`border-b`, teal underline on active)
- **Pills (Variations):** coral filled pill for active; muted text for inactive; wrap in a rounded-full track with border (`#variation-tabs-nav`)
- **Segmented:** white pill + shadow on a beige/`pio-bg-light` track (line style / time granularity in the mock)
- Stories for the new variants; keep existing Tabs Docs/stories working
- Keyboard/ARIA: retain `tablist` / `tab` / `tabpanel`

## Out of scope

- Using Tabs on LineChart Docs (stage 07)
- Restyling Live Preview Controls as segmented Tabs (forbidden in stage 05)
- Changing Tab content layout to the Variations 12-column grid (that is template content, not Tabs)

## Design mapping

| Design | Tabs variant |
|--------|----------------|
| Variations tab bar (`bg-lienzo-coral` active) | `variant="pills"` (name can differ; document it) |
| Line Style 3-up and Weekly/Monthly/Quarterly | `variant="segmented"` |
| Current Tabs molecule | `variant="underline"` default |

## Current system

- [src/components/molecules/Tabs/Tabs.tsx](../../src/components/molecules/Tabs/Tabs.tsx): `tabs[]`, optional `activeTab`, internal state, underline `nav`
- [src/components/molecules/Tabs/TabButton.tsx](../../src/components/molecules/Tabs/TabButton.tsx): `li` + button + teal underline bar
- [src/components/molecules/Tabs/Tabs.mdx](../../src/components/molecules/Tabs/Tabs.mdx): description + Canvas + Controls
- Stories under `Molecules/Tabs`

## Implementation notes

1. Add something like `variant?: 'underline' | 'pills' | 'segmented'` defaulting to `'underline'`.
2. TabButton must accept variant so active styles differ (underline bar vs filled pill vs white chip).
3. Pills track: container `inline-flex`, `rounded-full`, token border, wrap/`overflow-x-auto` for many tabs.
4. Do not use CDN emerald; active pills use `pio-coral` + white text.
5. Update Tabs stories: one story per variant with `parameters.controls.disable` on galleries; style-only Controls on Default if `variant` is exposed.
6. Update [Documentation/component-structure.md](../../Documentation/component-structure.md) Tabs one-liner to mention variants.

## Acceptance criteria

- Existing Tabs stories still look like underline tabs.
- Pills and segmented stories match the mock’s tab **chrome** (not the chart inside the panel).
- ARIA roles unchanged; panels still `hidden` when inactive.
- Default remains underline so undocumented usages do not jump to coral pills.

## Handoff

Stage 06 Variations section uses `pills` Tabs. Segmented is available for future Controls restyle or in-preview chrome; Live Preview **must not** replace Storybook Controls with Tabs in v1 ([05-live-preview.md](05-live-preview.md)).
