import { useTranslations } from "next-intl";

const METRIC_KEYS = ["lowStock", "dailySales", "branch"] as const;

export function HeroPanelCard() {
  const t = useTranslations("heroPanel");

  return (
    <div className="relative z-10 float-card rounded-3xl border border-gold/25 bg-panel/90 p-7 shadow-elevated">
      <p className="font-display text-gold mb-4">{t("title")}</p>
      {METRIC_KEYS.map((key) => (
        <div
          key={key}
          className="flex items-center justify-between border-b border-white/5 py-3 text-sm last:border-0"
        >
          <span className="text-muted">{t(`metrics.${key}.label`)}</span>
          <strong className="text-ink">{t(`metrics.${key}.value`)}</strong>
        </div>
      ))}
      <p className="mt-4 text-sm text-muted leading-relaxed">{t("note")}</p>
    </div>
  );
}
