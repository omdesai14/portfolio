# Om Desai — Portfolio

A personal site built around one structural idea: **every role and project is a
release**. Experience isn't a list of jobs, it's a changelog — version tags,
dated entries, and a `Problem / Shipped / Impact` body written the way a PM
writes a release note.

Built with Next.js (App Router) and Tailwind CSS. Statically generated, no
client-side data fetching, no third-party scripts.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Deploying to Vercel

The repo is deploy-ready with no configuration. Either:

- **GitHub connection** — import the repo at [vercel.com/new](https://vercel.com/new).
  Vercel detects Next.js and uses the right build command and output directory
  automatically. Every push to the branch redeploys.
- **CLI** — `npx vercel` (preview) or `npx vercel --prod`.

**HTTPS is automatic.** Vercel provisions a TLS certificate for
`*.vercel.app` and for any custom domain you attach, and redirects HTTP → HTTPS
by default. This site also sends an HSTS header (see below), which tells
browsers to refuse plaintext for the domain on future visits.

### One optional environment variable

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used for OG tags, the canonical link and `sitemap.xml`. Defaults to `https://omdesai.vercel.app`. Set it in Vercel → Project → Settings → Environment Variables once a custom domain is attached. |

This is a public URL, not a secret. There are **no secrets in this project at
all** — nothing to leak, because nothing here talks to a third-party API.
`.env*` is already gitignored if you ever add one.

---

## Before this goes live

Two things need your input:

1. **Replace the résumé.** `public/Om-Desai-Resume.pdf` is a placeholder that
   says so on the page. Drop your real PDF in at that exact path — the download
   buttons already point there, so no code change is needed.
2. **Confirm the LinkedIn URL.** `src/lib/site.ts` guesses
   `linkedin.com/in/omdesai14`. If that's wrong, it's a one-line fix in that file.

Optionally: `src/lib/content.ts` has an optional `period` field on each release
for date ranges. It's only filled in where a real duration was known (the
2 yrs 11 mos of coaching). Add the others as you confirm them rather than
leaving approximations on a page a recruiter will read.

---

## Where things live

```
src/
  app/
    layout.tsx            fonts, metadata, skip link
    page.tsx              section composition + JSON-LD
    globals.css           the token system — read this first
    opengraph-image.tsx   OG card, generated at build
    icon.tsx              favicon, generated at build
    robots.ts, sitemap.ts
  components/             one file per section
    Reveal.tsx            the only client component on the page
  lib/
    site.ts               name, links, email, résumé path
    content.ts            all copy — releases, project, skills, about
next.config.ts            security headers
```

**All the copy lives in `src/lib/content.ts`.** Editing the site's text never
means touching a component.

### The token system

`globals.css` defines six base colors and a handful of derived variants. Nothing
in a component hardcodes a hex value.

| Token | Hex | Role |
|---|---|---|
| `--color-ink` | `#14181F` | Dark section ground |
| `--color-paper` | `#FAF9F6` | Light section ground |
| `--color-on-ink` | `#EDE9E0` | Text on dark |
| `--color-on-paper` | `#1C1F26` | Text on light |
| `--color-amber` | `#D4A34A` | Primary accent |
| `--color-slate` | `#5C7A99` | Supporting marks, borders |

The `-deep` / `-light` variants (`--color-amber-deep`, `--color-slate-light`,
etc.) are the same hues pushed until they clear WCAG AA **against the raised
card surface**, which is the worse case — text sits on cards more often than on
bare background. Amber at `#D4A34A` is only 2.19:1 on paper, fine for a rule or
a border but not for text, which is why `--color-amber-deep` exists.

Sections declare their ground with `.on-ink` / `.on-paper`. That one class sets
the background, the text colors, *and* `--focus-ring`, so focus states stay
visible on both grounds without any component knowing where it sits.

**Amber is budgeted to two uses per viewport.** In the hero: the rule under the
name and the primary button. In a release card: the version tag and the impact
number. Everything else supporting is slate. That budget is what keeps the
accent from becoming decoration.

### Motion

Two mechanisms, both CSS:

- **Hero load** — a six-step stagger via `animation-delay`, plus two very slow
  gradient blobs animating `transform` only (compositor-only, no repaint). Zero JS.
- **Scroll reveals** — `Reveal.tsx` flips one `data-shown` attribute via
  `IntersectionObserver`, then disconnects. The transition itself is CSS.

