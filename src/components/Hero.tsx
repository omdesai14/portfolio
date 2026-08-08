import { site } from "@/lib/site";

/**
 * The one orchestrated moment on the page: a six-step stagger on load, plus two
 * very slow gradient blobs behind it. Entirely CSS — no JS ships for any of it.
 * Both effects collapse under prefers-reduced-motion.
 */

const step = (i: number) => ({ animationDelay: `${i * 90}ms` });

export default function Hero() {
  return (
    <section className="on-ink relative isolate flex min-h-[92svh] items-center overflow-hidden px-5 pt-28 pb-20 sm:px-8 sm:pt-32">
      {/* Ambient gradient. aria-hidden and pointer-events-none: purely optical. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="drift absolute -top-1/4 left-[-10%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(circle,var(--color-slate)_0%,transparent_62%)] opacity-[0.13] blur-3xl" />
        <div className="drift-alt absolute right-[-15%] bottom-[-25%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,var(--color-amber)_0%,transparent_65%)] opacity-[0.07] blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <p className="lift label text-meta flex flex-wrap items-center gap-x-3 gap-y-2" style={step(0)}>
          <span className="border-hairline text-accent rounded-full border px-2.5 py-1">
            v3.0
          </span>
          <span>Currently shipping</span>
        </p>

        <h1
          className="lift font-display mt-6 text-[clamp(2.75rem,11vw,5.5rem)] leading-[0.95]"
          style={step(1)}
        >
          {site.name}
        </h1>

        <div
          className="rule-draw bg-amber mt-6 h-px w-28 origin-left sm:w-36"
          style={step(2)}
          aria-hidden="true"
        />

        <p
          className="lift pretty mt-8 max-w-[36ch] text-[clamp(1.15rem,3.4vw,1.6rem)] leading-[1.45]"
          style={step(3)}
        >
          I build systems that people actually use — then stay close enough to find
          out <span className="text-accent">why</span> they use them.
        </p>

        <p className="lift text-muted pretty mt-5 max-w-[52ch] leading-relaxed" style={step(4)}>
          Computer science undergrad at CSU Dominguez Hills, coming to product from
          the user&rsquo;s side of the table. Targeting APM and rotational product
          programs.
        </p>

        <div className="lift mt-10 flex flex-wrap items-center gap-3" style={step(5)}>
          <a
            href="#shipped"
            className="border-amber text-amber hover:bg-amber hover:text-ink inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200"
          >
            View the changelog
            <span aria-hidden="true">↓</span>
          </a>
          <a
            href={site.resume}
            download
            className="border-hairline text-on-ink hover:border-slate-light inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200"
          >
            Résumé
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        {/* Release-metadata block. Reads as build info, not as a contact card. */}
        <dl
          className="lift border-hairline mt-16 grid max-w-md gap-y-3 border-t pt-6"
          style={step(6)}
        >
          {[
            ["Location", site.location],
            ["Focus", "APM & rotational product programs"],
            ["Languages", "English · Gujarati"],
          ].map(([term, value]) => (
            <div
              key={term}
              className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-5"
            >
              <dt className="label text-meta sm:w-24 sm:shrink-0">{term}</dt>
              <dd className="text-on-ink text-sm">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
