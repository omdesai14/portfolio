import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { publishedCaseStudies } from "@/content/portfolio";
import { Pill } from "@/components/Section";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return publishedCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = publishedCaseStudies.find((s) => s.slug === slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
    openGraph: { title: study.title, description: study.summary },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = publishedCaseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-14 sm:pt-20">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition hover:text-ink"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        All work
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-faint">
          <span className="font-medium text-ink-muted">{study.org}</span>
          <span aria-hidden="true">·</span>
          <span>{study.role}</span>
          <span aria-hidden="true">·</span>
          <span>{study.timeframe}</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          {study.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          {study.summary}
        </p>

        {study.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        )}

        {study.links && study.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {study.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-sm font-medium text-ink transition hover:border-ink-faint"
              >
                {link.label}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-3.5"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </header>

      {study.metrics.length > 0 && (
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 rounded-2xl border border-line bg-surface-raised p-6 sm:grid-cols-3">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight text-accent">
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

      <div className="mt-14 space-y-12">
        {study.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {section.body.map((para, i) => (
                <p
                  key={i}
                  className="text-[1.02rem] leading-[1.75] text-ink-muted"
                >
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <nav className="mt-16 border-t border-line pt-8">
        <Link
          href="/#work"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          ← Back to all work
        </Link>
      </nav>
    </article>
  );
}
