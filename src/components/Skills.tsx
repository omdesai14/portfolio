import { skillGroups, type SkillStatus } from "@/lib/content";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";

/**
 * Skills reuse the release vocabulary rather than introducing a new one:
 * shipping / working / learning, each with the evidence attached.
 */
const statusStyle: Record<SkillStatus, string> = {
  shipping: "border-amber/50 text-amber",
  working: "border-slate-light/40 text-slate-light",
  learning: "border-hairline text-meta",
  fluent: "border-slate-light/40 text-slate-light",
};

export default function Skills() {
  return (
    <Section id="skills" ground="ink">
      <SectionHeading
        index="03"
        label="Manifest"
        title="What I work with"
        standfirst="Grouped by what it's for, tagged by how far along I actually am, and evidenced by where it's been used. Nothing here is on the list purely because I've heard of it."
      />

      <div className="grid gap-10 lg:gap-14">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.name} delay={groupIndex * 90}>
            <div className="grid gap-6 lg:grid-cols-[14rem_1fr] lg:gap-12">
              <div>
                <h3 className="font-display text-xl leading-snug">{group.name}</h3>
                <p className="text-muted mt-2 max-w-[34ch] text-sm leading-relaxed">
                  {group.intro}
                </p>
              </div>

              <ul className="border-hairline grid border-t">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="border-hairline flex flex-wrap items-baseline gap-x-4 gap-y-1.5 border-b py-3.5"
                  >
                    <span className="text-on-ink min-w-[9rem] text-[0.9375rem] font-medium">
                      {item.name}
                    </span>
                    <span
                      className={`label shrink-0 rounded-full border px-2 py-1 ${statusStyle[item.status]}`}
                    >
                      {item.status}
                    </span>
                    {item.evidence ? (
                      <span className="text-meta basis-full text-xs sm:ml-auto sm:basis-auto sm:text-right">
                        {item.evidence}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
