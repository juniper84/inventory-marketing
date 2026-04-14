import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
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
      {
        "@type": "Offer",
        name: "Starter",
        price: "40000",
        priceCurrency: "TZS",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "40000",
          priceCurrency: "TZS",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Business",
        price: "75000",
        priceCurrency: "TZS",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "75000",
          priceCurrency: "TZS",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "150000",
        priceCurrency: "TZS",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "150000",
          priceCurrency: "TZS",
          unitText: "MONTH",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={[orgSchema, productSchema]} />
      <Nav locale={locale} />
      <main>
        <Hero locale={locale} />
        <Highlights />
        <ShowcaseDashboard />
        <FeatureGrid />
        <ShowcaseReports />
        <Emphasis />
        <ShowcasePOS />
        <PricingTeaser />
        <CtaBanner locale={locale} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
