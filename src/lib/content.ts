/**
 * All page copy lives here so the components stay purely structural.
 * The site's spine is a changelog: every role and project is a "release"
 * with a version tag and a problem / shipped / impact body.
 */

export type ReleaseStatus = "upcoming" | "current" | "shipped";

export type Release = {
  version: string;
  /**
   * Optional duration on the left rail. Only set where a real one is known —
   * we deliberately do not invent date ranges. Add them here as they're confirmed.
   */
  period?: string;
  title: string;
  org: string;
  role: string;
  status: ReleaseStatus;
  /** Badge text for anything not yet shipped. */
  badge?: string;
  problem: string;
  shipped: string;
  /** Third block is "Impact" for shipped work, "Target" for upcoming work. */
  outcomeLabel: string;
  /** Pulled out large in the accent color — always a real number. */
  metric: string;
  metricCaption: string;
  outcome: string;
};

/** Reverse-chronological, the way a real changelog reads. */
export const releases: Release[] = [
  {
    version: "v4.0",
    title: "AWS Campus Leader",
    org: "THE TEAM — a startup bringing cloud computing programming to campus",
    role: "Incoming",
    status: "upcoming",
    badge: "Incoming",
    problem:
      "Students at a commuter campus usually meet cloud tooling for the first time in an internship interview. By then the gap is already priced into who gets hired and who does not.",
    shipped:
      "Starting as an AWS Campus Leader with THE TEAM — running the cloud program on the ground at CSUDH: workshops, credit access, and a route from never having opened a console to having something deployed and linkable.",
    outcomeLabel: "Target",
    metric: "This term",
    metricCaption: "starting with THE TEAM",
    outcome:
      "Not shipped yet, so no impact number to claim. The metric I care about is how many students end the term with something running in production, not how many sat through a workshop.",
  },
  {
    version: "v3.0",
    title: "Organizational Scheduling System",
    org: "California STEM Institute for Innovation and Improvement (CSUDH)",
    role: "Software Development Intern",
    status: "current",
    badge: "Live",
    problem:
      "Scheduling across the institute ran on shared spreadsheets and group chats. Every change meant a person manually reconciling everyone's availability, and conflicts only surfaced after they had already cost someone their session.",
    shipped:
      "An organizational scheduling system in Python and JavaScript: one source of truth for availability, assignments and changes, replacing the reconcile-by-hand loop. I scoped it with the people who would actually be living in it rather than the people who asked for it.",
    outcomeLabel: "Impact",
    metric: "~100",
    metricCaption: "people coordinating through it",
    outcome:
      "In active use across the institute. The part I would defend in a review is the scoping: the first version deliberately did less than requested, because the failure mode here was a tool nobody trusted enough to keep updated.",
  },
  {
    version: "v2.0",
    title: "FabLab & Apple Ecosystem Support",
    org: "California State University, Dominguez Hills",
    role: "FabLab and Software Technician",
    status: "current",
    badge: "Ongoing",
    problem:
      "The lab's equipment — 3D printers, Macs, iPads, the whole creative suite — is only as useful as a student's confidence in touching it. Plenty of people walk in curious and would walk out without having made anything.",
    shipped:
      "Front-line support across the lab: Swift and the Apple ecosystem (iPad, Mac, Clips, iMovie, GarageBand) plus the 3D printing pipeline in Tinkercad and Fusion 360. Most of the job is working out what someone is actually stuck on, which is rarely the question they came in with.",
    outcomeLabel: "Impact",
    metric: "8",
    metricCaption: "tools supported: Swift, iPad, Mac, Clips, iMovie, GarageBand, Tinkercad, Fusion 360",
    outcome:
      "Still running, and it turns one-time visitors into repeat users. It's where I picked up the habit that has carried into every product conversation since: the stated problem is almost never the real one, and the gap between them is where the work is.",
  },
  {
    version: "v1.5",
    period: "2 yrs 11 mos",
    title: "Academic Coaching Program",
    org: "California State University, Dominguez Hills",
    role: "Academic Coach",
    status: "shipped",
    problem:
      "Students who fall behind rarely fail because of one hard concept. They fail because the small gaps compound quietly and nobody is tracking the compounding until it is too late to fix in a semester.",
    shipped:
      "Nearly three years of one-on-one coaching — diagnosing where a student actually broke down, then building a plan they would genuinely follow instead of one that looked responsible on paper.",
    outcomeLabel: "Impact",
    metric: "2 yrs 11 mos",
    metricCaption: "the longest-running thing I've worked on",
    outcome:
      "The direct ancestor of ZeroSkip. Watching plans fail the same way for three years is what convinced me the accountability loop is the product, not a feature bolted onto a to-do list.",
  },
  {
    version: "v1.0",
    title: "Math Tutoring at Scale",
    org: "GEAR UP",
    role: "Math Tutor",
    status: "shipped",
    problem:
      "GEAR UP serves students who are statistically least likely to reach college-level math. At that volume you cannot personalize by intuition — you have to find the patterns that explain most of the failures.",
    shipped:
      "Math tutoring across the program, working with students at scale and narrowing in on the handful of recurring misconceptions that accounted for the bulk of where people got stuck.",
    outcomeLabel: "Impact",
    metric: "2,000+",
    metricCaption: "students worked with",
    outcome:
      "My first real lesson in reading a user population rather than a single user — and in the fact that the highest-leverage fix is usually unglamorous and applies to hundreds of people at once.",
  },
];

