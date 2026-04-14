import { useTranslations } from "next-intl";
import { Section, SectionHead } from "@/components/ui/Section";

const FEATURE_KEYS = [
  "stock",
  "pos",
  "purchases",
  "reports",
  "offline",
  "secure",
] as const;

export function FeatureGrid() {
  const t = useTranslations("features");

  return (
    <Section id="features">
      <SectionHead title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURE_KEYS.map((key, index) => (
          <article
            key={key}
            className="reveal rounded-2xl border border-gold/20 bg-card/80 p-6 shadow-elevated/40 transition hover:-translate-y-1 hover:border-gold/40"
            style={{ ["--delay" as never]: `${index * 0.08}s` }}
          >
            <h3 className="font-display text-gold mb-2 text-lg">
              {t(`items.${key}.title`)}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {t(`items.${key}.body`)}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
