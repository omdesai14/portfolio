"use client";

import { useEffect, useState } from "react";

/**
 * Renders the photo at `src` once confirmed loadable. Checking with an
 * off-DOM Image() first — rather than putting `src` straight on the <img>
 * and reacting to its error event — avoids a race where the browser's
 * native image fetch fails and fires its error event before React has
 * hydrated and attached a listener for it. Until confirmed (or if there's
 * no src, or the file is genuinely missing), falls back to an initials
 * circle instead of a broken-image icon.
 */
export function Avatar({
  src,
  alt,
  initials,
  size = 96,
}: {
  src?: string;
  alt: string;
  initials: string;
  size?: number;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;
    setLoaded(false);
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(false);
    img.src = src;
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (!src || !loaded) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="grid shrink-0 place-items-center rounded-full bg-accent-soft font-semibold text-accent"
        style={{ width: size, height: size, fontSize: size * 0.34 }}
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- external headshot, presence checked at runtime above
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="shrink-0 rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  );
}
