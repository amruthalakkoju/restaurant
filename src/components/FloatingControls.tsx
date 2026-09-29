import React, { useState, useEffect } from 'react';
import { ArrowUp, Calendar } from 'lucide-react';

interface FloatingControlsProps {
  onOpenReservation: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenReservation }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Subtle Scroll Progress Bar at very top */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#d4af37] via-[#ffd166] to-[#d4af37] transition-all duration-150 shadow-[0_0_8px_#d4af37]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Floating Action Controls (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Floating Reserve Button */}
        <button
          onClick={onOpenReservation}
          className="pointer-events-auto group inline-flex items-center gap-2.5 px-4 py-3 bg-[#d4af37] hover:bg-[#e2c275] active:bg-[#b8860b] text-[#0c0c0f] font-semibold text-xs uppercase tracking-[0.15em] rounded-sm shadow-xl shadow-black/80 hover:shadow-[#d4af37]/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4af37]"
          aria-label="Reserve a Table"
        >
          <Calendar className="w-4 h-4 text-[#0c0c0f]" />
          <span className="hidden sm:inline">Reserve a Table</span>
        </button>

        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3 bg-[#161622]/90 hover:bg-[#252536] text-[#ded8c8] hover:text-[#d4af37] border border-[#d4af37]/30 rounded-sm shadow-lg backdrop-blur-md transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37] animate-fadeIn"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
};
