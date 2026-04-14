import { useTranslations } from "next-intl";

export function ContactHeroAside() {
  const t = useTranslations("contactPage.direct");
  return (
    <div className="relative">
      <div className="panel-glow" />
      <div className="relative z-10 rounded-3xl border border-gold/25 bg-panel/80 p-8 md:p-10 shadow-elevated">
        <svg
          viewBox="0 0 200 140"
          className="w-full h-36 mb-6"
          aria-hidden
        >
          <defs>
            <linearGradient id="env-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(215, 176, 91, 0.25)" />
              <stop offset="100%" stopColor="rgba(215, 176, 91, 0.05)" />
            </linearGradient>
          </defs>
          <rect
            x="30"
            y="30"
            width="140"
            height="88"
            rx="8"
            fill="url(#env-grad)"
            stroke="#d7b05b"
            strokeWidth="1.5"
          />
          <path
            d="M30 38l70 50 70-50"
            fill="none"
            stroke="#d7b05b"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="160" cy="42" r="6" fill="#d7b05b">
            <animate
              attributeName="opacity"
              values="0.4;1;0.4"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="160" cy="42" r="11" fill="none" stroke="rgba(215, 176, 91, 0.4)" strokeWidth="1">
            <animate
              attributeName="r"
              values="6;14;6"
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.8;0;0.8"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-gold/15 bg-black/30 py-3 px-2">
            <p className="text-[0.62rem] uppercase tracking-[0.18em] text-muted mb-1">
              {t("whatsapp")}
            </p>
            <p className="text-[0.72rem] text-gold font-display">24/7</p>
          </div>
          <div className="rounded-xl border border-gold/15 bg-black/30 py-3 px-2">
            <p className="text-[0.62rem] uppercase tracking-[0.18em] text-muted mb-1">
              Reply
            </p>
            <p className="text-[0.72rem] text-gold font-display">&lt; 1 day</p>
          </div>
          <div className="rounded-xl border border-gold/15 bg-black/30 py-3 px-2">
            <p className="text-[0.62rem] uppercase tracking-[0.18em] text-muted mb-1">
              Lang
            </p>
            <p className="text-[0.72rem] text-gold font-display">EN · SW</p>
          </div>
        </div>
      </div>
    </div>
  );
}
