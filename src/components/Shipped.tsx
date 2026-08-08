import { releases, patchNotes, type Release } from "@/lib/content";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";

const statusStyle: Record<Release["status"], string> = {
  upcoming: "border-slate-light/50 text-slate-light",
  current: "border-amber/60 text-amber",
  shipped: "border-hairline text-meta",
};

function ChangelogBlock({ label, children }: { label: string; children: string }) {
  return (
    <div className="grid gap-1.5 sm:grid-cols-[5.5rem_1fr] sm:gap-5">
      <dt className="label text-meta sm:pt-[0.3rem]">{label}</dt>
      <dd className="text-on-ink/85 pretty text-[0.9375rem] leading-relaxed">{children}</dd>
    </div>
  );
}

function ReleaseEntry({ release, index }: { release: Release; index: number }) {
  return (
    <Reveal as="li" delay={Math.min(index, 3) * 70} className="relative">
      {/*
        Spine node. Fills amber when the entry enters view, and on hover.
        Offsets center it on the rule: -(list padding) - half the node width.
      */}
      <span
        aria-hidden="true"
        className="release-node border-slate absolute top-7 left-[-2.0625rem] z-10 h-2.5 w-2.5 rounded-full border bg-[var(--color-ink)] sm:left-[-2.5625rem] lg:left-[-3.0625rem]"
      />

      <article className="release surface border-hairline rounded-lg border p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="label border-amber/50 text-amber rounded-full border px-2.5 py-1">
            {release.version}
          </span>
          {release.badge ? (
            <span className={`label rounded-full border px-2.5 py-1 ${statusStyle[release.status]}`}>
              {release.badge}
            </span>
          ) : null}
          {release.period ? <span className="label text-meta">{release.period}</span> : null}
        </div>

        <h3 className="font-display balance mt-4 text-[clamp(1.35rem,3.6vw,1.75rem)] leading-tight">
          {release.title}
        </h3>
        <p className="text-meta mt-2 text-sm">
          <span className="text-on-ink/70">{release.role}</span>
          <span aria-hidden="true" className="px-2">
            ·
          </span>
          {release.org}
        </p>

        <dl className="mt-6 grid gap-4">
          <ChangelogBlock label="Problem">{release.problem}</ChangelogBlock>
          <ChangelogBlock label="Shipped">{release.shipped}</ChangelogBlock>
        </dl>

        {/* The metric is the second — and last — amber element in this card. */}
        <div className="border-hairline mt-6 border-t pt-5 sm:grid sm:grid-cols-[5.5rem_1fr] sm:gap-5">
          <p className="label text-meta mb-3 sm:mt-[0.3rem] sm:mb-0">{release.outcomeLabel}</p>
          <div>
            <p className="font-display text-amber text-[clamp(1.75rem,5vw,2.25rem)] leading-none">
              {release.metric}
            </p>
            <p className="text-meta mt-2 text-xs">{release.metricCaption}</p>
            <p className="text-on-ink/85 pretty mt-3 text-[0.9375rem] leading-relaxed">
              {release.outcome}
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Shipped() {
  return (
    <Section id="shipped" ground="ink">
      <SectionHeading
        index="01"
        label="Changelog"
        title="Everything I've shipped, in release order"
        standfirst="Five releases, newest first. Each one is written the way I'd write a release note: what was broken, what I built, and what actually changed as a result."
      />

      {/* The spine: one hairline rule, nodes hung off it per entry. */}
      <ol className="border-hairline ml-3 grid gap-6 border-l pl-7 sm:ml-4 sm:gap-8 sm:pl-9 lg:pl-11">
        {releases.map((release, i) => (
          <ReleaseEntry key={release.version} release={release} index={i} />
        ))}
      </ol>

      <Reveal className="mt-14">
        <h3 className="label text-meta">Patch notes</h3>
        <ul className="border-hairline mt-4 grid gap-px overflow-hidden rounded-lg border sm:grid-cols-3">
          {patchNotes.map((note) => (
            <li key={note.label} className="surface p-5">
              <p className="text-on-ink text-sm font-medium">{note.label}</p>
              <p className="text-meta mt-1.5 text-xs">{note.detail}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
