export type ScheduleItem = {
  time: string;
  emoji: string;
  text: string;
  detail?: string;
  cost?: string;
  restaurant?: {
    tabelog?: { rating: string; url: string };
    google?: { rating: string; url: string };
    signature?: string;
  };
};

export function DaySchedule({
  day,
  date,
  title,
  items,
  note,
  transportCost,
  mapUrl,
}: {
  day: number;
  date: string;
  title: string;
  items: ScheduleItem[];
  note?: string;
  transportCost?: string;
  mapUrl?: string;
}) {
  return (
    <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06] overflow-hidden">
      <div className="px-5 py-4 border-b border-foreground/[0.06]">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-sakura-400 text-white text-sm font-bold flex items-center justify-center">
              {day}
            </span>
            <div>
              <div className="text-sm text-foreground/50">{date}</div>
              <div className="font-semibold">{title}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {transportCost && (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-sky-50 text-sky-600 border border-sky-200">
                교통비 {transportCost}
              </span>
            )}
            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                🗺️ 동선 보기
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 py-2.5 border-b border-foreground/[0.04] last:border-0">
            <span className="text-sm font-mono text-foreground/40 w-12 shrink-0 pt-0.5">{item.time}</span>
            <span className="text-lg leading-none">{item.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm">{item.text}</span>
                {item.cost && (
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-warm-50 text-amber-700 border border-warm-200 shrink-0 whitespace-nowrap">
                    {item.cost}
                  </span>
                )}
              </div>
              {item.restaurant && (
                <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                  {item.restaurant.signature && (
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-sakura-50 text-sakura-600 border border-sakura-200">
                      🍽️ {item.restaurant.signature}
                    </span>
                  )}
                  {item.restaurant.tabelog && (
                    <a
                      href={item.restaurant.tabelog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded bg-orange-50 text-orange-600 border border-orange-200 hover:bg-orange-100 transition-colors"
                    >
                      食べログ {item.restaurant.tabelog.rating}
                    </a>
                  )}
                  {item.restaurant.google && (
                    <a
                      href={item.restaurant.google.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition-colors"
                    >
                      Google {item.restaurant.google.rating}
                    </a>
                  )}
                </div>
              )}
              {item.detail && (
                <p className="text-xs text-foreground/40 mt-1 leading-relaxed">{item.detail}</p>
              )}
            </div>
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
