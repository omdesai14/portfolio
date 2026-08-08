import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-6 py-32">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 text-[0.975rem] leading-relaxed text-ink-muted">
        That page doesn&apos;t exist — it may have been moved or renamed.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-ink transition hover:border-ink-faint"
      >
        Back home
      </Link>
    </div>
  );
}
