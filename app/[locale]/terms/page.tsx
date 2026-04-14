import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/legal/LegalPage";

const SECTIONS = [
  "service",
  "accounts",
  "payment",
  "data",
  "acceptableUse",
  "termination",
  "liability",
  "law",
  "contact",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "termsPage.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/terms`,
      languages: { en: "/en/terms", sw: "/sw/terms" },
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
      <LegalPage namespace="termsPage" sectionKeys={SECTIONS} />
    </PageShell>
  );
}
