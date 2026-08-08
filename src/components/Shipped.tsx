import { roles, type Role } from "@/lib/content";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5 sm:grid-cols-[5.5rem_1fr] sm:gap-6">
      <dt className="label text-text-muted">{label}</dt>
      <dd className="pretty max-w-[62ch] text-[0.9375rem] leading-relaxed">{children}</dd>
    </div>
  );
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <Reveal as="li" className="border-border border-t py-8 first:border-t-0 sm:py-10">
      <article className="grid gap-6 lg:grid-cols-[13rem_1fr] lg:gap-10">
        <div>
          <p className="text-text-muted text-sm">{role.period}</p>
          {role.badge ? (
            <p className="border-border text-text-muted mt-3 inline-block rounded-full border px-2.5 py-1 text-xs">
              {role.badge}
            </p>
          ) : null}
        </div>

        <div>
          <h3 className="text-xl leading-snug font-semibold tracking-tight sm:text-2xl">
            {role.title}
          </h3>
          <p className="text-text-muted mt-1.5 text-sm">{role.org}</p>

          <dl className="mt-6 grid gap-4">
            <Block label="Problem">{role.problem}</Block>
            <Block label="Shipped">{role.shipped}</Block>
            <Block label="Impact">
              {role.metric ? (
                <>
                  <span className="block text-2xl font-semibold tracking-tight">
                    {role.metric}
                  </span>
                  <span className="text-text-muted mt-1 block text-sm">
                    {role.metricCaption}
                  </span>
                </>
              ) : (
                role.impact
              )}
            </Block>
          </dl>
        </div>
      </article>
    </Reveal>
  );
}

export default function Shipped() {
  return (
    <Section id="shipped" className="bg-surface">
      <SectionHeading
        label="Shipped"
        title="Experience"
        standfirst="What the problem was, what I built or did, and what came of it."
      />

      <ol className="grid">
        {roles.map((role) => (
          <RoleEntry key={role.title} role={role} />
        ))}
      </ol>
    </Section>
  );
}
