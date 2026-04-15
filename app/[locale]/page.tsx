import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SectionBand } from "@/components/SectionBand";
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { Audiences } from "@/components/home/Audiences";
import { StopStart } from "@/components/home/StopStart";
import { ShowcaseDashboard } from "@/components/home/ShowcaseDashboard";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { ShowcaseReports } from "@/components/home/ShowcaseReports";
import { Emphasis } from "@/components/home/Emphasis";
import { ShowcasePOS } from "@/components/home/ShowcasePOS";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Contact } from "@/components/home/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "New Vision Inventory",
    url: `https://newvisioninventory.com/${locale}`,
    logo: "https://newvisioninventory.com/icon-512.png",
    description:
      locale === "sw"
        ? "Stok, POS, na ripoti zilizojengwa kwa biashara za Tanzania."
        : "Inventory, POS, and reports built for Tanzanian businesses.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TZ",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+255-788-533-632",
        contactType: "sales",
        areaServed: "TZ",
        availableLanguage: ["en", "sw"],
      },
    ],
    sameAs: ["https://wa.me/255788533632"],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "New Vision Inventory",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    offers: [
      { "@type": "Offer", name: "Starter", price: "40000", priceCurrency: "TZS" },
      { "@type": "Offer", name: "Business", price: "75000", priceCurrency: "TZS" },
      { "@type": "Offer", name: "Enterprise", price: "150000", priceCurrency: "TZS" },
    ],
  };

  return (
    <>
      <JsonLd data={[orgSchema, productSchema]} />
      <Nav locale={locale} />
      <main>
        <Hero locale={locale} />

        <SectionBand tone="deep" divider="both">
          <Highlights />
        </SectionBand>

        <SectionBand tone="base">
          <ShowcaseDashboard />
        </SectionBand>

        <SectionBand tone="warm" divider="top">
          <Audiences />
        </SectionBand>

        <SectionBand tone="lift" divider="top">
          <FeatureGrid />
        </SectionBand>

        <SectionBand tone="deep" divider="both">
          <ShowcaseReports />
        </SectionBand>

        <SectionBand tone="base">
          <StopStart />
        </SectionBand>

        <SectionBand tone="warm">
          <Emphasis />
        </SectionBand>

        <SectionBand tone="deep" divider="both">
          <ShowcasePOS />
        </SectionBand>

        <SectionBand tone="base">
          <PricingTeaser />
        </SectionBand>

        <SectionBand tone="warm">
          <CtaBanner locale={locale} />
        </SectionBand>

        <SectionBand tone="deep" divider="top">
          <Contact />
        </SectionBand>
      </main>
      <Footer />
    </>
  );
}
