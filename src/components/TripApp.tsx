"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { DayMap } from "./DayMap";
import type { ScheduleItem } from "./DaySchedule";
import { BudgetSection } from "./BudgetSection";
import { ChecklistSection } from "./ChecklistSection";
import { TransportInfo } from "./TransportInfo";
import type { TransportRoute } from "./TransportInfo";
import { MealTable } from "./MealTable";
import type { MealEntry } from "./MealTable";
import { FlightCard } from "./FlightCard";

/* ═══════════════════════════════════════════
   Types
   ═══════════════════════════════════════════ */

type TabId =
  | "overview"
  | "day-1"
  | "day-2"
  | "day-3"
  | "day-4"
  | "day-5"
  | "prep";

export interface DayData {
  day: number;
  date: string;
  title: string;
  items: ScheduleItem[];
  transportCost: string;
  mapUrl: string;
  note?: string;
}

export interface TripAppProps {
  days: DayData[];
  flights: {
    direction: string;
    airline: string;
    date: string;
    time: string;
    from: string;
    to: string;
    color: "sky" | "warm";
  }[];
  meals: MealEntry[];
  transportRoutes: TransportRoute[];
  budget: {
    total: { label: string; amount: string; detail: string };
    items: { label: string; amount: string; detail: string; icon: string }[];
  };
  checklistItems: { label: string; category: string }[];
  referenceLinks: { title: string; url: string }[];
  icCardInfo: string;
}

/* ═══════════════════════════════════════════
   Constants & Helpers
   ═══════════════════════════════════════════ */

const TRIP_START = new Date(2026, 2, 30);
const TRIP_END = new Date(2026, 3, 3);

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "전체" },
  { id: "day-1", label: "Day 1" },
  { id: "day-2", label: "Day 2" },
  { id: "day-3", label: "Day 3" },
  { id: "day-4", label: "Day 4" },
  { id: "day-5", label: "Day 5" },
  { id: "prep", label: "준비" },
];

const DAY_THEMES = [
  { gradient: "from-sakura-50 to-warm-50", border: "border-sakura-200/40" },
  { gradient: "from-emerald-50 to-sky-50", border: "border-emerald-200/40" },
  { gradient: "from-warm-50 to-sakura-50", border: "border-warm-200/40" },
  { gradient: "from-sky-50 to-emerald-50", border: "border-sky-200/40" },
  { gradient: "from-warm-50 to-sky-50", border: "border-warm-200/40" },
];

