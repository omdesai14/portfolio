import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Shipped from "@/components/Shipped";
import Skills from "@/components/Skills";
import { languages } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * Structured data for the person behind the site. Serialized from a typed
 * object rather than a template string, so nothing can break out of the
 * <script> context.
 */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Software Development Intern",
  description: site.description,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "California State University, Dominguez Hills",
  },
  knowsLanguage: languages,
  sameAs: [site.links.github, site.links.linkedin],
};

export default function Page() {
  return (
    <>
      <span id="top" />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Shipped />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <script
        type="application/ld+json"
        // JSON.stringify output is escaped below so a "</script>" in any string
        // can't terminate the tag early.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
