import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface SignatureArtworkProps {
  onOpenBooking: () => void;
}

export const SignatureArtwork: React.FC<SignatureArtworkProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="signature"
      className="relative min-h-[90vh] py-24 sm:py-32 bg-[#090909] text-[#F4F0E8] overflow-hidden flex items-center justify-center border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#A51F2B] font-medium block mb-2">
              SIGNATURE DISCIPLINE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F0E8]">
              BLACKWORK & ANATOMICAL HARMONY
            </h2>
          </div>
          <p className="font-editorial text-lg text-[#8C8C8C] max-w-md italic leading-relaxed">
            Every contour of the human body has its own architectural rhythm. A tattoo shouldn't merely sit on skin — it must become one with it.
          </p>
        </div>

        {/* Cinematic Framed Masterpiece Container */}
        <div className="relative group overflow-hidden border border-white/10 bg-[#141414]">
          {/* Main Visual Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <motion.img
              initial={{ scale: 1.08, opacity: 0.8 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="/david_original/tattoo-01.jpg"
              alt="David - Original Blackwork Masterpiece"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Dark Vignette & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]/40 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/60 via-transparent to-[#090909]/60 opacity-80" />
          </div>

          {/* Overlay Typography & Details */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#8C8C8C] block mb-1">
                STUDIO ARCHIVE · PIECE NO. 08
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F0E8] mb-2">
                MONOLITHIC INK DENSITY
              </h3>
              <p className="text-xs sm:text-sm text-[#8C8C8C] leading-relaxed">
                Hand-formulated pigment ratios calibrated for longevity and deep saturation without bleed. Formed specifically along tension lines for natural flex.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="self-start sm:self-auto px-6 py-3 bg-[#A51F2B] hover:bg-[#BF2634] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center gap-2 group-hover:shadow-lg group-hover:shadow-[#A51F2B]/30"
            >
              <span>Consult on this style</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Core Artistic Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/5">
          <div>
            <span className="text-xs font-mono text-[#A51F2B] tracking-wider block mb-2">01 / PERMANENCE</span>
            <h4 className="font-display text-lg text-[#F4F0E8] mb-2 font-semibold">Intentional Saturation</h4>
            <p className="text-xs text-[#8C8C8C] leading-relaxed">
              Every needle stroke is deposited at precise epidermal depth to avoid blowout while preserving razor-sharp lines for decades.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-[#A51F2B] tracking-wider block mb-2">02 / COMPOSITION</span>
            <h4 className="font-display text-lg text-[#F4F0E8] mb-2 font-semibold">Custom Anatomical Mapping</h4>
            <p className="text-xs text-[#8C8C8C] leading-relaxed">
              Designs are freehand stenciled or custom fitted to accentuate your muscle movement, posture, and natural skeletal balance.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-[#A51F2B] tracking-wider block mb-2">03 / EXPERIENCE</span>
            <h4 className="font-display text-lg text-[#F4F0E8] mb-2 font-semibold">Private Studio Sessions</h4>
            <p className="text-xs text-[#8C8C8C] leading-relaxed">
              Uninterrupted, private one-on-one appointments without distraction. Clean, quiet, and completely focused on your craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
