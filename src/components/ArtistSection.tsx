import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight, ShieldCheck, Sparkles, Feather } from 'lucide-react';
import { ARTIST_INFO } from '../data/tattoos';

interface ArtistSectionProps {
  onOpenBooking: () => void;
}

export const ArtistSection: React.FC<ArtistSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#090909] text-[#F4F0E8] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: David's Authentic Portrait */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer frame */}
              <div className="relative border border-white/20 p-2 sm:p-3 bg-[#141414] shadow-2xl">
                <div className="aspect-[4/5] relative overflow-hidden bg-[#090909] group">
                  <img
                    src={ARTIST_INFO.artistPortraitUrl}
                    alt="David Pérez - Tatuador Colombiano"
                    className="w-full h-full object-cover sm:object-contain group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  
                  {/* Subtle shine on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Subtitle Bar below the artwork */}
                <div className="mt-3 p-3 bg-[#090909] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={ARTIST_INFO.avatarUrl}
                      alt="David avatar"
                      className="w-10 h-10 rounded-full object-cover border border-[#A51F2B]"
                    />
                    <div>
                      <p className="font-display text-sm font-semibold tracking-wider text-[#F4F0E8]">
                        DAVID PÉREZ
                      </p>
                      <p className="text-[11px] text-[#8C8C8C]">
                        Tatuador Colombiano · Haines City, FL
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href={ARTIST_INFO.artistPortraitPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] tracking-wider uppercase text-[#F4F0E8] hover:text-[#A51F2B] flex items-center gap-1 transition-colors"
                  >
                    <span>Spotlight</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A51F2B]" />
                  </a>
                </div>
              </div>

              {/* Decorative accent border corner */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#A51F2B] pointer-events-none opacity-80" />
            </motion.div>
          </div>

          {/* Right Column: Editorial Text & Studio Standards */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#A51F2B] font-medium mb-3">
                <span>IDENTITY & ETHOS</span>
                <span className="w-8 h-[1px] bg-[#A51F2B]" />
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F0E8]">
                THE ARTIST BEHIND THE INK
              </h2>
            </div>

            {/* Core Artist Quote (exact requested copy) */}
            <blockquote className="font-editorial text-xl sm:text-2xl text-[#F4F0E8] italic border-l-2 border-[#A51F2B] pl-6 leading-relaxed font-light">
              “Every tattoo begins with an idea. The right lines, the right details, and the right intention turn that idea into something personal. Each piece is an opportunity to create art that becomes part of your story.”
            </blockquote>

            <div className="space-y-4 text-sm text-[#8C8C8C] leading-relaxed">
              <p>
                Working strictly with tailored appointments, David crafts bespoke skin artwork rooted in blackwork, fine-line precision, and anatomical integration. Each project begins with an intentional dialogue around meaning, placement, and visual longevity.
              </p>
              <p>
                Rather than rushing volume, every session is private and dedicated solely to your piece—ensuring undivided focus, uncompromising hygiene, and a calm, unhurried atmosphere from initial stencil to final dressing.
              </p>
            </div>

            {/* Studio Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
              <div className="p-4 bg-[#141414] border border-white/5">
                <ShieldCheck className="w-5 h-5 text-[#A51F2B] mb-2" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F4F0E8]">
                  Clinical Hygiene
                </h3>
                <p className="text-[11px] text-[#8C8C8C] mt-1 leading-normal">
                  Hospital-grade single-use needles, sterile barriers, and cruelty-free inks.
                </p>
              </div>

              <div className="p-4 bg-[#141414] border border-white/5">
                <Feather className="w-5 h-5 text-[#A51F2B] mb-2" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F4F0E8]">
                  Custom Stenciling
                </h3>
                <p className="text-[11px] text-[#8C8C8C] mt-1 leading-normal">
                  Fitted to your unique anatomical bone structure and muscle movement.
                </p>
              </div>

              <div className="p-4 bg-[#141414] border border-white/5">
                <Sparkles className="w-5 h-5 text-[#A51F2B] mb-2" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F4F0E8]">
                  1-on-1 Focus
                </h3>
                <p className="text-[11px] text-[#8C8C8C] mt-1 leading-normal">
                  Quiet, private atmosphere without walk-in distractions.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-[#A51F2B] hover:bg-[#BF2634] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center gap-2"
              >
                <span>Initiate A Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-white/15 hover:border-white/40 text-[#8C8C8C] hover:text-[#F4F0E8] text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5 text-[#A51F2B]" />
                <span>Follow On Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
