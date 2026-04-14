import { useTranslations } from "next-intl";
import { Section, SectionHead } from "@/components/ui/Section";
import { whatsappUrl } from "@/lib/whatsapp";

export function Contact() {
  const t = useTranslations("contact");
  const askMessage = useTranslations("hero")("ctaQuestion");

  return (
    <Section id="contact">
      <SectionHead title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-8 grid gap-6 rounded-3xl border border-gold/20 bg-card/80 p-6 md:p-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-gold mb-2">{t("whatsapp")}</h3>
          <a
            href={whatsappUrl(askMessage)}
            target="_blank"
            rel="noreferrer"
            className="text-ink hover:text-gold transition"
          >
            +255 788 533 632
          </a>
        </div>
        <div>
          <h3 className="font-display text-gold mb-2">{t("call")}</h3>
          <p className="text-muted text-sm leading-relaxed">
            <a className="hover:text-ink transition" href="tel:+255758144662">
              +255 758 144 662
            </a>
            <br />
            <a className="hover:text-ink transition" href="tel:+255794732426">
              +255 794 732 426
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-display text-gold mb-2">{t("email")}</h3>
          <p className="text-muted text-sm leading-relaxed">
            <a
              className="hover:text-ink transition"
              href="mailto:support@newvisioninventory.com"
            >
              support@newvisioninventory.com
            </a>
            <br />
            <a
              className="hover:text-ink transition"
              href="mailto:info@newvisioninventory.com"
            >
              info@newvisioninventory.com
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
