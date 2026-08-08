import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content Security Policy.
 *
 * The site loads zero third-party resources: fonts are self-hosted by
 * next/font, the OG image and favicon are generated at build time, and there
 * are no analytics or tracking scripts. So every fetch directive can be
 * locked to 'self'.
 *
 * The one loosening is 'unsafe-inline' on script-src. Next.js App Router
 * inlines its hydration payload as <script> tags whose hashes change every
 * build; the alternative is a per-request nonce, which forces every page to
 * render dynamically and gives up static generation. For a page with no user
 * input, no query-param rendering and no third-party script, that trade isn't
 * worth it — there is no injection path for an attacker to reach.
 *
 * 'unsafe-eval' and the websocket connect-src are development-only (React Fast
 * Refresh); neither is present in the production policy.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Legacy companion to frame-ancestors 'none', for older browsers.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // Vercel terminates TLS and redirects HTTP to HTTPS automatically; this tells
  // the browser to refuse plaintext for this host going forward.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework version in responses.
  poweredByHeader: false,
  reactStrictMode: true,
  headers: async () => [{ source: "/:path*", headers: securityHeaders }],
};

export default nextConfig;
