import { site } from "@/lib/site";

/**
 * Static hero. No entrance choreography, no ambient motion — the page's only
 * animation is the scroll fade-in used further down.
 */
export default function Hero() {
  return (
    <section className="px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-28">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="balance text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.05] font-semibold tracking-tight">
          {site.name}
        </h1>

        <p className="pretty mt-6 max-w-[34ch] text-[clamp(1.15rem,3vw,1.5rem)] leading-[1.4] font-normal">
          I build systems that people actually use — then stay close enough to find
          out why.
        </p>

        <p className="text-text-muted pretty mt-5 max-w-[52ch] leading-relaxed">
          Computer Science student at CSU Dominguez Hills.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#shipped"
            className="bg-text text-bg hover:bg-accent inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-150"
          >
            View experience
          </a>
          <a
            href={site.resume}
            download
            className="border-border-strong hover:border-text inline-flex items-center rounded-full border px-6 py-3 text-sm font-medium transition-colors duration-150"
          >
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
