import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X, ArrowUpRight } from 'lucide-react';
import { ARTIST_INFO } from '../data/tattoos';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Style', href: '#signature' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#090909]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80'
            : 'py-6 bg-gradient-to-b from-[#090909]/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand & Profile Avatar */}
          <a
            href="#hero"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A51F2B]"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-[#A51F2B] transition-colors duration-300">
              <img
                src={ARTIST_INFO.avatarUrl}
                alt="David Tattoo Artist profile"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display tracking-[0.2em] text-sm sm:text-base font-semibold text-[#F4F0E8] group-hover:text-white transition-colors">
                DAVID
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#8C8C8C] uppercase font-sans -mt-0.5">
                TATTOO ARTIST
              </span>
            </div>
          </a>

          {/* Center Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-sans transition-colors relative py-1 ${
                    isActive ? 'text-[#F4F0E8] font-medium' : 'text-[#8C8C8C] hover:text-[#F4F0E8]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A51F2B]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side: Instagram & Booking CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="David on Instagram (@davink.tatto0)"
              className="p-2 text-[#8C8C8C] hover:text-[#F4F0E8] hover:bg-white/5 rounded-full transition-colors"
              title="@davink.tatto0 on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenBooking}
              className="relative group px-5 py-2.5 bg-[#A51F2B] hover:bg-[#BF2634] text-white text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 rounded-none shadow-lg shadow-[#A51F2B]/20 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Session
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 bg-[#A51F2B] text-white text-[11px] uppercase tracking-[0.15em] font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F4F0E8] hover:bg-white/5 rounded-sm focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090909]/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-6 border-b border-white/10">
              <img
                src={ARTIST_INFO.avatarUrl}
                alt="David"
                className="w-12 h-12 rounded-full border border-white/20 object-cover"
              />
              <div>
                <p className="font-display tracking-[0.2em] text-lg font-semibold text-[#F4F0E8]">
                  DAVID
                </p>
                <p className="text-xs tracking-[0.2em] text-[#8C8C8C] uppercase">
                  TATTOO ARTIST
                </p>
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-display uppercase tracking-[0.25em] text-[#8C8C8C] hover:text-[#F4F0E8] py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C8C8C] hover:text-white py-2"
            >
              <Instagram className="w-4 h-4" />
              <span>@davink.tatto0 on Instagram</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-[#A51F2B] text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2"
            >
              <span>Book Your Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
