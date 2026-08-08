import { project } from "@/lib/content";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";

function CaseBlock({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-hairline border-t pt-6 sm:grid sm:grid-cols-[6rem_1fr] sm:gap-8">
      <p className="label text-meta sm:pt-1">{label}</p>
      <div>
        <h3 className="font-display mt-3 text-lg leading-snug sm:mt-0 sm:text-xl">{title}</h3>
        <div className="text-muted pretty mt-3 max-w-[62ch] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" ground="paper">
      <SectionHeading
        index="02"
        label="Case study"
        title="ZeroSkip"
        standfirst={project.tagline}
      />

      <Reveal>
        <div className="border-hairline bg-raised rounded-lg border p-6 sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="label border-amber-deep/40 text-accent rounded-full border px-2.5 py-1">
                {project.version}
              </span>
              {project.stack.map((tech) => (
                <span key={tech} className="label text-meta border-hairline rounded-full border px-2.5 py-1">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-accent inline-flex items-center gap-1.5 text-sm font-medium"
            >
              View on GitHub
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <div className="mt-8 grid gap-7">
            <CaseBlock label="Problem" title="Plans don't fail. People drift from them.">
              {project.problem}
            </CaseBlock>

            <CaseBlock label="Approach" title="Make the plan respond to the behavior.">
              {project.approach}
            </CaseBlock>

            <CaseBlock label="Outcome" title="Live, open-source, and still wrong in useful ways.">
              {project.outcome}
            </CaseBlock>

            <CaseBlock label="Next" title="What I'd ship in the next release.">
              <ul className="grid gap-3">
                {project.next.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden="true" className="text-accent mt-2 h-1 w-1 shrink-0 rounded-full bg-current" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CaseBlock>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
