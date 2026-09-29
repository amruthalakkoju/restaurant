import React, { useState } from 'react';
import { CHEFS_TABLE_EXPERIENCE } from '../data/restaurantData';
import { Check, Sparkles, Utensils, Users, Wine, Calendar } from 'lucide-react';
import { GalleryVectorIllustration } from './VectorVisuals';

interface ChefsTableProps {
  onOpenReservation: (experience?: string) => void;
}

export const ChefsTable: React.FC<ChefsTableProps> = ({ onOpenReservation }) => {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <section id="chefs-table" className="py-24 sm:py-32 bg-[#09090d] border-t border-[#d4af37]/15 relative">
      {/* Background Lighting */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#d4af37]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual: Chef's Table Counter Vector Art */}
          <div className="lg:col-span-5 flex flex-col items-center order-2 lg:order-1">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-sm p-4 bg-gradient-to-b from-[#181822] to-[#0f0f15] border border-[#d4af37]/30 shadow-2xl flex items-center justify-center overflow-hidden">
              <GalleryVectorIllustration vectorId="gallery_chefs_table" className="w-full h-full" />
              <div className="absolute top-3 left-3 bg-[#0c0c0f]/80 px-3 py-1 rounded-sm border border-[#d4af37]/20 text-[10px] uppercase tracking-widest text-[#ebdca7]">
                Live Sommelier & Chef Counter
              </div>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-md mt-6">
              <div className="p-3.5 bg-[#14141c] border border-white/5 rounded-sm flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs text-[#ded8c8]">8 Guests Only</span>
              </div>
              <div className="p-3.5 bg-[#14141c] border border-white/5 rounded-sm flex items-center gap-2.5">
                <Utensils className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs text-[#ded8c8]">7-Course Journey</span>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Details */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
                Exclusive Gastronomy
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f3eb] font-normal tracking-wide mb-3">
              {CHEFS_TABLE_EXPERIENCE.title}
            </h2>

            <p className="text-sm uppercase tracking-[0.2em] text-[#ebdca7] mb-6">
              {CHEFS_TABLE_EXPERIENCE.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#ded8c8] font-light leading-relaxed mb-8 text-balance">
              {CHEFS_TABLE_EXPERIENCE.description}
            </p>

            {/* 5 Prominent Inclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {CHEFS_TABLE_EXPERIENCE.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#ded8c8]">
                  <span className="w-4 h-4 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/50 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#d4af37]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* 7-Course Preview Accordion */}
            <div className="mb-8 p-4 bg-[#14141d] border border-white/10 rounded-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-[#ebdca7] font-medium">
                  Tasting Menu Preview
                </span>
                <button
                  onClick={() => setShowFullMenu(!showFullMenu)}
                  className="text-xs uppercase tracking-wider text-[#d4af37] hover:underline cursor-pointer"
                >
                  {showFullMenu ? 'Hide Courses' : 'View All 7 Courses'}
                </button>
              </div>

              {showFullMenu ? (
                <div className="space-y-3 pt-3 border-t border-white/5 animate-fadeIn">
                  {CHEFS_TABLE_EXPERIENCE.courses.map((course, i) => (
                    <div key={i} className="text-xs">
                      <div className="text-[#d4af37] font-medium">{course.course}: {course.name}</div>
                      <div className="text-[#a9a5b3] text-[11px]">{course.description}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#a9a5b3] font-light">
                  Featuring Smoked Aam Panna Granita, Awadhi Galouti Mousse, Malabar Bay Lobster Broth, and Handi Dum Biryani.
                </p>
              )}
            </div>

            {/* Pricing & CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#d4af37] tabular-nums">
                    ₹{CHEFS_TABLE_EXPERIENCE.pricePerPerson.toLocaleString()}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#a9a5b3]">per person</span>
                </div>
                <p className="text-xs text-[#9d9aa7] mt-1 italic">
                  {CHEFS_TABLE_EXPERIENCE.note}
                </p>
              </div>

              <button
                onClick={() => onOpenReservation("The AURA Chef's Table (7-Course Tasting)")}
                className="px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0c0c0f] bg-[#d4af37] hover:bg-[#e2c275] transition-all rounded-sm shadow-lg shadow-[#d4af37]/20 whitespace-nowrap cursor-pointer"
              >
                Book Chef's Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
