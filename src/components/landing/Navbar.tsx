import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import ledgerIcon from '../../assets/img/ledger-icon-ai.jpg';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#070B14]/85 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Brand Emblem + Wordmark */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={ledgerIcon}
            alt="LedgerAI Emblem"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover border border-white/[0.08] shadow-md shadow-emerald-950/30 group-hover:border-emerald-500/40 transition-all"
          />
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-sans">
            Ledger<span className="text-emerald-400">AI</span>
          </span>
        </Link>

        {/* Center: Short, Clean Scroll Links */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0B1120] border border-white/[0.08] shadow-inner">
          <a
            href="#how-it-works"
            className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#benefits"
            className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
          >
            Benefits
          </a>
          <a
            href="#workflows"
            className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
          >
            Workflows
          </a>
          <Link
            to="/coming-soon"
            className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
          >
            Waitlist
          </Link>
        </nav>

        {/* Right: 1 Crisp Pill CTA */}
        <div className="hidden sm:flex items-center">
          <Link
            to="/coming-soon"
            className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-full shadow-lg shadow-emerald-950/40 border border-emerald-400/30 flex items-center gap-1.5 transition-all duration-200 active:scale-95"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#070B14]/98 px-4 pt-4 pb-6 space-y-2">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.05]"
          >
            How It Works
          </a>
          <a
            href="#benefits"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.05]"
          >
            Benefits
          </a>
          <a
            href="#workflows"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.05]"
          >
            Workflows
          </a>
          <Link
            to="/coming-soon"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.05]"
          >
            Waitlist
          </Link>
          <div className="pt-2">
            <Link
              to="/coming-soon"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-full shadow-md shadow-emerald-950 block"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
