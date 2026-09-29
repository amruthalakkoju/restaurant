import React, { useState } from 'react';
import { REVIEWS } from '../data/restaurantData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = REVIEWS[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#0c0c0f] border-t border-[#d4af37]/15 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
              Guest Testimonials
            </span>
            <span className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f3eb] font-normal tracking-wide mb-4">
            What Our Guests Say
          </h2>
          <p className="text-sm sm:text-base text-[#a9a5b3] font-light">
            Reflections from cherished diners and culinary critics who have shared an evening with us.
          </p>
        </div>

        {/* Featured Review Card Carousel */}
        <div className="relative bg-[#13131b] border border-[#d4af37]/30 rounded-sm p-8 sm:p-12 shadow-2xl">
          <div className="absolute top-6 left-8 text-[#d4af37]/20 pointer-events-none">
            <Quote className="w-16 h-16" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1.5 mb-6 text-[#d4af37]">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#d4af37]" />
              ))}
            </div>

            {/* Review Quote Body */}
            <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#f6f3eb] leading-relaxed max-w-3xl mb-8 text-balance">
              “{activeReview.text}”
            </blockquote>

            {/* Author Attribution */}
            <div className="flex flex-col items-center">
              <span className="font-serif text-lg font-semibold text-[#ebdca7]">
                {activeReview.author}
              </span>
              <span className="text-xs text-[#a9a5b3] tracking-wider uppercase mt-0.5">
                {activeReview.role} · Favorite: {activeReview.favoriteDish}
              </span>
              <span className="text-[11px] text-[#787585] mt-1 font-mono">
                Dined {activeReview.date}
              </span>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10 w-full justify-between">
              <div className="flex items-center gap-2">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-6 h-1 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex ? 'bg-[#d4af37] w-8' : 'bg-[#292837] hover:bg-[#434257]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="p-2.5 rounded-sm bg-[#1b1b26] hover:bg-[#252536] text-[#ded8c8] hover:text-[#d4af37] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-2.5 rounded-sm bg-[#1b1b26] hover:bg-[#252536] text-[#ded8c8] hover:text-[#d4af37] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Quick Review Strip for Larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {REVIEWS.map((rev, index) => (
            <div
              key={rev.id}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-sm border cursor-pointer transition-all ${
                index === currentIndex
                  ? 'bg-[#181822] border-[#d4af37]'
                  : 'bg-[#101016] border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex text-[#d4af37] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#d4af37]" />
                ))}
              </div>
              <p className="text-xs text-[#ded8c8] line-clamp-2 italic mb-2">
                "{rev.text}"
              </p>
              <div className="text-[11px] font-medium text-[#ebdca7]">
                — {rev.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
