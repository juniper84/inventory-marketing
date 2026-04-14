import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-gold">404</p>
      <h1 className="font-display text-4xl md:text-5xl">Page not found</h1>
      <p className="text-muted max-w-md">
        The page you were looking for has moved or never existed.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full border border-gold-border bg-gold-mute px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </main>
  );
}
