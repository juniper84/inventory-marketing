const STEPS = [
  { label: "Signal lost", tone: "warn" as const },
  { label: "Sales queuing locally", tone: "active" as const },
  { label: "Connection restored", tone: "info" as const },
  { label: "Queue synced", tone: "ok" as const },
];

const toneStyles = {
  warn: "border-rose-300/40 bg-rose-300/5 text-rose-200/80",
  active: "border-gold/35 bg-gold/10 text-gold",
  info: "border-sky-300/30 bg-sky-300/5 text-sky-200/80",
  ok: "border-emerald-300/35 bg-emerald-300/10 text-emerald-200",
};

export function OfflineAccent() {
  return (
    <div className="mt-4 grid gap-2">
      {STEPS.map((s, i) => (
        <div
          key={s.label}
          className={`rounded-lg border px-3 py-2.5 text-[0.75rem] flex items-center justify-between ${toneStyles[s.tone]}`}
        >
          <span className="flex items-center gap-2">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "currentColor" }}
            />
            {s.label}
          </span>
          <span className="text-[0.62rem] uppercase tracking-widest opacity-70">
            {`0${i + 1}`}
          </span>
        </div>
      ))}
    </div>
  );
}
