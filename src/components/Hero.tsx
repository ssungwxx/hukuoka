"use client";

import { useState, useEffect } from "react";

function getDdayInfo(tripStart: Date, tripEnd: Date): {
  label: string;
  variant: "before" | "during" | "after";
} {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(
    tripStart.getFullYear(),
    tripStart.getMonth(),
    tripStart.getDate()
  );
  const end = new Date(
    tripEnd.getFullYear(),
    tripEnd.getMonth(),
    tripEnd.getDate()
  );

  if (today < start) {
    const diff = Math.ceil(
      (start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    return { label: `D-${diff}`, variant: "before" };
  } else if (today <= end) {
    const dayNum =
      Math.floor(
        (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      ) + 1;
    return { label: `여행 ${dayNum}일차 🎉`, variant: "during" };
  } else {
    return { label: "추억 만들기 완료 ✨", variant: "after" };
  }
}

const TRIP_START = new Date(2026, 2, 30); // 2026-03-30
const TRIP_END = new Date(2026, 3, 3); // 2026-04-03

const summaryItems = [
  "✈️ 대한항공·이스타항공",
  "🏨 더 라이블리 후쿠오카 하카타",
  "💰 ~¥65,500 (1인)",
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [ddayInfo, setDdayInfo] = useState<{
    label: string;
    variant: "before" | "during" | "after";
  } | null>(null);

  useEffect(() => {
    setDdayInfo(getDdayInfo(TRIP_START, TRIP_END));
    setMounted(true);
  }, []);

  const badgeClasses: Record<string, string> = {
    before: "bg-sakura-400 text-white",
    during: "bg-emerald-100 text-emerald-800 dark:text-emerald-400",
    after: "bg-warm-100 text-amber-800 dark:text-amber-400",
  };

  return (
    <header className="relative text-center pt-10 pb-8 mb-12 overflow-hidden">
      {/* Decorative background blurs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sakura-100/40 rounded-full blur-3xl" />
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-sakura-200/20 rounded-full blur-2xl" />
        <div className="absolute top-20 right-1/4 w-[150px] h-[150px] bg-warm-100/30 rounded-full blur-2xl" />
      </div>

      <div className="relative">
        {/* Floating cherry blossom */}
        <div className="text-6xl mb-4 inline-block animate-hero-float select-none">
          🌸
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2 text-foreground">
          후쿠오카 여행
        </h1>

        {/* Date subtitle */}
        <p className="text-lg text-foreground/60 mb-4">
          2026. 3. 30 (월) ~ 4. 3 (금) · 4박 5일
        </p>

        {/* D-day badge */}
        {mounted && ddayInfo && (
          <div className="mb-6">
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${badgeClasses[ddayInfo.variant]}`}
            >
              {ddayInfo.label}
            </span>
          </div>
        )}

        {/* Trip summary pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
          {summaryItems.map((item) => (
            <span
              key={item}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-foreground/[0.05] text-foreground/70 border border-foreground/[0.08]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom decorative gradient line */}
      <div className="relative mt-8">
        <div className="h-px bg-gradient-to-r from-transparent via-sakura-300/50 to-transparent" />
      </div>
    </header>
  );
}
