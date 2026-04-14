import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { IconTile } from "@/components/ui/IconTile";
import {
  StockLedgerIcon,
  POSIcon,
  OfflineIcon,
  ReportsIcon,
  MultiBranchIcon,
  SecurityIcon,
} from "@/components/icons/FeatureIcons";
import { Link } from "@/i18n/routing";
import { appUrl } from "@/lib/app-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "featuresPage.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/features`,
      languages: { en: "/en/features", sw: "/sw/features" },
    },
  };
}

const FEATURE_ORDER = [
  { key: "stock", href: "/features/stock-ledger", Icon: StockLedgerIcon },
  { key: "pos", href: "/features/pos", Icon: POSIcon },
  { key: "offline", href: "/features/offline-mode", Icon: OfflineIcon },
  { key: "reports", href: "/features/reports", Icon: ReportsIcon },
  { key: "branches", href: "/features/multi-branch", Icon: MultiBranchIcon },
  { key: "security", href: "/features/multi-branch", Icon: SecurityIcon },
] as const;

function FeaturesGrid() {
  const t = useTranslations("featuresPage");
  const tCommon = useTranslations("common");
  return (
    <Container as="section" className="py-12 md:py-16">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURE_ORDER.map(({ key, href, Icon }, i) => (
          <Link
            key={key}
            href={href}
            className="group reveal relative flex flex-col rounded-3xl border border-gold/20 bg-card/70 p-7 shadow-elevated transition hover:-translate-y-1 hover:border-gold/50"
            style={{ ["--delay" as never]: `${i * 0.08}s` }}
          >
            <IconTile className="mb-5">
              <Icon />
            </IconTile>
            <h3 className="font-display text-xl text-gold mb-2">
              {t(`${key}.title`)}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6 grow">
              {t(`${key}.pitch`)}
            </p>
            <span className="text-xs uppercase tracking-[0.18em] text-gold/80 group-hover:text-gold transition">
              {tCommon("learnMore")} →
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}

function CTABanner({ locale }: { locale: string }) {
  const t = useTranslations("featuresPage.cta");
  return (
    <Container as="section" className="py-16">
      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between rounded-3xl border border-gold/25 p-8 md:p-10 bg-gradient-to-br from-gold/12 via-transparent to-transparent shadow-elevated">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl md:text-3xl leading-tight mb-2">
            {t("title")}
          </h2>
          <p className="text-muted">{t("body")}</p>
        </div>
        <ButtonLink variant="primary" sweep href={appUrl(locale, "signup")}>
          {t("button")}
        </ButtonLink>
      </div>
    </Container>
  );
}

function Hero() {
  const t = useTranslations("featuresPage.hero");
  return (
    <PageHero
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
    />
  );
}

export default async function FeaturesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageShell locale={locale}>
      <Hero />
      <FeaturesGrid />
      <CTABanner locale={locale} />
    </PageShell>
  );
}
