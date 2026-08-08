/**
 * All page copy lives here so the components stay purely structural.
 *
 * Rule for this file: every claim traces back to something Om stated. No
 * invented anecdotes, no estimated figures, no version numbers. Where a role
 * has no reported metric, the Impact block says what is true instead of
 * reaching for a number.
 */

export type RoleStatus = "upcoming" | "current" | "past";

export type Role = {
  title: string;
  org: string;
  /** Real date range, or the timing Om gave for work that hasn't started. */
  period: string;
  status: RoleStatus;
  badge?: string;
  problem: string;
  shipped: string;
  /** Only set where a real, reported figure exists. */
  metric?: string;
  metricCaption?: string;
  /** Prose impact, for roles with no figure to report. Omitted when a metric
   *  carries the whole statement, so the number isn't restated underneath it. */
  impact?: string;
};

/** Reverse-chronological. */
export const roles: Role[] = [
  {
    title: "AWS Campus Leader",
    org: "THE TEAM",
    period: "Incoming this term",
    status: "upcoming",
    badge: "Incoming",
    problem:
      "THE TEAM is a startup bringing cloud computing programming to campus, where most students get little hands-on exposure to cloud tools before they start applying for internships.",
    shipped:
      "Starting this term as an AWS Campus Leader, running the cloud computing program on campus.",
    impact: "The role hasn't started yet, so there are no results to report.",
  },
  {
    title: "Software Development Intern",
    org: "California STEM Institute for Innovation and Improvement, CSUDH",
    period: "July 2026 – August 2026",
    status: "current",
    problem:
      "The institute needed one system to coordinate scheduling across the people working there.",
    shipped:
      "Built an organizational scheduling system in Python and JavaScript.",
    metric: "~100",
    metricCaption: "people used the system",
  },
  {
    title: "FabLab and Software Technician",
    org: "California State University, Dominguez Hills",
    period: "March 2026 – Present",
    status: "current",
    badge: "Current",
    problem:
      "Students working in the FabLab need support across a wide range of hardware and software to get their projects made.",
    shipped:
      "Support students across Swift and the Apple ecosystem — iPad, Mac, Clips, iMovie and GarageBand — along with 3D printing in Tinkercad and Fusion 360.",
    impact:
      "An ongoing role. I work directly with students across the lab's hardware and software.",
  },
  {
    title: "Academic Coach & Math Tutor",
    org: "GEAR UP",
    period: "April 2023 – March 2026",
    status: "past",
    problem:
      "GEAR UP works with students who need additional support to reach college-level math.",
    shipped:
      "Coached and tutored math across the program for nearly three years.",
    metric: "2,000+",
    metricCaption: "students worked with",
  },
];

export const project = {
  name: "ZeroSkip",
  tagline: "An AI-powered accountability app built to keep people consistent, not just motivated.",
  stack: ["Python", "Streamlit"],
  repo: "https://github.com/omdesai14/zeroskip",
  problem:
    "Staying consistent is harder than staying motivated. A plan made in advance doesn't account for what actually happens day to day, so it stops matching reality almost immediately.",
  approach:
    "ZeroSkip generates a daily action plan and adapts it based on how the user actually behaves, rather than holding them to a plan they've already fallen behind on. Built in Python and Streamlit.",
  outcome: "Live and open-source on GitHub.",
};

export type SkillGroup = {
  name: string;
  items: { name: string; note?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Technical",
    items: [
      { name: "Python" },
      { name: "Swift" },
      { name: "Streamlit" },
      { name: "SQL", note: "Learning" },
      { name: "Figma", note: "Learning" },
      { name: "Fusion 360" },
      { name: "Tinkercad" },
    ],
  },
  {
    name: "Product & Analysis",
    items: [
      { name: "Requirements scoping" },
      { name: "User research" },
      { name: "Agile / Scrum" },
      { name: "Notion" },
    ],
  },
  {
    name: "Languages",
    items: [
      { name: "English" },
      { name: "Gujarati" },
      { name: "Hindi" },
      { name: "Marathi" },
    ],
  },
];

export const languages = ["English", "Gujarati", "Hindi", "Marathi"];

export const about = [
  "I'm a Computer Science student at California State University, Dominguez Hills, building products at the intersection of messy user problems and the data that explains them — and building real tools, not just studying them.",
  "I currently work as a Software Development Intern at the California STEM Institute for Innovation and Improvement, where I built an organizational scheduling system in Python and JavaScript now used by around 100 people. Alongside that, I work as a FabLab and Software Technician at CSUDH, supporting students across Swift, the Apple hardware and software ecosystem (iPad, Mac, Clips, iMovie, GarageBand), and 3D printing tools like Tinkercad and Fusion 360. Earlier, I tutored math for GEAR UP, working with over 2,000 students.",
  "This upcoming term I'm starting as an AWS Campus Leader with THE TEAM, a startup bringing cloud computing programming to campus. Outside of work, I build my own AI tools — including ZeroSkip, an AI-powered accountability app designed to keep people consistent, not just motivated.",
];
