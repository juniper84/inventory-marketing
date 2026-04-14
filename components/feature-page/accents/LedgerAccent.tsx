const ROWS = [
  { label: "Sugar 2kg", qty: "+50", tone: "in" },
  { label: "Cooking oil 5L", qty: "+24", tone: "in" },
  { label: "Soap bar", qty: "-3", tone: "out" },
  { label: "Rice 5kg", qty: "-12", tone: "out" },
  { label: "Phone charger", qty: "+18", tone: "in" },
  { label: "Notebook A4", qty: "-2", tone: "out" },
] as const;

export function LedgerAccent() {
  return (
    <div className="mt-4 grid gap-2 font-mono text-[0.72rem]">
      {ROWS.map((r, i) => (
        <div
          key={r.label}
          className="flex items-center justify-between rounded-lg border border-gold/15 bg-black/30 px-3 py-2"
          style={{ opacity: 0.55 + i * 0.08 }}
        >
          <span className="text-muted truncate">{r.label}</span>
          <span
            className={
              r.tone === "in"
                ? "text-gold font-semibold"
                : "text-rose-300/70 font-semibold"
            }
          >
            {r.qty}
          </span>
        </div>
      ))}
    </div>
  );
}
