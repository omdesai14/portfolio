import Link from "next/link";
import type { CaseStudy } from "@/content/portfolio";
import { Pill } from "./Section";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group relative rounded-2xl border border-line bg-surface-raised p-6 transition hover:border-ink-faint sm:p-7">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-faint">
        <span className="font-medium text-ink-muted">{study.org}</span>
        <span aria-hidden="true">·</span>
        <span>{study.role}</span>
        <span aria-hidden="true">·</span>
        <span>{study.timeframe}</span>
      </div>

      <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">
        {/*
          Stretched link: the whole card is the click target, but only the
          title is announced as the link text.
        */}
        <Link href={`/work/${study.slug}`} className="before:absolute before:inset-0">
          {study.title}
        </Link>
      </h3>

      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
        {study.summary}
      </p>

      {study.metrics.length > 0 && (
        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 sm:grid-cols-3">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block text-xl font-semibold tracking-tight text-accent">
                  {m.value}
                </span>
                <span className="mt-1 block text-xs leading-snug text-ink-faint">
                  {m.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      {study.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      )}
    </article>
  );
}
