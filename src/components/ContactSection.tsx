import React, { useState } from 'react';
import { Instagram, ArrowUpRight, Send, Check, ShieldAlert } from 'lucide-react';
import { ARTIST_INFO } from '../data/tattoos';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim() || !inquiryMessage.trim()) return;

    setSubmitted(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#090909] text-[#F4F0E8] border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Artist Direct Links */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#A51F2B] font-medium mb-3">
                <span>DIRECT INQUIRIES</span>
                <span className="w-8 h-[1px] bg-[#A51F2B]" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F0E8] leading-[1.1]">
                LET’S CREATE SOMETHING PERSONAL.
              </h2>
            </div>

            <p className="font-editorial text-xl text-[#8C8C8C] italic leading-relaxed max-w-lg font-light">
              “Have an idea in mind? Share your vision, your references, and the story you want to carry.”
            </p>

            <div className="space-y-6 pt-4 border-t border-white/5">
              {/* Instagram Official Channel */}
              <div className="flex items-start gap-4 p-5 bg-[#141414] border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#A51F2B]/10 border border-[#A51F2B]/30 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-[#A51F2B]" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-[#F4F0E8]">
                    Official Instagram Channel
                  </h3>
                  <p className="text-xs text-[#8C8C8C] mt-0.5">
                    For client reels, healed updates, and direct conversation.
                  </p>
                  <a
                    href={ARTIST_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#A51F2B] hover:text-[#BF2634] font-medium mt-2 group"
                  >
                    <span>@davink.tatto0</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Private Studio Protocol Notice */}
              <div className="flex items-start gap-4 p-5 bg-[#141414] border border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5 text-[#8C8C8C]" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-[#F4F0E8]">
                    Private Appointment Location
                  </h3>
                  <p className="text-xs text-[#8C8C8C] mt-0.5">
                    To maintain an intimate, tranquil environment and strict sterility protocols, exact private studio address coordinates are shared exclusively upon appointment confirmation.
                  </p>
                </div>
              </div>

              {/* Comprehensive Booking Button */}
              <div>
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-4 bg-[#A51F2B] hover:bg-[#BF2634] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-xl shadow-[#A51F2B]/20 flex items-center justify-center gap-2"
                >
                  <span>Launch Comprehensive Booking Form</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Consultation Message Box */}
          <div className="lg:col-span-6 bg-[#141414] border border-white/10 p-8 sm:p-10 shadow-2xl">
            <h3 className="font-display text-xl font-bold text-[#F4F0E8] mb-2">
              QUICK CONSULTATION INQUIRY
            </h3>
            <p className="text-xs text-[#8C8C8C] mb-6">
              Have a preliminary question before formally submitting references? Send a direct note below.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-600/50 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-lg text-white">
                  Message Dispatched
                </h4>
                <p className="text-xs text-[#8C8C8C] max-w-sm mx-auto">
                  Thank you. Your inquiry has been sent to David. Expect a direct reply via your provided email or Instagram.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#A51F2B] underline pt-2"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickInquiry} className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Marcus Vance"
                    className="w-full bg-[#090909] border border-white/15 px-4 py-3 text-xs text-[#F4F0E8] focus:border-[#A51F2B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                    Email / Instagram Handle
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="marcus@example.com or @handle"
                    className="w-full bg-[#090909] border border-white/15 px-4 py-3 text-xs text-[#F4F0E8] focus:border-[#A51F2B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8C8C8C] block mb-1">
                    Your Question or Thought
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Ask about project feasibility, dates, or custom concepts..."
                    className="w-full bg-[#090909] border border-white/15 p-4 text-xs text-[#F4F0E8] focus:border-[#A51F2B] focus:outline-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#A51F2B] hover:bg-[#BF2634] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <span>Dispatch Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
