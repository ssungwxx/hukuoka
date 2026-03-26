export type TransportRoute = {
  from: string;
  to: string;
  method: string;
  time: string;
  cost: string;
};

export function TransportInfo({ rows }: { rows: TransportRoute[] }) {
  return (
    <div className="grid gap-0 text-sm">
      {rows.map((row, i) => (
        <div
          key={i}
          className="border-b border-foreground/[0.04] last:border-0"
        >
          {/* Mobile layout: stacked card-like rows */}
          <div className="block sm:hidden px-3 py-3">
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium text-foreground/80 min-w-0 break-words">
                {row.from}{" "}
                <span className="text-foreground/30 mx-0.5">&rarr;</span>{" "}
                {row.to}
              </span>
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-sky-50 text-sky-600 dark:text-sky-400 border border-sky-200 shrink-0 whitespace-nowrap">
                {row.cost}
              </span>
            </div>
            <div className="text-xs text-foreground/40 mt-1">
              {row.method}
              <span className="mx-1.5">&middot;</span>
              {row.time}
            </div>
          </div>

          {/* Desktop layout: compact inline row */}
          <div className="hidden sm:flex items-center gap-2 py-1.5 px-1">
            <span className="text-foreground/70 font-medium min-w-0">
              {row.from}
            </span>
            <span className="text-foreground/30">&rarr;</span>
            <span className="text-foreground/70 font-medium min-w-0">
              {row.to}
            </span>
            <span className="ml-auto flex items-center gap-2 shrink-0">
              <span className="text-xs text-foreground/40">{row.method}</span>
              <span className="text-xs text-foreground/40">{row.time}</span>
              <span className="text-xs font-medium px-1.5 py-0.5 rounded bg-sky-50 text-sky-600 dark:text-sky-400 border border-sky-200">
                {row.cost}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
