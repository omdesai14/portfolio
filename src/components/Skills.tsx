import { skillGroups } from "@/lib/content";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";

export default function Skills() {
  return (
    <Section id="skills" className="bg-surface">
      <SectionHeading label="Skills" title="What I work with" />

      <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
        {skillGroups.map((group, i) => (
          <Reveal key={group.name} delay={i * 70}>
            <h3 className="text-base font-semibold tracking-tight">{group.name}</h3>
            <ul className="border-border mt-4 grid border-t">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="border-border flex items-baseline justify-between gap-3 border-b py-3 text-[0.9375rem]"
                >
                  <span>{item.name}</span>
                  {item.note ? (
                    <span className="text-text-muted shrink-0 text-xs">{item.note}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
