import type { ReactNode } from "react";

/** A page section. One light ground throughout, so no per-section theming. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 sm:py-24 lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

/** Small accent label, heading, optional standfirst. */
export function SectionHeading({
  label,
  title,
  standfirst,
}: {
  label: string;
  title: string;
  standfirst?: string;
}) {
  return (
    <header className="mb-10 sm:mb-14">
      <p className="label">{label}</p>
      <h2 className="balance mt-4 text-[clamp(1.75rem,4.5vw,2.5rem)] leading-[1.15] font-semibold tracking-tight">
        {title}
      </h2>
      {standfirst ? (
        <p className="text-text-muted pretty mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
          {standfirst}
        </p>
      ) : null}
    </header>
  );
}
