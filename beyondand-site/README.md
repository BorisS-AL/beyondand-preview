# Beyond& — slim positioning surface

Static site at `beyondand-preview.netlify.app`. The visible delivery brand of the JV between Arthur Lawrence and theBPO.

Per the dual-brand architecture: AL FAS is the primary marketing surface with rich content. Beyond& is the thinner positioning surface — the conjunction made visible. Practice depth, sector detail, case studies, and intake forms all route to **al-fas-preview.netlify.app**.

## Architecture

Pure static HTML. No build step. Single shared stylesheet at `/assets/css/site.css`; small JS at `/assets/js/main.js`.

```
/
├── index.html                            Home — Ampersand Grid + outcome ribbon + thesis + trust stack + conversion
├── about/                                JV story, partnership credit, brand thesis, trust stack
├── people/                               Named-partner discipline statement; AL bios one click in
├── practices/                            Thin grid of 6 conjunctions, each linking to AL FAS practice depth
├── field-notes/                          Voice-varied POV (3 launch posts pulled from AL FAS, compressed into Beyond& voice)
│   ├── why-close-is-the-wrong-place-to-start/
│   ├── big-4-grade-governance/
│   └── fpa-supply-problem/
├── 404.html
├── netlify.toml                          Build + redirect config
└── assets/
    ├── css/site.css                      Red-on-dark / Newsreader + Inter
    └── js/main.js                        Active-nav highlighter + Ampersand Grid tap-toggle
```

## Voice

Conjunction-led. Restraint-led. Three-beat rhythm preserved (`Beyond ordinary. Beyond transactional. Beyond traditional.`). The ampersand is the typographic motif. Practices framed as "X & Y." Single italic CFO-line per page maximum (sparse compared to AL's operator-day-in-life density).

## Palette

- Background: `#0B0E14` (deep dark)
- Card surfaces: `#131722` and `#1A1F2D`
- Text: `#F4EFE6` (warm cream)
- Accent: `#E8170B` (AL red — same red the AL logo carries; both brands share this glyph color but diverge on palette around it)
- Display: Newsreader serif. Body: Inter.

## Partnership treatment

Per the dual-brand discipline:

- Footer carries the JV credit on every page: "A joint venture of **Arthur Lawrence** & **theBPO**."
- Body copy does not split capability by parent firm. The Beyond& brand reads as a single firm.
- Practice cells and Field Notes link out to AL FAS for engagement-level depth. Beyond& is the positioning surface; AL FAS is the catalog.

## Forms

`/diagnostic` and `/rfp` redirect to AL FAS intake with `?source=beyondand` query parameter so we can track Beyond&-sourced leads. Eventually Beyond& will host its own intake routed to a dedicated mailbox; for now everything funnels through the AL FAS Netlify Forms backend that's wired to `success.team@arthurlawrence.net`.

## Continuous deploy

GitHub repo `BorisS-AL/beyondand-preview` → Netlify project `beyondand-preview`. Every push to `main` triggers a build.

## Companion surface

The full FAS practice catalog with engagement-level depth lives at **al-fas-preview.netlify.app** (repo `BorisS-AL/al-fas-preview`). Cross-link patterns are stable; if you change practice slugs on AL FAS, mirror the change in this site's Ampersand Grid cells and practices index.
