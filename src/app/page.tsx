import Link from "next/link";
import {
  about,
  experience,
  publishedCaseStudies,
  site,
  skills,
  socials,
} from "@/content/portfolio";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Section } from "@/components/Section";

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-28">
      <div className="max-w-3xl animate-rise">
        <p className="text-sm font-medium text-accent">{site.title}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          {site.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="/#work"
            className="rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-surface transition hover:opacity-90"
          >
            View my work
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-ink transition hover:border-ink-faint"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <Section
      id="work"
      title="Selected work"
      intro="Case studies covering the problem, the tradeoffs, and what actually moved."
    >
      {publishedCaseStudies.length > 0 ? (
        <div className="grid gap-5">
          {publishedCaseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      ) : (
        <p className="text-[0.95rem] text-ink-faint">
          No published case studies yet.
        </p>
      )}
    </Section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          {about.map((para, i) => (
            <p key={i} className="text-[0.975rem] leading-relaxed text-ink-muted">
              {para}
            </p>
          ))}
        </div>

        <div className="space-y-7">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.title}`}
            className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <div className="text-sm text-ink-faint sm:pt-0.5">
              <span className="block">{role.period}</span>
              <span className="mt-0.5 block">{role.location}</span>
            </div>
            <div>
              <h3 className="font-semibold tracking-tight text-ink">
                {role.title}
              </h3>
              <p className="mt-0.5 text-sm text-ink-muted">{role.company}</p>
              <ul className="mt-3 space-y-2">
                {role.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="relative pl-5 text-[0.95rem] leading-relaxed text-ink-muted before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-ink-faint"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      title="Get in touch"
      intro={site.availability ?? undefined}
    >
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
        <a
          href={`mailto:${site.email}`}
          className="text-lg font-medium text-accent underline-offset-4 hover:underline"
        >
          {site.email}
        </a>
        <ul className="flex flex-wrap gap-5 text-sm text-ink-muted">
          {socials
            .filter((s) => !s.href.startsWith("mailto:"))
            .map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <p className="mt-6 text-sm text-ink-faint">{site.location}</p>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
