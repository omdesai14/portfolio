/**
 * Single source of truth for identity, links and SEO strings.
 * Everything user-facing that could change lives here, not inline in components.
 */

export const site = {
  name: "Om Desai",
  role: "Computer Science student · CSU Dominguez Hills",
  /**
   * Used for canonical URLs, sitemap and OG tags. Override in Vercel with
   * NEXT_PUBLIC_SITE_URL once a custom domain is attached. No secret value —
   * a public origin is safe to expose to the client.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://omdesai.vercel.app",
  email: "odesai2@toromail.csudh.edu",
  location: "Los Angeles, CA",
  title: "Om Desai — Computer Science student, CSU Dominguez Hills",
  description:
    "Computer Science student at CSU Dominguez Hills. Software Development Intern at the California STEM Institute, FabLab and Software Technician at CSUDH, and incoming AWS Campus Leader with THE TEAM.",
  links: {
    github: "https://github.com/omdesai14",
    githubHandle: "@omdesai14",
    linkedin: "https://www.linkedin.com/in/om-desai-8717041b0/",
    linkedinHandle: "in/om-desai-8717041b0",
    zeroskip: "https://github.com/omdesai14/zeroskip",
  },
  /**
   * Static file in /public, served read-only. There is no upload path anywhere
   * on this site. Replacing the résumé means replacing this exact file.
   */
  resume: "/Om-Desai-Resume.pdf",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#shipped", label: "Shipped" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
