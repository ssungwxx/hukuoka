interface BudgetItem {
  label: string;
  amount: string;
  detail: string;
  icon?: string;
}

interface BudgetSectionProps {
  items: BudgetItem[];
  total: { label: string; amount: string; detail: string };
}

export function BudgetSection({ items, total }: BudgetSectionProps) {
  return (
    <div className="space-y-4">
      {/* Total card — visually distinct with sakura gradient */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sakura-100 via-sakura-50 to-warm-50 border border-sakura-200/60 p-6">
        {/* Subtle decorative circle */}
        <div
          className="absolute -top-6 -right-6 w-24 h-24 bg-sakura-200/30 rounded-full blur-xl"
          aria-hidden="true"
        />
        <div className="relative">
          <div className="text-sm font-medium text-sakura-500/80 mb-1">
            {total.label}
          </div>
          <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-1">
            {total.amount}
          </div>
          <div className="text-sm text-foreground/50">{total.detail}</div>
        </div>
      </div>

      {/* Individual budget items */}
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-3.5 rounded-xl bg-warm-50 border border-foreground/[0.06] p-4"
          >
            {/* Icon */}
            {item.icon && (
              <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">
                {item.icon}
              </span>
            )}

            {/* Label + Detail */}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-foreground/80">
                {item.label}
              </div>
              <div className="text-xs text-foreground/45 mt-0.5 leading-relaxed">
                {item.detail}
              </div>
            </div>

            {/* Amount */}
            <div className="text-base font-bold text-foreground shrink-0 ml-2">
              {item.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