function getDdayInfo(): {
  label: string;
  variant: "before" | "during" | "after";
} {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(
    TRIP_START.getFullYear(),
    TRIP_START.getMonth(),
    TRIP_START.getDate(),
  );
  const end = new Date(
    TRIP_END.getFullYear(),
    TRIP_END.getMonth(),
    TRIP_END.getDate(),
  );

  if (today < start) {
    const diff = Math.ceil(
      (start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );
    return { label: `D-${diff}`, variant: "before" };
  }
  if (today <= end) {
    const dayNum =
      Math.floor(
        (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
      ) + 1;
    return { label: `여행 ${dayNum}일차 🎉`, variant: "during" };
  }
  return { label: "추억 완료 ✨", variant: "after" };
}

function getDefaultTab(): TabId {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(
    TRIP_START.getFullYear(),
    TRIP_START.getMonth(),
    TRIP_START.getDate(),
  );
  const end = new Date(
    TRIP_END.getFullYear(),
    TRIP_END.getMonth(),
    TRIP_END.getDate(),
  );

  if (today >= start && today <= end) {
    const dayNum =
      Math.floor(
        (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
      ) + 1;
    if (dayNum >= 1 && dayNum <= 5) return `day-${dayNum}` as TabId;
  }
  return "overview";
}

/* ═══════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════ */

export function TripApp(props: TripAppProps) {
  const {
    days,
    flights,
    meals,
    budget,
    checklistItems,
    transportRoutes,
    referenceLinks,
    icCardInfo,
  } = props;

  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [mounted, setMounted] = useState(false);
  const [ddayInfo, setDdayInfo] = useState<ReturnType<
    typeof getDdayInfo
  > | null>(null);

  useEffect(() => {
    setMounted(true);
    setDdayInfo(getDdayInfo());
    setActiveTab(getDefaultTab());
  }, []);

  const activeDayIndex = activeTab.startsWith("day-")
    ? parseInt(activeTab.split("-")[1]) - 1
    : -1;
  const activeDayData = activeDayIndex >= 0 ? days[activeDayIndex] : null;

  const handleTabChange = useCallback((id: TabId) => {
    setActiveTab(id);
    window.scrollTo({ top: 0 });
  }, []);

  const badgeClasses: Record<string, string> = {
    before: "bg-sakura-400 text-white",
    during: "bg-emerald-100 text-emerald-800 dark:text-emerald-400",
    after: "bg-warm-100 text-amber-800 dark:text-amber-400",
  };

  return (
    <>
      {/* ── Compact Hero ── */}
      <header className="max-w-3xl mx-auto px-4 pt-8 pb-3">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-1.5">
            <span className="text-3xl animate-hero-float select-none">🌸</span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              후쿠오카 여행
            </h1>
            {mounted && ddayInfo && (
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-full shadow-sm ${badgeClasses[ddayInfo.variant]}`}
              >
                {ddayInfo.label}
              </span>
            )}
          </div>
          <p className="text-sm text-foreground/50">
            2026. 3. 30 (월) ~ 4. 3 (금) · 4박 5일
          </p>
        </div>
      </header>

      {/* ── Sticky Tab Bar ── */}
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* ── Tab Content ── */}
      <div
        key={activeTab}
        className="max-w-3xl mx-auto px-4 py-6 pb-24 animate-tab-in"
      >
        {activeTab === "overview" && (
          <OverviewContent
            days={days}
            flights={flights}
            meals={meals}
            budget={budget}
            onDayClick={(day) => handleTabChange(`day-${day}` as TabId)}
          />
        )}
        {activeDayData && <DayContent day={activeDayData} />}
        {activeTab === "prep" && (
          <PrepContent
            checklistItems={checklistItems}
            transportRoutes={transportRoutes}
            referenceLinks={referenceLinks}
            icCardInfo={icCardInfo}
          />
        )}
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   Tab Bar — Sticky with sliding indicator
   ═══════════════════════════════════════════ */

function TabBar({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const el = tabRefs.current.get(activeTab);
    const container = scrollRef.current;
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = el.getBoundingClientRect();
      setIndicator({
        left: tabRect.left - containerRect.left + container.scrollLeft,
        width: tabRect.width,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
    const el = tabRefs.current.get(activeTab);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeTab, updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    <nav
      className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-foreground/[0.06]"
      role="tablist"
    >
      <div
        ref={scrollRef}
        className="relative overflow-x-auto scrollbar-hide max-w-3xl mx-auto"
      >
        <div className="flex min-w-max px-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => {
                if (el) tabRefs.current.set(tab.id, el);
              }}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "text-sakura-500"
                  : "text-foreground/40 hover:text-foreground/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Sliding indicator */}
        <div
          className="absolute bottom-0 h-0.5 bg-sakura-400 rounded-full transition-all duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════
   Overview Content
   ═══════════════════════════════════════════ */

function OverviewContent({
  days,
  flights,
  meals,
  budget,
  onDayClick,
}: {
  days: DayData[];
  flights: TripAppProps["flights"];
  meals: MealEntry[];
  budget: TripAppProps["budget"];
  onDayClick: (day: number) => void;
}) {
  return (
    <div className="space-y-8">
      {/* Flights */}
      <section>
        <SectionHead icon="✈️" title="항공편" />
        <div className="grid gap-3 sm:grid-cols-2">
          {flights.map((f, i) => (
            <FlightCard key={i} {...f} />
          ))}
        </div>
      </section>

      {/* Accommodation */}
      <div className="rounded-2xl border border-foreground/15 bg-foreground/[0.03] p-5 text-center">
        <span className="text-xl">🏨</span>
        <p className="font-medium mt-1">호텔 리솔 트리니티 하카타</p>
        <p className="text-xs text-foreground/60 mt-0.5">ホテルリソルトリニティ博多 · 中洲川端駅 도보 1분</p>
        <p className="text-xs text-foreground/40 mt-0.5">4박 (3/30~4/3) · 14F 전망 대욕장 · 피트니스</p>
      </div>

      {/* Day Cards */}
      <section>
        <SectionHead icon="📅" title="일정 한눈에 보기" />
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
          {days.map((day, i) => {
            const theme = DAY_THEMES[i];
            const uniqueEmojis = [
              ...new Set(day.items.map((item) => item.emoji)),
            ];
            const mealCount = day.items.filter(
              (item) => item.restaurant,
            ).length;
            return (
              <button
                key={day.day}
                onClick={() => onDayClick(day.day)}
                className={`text-left rounded-2xl bg-gradient-to-br ${theme.gradient} border ${theme.border} p-4 hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-sakura-400 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {day.day}
                  </span>
                  <span className="text-[11px] text-foreground/50 leading-tight">
                    {day.date}
                  </span>
                </div>
                <div className="font-semibold text-sm mb-2.5 leading-snug">
                  {day.title}
                </div>
                <div className="flex items-center gap-0.5 mb-2.5 text-sm leading-none">
                  {uniqueEmojis.slice(0, 5).map((e, j) => (
                    <span key={j}>{e}</span>
                  ))}
                  {uniqueEmojis.length > 5 && (
                    <span className="text-[10px] text-foreground/30 ml-0.5">
                      +{uniqueEmojis.length - 5}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-sky-50/80 text-sky-600 dark:text-sky-400 border border-sky-200/60">
                    교통 {day.transportCost}
                  </span>
                  {mealCount > 0 && (
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-sakura-50/80 text-sakura-500 border border-sakura-200/60">
                      맛집 {mealCount}곳
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Budget */}
      <section>
        <SectionHead icon="💰" title="예산 요약 (1인 기준)" />
        <BudgetSection total={budget.total} items={budget.items} />
      </section>

      {/* Meal Plan */}
      <section>
        <SectionHead icon="🍽️" title="식사 테마 분배" />
        <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06] overflow-hidden">
          <MealTable meals={meals} />
        </div>
        <p className="text-xs text-foreground/30 mt-2">
          * 9가지 먹거리 테마를 중복 없이 분배
        </p>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Day Content — Vertical Timeline
   ═══════════════════════════════════════════ */

function DayContent({ day }: { day: DayData }) {
  return (
    <div className="space-y-6">
      {/* Day Header */}
      <div className="flex items-start gap-3">
        <span className="w-12 h-12 rounded-2xl bg-sakura-400 text-white text-xl font-bold flex items-center justify-center shrink-0">
          {day.day}
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-sm text-foreground/50">{day.date}</div>
          <h2 className="text-xl font-bold leading-tight">{day.title}</h2>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-sky-50 text-sky-600 dark:text-sky-400 border border-sky-200">
          🚇 교통비 {day.transportCost}
        </span>
        {day.mapUrl && (
          <a
            href={day.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            🗺️ Google Maps 동선
          </a>
        )}
      </div>

      {/* Note (if exists) — top placement for visibility */}
      {day.note && (
        <div className="rounded-xl bg-warm-50 border border-warm-200/60 px-4 py-3 text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
          {day.note}
        </div>
      )}

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[59px] top-6 bottom-6 w-px bg-gradient-to-b from-sakura-300/60 via-sakura-200/40 to-sakura-100/20"
          aria-hidden="true"
        />

        <div>
          {day.items.map((item, i) => (
            <div key={i} className="relative flex items-start gap-3 py-3.5">
              {/* Time */}
              <span className="w-[48px] text-right text-xs font-mono text-foreground/40 pt-1 shrink-0">
                {item.time}
              </span>

              {/* Dot */}
              <div className="relative z-10 mt-1.5 shrink-0">
                <div
                  className={`rounded-full border-2 border-background ${
                    item.restaurant
                      ? "w-3.5 h-3.5 bg-sakura-400 shadow-sm shadow-sakura-200"
                      : "w-2.5 h-2.5 bg-sakura-300"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pb-0.5">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-medium leading-relaxed">
                    {item.emoji} {item.text}
                  </span>
                  {item.cost && (
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-warm-50 text-amber-700 dark:text-amber-400 border border-warm-200 shrink-0 whitespace-nowrap mt-0.5">
                      {item.cost}
                    </span>
                  )}
                </div>

                {item.detail && (
                  <p className="text-xs text-foreground/40 mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                )}

                {item.restaurant && (
                  <div className="mt-2 rounded-xl bg-sakura-50/60 border border-sakura-200/30 p-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.restaurant.signature && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sakura-100 text-sakura-600 border border-sakura-200">
                          🍽️ {item.restaurant.signature}
                        </span>
                      )}
                      {item.restaurant.tabelog && (
                        <a
                          href={item.restaurant.tabelog.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 dark:text-orange-400 border border-orange-200 hover:bg-orange-100 transition-colors"
                        >
                          食べログ {item.restaurant.tabelog.rating}
                        </a>
                      )}
                      {item.restaurant.google && (
                        <a
                          href={item.restaurant.google.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 dark:text-blue-400 border border-blue-200 hover:bg-blue-100 transition-colors"
                        >
                          Google Map
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <DayMap items={day.items} />
    </div>
  );
}

/* ═══════════════════════════════════════════
   Prep Content
   ═══════════════════════════════════════════ */

function PrepContent({
  checklistItems,
  transportRoutes,
  referenceLinks,
  icCardInfo,
}: {
  checklistItems: TripAppProps["checklistItems"];
  transportRoutes: TransportRoute[];
  referenceLinks: TripAppProps["referenceLinks"];
  icCardInfo: string;
}) {
  return (
    <div className="space-y-8">
      {/* Checklist */}
      <section>
        <SectionHead icon="✅" title="준비 체크리스트" />
        <ChecklistSection items={checklistItems} />
      </section>

      {/* IC Card & Transport */}
      <section>
        <SectionHead icon="🚇" title="교통 정보" />
        <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06] p-5 space-y-4">
          <div>
            <h3 className="font-semibold text-sm mb-2">IC 카드</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              {icCardInfo}
            </p>
          </div>
          <div className="border-t border-foreground/[0.06] pt-4">
            <h3 className="font-semibold text-sm mb-3">
              주요 구간 요금 (검증 완료)
            </h3>
            <TransportInfo rows={transportRoutes} />
          </div>
        </div>
      </section>

      {/* Reference Links */}
      <section>
        <SectionHead icon="🔗" title="참고 링크" />
        <div className="space-y-2">
          {referenceLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] px-4 py-3 hover:bg-foreground/[0.06] transition-colors"
            >
              <span className="font-medium text-sm">{link.title}</span>
              <span className="block text-xs text-foreground/30 truncate mt-0.5">
                {link.url}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Shared UI
   ═══════════════════════════════════════════ */

function SectionHead({ icon, title }: { icon: string; title: string }) {
  return (
    <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
      <span>{icon}</span>
      <span>{title}</span>
    </h2>
  );
}
