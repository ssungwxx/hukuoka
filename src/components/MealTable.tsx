export type MealEntry = {
  day: string;
  meal: string;
  theme: string;
  restaurant: string;
};

export function MealTable({ meals }: { meals: MealEntry[] }) {
  return (
    <div>
      {/* Mobile layout: stacked cards */}
      <div className="block sm:hidden divide-y divide-foreground/[0.06]">
        {meals.map((m, i) => (
          <div key={i} className="px-4 py-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sakura-100 text-sakura-500 border border-sakura-200">
                {m.day}
              </span>
              <span className="text-xs font-medium px-1.5 py-0.5 rounded bg-warm-50 text-amber-700 border border-warm-200">
                {m.meal}
              </span>
            </div>
            <div className="font-semibold text-sm mt-1">{m.theme}</div>
            <div className="text-xs text-foreground/50 mt-0.5">
              {m.restaurant}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop layout: grid table */}
      <div className="hidden sm:grid grid-cols-[auto_1fr_1fr_auto] text-sm">
        {meals.map((m, i) => (
          <div key={i} className="contents">
            <span className="px-4 py-2.5 border-b border-foreground/[0.04] font-medium text-foreground/50">
              {m.day}
            </span>
            <span className="px-3 py-2.5 border-b border-foreground/[0.04] text-foreground/60">
              {m.meal}
            </span>
            <span className="px-3 py-2.5 border-b border-foreground/[0.04] font-medium">
              {m.theme}
            </span>
            <span className="px-4 py-2.5 border-b border-foreground/[0.04] text-foreground/60">
              {m.restaurant}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
