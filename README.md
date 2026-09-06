# Muhammet Kaya - Portfolio

Personal portfolio site. English first, with a Turkish translation available from the header.

Live: https://portfolio-t8u9.vercel.app/

## Stack

- Next.js 15 (Pages Router) + React 19 + TypeScript
- Tailwind CSS v4 (design tokens declared in `styles/globals.css` via `@theme`)
- Geist / Geist Mono for type, `next/image` for every raster asset

## Design system: Datasheet

The page is a printed specification, not a dark product page. Two rules hold the
whole thing together:

- **Radius is 0.** Everywhere, no exceptions.
- **Structure is drawn with 1px rules.** Nothing floats on a shadow, and there
  are no cards; content sits on ruled grids and in real tables.

Paper ground (`#f2f2f1`), ink type (`#101010`), and a single accent taken from
the personal mark: the blue `#1a47c8`. Mono carries every label, key and number;
the sans carries prose and headlines. Motion is state-only - hover and focus
transitions at 130ms, no entrance choreography, no scroll-triggered reveals.

Sections use different structures on purpose: hero spec block, ruled figure row,
notes-and-prose columns, index-plus-detail sheet, Gantt plus record list, and a
capability matrix.

### Charts

The career Gantt in `components/CareerChart.tsx` follows the dataviz procedure:
form first (magnitude over time), colour by identity (domain), then validation.
The five-hue categorical palette in `content/site.ts` passes the lightness band,
chroma floor, CVD separation, normal-vision floor and contrast checks against the
light chart surface. The chart ships a legend, a hover readout, `<title>` on every
mark and a full table view.

### Accessibility

Reviewed against the [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines):
visible focus on every interactive element, `aria-label` on control groups,
explicit image dimensions, `color-scheme: light`, `scroll-margin-top` on section
anchors, tabular numerals for figures, `prefers-reduced-motion` honoured, and the
project filter reflected in the URL so a filtered view can be linked.

## Bilingual content

There is no translation framework. `lib/i18n.tsx` holds a small context with a
locale (`en` by default, `tr` on request or when the browser language is
Turkish) persisted to `localStorage`, and `content/site.ts` holds every string
once as `{ en, tr }` so the two languages cannot drift apart.

Adding or editing copy means editing `content/site.ts` only.

## Structure

```
components/     One file per section, plus Sheet (container + section header)
content/site.ts All copy and data, bilingual, single source of truth
lib/i18n.tsx    Locale context and the t() resolver
pages/          _app, _document and the single page composition
public/logos/   Project marks, served locally so no third-party link can break
styles/         Design tokens, base layer, motion
```

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Contact

- Email: mkaya349@hotmail.com
- LinkedIn: https://www.linkedin.com/in/muhammet-kaya-ln
- GitHub: https://github.com/kaya2m
