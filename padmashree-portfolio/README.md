# Padmashree Portfolio

A portfolio for a manufacturing and operations finance analyst. The through-line is
"finance that builds its own tools": every case study is a real analysis you can operate,
not a slide. Built as a self-contained Next.js app.

Design direction is editorial quant: a serif display face, a grotesque sans for body, a
monospace with tabular figures for every number, one deep-teal accent, and a cool
near-white paper. Anchored on the Stripe DESIGN.md and diverged per the build spec
(see `design/DESIGN.md` and `design/anchor-stripe.DESIGN.md`).

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4 (tokens in `src/app/globals.css`).
- MDX playbooks rendered at `/work/<slug>` with interactive React components embedded.
- Charts are hand-built SVG (d3-scale, d3-shape) so they render a static, readable default
  on the server and hydrate for interaction. No chart library runtime on the critical path.
- Motion is CSS-first and respects `prefers-reduced-motion`.

## Local setup

Requires Node 20 or newer (built on 22).

```bash
cd padmashree-portfolio
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Deploy (Vercel)

This app lives in a subfolder of the repository, so in the Vercel project set the
**Root Directory** to `padmashree-portfolio`. Everything else is stock Next.js: build
command `next build`, no special output settings.

Optional environment variables:

- `NEXT_PUBLIC_SITE_URL` : the production URL, used for absolute metadata, Open Graph,
  and the sitemap. Defaults to a placeholder.
- `NEXT_PUBLIC_CONTACT_ENDPOINT` : a form endpoint (for example a Formspree URL) that the
  contact form posts to. If unset, the form falls back to a mailto (when an email is set)
  and otherwise points people to LinkedIn.

## Decisions

All six were left blank in the brief, so the defaults were used:

1. App name: `padmashree-portfolio`.
2. Accent color: deep teal (`#0e6e63`).
3. DESIGN.md anchor: Stripe, diverged per spec section 2.
4. Contact method: contact form plus LinkedIn, with a dedicated email once set. No phone.
5. OpenClaw: **unresolved and not invented.** A clearly labeled `TBD` stub exists at
   `/work/openclaw` and is kept out of the public Selected Work listing. See open questions.
6. Full playbooks: hours-per-unit denominator, hours-per-unit data-quality fix, OpEx and
   CapEx forecast, month-end close automation, efficient frontier, Dollar General
   valuation. Everything else from spec section 6.6 is a short card.

## Structure

```
src/
  app/                 routes: /, /about, /contact, /work/[slug], sitemap, robots, og image
  components/
    charts/            the interactive analyses (SVG + state)
    site/              header, hero, sections, footer, playbook layout
    ui/                design-system primitives
    mdx/               MDX component map
  content/
    data/              typed seed data (real figures from the design doc section 6)
    work/*.mdx         the playbook write-ups
  lib/                 formatting, matrix math, hooks, site config
design/                the DESIGN.md anchor and the project design system
public/                resume PDF, static assets
```

## Data sources

Real figures come from the internship review deck and resume, as transcribed in the design
doc section 6 and stored in `src/content/data/`. Two models use clearly-labeled
illustrative sample inputs, not proprietary data: the efficient frontier
(`efficient-frontier.ts`) and the Dollar General valuation (`dcf.ts`).

## Accessibility and performance

- Lighthouse: 100 on the landing page on desktop across performance, accessibility, best
  practices, and SEO; on mobile, performance is 95 or above and the other three are 100
  (checked on the landing and the heaviest playbook page).
- Every interactive has a static default, is keyboard-operable, and announces its values.
- The experience timeline uses native `details`, so the expanded state works without
  JavaScript.
- `impeccable detect src` reports zero findings. No em dashes anywhere.

## 3D hero

Deliberately skipped, per design doc section 5. For a finance audience, a heavy 3D hero
risks reading as decoration over substance and can cost first paint. The static editorial
hero is the intended finish. To add one later: use img2threejs for a single hero object,
lazy-loaded, gated behind `prefers-reduced-motion` with a static mobile fallback, and only
if it clears the first-paint rule.

## Open questions to resolve before launch

1. **OpenClaw.** Not specified in the brief, so it was not invented. If it is a real
   project of Padmashree's, its details drop into the `/work/openclaw` stub using the same
   template. Otherwise it should be removed.
2. **Dedicated contact email.** Not provided. Set `siteConfig.contactEmail` in
   `src/lib/site.ts`, or set `NEXT_PUBLIC_CONTACT_ENDPOINT`. LinkedIn works meanwhile.
3. **Production URL and custom domain.** Set `NEXT_PUBLIC_SITE_URL` so metadata, Open
   Graph, and the sitemap use absolute URLs.
4. **Employment date ranges** in `src/content/data/experience.ts` are approximate. Confirm
   and correct them. (Anchored facts from the brief: CA cleared Jul 2023, B.Com Feb 2022,
   MS Finance expected Aug 2026.)
5. **Resume PDF** (`public/padmashree-resume.pdf`) is generated from the same content for
   review. Add a contact email and confirm details before distributing.
6. **LinkedIn handle.** Confirm the final custom handle and match it everywhere
   (`src/lib/site.ts`).
7. **Efficient frontier and DCF inputs** are illustrative samples. Swap in the real
   five-stock inputs and Dollar General assumptions if available.
8. **Line-level HPU data** (per assembly line) for the hours-per-unit toggle, if available.
   The model already supports per-line views; only the total series is shipped.

## Design toolchain

- Anchor: `awesome-design-md` (VoltAgent), Stripe DESIGN.md in `design/`.
- Generation direction: Taste Skill (`design-taste-frontend`) principles.
- Audit: Impeccable (`npx impeccable detect src`), used as the slop gate.
