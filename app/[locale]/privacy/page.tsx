import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/legal/LegalPage";

const SECTIONS = [
  "collect",
  "use",
  "share",
  "retention",
  "rights",
  "security",
  "changes",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "privacyPage.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { en: "/en/privacy", sw: "/sw/privacy" },
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
      <LegalPage namespace="privacyPage" sectionKeys={SECTIONS} />
    </PageShell>
  );
}
