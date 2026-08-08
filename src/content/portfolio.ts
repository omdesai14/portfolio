/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every piece of text on the site comes from this file. To make further
 *  edits, change the values below — components read from here directly.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Metric = {
  /** The headline number, e.g. "38%" or "$1.2M" or "4.6★" */
  value: string;
  /** What the number measured, e.g. "reduction in time-to-first-action" */
  label: string;
};

export type CaseStudySection = {
  heading: string;
  /** Each string renders as its own paragraph. */
  body: string[];
};

export type CaseStudy = {
  /** URL segment: /work/<slug>. Lowercase, hyphenated, no spaces. */
  slug: string;
  title: string;
  /** One-line hook shown on the card and under the title. */
  summary: string;
  /** Company, team, or "Personal project". */
  org: string;
  /** e.g. "Associate Product Manager" */
  role: string;
  /** e.g. "Jan 2025 – Jun 2025" */
  timeframe: string;
  /** Short labels shown as pills on the card, e.g. ["0→1", "Mobile", "Growth"] */
  tags: string[];
  /** Headline outcomes. 2–4 works best visually. Omit if there are no real numbers yet. */
  metrics: Metric[];
  /** The narrative. Standard PM arc: Problem → Approach → Outcome. */
  sections: CaseStudySection[];
  /** External links shown as buttons on the case study page, e.g. a GitHub repo. */
  links?: SocialLink[];
  /** Set false to keep a case study in the repo but hide it from the site. */
  published: boolean;
};

export type Role = {
  /** Employer or organization. Omit for independent / no fixed org. */
  company?: string;
  title: string;
  /** e.g. "Jan 2025 – Present", or a duration like "2 years 11 months". */
  period: string;
  /** Omit if there's no meaningful location to show. */
  location?: string;
  /** 2–4 bullets. Problem / Shipped / Impact reads well for build-heavy roles. */
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};

/* ── Site-wide identity ───────────────────────────────────────────────────── */

export const site = {
  name: "Om Desai",
  title: "Associate Product Manager (Candidate) — CS Student, CSU Dominguez Hills",
  tagline:
    "I build products at the seam between messy user problems and the data that explains them. I'm a Computer Science student who builds real tools — not just studies them — from an AI accountability app to internal scheduling systems used by real teams.",
  description:
    "Portfolio of Om Desai — Computer Science student at CSU Dominguez Hills building real products, from an AI accountability app to internal scheduling systems used by real teams. Open to APM and PM-track roles.",
  /**
   * No fixed personal location provided yet. Leave as null (rather than
   * guess) — the contact section simply omits the line while this is null.
   */
  location: null as string | null,
  email: "odesai2@toromail.csudh.edu",
  /** Canonical URL once deployed. Used for SEO metadata. */
  url: "https://omdesai14.github.io/portfolio",
  availability: "Open to APM and PM-track roles.",
  /**
   * Headshot, served from /public. Drop the file in as `public/avatar.jpg`
   * (or update this path) and it appears automatically — until then the
   * Avatar component falls back to initials, so nothing looks broken.
   */
  avatarSrc: "/avatar.jpg",
  avatarInitials: "OD",
};

/* ── Social / external links ──────────────────────────────────────────────── */

export const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/om-desai-8717041b0/" },
  { label: "GitHub", href: "https://github.com/omdesai14" },
  { label: "Email", href: `mailto:${site.email}` },
];

/* ── About ────────────────────────────────────────────────────────────────── */

export const about: string[] = [
  "I'm a Computer Science student at California State University, Dominguez Hills, building products at the intersection of messy user problems and the data that explains them — and building real tools, not just studying them.",
  "I currently work as a Software Development Intern at the California STEM Institute for Innovation and Improvement, where I built an organizational scheduling system in Python and JavaScript now used by around 100 people. Before that, I was a FabLab and Software Technician at CSUDH, supporting students across Swift, the Apple hardware and software ecosystem (iPad, Mac, Clips, iMovie, GarageBand), and 3D printing tools like Tinkercad and Fusion 360. I also tutored math for GEAR UP, working with over 2,000 students.",
  "This upcoming term I'm starting as an AWS Campus Leader with THE TEAM, a startup bringing cloud computing programming to campus. Outside of work, I build my own AI tools — including ZeroSkip, an AI-powered accountability app designed to keep people consistent, not just motivated.",
];

