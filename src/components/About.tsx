import { about, languages } from "@/lib/content";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";

/** Facts that were previously stranded in the hero metadata block. */
const facts: [string, string][] = [
  ["Location", site.location],
  ["Studying", "B.S. Computer Science, CSU Dominguez Hills"],
  [
    "Currently",
    "Software Development Intern, California STEM Institute · FabLab and Software Technician, CSUDH",
  ],
  ["Incoming", "AWS Campus Leader, THE TEAM"],
  ["Building", "ZeroSkip"],
  ["Languages", languages.join(", ")],
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading label="About" title="Background" />

      <div className="grid gap-10 lg:grid-cols-[1fr_17rem] lg:gap-16">
        <div className="grid gap-6">
          {about.map((paragraph, i) => (
            <Reveal key={i} as="p" delay={i * 60}>
              <span className="pretty block max-w-[64ch] text-[1.0625rem] leading-[1.7]">
                {paragraph}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <dl className="border-border grid gap-5 border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            {facts.map(([term, value]) => (
              <div key={term}>
                <dt className="label">{term}</dt>
                <dd className="mt-2 text-sm leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
