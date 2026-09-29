import React from 'react';
import { CHEFS } from '../data/restaurantData';
import { ChefPortraitVector } from './VectorVisuals';
import { Award, Sparkles } from 'lucide-react';

export const ChefSection: React.FC = () => {
  return (
    <section id="chefs" className="py-24 sm:py-32 bg-[#09090d] border-t border-[#d4af37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
              Culinary Masters
            </span>
            <span className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f3eb] font-normal tracking-wide mb-4">
            Meet the Chefs Behind AURA
          </h2>
          <p className="text-sm sm:text-base text-[#a9a5b3] font-light max-w-xl mx-auto">
            Four masters bringing together regional heritage, time-honored royal kitchens, and modern culinary vision.
          </p>
        </div>

        {/* 4 Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CHEFS.map((chef) => (
            <div
              key={chef.id}
              className="group relative bg-[#12121a] border border-[#d4af37]/20 hover:border-[#d4af37]/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10"
            >
              {/* Minimalist Executive Vector Portrait Container */}
              <div className="relative aspect-[4/5] bg-gradient-to-b from-[#181822] to-[#0e0e14] overflow-hidden border-b border-white/5">
                <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                  <ChefPortraitVector chefId={chef.id} className="w-full h-full" />
                </div>

                {/* Subtle Experience Tag */}
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-[#ebdca7] bg-[#0c0c0f]/85 px-2.5 py-1 rounded-sm border border-[#d4af37]/25 backdrop-blur-sm">
                    {chef.experience}
                  </span>
                </div>
              </div>

              {/* Chef Editorial Profile */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#f6f3eb] group-hover:text-[#d4af37] transition-colors mb-1">
                    {chef.name}
                  </h3>
                  <div className="text-xs uppercase tracking-[0.12em] text-[#d4af37] font-medium mb-4">
                    {chef.title}
                  </div>
                  <p className="text-xs sm:text-sm text-[#ded8c8] font-light leading-relaxed mb-6">
                    {chef.bio}
                  </p>
                </div>

                {/* Specialty Pill and Signature Dish */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="text-[11px] text-[#9d9aa7]">
                    <span className="text-[#a9a5b3] uppercase tracking-wider block text-[10px] mb-0.5">Speciality:</span>
                    <span className="text-[#ebdca7]">{chef.specialty}</span>
                  </div>
                  <div className="text-[11px] text-[#9d9aa7]">
                    <span className="text-[#a9a5b3] uppercase tracking-wider block text-[10px] mb-0.5">Signature:</span>
                    <span className="italic text-[#f6f3eb]">{chef.signatureDish}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