/** Smaller entries that share the changelog device without diluting the spine. */
export const patchNotes = [
  { label: "IBM Hackathon", detail: "Participant" },
  { label: "Stanford CS229", detail: "Machine Learning" },
  { label: "Mental Health First Aid", detail: "Certified" },
];

export const project = {
  version: "v0.3",
  name: "ZeroSkip",
  tagline: "An AI accountability app that adapts to the person, not the plan.",
  stack: ["Python", "Streamlit", "Agentic AI"],
  repo: "https://github.com/omdesai14/zeroskip",
  problem:
    "Productivity tools assume the hard part is knowing what to do. It isn't. The hard part is the distance between the plan you wrote on Sunday and the version of you that shows up on Wednesday. Most apps generate a static plan and then quietly punish you for not being the person who wrote it.",
  approach:
    "ZeroSkip generates a daily action plan and then adapts it to what you actually did. A skipped item doesn't just roll forward untouched — it changes the shape of the next day's plan. I built it in Python and Streamlit on purpose: shipping something usable in days beats designing something beautiful for months, and I needed real behavior to learn from, not a mockup.",
  outcome:
    "Live and open-source on GitHub. The adaptive loop is the part worth defending — a plan that responds to what you did is a fundamentally different product from a plan that grades you for what you didn't.",
  next: [
    "Cohort accountability — the single strongest signal in three years of coaching was another person expecting you to show up.",
    "A lightweight weekly retro, so the adaptation is legible to the user instead of happening invisibly.",
    "RAG over a user's own history, so plans cite your actual past patterns rather than generic productivity advice.",
  ],
};

export type SkillStatus = "shipping" | "working" | "learning" | "fluent";

export type SkillGroup = {
  name: string;
  intro: string;
  /** Evidence is optional — spoken languages don't need a citation. */
  items: { name: string; status: SkillStatus; evidence?: string }[];
};

/**
 * Grouped, with the same status vocabulary the rest of the page uses.
 * Every entry carries its evidence so this reads as a claim, not a wall of pills.
 */
export const skillGroups: SkillGroup[] = [
  {
    name: "Technical",
    intro: "What I build with, and where each one has actually been used.",
    items: [
      { name: "Python", status: "shipping", evidence: "Scheduling system · ZeroSkip" },
      { name: "JavaScript", status: "shipping", evidence: "Scheduling system front end" },
      { name: "Streamlit", status: "shipping", evidence: "ZeroSkip, end to end" },
      { name: "Swift", status: "working", evidence: "Apple ecosystem work in the FabLab" },
      { name: "Agentic AI", status: "working", evidence: "Plan generation and adaptation in ZeroSkip" },
      { name: "RAG", status: "working", evidence: "Retrieval over user history — ZeroSkip roadmap" },
      { name: "Fusion 360 · Tinkercad", status: "working", evidence: "3D printing pipeline, FabLab" },
      { name: "SQL", status: "learning", evidence: "Working toward owning my own analysis" },
    ],
  },
  {
    name: "Product & Analysis",
    intro: "The parts of the job I've done without the title attached to it yet.",
    items: [
      {
        name: "Requirements & scoping",
        status: "shipping",
        evidence: "Scoped the scheduling system with its actual users",
      },
      {
        name: "User diagnosis",
        status: "shipping",
        evidence: "FabLab support — finding the real problem behind the asked one",
      },
      {
        name: "Release planning",
        status: "working",
        evidence: "Cut v1 of the scheduling system down to earn trust first",
      },
      {
        name: "Applied ML foundations",
        status: "working",
        evidence: "Stanford CS229",
      },
      { name: "Figma", status: "learning", evidence: "Wireframing ZeroSkip's next version" },
    ],
  },
  {
    name: "Languages",
    intro: "Spoken, not compiled.",
    items: [
      { name: "English", status: "fluent" },
      { name: "Gujarati", status: "fluent" },
    ],
  },
];

export const about = [
  "I'm a Computer Science student at California State University, Dominguez Hills, building products at the intersection of messy user problems and the data that explains them — and building real tools, not just studying them.",
  "I currently work as a Software Development Intern at the California STEM Institute for Innovation and Improvement, where I built an organizational scheduling system in Python and JavaScript now used by around 100 people. Alongside that, I work as a FabLab and Software Technician at CSUDH, supporting students across Swift, the Apple hardware and software ecosystem (iPad, Mac, Clips, iMovie, GarageBand), and 3D printing tools like Tinkercad and Fusion 360. Earlier, I tutored math for GEAR UP, working with over 2,000 students.",
  "This upcoming term I'm starting as an AWS Campus Leader with THE TEAM, a startup bringing cloud computing programming to campus. Outside of work, I build my own AI tools — including ZeroSkip, an AI-powered accountability app designed to keep people consistent, not just motivated.",
];
