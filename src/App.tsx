import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureArtwork } from './components/SignatureArtwork';
import { Portfolio } from './components/Portfolio';
import { ArtistSection } from './components/ArtistSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [bookingStyle, setBookingStyle] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section for sticky navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'signature', 'about', 'why-choose-us', 'booking', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (style?: string) => {
    if (style) {
      setBookingStyle(style);
    }
    // Smooth scroll to booking section or open modal on small viewports
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] text-[#F4F0E8] relative selection:bg-[#A51F2B] selection:text-white">
      {/* Film grain atmospheric overlay */}
      <div className="fixed inset-0 grain-overlay z-30 pointer-events-none" />

      {/* Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
      />

      <main>
        {/* Cinematic Video Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Portfolio Gallery (Primary Attraction) */}
        <Portfolio
          onOpenBookingWithStyle={(style) => handleOpenBooking(style)}
        />

        {/* Signature Scroll Experience */}
        <SignatureArtwork onOpenBooking={() => handleOpenBooking()} />

        {/* Artist Introduction: The Artist Behind the Ink */}
        <ArtistSection onOpenBooking={() => handleOpenBooking()} />

        {/* Why Choose Us & Craftsmanship Philosophy */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive Booking Experience */}
        <BookingSection initialStyle={bookingStyle} />

        {/* Direct Contact & Inquiry Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Understated Footer */}
      <Footer onOpenPrivacy={() => setIsPrivacyModalOpen(true)} />

      {/* Booking Modal (if triggered in modal context) */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 overflow-y-auto">
          <div className="relative max-w-4xl w-full bg-[#141414] border border-white/10 shadow-2xl my-8">
            <BookingSection
              isModal
              initialStyle={bookingStyle}
              onCloseModal={() => setIsBookingModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Studio Hygiene & Booking Terms Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}
