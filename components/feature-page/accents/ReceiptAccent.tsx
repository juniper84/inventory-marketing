const ITEMS = [
  { name: "Biscuits Large pack", qty: 1, price: "2,500" },
  { name: "Pen Red", qty: 2, price: "1,000" },
  { name: "Phone Charger USB-C", qty: 1, price: "9,500" },
  { name: "Notebook A5", qty: 1, price: "1,500" },
];
const TOTAL = "14,500";

export function ReceiptAccent() {
  return (
    <div className="mt-4 rounded-xl border border-dashed border-gold/30 bg-black/40 p-4 font-mono text-[0.72rem]">
      <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-widest text-gold/80 mb-3">
        <span>Receipt</span>
        <span>SAL-0184</span>
      </div>
      <div className="grid gap-1.5">
        {ITEMS.map((item) => (
          <div key={item.name} className="flex justify-between gap-3">
            <span className="text-muted truncate">
              {item.qty}× {item.name}
            </span>
            <span className="text-ink tabular-nums">TZS {item.price}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-dashed border-gold/20 flex justify-between">
        <span className="text-gold">TOTAL</span>
        <span className="text-gold font-bold tabular-nums">TZS {TOTAL}</span>
      </div>
    </div>
  );
}
