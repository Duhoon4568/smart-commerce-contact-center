import React, { useState } from 'react';
import { BookOpen, Building2, Clock, AlertTriangle, FileText, CheckCircle2, ShieldCheck, Scale, Link2, Hash } from 'lucide-react';

export default function RightPanel({ ticket, onInsertClause, onProposeFaq }) {
  const [activeTab, setActiveTab] = useState('copilot');

  if (!ticket) return null;

  return (
    <div className="w-84 lg:w-96 bg-[#0c1427] border-l border-slate-800 flex flex-col shrink-0">
      
      {/* Top Intelligence Mode Tabs */}
      <div className="flex border-b border-slate-800 text-xs font-bold bg-[#090f1d]">
        <button
          onClick={() => setActiveTab('copilot')}
          className={`flex-1 py-3 text-center transition flex items-center justify-center space-x-1.5 ${
            activeTab === 'copilot'
              ? 'border-b-2 border-blue-500 text-blue-400 bg-slate-800/50'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Scale className="w-3.5 h-3.5" />
          <span>Gazette Intelligence</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`flex-1 py-3 text-center transition flex items-center justify-center space-x-1.5 ${
            activeTab === 'profile'
              ? 'border-b-2 border-blue-500 text-blue-400 bg-slate-800/50'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ICEGATE / GSTN</span>
        </button>

        <button
          onClick={() => setActiveTab('sla')}
          className={`flex-1 py-3 text-center transition flex items-center justify-center space-x-1.5 ${
            activeTab === 'sla'
              ? 'border-b-2 border-blue-500 text-blue-400 bg-slate-800/50'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Charter & Audit</span>
        </button>
      </div>

      {/* Tab 1: Gazette Intelligence (RAG) */}
      {activeTab === 'copilot' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {/* Statutory Assessment Card */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Automated Case Triage
              </span>
              <span className="text-[11px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono font-bold">
                {ticket.aiMatch} Precedent Match
              </span>
            </div>
            
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Jurisdiction:</span>
                <span className="font-bold text-amber-400">{ticket.desk}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Scheme / Policy:</span>
                <span className="font-semibold text-slate-200">{ticket.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">HS / ITC Code:</span>
                <span className="font-mono text-slate-300 font-semibold">{ticket.hsCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Dispute Urgency:</span>
                <span className="text-rose-400 font-bold">{ticket.sentiment}</span>
              </div>
            </div>
          </div>

          {/* Retrieved Gazette Clauses */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-1.5">
                <span>🏛️ Official Gazette Clauses Cited</span>
              </h3>
              <span className="text-[10px] text-blue-400 font-mono font-bold">
                {ticket.clauses?.length || 0} Clauses
              </span>
            </div>

            <div className="space-y-2.5">
              {ticket.clauses?.map((c, cIdx) => (
                <div key={cIdx} className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2 hover:border-slate-700 transition">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs text-white leading-snug">{c.title}</h4>
                    <span className="text-[10px] bg-slate-800 text-amber-400 px-1.5 py-0.5 rounded font-mono font-semibold">
                      Clause #{cIdx + 1}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-mono">{c.citation}</p>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
                    "{c.text}"
                  </p>
                  <div className="pt-1 flex items-center justify-between">
                    <button
                      onClick={() => onInsertClause(c.text)}
                      className="text-[11px] text-blue-400 hover:text-blue-300 font-bold flex items-center space-x-1"
                    >
                      <FileText className="w-3 h-3" />
                      <span>+ Attach Clause to Order</span>
                    </button>
                    <span className="text-[10px] text-slate-500 font-mono">Gazette Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge Gap & Recurring Anomaly Alert */}
          <div className="bg-amber-950/30 border border-amber-800/50 rounded-xl p-3.5 text-xs space-y-2">
            <div className="flex items-center space-x-2 text-amber-400 font-bold">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Recurring Trade Pattern Detected</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              <span className="font-bold text-amber-300">38 trade entities</span> experienced similar rejection under this scheme in the last 7 days.
            </p>
            <button
              onClick={onProposeFaq}
              className="w-full mt-1 bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 border border-amber-500/40 py-2 rounded-lg text-xs font-bold transition text-center shadow"
            >
              + Auto-Draft National Clarification Circular
            </button>
          </div>

        </div>
      )}

      {/* Tab 2: ICEGATE & Enterprise Interoperability Vault */}
      {activeTab === 'profile' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          
          {/* Government Portal Interoperability Sync Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2.5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[11px] font-bold text-slate-300 flex items-center space-x-1.5">
                <Link2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Govt Portal Interoperability Hub</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold">Live Synced</span>
            </div>
            
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">ICEGATE Customs EDI:</span>
                <span className="text-emerald-400 font-semibold flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3 inline" />
                  <span>Port Kolkata (INCCU1)</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">DGFT IEC Status:</span>
                <span className="text-emerald-400 font-semibold">Active & KYC Compliant</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">GSTN Status:</span>
                <span className="text-emerald-400 font-semibold">Active (GSTR-1 Filed)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">MSME Samadhaan:</span>
                <span className="text-blue-300 font-semibold">Eligible (Udyam Verified)</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">
                ✓ Verified Exporter
              </span>
              <span className="text-[10px] text-slate-400 font-mono">MCA Registered</span>
            </div>
            
            <h4 className="font-extrabold text-white text-sm">{ticket.contactName}</h4>
            <p className="text-[11px] text-slate-400 font-medium">{ticket.profile?.sector}</p>
            
            <div className="pt-2.5 border-t border-slate-800 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Import Export Code (IEC):</span>
                <span className="font-mono text-blue-400 font-bold">{ticket.iec}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">GSTIN Identification:</span>
                <span className="font-mono text-slate-300">{ticket.gstin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">MSME Classification:</span>
                <span className="text-emerald-400 font-bold">{ticket.profile?.scale}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Declared Turnover:</span>
                <span className="font-mono text-slate-300 font-semibold">{ticket.profile?.turnover}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Registered Office:</span>
                <span className="text-slate-300">{ticket.profile?.city}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Citizen Charter & Immutable Audit Ledger */}
      {activeTab === 'sla' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          
          {/* Statutory SLA Timer */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider font-bold">
                Citizen Charter Statutory Limit
              </span>
              <span className="text-emerald-400 font-mono text-xs font-bold">Compliant</span>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-slate-300 font-bold">Time to SLA Breach:</span>
                <span className="text-amber-400 font-mono font-extrabold">3h 42m remaining</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-mono">
                <span>Receipt: Today 10:15 AM</span>
                <span>Max Ceiling: 48h</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 italic">
              *If unresolved in 48h, auto-escalation to Joint Secretary (L3) is triggered automatically.
            </p>
          </div>

          {/* Immutable RTI & Audit Trail */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2.5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="font-bold text-slate-200 text-xs flex items-center space-x-1.5">
                <Hash className="w-3.5 h-3.5 text-amber-400" />
                <span>RTI & Audit Hash Trail</span>
              </h4>
              <span className="font-mono text-[9px] text-slate-500">SHA-256 Verified</span>
            </div>
            
            <ul className="text-[11px] text-slate-400 space-y-2.5 border-l-2 border-slate-800 pl-3">
              <li>
                <p className="text-slate-200 font-semibold">Grievance Registered via National Portal</p>
                <p className="text-[10px] text-slate-500 font-mono">10:15:22 IST • IP: 103.21.***</p>
              </li>
              <li>
                <p className="text-blue-300 font-semibold">AI Triage: Vector Match (96% Precedent)</p>
                <p className="text-[10px] text-slate-500 font-mono">10:15:24 IST • Latency: 310ms</p>
              </li>
              <li>
                <p className="text-slate-200 font-semibold">Allocated to Officer Rajesh Sharma</p>
                <p className="text-[10px] text-slate-500 font-mono">10:15:25 IST • Token ID: GOI-7721</p>
              </li>
            </ul>

            <div className="bg-slate-950 p-2 rounded text-[10px] font-mono text-slate-400 break-all border border-slate-800">
              Hash: 9f83a12c8b74e6d30f5a9b1c7e4d8a2f3b6c9e1
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
