import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

export function ShowcaseDashboard() {
  const t = useTranslations("showcase");
  return (
    <Container as="section" className="py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.3fr]">
        <div className="reveal" style={{ ["--delay" as never]: "0.1s" }}>
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
            {t("dashboard.eyebrow")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            {t("dashboard.title")}
          </h2>
          <p className="text-muted leading-relaxed max-w-lg">
            {t("dashboard.body")}
          </p>
        </div>
        <div
          className="reveal relative rounded-3xl border border-gold/20 bg-panel/80 p-2 md:p-3 shadow-elevated overflow-hidden"
          style={{ ["--delay" as never]: "0.2s" }}
        >
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-gold/8 via-transparent to-transparent" />
          <Image
            src="/screenshots/dashboard.png"
            alt={t("dashboardAlt")}
            width={2400}
            height={1500}
            priority
            className="relative rounded-2xl w-full h-auto"
          />
        </div>
      </div>
    </Container>
  );
}
