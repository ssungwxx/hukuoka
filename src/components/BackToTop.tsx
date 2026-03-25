'use client';

import { useState, useEffect, useCallback } from 'react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-4 z-50 w-10 h-10 rounded-full bg-sakura-400 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-sakura-500 active:scale-95 ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label="맨 위로 이동"
    >
      <span className="text-lg font-bold leading-none" aria-hidden="true">
        ↑
      </span>
    </button>
  );
}
