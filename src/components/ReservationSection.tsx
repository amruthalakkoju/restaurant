import React from 'react';
import { ReservationForm } from './ReservationForm';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, Clock, MapPin, Sparkles } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  return (
    <section id="reservation" className="py-24 sm:py-32 bg-[#0d0d14] border-t border-[#d4af37]/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
              Table Bookings
            </span>
            <span className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f3eb] font-normal tracking-wide mb-4">
            Reserve Your Table
          </h2>
          <p className="text-sm sm:text-base text-[#a9a5b3] font-light max-w-xl mx-auto">
            Experience our timeless recipes, intimate candlelit dining rooms, and panoramic Bay of Bengal views.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Card */}
          <div className="lg:col-span-8 bg-[#13131b] border border-[#d4af37]/30 p-6 sm:p-10 rounded-sm shadow-2xl">
            <ReservationForm />
          </div>

          {/* Policy & Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#13131b] border border-white/5 rounded-sm">
              <h3 className="font-serif text-lg text-[#f6f3eb] mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <span>Service Hours</span>
              </h3>
              <div className="space-y-3 text-xs text-[#ded8c8]">
                <div>
                  <div className="text-[#a9a5b3]">Lunch Service:</div>
                  <div className="font-medium text-[#f6f3eb]">12:00 PM – 3:30 PM</div>
                </div>
                <div>
                  <div className="text-[#a9a5b3]">Dinner Service:</div>
                  <div className="font-medium text-[#f6f3eb]">7:00 PM – 11:30 PM</div>
                </div>
                <div className="pt-2 border-t border-white/5 text-[#9d9aa7]">
                  Open 7 days a week.
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#13131b] border border-white/5 rounded-sm">
              <h3 className="font-serif text-lg text-[#f6f3eb] mb-3">
                Dining Etiquette
              </h3>
              <ul className="text-xs text-[#a9a5b3] space-y-2 list-disc list-inside">
                <li>Smart casual or traditional elegant attire recommended.</li>
                <li>Tables are reserved for 2 hours per seating.</li>
                <li>Valet parking available at the main entrance.</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-[#1a1824] to-[#12121a] border border-[#d4af37]/25 rounded-sm">
              <div className="text-xs uppercase tracking-wider text-[#d4af37] font-medium mb-1">
                Direct Concierge
              </div>
              <p className="text-xs text-[#a9a5b3] mb-3">
                For private banquets, corporate dining, or parties over 12 guests:
              </p>
              <a
                href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f6f3eb] hover:text-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>{RESTAURANT_INFO.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
