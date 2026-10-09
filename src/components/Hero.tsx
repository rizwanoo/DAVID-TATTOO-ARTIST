import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Instagram } from 'lucide-react';
import { ARTIST_INFO } from '../data/tattoos';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#090909]"
    >
      {/* Background Video Layer with Fallback */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            src="/tattoo-hero.mp4"
            poster="/david_original/tattoo-02.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              videoLoaded ? 'opacity-85 scale-100 brightness-110 contrast-105' : 'opacity-40 scale-105'
            }`}
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center opacity-70 brightness-110"
            style={{ backgroundImage: `url('/david_original/tattoo-02.jpg')` }}
          />
        )}

        {/* Lighter Cinematic Overlays so video remains clear and bright */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]/30 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center justify-center min-h-screen">
        {/* Eyebrow / Artist Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 text-xs tracking-[0.35em] uppercase text-[#8C8C8C] mb-6"
        >
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="font-sans font-medium text-[#F4F0E8]/90">
            INDEPENDENT TATTOO ARTIST
          </span>
          <span className="w-8 h-[1px] bg-white/20" />
        </motion.div>

        {/* Main Headline revealed line by line */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F4F0E8] leading-[1.05]"
          >
            YOUR STORY.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F4F0E8] via-[#F4F0E8] to-[#8C8C8C]">
              ETCHED IN INK.
            </span>
          </motion.h1>
        </div>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="font-editorial text-lg sm:text-2xl text-[#8C8C8C] italic max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          “Art that lives on skin. Made with intention. Remembered forever.”
        </motion.p>

        {/* Actions / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-[#A51F2B] hover:bg-[#BF2634] text-white text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-xl shadow-[#A51F2B]/25 flex items-center justify-center gap-2 group"
          >
            <span>BOOK YOUR SESSION</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto px-6 py-4 border border-white/20 hover:border-white/50 text-[#F4F0E8] text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2"
          >
            <span>EXPLORE THE WORK</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Discreet Instagram Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8"
        >
          <a
            href={ARTIST_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#8C8C8C] hover:text-[#F4F0E8] tracking-widest uppercase transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-[#A51F2B]" />
            <span>@davink.tatto0</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8C8C8C]/60 text-[10px] tracking-[0.3em] uppercase pointer-events-none"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-[1px] h-6 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};
