import { project } from "@/lib/content";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-border grid gap-1.5 border-t pt-5 sm:grid-cols-[5.5rem_1fr] sm:gap-6">
      <p className="label text-text-muted">{label}</p>
      <p className="pretty max-w-[62ch] leading-relaxed">{children}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading label="Projects" title={project.name} standfirst={project.tagline} />

      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="border-border text-text-muted rounded-full border px-3 py-1 text-xs"
              >
                {tech}
              </li>
            ))}
          </ul>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm font-medium underline underline-offset-4"
          >
            View on GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div className="mt-8 grid gap-6">
          <Block label="Problem">{project.problem}</Block>
          <Block label="Approach">{project.approach}</Block>
          <Block label="Outcome">{project.outcome}</Block>
        </div>
      </Reveal>
    </Section>
  );
}
