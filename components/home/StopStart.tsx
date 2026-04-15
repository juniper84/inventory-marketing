import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

const ROW_KEYS = ["one", "two", "three", "four", "five", "six"] as const;

export function StopStart() {
  const t = useTranslations("stopStart");

  return (
    <Container as="section" className="py-16 md:py-24">
      <div
        className="max-w-3xl reveal mb-10"
        style={{ ["--delay" as never]: "0.1s" }}
      >
        <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
          {t("eyebrow")}
        </p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight">
          {t("title")}
        </h2>
      </div>

      <div className="grid gap-0 rounded-3xl border border-gold/20 overflow-hidden">
        <div className="grid grid-cols-2 bg-black/40 text-[0.68rem] uppercase tracking-[0.2em]">
          <div className="px-6 py-3 text-rose-200/70 border-r border-white/5">
            {t("columns.stop")}
          </div>
          <div className="px-6 py-3 text-gold">{t("columns.start")}</div>
        </div>
        {ROW_KEYS.map((key, i) => (
          <div
            key={key}
            className="reveal grid grid-cols-1 md:grid-cols-2 border-t border-white/5"
            style={{ ["--delay" as never]: `${0.1 + i * 0.06}s` }}
          >
            <div className="px-6 py-5 md:border-r border-white/5 bg-rose-300/[0.02]">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-rose-300/30 text-rose-300/80"
                >
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path
                      d="M1.5 1.5l6 6M7.5 1.5l-6 6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <p className="text-sm text-muted line-through decoration-rose-300/40 decoration-1">
                  {t(`rows.${key}.stop`)}
                </p>
              </div>
            </div>
            <div className="px-6 py-5 bg-gold/[0.03]">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-gold"
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M2 5.5l2.5 2.5 5-5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-sm text-ink">{t(`rows.${key}.start`)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