/* ── Case studies ─────────────────────────────────────────────────────────── */

export const caseStudies: CaseStudy[] = [
  {
    slug: "zeroskip",
    title: "ZeroSkip — Turning Motivation Into Consistency",
    summary:
      "Most productivity apps track output. ZeroSkip tracks behavior — generating daily action plans and adapting difficulty in real time to keep people consistent, not just motivated.",
    org: "Personal project",
    role: "Founder & Sole Developer",
    timeframe: "Ongoing",
    tags: ["0→1", "AI/ML", "Solo project"],
    metrics: [],
    sections: [
      {
        heading: "The problem",
        body: [
          "Most productivity and accountability tools measure output — tasks checked off, streaks kept — but don't adapt to how a person is actually behaving. The moment motivation dips, the plan stays static, the app stops being useful, and the streak breaks. The tool was designed around good days, not the days that actually determine whether a habit sticks.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I built ZeroSkip in Python with Streamlit, which let me iterate on the core behavior loop quickly instead of getting slowed down by frontend scaffolding. The app generates a daily action plan for the user, tracks consistency over time, and adjusts difficulty based on how the user is actually engaging — rather than holding everyone to a fixed, one-size-fits-all target.",
        ],
      },
      {
        heading: "What it does today",
        body: [
          "ZeroSkip generates daily action plans, tracks a user's consistency, and adapts the difficulty of what it asks for based on recent behavior. The goal isn't to maximize motivation on any single day — it's to keep someone in the system on the days they're least motivated to be.",
        ],
      },
    ],
    links: [{ label: "View on GitHub", href: "https://github.com/omdesai14/zeroskip" }],
    published: true,
  },
];

/* ── Experience ───────────────────────────────────────────────────────────── */
/* Newest first. */

export const experience: Role[] = [
  {
    company: "THE TEAM",
    title: "AWS Campus Leader",
    period: "Incoming — Fall 2026",
    highlights: [
      "Problem: Students need a bridge into cloud computing and AWS's ecosystem.",
      "Shipped: Leading AWS technical programming and campus outreach as part of the startup's Campus Leader program.",
      "Impact: Incoming — starting Fall 2026.",
    ],
  },
  {
    company: "California STEM Institute for Innovation and Improvement",
    title: "Software Development Intern",
    period: "July 2026 – August 2026",
    highlights: [
      "Problem: The organization had no centralized system for scheduling across staff.",
      "Shipped: Built an organizational scheduling system using Python and JavaScript.",
      "Impact: Used by approximately 100 people across the organization.",
    ],
  },
  {
    company: "CSU Dominguez Hills",
    title: "FabLab and Software Technician",
    period: "March 2026 – Present",
    highlights: [
      "Problem: Students needed hands-on support with creative and fabrication tools.",
      "Shipped: Supported students in Swift coding, Apple software (Clips, iMovie, GarageBand), and 3D printing (Tinkercad, Fusion 360).",
      "Impact: Ongoing technical support role, part-time throughout my degree.",
    ],
  },
  {
    company: "GearUp",
    title: "Academic Coach & Math Tutor",
    period: "April 2023 – March 2026",
    highlights: [
      "Problem: Students needed both academic coaching and consistent math support.",
      "Shipped: Provided one-on-one academic coaching and math tutoring.",
      "Impact: Supported 2,000+ students.",
    ],
  },
];

/* ── Skills ───────────────────────────────────────────────────────────────── */

export const skills: SkillGroup[] = [
  {
    category: "Technical",
    items: ["Python", "Swift", "Streamlit", "SQL (learning)"],
  },
  {
    category: "Product & Tools",
    items: ["Figma (learning)", "Notion", "Agile / Scrum"],
  },
  {
    category: "Languages",
    items: ["English", "Gujarati", "Hindi", "Marathi"],
  },
];

/* ── Navigation ───────────────────────────────────────────────────────────── */
/* Section ids must match the ids rendered on the home page. */

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

/** Case studies that should actually render, in file order. */
export const publishedCaseStudies = caseStudies.filter((cs) => cs.published);
