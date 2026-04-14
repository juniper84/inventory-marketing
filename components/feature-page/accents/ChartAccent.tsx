const BARS = [
  { height: 30, label: "Mon" },
  { height: 48, label: "Tue" },
  { height: 42, label: "Wed" },
  { height: 62, label: "Thu" },
  { height: 54, label: "Fri" },
  { height: 88, label: "Sat" },
  { height: 76, label: "Sun" },
];

export function ChartAccent() {
  return (
    <div className="mt-4 rounded-xl border border-gold/15 bg-black/40 p-4">
      <div className="flex items-center justify-between mb-3 text-[0.68rem] uppercase tracking-widest">
        <span className="text-muted">Sales · 7 days</span>
        <span className="text-gold font-bold">TZS 4.87M</span>
      </div>
      <div className="flex items-end justify-between gap-1.5 h-24">
        {BARS.map((bar, i) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center gap-1.5">
            <div
              className="w-full rounded-t bg-gradient-to-t from-gold/70 to-gold/30"
              style={{
                height: `${bar.height}%`,
                opacity: 0.5 + i * 0.07,
              }}
            />
            <span className="text-[0.6rem] text-muted/70">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
