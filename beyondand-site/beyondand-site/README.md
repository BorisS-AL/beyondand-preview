# Beyond& — slim positioning surface

Static site at `beyondand-preview.netlify.app`. The visible JV brand built for sponsor-grade finance work that doesn't end at the line item.

## Architecture

Pure static HTML. No build step. Single shared stylesheet at `/assets/css/site.css`; small JS at `/assets/js/main.js`.

```
/
├── index.html                            Home — Ampersand Grid + outcome ribbon + thesis + trust stack + conversion
├── about/                                What Beyond& is + how we work + the structure behind the brand
├── people/                               Named-partner discipline; the bench shape
├── practices/                            Six practice cards — each conjunction
├── field-notes/                          POV — three launch posts
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

Conjunction-led. Restraint-led. Three-beat rhythm preserved (`Beyond ordinary. Beyond transactional. Beyond traditional.`). The ampersand is the typographic motif. Practices framed as "X & Y." Single italic CFO-line per page maximum.

## Palette

- Background: `#0B0E14` (deep dark)
- Card surfaces: `#131722` and `#1A1F2D`
- Text: `#F4EFE6` (warm cream)
- Accent: `#E8170B` (brand red — the conjunction glyph and active marks render in this)
- Display: Newsreader serif. Body: Inter.

## Forms

`/diagnostic` and `/rfp` route to a partner-firm intake backend during the preview phase, with `?source=beyondand` query parameter for source tracking. Eventually Beyond& will host its own intake routed to a dedicated mailbox.

## Continuous deploy

GitHub repo → Netlify project `beyondand-preview`. Every push to `main` triggers a build.
