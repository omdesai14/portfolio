import { site } from "@/lib/site";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
  { label: "LinkedIn", value: "in/omdesai14", href: site.links.linkedin, external: true },
  { label: "GitHub", value: "@omdesai14", href: site.links.github, external: true },
];

export default function Contact() {
  return (
    <>
      <Section id="contact" ground="paper">
        <SectionHeading
          index="04"
          label="Contact"
          title="Open to APM conversations"
          standfirst="Recruiting for an APM or rotational product program, or just want to argue about whether accountability is a feature? Either is welcome."
        />

        <Reveal>
          <ul className="border-hairline grid border-t">
            {channels.map((channel) => (
              <li key={channel.label} className="border-hairline border-b">
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex flex-wrap items-baseline gap-x-5 gap-y-1 py-5"
                >
                  <span className="label text-meta w-20 shrink-0">{channel.label}</span>
                  <span className="link-underline text-[1.0625rem] sm:text-lg">
                    {channel.value}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-accent ml-auto transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                  {channel.external ? (
                    <span className="sr-only">(opens in a new tab)</span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={site.resume}
            download
            className="border-amber-deep text-accent hover:bg-amber-deep hover:text-paper mt-10 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors duration-200"
          >
            Download résumé
            <span aria-hidden="true">↓</span>
            <span className="sr-only">(PDF)</span>
          </a>
        </Reveal>
      </Section>

      <footer className="on-ink border-t border-[var(--color-ink-line)] px-5 py-10 sm:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4">
          <p className="label text-meta">
            {site.name} — built with Next.js · {new Date().getFullYear()}
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Email", href: `mailto:${site.email}`, external: false },
              { label: "LinkedIn", href: site.links.linkedin, external: true },
              { label: "GitHub", href: site.links.github, external: true },
              { label: "Résumé", href: site.resume, external: false },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="link-underline text-on-ink/80 hover:text-on-ink text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
