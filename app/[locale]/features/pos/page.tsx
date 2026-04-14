import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { FeatureDeepDive } from "@/components/feature-page/FeatureDeepDive";
import { POSIcon } from "@/components/icons/FeatureIcons";
import { ReceiptAccent } from "@/components/feature-page/accents/ReceiptAccent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "featurePage.pos.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/features/pos`,
      languages: { en: "/en/features/pos", sw: "/sw/features/pos" },
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
        namespace="featurePage.pos"
        icon={<POSIcon size={56} />}
        accent={<ReceiptAccent />}
        locale={locale}
        related={[
          { href: "/features/offline-mode", labelKey: "offline.shortTitle" },
          { href: "/features/stock-ledger", labelKey: "stock.shortTitle" },
          { href: "/features/reports", labelKey: "reports.shortTitle" },
        ]}
      />
    </PageShell>
  );
}
