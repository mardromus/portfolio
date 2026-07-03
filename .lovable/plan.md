
# Retro Brutalist Portfolio — Kushagra Goyal

A loud, single-page portfolio in a retro-brutalist aesthetic: raw grids, thick black borders, hard drop shadows, mono + heavy display type, high-contrast accent color blocks, no rounded corners, deliberate "unstyled web" energy.

## Visual direction

- Palette: bone white `#f4f1ea` background, ink black `#0a0a0a`, one hot accent (electric red `#ff3b1f`), one cool accent (cobalt `#2b3aff`), mustard `#f5c518` for highlights.
- Type: Space Mono / JetBrains Mono for body + labels; Archivo Black or Rubik Mono One for oversized display headings. Loaded via `<link>` in `__root.tsx`.
- Motifs: 2–4px solid black borders, offset hard shadows (`8px 8px 0 #000`), rotated stickers/tags, ASCII dividers, grid guides, marquee ticker, halftone/noise texture overlay, star/asterisk bullets.
- Interactions: hover = shadow snaps to 0/invert colors; subtle marquee scroll; no smooth easing — snappy transitions only.

## Page structure (single route `/`)

1. **Nav bar** — name mark on left, section links + resume/GitHub/LinkedIn buttons on right, thick bottom border.
2. **Hero** — huge display name "KUSHAGRA GOYAL", subtitle "CS undergrad · AI/ML researcher · Systems tinkerer", location + contact chips, headshot (uploaded photo) in a bordered offset frame, sticker tags ("Available for research collabs", "Pune, IN").
3. **Marquee ticker** — scrolling: publications count, hackathon wins, languages, tools.
4. **About / Education** — Symbiosis Institute of Technology, B.Tech CSE 2023–2027, short bio.
5. **Experience** — Paws Care Animal Resq internship card with bullets.
6. **Publications & Research** — 4 papers as brutalist index cards (venue tag, title, one-line abstract, status pill).
7. **Projects** — grid of 5 project cards (Medical Image Gen @ IIT BHU, Simple Operator, MedDo, Lex Orion, AURA 1.0) with stack tags.
8. **Honors & Achievements** — 5 items as numbered rows with big rank numerals.
9. **Skills** — grouped chip walls (AI/ML, Specialized Systems, Languages, Tools).
10. **Contact / Footer** — email, phone, LinkedIn (`mardromus`), GitHub (`mardromus`), big signoff.

## Technical details

- New route: replace `src/routes/index.tsx` placeholder with the portfolio composition, split into section components under `src/components/portfolio/`.
- Head metadata in `index.tsx` `head()`: title "Kushagra Goyal — AI/ML Researcher & Builder", matching description, og/twitter tags.
- Design tokens in `src/styles.css`: add brutalist palette + `--shadow-brutal`, `--border-brutal`; font families via `@theme`; keep radius at 0 for portfolio classes via a utility (`@utility brutal-card`).
- Headshot: register `/mnt/user-uploads/1697777041697.jpg` via `lovable-assets` and import the pointer JSON.
- Resume: register the uploaded PDF as a Lovable asset; link from nav + hero "Résumé" button.
- Fonts loaded via `<link>` in `src/routes/__root.tsx` head (Google Fonts: Archivo Black, Space Mono, JetBrains Mono).
- Marquee: pure CSS keyframes (no JS lib).
- Icons: minimal — use text/ASCII glyphs and Lucide sparingly (Github, Linkedin, Mail, ArrowUpRight).
- Accessibility: semantic landmarks, alt text on headshot, sufficient contrast.

No backend, no auth, no Cloud needed.
