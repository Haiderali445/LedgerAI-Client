import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Boxes,
  BookOpenCheck,
  ReceiptText,
  PhoneCall,
  Bot,
  AlertCircle,
  Check,
  TrendingUp,
  Warehouse,
  ShoppingBag,
} from 'lucide-react';
import aiMascot from '../../assets/img/ledger-icon-ai.jpg';

interface WaitlistModule {
  id: string;
  name: string;
  icon: React.ElementType;
  benefit: string;
}

export const SoonToComePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const modules: WaitlistModule[] = [
    {
      id: 'sales',
      name: 'Sales & Orders',
      icon: ShoppingBag,
      benefit: 'Capture inbound orders into verified drafts with automated pack conversion and credit line checks.',
    },
    {
      id: 'purchase',
      name: 'Purchase & Billing',
      icon: ReceiptText,
      benefit: 'Issue 00/01 vouchers with native freight (Bilty), labor (Mazdoori), WHT Sec 236G/H, and Kasar roundoffs.',
    },
    {
      id: 'stock',
      name: 'Warehouse Stock',
      icon: Boxes,
      benefit: 'Track stock across multiple godowns with earliest-expiry (FEFO) batch allocation and zero overselling.',
    },
    {
      id: 'khata',
      name: 'Udhaar Khata',
      icon: BookOpenCheck,
      benefit: 'Maintain live DR/CR balances, automated 0–30 to 90+ day aging alerts, and payment FIFO allocations.',
    },
    {
      id: 'channels',
      name: 'WhatsApp & Email',
      icon: PhoneCall,
      benefit: 'Receive voice notes & Roman Urdu texts via Meta Cloud API and dispatch instant PDF delivery slips.',
    },
    {
      id: 'ai',
      name: 'AI Assistant',
      icon: Bot,
      benefit: 'Organize raw messages into structured proposals with confidence scores—requiring your approval on key actions.',
    },
  ];

  const [activeModuleId, setActiveModuleId] = useState<string>(modules[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your work or business email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setError('Please provide a valid business email address.');
      return;
    }

    // Save to local storage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('ledgerai_waitlist') || '[]');
      if (!existing.includes(trimmed)) {
        existing.push(trimmed);
        localStorage.setItem('ledgerai_waitlist', JSON.stringify(existing));
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }

    setSubmittedEmail(trimmed);
    setError(null);
    setEmail('');
  };

  const selectedModule = modules.find((m) => m.id === activeModuleId) || modules[0];
  const SelectedIcon = selectedModule.icon;

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col justify-between relative overflow-hidden py-8 sm:py-12 px-4 sm:px-6 lg:px-8 selection:bg-emerald-500 selection:text-white">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-emerald-500/10 via-emerald-600/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* 1. Top Bar */}
      <header className="max-w-5xl mx-auto w-full flex items-center justify-between mb-8 sm:mb-12">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={aiMascot}
            alt="LedgerAI Emblem"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover border border-white/[0.08] shadow-md shadow-emerald-950/30 group-hover:border-emerald-500/40 transition-all"
          />
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-sans">
            Ledger<span className="text-emerald-400">AI</span>
          </span>
        </Link>

        <Link
          to="/"
          className="px-4 py-2 rounded-full bg-[#0B1120] hover:bg-[#111827] border border-white/[0.08] hover:border-white/[0.15] text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* 2. Waitlist Hero Card (rounded-3xl) */}
      <main className="max-w-4xl mx-auto w-full my-auto space-y-8">
        <div className="rounded-3xl bg-[#0B1120] border border-white/[0.08] shadow-2xl p-6 sm:p-12 relative overflow-hidden">
          {/* Subtle top edge highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

          {/* Eyebrow Label with AI Mascot Pill */}
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EARLY ACCESS WAITLIST</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#070B14] border border-white/[0.08]">
              <img src={aiMascot} alt="LedgerAI Mascot" className="w-5 h-5 rounded-full object-cover" />
              <span className="text-[11px] font-mono text-slate-300">AI Assistant Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Pitch & Quick Checkmarks */}
            <div className="lg:col-span-7 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-[1.15]">
                Where sales, stock &amp; Khata meet{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  smart automation.
                </span>
              </h1>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Join commercial wholesalers and distributors getting early access to LedgerAI. Clean WhatsApp order
                capture, strict FEFO warehouse control, automated Udhaar Khata, and full manual control anytime.
              </p>

              {/* 3 Quick Checkmarks */}
              <div className="mt-6 space-y-2.5 font-sans">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Fast WhatsApp &amp; email order capture</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Multi-warehouse stock &amp; FEFO batch control</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>100% manual continuity anytime</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Email Capture Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#070B14] border border-white/[0.08] p-5 sm:p-6 shadow-inner text-left">
                {!submittedEmail ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-200 mb-1.5 font-sans">
                        Work or business email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError(null);
                          }}
                          placeholder="name@company.com"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#0B1120] border border-white/[0.1] focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs sm:text-sm text-white placeholder-slate-500 transition-all font-mono outline-none"
                        />
                      </div>
                      {error && (
                        <div className="mt-2 flex items-center gap-1.5 text-xs text-rose-400 font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{error}</span>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 border border-emerald-400/40 shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      <span>Join the Waitlist</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] text-slate-400 text-center font-mono">
                      Early rollout spots reserved in order of registration.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-4 space-y-4 animate-fadeIn">
                    <div className="relative mx-auto w-16 h-16">
                      <img
                        src={aiMascot}
                        alt="LedgerAI Assistant Mascot"
                        className="w-16 h-16 rounded-2xl object-cover border border-emerald-500/30 shadow-lg shadow-emerald-500/10"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#070B14] text-white flex items-center justify-center shadow">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white font-sans">You're on the early access queue!</h3>
                      <p className="mt-1 text-xs text-emerald-400 font-mono break-all">{submittedEmail}</p>
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                        We'll send your priority onboarding invitation and release notes directly to this address.
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmittedEmail(null)}
                      className="text-xs text-slate-400 hover:text-white underline decoration-slate-600 transition-colors pt-2 font-mono"
                    >
                      Add another email
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 3 Mini Snapshot Cards with tabular-nums */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3 text-left font-mono">
            <div className="p-3.5 rounded-2xl bg-[#070B14] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Lost WhatsApp Orders</span>
              <span className="text-lg font-bold text-emerald-400 tabular-nums">₨ 0</span>
              <span className="text-[10px] text-slate-500 block mt-0.5 font-sans">Automated order capture</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#070B14] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Manual Continuity</span>
              <span className="text-lg font-bold text-teal-400 tabular-nums">100%</span>
              <span className="text-[10px] text-slate-500 block mt-0.5 font-sans">Runs anytime without AI</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#070B14] border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Batch Expiry Logic</span>
              <span className="text-lg font-bold text-sky-400 tabular-nums">FEFO</span>
              <span className="text-[10px] text-slate-500 block mt-0.5 font-sans">Earliest batches move first</span>
            </div>
          </div>

          {/* 3. Interactive Module Pills (No Truncation) */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] text-left">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono font-bold">
                Modules in Active Rollout (Click to inspect):
              </p>
              <span className="text-[10px] text-emerald-400 font-mono hidden sm:inline">
                ● {selectedModule.name} selected
              </span>
            </div>

            {/* Clickable Module Pills - Clean Wrap, No Truncation */}
            <div className="flex flex-wrap gap-2.5">
              {modules.map((mod) => {
                const Icon = mod.icon;
                const isSelected = mod.id === activeModuleId;

                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModuleId(mod.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-all border ${
                      isSelected
                        ? 'bg-emerald-500/15 border-emerald-500/40 text-white shadow-md shadow-emerald-950/20'
                        : 'bg-[#070B14] border-white/[0.08] text-slate-300 hover:border-white/[0.15] hover:text-white'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
                    <span className="font-sans whitespace-nowrap">{mod.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic 1-Line Business Benefit Box */}
            <div className="mt-4 p-4 rounded-2xl bg-[#070B14] border border-emerald-500/20 flex items-start gap-3 animate-fadeIn">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <SelectedIcon className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white font-sans mb-0.5">{selectedModule.name}</p>
                <p className="text-slate-300 leading-relaxed font-sans">{selectedModule.benefit}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Who It's For + 01 / 02 / 03 Rollout Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Who It's For */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1120] border border-white/[0.08] shadow-lg">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-2">
              WHO IT'S FOR
            </span>
            <h3 className="text-lg font-bold text-white font-sans mb-4">Built for wholesale distribution</h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-[#070B14] border border-white/[0.06]">
                <p className="font-bold text-white mb-0.5">Wholesale Distributors &amp; Godowns</p>
                <p className="text-slate-400 leading-relaxed">
                  FMCG, edible oil, grain, textiles, and chemicals moving bulk cartons, bags, and pallets.
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-[#070B14] border border-white/[0.06]">
                <p className="font-bold text-white mb-0.5">Mandi &amp; Commercial Market Traders</p>
                <p className="text-slate-400 leading-relaxed">
                  Businesses handling fast daily orders, seasonal price tiers, and traditional Udhaar Khata books.
                </p>
              </div>
            </div>
          </div>

          {/* 01 / 02 / 03 Rollout Steps */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1120] border border-white/[0.08] shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold block mb-2">
                HOW TO JOIN
              </span>
              <h3 className="text-lg font-bold text-white font-sans mb-4">Simple 3-step rollout</h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#070B14] border border-white/[0.06]">
                  <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                    01
                  </span>
                  <div>
                    <p className="font-bold text-white">Enter Your Business Email</p>
                    <p className="text-slate-400">Reserve your priority onboarding position on the waitlist.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#070B14] border border-white/[0.06]">
                  <span className="w-6 h-6 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                    02
                  </span>
                  <div>
                    <p className="font-bold text-white">Guided Catalog &amp; Godown Setup</p>
                    <p className="text-slate-400">Import your items, warehouses, and beginning Khata balances.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#070B14] border border-white/[0.06]">
                  <span className="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-400 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                    03
                  </span>
                  <div>
                    <p className="font-bold text-white">Connect WhatsApp &amp; Start Billing</p>
                    <p className="text-slate-400">Receive automated drafts and issue verified vouchers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 5. Footer */}
      <footer className="max-w-5xl mx-auto w-full text-center text-xs text-slate-500 font-mono mt-8 sm:mt-12">
        <p>© 2026 LedgerAI · Department of Software Engineering, University of Gujrat</p>
      </footer>
    </div>
  );
};

export default SoonToComePage;
