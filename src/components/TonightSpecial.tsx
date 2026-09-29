import React, { useState } from 'react';
import { TONIGHT_SPECIAL } from '../data/restaurantData';
import { RoyalBiryaniVector, NonVegIcon } from './VectorVisuals';
import { Flame, Clock, Award } from 'lucide-react';

interface TonightSpecialProps {
  onOpenReservation: (experience?: string) => void;
}

export const TonightSpecial: React.FC<TonightSpecialProps> = ({ onOpenReservation }) => {
  const [servingsLeft] = useState(TONIGHT_SPECIAL.servingsLeft);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#111118] via-[#14121a] to-[#0c0c0f] border-y border-[#d4af37]/20 relative overflow-hidden">
      {/* Ambient Saffron Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4af37]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#161622]/90 border border-[#d4af37]/35 rounded-sm p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Highlight Art */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/3] bg-[#0c0c0f]/80 rounded-sm border border-[#d4af37]/20 p-4 flex items-center justify-center">
                <RoyalBiryaniVector className="w-full h-full" />
                <div className="absolute top-3 left-3 bg-[#0c0c0f]/90 px-2.5 py-1 rounded-sm border border-[#d4af37]/30 text-[10px] uppercase tracking-widest text-[#ebdca7] flex items-center gap-1.5">
                  <Flame className="w-3 h-3 text-[#f77f00]" />
                  <span>Dough Sealed Dum</span>
                </div>
              </div>
            </div>

            {/* Right: Dish & Limited Servings Details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Badge & Dietary status */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-[0.2em] bg-[#d4af37]/15 text-[#ebdca7] border border-[#d4af37]/40">
                  <Award className="w-3 h-3 text-[#d4af37]" />
                  {TONIGHT_SPECIAL.title}
                </span>
                <span className="text-xs uppercase tracking-wider text-red-400 font-semibold px-2 py-0.5 border border-red-500/30 bg-red-950/20 rounded-sm">
                  {TONIGHT_SPECIAL.badge}
                </span>
                <NonVegIcon size={16} />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f6f3eb] font-normal mb-3">
                {TONIGHT_SPECIAL.dishName}
              </h3>

              <p className="text-base sm:text-lg text-[#ded8c8] font-light leading-relaxed mb-4 text-balance">
                {TONIGHT_SPECIAL.description}
              </p>

              <p className="text-xs sm:text-sm text-[#a9a5b3] italic mb-6">
                {TONIGHT_SPECIAL.notes}
              </p>

              {/* Price & Real-time Serving availability meter */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#a9a5b3]">Tonight:</span>
                  <span className="font-serif text-3xl font-semibold text-[#d4af37] tabular-nums">
                    ₹{TONIGHT_SPECIAL.price}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xs font-medium text-[#ebdca7] flex items-center gap-1.5 justify-end">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{servingsLeft} portions remaining</span>
                    </div>
                    <div className="w-36 h-1.5 bg-[#252433] rounded-full mt-1 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#d4af37] to-[#e76f51] rounded-full transition-all duration-500"
                        style={{ width: `${(servingsLeft / 25) * 100}%` }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenReservation(`Tonight's Special: ${TONIGHT_SPECIAL.dishName}`)}
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#0c0c0f] bg-[#d4af37] hover:bg-[#e2c275] transition-colors rounded-sm shadow-md cursor-pointer whitespace-nowrap"
                  >
                    Reserve Tonight
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
