import { nav, site } from "@/lib/site";

/**
 * Minimal light header. Sticky with a translucent background and a hairline
 * rule — no scroll listener, so no JS ships for it. Below `sm` the anchors are
 * hidden and the résumé button stays, which avoids a hamburger for five links.
 */
export default function Header() {
  return (
    <header className="border-border bg-bg/85 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="text-[0.95rem] font-semibold tracking-tight">
          {site.name}
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-7 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-text-muted hover:text-accent text-sm transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.resume}
          download
          className="border-border-strong hover:border-text rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-150"
        >
          Résumé
        </a>
      </div>
    </header>
  );
}
