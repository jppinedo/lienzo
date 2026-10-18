# Stage 02 — Storybook Docs canvas

**Status:** implemented  
**Depends on:** [01-tokens-fonts-colors.md](01-tokens-fonts-colors.md)

## Goal

Make the **Docs page canvas** (not the manager chrome) read as the warm studio: background, ambient glows, heading hierarchy, selection color. Do not assemble header / overview / Live Preview sections yet.

## In scope

- Docs background using mapped canvas tokens (`pio-bg` or `light-canvas`)
- Ambient coral/teal mesh glows behind the Docs article (see ambient-canvas / glow-coral / glow-teal patterns)
- MDX / Docs typography: Playfair for major headings, Jakarta for body
- Text and selection colors from tokens
- Light-mode Docs look; dark-mode Docs should remain usable (`data-mode="dark"`) without cloning the light-mode mock

## Out of scope

- Manager sidebar, toolbar, or addon panel
- Dual-column Live Preview (stage 05)
- Cards, badges, CodeBlock (stage 03)
- Tabs variants (stage 04)
- Per-component MDX content

## Design mapping

| Design | Docs canvas equivalent |
|--------|------------------------|
| `body.bg-lienzo-bg` | `.sbdocs` / docs wrapper background |
| Fixed glow divs | Pseudo-elements or decorative layers on the docs container; `pointer-events: none` |
| `h1` Playfair, large tracking-tight | `#docs-root` / `.sbdocs h1` |
| `h2` / `.serif-heading` | `.sbdocs h2` |
| Body Plus Jakarta Sans | `.sbdocs` font-family |
| `selection:bg-lienzo-coral-soft` | `::selection` using coral-pale / coral opacity |

Do not restyle the **story iframe** (`docs-story`) background to the marketing canvas if that would hide how components look on `light-canvas` / `dark-canvas`. Prefer the **article** around the preview to carry glows and warm fill; keep the Canvas inner background as it is today unless contrast is broken.

## Current system

- Global Storybook CSS: [.storybook/story-global.css](../../.storybook/story-global.css) (Lexend/Poppins, light/dark canvas on `html` and `.docs-story`)
- Preview: [.storybook/preview.ts](../../.storybook/preview.ts) imports `src/tailwind.css` and `story-global.css`
- Theme: `withThemeByDataAttribute` (`data-mode`)
- Docs MDX uses default Storybook blocks (unstyled relative to the Docs target)

## Implementation notes

1. Scope selectors to Docs (` .sbdocs`, `.sbdocs-wrapper`, `#storybook-docs`) so variant **Canvas** stories and the manager are not flooded with Playfair.
2. Prefer a custom `docs.container` in `preview.ts` only if CSS cannot attach glows to the wrapper.
3. Glows: `radial-gradient` with `rgb(var(--lz-pio-coral) / 0.18)` and teal equivalent; `filter: blur`; fixed or absolute inside the docs wrapper.
4. Keep existing `.docs-story` canvas colors for the live component frame unless stage 05 needs a white card around it.
5. Update [Documentation/storybook.md](../../Documentation/storybook.md) briefly: Docs pages use brand canvas typography.

Implemented in [.storybook/story-global.css](../../.storybook/story-global.css) without a custom `docs.container`. Coral and teal orbs are `::before` / `::after` on `.sbdocs-wrapper`; a third coral wash is a radial on `#storybook-docs`. Dark Docs use `dark-canvas` and `blue-200` text so contrast holds without cloning the light mock.

## Acceptance criteria

- Opening any existing Docs page (e.g. Button) shows warm canvas + subtle glows behind the article.
- H1/H2 on Docs use Playfair; body copy uses Jakarta.
- Variant story **Canvas** pages (non-Docs) are not required to match the marketing page.
- Dark mode Docs remain readable (no white-on-white or lost contrast).
- No new Live Preview layout yet: Canvas still sits above Controls as today.

## Handoff

Stage 03 adds surface primitives that sit **on** this canvas. Stage 05 will wrap Canvas + Controls; it may override `.docs-story` chrome but should keep the article background from this stage.
