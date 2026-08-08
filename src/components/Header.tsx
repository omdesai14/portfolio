import { nav, site } from "@/lib/site";

/**
 * Sticky, translucent, and dark on both grounds so it needs no scroll listener —
 * zero JS. Below `sm` the anchors are hidden and the section headings do the
 * navigating instead, which avoids shipping a hamburger menu for five links.
 */
export default function Header() {
  return (
    <header className="ground-ink fixed inset-x-0 top-0 z-50 border-b border-[var(--color-ink-line)] bg-[color-mix(in_srgb,var(--color-ink)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#top"
          className="font-display text-on-ink text-base tracking-tight sm:text-lg"
        >
          {site.name}
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-7 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-on-ink/70 hover:text-on-ink text-sm transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.resume}
          download
          className="label border-amber/60 text-amber hover:bg-amber hover:text-ink rounded-full border px-3 py-1.5 transition-colors duration-200"
        >
          Résumé
        </a>
      </div>
    </header>
  );
}
