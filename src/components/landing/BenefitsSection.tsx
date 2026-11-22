import React from 'react';
import {
  MessageSquareWarning,
  CreditCard,
  Calculator,
  Boxes,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const BenefitsSection: React.FC = () => {
  const benefitCards = [
    {
      id: 1,
      problem: 'Missed WhatsApp & Email Orders',
      problemShort: 'Voice notes, photos, and messy text messages get lost, miscounted, or delayed.',
      benefit: 'Faster replies and zero lost sales',
      benefitShort: 'AI organizes incoming messages into clean drafts with quantities & pack sizes ready to confirm.',
      icon: MessageSquareWarning,
    },
    {
      id: 2,
      problem: 'Unclear Udhaar Khata & Dues',
      problemShort: 'Shipping goods to customers whose credit is already overdue, while partial payments get forgotten.',
      benefit: 'Check balances and stop risky credit before dispatch',
      benefitShort: 'Live DR/CR balances, overdue warning flags, and automated limits keep your cash flow safe.',
      icon: CreditCard,
    },
    {
      id: 3,
      problem: 'Purchase & Sale Bill Math',
      problemShort: 'Hand calculations for Bilty (freight), Mazdoori (labor), WHT, and Kasar cause disputes and errors.',
      benefit: 'Accurate totals with Bilty, Mazdoori, WHT, and Kasar',
      benefitShort: 'Dual-series vouchers auto-calculate surcharges and roundoffs with complete audit trails.',
      icon: Calculator,
    },
    {
      id: 4,
      problem: 'Stock & Expiry Surprises',
      problemShort: 'Selling items that were already reserved, stockouts, and older cartons expiring unseen in godowns.',
      benefit: 'Track warehouse stock and move older batches first',
      benefitShort: 'Multi-warehouse stock counts with earliest-expiry (FEFO) batch priority so nothing spoils.',
      icon: Boxes,
    },
    {
      id: 5,
      problem: 'AI or Network Hiccups',
      problemShort: 'Worrying that if internet or WhatsApp goes down, wholesale billing will completely halt.',
      benefit: '100% manual control anytime, with human sign-off',
      benefitShort: 'Enter orders, print bills, and settle Khata manually 24/7/365 with zero external AI dependence.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="benefits" className="py-20 sm:py-24 bg-[#070B14] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1120] border border-white/[0.08] text-xs font-mono text-emerald-400 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>REAL BUSINESS GAINS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
            Stop the 5 biggest money leaks in wholesale trade
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-400">
            Clear, scannable solutions for everyday sales, warehouse inventory, and customer credit headaches.
          </p>
        </div>

        {/* 5 Scannable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {benefitCards.map((card, idx) => {
            const Icon = card.icon;
            const isWide = idx === 4;

            return (
              <div
                key={card.id}
                className={`rounded-3xl bg-[#0B1120] border border-white/[0.08] shadow-lg p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400 mb-4">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Problem */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 text-rose-400 text-xs font-mono font-bold mb-1">
                      <XCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{card.problem}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{card.problemShort}</p>
                  </div>

                  {/* Benefit */}
                  <div className="pt-3 border-t border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono font-bold mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{card.benefit}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{card.benefitShort}</p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>LedgerAI Core Protection</span>
                  <Link to="/coming-soon" className="text-emerald-400 hover:underline flex items-center gap-1">
                    <span>Waitlist</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
