import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import ledgerIcon from '../../assets/img/ledger-icon-ai.jpg';

export const ClosingCtaFooter: React.FC = () => {
  return (
    <footer id="waitlist" className="bg-[#070B14] border-t border-white/[0.06] pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rounded Closing CTA Card (rounded-3xl) */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#0B1120] border border-white/[0.1] shadow-2xl p-8 sm:p-14 text-center max-w-4xl mx-auto mb-14 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
            <span>EARLY ACCESS WAITLIST</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans max-w-2xl mx-auto leading-tight">
            Ready for cleaner sales, stock &amp; Khata?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Eliminate missed WhatsApp orders, stop unapproved credit leaks, and run your wholesale distribution with
            confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/coming-soon"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-xl shadow-emerald-950/50 border border-emerald-400/40 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center gap-2 transition-all"
            >
              <span>Review 5 Steps</span>
            </a>
          </div>
        </div>

        {/* Business-Only Clean Footer Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/[0.06] text-xs">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src={ledgerIcon}
                alt="LedgerAI Emblem"
                className="w-8 h-8 rounded-xl object-cover border border-white/[0.08]"
              />
              <span className="font-extrabold text-lg tracking-tight text-white font-sans">
                Ledger<span className="text-emerald-400">AI</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-4">
              Where sales meets AI automation. Built for wholesale distributors, godown operators, and commercial trade
              businesses.
            </p>
            <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full Manual Continuity Guaranteed</span>
            </div>
          </div>

          {/* Column 1: Core Modules */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider font-mono mb-3 text-[11px]">Core Operations</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  WhatsApp Orders
                </a>
              </li>
              <li>
                <a href="#workflows" className="hover:text-white transition-colors">
                  Multi-Warehouse Stock
                </a>
              </li>
              <li>
                <a href="#workflows" className="hover:text-white transition-colors">
                  Udhaar Khata &amp; Dues
                </a>
              </li>
              <li>
                <a href="#workflows" className="hover:text-white transition-colors">
                  00/01 Billing Math
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider font-mono mb-3 text-[11px]">Navigation</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#workflows" className="hover:text-white transition-colors">
                  Workflows
                </a>
              </li>
              <li>
                <Link to="/coming-soon" className="hover:text-white transition-colors">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
          <p>© 2026 LedgerAI. Developed by Haider Ali, Ibtisam Kashif &amp; Fazina Mukhtar.</p>
          <p className="flex items-center gap-1.5 text-slate-500">
            <span>Department of Software Engineering, University of Gujrat</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ClosingCtaFooter;
