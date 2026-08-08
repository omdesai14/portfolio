/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every piece of text on the site comes from this file. To make the site
 *  yours, edit the values below — you should not need to touch any component.
 *
 *  Everything marked TODO is placeholder copy. Search this file for "TODO"
 *  to find everything that still needs your real content.
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
  /** Headline outcomes. 2–4 works best visually. */
  metrics: Metric[];
  /** The narrative. Standard PM arc: Problem → Role → Approach → Outcome → Learnings. */
  sections: CaseStudySection[];
  /** Set false to keep a case study in the repo but hide it from the site. */
  published: boolean;
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  /** 2–4 bullets. Lead with outcome, not responsibility. */
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
  /** TODO: your name — used in the header, hero, footer, and page titles. */
  name: "Om Desai",
  /** TODO: your positioning line. Shown in the hero, under your name. */
  title: "Associate Product Manager",
  /**
   * TODO: the one sentence you want someone to remember. Keep it concrete —
   * what kind of problems you work on, not adjectives about yourself.
   */
  tagline:
    "I build products at the seam between messy user problems and the data that explains them.",
  /** TODO: used for SEO description and link previews. 1–2 sentences. */
  description:
    "Portfolio of Om Desai — associate product manager focused on 0→1 product work, user research, and data-informed decision making.",
  /** TODO: e.g. "San Francisco, CA" or "Remote — US" */
  location: "TODO: Your City, State",
  /** TODO: your contact email. */
  email: "TODO@example.com",
  /** TODO: canonical URL once deployed. Used for SEO metadata. */
  url: "https://omdesai14.github.io/portfolio",
  /**
   * TODO: a short availability note shown in the contact section.
   * Set to null to hide it entirely.
   */
  availability: "Open to APM and PM roles starting Fall 2026.",
};

/* ── Social / external links ──────────────────────────────────────────────── */
/* TODO: replace hrefs. Delete any row you don't want shown. */

export const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/TODO" },
  { label: "GitHub", href: "https://github.com/omdesai14" },
  { label: "Email", href: `mailto:${site.email}` },
];

/* ── About ────────────────────────────────────────────────────────────────── */
/* TODO: replace entirely. Each string is its own paragraph. Two or three
   paragraphs is the sweet spot — this is a portfolio, not a biography. */

export const about: string[] = [
  "TODO: Open with what you actually do and what draws you to product. One or two sentences. Skip the throat-clearing — no “ever since I was young.”",
  "TODO: Second paragraph — the substance. What you've shipped, what domains you know, what you're unusually good at. Point at evidence rather than claiming traits.",
  "TODO: Optional third paragraph — what you're looking for next, and something human. This is the one place a little personality is welcome.",
];

/* ── Case studies ─────────────────────────────────────────────────────────── */
/*
   The centerpiece of a PM portfolio. Two strong case studies beat five thin
   ones. Each gets its own page at /work/<slug>, generated automatically.

   The placeholder below is a fully-worked skeleton showing the shape and the
   level of specificity that lands. Replace it — don't ship it.
*/

export const caseStudies: CaseStudy[] = [
  {
    slug: "example-case-study",
    title: "TODO: Case study title — name the outcome, not the feature",
    summary:
      "TODO: One line a recruiter can skim. What was broken, what you did, what changed.",
    org: "TODO: Company or Team",
    role: "TODO: Your Role",
    timeframe: "TODO: Mon YYYY – Mon YYYY",
    tags: ["TODO: 0→1", "TODO: Growth", "TODO: Mobile"],
    metrics: [
      { value: "TODO", label: "TODO: what this number measured" },
      { value: "TODO", label: "TODO: what this number measured" },
      { value: "TODO", label: "TODO: what this number measured" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "TODO: What was actually wrong, for whom, and how you knew. Ground it — a support-ticket volume, a drop-off rate, a quote from a user interview. The strongest openings make the reader feel the problem before you mention a solution.",
          "TODO: Why it mattered to the business. Connect the user pain to a number someone with a budget cares about.",
        ],
      },
      {
        heading: "My role",
        body: [
          "TODO: Be precise and honest about scope. Who was on the team, what you personally owned, what you influenced but didn't own. Reviewers trust specific, bounded claims far more than “led everything.”",
        ],
      },
      {
        heading: "Approach",
        body: [
          "TODO: How you got from problem to decision. Research you ran, options you weighed, what you deliberately cut and why. The tradeoffs are the most interesting part — this is where you show judgment rather than process.",
          "TODO: Include at least one decision that turned out to be wrong, and what you did about it. Nothing signals real experience faster.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "TODO: What shipped and what moved. Give the measurement window and the baseline — “38% lift” means nothing without “over 6 weeks, from a 12% baseline.” If a result was flat or negative, say so; it's more credible than a page of wins.",
        ],
      },
      {
        heading: "What I'd do differently",
        body: [
          "TODO: One or two genuine reflections. Specific and self-aware, not humble-bragging. This section is disproportionately what interviewers ask about.",
        ],
      },
    ],
    published: true,
  },
];

/* ── Experience ───────────────────────────────────────────────────────────── */
/* TODO: replace with your real roles, most recent first. */

export const experience: Role[] = [
  {
    company: "TODO: Company",
    title: "TODO: Your Title",
    period: "TODO: Mon YYYY – Present",
    location: "TODO: City, State",
    highlights: [
      "TODO: Lead with the outcome and the number. “Cut onboarding drop-off 22% by …” beats “Responsible for onboarding.”",
      "TODO: Second highlight — pick something only you could claim.",
      "TODO: Third highlight — optional.",
    ],
  },
  {
    company: "TODO: Earlier Company",
    title: "TODO: Your Title",
    period: "TODO: Mon YYYY – Mon YYYY",
    location: "TODO: City, State",
    highlights: [
      "TODO: Outcome-first bullet.",
      "TODO: Outcome-first bullet.",
    ],
  },
];

/* ── Skills ───────────────────────────────────────────────────────────────── */
/* TODO: trim to what you'd genuinely defend in an interview. A short honest
   list reads far stronger than an exhaustive one. */

export const skills: SkillGroup[] = [
  {
    category: "Product",
    items: [
      "Product discovery",
      "User research & interviews",
      "Roadmapping & prioritization",
      "PRDs & specs",
      "A/B testing",
      "Go-to-market",
    ],
  },
  {
    category: "Data",
    items: ["SQL", "Amplitude", "Mixpanel", "Looker", "Excel / Sheets modeling"],
  },
  {
    category: "Design & Delivery",
    items: ["Figma", "Jira", "Linear", "Notion", "Agile / Scrum"],
  },
  {
    category: "Technical",
    items: ["Python", "APIs & system design literacy", "Git"],
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
