import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Instagram, Play, Award } from 'lucide-react';
import { TattooWork } from '../types';
import { ARTIST_INFO } from '../data/tattoos';

interface LightboxModalProps {
  tattoo: TattooWork | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onBookStyle: (styleName: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  tattoo,
  onClose,
  onPrev,
  onNext,
  onBookStyle,
}) => {
  useEffect(() => {
    if (!tattoo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [tattoo, onClose, onPrev, onNext]);

  if (!tattoo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 md:p-10 animate-fade-in"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-6 right-6 z-20 p-2.5 text-[#8C8C8C] hover:text-[#F4F0E8] bg-white/5 hover:bg-white/10 rounded-full transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={onPrev}
        aria-label="Previous artwork"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-[#8C8C8C] hover:text-[#F4F0E8] bg-white/5 hover:bg-white/15 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        aria-label="Next artwork"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-[#8C8C8C] hover:text-[#F4F0E8] bg-white/5 hover:bg-white/15 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#141414] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-black"
      >
        {/* Left / Center Image View */}
        <div className="relative flex-1 bg-black/80 flex items-center justify-center p-4 sm:p-6 overflow-hidden min-h-[350px] md:min-h-[500px]">
          <img
            src={tattoo.image}
            alt={tattoo.title}
            className="max-h-[75vh] w-auto max-w-full object-contain grayscale contrast-125"
          />

          {tattoo.isVideo && tattoo.instagramPostUrl && (
            <a
              href={tattoo.instagramPostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors flex flex-col items-center justify-center gap-3 group"
            >
              <div className="w-16 h-16 rounded-full bg-[#A51F2B] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white bg-black/70 px-4 py-1.5 border border-white/20">
                Watch Studio Reel On Instagram
              </span>
            </a>
          )}
        </div>

        {/* Right Details Panel */}
        <div className="w-full md:w-80 lg:w-96 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-[#141414]">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-[0.25em] text-[#A51F2B] uppercase font-sans font-semibold">
                  {tattoo.categoryLabel}
                </span>
                {tattoo.isAward && (
                  <span className="text-[10px] tracking-[0.15em] text-white uppercase bg-[#A51F2B] px-2 py-0.5 font-mono font-bold flex items-center gap-1">
                    <Award className="w-3 h-3" /> 2nd Place
                  </span>
                )}
              </div>
              <h2
                id="lightbox-title"
                className="font-display text-xl sm:text-2xl font-bold text-[#F4F0E8] mt-1"
              >
                {tattoo.title}
              </h2>
            </div>

            <div className="pt-2 border-t border-white/5 space-y-2">
              <div className="text-xs text-[#8C8C8C] flex items-center gap-2">
                <span className="text-[#8C8C8C]/60 uppercase tracking-widest text-[10px]">
                  Placement:
                </span>
                <span className="text-[#F4F0E8] font-medium">{tattoo.placement}</span>
              </div>
              <div className="text-xs text-[#8C8C8C] flex items-center gap-2">
                <span className="text-[#8C8C8C]/60 uppercase tracking-widest text-[10px]">
                  Artist:
                </span>
                <span className="text-[#F4F0E8] font-medium">DAVID (@davink.tatto0)</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8C8C8C] leading-relaxed pt-2">
              {tattoo.description}
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                onClose();
                onBookStyle(tattoo.categoryLabel);
              }}
              className="w-full py-3.5 bg-[#A51F2B] hover:bg-[#BF2634] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2"
            >
              <span>Book In This Style</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={tattoo.instagramPostUrl || ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 border border-white/10 hover:border-white/30 text-[#8C8C8C] hover:text-[#F4F0E8] text-xs uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2"
            >
              <Instagram className="w-3.5 h-3.5 text-[#A51F2B]" />
              <span>View Original On Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
