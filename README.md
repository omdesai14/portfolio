# portfolio

Personal portfolio site — built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm start       # serve the production build
```

## Editing the content

**All site copy lives in one file: [`src/content/portfolio.ts`](src/content/portfolio.ts).**

You should not need to touch a component to make the site yours. That file
exports:

| Export         | What it controls                                            |
| -------------- | ----------------------------------------------------------- |
| `site`         | Name, title, tagline, email, location, availability note, SEO |
| `socials`      | Footer and contact links                                     |
| `about`        | About paragraphs                                            |
| `caseStudies`  | Case studies — each generates its own page at `/work/<slug>` |
| `experience`   | Roles in the experience timeline                             |
| `skills`       | Grouped skills list                                          |
| `navLinks`     | Header navigation                                            |

Everything currently marked `TODO` is placeholder copy. Search the file for
`TODO` to find everything that still needs real content.

### Adding a case study

Append an object to the `caseStudies` array. The route, the card on the home
page, and the detail page are all generated from it — no other file changes
needed. Set `published: false` to keep a draft in the repo without showing it
on the site.

## Structure

```
src/
├─ app/
│  ├─ layout.tsx           # Shell, metadata, no-flash theme script
│  ├─ page.tsx             # Home — hero, work, about, experience, contact
│  ├─ globals.css          # Design tokens, light/dark palettes, base styles
│  ├─ not-found.tsx        # 404
│  ├─ icon.svg             # Favicon
│  └─ work/[slug]/page.tsx # Case study detail pages (statically generated)
├─ components/
│  ├─ Header.tsx           # Sticky nav + mobile menu
│  ├─ Footer.tsx
│  ├─ Section.tsx          # Section wrapper + Pill
│  ├─ CaseStudyCard.tsx
│  └─ ThemeToggle.tsx
└─ content/
   └─ portfolio.ts         # ← all content lives here
```

## Theming

Light and dark palettes are defined as CSS custom properties in
`src/app/globals.css` and exposed to Tailwind through `@theme`. Dark mode
follows the system preference by default; the header toggle overrides it and
persists the choice to `localStorage`. An inline script in `layout.tsx` applies
the saved theme before first paint so there is no flash of the wrong theme.

To change the accent colour, edit `--accent` and `--accent-soft` in both the
light and dark blocks.

## Deploying

The site is fully static — every route prerenders at build time.

**Vercel** (simplest for Next.js): import the repo at
[vercel.com/new](https://vercel.com/new). No configuration needed; it detects
Next.js automatically.

**GitHub Pages** requires static export — add `output: "export"` and
`basePath: "/portfolio"` to `next.config.mjs`, then publish the `out/`
directory. Note that `basePath` also needs `site.url` in
`src/content/portfolio.ts` updated to match.

## Accessibility

Skip-to-content link, semantic landmarks, visible focus rings, labelled
interactive controls, and a `prefers-reduced-motion` guard that disables
animation and smooth scrolling.
