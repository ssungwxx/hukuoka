"use client";

import { useState, useEffect, useCallback } from "react";

interface ChecklistItem {
  label: string;
  category?: string;
}

interface ChecklistSectionProps {
  items: ChecklistItem[];
}

const STORAGE_KEY = "hukuoka-checklist";

export function ChecklistSection({ items }: ChecklistSectionProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setChecked(JSON.parse(stored));
      }
    } catch {
      // Ignore parse errors
    }
    setMounted(true);
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
      } catch {
        // Ignore storage errors
      }
    }
  }, [checked, mounted]);

  const toggle = useCallback((label: string) => {
    setChecked((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }, []);

  // Group items by category
  const groups: { category: string; items: ChecklistItem[] }[] = [];
  const categoryMap = new Map<string, ChecklistItem[]>();

  for (const item of items) {
    const cat = item.category ?? "기타";
    if (!categoryMap.has(cat)) {
      categoryMap.set(cat, []);
    }
    categoryMap.get(cat)!.push(item);
  }

  for (const [category, groupItems] of categoryMap) {
    groups.push({ category, items: groupItems });
  }

  // Progress
  const totalCount = items.length;
  const checkedCount = items.filter((item) => checked[item.label]).length;
  const progressPercent =
    totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-2">
        <div className="flex-1 h-2 rounded-full bg-foreground/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full bg-sakura-400 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-sm font-semibold text-foreground/60 shrink-0 tabular-nums">
          {mounted ? checkedCount : 0}/{totalCount} 완료
        </span>
      </div>

      {/* Grouped items */}
      <div className="space-y-5">
        {groups.map((group) => (
          <div key={group.category}>
            {/* Category header */}
            <div className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-2 px-1">
              {group.category}
            </div>

            {/* Items */}
            <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06] overflow-hidden divide-y divide-foreground/[0.04]">
              {group.items.map((item) => {
                const isChecked = mounted && !!checked[item.label];
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => toggle(item.label)}
                    className="flex items-center gap-3 w-full text-left px-4 min-h-[44px] py-3 hover:bg-foreground/[0.02] active:bg-foreground/[0.04] transition-colors cursor-pointer"
                  >
                    {/* Checkbox */}
                    <span
                      className={`
                        flex items-center justify-center w-5 h-5 rounded-md border-2 shrink-0 transition-all duration-200
                        ${
                          isChecked
                            ? "bg-sakura-400 border-sakura-400 animate-check-pop"
                            : "border-foreground/20 bg-transparent"
                        }
                      `}
                    >
                      {isChecked && (
                        <svg
                          className="w-3 h-3 text-white"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2.5 6.5L5 9L9.5 3.5" />
                        </svg>
                      )}
                    </span>

                    {/* Label */}
                    <span
                      className={`text-sm transition-all duration-200 ${
                        isChecked
                          ? "line-through text-foreground/35"
                          : "text-foreground/80"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
