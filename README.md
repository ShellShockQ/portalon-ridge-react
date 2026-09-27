# Portalón Ridge — Investor Prospectus (React + TypeScript)

A Vite + React + TypeScript rebuild of the Portalón Ridge land-acquisition
prospectus. All deal content (numbers, copy, photo captions) lives in
`src/data/content.ts`, typed, so you can update figures without touching
any component markup.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

## Building for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Project structure

```
src/
  data/content.ts        All editable copy, numbers, and photo captions
  components/            One component per section of the page
  assets/                Site photos (bundled by Vite, optimized on build)
  styles/global.css      Shared design system (colors, type, layout)
  App.tsx                Assembles the page from the section components
  main.tsx               React entry point
```

## Updating the deal terms

Open `src/data/content.ts` and edit the relevant export — for example,
`returnRows` for the return-summary table, or `offeringTerms` for the
offering-terms grid. TypeScript will flag anything that doesn't match
the expected shape.

## Replacing photos

Drop a new image into `src/assets/`, then either replace an existing
file (same name) or add a new entry in `galleryPhotos` in
`src/data/content.ts` plus a matching import in
`src/components/PhotoGallery.tsx`'s `imageMap`.

## Known placeholders

Several fields are still bracketed placeholders pending real inputs:
acquisition-basis discount %, preferred return, sponsor promote split,
target close date, two team member names/bios, and the risk-disclosure
section (which should be reviewed by counsel before this is shared with
any investor).
