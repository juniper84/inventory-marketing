"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Section, SectionHead } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/whatsapp";

const TIER_KEYS = ["starter", "business", "enterprise"] as const;
type TierKey = (typeof TIER_KEYS)[number];

const TIER_BULLETS: Record<TierKey, readonly string[]> = {
  starter: ["branches", "products", "transactions", "pos", "audit"],
  business: [
    "everything",
    "branches",
    "products",
    "transactions",
    "offline",
    "transfers",
    "priceLists",
    "reminders",
  ],
  enterprise: [
    "everything",
    "unlimited",
    "offline",
    "advanced",
    "priority",
    "training",
    "custom",
  ],
};

const TIER_MISSING: Record<TierKey, readonly string[]> = {
  starter: ["offline", "multiBranch", "priceLists"],
  business: ["unlimited", "priority"],
  enterprise: ["nothing"],
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

      <div className="mt-12 grid gap-5 md:grid-cols-3 md:items-start">
        {TIER_KEYS.map((tier, index) => {
          const featured = tier === FEATURED;
          const price = billing === "monthly"
            ? t(`tiers.${tier}.priceMonthly`)
            : t(`tiers.${tier}.priceAnnual`);
          const suffix = billing === "monthly" ? t("perMonth") : t("perYear");
          const ctaMessage = billing === "monthly"
            ? t(`tiers.${tier}.ctaMessageMonthly`)
            : t(`tiers.${tier}.ctaMessageAnnual`);
          const bullets = TIER_BULLETS[tier];
          const missing = TIER_MISSING[tier];

          return (
            <article
              key={tier}
              className={cn(
                "reveal relative flex flex-col gap-5 rounded-3xl border p-7 pt-9 transition",
                featured
                  ? "border-gold/60 bg-gradient-to-b from-gold/10 via-card/95 to-card/90 shadow-gold md:-translate-y-4"
                  : "border-gold/20 bg-card/90 shadow-elevated hover:border-gold/40",
              )}
              style={{ ["--delay" as never]: `${index * 0.1}s` }}
            >
              {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center rounded-full bg-gold px-4 py-1 text-[0.68rem] tracking-[0.18em] text-[#1a1206] font-bold uppercase shadow-gold">
                  ★ {t("badge")}
                </span>
              )}

              <header>
                <h3 className="font-display text-xl leading-tight">
                  {t(`tiers.${tier}.name`)}
                </h3>
                <p className="text-xs text-muted mt-1.5 leading-snug max-w-[22ch]">
                  {t(`tiers.${tier}.tagline`)}
                </p>
              </header>

              <div>
                {billing === "annual" && (
                  <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[0.6rem] uppercase tracking-widest text-gold mb-2">
                    {t("saveAnnual")}
                  </span>
                )}
                <p className="flex items-baseline flex-wrap gap-x-1.5 font-bold tabular-nums leading-none">
                  <span className="text-[1.7rem] md:text-[1.9rem]">{price}</span>
                  <span className="text-xs text-muted font-normal">
                    {suffix}
                  </span>
                </p>
              </div>

              <div className="h-px bg-white/5" />

              <ul className="grid gap-2.5 text-sm text-ink/90">
                {bullets.map((bullet) => {
                  const isHeader = bullet === "everything";
                  return (
                    <li
                      key={bullet}
                      className={cn(
                        "flex items-start gap-2.5",
                        isHeader && "text-gold font-display text-xs uppercase tracking-[0.12em] pb-1",
                      )}
                    >
                      {!isHeader && (
                        <span
                          aria-hidden
                          className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"
                        >
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <path
                              d="M1.8 4.5l1.8 1.8 3.6-4"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                      <span>{t(`tiers.${tier}.bullets.${bullet}`)}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto pt-5 border-t border-white/5">
                <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted mb-2">
                  {t(`tiers.${tier}.missing.title`)}
                </p>
                <ul className="grid gap-1.5 text-xs text-muted/80">
                  {missing.map((key) => (
                    <li key={key} className="flex items-start gap-2">
                      {tier !== "enterprise" && (
                        <span
                          aria-hidden
                          className="mt-0.5 inline-flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center rounded-full border border-muted/30"
                        >
                          <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                            <path
                              d="M1.5 1.5l4 4M5.5 1.5l-4 4"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      )}
                      <span>{t(`tiers.${tier}.missing.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ButtonLink
                variant={featured ? "primary" : "glow"}
                href={whatsappUrl(ctaMessage)}
                target="_blank"
                rel="noreferrer"
                className="w-full"
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
