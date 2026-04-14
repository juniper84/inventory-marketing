import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { FeatureDeepDive } from "@/components/feature-page/FeatureDeepDive";
import { ReportsIcon } from "@/components/icons/FeatureIcons";
import { ChartAccent } from "@/components/feature-page/accents/ChartAccent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "featurePage.reports.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/features/reports`,
      languages: {
        en: "/en/features/reports",
        sw: "/sw/features/reports",
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
        namespace="featurePage.reports"
        icon={<ReportsIcon size={56} />}
        accent={<ChartAccent />}
        locale={locale}
        related={[
          { href: "/features/stock-ledger", labelKey: "stock.shortTitle" },
          { href: "/features/multi-branch", labelKey: "branches.shortTitle" },
          { href: "/features/pos", labelKey: "pos.shortTitle" },
        ]}
      />
    </PageShell>
  );
}
