import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Instagram, Facebook, Youtube } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim() || !inquiryMessage.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0c0c0f] border-t border-[#d4af37]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-medium">
              Get In Touch
            </span>
            <span className="w-8 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f3eb] font-normal tracking-wide mb-4">
            Let's Make Your Evening Special
          </h2>
          <p className="text-sm sm:text-base text-[#a9a5b3] font-light max-w-xl mx-auto">
            Whether planning an intimate anniversary, a family celebration, or a curated multi-course banquet, our guest relations team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Quick Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone */}
            <div className="p-6 bg-[#12121a] border border-white/5 hover:border-[#d4af37]/30 rounded-sm transition-colors flex items-center gap-5">
              <div className="w-12 h-12 rounded-sm bg-[#1a1a24] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#a9a5b3] block">Phone</span>
                <a
                  href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="font-serif text-xl text-[#f6f3eb] hover:text-[#d4af37] transition-colors"
                >
                  {RESTAURANT_INFO.contact.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 bg-[#12121a] border border-white/5 hover:border-[#d4af37]/30 rounded-sm transition-colors flex items-center gap-5">
              <div className="w-12 h-12 rounded-sm bg-[#1a1a24] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#a9a5b3] block">Email</span>
                <a
                  href={`mailto:${RESTAURANT_INFO.contact.email}`}
                  className="font-serif text-lg text-[#f6f3eb] hover:text-[#d4af37] transition-colors"
                >
                  {RESTAURANT_INFO.contact.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 bg-[#12121a] border border-white/5 hover:border-[#d4af37]/30 rounded-sm transition-colors flex items-center gap-5">
              <div className="w-12 h-12 rounded-sm bg-[#1a1a24] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#a9a5b3] block">Location</span>
                <span className="font-serif text-lg text-[#f6f3eb]">
                  Beach Road, Visakhapatnam
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 bg-[#12121a] border border-white/5 hover:border-[#d4af37]/30 rounded-sm transition-colors flex items-center gap-5">
              <div className="w-12 h-12 rounded-sm bg-[#1a1a24] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#a9a5b3] block">Opening Hours</span>
                <span className="font-serif text-lg text-[#f6f3eb]">
                  12 PM – 11:30 PM
                </span>
              </div>
            </div>

            {/* Social Icons Strip */}
            <div className="p-6 bg-[#12121a] border border-white/5 rounded-sm flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#a9a5b3]">Follow Our Journey</span>
              <div className="flex items-center gap-3">
                <a
                  href={RESTAURANT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-sm bg-[#1a1a26] border border-white/10 hover:border-[#d4af37] text-[#ded8c8] hover:text-[#d4af37] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={RESTAURANT_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-sm bg-[#1a1a26] border border-white/10 hover:border-[#d4af37] text-[#ded8c8] hover:text-[#d4af37] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={RESTAURANT_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-sm bg-[#1a1a26] border border-white/10 hover:border-[#d4af37] text-[#ded8c8] hover:text-[#d4af37] flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-[#13131c] border border-white/5 p-8 sm:p-10 rounded-sm shadow-xl">
            <h3 className="font-serif text-2xl text-[#f6f3eb] mb-2">Send a Message</h3>
            <p className="text-xs text-[#a9a5b3] mb-6">
              Inquire about special events, custom tasting menus, or dietary accommodations.
            </p>

            {submitted ? (
              <div className="py-12 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#d4af37] mx-auto mb-3" />
                <h4 className="font-serif text-xl text-[#f6f3eb] mb-2">Thank you for reaching out</h4>
                <p className="text-xs text-[#ded8c8]">
                  Our guest relations team has received your note and will reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#a9a5b3] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Ramesh Varma"
                      className="w-full px-4 py-2.5 text-xs text-[#f6f3eb] bg-[#1a1a26] border border-white/10 rounded-sm focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#a9a5b3] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      placeholder="ramesh@example.com"
                      className="w-full px-4 py-2.5 text-xs text-[#f6f3eb] bg-[#1a1a26] border border-white/10 rounded-sm focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#a9a5b3] mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Tell us how we can assist you..."
                    className="w-full px-4 py-2.5 text-xs text-[#f6f3eb] bg-[#1a1a26] border border-white/10 rounded-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0c0c0f] bg-[#d4af37] hover:bg-[#e2c275] rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
