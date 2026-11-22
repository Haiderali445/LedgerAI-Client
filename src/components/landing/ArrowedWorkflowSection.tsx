import React, { useState } from 'react';
import {
  MessageSquare,
  Bot,
  Boxes,
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  PenTool,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import aiMascot from '../../assets/img/ledger-icon-ai.jpg';

type Scenario = 'whatsapp' | 'credit-alert' | 'manual';

interface WorkflowStep {
  id: number;
  title: string;
  badge: string;
  icon: React.ElementType;
  descriptions: Record<Scenario, string>;
}

export const ArrowedWorkflowSection: React.FC = () => {
  const [scenario, setScenario] = useState<Scenario>('whatsapp');

  const steps: WorkflowStep[] = [
    {
      id: 1,
      title: 'WhatsApp, Email & Orders',
      badge: 'Step 01',
      icon: MessageSquare,
      descriptions: {
        whatsapp: 'Customer sends a voice note: "50 bori chini bhej dein".',
        'credit-alert': 'Urgent bulk request arrives for ₨ 1,200,000 via WhatsApp.',
        manual: 'Walk-in buyer orders directly at counter or sales counter desk.',
      },
    },
    {
      id: 2,
      title: 'AI Organizes Order Draft',
      badge: 'Step 02',
      icon: Bot,
      descriptions: {
        whatsapp: 'Audio transcribed; items, quantities & pack sizes organized into a clean draft.',
        'credit-alert': 'Items organized instantly with SKU matching and current price tier.',
        manual: 'Operator selects customer & SKUs using fast keyboard search (zero AI needed).',
      },
    },
    {
      id: 3,
      title: 'Stock & Khata Check',
      badge: 'Step 03',
      icon: Boxes,
      descriptions: {
        whatsapp: 'Checks warehouse stock and customer credit balance in real time.',
        'credit-alert': 'Alert: Order exceeds customer credit limit by ₨ 180,000.',
        manual: 'Warehouse batch stock verified and unreserved inventory reserved immediately.',
      },
    },
    {
      id: 4,
      title: 'Your Approval',
      badge: 'Step 04',
      icon: ShieldCheck,
      descriptions: {
        whatsapp: 'Fast 1-click confirmation by manager before stock leaves godown.',
        'credit-alert': 'Manager reviews payment history and decides whether to approve credit.',
        manual: 'Operator approves pick-slip on the spot or holds for manager review.',
      },
    },
    {
      id: 5,
      title: 'Bill & Khata Updated',
      badge: 'Step 05',
      icon: FileCheck2,
      descriptions: {
        whatsapp: 'Warehouse stock deducted, invoice generated, and WhatsApp receipt sent.',
        'credit-alert': 'Balance updated with payment terms, Bilty & Mazdoori applied cleanly.',
        manual: 'Printed invoice slip issued with auto-updated customer Khata dues.',
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#070B14] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1120] border border-white/[0.08] text-xs font-mono text-emerald-400 mb-3">
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            From customer message to settled bill in 5 clear steps
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-400">
            See how orders, stock checks, and credit limits coordinate smoothly—with your approval always in the loop.
          </p>

          {/* Scenario Selector Toggle */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#0B1120] border border-white/[0.08]">
            <button
              onClick={() => setScenario('whatsapp')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                scenario === 'whatsapp'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Order</span>
            </button>
            <button
              onClick={() => setScenario('credit-alert')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                scenario === 'credit-alert'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Credit Alert</span>
            </button>
            <button
              onClick={() => setScenario('manual')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                scenario === 'manual'
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Manual Entry</span>
            </button>
          </div>
        </div>

        {/* Desktop Arrowed Row */}
        <div className="hidden lg:flex items-stretch justify-between gap-2 max-w-6xl mx-auto mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={step.id}>
                {/* Step Card */}
                <div className="flex-1 p-5 rounded-2xl bg-[#0B1120] border border-white/[0.08] hover:border-emerald-500/30 transition-all text-left flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase text-emerald-400">{step.badge}</span>
                      {step.id === 2 ? (
                        <img
                          src={aiMascot}
                          alt="AI Assistant"
                          className="w-7 h-7 rounded-lg object-cover border border-emerald-500/30"
                        />
                      ) : (
                        <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xs font-bold text-white font-sans mb-1.5">{step.title}</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">{step.descriptions[scenario]}</p>
                  </div>
                </div>

                {/* SVG Arrowhead Connector (→) */}
                {!isLast && (
                  <div className="flex items-center justify-center px-1 text-emerald-400 shrink-0">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <polyline points="14 6 20 12 14 18" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Vertical Arrowed Column */}
        <div className="lg:hidden space-y-3 max-w-md mx-auto mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={step.id}>
                <div className="p-4 rounded-2xl bg-[#0B1120] border border-white/[0.08] text-left shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-emerald-400">{step.badge}</span>
                    {step.id === 2 ? (
                      <img
                        src={aiMascot}
                        alt="AI Assistant"
                        className="w-6 h-6 rounded-md object-cover border border-emerald-500/30"
                      />
                    ) : (
                      <Icon className="w-4 h-4 text-emerald-400" />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-300">{step.descriptions[scenario]}</p>
                </div>

                {!isLast && (
                  <div className="flex justify-center text-emerald-400">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="4" x2="12" y2="20" />
                      <polyline points="6 14 12 20 18 14" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Concise Assurance Pill */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Zero blind auto-shipping · Full manual override available 24/7</span>
        </div>
      </div>
    </section>
  );
};

export default ArrowedWorkflowSection;
