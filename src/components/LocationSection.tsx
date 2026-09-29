import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { VisakhapatnamMapVector } from './VectorVisuals';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Beach Road, Visakhapatnam, Andhra Pradesh 530001, India'
  )}`;

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#09090d] border-t border-[#d4af37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
              Find Us
            </span>
            <span className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f3eb] font-normal tracking-wide mb-4">
            AURA Indian Fine Dining
          </h2>
          <p className="text-sm sm:text-base text-[#a9a5b3] font-light max-w-xl mx-auto">
            Perched along the serene Beach Road promenade with dramatic views of the Bay of Bengal coastline.
          </p>
        </div>

        {/* Map & Location Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Interactive Vector Map Visual */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full aspect-[16/10] bg-[#0c0c10] border border-[#d4af37]/35 rounded-sm overflow-hidden shadow-2xl group">
              <VisakhapatnamMapVector className="w-full h-full transform transition-transform duration-700 group-hover:scale-[1.02]" />

              {/* Map Floating Badge */}
              <div className="absolute top-4 left-4 bg-[#0c0c0f]/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#d4af37]/30 text-xs">
                <span className="text-[#d4af37] font-semibold block">AURA Coastal Estate</span>
                <span className="text-[10px] text-[#ded8c8]">Beach Road Promenade</span>
              </div>

              {/* Map Action Button Overlay */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0c0c0f] bg-[#d4af37] hover:bg-[#e2c275] rounded-sm transition-colors shadow-lg cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Demo Notice */}
            <p className="text-[11px] text-[#7d7a8a] mt-3 italic text-center">
              Sample location presentation: Beach Road, Visakhapatnam, Andhra Pradesh — 530001
            </p>
          </div>

          {/* Right: Hours & Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 bg-[#13131b] border border-white/5 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#1a1a24] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#f6f3eb] mb-1">Location</h3>
                  <p className="text-xs sm:text-sm text-[#ded8c8] font-light leading-relaxed">
                    Beach Road, Visakhapatnam<br />
                    Andhra Pradesh — 530001, India
                  </p>
                  <p className="text-[11px] text-[#9d9aa7] mt-1">
                    Near RK Beach Promenade & Dolphin's Nose view
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 bg-[#13131b] border border-white/5 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#1a1a24] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-[#f6f3eb] mb-2">Opening Hours</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-[#ded8c8] font-light">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-[#a9a5b3]">Monday – Thursday:</span>
                      <span className="font-medium text-[#f6f3eb]">12:00 PM – 10:30 PM</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#a9a5b3]">Friday – Sunday:</span>
                      <span className="font-medium text-[#f6f3eb]">12:00 PM – 11:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Email Direct Reach */}
            <div className="p-6 bg-[#13131b] border border-white/5 rounded-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#1a1a24] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#a9a5b3]">Phone Reservation</div>
                  <a
                    href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s+/g, '')}`}
                    className="font-serif text-base sm:text-lg text-[#f6f3eb] hover:text-[#d4af37] transition-colors font-medium"
                  >
                    {RESTAURANT_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                <div className="w-10 h-10 rounded-sm bg-[#1a1a24] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#a9a5b3]">Email Inquiries</div>
                  <a
                    href={`mailto:${RESTAURANT_INFO.contact.email}`}
                    className="text-xs sm:text-sm text-[#f6f3eb] hover:text-[#d4af37] transition-colors"
                  >
                    {RESTAURANT_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