Under `prefers-reduced-motion: reduce`, everything collapses to its final state
and the observer is skipped entirely. With JavaScript disabled, a `<noscript>`
rule forces revealed elements visible so nothing is stuck at `opacity: 0`.
Both paths are verified.

---

## Dependencies — what's actually running

The site ships **three** runtime dependencies. That's deliberate: every package
is attack surface, and a portfolio doesn't need a supply chain.

### Runtime

| Package | What it does |
|---|---|
| `next` | The framework. Handles routing, the build, static generation, self-hosting the fonts, generating the OG image and favicon, and serving the security headers. Maintained by Vercel. |
| `react` | The UI library the components are written against. Maintained by Meta. |
| `react-dom` | Renders those components to HTML. Ships with React, same maintainers. |

That's the whole list. **No animation library** (framer-motion et al) — the
motion is CSS plus ~15 lines of `IntersectionObserver`. **No icon library** —
the few arrows are text characters. **No font package** — `next/font` downloads
Fraunces, Inter and JetBrains Mono at build time and self-hosts them, so the
browser never contacts Google. **No analytics, no trackers, no third-party
scripts of any kind.**

### Build-time only (never sent to a visitor)

| Package | What it does |
|---|---|
| `typescript` | Type checking during the build. |
| `tailwindcss` + `@tailwindcss/postcss` | Generates the stylesheet from the utility classes. Only the classes actually used end up in the output. |
| `eslint` + `eslint-config-next` | Linting. |
| `@types/*` | Type definitions for Node and React. |

`npm audit` reports **0 vulnerabilities**.

---

## Security

Written in by default rather than retrofitted.

**No secrets anywhere.** No API keys, tokens or credentials exist in this
project, because nothing integrates with a third-party service. `.env*` is
gitignored so that stays true if you add one later.

**No user input, anywhere.** There is deliberately no contact form. Contact is a
`mailto:` link plus LinkedIn and GitHub. Nothing on the site accepts, parses or
renders visitor-supplied data, so there is no injection or XSS surface to
defend. If you later want a form, use a server-side route handler or a service
like Web3Forms so the key never reaches the browser — never send mail from
client-side JavaScript.

**No upload functionality.** The résumé is a static file in `public/`, served
read-only. There is no endpoint that accepts a file.

**Security headers** (`next.config.ts`, applied to every route):

| Header | Value | Why |
|---|---|---|
| `Content-Security-Policy` | `default-src 'self'`, everything locked to self | Nothing loads from another origin, so every fetch directive can be `'self'`. |
| `X-Frame-Options` | `DENY` | No clickjacking. Paired with `frame-ancestors 'none'` in the CSP for modern browsers. |
| `X-Content-Type-Options` | `nosniff` | Browsers must respect the declared content type. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Don't leak full URLs to other sites. |
| `Permissions-Policy` | camera, mic, geolocation, payment, USB all `()` | The page needs none of these; deny them outright. |
| `Strict-Transport-Security` | 2 years, `includeSubDomains` | Browsers refuse plaintext for this domain. |

`poweredByHeader` is off, so responses don't advertise the framework version.

**One deliberate CSP loosening**, worth understanding: `script-src` includes
`'unsafe-inline'`. Next.js inlines its hydration payload as `<script>` tags
whose hashes change every build; the alternative is a per-request nonce, which
forces every page to render dynamically and gives up static generation. For a
page with no user input, no query-parameter rendering and no third-party
script, there's no path for an attacker to inject anything for that directive
to catch — so the trade isn't worth it here. `'unsafe-eval'` appears in
development only (React Fast Refresh) and is never in the production policy.

---

## Verified

Checked against a real browser, not assumed:

- **Accessibility** — 0 axe-core violations (WCAG 2.1 A/AA + best practice) at
  both 1440px and 375px. All 23 keyboard focus stops have a visible 2px ring in
  a ground-appropriate color. Clean heading hierarchy (one `h1`, no skipped
  levels). Skip-to-content link.
- **Responsive** — no horizontal overflow at 375px or 1440px.
- **Motion** — `prefers-reduced-motion` verified to collapse every animation to
  its final state; no-JS verified to leave no element hidden.
- **Headers** — confirmed present on live responses.
- **Build** — every route statically prerendered. `npm audit`: 0 vulnerabilities.
  ESLint: clean.
