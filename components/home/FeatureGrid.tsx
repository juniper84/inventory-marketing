import { useTranslations } from "next-intl";
import { Section, SectionHead } from "@/components/ui/Section";
import { Link } from "@/i18n/routing";
import { IconTile } from "@/components/ui/IconTile";
import {
  StockLedgerIcon,
  POSIcon,
  OfflineIcon,
  ReportsIcon,
  MultiBranchIcon,
  SecurityIcon,
} from "@/components/icons/FeatureIcons";

const FEATURES = [
  { key: "stock", href: "/features/stock-ledger", Icon: StockLedgerIcon },
  { key: "pos", href: "/features/pos", Icon: POSIcon },
  { key: "offline", href: "/features/offline-mode", Icon: OfflineIcon },
  { key: "reports", href: "/features/reports", Icon: ReportsIcon },
  { key: "branches", href: "/features/multi-branch", Icon: MultiBranchIcon },
  { key: "security", href: "/features/multi-branch", Icon: SecurityIcon },
] as const;

export function FeatureGrid() {
  const t = useTranslations("features");
  const tFeatures = useTranslations("featuresPage");
  const tCommon = useTranslations("common");

  return (
    <Section id="features">
      <SectionHead title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ key, href, Icon }, index) => (
          <Link
            key={key}
            href={href}
            className="group relative flex flex-col reveal rounded-2xl border border-gold/20 bg-card/80 p-7 shadow-elevated transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold-strong"
            style={{ ["--delay" as never]: `${index * 0.08}s` }}
          >
            <IconTile size="sm" className="mb-4">
              <Icon size={28} />
            </IconTile>
            <h3 className="font-display text-gold mb-2 text-lg leading-snug">
              {tFeatures(`${key}.shortTitle`)}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6 grow">
              {tFeatures(`${key}.pitch`)}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition group-hover:gap-2.5">
              <span>{tCommon("learnMore")}</span>
              <span aria-hidden>→</span>
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 20% 0%, rgba(215,176,91,0.08), transparent 70%)",
              }}
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
