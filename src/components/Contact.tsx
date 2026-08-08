import { site } from "@/lib/site";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: site.links.linkedinHandle,
    href: site.links.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: site.links.githubHandle,
    href: site.links.github,
    external: true,
  },
];

export default function Contact() {
  return (
    <>
      <Section id="contact">
        <SectionHeading
          label="Contact"
          title="Get in touch"
          standfirst="The best way to reach me is email. I'm also on LinkedIn and GitHub."
        />

        <Reveal>
          <ul className="border-border grid border-t">
            {channels.map((channel) => (
              <li key={channel.label} className="border-border border-b">
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover:text-accent flex flex-wrap items-baseline gap-x-5 gap-y-1 py-5 transition-colors duration-150"
                >
                  <span className="label text-text-muted w-20 shrink-0">
                    {channel.label}
                  </span>
                  <span className="text-[1.0625rem] break-all">{channel.value}</span>
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
            className="bg-text text-bg hover:bg-accent mt-10 inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-150"
          >
            Download résumé
            <span className="sr-only"> (PDF)</span>
          </a>
        </Reveal>
      </Section>

      <footer className="border-border border-t px-5 py-10 sm:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            {site.name} · {new Date().getFullYear()}
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Email", href: `mailto:${site.email}`, external: false },
              { label: "LinkedIn", href: site.links.linkedin, external: true },
              { label: "GitHub", href: site.links.github, external: true },
              { label: "Résumé", href: site.resume, external: false, download: true },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-text-muted hover:text-accent text-sm transition-colors duration-150"
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
