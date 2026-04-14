import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

export function ShowcaseReports() {
  const t = useTranslations("showcase");
  return (
    <Container as="section" className="py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div
          className="reveal relative rounded-3xl border border-gold/20 bg-panel/80 p-2 md:p-3 shadow-elevated overflow-hidden order-2 md:order-1"
          style={{ ["--delay" as never]: "0.2s" }}
        >
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-bl from-gold/8 via-transparent to-transparent" />
          <Image
            src="/screenshots/reports.png"
            alt={t("reportsAlt")}
            width={2400}
            height={1500}
            className="relative rounded-2xl w-full h-auto"
          />
        </div>
        <div
          className="reveal order-1 md:order-2"
          style={{ ["--delay" as never]: "0.1s" }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
            {t("reports.eyebrow")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            {t("reports.title")}
          </h2>
          <p className="text-muted leading-relaxed max-w-lg">
            {t("reports.body")}
          </p>
        </div>
      </div>
    </Container>
  );
}
