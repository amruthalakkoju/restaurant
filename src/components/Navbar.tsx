import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: (experience?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'story', 'specials', 'menu', 'chefs', 'chefs-table', 'gallery', 'location', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Specials', href: '#specials' },
    { label: 'Menu', href: '#menu' },
    { label: 'Chefs', href: '#chefs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0c0f]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
            aria-label="AURA Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.25em] text-[#f6f3eb] group-hover:text-[#d4af37] transition-colors duration-200">
              AURA
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37] ${
                    isActive ? 'text-[#d4af37]' : 'text-[#ded8c8] hover:text-[#f6f3eb]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#d4af37] transition-all" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary action button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenReservation()}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase text-[#0c0c0f] bg-[#d4af37] hover:bg-[#e2c275] active:bg-[#b8860b] transition-all duration-200 rounded-sm shadow-md hover:shadow-lg hover:shadow-[#d4af37]/20 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4af37] cursor-pointer"
            >
              Reserve a Table
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenReservation()}
              className="p-2 text-xs font-medium tracking-wider uppercase text-[#0c0c0f] bg-[#d4af37] rounded-sm mr-1"
              aria-label="Reserve"
            >
              <Calendar className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#ded8c8] hover:text-[#d4af37] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c0f]/98 backdrop-blur-xl border-b border-[#d4af37]/20 px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium tracking-[0.2em] uppercase py-2 border-b border-white/5 transition-colors ${
                    isActive ? 'text-[#d4af37]' : 'text-[#ded8c8] hover:text-[#f6f3eb]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 text-xs font-semibold tracking-[0.2em] uppercase text-[#0c0c0f] bg-[#d4af37] hover:bg-[#e2c275] transition-colors rounded-sm"
              >
                Reserve a Table
              </button>
              <div className="flex items-center justify-between text-xs text-[#9d9aa7] pt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  Visakhapatnam
                </span>
                <a
                  href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-[#f6f3eb]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  {RESTAURANT_INFO.contact.phoneFormatted}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
