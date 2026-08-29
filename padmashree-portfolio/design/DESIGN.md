# Design system: editorial quant

The reference the build follows. Anchored on the Stripe DESIGN.md
(`anchor-stripe.DESIGN.md`) for its credible, precise, financial-infrastructure
feel, then diverged exactly where the project spec (section 2) requires.

## What we kept from the anchor

- Deep near-navy ink, never pure black. Cool off-white surfaces.
- Numbers treated as first-class content, set in tabular lining figures.
- Hairlines used sparingly; subtle, cool-tinted elevation.
- One saturated accent, reserved for CTAs, links, active states, and a single key
  number per view. Never an accent as body text, never an accent stripe on every card.
- Generous whitespace and typographic weight for hierarchy, not boxes and stripes.
- An 8px-based spacing rhythm and a restrained radius scale.

## Where we diverged (spec section 2)

- **Three type roles, not one font.** The anchor runs one sans everywhere. We use a
  serif for display, a grotesque sans for body and UI, and a monospace with tabular
  figures for every number.
  - Display and headings: **Source Serif 4** (editorial authority, credible).
  - Body and UI: **IBM Plex Sans** (engineered, analytical; not Inter).
  - Numerics, data labels, code: **IBM Plex Mono** with `tnum` lining figures.
- **Accent is deep teal, not indigo.** No purple-to-blue gradient. No gradient mesh
  (the anchor's signature is dropped). Hierarchy comes from type and space.
- **Paper is a cool near-white** (`#f6f7f8`), never beige or cream, never pure white.

## Tokens

Defined once in `src/app/globals.css` under `@theme`, exposed both as Tailwind
utilities (`bg-paper`, `text-ink`, `border-hairline`, `text-accent`) and as CSS
custom properties (`var(--color-accent)`) for use inside SVG charts.

| Role | Token | Value |
| --- | --- | --- |
| Page paper | `--color-paper` | `#f6f7f8` |
| Elevated surface | `--color-surface` | `#ffffff` |
| Sunken surface | `--color-sunken` | `#eef1f3` |
| Ink (primary) | `--color-ink` | `#13222b` |
| Ink (secondary) | `--color-ink-2` | `#3a4a53` |
| Ink (muted) | `--color-ink-muted` | `#556069` |
| Hairline | `--color-hairline` | `#e3e7e9` |
| Accent (deep teal) | `--color-accent` | `#0e6e63` |
| Accent (deep) | `--color-accent-deep` | `#094f48` |
| Accent (soft tint) | `--color-accent-soft` | `#e4efec` |
| Positive (data only) | `--color-positive` | `#2e7d5b` |
| Negative (data only) | `--color-negative` | `#b0432c` |
| Warning (data only) | `--color-warning` | `#9a6a0a` |

## Anti-slop rules (non-negotiable)

- No em dashes anywhere, in copy or comments. Commas, colons, or periods.
- No Inter-for-everything. No purple-to-blue gradients. No cards nested inside cards.
- No gray body text on colored backgrounds. No rounded-square icon tile above every
  heading. No accent stripe down the side of every card. No cream or beige backgrounds.
- Every figure renders in the mono tabular face so digits align in columns.

## Motion

Motion serves comprehension only. Everything respects `prefers-reduced-motion` and
falls back to a static, fully legible state. Short, physical transitions over long
parallax. Nothing delays the reader from reaching content: the site reaches a
readable, navigable first paint before any chart or 3D hydrates.
