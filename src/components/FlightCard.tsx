export function FlightCard({
  direction,
  airline,
  date,
  time,
  from,
  to,
  color,
}: {
  direction: string;
  airline: string;
  date: string;
  time: string;
  from: string;
  to: string;
  color: "sky" | "warm";
}) {
  const bgClass = color === "sky" ? "bg-sky-50" : "bg-warm-50";
  const borderClass = color === "sky" ? "border-sky-200" : "border-warm-200";
  const badgeClass = color === "sky" ? "bg-sky-100 text-sky-700 dark:text-sky-400" : "bg-warm-100 text-amber-700 dark:text-amber-400";

  return (
    <div className={`rounded-2xl ${bgClass} border ${borderClass} p-5`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeClass}`}>
          {direction}
        </span>
        <span className="text-sm font-medium text-foreground/60">{airline}</span>
      </div>
      <div className="text-sm text-foreground/60 mb-1">{date}</div>
      <div className="text-3xl font-bold tracking-tight mb-3">{time}</div>
      <div className="flex items-center gap-2 text-sm text-foreground/60">
        <span className="font-medium">{from}</span>
        <span>→</span>
        <span className="font-medium">{to}</span>
      </div>
    </div>
  );
}
