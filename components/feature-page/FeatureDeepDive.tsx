import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StepCard } from "@/components/ui/StepCard";
import { IconTile } from "@/components/ui/IconTile";
import { Link } from "@/i18n/routing";
import { appUrl } from "@/lib/app-url";

const BENEFIT_KEYS = ["one", "two", "three", "four", "five", "six"] as const;
const STEP_KEYS = ["one", "two", "three"] as const;

export type RelatedLink = {
  href: string;
  labelKey: string;
};

export function FeatureDeepDive({
  namespace,
  icon,
  related,
  locale,
  accent,
}: {
  namespace: string;
  icon: React.ReactNode;
  related: RelatedLink[];
  locale: string;
  accent?: React.ReactNode;
}) {
  const t = useTranslations(namespace);
  const tCommon = useTranslations("common");
  const tShort = useTranslations("featuresPage");
  const tPricing = useTranslations("pricing");
  const tHelpers = useTranslations("featureDeepDive");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        aside={
          <div className="relative flex items-center justify-center">
            <div className="panel-glow" />
            <div className="relative z-10 rounded-3xl border border-gold/25 bg-panel/80 p-12 shadow-elevated">
              <IconTile size="lg" className="mb-6">{icon}</IconTile>
              {accent}
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink
            variant="primary"
            sweep
            href={appUrl(locale, "signup")}
          >
            {tCommon("startFreeTrial")}
          </ButtonLink>
          <ButtonLink variant="glow" href={`/${locale}/pricing`}>
            {tPricing("seePricing")}
          </ButtonLink>
        </div>
      </PageHero>

      <Container as="section" className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div
            className="reveal rounded-3xl border border-gold/15 bg-card/70 p-8"
            style={{ ["--delay" as never]: "0.1s" }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
              {tCommon("theProblem")}
            </p>
            <h2 className="font-display text-2xl md:text-3xl leading-tight mb-4">
              {t("problem.title")}
            </h2>
            <p className="text-muted leading-relaxed">{t("problem.body")}</p>
          </div>
          <div
            className="reveal rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-transparent to-transparent p-8"
            style={{ ["--delay" as never]: "0.2s" }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
              {tCommon("theSolution")}
            </p>
            <h2 className="font-display text-2xl md:text-3xl leading-tight mb-4">
              {t("solution.title")}
            </h2>
            <p className="text-muted leading-relaxed">{t("solution.body")}</p>
          </div>
        </div>
      </Container>

      <Container as="section" className="py-12 md:py-16">
        <div className="max-w-3xl reveal" style={{ ["--delay" as never]: "0.1s" }}>
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
            {tCommon("howItWorks")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Three steps.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STEP_KEYS.map((key, i) => (
            <div
              key={key}
              className="reveal"
              style={{ ["--delay" as never]: `${0.1 + i * 0.1}s` }}
            >
              <StepCard
                step={i + 1}
                title={t(`steps.${key}.title`)}
                body={t(`steps.${key}.body`)}
              />
            </div>
          ))}
        </div>
      </Container>

      <Container as="section" className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-start">
          <div className="reveal" style={{ ["--delay" as never]: "0.1s" }}>
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
              {tCommon("whatYouGet")}
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              {tHelpers("everythingIncluded")}
            </h2>
          </div>
          <ul
            className="reveal grid gap-3 sm:grid-cols-2"
            style={{ ["--delay" as never]: "0.2s" }}
          >
            {BENEFIT_KEYS.map((key) => (
              <li
                key={key}
                className="flex items-start gap-3 rounded-2xl border border-gold/15 bg-card/60 p-4"
              >
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5.5l2 2 4-4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm text-ink">{t(`benefits.${key}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container as="section" className="py-10">
        <p className="text-xs uppercase tracking-[0.22em] text-gold mb-4">
          {tCommon("relatedFeatures")}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group rounded-2xl border border-gold/15 bg-card/60 p-5 transition hover:border-gold/40 hover:-translate-y-0.5"
            >
              <span className="font-display text-gold">
                {tShort(r.labelKey)}
              </span>
              <span className="block text-xs text-muted mt-1 transition group-hover:text-ink">
                {tCommon("learnMore")} →
              </span>
            </Link>
          ))}
        </div>
      </Container>

      <Container as="section" className="py-16">
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between rounded-3xl border border-gold/25 p-8 md:p-10 bg-gradient-to-br from-gold/12 via-transparent to-transparent shadow-elevated">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl md:text-3xl leading-tight mb-2">
              {tShort("cta.title")}
            </h2>
            <p className="text-muted">{tShort("cta.body")}</p>
          </div>
          <ButtonLink variant="primary" sweep href={appUrl(locale, "signup")}>
            {tShort("cta.button")}
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
