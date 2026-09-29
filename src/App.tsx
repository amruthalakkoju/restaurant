/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { SignatureSpecials } from './components/SignatureSpecials';
import { TonightSpecial } from './components/TonightSpecial';
import { ChefsTable } from './components/ChefsTable';
import { MenuSection } from './components/MenuSection';
import { ChefSection } from './components/ChefSection';
import { DiningExperience } from './components/DiningExperience';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { FloatingControls } from './components/FloatingControls';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalExperience, setModalExperience] = useState<string>('');

  const handleOpenReservation = (experience?: string) => {
    setModalExperience(experience || '');
    setIsModalOpen(true);
  };

  const handleCloseReservation = () => {
    setIsModalOpen(false);
    setModalExperience('');
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0f] text-[#f6f3eb] font-sans selection:bg-[#d4af37]/30 selection:text-[#f6f3eb]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Page Flow */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenReservation={handleOpenReservation}
          onExploreMenu={handleExploreMenu}
        />

        {/* 3. Welcome / Our Story Section */}
        <OurStory />

        {/* 4. AURA Signature Specials */}
        <SignatureSpecials onOpenReservation={handleOpenReservation} />

        {/* 5. Tonight at AURA Special Highlight */}
        <TonightSpecial onOpenReservation={handleOpenReservation} />

        {/* 6. The AURA Chef's Table Experience */}
        <ChefsTable onOpenReservation={handleOpenReservation} />

        {/* 7. Full Interactive Menu Section */}
        <MenuSection onOpenReservation={handleOpenReservation} />

        {/* 8. Meet the Chefs Behind AURA */}
        <ChefSection />

        {/* 9. Dining Experience (More Than a Meal) */}
        <DiningExperience />

        {/* 10. Responsive Image/Vector Gallery */}
        <GallerySection />

        {/* 11. Customer Reviews Testimonials */}
        <ReviewsSection />

        {/* 12. Complete Reservation Form Section */}
        <ReservationSection />

        {/* 13. Location Section & Visakhapatnam Beach Road Map */}
        <LocationSection />

        {/* 14. Contact Section */}
        <ContactSection />
      </main>

      {/* 15. Luxury Dark Footer */}
      <Footer onOpenReservation={() => handleOpenReservation()} />

      {/* 16. Quick Reservation Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={handleCloseReservation}
        experience={modalExperience}
      />

      {/* 17. Floating Controls (Scroll Progress, Floating Reserve, Back to Top) */}
      <FloatingControls onOpenReservation={() => handleOpenReservation()} />
    </div>
  );
}
