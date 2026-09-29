import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { GalleryVectorIllustration } from './VectorVisuals';
import { Maximize2, X, Eye } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Food' | 'Interiors' | 'Chefs' | 'Dining'>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories: Array<'All' | 'Food' | 'Interiors' | 'Chefs' | 'Dining'> = [
    'All',
    'Food',
    'Interiors',
    'Chefs',
    'Dining',
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#09090d] border-t border-[#d4af37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
              Visual Narrative
            </span>
            <span className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f3eb] font-normal tracking-wide mb-4">
            The AURA Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#a9a5b3] font-light max-w-xl mx-auto">
            Glimpses into our spaces, royal culinary artistry, tandoor hearths, and oceanfront dining atmosphere.
          </p>
        </div>

        {/* Category Filters (Functional buttons) */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase rounded-sm transition-all cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37] ${
                  isActive
                    ? 'bg-[#d4af37] text-[#0c0c0f] font-semibold shadow-md shadow-[#d4af37]/20'
                    : 'bg-[#14141c] text-[#a9a5b3] hover:text-[#f6f3eb] hover:bg-[#1c1c28] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative aspect-[4/3] bg-gradient-to-b from-[#151520] to-[#0c0c10] border border-[#d4af37]/20 hover:border-[#d4af37]/70 rounded-sm overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Vector Artwork Scene */}
              <div className="w-full h-full p-2 transform transition-transform duration-500 group-hover:scale-105">
                <GalleryVectorIllustration vectorId={item.vectorId} className="w-full h-full" />
              </div>

              {/* Hover Dark Glass Overlay with Info */}
              <div className="absolute inset-0 bg-[#0c0c0f]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between backdrop-blur-[2px]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#ebdca7] bg-[#1a1a24] px-2 py-0.5 rounded-sm border border-[#d4af37]/30">
                    {item.tag}
                  </span>
                  <Maximize2 className="w-4 h-4 text-[#d4af37]" />
                </div>

                <div>
                  <h3 className="font-serif text-lg text-[#f6f3eb] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#ded8c8] font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveLightboxItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
        >
          <div
            className="relative w-full max-w-3xl bg-[#12121a] border border-[#d4af37]/40 rounded-sm overflow-hidden shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 p-2 text-[#ded8c8] hover:text-[#d4af37] bg-[#1a1a24] rounded-sm transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Visual Area */}
            <div className="relative aspect-[16/9] w-full bg-gradient-to-b from-[#181824] to-[#0c0c10] border border-[#d4af37]/20 rounded-sm p-6 mb-6 flex items-center justify-center">
              <GalleryVectorIllustration
                vectorId={activeLightboxItem.vectorId}
                className="w-full h-full max-h-[340px]"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block mb-1">
                  {activeLightboxItem.category} · {activeLightboxItem.tag}
                </span>
                <h3 className="font-serif text-2xl text-[#f6f3eb]">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#ded8c8] mt-1 font-light max-w-xl">
                  {activeLightboxItem.description}
                </p>
              </div>

              <button
                onClick={() => setActiveLightboxItem(null)}
                className="self-start sm:self-center px-5 py-2 text-xs font-medium uppercase tracking-wider text-[#0c0c0f] bg-[#d4af37] hover:bg-[#e2c275] rounded-sm transition-colors cursor-pointer shrink-0"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
