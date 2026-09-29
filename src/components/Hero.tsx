import React from 'react';
import { MapPin, ChevronDown, Sparkles } from 'lucide-react';
import { HeroCinematicBackdrop, RoyalBiryaniVector } from './VectorVisuals';

interface HeroProps {
  onOpenReservation: (experience?: string) => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-28 pb-10 text-center overflow-hidden"
    >
      {/* Bespoke Layered Cinematic Vector Backdrop */}
      <HeroCinematicBackdrop />

      {/* Decorative Top Accent Tagline */}
      <div className="relative z-10 pt-8 sm:pt-14 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle Location Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#16161f]/60 backdrop-blur-sm text-xs font-medium tracking-[0.2em] uppercase text-[#ebdca7] mb-8">
          <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Visakhapatnam, Andhra Pradesh</span>
        </div>

        {/* Primary Brand Identity */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-[0.22em] text-[#f6f3eb] uppercase font-light drop-shadow-2xl mb-4">
          AURA
        </h1>

        {/* Tagline */}
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gold-gradient italic font-normal tracking-wide max-w-3xl mx-auto mb-6 text-balance">
          Where Indian Flavours Meet Modern Elegance.
        </h2>

        {/* Supporting Editorial Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-[#ded8c8] max-w-2xl mx-auto leading-relaxed font-light mb-10 text-balance">
          An elevated Indian dining experience where timeless recipes, contemporary techniques, and warm hospitality come together.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase text-[#f6f3eb] bg-[#1a1924]/80 hover:bg-[#252433] border border-[#d4af37]/40 hover:border-[#d4af37] transition-all duration-200 rounded-sm shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            Explore Menu
          </button>
          <button
            onClick={() => onOpenReservation()}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#0c0c0f] bg-[#d4af37] hover:bg-[#e2c275] transition-all duration-200 rounded-sm shadow-lg shadow-[#d4af37]/15 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4af37]"
          >
            Reserve a Table
          </button>
        </div>
      </div>

      {/* Hero Visual Vignette (Minimalist Vector Art Feature) */}
      <div className="relative z-10 w-full max-w-md mx-auto my-6 opacity-90 pointer-events-none select-none">
        <div className="relative w-48 sm:w-56 h-36 sm:h-44 mx-auto">
          <RoyalBiryaniVector className="w-full h-full drop-shadow-[0_15px_30px_rgba(212,175,55,0.15)]" />
        </div>
        <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#ebdca7]/80">
          <span className="w-8 h-[1px] bg-[#d4af37]/40" />
          <span>Heritage Dum Cooking · Artisanal Spices</span>
          <span className="w-8 h-[1px] bg-[#d4af37]/40" />
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="relative z-10 pb-4">
        <a
          href="#story"
          className="group inline-flex flex-col items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#a9a5b3] hover:text-[#d4af37] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
          aria-label="Scroll to Our Story"
        >
          <span>Discover Our Story</span>
          <ChevronDown className="w-4 h-4 text-[#d4af37] animate-bounce" />
        </a>
      </div>
    </section>
  );
};
