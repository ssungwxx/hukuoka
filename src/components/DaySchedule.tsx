"use client";

import { useState } from "react";
import { DayMap } from "./DayMap";

export type ScheduleItem = {
  time: string;
  emoji: string;
  text: string;
  detail?: string;
  cost?: string;
  location?: { lat: number; lng: number };
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
  defaultOpen = false,
}: {
  day: number;
  date: string;
  title: string;
  items: ScheduleItem[];
  note?: string;
  transportCost?: string;
  mapUrl?: string;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06] overflow-hidden">
      {/* Clickable header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-4 sm:px-5 py-4 border-b border-foreground/[0.06] cursor-pointer hover:bg-foreground/[0.04] active:bg-foreground/[0.06] transition-colors min-h-[48px] text-left"
      >
        <div className="flex items-start gap-2">
          {/* Chevron + Day badge + Title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <span
              className="text-foreground/40 text-xs shrink-0 transition-transform duration-300 ease-in-out"
              style={{
                display: "inline-block",
                transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              ▶
            </span>
            <span className="w-8 h-8 rounded-full bg-sakura-400 text-white text-sm font-bold flex items-center justify-center shrink-0">
              {day}
            </span>
            <div className="min-w-0">
              <div className="text-sm text-foreground/50">{date}</div>
              <div className="font-semibold">{title}</div>
            </div>
          </div>
          {/* Badges - wrap on small screens */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 shrink-0 justify-end max-w-[45%] sm:max-w-none">
            {transportCost && (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-sky-50 text-sky-600 dark:text-sky-400 border border-sky-200 whitespace-nowrap">
                교통비 {transportCost}
              </span>
            )}
            {mapUrl && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 hover:bg-emerald-100 transition-colors inline-block whitespace-nowrap"
                >
                  🗺️ 동선 보기
                </a>
              </span>
            )}
          </div>
        </div>
      </button>

      {/* Collapsible content */}
      <div
        className="transition-[grid-template-rows] duration-300 ease-in-out grid"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 py-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 sm:gap-3 py-2.5 border-b border-foreground/[0.04] last:border-0"
              >
                <span className="text-sm font-mono text-foreground/40 w-12 shrink-0 pt-0.5">
                  {item.time}
                </span>
                <span className="text-lg leading-none">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm">{item.text}</span>
                    {item.cost && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-warm-50 text-amber-700 dark:text-amber-400 border border-warm-200 shrink-0 whitespace-nowrap">
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
                          className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded bg-orange-50 text-orange-600 dark:text-orange-400 border border-orange-200 hover:bg-orange-100 transition-colors"
                        >
                          食べログ {item.restaurant.tabelog.rating}
                        </a>
                      )}
                      {item.restaurant.google && (
                        <a
                          href={item.restaurant.google.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 dark:text-blue-400 border border-blue-200 hover:bg-blue-100 transition-colors"
                        >
                          Google {item.restaurant.google.rating}
                        </a>
                      )}
                    </div>
                  )}
                  {item.detail && (
                    <p className="text-xs text-foreground/40 mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Embedded map */}
          <div className="px-4 sm:px-5 pb-3">
            <DayMap items={items} />
          </div>
          {note && (
            <div className="px-4 sm:px-5 py-3 bg-warm-50 text-sm text-amber-700 dark:text-amber-400 border-t border-warm-200">
              {note}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
