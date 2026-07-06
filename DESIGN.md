# Design

## Visual Theme

Soft code-editor. Scene: a recruiter opening the link on a laptop; the page reads like a favorite IDE theme, precise and full of personality, unmistakably built by a woman who codes. Mono coding typeface throughout, a soft humanist sans only for long-form body copy. Warm off-white "rosé" light theme and a deep-aubergine dark theme, with fuchsia / hot-pink as the primary and mint / peach / periwinkle used as syntax-highlight roles. Technologies are shown as colorful brand-logo chips. The backend credibility layer stays: mono indices, hairline spec-sheet structure, request-log texture, uptime status. Aesthetic lane: colorful editor theme over an engineering skeleton. Not cosmetic, not neon-ninja, not fake-CLI cosplay.

## Color

Strategy: **Committed** fuchsia accent + a small **full-palette** set of pastel syntax roles + full-color tech logos. Escalates to **Drenched** fuchsia in the final contact fold. OKLCH only, primary hue ~350 (hot pink); neutrals tinted toward it. Never #000/#fff. Theme is switchable (system default, saved to localStorage) via a no-flash inline script + `data-theme` on `<html>`.

Light ("rosé"):

- `--color-paper` `oklch(0.985 0.007 350)` — page background, warm off-white
- `--color-blush` `oklch(0.96 0.016 350)` — hover tints, soft surfaces, chip fills
- `--color-line` `oklch(0.9 0.02 350)` — hairline rules
- `--color-ink` `oklch(0.27 0.035 345)` — primary text, warm aubergine-charcoal
- `--color-muted` `oklch(0.48 0.04 348)` — secondary text / body
- `--color-faint` `oklch(0.63 0.04 350)` — comments, decorative annotations
- `--color-accent` `oklch(0.56 0.2 350)` — fuchsia: links, buttons, drench bg, selection, wordmark caret
- `--color-accent-deep` `oklch(0.47 0.19 350)` — hover, text on cream buttons
- `--color-cream` `oklch(0.99 0.006 350)` — text/buttons on the drench fold, icon tiles
- `--color-mint` `oklch(0.5 0.1 172)` — syntax role: stack/section labels, bullets
- `--color-peach` `oklch(0.6 0.13 55)` — syntax role: project "kind" tags
- `--color-periwinkle` `oklch(0.52 0.14 265)` — syntax role: indices, numbers, log ticker
- `--color-ok` `oklch(0.6 0.11 165)` — status dot only

Dark ("aubergine") remaps the same tokens: paper `0.19 0.028 340`, ink `0.94 0.013 345`, accent `0.58 0.2 350` (held mid-dark so cream text on it keeps AA), with mint / peach / periwinkle brightened to true pastels (L ~0.8).

## Typography

- **JetBrains Mono** (variable) — the primary voice: hero H1, all section/heading names, contact H2, wordmark, nav, indices, labels, buttons, tags, log ticker. Headings use weight 700, tight tracking, sentence case; leading ~1.12. No italics (accent words get a "selection highlight" chip instead).
- **Karla** (variable) — humanist sans, reserved for long-form body paragraphs and the summary only.
- Scale: fluid clamp() (~2rem → 4.25rem hero), ratio ≥1.25 between steps. Mono is wider, so display sizes are smaller than a serif system would use.

## Components & Motifs

- **Wordmark**: `~/helee` in mono with an accent block caret that blinks (halted under reduced motion). Editor identity, not CLI cosplay.
- **Section header row**: mono periwinkle index + bold caps mono label + hairline rule.
- **Project rows** (never cards): hairline-separated rows — periwinkle index, mono name, peach kind tag, description, mono tags, arrow. Hover: blush tint + brighter index + arrow slide.
- **Spec-sheet lists** for skills: mono mint `# label` column + value column.
- **Selection-highlight chip**: accent-word emphasis rendered as a rounded translucent-accent background behind normal-color text (like selected text in an editor), replacing the old serif italic.
- **Code-comment eyebrow**: hero eyebrow prefixed with a faint `//`; stack line styled as a `const stack = …` declaration.
- **Request-log ticker**: hero texture, periwinkle at ~20% opacity, aria-hidden, off under reduced motion.
- **Status pill**: mint dot + "Open to backend roles" mono.
- **Tech chips** (`TechTag`): full-color Iconify `logos:` brand icon on a small light tile + mono label; used in the hero stack array, project tags, and the Stack section. Items without a known logo get a tinted `code` glyph.
- Buttons: **rounded-md** (editor UI), not pills. Fuchsia solid primary; hairline ghost secondary; cream-on-fuchsia inside the drench fold.
- Theme toggle: rounded-md icon button (sun/moon), hover to accent.

## Motion

Motion (motion/react) — hero load stagger (opacity + 14px y, ease-out-expo ~0.7s), whileInView once-only reveals. Ticker + caret are CSS keyframes. Theme change cross-fades background/color 0.3s. No bounce. `prefers-reduced-motion` disables entrance animation, ticker, caret blink, and theme transition.

## Layout

Strict grid, left-aligned, asymmetric two-col bands (experience, about). Max width ~72rem, fluid side padding, clamp() section spacing (~7-10rem). Hairlines separate every band. No nested containers, no card grids.
