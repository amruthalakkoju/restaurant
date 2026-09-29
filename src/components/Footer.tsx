import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, X } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const [policyModal, setPolicyModal] = useState<'privacy' | 'terms' | null>(null);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Chefs', href: '#chefs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#07070a] border-t border-[#d4af37]/20 pt-16 pb-12 text-[#a9a5b3] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-3xl font-semibold tracking-[0.25em] text-[#f6f3eb] block">
              AURA
            </span>
            <p className="font-serif italic text-base text-gold-gradient max-w-sm">
              “{RESTAURANT_INFO.tagline}”
            </p>
            <p className="text-xs text-[#898696] leading-relaxed max-w-sm font-light">
              An elevated Indian dining experience celebrating regional culinary traditions, heritage cooking vessels, and warm coastal hospitality.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0c0c0f] bg-[#d4af37] hover:bg-[#e2c275] rounded-sm transition-colors cursor-pointer"
              >
                Reserve a Table
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#ded8c8] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#ded8c8] mb-4">
              Service Hours
            </h4>
            <div className="space-y-2.5 leading-relaxed">
              <div>
                <span className="text-[#ebdca7] block">Mon – Thu</span>
                <span>12:00 PM – 10:30 PM</span>
              </div>
              <div>
                <span className="text-[#ebdca7] block">Fri – Sun</span>
                <span>12:00 PM – 11:30 PM</span>
              </div>
              <div className="pt-2 text-[11px] text-[#7d7a8a]">
                Kitchen closes 30 minutes prior to closing.
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[#ded8c8] mb-4">
              Visakhapatnam
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Beach Road, Visakhapatnam, Andhra Pradesh — 530001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#f6f3eb]">
                  {RESTAURANT_INFO.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.contact.email}`} className="hover:text-[#f6f3eb]">
                  {RESTAURANT_INFO.contact.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={RESTAURANT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#13131c] border border-white/10 hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={RESTAURANT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#13131c] border border-white/10 hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={RESTAURANT_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#13131c] border border-white/10 hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#787584]">
          <div>
            © 2026 AURA Indian Fine Dining. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setPolicyModal('privacy')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => setPolicyModal('terms')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Terms
            </button>
          </div>
        </div>
      </div>

      {/* Privacy / Terms Modal */}
      {policyModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setPolicyModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg bg-[#14141d] border border-[#d4af37]/40 rounded-sm p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPolicyModal(null)}
              className="absolute top-4 right-4 p-1.5 text-[#ded8c8] hover:text-[#d4af37] bg-[#1a1a24] rounded-sm transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="font-serif text-2xl text-[#f6f3eb] mb-4">
              {policyModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <div className="text-xs text-[#ded8c8] space-y-3 font-light leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {policyModal === 'privacy' ? (
                <>
                  <p>
                    AURA Indian Fine Dining is committed to protecting your personal information. When you make a table reservation or contact us, we collect your name, phone number, and email solely to manage and confirm your dining reservation.
                  </p>
                  <p>
                    We do not sell, rent, or distribute personal guest records to third-party marketing services. Data is secured and accessed only by our reservation concierge.
                  </p>
                  <p>
                    For inquiries regarding data privacy, reach out to hello@aurarestaurant.in.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Reservations are held for a maximum of 15 minutes past the scheduled booking time before being released to waiting guests.
                  </p>
                  <p>
                    The Chef’s Table multi-course tasting experience requires a minimum of 24 hours advance notice for cancellation or headcount changes.
                  </p>
                  <p>
                    Special dietary restrictions (Jain, vegan, nut allergies) should be specified at the time of reservation so our kitchen brigade may prepare customized courses.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-right">
              <button
                onClick={() => setPolicyModal(null)}
                className="px-4 py-2 text-xs uppercase tracking-wider text-[#0c0c0f] bg-[#d4af37] rounded-sm font-semibold hover:bg-[#e2c275]"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
