import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";

const COLS = 5;
const ROWS = 4;
const TOTAL = COLS * ROWS;

const LIVE_CELLS = new Set([2, 7, 11, 16]);
const ALERT_CELL = 13;

const PULSE_DELAYS = [0, 0.8, 1.6, 2.4];

export function PulseGrid() {
  const t = useTranslations("pulseGrid");

  return (
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="pulse-dot" />
        <p className="font-display uppercase tracking-[0.16em] text-[0.7rem] text-gold">
          {t("title")}
        </p>
      </div>

      <div className="pulse-grid">
        <div className="pulse-wave" aria-hidden />
        {Array.from({ length: TOTAL }).map((_, index) => {
          const isLive = LIVE_CELLS.has(index);
          const isAlert = index === ALERT_CELL;
          const delayIndex = [...LIVE_CELLS].indexOf(index);
          const pulseDelay = isLive ? PULSE_DELAYS[delayIndex] ?? 0 : 0;

          return (
            <div
              key={index}
              className={cn(
                "pulse-cell",
                isLive && "pulse-cell--live",
                isAlert && "pulse-cell--alert",
              )}
              style={
                isLive
                  ? ({ ["--pulse-delay" as never]: `${pulseDelay}s` } as React.CSSProperties)
                  : undefined
              }
            >
              <span className="pulse-cell__bar" aria-hidden />
            </div>
          );
        })}
      </div>

      <p className="text-xs text-muted text-center max-w-[18rem] leading-snug">
        {t("caption")}
      </p>
    </div>
  );
}
