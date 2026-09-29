import React from 'react';
import { STORY_DATA } from '../data/restaurantData';
import { HeritageSpiceDabbaVector } from './VectorVisuals';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-[#0d0d12] border-t border-[#d4af37]/15">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Subheading */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f3eb] font-normal tracking-wide mb-8 text-balance">
              {STORY_DATA.heading}
            </h2>

            <div className="space-y-6 text-[#ded8c8] text-base sm:text-lg leading-relaxed font-light">
              {STORY_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className="text-balance">
                  {p}
                </p>
              ))}
            </div>

            {/* Signature Founder / Executive Crest Mark */}
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-serif italic text-xl text-[#f6f3eb]">Amrutha Arun Kumar</span>
                <span className="text-xs tracking-[0.15em] uppercase text-[#a9a5b3]">
                  Culinary Director & Founder
                </span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div className="text-xs text-[#a9a5b3] tracking-wider uppercase">
                Beach Road · Visakhapatnam
              </div>
            </div>
          </div>

          {/* Right Column: Large Minimalist Vector Artwork & Statistics */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Decorative Vector Artwork Frame */}
            <div className="relative w-full max-w-md aspect-[4/3] rounded-sm p-4 bg-gradient-to-b from-[#171722] to-[#101017] border border-[#d4af37]/25 shadow-2xl shadow-black/80 flex items-center justify-center group overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#d4af37]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#d4af37]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#d4af37]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#d4af37]" />

              <HeritageSpiceDabbaVector className="w-full h-full transform transition-transform duration-500 group-hover:scale-105" />

              {/* Caption banner */}
              <div className="absolute bottom-3 left-4 right-4 text-center">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#ebdca7] bg-[#0c0c0f]/80 px-3 py-1 rounded-sm border border-[#d4af37]/20 backdrop-blur-sm">
                  Hand-Pounded Spices · Ancient Brass Heritage
                </span>
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 w-full max-w-md mt-6">
              {STORY_DATA.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#14141d]/80 border border-white/5 hover:border-[#d4af37]/30 transition-colors p-4 rounded-sm"
                >
                  <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#d4af37] tabular-nums mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#a9a5b3] tracking-wide leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
