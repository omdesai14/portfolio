import { projects, type Project } from "@/lib/content";
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

function ProjectEntry({ project }: { project: Project }) {
  return (
    <div className="border-border border-t pt-10 first:border-t-0 first:pt-0">
      <h3 className="text-xl leading-snug font-semibold tracking-tight sm:text-2xl">
        {project.name}
      </h3>
      <p className="text-text-muted pretty mt-2 max-w-[62ch] leading-relaxed">{project.tagline}</p>
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

          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-sm font-medium underline underline-offset-4"
            >
              View on GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <span className="text-text-muted text-sm">{project.status}</span>
          )}
        </div>

        <div className="mt-8 grid gap-6">
          <Block label="Problem">{project.problem}</Block>
          <Block label="Approach">{project.approach}</Block>
          <Block label="Outcome">{project.outcome}</Block>
        </div>
      </Reveal>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        label="Projects"
        title="Selected Projects"
        standfirst="What I'm building, the problems behind it, and what has actually shipped."
      />
      <div className="grid gap-12">
        {projects.map((project) => (
          <ProjectEntry key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
