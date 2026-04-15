import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageShell } from "@/components/PageShell";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { appUrl } from "@/lib/app-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: "/en/about", sw: "/sw/about" },
    },
  };
}

const VALUE_KEYS = ["trust", "local", "calm", "longTerm"] as const;

function Hero() {
  const t = useTranslations("aboutPage.hero");
  return (
    <Container as="section" className="pt-16 pb-10 md:pt-24 md:pb-16">
      <div className="max-w-4xl">
        <p
          className="reveal text-xs uppercase tracking-[0.28em] text-gold mb-6"
          style={{ ["--delay" as never]: "0.05s" }}
        >
          {t("eyebrow")}
        </p>
        <h1
          className="reveal font-display text-5xl md:text-7xl leading-[0.98] tracking-tight"
          style={{ ["--delay" as never]: "0.12s" }}
        >
          {t("title")}
        </h1>
      </div>
    </Container>
  );
}

function PullQuote() {
  const t = useTranslations("aboutPage");
  return (
    <Container as="section" className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <span
          className="font-display text-7xl md:text-8xl text-gold/40 leading-none block mb-2"
          aria-hidden
        >
          &ldquo;
        </span>
        <blockquote
          className="reveal font-display text-2xl md:text-4xl leading-snug text-ink/95 tracking-tight"
          style={{ ["--delay" as never]: "0.1s" }}
        >
          {t("pullQuote")}
        </blockquote>
        <div
          className="reveal mt-8 mx-auto h-px w-16 bg-gold/50"
          style={{ ["--delay" as never]: "0.25s" }}
          aria-hidden
        />
      </div>
    </Container>
  );
}

function Story() {
  const t = useTranslations("aboutPage");
  const h = useTranslations("aboutPage.hero");
  const s = useTranslations("aboutPage.story");
  return (
    <Container as="section" className="py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-[1fr_2.2fr]">
        <div
          className="reveal md:sticky md:top-24 md:self-start"
          style={{ ["--delay" as never]: "0.1s" }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-2">
            {s("title")}
          </p>
          <p className="font-display text-lg text-ink/90 leading-snug">
            {h("subtitle")}
          </p>
        </div>
        <div
          className="reveal space-y-6 text-lg leading-relaxed text-muted"
          style={{ ["--delay" as never]: "0.2s" }}
        >
          <p className="first-letter:font-display first-letter:text-gold first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9]">
            {s("p1")}
          </p>
          <p>{s("p2")}</p>
          <p>{s("p3")}</p>
          <p className="pt-4 text-sm italic text-gold/80 font-display tracking-wide">
            {t("signature")}
          </p>
        </div>
      </div>
    </Container>
  );
}

function Manifesto() {
  const t = useTranslations("aboutPage");
  const v = useTranslations("aboutPage.values");
  return (
    <Container as="section" className="py-16">
      <p
        className="reveal text-xs uppercase tracking-[0.22em] text-gold mb-4"
        style={{ ["--delay" as never]: "0.1s" }}
      >
        {t("manifestoHeading")}
      </p>
      <h2
        className="reveal font-display text-3xl md:text-5xl leading-tight mb-10 max-w-3xl"
        style={{ ["--delay" as never]: "0.15s" }}
      >
        {v("title")}
      </h2>
      <ol className="grid gap-0">
        {VALUE_KEYS.map((key, i) => (
          <li
            key={key}
            className="reveal grid grid-cols-[48px_1fr] gap-5 py-7 border-t border-white/5 first:border-t-0 md:grid-cols-[80px_1fr]"
            style={{ ["--delay" as never]: `${0.1 + i * 0.08}s` }}
          >
            <span
              className="font-display text-gold text-xl md:text-2xl"
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl md:text-2xl mb-2 leading-tight">
                {v(`items.${key}.title`)}
              </h3>
              <p className="text-muted leading-relaxed max-w-2xl">
                {v(`items.${key}.body`)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
}

function CTABanner({ locale }: { locale: string }) {
  const t = useTranslations("cta");
  return (
    <Container as="section" className="py-16">
      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between rounded-3xl border border-gold/25 p-8 md:p-10 bg-gradient-to-br from-gold/12 via-transparent to-transparent shadow-elevated">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl md:text-3xl leading-tight mb-2">
            {t("title")}
          </h2>
          <p className="text-muted">{t("body")}</p>
        </div>
        <ButtonLink variant="primary" sweep href={appUrl(locale, "signup")}>
          {t("button")}
        </ButtonLink>
      </div>
    </Container>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageShell locale={locale}>
      <Hero />
      <div className="bg-[radial-gradient(ellipse_at_top,rgba(215,176,91,0.08),transparent_70%)]">
        <PullQuote />
      </div>
      <Story />
      <div className="bg-[#050403] border-y border-white/5">
        <Manifesto />
      </div>
      <CTABanner locale={locale} />
    </PageShell>
  );
}
