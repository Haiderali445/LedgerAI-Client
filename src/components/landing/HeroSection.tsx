import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden bg-[#070B14]">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-emerald-500/10 via-emerald-600/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1120] border border-white/[0.08] shadow-sm mb-6 hover:border-emerald-500/30 transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-slate-300 font-mono">
            SALES · PURCHASE · STOCK · UDHAAR KHATA
          </span>
        </div>

        {/* Sharp, Punchy Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] font-sans">
          Where sales meets{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            AI automation.
          </span>
        </h1>

        {/* Short, Crisp Subheadline (1-2 lines) */}
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Capture WhatsApp, email, and daily orders into clean bills, track warehouse stock, and control Udhaar Khata—with
          smart automation, human approval, and full manual control anytime.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/coming-soon"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-xl shadow-emerald-950/50 border border-emerald-400/40 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#benefits"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-[#0B1120] hover:bg-[#111827] border border-white/[0.08] hover:border-white/[0.15] flex items-center justify-center gap-2 transition-all"
          >
            <span>See Benefits ↓</span>
          </a>
        </div>

        {/* Line Below Buttons */}
        <p className="mt-6 text-xs sm:text-sm text-slate-400 font-mono">
          Sales &amp; Purchase Billing · Multi-Warehouse Stock · Udhaar Khata Control · 100% Manual Anytime
        </p>

        {/* Quick Trust Highlights */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto text-xs">
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero typing from WhatsApp</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Earliest-expiry batch locking</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Credit limit protection</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Human sign-off on big orders</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
