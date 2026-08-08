import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

/**
 * One family for the whole page, self-hosted by next/font at build time.
 * Nothing is fetched from fonts.googleapis.com at runtime, which is faster
 * (no extra connection, no layout shift) and lets the CSP stay strict.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Om Desai",
    "CSU Dominguez Hills",
    "computer science",
    "software development intern",
    "AWS Campus Leader",
    "ZeroSkip",
    "Python",
    "Swift",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: `${site.name} — Portfolio`,
    title: site.title,
    description: site.description,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/*
          Without JS the IntersectionObserver never fires, so every .reveal
          element would stay at opacity 0. Force the final state instead.
        */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
