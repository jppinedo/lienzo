# Stage 03 — Surfaces and code block

**Status:** spec (not implemented)  
**Depends on:** [02-storybook-docs-canvas.md](02-storybook-docs-canvas.md)

## Goal

Ship reusable UI for Docs sections: elevated cards, pill badges, section eyebrows + titles, and a dark code panel with copy. Prefer library components over one-off MDX markup.

## In scope

- Card / panel surface (white or token card, `rounded-2xl`–`rounded-3xl`, `pio-grid` border, soft shadow from stage 01)
- Pill badge (coral-pale / teal wash, small label)
- Section header pattern: color dot + uppercase eyebrow + serif `h2`
- **CodeBlock** molecule (or atom if it has no Tabs/Button composition): filename bar, copy button, dark body, JetBrains Mono, token-colored syntax if a highlighter is added
- Stories for CodeBlock; Docs for CodeBlock can wait until stage 07 or stay minimal (title + Live Preview)

## Out of scope

- Wiring CodeBlock into every component Docs page (stage 06–07)
- Pill **Tabs** (stage 04)
- Live Preview dual column (stage 05)
- Full syntax-theme parity with the Stitch HTML span colors (good enough contrast on dark-canvas is enough)

## Design mapping

| Stitch | Primitive |
|--------|-----------|
| White `rounded-3xl` bordered cards | Card surface |
| Version chip, “Interactive”, “Pattern: …” pills | Badge |
| `uppercase tracking-widest` + serif heading | SectionHeader (component or documented class set) |
| `data-purpose="code-example-card"` | CodeBlock |
| Copy Snippet button | CodeBlock copy control |

## Current system

- **Box** atom: product container (glass, header/footer)—not the Docs editorial card. Do not overload Box unless the APIs align cleanly; a Docs-oriented `DocsCard` or reuse of Box `className` is acceptable if documented.
- No syntax highlighter in [package.json](../../package.json).
- Buttons exist for copy CTAs; CodeBlock may use Button or a text button matching the mock.

## Implementation notes

1. **CodeBlock** API (minimum): `code: string`, optional `filename`, optional `language` for highlighting. Copy writes `code` to clipboard and shows brief “Copied” state (see `code-copy-handler` in `code.html`).
2. Highlighter: pick one small library (e.g. `prism-react-renderer` or Storybook’s existing Docs highlighter if it can be reused in a molecule). Record the choice in [Documentation/libraries.md](../../Documentation/libraries.md). If highlighting is too heavy for this stage, ship monospace + token keyword colors as a follow-up; the panel chrome must still ship.
3. Keep primitives in `src/components/` (atom or molecule) with `*Styles.ts` as per [Documentation/component-structure.md](../../Documentation/component-structure.md).
4. Tailwind `content` already includes `src/**`; new files are covered.
5. SectionHeader and Badge may be tiny atoms **or** a documented Tailwind recipe used only inside the Docs template (stage 06). Prefer real components if stage 06 would otherwise duplicate markup.

## Acceptance criteria

- CodeBlock story: dark panel, optional filename, copy works in the browser.
- Card/badge/section header are usable from React (or a single exported recipe) without copying Stitch HTML.
- New files listed in [Documentation/component-structure.md](../../Documentation/component-structure.md).
- No Docs template page yet.

## Handoff

Stages 05–06 import these primitives. Stage 06 must not invent a second code-panel look.
