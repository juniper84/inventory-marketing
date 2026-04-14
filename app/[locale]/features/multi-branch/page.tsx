import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { FeatureDeepDive } from "@/components/feature-page/FeatureDeepDive";
import { MultiBranchIcon } from "@/components/icons/FeatureIcons";
import { BranchAccent } from "@/components/feature-page/accents/BranchAccent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "featurePage.multiBranch.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/features/multi-branch`,
      languages: {
        en: "/en/features/multi-branch",
        sw: "/sw/features/multi-branch",
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
        namespace="featurePage.multiBranch"
        icon={<MultiBranchIcon size={56} />}
        accent={<BranchAccent />}
        locale={locale}
        related={[
          { href: "/features/stock-ledger", labelKey: "stock.shortTitle" },
          { href: "/features/reports", labelKey: "reports.shortTitle" },
          { href: "/features/pos", labelKey: "pos.shortTitle" },
        ]}
      />
    </PageShell>
  );
}
