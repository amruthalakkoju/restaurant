import React from 'react';
import { SIGNATURE_SPECIALS } from '../data/restaurantData';
import {
  VegIcon,
  NonVegIcon,
  RoyalBiryaniVector,
  PaneerTikkaVector,
  PrawnsVector,
  GaloutiKebabVector,
  VegetableStewVector,
  GulabAuraVector,
} from './VectorVisuals';
import { Sparkles, ArrowRight } from 'lucide-react';

interface SignatureSpecialsProps {
  onOpenReservation: (experience?: string) => void;
}

export const SignatureSpecials: React.FC<SignatureSpecialsProps> = ({ onOpenReservation }) => {
  const renderVector = (type: string) => {
    switch (type) {
      case 'biryani':
        return <RoyalBiryaniVector className="w-full h-full" />;
      case 'paneer_tikka':
        return <PaneerTikkaVector className="w-full h-full" />;
      case 'prawns':
        return <PrawnsVector className="w-full h-full" />;
      case 'galouti':
        return <GaloutiKebabVector className="w-full h-full" />;
      case 'vegetable_stew':
        return <VegetableStewVector className="w-full h-full" />;
      case 'gulab_aura':
        return <GulabAuraVector className="w-full h-full" />;
      default:
        return <RoyalBiryaniVector className="w-full h-full" />;
    }
  };

  return (
    <section id="specials" className="py-24 sm:py-32 bg-[#0c0c0f] relative overflow-hidden">
      {/* Background Mandala Watermark Graphic */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#d4af37]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
              Culinary Signatures
            </span>
            <span className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f3eb] font-normal tracking-wide mb-4">
            AURA Signature Specials
          </h2>
          <p className="text-sm sm:text-base text-[#a9a5b3] max-w-xl mx-auto font-light">
            Handcrafted creations honoring regional Indian royal kitchens, elevated with contemporary artistry.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SIGNATURE_SPECIALS.map((dish) => (
            <div
              key={dish.id}
              className="group relative flex flex-col bg-[#121218] border border-[#d4af37]/20 hover:border-[#d4af37]/60 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10"
            >
              {/* Card Vector Graphic Showcase */}
              <div className="relative aspect-[4/3] bg-gradient-to-b from-[#181824] to-[#0e0e13] p-4 flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                  {renderVector(dish.vectorType)}
                </div>

                {/* Dietary Status Indicator (Top Right) */}
                <div className="absolute top-3 right-3 bg-[#0c0c0f]/80 p-1.5 rounded-sm backdrop-blur-sm border border-white/10">
                  {dish.isVeg ? <VegIcon size={16} /> : <NonVegIcon size={16} />}
                </div>

                {/* Regional Origin Tag (Bottom Left) */}
                {dish.region && (
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] tracking-wider uppercase text-[#ebdca7] bg-[#0c0c0f]/85 px-2 py-0.5 rounded-sm border border-[#d4af37]/20">
                      {dish.region}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#f6f3eb] group-hover:text-[#d4af37] transition-colors">
                      {dish.name}
                    </h3>
                    <span className="font-serif text-lg font-semibold text-[#d4af37] tabular-nums whitespace-nowrap">
                      ₹{dish.price}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#ded8c8] leading-relaxed font-light mb-6">
                    {dish.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#9f9ba8]">
                    {dish.spiceLevel ? `${dish.spiceLevel} Spice` : 'Chef Recommendation'}
                  </span>
                  <button
                    onClick={() => onOpenReservation(`Experience ${dish.name}`)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#d4af37] hover:text-[#ebdca7] transition-colors font-medium cursor-pointer"
                  >
                    <span>Reserve to Taste</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
