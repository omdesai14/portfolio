import { about } from "@/lib/content";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";

export default function About() {
  return (
    <Section id="about" ground="paper">
      <SectionHeading index="00" label="Readme" title="About" />

      <div className="grid gap-10 lg:grid-cols-[1fr_16rem] lg:gap-16">
        <div className="grid gap-6">
          {about.map((paragraph, i) => (
            <Reveal key={i} as="p" delay={i * 80}>
              <span className="pretty block max-w-[62ch] text-[1.0625rem] leading-[1.7] sm:text-lg">
                {paragraph}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="border-hairline grid gap-5 border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            {[
              ["Studying", "B.S. Computer Science, CSU Dominguez Hills"],
              [
                "Currently",
                "SWE Intern, CA STEM Institute for Innovation and Improvement · FabLab and Software Technician, CSUDH",
              ],
              ["Incoming", "AWS Campus Leader, THE TEAM"],
              ["Building", "ZeroSkip — adaptive accountability"],
              ["Targeting", "APM · Google, Meta, Amazon, Microsoft"],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="label text-meta">{term}</dt>
                <dd className="mt-2 text-sm leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
