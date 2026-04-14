"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Section, SectionHead } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/whatsapp";

const TIER_KEYS = ["starter", "business", "enterprise"] as const;
type TierKey = (typeof TIER_KEYS)[number];

const TIER_BULLET_KEYS: Record<TierKey, readonly string[]> = {
  starter: ["branches", "products", "transactions", "core"],
  business: ["branches", "products", "transactions", "offline"],
  enterprise: ["scale", "offline", "controls", "guidance"],
};

const FEATURED: TierKey = "business";

export function PricingTeaser() {
  const t = useTranslations("pricing");
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <Section id="pricing">
      <SectionHead title={t("title")} subtitle={t("subtitle")} align="center" />

      <div className="mt-8 flex flex-col items-center gap-3">
        <div
          className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-black/40 p-1"
          role="group"
          aria-label="Billing cycle"
        >
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            aria-pressed={billing === "monthly"}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-medium transition",
              billing === "monthly"
                ? "bg-gold/20 text-ink"
                : "text-muted hover:text-ink",
            )}
          >
            {t("billingMonthly")}
          </button>
          <button
            type="button"
            onClick={() => setBilling("annual")}
            aria-pressed={billing === "annual"}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-medium transition",
              billing === "annual"
                ? "bg-gold/20 text-ink"
                : "text-muted hover:text-ink",
            )}
          >
            {t("billingAnnual")}
          </button>
        </div>
        <p className="text-xs text-muted">{t("annualSaveNote")}</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {TIER_KEYS.map((tier, index) => {
          const featured = tier === FEATURED;
          const price = billing === "monthly"
            ? t(`tiers.${tier}.priceMonthly`)
            : t(`tiers.${tier}.priceAnnual`);
          const suffix = billing === "monthly" ? t("perMonth") : t("perYear");
          const ctaMessage = billing === "monthly"
            ? t(`tiers.${tier}.ctaMessageMonthly`)
            : t(`tiers.${tier}.ctaMessageAnnual`);

          return (
            <article
              key={tier}
              className={cn(
                "reveal relative flex flex-col gap-4 rounded-3xl border bg-card/90 p-7 shadow-elevated transition",
                featured
                  ? "border-gold/60 shadow-gold"
                  : "border-gold/20 hover:border-gold/40",
              )}
              style={{ ["--delay" as never]: `${index * 0.12}s` }}
            >
              {featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-gold/20 px-3 py-1 text-[0.7rem] tracking-[0.14em] text-gold uppercase">
                  {t("badge")}
                </span>
              )}
              {billing === "annual" && (
                <span className="self-start inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-widest text-gold">
                  {t("saveAnnual")}
                </span>
              )}
              <h3 className="font-display text-xl">{t(`tiers.${tier}.name`)}</h3>
              <p className="flex items-baseline flex-wrap gap-x-1.5 gap-y-0 font-bold tabular-nums leading-none">
                <span className="text-2xl md:text-[1.75rem]">{price}</span>
                <span className="text-xs text-muted font-normal">
                  {suffix}
                </span>
              </p>
              <ul className="grid gap-2 text-sm text-muted">
                {TIER_BULLET_KEYS[tier].map((bulletKey) => (
                  <li key={bulletKey} className="checklist-bullet">
                    {t(`tiers.${tier}.bullets.${bulletKey}`)}
                  </li>
                ))}
              </ul>
              <ButtonLink
                variant={featured ? "primary" : "glow"}
                href={whatsappUrl(ctaMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-auto"
              >
                {t(`tiers.${tier}.cta`)}
              </ButtonLink>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
