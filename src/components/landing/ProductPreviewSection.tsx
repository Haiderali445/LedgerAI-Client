import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Boxes,
  FileSpreadsheet,
  CheckCircle,
  AlertTriangle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar,
  Layers,
  Sparkles,
  Check,
} from 'lucide-react';
import aiMascot from '../../assets/img/ledger-icon-ai.jpg';

export const ProductPreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai-order' | 'ims-fefo' | 'khata-vouchers'>('ai-order');
  const [approvedProposal, setApprovedProposal] = useState<boolean>(false);

  return (
    <section id="workflows" className="py-20 sm:py-24 bg-[#070B14] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1120] border border-white/[0.08] text-xs font-mono text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL-UI WORKFLOW PREVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Inspect the engine in action
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-400">
            Switch between the three core pillars to see how WhatsApp orders, FEFO batch allocations, and credit ledgers
            coordinate without human bottleneck or data corruption.
          </p>

          {/* Tab Selector Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#0B1120] border border-white/[0.08] max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('ai-order')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'ai-order'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>AI &amp; WhatsApp Order Workflow</span>
            </button>
            <button
              onClick={() => setActiveTab('ims-fefo')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'ims-fefo'
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Boxes className="w-3.5 h-3.5" />
              <span>Multi-Warehouse IMS &amp; FEFO</span>
            </button>
            <button
              onClick={() => setActiveTab('khata-vouchers')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'khata-vouchers'
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Udhaar Khata &amp; 00/01 Vouchers</span>
            </button>
          </div>
        </div>

        {/* Rounded Dark App Preview Frame */}
        <div className="rounded-3xl bg-[#0B1120] border border-white/[0.08] shadow-2xl p-4 sm:p-8 max-w-6xl mx-auto overflow-hidden">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.06] text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/60" />
              <span className="w-3 h-3 rounded-full bg-amber-500/60" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <span className="ml-2 text-slate-400 hidden sm:inline">LedgerAI Live Node · tenant-pk-wholesale-001</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                PostgreSQL RLS Active
              </span>
              <span className="hidden sm:inline text-slate-400">Deterministic Engine v2.2</span>
            </div>
          </div>

          {/* TAB 1: AI & WhatsApp Order Workflow */}
          {activeTab === 'ai-order' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: WhatsApp Ingress Stream */}
                <div className="lg:col-span-5 rounded-2xl bg-[#070B14] p-5 border border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                          WA
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">Al-Madina Traders (Akbari Mandi)</p>
                          <p className="text-[10px] text-slate-400 font-mono">+92 300 8472910 · Verified Customer</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        Cloud API
                      </span>
                    </div>

                    {/* Chat Bubble Simulation */}
                    <div className="space-y-3">
                      <div className="rounded-2xl rounded-tl-sm bg-[#111827] p-3.5 border border-white/[0.06] text-xs text-slate-200">
                        <p className="text-[10px] font-mono text-emerald-400 mb-1 font-bold">Incoming Audio Note (0:14s)</p>
                        <div className="p-2 rounded-xl bg-black/40 border border-white/[0.04] flex items-center justify-between mb-2">
                          <span className="text-[11px] text-slate-300 font-mono">▶ |||||l|l||||||l|ll</span>
                          <span className="text-[10px] text-slate-400 font-mono">14s</span>
                        </div>
                        <p className="text-slate-300 italic">
                          "Bhai 50 bori Premium Sugar aur 20 peti Ghee bhej dein Central Hub se. Kasar pehle wali adjust kar lena."
                        </p>
                        <div className="mt-2 text-[10px] text-slate-400 text-right font-mono">11:42 AM · Delivered</div>
                      </div>

                      {/* Extracted Intent Pill */}
                      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-[11px]">
                        <div className="flex items-center justify-between text-emerald-400 font-mono font-bold mb-1">
                          <div className="flex items-center gap-1.5">
                            <img src={aiMascot} alt="AI Assistant" className="w-4 h-4 rounded-full object-cover" />
                            <span>Whisper STT + Groq LPU</span>
                          </div>
                          <span>Score: 0.94 (High)</span>
                        </div>
                        <p className="text-slate-300 text-xs">
                          Extracted: 50 bags Sugar (50kg), 20 cartons Cooking Oil (16L). Delivery from: Central Hub.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>wamid.HBgLM...941</span>
                    <span className="text-emerald-400">Idempotency Checked</span>
                  </div>
                </div>

                {/* Right: Validation & Guardrail Decision Frame */}
                <div className="lg:col-span-7 rounded-2xl bg-[#070B14] p-5 border border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          Automated IMS &amp; Khata Guardrail Evaluation
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[11px] font-mono font-semibold">
                        PENDING_APPROVAL
                      </span>
                    </div>

                    {/* Extracted Line Items */}
                    <div className="space-y-2 mb-4">
                      <div className="p-3 rounded-xl bg-[#0B1120] border border-white/[0.06] flex items-center justify-between text-xs">
                        <div>
                          <p className="font-semibold text-white">Sugar Grade-A (50kg Bag)</p>
                          <p className="text-[11px] text-slate-400 font-mono">Batch: #SGR-2026-B12 · Exp: Nov 2027 (FEFO Match)</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-white font-mono tabular-nums">50 Bags @ ₨ 7,100</p>
                          <p className="text-[11px] text-emerald-400 font-mono tabular-nums">₨ 355,000</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#0B1120] border border-white/[0.06] flex items-center justify-between text-xs">
                        <div>
                          <p className="font-semibold text-white">Premium Banaspati Ghee (16L Tin)</p>
                          <p className="text-[11px] text-slate-400 font-mono">Batch: #GHE-2026-F04 · Exp: Aug 2027 (FEFO Match)</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-white font-mono tabular-nums">20 Cartons @ ₨ 9,450</p>
                          <p className="text-[11px] text-emerald-400 font-mono tabular-nums">₨ 189,000</p>
                        </div>
                      </div>
                    </div>

                    {/* Guardrail Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                      <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>FEFO Stock Reserved</span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Central Hub: 240 bags unreserved stock. Order reserved for 2 hours.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                        <div className="flex items-center gap-1.5 text-amber-300 font-semibold mb-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Khata Exposure Limit Alert</span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Current DR: ₨ 1,240,000. Limit: ₨ 1,500,000. New exposure ₨ 1,784,000 exceeds limit.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dual Custody Action Box */}
                  <div className="p-3 rounded-xl bg-[#111827] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="text-[11px]">
                      {approvedProposal ? (
                        <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5" />
                          <span>Approved &amp; Reserved: Manager credit override granted. Pick-slip released.</span>
                        </span>
                      ) : (
                        <div>
                          <span className="text-amber-300 font-semibold">Human-in-the-Loop Gate: </span>
                          <span className="text-slate-300">Requires Manager/Owner credit override before dispatch.</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => setApprovedProposal(!approvedProposal)}
                        className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-semibold font-sans transition-all active:scale-95 ${
                          approvedProposal
                            ? 'bg-emerald-600 text-white'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                        }`}
                      >
                        {approvedProposal ? '✓ Approved' : 'Approve & Commit'}
                      </button>
                      <Link
                        to="/coming-soon"
                        className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold font-sans transition-all text-center"
                      >
                        Join Waitlist
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Multi-Warehouse IMS & FEFO */}
          {activeTab === 'ims-fefo' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Warehouse 1 */}
                <div className="p-5 rounded-2xl bg-[#070B14] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      <h4 className="text-xs font-bold text-white font-mono">WH-01 · Main Godown</h4>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      Lahore
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-4">Primary bulk reception and master pallet storage.</p>
                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Physical On-Hand</span>
                        <span className="text-white font-bold tabular-nums">48,250 kg</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '82%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between text-[11px] pt-2 border-t border-white/[0.06]">
                      <span className="text-slate-400">Reserved (Orders):</span>
                      <span className="text-amber-300 font-bold tabular-nums">8,500 kg</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">Net Available:</span>
                      <span className="text-emerald-400 font-bold tabular-nums">39,750 kg</span>
                    </div>
                  </div>
                </div>

                {/* Warehouse 2 */}
                <div className="p-5 rounded-2xl bg-[#070B14] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-teal-400" />
                      <h4 className="text-xs font-bold text-white font-mono">WH-02 · North Depot</h4>
                    </div>
                    <span className="text-[10px] font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full">
                      Gujranwala
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-4">Fast-transit cross-dock facility for FMCG lines.</p>
                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Physical On-Hand</span>
                        <span className="text-white font-bold tabular-nums">22,100 kg</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className="h-full bg-teal-500 rounded-full" style={{ width: '58%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between text-[11px] pt-2 border-t border-white/[0.06]">
                      <span className="text-slate-400">Reserved (Orders):</span>
                      <span className="text-amber-300 font-bold tabular-nums">3,200 kg</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">Net Available:</span>
                      <span className="text-teal-400 font-bold tabular-nums">18,900 kg</span>
                    </div>
                  </div>
                </div>

                {/* Warehouse 3 */}
                <div className="p-5 rounded-2xl bg-[#070B14] border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-sky-400" />
                      <h4 className="text-xs font-bold text-white font-mono">WH-03 · Central Hub</h4>
                    </div>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">
                      Faisalabad
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-4">Textile sizing, starch &amp; industrial chemicals godown.</p>
                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Physical On-Hand</span>
                        <span className="text-white font-bold tabular-nums">64,400 kg</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className="h-full bg-sky-500 rounded-full" style={{ width: '91%' }} />
                      </div>
                    </div>
                    <div className="flex justify-between text-[11px] pt-2 border-t border-white/[0.06]">
                      <span className="text-slate-400">Reserved (Orders):</span>
                      <span className="text-amber-300 font-bold tabular-nums">12,800 kg</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">Net Available:</span>
                      <span className="text-sky-400 font-bold tabular-nums">51,600 kg</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Batch Expiry Allocation Matrix */}
              <div className="rounded-2xl bg-[#070B14] p-5 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                      Earliest-Expiry First-Out (FEFO) Dispatch Queue — Sugar Grade-A
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    fn_reserve_batch_stock (FOR UPDATE Lock)
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-white/[0.08] text-slate-400 text-[11px]">
                        <th className="pb-2">Batch Code</th>
                        <th className="pb-2">Godown</th>
                        <th className="pb-2">Arrival Date</th>
                        <th className="pb-2">Expiry Date</th>
                        <th className="pb-2 text-right">Landed Cost</th>
                        <th className="pb-2 text-right">Available Qty</th>
                        <th className="pb-2 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                      <tr className="text-slate-300">
                        <td className="py-2.5 font-bold text-emerald-400">#SGR-2026-B10</td>
                        <td className="py-2.5">Main Godown</td>
                        <td className="py-2.5 text-slate-400">12 Jan 2026</td>
                        <td className="py-2.5 text-amber-300 font-bold">15 May 2026 (Earliest)</td>
                        <td className="py-2.5 text-right tabular-nums">₨ 6,850/bag</td>
                        <td className="py-2.5 text-right tabular-nums text-white font-bold">140 Bags</td>
                        <td className="py-2.5 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px]">
                            Auto-Allocating
                          </span>
                        </td>
                      </tr>
                      <tr className="text-slate-300">
                        <td className="py-2.5 font-bold text-white">#SGR-2026-B12</td>
                        <td className="py-2.5">Central Hub</td>
                        <td className="py-2.5 text-slate-400">28 Feb 2026</td>
                        <td className="py-2.5 text-slate-300">30 Nov 2026</td>
                        <td className="py-2.5 text-right tabular-nums">₨ 7,020/bag</td>
                        <td className="py-2.5 text-right tabular-nums text-white font-bold">420 Bags</td>
                        <td className="py-2.5 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-300 text-[10px]">
                            Queued #2
                          </span>
                        </td>
                      </tr>
                      <tr className="text-slate-300">
                        <td className="py-2.5 font-bold text-white">#SGR-2026-B18</td>
                        <td className="py-2.5">North Depot</td>
                        <td className="py-2.5 text-slate-400">04 Mar 2026</td>
                        <td className="py-2.5 text-slate-300">15 Mar 2027</td>
                        <td className="py-2.5 text-right tabular-nums">₨ 7,100/bag</td>
                        <td className="py-2.5 text-right tabular-nums text-white font-bold">800 Bags</td>
                        <td className="py-2.5 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-300 text-[10px]">
                            Queued #3
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Udhaar Khata & 00/01 Vouchers */}
          {activeTab === 'khata-vouchers' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Udhaar Khata Aging Matrix */}
                <div className="lg:col-span-6 rounded-2xl bg-[#070B14] p-5 border border-white/[0.06]">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                    <div>
                      <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                        Customer Khata &amp; Exposure Analysis
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">Al-Madina Traders · Credit Limit: ₨ 1,500,000</p>
                    </div>
                    <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      DR ₨ 1,240,000
                    </span>
                  </div>

                  {/* Aging Buckets */}
                  <div className="grid grid-cols-4 gap-2 text-center font-mono mb-5">
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="block text-[10px] text-slate-400 uppercase">0-30 Days</span>
                      <span className="text-xs font-bold text-emerald-400 tabular-nums">₨ 780,000</span>
                      <span className="block text-[9px] text-emerald-400/80 mt-0.5">In Terms</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="block text-[10px] text-slate-400 uppercase">31-60 Days</span>
                      <span className="text-xs font-bold text-teal-400 tabular-nums">₨ 310,000</span>
                      <span className="block text-[9px] text-teal-400/80 mt-0.5">Follow-up</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="block text-[10px] text-slate-400 uppercase">61-90 Days</span>
                      <span className="text-xs font-bold text-amber-300 tabular-nums">₨ 150,000</span>
                      <span className="block text-[9px] text-amber-400/80 mt-0.5">Warning</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-rose-500/20 bg-rose-500/5">
                      <span className="block text-[10px] text-slate-400 uppercase">90+ Days</span>
                      <span className="text-xs font-bold text-rose-400 tabular-nums">₨ 0</span>
                      <span className="block text-[9px] text-emerald-400 mt-0.5">Zero Default</span>
                    </div>
                  </div>

                  {/* FIFO Settlement Log */}
                  <div className="space-y-2 text-xs font-mono">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      FIFO Automatic Payment Allocation (Bank Transfer ₨ 400,000)
                    </p>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04] flex items-center justify-between">
                      <span className="text-slate-300">Allocated to Invoice #INV-01-2026-081</span>
                      <span className="text-emerald-400 font-bold tabular-nums">₨ 250,000 (PAID)</span>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04] flex items-center justify-between">
                      <span className="text-slate-300">Allocated to Invoice #INV-01-2026-092</span>
                      <span className="text-teal-400 font-bold tabular-nums">₨ 150,000 (PARTIAL)</span>
                    </div>
                  </div>
                </div>

                {/* Right: Dual-Series 00/01 Voucher Slip */}
                <div className="lg:col-span-6 rounded-2xl bg-[#070B14] p-5 border border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                      <div className="flex items-center gap-2">
                        <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                        <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                          Sale Voucher (01-Series) Calculation Engine
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        Series 01 · Sale
                      </span>
                    </div>

                    {/* Math Breakdown Table */}
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex justify-between py-1.5 border-b border-white/[0.04] text-slate-300">
                        <span>Gross Merchandise Subtotal (70 items)</span>
                        <span className="font-bold text-white tabular-nums">₨ 544,000.00</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/[0.04] text-slate-300">
                        <span>Trade Discount (Volume Tier 2)</span>
                        <span className="text-rose-400 tabular-nums">- ₨ 8,500.00</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/[0.04] text-slate-300">
                        <span>Freight &amp; Bilty Charge (Mazdoor Union Rate)</span>
                        <span className="text-slate-200 tabular-nums">+ ₨ 4,200.00</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/[0.04] text-slate-300">
                        <span>Loading &amp; Mazdoori (₨ 40 per 50kg bag)</span>
                        <span className="text-slate-200 tabular-nums">+ ₨ 2,000.00</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/[0.04] text-slate-300">
                        <span>FBR WHT Sec 236G (0.5% Active Filer)</span>
                        <span className="text-slate-200 tabular-nums">+ ₨ 2,677.50</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/[0.04] text-slate-300">
                        <span>Mandi Kasar Waiver (Roundoff Settlement)</span>
                        <span className="text-emerald-400 tabular-nums">- ₨ 377.50</span>
                      </div>
                      <div className="flex justify-between py-2 pt-3 border-t border-white/[0.1] text-sm font-bold">
                        <span className="text-white">Net Invoice Payable</span>
                        <span className="text-emerald-400 tabular-nums">₨ 544,000.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Double-Entry Post: DR Accounts Receivable / CR Sales Revenue</span>
                    <span className="text-emerald-400">Immutable</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
