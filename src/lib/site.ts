/**
 * Single source of truth for identity, links and SEO strings.
 * Everything user-facing that could change lives here, not inline in components.
 */

export const site = {
  name: "Om Desai",
  role: "Computer Science undergrad · CSU Dominguez Hills",
  /**
   * Used for canonical URLs, sitemap and OG tags. Override in Vercel with
   * NEXT_PUBLIC_SITE_URL once a custom domain is attached. No secret value —
   * a public origin is safe to expose to the client.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://omdesai.vercel.app",
  email: "om.desai2@icloud.com",
  location: "Los Angeles, CA",
  title: "Om Desai — Builder, systems thinker, APM candidate",
  description:
    "Computer science undergrad at CSU Dominguez Hills. I build systems people actually use — a scheduling platform for ~100 people, an adaptive accountability app, and three years of coaching before either. Targeting APM programs.",
  links: {
    github: "https://github.com/omdesai14",
    // TODO(om): confirm this handle — it is a best guess. One-line change here.
    linkedin: "https://www.linkedin.com/in/omdesai14/",
    zeroskip: "https://github.com/omdesai14/zeroskip",
  },
  /** Static file in /public. No upload path exists anywhere on this site. */
  resume: "/Om-Desai-Resume.pdf",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#shipped", label: "Shipped" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
