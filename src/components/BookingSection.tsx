import React, { useState, useEffect } from 'react';
import {
  Check,
  Calendar,
  Clock,
  Instagram,
  Copy,
  CheckCircle2,
  X,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { ARTIST_INFO } from '../data/tattoos';

interface BookingSectionProps {
  initialStyle?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialStyle = '',
  isModal = false,
  onCloseModal,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    instagramHandle: '',
    style: initialStyle || 'Blackwork',
    placement: 'Arm / Forearm',
    preferredDate: '',
    preferredTime: 'Afternoon (2:00 PM – 6:00 PM)',
    ideaNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialStyle) {
      setFormData((prev) => ({ ...prev, style: initialStyle }));
    }
  }, [initialStyle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.preferredDate) {
      return;
    }

    const ref = `DVK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(ref);

    // Persist to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('david_bookings') || '[]');
      existing.push({ ref, ...formData, date: new Date().toISOString() });
      localStorage.setItem('david_bookings', JSON.stringify(existing));
    } catch {}

    setSubmitted(true);
  };

  const copySummary = () => {
    const text = `DAVID | TATTOO ARTIST BOOKING REQUEST
Ref: ${referenceId}
Name: ${formData.fullName}
Instagram: ${formData.instagramHandle || 'N/A'}
Phone: ${formData.phone || 'N/A'}
Email: ${formData.email}
Style: ${formData.style} (${formData.placement})
Date: ${formData.preferredDate} - ${formData.preferredTime}
Idea: ${formData.ideaNotes || 'To discuss in consultation'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      instagramHandle: '',
      style: 'Blackwork',
      placement: 'Arm / Forearm',
      preferredDate: '',
      preferredTime: 'Afternoon (2:00 PM – 6:00 PM)',
      ideaNotes: '',
    });
  };

  return (
    <section
      id="booking"
      className={`relative ${
        isModal
          ? 'p-6 sm:p-8'
          : 'py-20 sm:py-24 bg-[#090909] text-[#F4F0E8] border-t border-white/5'
      }`}
    >
      <div className={`${isModal ? 'w-full' : 'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {/* Modal Close Button */}
        {isModal && onCloseModal && (
          <button
            onClick={onCloseModal}
            className="absolute top-6 right-6 p-2 text-[#8C8C8C] hover:text-[#F4F0E8] rounded-full hover:bg-white/5 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Section Heading (exact requested copy) */}
        <div className="mb-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs tracking-[0.3em] uppercase text-[#A51F2B] font-medium mb-2.5">
            <span>SESSION RESERVATION</span>
            <span className="w-6 h-[1px] bg-[#A51F2B]" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#F4F0E8]">
            BOOK A PRIVATE SESSION
          </h2>
          <p className="font-editorial text-sm sm:text-base text-[#8C8C8C] italic mt-1.5 leading-relaxed">
            Each tattoo is an original creation tailored to the individual. Complete the details below to request your consultation.
          </p>
        </div>

        {/* SUCCESS STATE */}
        {submitted ? (
          <div className="bg-[#141414] border border-white/10 p-6 sm:p-10 text-center animate-fade-in space-y-5">
            <div className="w-12 h-12 rounded-full bg-[#A51F2B]/20 border border-[#A51F2B] text-white flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-[#A51F2B]" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] tracking-[0.25em] text-[#8C8C8C] uppercase font-mono">
                REFERENCE: {referenceId}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F4F0E8]">
                YOUR IDEA IS ONE STEP CLOSER TO BECOMING ART.
              </h3>
              <p className="text-xs text-[#8C8C8C] max-w-md mx-auto pt-1">
                David has received your details. Expect a direct message via Instagram or email to confirm your time slot.
              </p>
            </div>

            {/* Quick summary strip */}
            <div className="p-4 bg-[#090909] border border-white/5 max-w-sm mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#8C8C8C]">Client:</span>
                <span className="text-white font-medium">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C8C8C]">Preferred Date:</span>
                <span className="text-white font-medium">{formData.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C8C8C]">Time:</span>
                <span className="text-white font-medium">{formData.preferredTime.split('(')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C8C8C]">Style:</span>
                <span className="text-[#A51F2B] font-medium">{formData.style}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={copySummary}
                className="px-4 py-2.5 border border-white/20 hover:border-white/50 text-white text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Summary'}</span>
              </button>

              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#A51F2B] hover:bg-[#BF2634] text-white text-xs uppercase tracking-wider font-medium transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>DM David On Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={resetForm}
                className="text-xs text-[#8C8C8C] hover:text-white underline block w-full mt-2"
              >
                Submit another request
              </button>
            </div>
          </div>
        ) : (
          /* COMPACT, FAST 1-CARD FORM */
          <form
            onSubmit={handleSubmit}
            className="bg-[#141414] border border-white/10 p-6 sm:p-8 space-y-5 shadow-2xl"
          >
            {/* Row 1: Name & Instagram Handle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                  Full Name <span className="text-[#A51F2B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Marcus Vance"
                  className="w-full bg-[#090909] border border-white/15 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:border-[#A51F2B] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                  Instagram Handle <span className="text-[#8C8C8C]/60">(Recommended)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-[#8C8C8C]">@</span>
                  <input
                    type="text"
                    value={formData.instagramHandle.replace('@', '')}
                    onChange={(e) => setFormData({ ...formData, instagramHandle: '@' + e.target.value.replace('@', '') })}
                    placeholder="yourhandle"
                    className="w-full bg-[#090909] border border-white/15 pl-7 pr-3.5 py-2.5 text-xs text-[#F4F0E8] focus:border-[#A51F2B] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                  Email Address <span className="text-[#A51F2B]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="marcus@example.com"
                  className="w-full bg-[#090909] border border-white/15 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:border-[#A51F2B] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#090909] border border-white/15 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:border-[#A51F2B] focus:outline-none"
                />
              </div>
            </div>

            {/* Row 3: Timing (Date & Preferred Time Window) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/5">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                  Preferred Date <span className="text-[#A51F2B]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#090909] border border-white/15 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:border-[#A51F2B] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                  Preferred Timing Window <span className="text-[#A51F2B]">*</span>
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-[#090909] border border-white/15 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:border-[#A51F2B] focus:outline-none"
                >
                  <option value="Morning (11:00 AM – 2:00 PM)">Morning (11:00 AM – 2:00 PM)</option>
                  <option value="Afternoon (2:00 PM – 6:00 PM)">Afternoon (2:00 PM – 6:00 PM)</option>
                  <option value="Evening / Full Day Session">Evening / Full Day Intensive</option>
                </select>
              </div>
            </div>

            {/* Row 4: Tattoo Style & Placement */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                  Style
                </label>
                <select
                  value={formData.style}
                  onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                  className="w-full bg-[#090909] border border-white/15 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:border-[#A51F2B] focus:outline-none"
                >
                  <option value="Blackwork">Blackwork & Ink Saturation</option>
                  <option value="Realism">Dark Realism & Chiaroscuro</option>
                  <option value="Fine Line">Fine Line & Botanicals</option>
                  <option value="Gothic">Gothic & Horror Art</option>
                  <option value="Coverup">Coverup & Skin Transformation</option>
                  <option value="Custom">Custom Concept / Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                  Body Placement
                </label>
                <input
                  type="text"
                  value={formData.placement}
                  onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                  placeholder="e.g. Forearm, Chest, Calf, Back..."
                  className="w-full bg-[#090909] border border-white/15 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:border-[#A51F2B] focus:outline-none"
                />
              </div>
            </div>

            {/* Row 5: Brief Idea / Notes */}
            <div>
              <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                Brief Tattoo Concept / Idea
              </label>
              <textarea
                rows={2}
                value={formData.ideaNotes}
                onChange={(e) => setFormData({ ...formData, ideaNotes: e.target.value })}
                placeholder="Briefly describe what you'd like tattooed or any references..."
                className="w-full bg-[#090909] border border-white/15 p-3 text-xs text-[#F4F0E8] placeholder-[#8C8C8C]/50 focus:border-[#A51F2B] focus:outline-none leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#A51F2B] hover:bg-[#BF2634] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-lg shadow-[#A51F2B]/20 flex items-center justify-center gap-2"
              >
                <span>Request Consultation & Timing</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[11px] text-[#8C8C8C] text-center mt-2.5">
                Private 1-on-1 session · 18+ ID required · Quick confirmation within 24–48 hours
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
