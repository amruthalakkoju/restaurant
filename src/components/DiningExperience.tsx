import React from 'react';
import { DINING_EXPERIENCE_FEATURES } from '../data/restaurantData';
import { ExperienceIcon } from './VectorVisuals';

export const DiningExperience: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0c0c0f] border-t border-[#d4af37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
              The AURA Standard
            </span>
            <span className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f3eb] font-normal tracking-wide mb-4">
            More Than a Meal
          </h2>
          <p className="text-sm sm:text-base text-[#a9a5b3] font-light max-w-xl mx-auto">
            Every dining detail is intentionally orchestrated to immerse your senses in India’s timeless hospitality and modern grandeur.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DINING_EXPERIENCE_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#12121a] border border-white/5 hover:border-[#d4af37]/40 rounded-sm transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#181824] border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:border-[#d4af37] group-hover:scale-105 transition-all">
                <ExperienceIcon iconType={feat.iconType} size={36} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#f6f3eb] group-hover:text-[#d4af37] transition-colors mb-3">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#ded8c8] font-light leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
