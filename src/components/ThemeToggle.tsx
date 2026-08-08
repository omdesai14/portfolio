"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  const explicit = document.documentElement.getAttribute("data-theme");
  if (explicit === "light" || explicit === "dark") return explicit;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  // Undefined until mounted: the server has no way to know the visitor's
  // theme, so we render a stable placeholder and fill it in on the client.
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  function toggle() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing / storage disabled — the toggle still works for
      // this page view, it just won't persist.
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme ? `Switch to ${theme === "dark" ? "light" : "dark"} theme` : "Switch theme"
      }
      className="grid size-9 place-items-center rounded-lg border border-line text-ink-muted transition hover:border-ink-faint hover:text-ink"
    >
      {/* Both icons are always in the DOM; only one is visible, so the
          button never changes size between states. */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        className={`size-[18px] ${theme === "dark" ? "hidden" : ""}`}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`size-[18px] ${theme === "dark" ? "" : "hidden"}`}
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
    </button>
  );
}
