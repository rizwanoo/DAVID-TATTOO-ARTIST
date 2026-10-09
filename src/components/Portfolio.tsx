import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Instagram, ArrowUpRight, Play } from 'lucide-react';
import { TATTOO_PORTFOLIO, ARTIST_INFO } from '../data/tattoos';
import { TattooCategory, TattooWork } from '../types';
import { LightboxModal } from './LightboxModal';
import { ProgressiveImage } from './ProgressiveImage';

interface PortfolioProps {
  onOpenBookingWithStyle: (styleName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenBookingWithStyle }) => {
  const [selectedCategory, setSelectedCategory] = useState<TattooCategory>('all');
  const [activeTattooIndex, setActiveTattooIndex] = useState<number | null>(null);

  const categories: { key: TattooCategory; label: string }[] = [
    { key: 'all', label: 'All Works' },
    { key: 'blackwork', label: 'Blackwork' },
    { key: 'fineline', label: 'Fine Line' },
    { key: 'realism', label: 'Realism' },
    { key: 'geometric', label: 'Geometric' },
    { key: 'ornamental', label: 'Ornamental' },
    { key: 'gothic', label: 'Gothic' },
  ];

  const filteredWorks =
    selectedCategory === 'all'
      ? TATTOO_PORTFOLIO
      : TATTOO_PORTFOLIO.filter((item) => item.category === selectedCategory);

  const activeTattoo =
    activeTattooIndex !== null ? filteredWorks[activeTattooIndex] : null;

  const handlePrev = () => {
    if (activeTattooIndex === null) return;
    setActiveTattooIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredWorks.length - 1
    );
  };

  const handleNext = () => {
    if (activeTattooIndex === null) return;
    setActiveTattooIndex((prev) =>
      prev! < filteredWorks.length - 1 ? prev! + 1 : 0
    );
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#090909] text-[#F4F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#A51F2B] font-medium mb-3">
              <span>CURATED ARCHIVE</span>
              <span className="w-6 h-[1px] bg-[#A51F2B]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              PERMANENT WORKS
            </h2>
          </div>
          <p className="font-editorial text-lg text-[#8C8C8C] max-w-md italic leading-relaxed">
            Authentic blackwork, delicate single-needle botanicals, and high-contrast skin compositions crafted with clinical discipline.
          </p>
        </div>

        {/* Category Filters (Clean Segmented Bar) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setActiveTattooIndex(null);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-sans transition-all duration-200 whitespace-nowrap border-b-2 -mb-[17px] ${
                selectedCategory === cat.key
                  ? 'border-[#A51F2B] text-[#F4F0E8] font-semibold'
                  : 'border-transparent text-[#8C8C8C] hover:text-[#F4F0E8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col bg-[#141414] border border-white/10 overflow-hidden cursor-pointer"
                onClick={() => setActiveTattooIndex(index)}
              >
                {/* Image Container with controlled aspect ratio & Progressive LQIP */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/60">
                  <ProgressiveImage
                    src={work.image}
                    lqip={work.lqip}
                    alt={work.title}
                    className="w-full h-full"
                    imgClassName="grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="p-3 bg-[#090909]/90 border border-white/20 text-white rounded-full scale-90 group-hover:scale-100 transition-transform">
                      {work.isVideo ? <Play className="w-5 h-5 fill-white text-white ml-0.5" /> : <Maximize2 className="w-5 h-5" />}
                    </span>
                  </div>

                  {/* Unboxed Metadata (Zero-pill discipline) */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="text-[10px] tracking-[0.25em] text-[#F4F0E8] uppercase bg-[#090909]/80 backdrop-blur-md px-2.5 py-1 border border-white/10 font-mono">
                      {work.categoryLabel}
                    </span>
                    {work.isAward && (
                      <span className="text-[10px] tracking-[0.15em] text-white uppercase bg-[#A51F2B] px-2 py-1 font-mono font-bold">
                        ★ Award Winner
                      </span>
                    )}
                    {work.isVideo && (
                      <span className="text-[10px] tracking-[0.15em] text-white uppercase bg-white/20 backdrop-blur-md px-2 py-1 font-mono flex items-center gap-1">
                        <Play className="w-2.5 h-2.5 fill-white" /> Reel
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Editorial Footer */}
                <div className="p-5 flex flex-col justify-between flex-1 border-t border-white/5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#F4F0E8] group-hover:text-white transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-xs text-[#8C8C8C] mt-1 line-clamp-2">
                      {work.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#8C8C8C]">
                    <span className="tracking-wider uppercase">{work.placement}</span>
                    <div className="flex items-center gap-3">
                      {work.instagramPostUrl && (
                        <a
                          href={work.instagramPostUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-white text-[#8C8C8C] inline-flex items-center gap-1 transition-colors"
                          title="View original on Instagram"
                        >
                          <Instagram className="w-3 h-3 text-[#A51F2B]" />
                        </a>
                      )}
                      <span className="text-[#A51F2B] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        {work.isVideo ? 'Watch Reel' : 'Inspect'}
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Instagram Verification Banner */}
        <div className="mt-16 p-8 border border-white/10 bg-[#141414]/60 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
              <img
                src={ARTIST_INFO.avatarUrl}
                alt="David"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div>
              <p className="font-display text-sm sm:text-base font-semibold text-[#F4F0E8]">
                Authentic Works on Instagram @davink.tatto0
              </p>
              <p className="text-xs text-[#8C8C8C] mt-0.5">
                Explore real client process clips, healed progress shots, and booking updates directly on David's official profile.
              </p>
            </div>
          </div>

          <a
            href={ARTIST_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 hover:border-white/50 text-[#F4F0E8] hover:bg-white/5 text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center gap-2 shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#A51F2B]" />
            <span>Open @davink.tatto0</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        tattoo={activeTattoo}
        onClose={() => setActiveTattooIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        onBookStyle={(style) => onOpenBookingWithStyle(style)}
      />
    </section>
  );
};
