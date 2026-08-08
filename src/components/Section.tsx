import type { ReactNode } from "react";

/**
 * A page section on one of the two grounds. The `ground` prop sets the
 * background, text colors and focus-ring color together (see .on-ink /
 * .on-paper in globals.css) so nothing downstream has to know where it sits.
 */
export function Section({
  id,
  ground,
  children,
  className = "",
}: {
  id?: string;
  ground: "ink" | "paper";
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${ground === "ink" ? "on-ink" : "on-paper"} px-5 py-20 sm:px-8 sm:py-28 lg:py-36 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

/**
 * Section heading in the metadata voice: a mono index label, then the display
 * serif title, then an optional standfirst.
 */
export function SectionHeading({
  index,
  label,
  title,
  standfirst,
}: {
  index: string;
  label: string;
  title: string;
  standfirst?: string;
}) {
  return (
    <header className="mb-12 sm:mb-16">
      <p className="label text-meta flex items-center gap-3">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="border-hairline h-px w-8 border-t" />
        <span>{label}</span>
      </p>
      <h2 className="font-display balance mt-5 text-[clamp(1.85rem,5vw,2.75rem)] leading-[1.1]">
        {title}
      </h2>
      {standfirst ? (
        <p className="text-muted pretty mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
          {standfirst}
        </p>
      ) : null}
    </header>
  );
}
