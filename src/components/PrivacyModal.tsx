import React from 'react';
import { X, ShieldCheck, HeartHandshake, AlertCircle } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full bg-[#141414] border border-white/10 p-6 sm:p-10 max-h-[85vh] overflow-y-auto space-y-6 text-[#F4F0E8] shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close policy"
          className="absolute top-6 right-6 p-2 text-[#8C8C8C] hover:text-white bg-white/5 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[10px] tracking-[0.25em] text-[#A51F2B] uppercase font-mono">
            STUDIO STANDARDS
          </span>
          <h2 className="font-display text-2xl font-bold text-[#F4F0E8] mt-1">
            HYGIENE & BOOKING PROTOCOL
          </h2>
        </div>

        <div className="space-y-4 text-xs text-[#8C8C8C] leading-relaxed">
          <div className="flex gap-3">
            <ShieldCheck className="w-5 h-5 text-[#A51F2B] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[#F4F0E8] uppercase tracking-wider text-[11px]">
                Hospital-Grade Sterilization
              </h3>
              <p className="mt-1">
                All needles, cartridges, ink caps, barriers, and covers are 100% single-use and disposed of in certified biohazard containment. Work surfaces are disinfected with medical-grade hospital solutions before and after every client.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <HeartHandshake className="w-5 h-5 text-[#A51F2B] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[#F4F0E8] uppercase tracking-wider text-[11px]">
                Original Artwork Policy
              </h3>
              <p className="mt-1">
                David does not tattoo duplicate designs or replicate existing tattoos by other artists. All works are custom-drawn stencils adapted specifically to your anatomy.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-[#A51F2B] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[#F4F0E8] uppercase tracking-wider text-[11px]">
                Age Verification & Deposit
              </h3>
              <p className="mt-1">
                Clients must be 18 years of age or older on the appointment date (government photo ID required). A non-refundable appointment deposit secures your dedicated studio slot, deductible from the final session price.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#A51F2B] hover:bg-[#BF2634] text-white text-xs uppercase tracking-widest font-medium"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
