import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

const AUDIENCES = [
  {
    key: "retail",
    accent: "from-gold/20 via-gold/5 to-transparent",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" aria-hidden>
        <path
          d="M7 16l2-7h22l2 7M5 16h30v15a2 2 0 01-2 2H7a2 2 0 01-2-2V16z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M15 23h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "wholesale",
    accent: "from-amber-300/15 via-gold/5 to-transparent",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" aria-hidden>
        <rect x="6" y="16" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="23" y="16" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="7" width="12" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 31h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    key: "pharmacy",
    accent: "from-emerald-300/15 via-gold/5 to-transparent",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" aria-hidden>
        <rect x="8" y="10" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 15v10M15 20h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 6v6M28 6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "multiBranch",
    accent: "from-sky-300/15 via-gold/5 to-transparent",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" aria-hidden>
        <circle cx="20" cy="10" r="3.5" fill="currentColor" />
        <circle cx="10" cy="28" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="28" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="28" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M20 13.5v7M20 20.5l-10 4M20 20.5l10 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
      </svg>
    ),
  },
] as const;

export function Audiences() {
  const t = useTranslations("audiences");
  return (
    <Container as="section" className="py-16 md:py-24">
      <div
        className="max-w-3xl reveal mb-12"
        style={{ ["--delay" as never]: "0.1s" }}
      >
        <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
          {t("eyebrow")}
        </p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight mb-4">
          {t("title")}
        </h2>
        <p className="text-muted text-base md:text-lg leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {AUDIENCES.map(({ key, accent, icon }, i) => (
          <article
            key={key}
            className="reveal relative overflow-hidden rounded-2xl border border-gold/20 bg-card/80 p-6 shadow-elevated transition hover:-translate-y-1 hover:border-gold/40"
            style={{ ["--delay" as never]: `${0.15 + i * 0.08}s` }}
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`}
              aria-hidden
            />
            <div className="relative">
              <div className="text-gold mb-4">{icon}</div>
              <h3 className="font-display text-lg text-gold mb-2 leading-tight">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {t(`items.${key}.body`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
