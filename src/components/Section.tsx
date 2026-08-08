export function Section({
  id,
  title,
  intro,
  children,
}: {
  id?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-muted">
              {intro}
            </p>
          )}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-ink-muted">
      {children}
    </span>
  );
}
