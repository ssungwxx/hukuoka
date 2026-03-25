'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface NavItem {
  id: string;
  icon: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'travel', icon: '✈️', label: '교통' },
  { id: 'schedule', icon: '📅', label: '일정' },
  { id: 'budget', icon: '💰', label: '예산' },
  { id: 'checklist', icon: '✅', label: '준비' },
];

export function BottomNav() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleScroll = useCallback(() => {
    // Show the nav only after scrolling past the hero area (~200px)
    setIsVisible(window.scrollY > 200);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // All section IDs we want to track (not just those in the nav)
    const allSectionIds = [
      'travel',
      'schedule',
      'budget',
      'checklist',
    ];

    // Map each section ID to its corresponding nav item ID (if any)
    const sectionToNav: Record<string, string> = {
      travel: 'travel',
      schedule: 'schedule',
      budget: 'budget',
      checklist: 'checklist',
    };

    const visibleSections = new Map<string, IntersectionObserverEntry>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Find the topmost visible section
        let topSection = '';
        let topY = Infinity;
        visibleSections.forEach((entry, id) => {
          const rect = entry.boundingClientRect;
          if (rect.top < topY) {
            topY = rect.top;
            topSection = id;
          }
        });

        if (topSection) {
          setActiveSection(sectionToNav[topSection] || topSection);
        }
      },
      {
        rootMargin: '-10% 0px -60% 0px',
        threshold: 0,
      }
    );

    allSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-t border-foreground/10 transition-all duration-300 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-center justify-around h-[60px] max-w-3xl mx-auto px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-1 transition-colors duration-200 ${
                isActive ? 'text-sakura-400' : 'text-foreground/50'
              }`}
              aria-label={item.label}
            >
              <span className="text-lg leading-none">{item.icon}</span>
              <span className="text-[10px] font-medium leading-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
