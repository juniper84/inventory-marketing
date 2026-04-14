import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { FeatureDeepDive } from "@/components/feature-page/FeatureDeepDive";
import { OfflineIcon } from "@/components/icons/FeatureIcons";
import { OfflineAccent } from "@/components/feature-page/accents/OfflineAccent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "featurePage.offline.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/features/offline-mode`,
      languages: {
        en: "/en/features/offline-mode",
        sw: "/sw/features/offline-mode",
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
        namespace="featurePage.offline"
        icon={<OfflineIcon size={56} />}
        accent={<OfflineAccent />}
        locale={locale}
        related={[
          { href: "/features/pos", labelKey: "pos.shortTitle" },
          { href: "/features/stock-ledger", labelKey: "stock.shortTitle" },
          { href: "/features/multi-branch", labelKey: "branches.shortTitle" },
        ]}
      />
    </PageShell>
  );
}
