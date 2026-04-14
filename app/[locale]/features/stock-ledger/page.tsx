import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { FeatureDeepDive } from "@/components/feature-page/FeatureDeepDive";
import { StockLedgerIcon } from "@/components/icons/FeatureIcons";
import { LedgerAccent } from "@/components/feature-page/accents/LedgerAccent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "featurePage.stockLedger.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/features/stock-ledger`,
      languages: {
        en: "/en/features/stock-ledger",
        sw: "/sw/features/stock-ledger",
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageShell locale={locale}>
      <FeatureDeepDive
        namespace="featurePage.stockLedger"
        icon={<StockLedgerIcon size={56} />}
        accent={<LedgerAccent />}
        locale={locale}
        related={[
          { href: "/features/reports", labelKey: "reports.shortTitle" },
          { href: "/features/multi-branch", labelKey: "branches.shortTitle" },
          { href: "/features/offline-mode", labelKey: "offline.shortTitle" },
        ]}
      />
    </PageShell>
  );
}
