import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import {
  ScanPhoneIcon,
  BatchExpiryIcon,
  CreditIcon,
  PrintBarcodeIcon,
  SwahiliIcon,
} from "@/components/icons/HighlightIcons";

const ITEMS = [
  { key: "scan", Icon: ScanPhoneIcon },
  { key: "batch", Icon: BatchExpiryIcon },
  { key: "credit", Icon: CreditIcon },
  { key: "print", Icon: PrintBarcodeIcon },
  { key: "swahili", Icon: SwahiliIcon },
] as const;

export function Highlights() {
  const t = useTranslations("highlights");
  return (
    <Container as="section" className="py-14 md:py-20">
      <div
        className="max-w-2xl mb-10 reveal"
        style={{ ["--delay" as never]: "0.1s" }}
      >
        <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
          {t("eyebrow")}
        </p>
        <h2 className="font-display text-3xl md:text-4xl leading-tight">
          {t("title")}
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {ITEMS.map(({ key, Icon }, i) => (
          <article
            key={key}
            className="reveal flex flex-col gap-4 rounded-2xl border border-gold/20 bg-card/70 p-5 shadow-elevated transition hover:border-gold/45 hover:-translate-y-1"
            style={{ ["--delay" as never]: `${0.1 + i * 0.08}s` }}
          >
            <IconTile size="sm">
              <Icon />
            </IconTile>
            <h3 className="font-display text-base text-gold leading-snug">
              {t(`items.${key}.title`)}
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              {t(`items.${key}.body`)}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}
