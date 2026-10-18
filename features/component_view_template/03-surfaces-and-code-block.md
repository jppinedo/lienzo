# Stage 03 — Surfaces and code block

**Status:** implemented  
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
- Full syntax-theme parity with the mock HTML span colors (good enough contrast on dark-canvas is enough)

## Design mapping

| Design | Primitive |
|--------|-----------|
| White `rounded-3xl` bordered cards | Card surface |
| Version chip, “Interactive”, “Pattern: …” pills | Badge |
| `uppercase tracking-widest` + serif heading | Two **Title** atoms: `uppercase` + `dot` eyebrow, then `fontFamily="playfair"` |
| `data-purpose="code-example-card"` | CodeBlock |
| Copy Snippet button | CodeBlock copy control |

## Current system

- **Box** atom: product container (glass, header/footer)—not the elevated **Card** surface. Do not overload Box unless the APIs align cleanly.
- **prism-react-renderer** is a direct dependency for **CodeBlock** highlighting.
- Buttons exist for copy CTAs; CodeBlock uses a text button matching the mock (not the product Button atom).

## Implementation notes

1. **CodeBlock** API (minimum): `code: string`, optional `filename`, optional `language` for highlighting, `codeMode` (`dark` default | `light`) for the syntax pane only. Filename bar stays light and ignores the app theme. Copy writes `code` to clipboard and shows brief “Copied” state (copy-to-clipboard handler).
2. Highlighter: **prism-react-renderer** (direct dependency). Omit `language` for plain JetBrains Mono. Theme uses pio coral/teal/amber (not mock span-color parity). Prism inline `backgroundColor` is stripped so `codeMode` classes paint the pane.
3. Keep primitives in `src/components/` (atom or molecule) with `*Styles.ts` as per [Documentation/component-structure.md](../../Documentation/component-structure.md).
4. Tailwind `content` already includes `src/**`; new files are covered.
5. Section eyebrows use **Title** (`uppercase`, `dot`, `dotTone`) plus a second Playfair Title. **Badge** is a separate pill atom.

## Acceptance criteria

- CodeBlock story: dark panel, optional filename, copy works in the browser.
- Card/badge/section header are usable from React (or a single exported recipe) without copying raw HTML mocks.
- New files listed in [Documentation/component-structure.md](../../Documentation/component-structure.md).
- No Docs template page yet.

## Handoff

Stages 05–06 import these primitives. Stage 06 must not invent a second code-panel look.
