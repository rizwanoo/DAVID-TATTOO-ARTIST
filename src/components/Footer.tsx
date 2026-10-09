import React, { useState } from 'react';
import { Instagram, ArrowUp, Shield } from 'lucide-react';
import { ARTIST_INFO } from '../data/tattoos';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090909] text-[#F4F0E8] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand & Avatar */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
              <img
                src={ARTIST_INFO.avatarUrl}
                alt="David Tattoo Artist"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div>
              <p className="font-display tracking-[0.2em] text-base font-semibold text-[#F4F0E8]">
                DAVID | TATTOO ARTIST
              </p>
              <p className="text-xs tracking-[0.25em] text-[#8C8C8C] uppercase -mt-0.5">
                INDEPENDENT BESPOKE SKIN ART
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs uppercase tracking-[0.2em]">
            <a href="#hero" className="text-[#8C8C8C] hover:text-[#F4F0E8] transition-colors">
              Home
            </a>
            <a href="#portfolio" className="text-[#8C8C8C] hover:text-[#F4F0E8] transition-colors">
              Portfolio
            </a>
            <a href="#signature" className="text-[#8C8C8C] hover:text-[#F4F0E8] transition-colors">
              Style
            </a>
            <a href="#about" className="text-[#8C8C8C] hover:text-[#F4F0E8] transition-colors">
              About
            </a>
            <a href="#contact" className="text-[#8C8C8C] hover:text-[#F4F0E8] transition-colors">
              Contact
            </a>
            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C8C8C] hover:text-[#A51F2B] transition-colors inline-flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@davink.tatto0</span>
            </a>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-[#8C8C8C] hover:text-[#F4F0E8] transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8C8C8C]">
          <p>© {currentYear} DAVID | TATTOO ARTIST. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#F4F0E8] transition-colors inline-flex items-center gap-1.5"
            >
              <Shield className="w-3 h-3 text-[#A51F2B]" />
              <span>Hygiene & Booking Policy</span>
            </button>
            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4F0E8] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
