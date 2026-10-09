import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Sparkles, Feather, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ARTIST_INFO } from '../data/tattoos';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      title: '100% Bespoke Original Art',
      subtitle: 'Never Duplicated or Stolen',
      description: 'David never copies Pinterest flashes or another artist’s custom tattoos. Every piece begins with direct consultation, custom sketching, and anatomical stenciling adapted to your muscle flow.',
      image: '/david_original/tattoo-01.jpg',
      tag: 'Custom Craft',
      icon: Feather,
    },
    {
      title: 'Award-Winning Technical Mastery',
      subtitle: '2nd Place Horror Tattoo Winner',
      description: 'Recognized for severe dark art, high-contrast chiaroscuro portraiture, and smooth grey washes that heal crisp and retain razor sharpness across decades.',
      image: '/david_original/tattoo-04.jpg',
      tag: '★ Award Winner',
      icon: Award,
    },
    {
      title: 'Hospital-Grade Clinical Hygiene',
      subtitle: 'Sterile & Single-Use Protocol',
      description: 'Strict adherence to medical-grade hygiene: sealed single-use cartridge needles, machine barriers, cross-contamination prevention, and medical skin prep.',
      image: '/david_original/david-process-video.jpg',
      tag: 'Sterile Studio',
      icon: ShieldCheck,
    },
    {
      title: 'Private 1-on-1 Studio Space',
      subtitle: 'Tranquil & Unhurried Atmosphere',
      description: 'Private studio appointments in Haines City, FL. You have David’s undivided artistic focus without the loud distractions, walk-ins, or rushed schedules of a street shop.',
      image: '/david_original/artist-david-portrait.jpg',
      tag: 'Private Session',
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 sm:py-32 bg-[#0c0c0c] text-[#F4F0E8] border-t border-b border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#A51F2B] font-medium mb-3">
              <span>STUDIO STANDARDS & PHILOSOPHY</span>
              <span className="w-8 h-[1px] bg-[#A51F2B]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F0E8]">
              WHY CHOOSE DAVID | TATTOO ARTIST
            </h2>
          </div>
          <p className="font-editorial text-lg text-[#8C8C8C] max-w-md italic leading-relaxed">
            “Skin is permanent. Choosing your artist means entrusting someone with your anatomy, your comfort, and your personal story.”
          </p>
        </div>

        {/* 4 Pillars Grid with Original Artwork Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-[#141414] border border-white/10 overflow-hidden flex flex-col sm:flex-row hover:border-white/20 transition-all duration-300"
              >
                {/* Image side */}
                <div className="sm:w-2/5 relative aspect-square sm:aspect-auto overflow-hidden bg-black shrink-0">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Tag */}
                  <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase font-mono px-2 py-0.5 bg-[#090909]/90 border border-white/15 text-white">
                    {pillar.tag}
                  </span>
                </div>

                {/* Content side */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-full bg-[#A51F2B]/10 border border-[#A51F2B]/30 flex items-center justify-center text-[#A51F2B]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#F4F0E8] group-hover:text-white transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] font-mono text-[#A51F2B] tracking-wider uppercase">
                        {pillar.subtitle}
                      </p>
                    </div>
                    <p className="text-xs text-[#8C8C8C] leading-relaxed pt-1">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-[#8C8C8C] uppercase tracking-widest">
                      Guaranteed Standard
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A51F2B]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed About Us & Studio Story Bar */}
        <div className="bg-[#141414] border border-white/10 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] tracking-[0.25em] text-[#A51F2B] uppercase font-mono">
                ABOUT DAVID PÉREZ · TATUADOR COLOMBIANO
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F0E8]">
                Bespoke Skin Art Crafted In Haines City, Florida
              </h3>
              <p className="text-xs sm:text-sm text-[#8C8C8C] leading-relaxed">
                David Pérez brings Colombian artistic heritage, anatomical insight, and disciplined blackwork execution to every tattoo. Based in Haines City, FL, David works exclusively by appointment to ensure every client receives unhurried creative dialogue, hospital-clean procedures, and custom stencils that age gracefully.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#F4F0E8]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A51F2B]" />
                  <span>Blackwork & Saturation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A51F2B]" />
                  <span>Fine Line & Botanicals</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A51F2B]" />
                  <span>Dark Realism & Chiaroscuro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A51F2B]" />
                  <span>Coverup Transformations</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center lg:border-l lg:border-white/10 lg:pl-8 space-y-4">
              <div className="text-left lg:text-right">
                <p className="text-xs text-[#8C8C8C] uppercase tracking-wider">
                  Private Studio Reservations
                </p>
                <p className="font-display text-lg font-bold text-white mt-0.5">
                  Limited Weekly Slots
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#A51F2B] hover:bg-[#BF2634] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-xl shadow-[#A51F2B]/20 flex items-center justify-center gap-2 group"
              >
                <span>Reserve Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
