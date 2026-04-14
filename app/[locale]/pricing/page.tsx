import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { ComparisonTable, type ComparisonRow } from "@/components/ui/ComparisonTable";
import { FAQ } from "@/components/ui/FAQ";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "pricingPage.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/pricing`,
      languages: { en: "/en/pricing", sw: "/sw/pricing" },
    },
  };
}

function Comparison() {
  const t = useTranslations("pricingPage.comparison");
  const r = t.raw("rows") as Record<string, string>;
  const v = t.raw("values") as Record<string, string>;

  const rows: ComparisonRow[] = [
    { label: r.branches, values: [v.starterBranches, v.businessBranches, v.enterpriseBranches] },
    { label: r.users, values: [v.starterUsers, v.businessUsers, v.enterpriseUsers] },
    { label: r.products, values: [v.starterProducts, v.businessProducts, v.enterpriseProducts] },
    { label: r.transactions, values: [v.starterTx, v.businessTx, v.enterpriseTx] },
    { label: r.pos, values: [true, true, true] },
    { label: r.stock, values: [true, true, true] },
    { label: r.reports, values: [true, true, true] },
    { label: r.offline, values: [false, true, true] },
    { label: r.multiBranchTransfers, values: [false, true, true] },
    { label: r.audit, values: [true, true, true] },
    { label: r.roles, values: [true, true, true] },
    { label: r.support, values: [v.supportStandard, v.supportBusiness, v.supportEnterprise] },
  ];

  return (
    <Container as="section" className="py-16">
      <div className="max-w-2xl reveal" style={{ ["--delay" as never]: "0.1s" }}>
        <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
          {t("title")}
        </p>
        <h2 className="font-display text-3xl md:text-4xl leading-tight mb-3">
          {t("subtitle")}
        </h2>
      </div>
      <div className="mt-8 reveal" style={{ ["--delay" as never]: "0.2s" }}>
        <ComparisonTable
          tiers={["Starter", "Business", "Enterprise"]}
          rows={rows}
          featuredIndex={1}
        />
      </div>
    </Container>
  );
}

function FAQSection() {
  const t = useTranslations("pricingPage.faq");
  const itemKeys = [
    "change",
    "annual",
    "offline",
    "trial",
    "cancel",
    "training",
    "payment",
    "data",
  ] as const;
  const items = itemKeys.map((k) => ({
    question: t(`items.${k}.question`),
    answer: t(`items.${k}.answer`),
  }));

  return (
    <Container as="section" className="py-16">
      <div className="max-w-2xl reveal mb-8" style={{ ["--delay" as never]: "0.1s" }}>
        <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
          FAQ
        </p>
        <h2 className="font-display text-3xl md:text-4xl leading-tight">
          {t("title")}
        </h2>
      </div>
      <div className="reveal" style={{ ["--delay" as never]: "0.2s" }}>
        <FAQ items={items} />
      </div>
    </Container>
  );
}

function Hero() {
  const t = useTranslations("pricingPage.hero");
  return (
    <PageHero
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
      align="center"
    />
  );
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "pricingPage.faq.items" });
  const itemKeys = [
    "change",
    "annual",
    "offline",
    "trial",
    "cancel",
    "training",
    "payment",
    "data",
  ] as const;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: itemKeys.map((k) => ({
      "@type": "Question",
      name: t(`${k}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`${k}.answer`),
      },
    })),
  };

  return (
    <PageShell locale={locale}>
      <JsonLd data={faqSchema} />
      <Hero />
      <PricingTeaser />
      <Comparison />
      <FAQSection />
    </PageShell>
  );
}
