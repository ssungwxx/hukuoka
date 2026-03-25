export function DaySchedule({
  day,
  date,
  title,
  items,
  note,
}: {
  day: number;
  date: string;
  title: string;
  items: { time: string; emoji: string; text: string }[];
  note?: string;
}) {
  return (
    <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06] overflow-hidden">
      <div className="px-5 py-4 border-b border-foreground/[0.06]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-sakura-400 text-white text-sm font-bold flex items-center justify-center">
            {day}
          </span>
          <div>
            <div className="text-sm text-foreground/50">{date}</div>
            <div className="font-semibold">{title}</div>
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 py-2.5 border-b border-foreground/[0.04] last:border-0">
            <span className="text-sm font-mono text-foreground/40 w-12 shrink-0 pt-0.5">{item.time}</span>
            <span className="text-lg leading-none">{item.emoji}</span>
            <span className="text-sm">{item.text}</span>
          </div>
        ))}
      </div>
      {note && (
        <div className="px-5 py-3 bg-warm-50 text-sm text-amber-700 border-t border-warm-200">
          {note}
        </div>
      )}
    </div>
  );
}
