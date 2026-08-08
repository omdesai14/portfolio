# Om Desai — Portfolio

A personal site built with Next.js (App Router) and Tailwind CSS. Clean,
light, single-column, statically generated. No third-party scripts.

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
  automatically. Every push redeploys.
- **CLI** — `npx vercel` (preview) or `npx vercel --prod`.

**HTTPS is automatic.** Vercel provisions a TLS certificate for `*.vercel.app`
and any custom domain, and redirects HTTP → HTTPS. The site also sends HSTS.

### One optional environment variable

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for OG tags, the canonical link and `sitemap.xml`. Defaults to `https://omdesai.vercel.app`. Set it in Vercel → Settings → Environment Variables once a custom domain is attached. |

A public URL, not a secret. There are **no secrets in this project** — nothing
here talks to a third-party API. `.env*` is gitignored if you ever add one.

---

## The résumé PDF

`public/Om-Desai-Resume.pdf` is currently a **placeholder** whose contents say
so. Replace that exact file with the real one — the filename is what every
download button points at, so no code change is needed:

- Header "Résumé" button
- Hero "Download résumé" button
- Contact "Download résumé" button
- Footer "Résumé" link

All four carry the `download` attribute, so they save the file rather than
opening it in a tab.

---

## Where things live

```
src/
  app/
    layout.tsx            font, metadata, skip link
    page.tsx              section composition + JSON-LD
    globals.css           the token system — read this first
    opengraph-image.tsx   OG card, generated at build
    icon.tsx              favicon, generated at build
    robots.ts, sitemap.ts
  components/             one file per section
    Reveal.tsx            the only client component on the page
  lib/
    site.ts               name, links, email, résumé path
    content.ts            all copy — roles, project, skills, about
next.config.ts            security headers
```

**All the copy lives in `src/lib/content.ts`.** Editing the site's text never
means touching a component.

`content.ts` carries one rule in its header comment, worth keeping: every claim
traces back to something Om actually stated. Roles with a real reported figure
get the large-number treatment; roles without one say what's true instead of
reaching for a number. When adding a role, follow that — an empty Impact line
is better than an invented one.

### Design system

One light ground throughout, one typeface, one accent.

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-surface` | `#F7F7F5` | Subtle section fills and cards |
| `--color-border` | `#E3E3E0` | Hairlines |
| `--color-text` | `#1A1A1A` | Body text |
| `--color-text-muted` | `#62625F` | Secondary text |
| `--color-accent` | `#8A6A1E` | Section labels, active states |

Nothing in a component hardcodes a hex value.

**On the accent:** it's a deep bronze-gold rather than a bright amber for a
concrete reason. `#D4A34A` only reaches 2.2:1 against white, which fails even
the 3:1 bar for non-text marks, let alone the 4.5:1 for small text. `#8A6A1E`
clears AA at 4.7:1 while staying in the same warm family. It's used only for
section labels and hover/active states — nowhere else.

Every ratio in `globals.css` is measured against `--color-surface`, not pure
white, since that's the worse case: text sits on the filled sections as often
as on the page background.

**Type:** Inter only, self-hosted by `next/font` at build time, so the browser
never contacts Google and the CSP needs no external font origin.

### Motion

Scroll fade-ins, and nothing else. No entrance choreography, no ambient
movement, no transform-based hover effects. `Reveal.tsx` flips one
`data-shown` attribute via `IntersectionObserver` and then disconnects; the
transition itself is CSS.

Under `prefers-reduced-motion: reduce` everything collapses to its final state
and the observer is skipped. With JavaScript disabled, a `<noscript>` rule
forces revealed elements visible so nothing is stuck at `opacity: 0`.

---

## Dependencies — what's actually running

The site ships **three** runtime dependencies. Every package is attack surface,
and a portfolio doesn't need a supply chain.

### Runtime

| Package | What it does |
|---|---|
| `next` | The framework. Routing, the build, static generation, self-hosting the font, generating the OG image and favicon, serving the security headers. Maintained by Vercel. |
| `react` | The UI library the components are written against. Maintained by Meta. |
| `react-dom` | Renders those components to HTML. Ships with React, same maintainers. |

That's the whole list. No animation library, no icon library, no font package,
no analytics, no trackers, no third-party scripts of any kind.

### Build-time only (never sent to a visitor)

| Package | What it does |
|---|---|
| `typescript` | Type checking during the build. |
| `tailwindcss` + `@tailwindcss/postcss` | Generates the stylesheet from the utility classes. Only classes actually used end up in the output. |
| `eslint` + `eslint-config-next` | Linting. |
| `@types/*` | Type definitions for Node and React. |

`npm audit` reports **0 vulnerabilities**.

---

## Security

**No secrets anywhere.** No API keys, tokens or credentials exist in this
project, because nothing integrates with a third-party service.

**No user input, anywhere.** There is deliberately no contact form. Contact is
a `mailto:` link plus LinkedIn and GitHub. Nothing on the site accepts, parses
or renders visitor-supplied data, so there is no injection or XSS surface. If
you later want a form, use a server-side route handler or a service like
Web3Forms so the key never reaches the browser — never send mail from
client-side JavaScript.

**No upload functionality.** The résumé is a static file in `public/`, served
read-only. There is no endpoint that accepts a file.

**Security headers** (`next.config.ts`, applied to every route):

| Header | Value | Why |
|---|---|---|
| `Content-Security-Policy` | `default-src 'self'`, everything locked to self | Nothing loads from another origin. |
| `X-Frame-Options` | `DENY` | No clickjacking. Paired with `frame-ancestors 'none'`. |
| `X-Content-Type-Options` | `nosniff` | Browsers must respect the declared type. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Don't leak full URLs to other sites. |
| `Permissions-Policy` | camera, mic, geolocation, payment, USB all `()` | The page needs none of these. |
| `Strict-Transport-Security` | 2 years, `includeSubDomains` | Browsers refuse plaintext for this domain. |

`poweredByHeader` is off, so responses don't advertise the framework version.

**One deliberate CSP loosening:** `script-src` includes `'unsafe-inline'`.
Next.js inlines its hydration payload as `<script>` tags whose hashes change
every build; the alternative is a per-request nonce, which forces dynamic
rendering and gives up static generation. With no user input, no query-param
rendering and no third-party script, there's no injection path for that
directive to catch. `'unsafe-eval'` appears in development only (React Fast
Refresh) and never in the production policy.

---

## Verified

Checked against a real browser, not assumed:

- **Accessibility** — 0 axe-core violations (WCAG 2.1 A/AA + best practice) at
  both 1440px and 375px. All 23 keyboard focus stops have a visible 2px ring.
  Clean heading hierarchy. Skip-to-content link.
- **Responsive** — no horizontal overflow at 375px or 1440px.
- **Type** — Inter renders for every text node; no fallback font is reached.
- **Motion** — `prefers-reduced-motion` collapses the fade-ins; no-JS leaves
  nothing hidden.
- **Content** — no version numbers anywhere in the rendered HTML; every
  outbound link resolves to the intended URL.
- **Build** — every route statically prerendered. `npm audit`: 0
  vulnerabilities. ESLint: clean.
