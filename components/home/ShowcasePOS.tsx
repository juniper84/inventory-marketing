import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

export function ShowcasePOS() {
  const t = useTranslations("showcase");
  return (
    <Container as="section" className="py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto reveal" style={{ ["--delay" as never]: "0.1s" }}>
        <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
          {t("pos.eyebrow")}
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
          {t("pos.title")}
        </h2>
        <p className="text-muted leading-relaxed">{t("pos.body")}</p>
      </div>

      <div
        className="reveal mt-12 relative rounded-3xl border border-gold/20 bg-panel/80 p-3 md:p-5 shadow-elevated overflow-hidden"
        style={{ ["--delay" as never]: "0.2s" }}
      >
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-gold/8 via-transparent to-transparent" />
        <Image
          src="/screenshots/pos.png"
          alt={t("pos.desktopAlt")}
          width={2400}
          height={1500}
          className="relative rounded-2xl w-full h-auto"
        />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div
          className="reveal relative rounded-3xl border border-gold/20 bg-panel/80 p-3 shadow-elevated overflow-hidden flex items-center justify-center"
          style={{ ["--delay" as never]: "0.3s" }}
        >
          <Image
            src="/screenshots/ipad.png"
            alt={t("pos.tabletAlt")}
            width={1200}
            height={1600}
            className="relative rounded-2xl w-full max-w-sm h-auto"
          />
        </div>
        <div
          className="reveal relative rounded-3xl border border-gold/20 bg-panel/80 p-3 shadow-elevated overflow-hidden flex items-center justify-center"
          style={{ ["--delay" as never]: "0.4s" }}
        >
          <Image
            src="/screenshots/mobile.png"
            alt={t("pos.mobileAlt")}
            width={800}
            height={1600}
            className="relative rounded-2xl w-full max-w-[260px] h-auto"
          />
        </div>
      </div>
    </Container>
  );
}
