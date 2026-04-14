import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PulseGrid } from "./PulseGrid";
import { HeroPanelCard } from "./HeroPanelCard";
import { whatsappUrl } from "@/lib/whatsapp";
import { appUrl } from "@/lib/app-url";

const STAT_KEYS = ["allInOne", "offline", "secure"] as const;
const STATUS_KEYS = ["uptime", "offline", "audit"] as const;

export function Hero({ locale }: { locale: string }) {
  const t = useTranslations("hero");
  const tPricing = useTranslations("pricing");

  const buyBusinessMessage = tPricing("tiers.business.ctaMessageMonthly");
  const askMessage = t("ctaQuestion");

  return (
    <Container as="section" className="pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="grid gap-12 md:gap-16 lg:grid-cols-[1.1fr_1fr] items-center">
        <div>
          <p
            className="reveal text-xs uppercase tracking-[0.22em] text-gold mb-3"
            style={{ ["--delay" as never]: "0.05s" }}
          >
            {t("eyebrow")}
          </p>
          <h1
            className="reveal font-display leading-[1.08] text-4xl sm:text-5xl lg:text-6xl mb-5"
            style={{ ["--delay" as never]: "0.12s" }}
          >
            {t("headline")}
          </h1>
          <p
            className="reveal text-muted text-base md:text-lg leading-relaxed max-w-xl mb-7"
            style={{ ["--delay" as never]: "0.2s" }}
          >
            {t("subhead")}
          </p>

          <div
            className="reveal flex flex-wrap gap-3 mb-7"
            style={{ ["--delay" as never]: "0.28s" }}
          >
            <ButtonLink
              variant="primary"
              sweep
              href={appUrl(locale, "signup")}
            >
              {t("ctaTrial")}
            </ButtonLink>
            <ButtonLink
              variant="glow"
              href={whatsappUrl(buyBusinessMessage)}
              target="_blank"
              rel="noreferrer"
            >
              {t("ctaWhatsapp")}
            </ButtonLink>
            <ButtonLink
              variant="ghost"
              href={whatsappUrl(askMessage)}
              target="_blank"
              rel="noreferrer"
            >
              {t("ctaQuestion")}
            </ButtonLink>
          </div>

          <div
            className="reveal flex flex-wrap gap-2 mb-6"
            style={{ ["--delay" as never]: "0.34s" }}
          >
            {STATUS_KEYS.map((key) => (
              <span
                key={key}
                className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-black/50 px-4 py-2 text-xs text-muted"
              >
                <span className="pulse-dot" />
                {t(`status.${key}`)}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg">
            {STAT_KEYS.map((key) => (
              <div
                key={key}
                className="rounded-2xl border border-gold/20 bg-card/80 px-4 py-3 shadow-elevated"
              >
                <strong className="block text-sm text-ink">
                  {t(`stats.${key}.value`)}
                </strong>
                <span className="text-xs text-muted">
                  {t(`stats.${key}.label`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-6">
          <div className="panel-glow" />
          <PulseGrid />
          <HeroPanelCard />
        </div>
      </div>
    </Container>
  );
}
