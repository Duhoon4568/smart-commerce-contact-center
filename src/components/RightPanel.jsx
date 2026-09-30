import React, { useState } from 'react';
import { Bot, Building2, Clock, AlertTriangle, FileText } from 'lucide-react';

export default function RightPanel({ ticket, onInsertClause, onProposeFaq }) {
  const [activeTab, setActiveTab] = useState('copilot');

  if (!ticket) return null;

  return (
    <div className="w-80 lg:w-96 bg-[#0f172a] border-l border-slate-800 flex flex-col shrink-0">
      {/* Header Tabs */}
      <div className="flex border-b border-slate-800 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('copilot')}
          className={`flex-1 py-3 text-center transition flex items-center justify-center space-x-1 ${
            activeTab === 'copilot'
              ? 'border-b-2 border-blue-500 text-blue-400 bg-slate-800/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Bot className="w-3.5 h-3.5" />
          <span>AI Knowledge RAG</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`flex-1 py-3 text-center transition flex items-center justify-center space-x-1 ${
            activeTab === 'profile'
              ? 'border-b-2 border-blue-500 text-blue-400 bg-slate-800/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>Trader / IEC</span>
        </button>

        <button
          onClick={() => setActiveTab('sla')}
          className={`flex-1 py-3 text-center transition flex items-center justify-center space-x-1 ${
            activeTab === 'sla'
              ? 'border-b-2 border-blue-500 text-blue-400 bg-slate-800/40'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>SLA & Audit</span>
        </button>
      </div>

      {/* Tab 1: AI Knowledge Copilot */}
      {activeTab === 'copilot' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Query Analysis Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">AI Classification</span>
              <span className="text-[11px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-mono">
                {ticket.aiMatch} Confidence
              </span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Department:</span>
                <span className="font-medium text-amber-400">{ticket.desk}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Policy Category:</span>
                <span className="font-medium text-slate-200">{ticket.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">HS Code:</span>
                <span className="font-mono text-slate-300">{ticket.hsCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Sentiment:</span>
                <span className="text-rose-400 font-medium">{ticket.sentiment}</span>
              </div>
            </div>
          </div>

          {/* Retrieved Gazette Clauses */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                <span>📜 Cited Ministry Notifications</span>
              </h3>
              <span className="text-[10px] text-blue-400 font-mono">
                {ticket.clauses?.length || 0} Retrieved
              </span>
            </div>

            <div className="space-y-2.5">
              {ticket.clauses?.map((c, cIdx) => (
                <div key={cIdx} className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-1.5 hover:border-slate-700 transition">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs text-white">{c.title}</h4>
                    <span className="text-[10px] bg-slate-800 text-blue-400 px-1.5 py-0.5 rounded font-mono">
                      Vector Hit #{cIdx + 1}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-mono">{c.citation}</p>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{c.text}</p>
                  <div className="pt-1 flex items-center justify-between">
                    <button
                      onClick={() => onInsertClause(c.text)}
                      className="text-[10px] text-blue-400 hover:text-blue-300 font-semibold flex items-center space-x-1"
                    >
                      <FileText className="w-3 h-3" />
                      <span>+ Insert Clause</span>
                    </button>
                    <span className="text-[10px] text-slate-500">Source: Official Gazette PDF</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge Gap & Trend Alert */}
          <div className="bg-amber-950/30 border border-amber-800/40 rounded-lg p-3 text-xs space-y-1.5">
            <div className="flex items-center space-x-1.5 text-amber-400 font-semibold">
              <AlertTriangle className="w-4 h-4" />
              <span>Knowledge Gap Detected</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Over <span className="font-bold text-amber-300">38 exporters</span> asked about this same trade policy clause in the past 7 days.
            </p>
            <button
              onClick={onProposeFaq}
              className="w-full mt-1 bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 border border-amber-500/40 py-1.5 rounded text-[11px] font-semibold transition text-center"
            >
              + Auto-Draft Public Portal FAQ
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Trader Profile */}
      {activeTab === 'profile' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-2">
            <h4 className="font-bold text-white text-sm">{ticket.contactName}</h4>
            <p className="text-[11px] text-slate-400">{ticket.profile?.sector}</p>
            <div className="pt-2 border-t border-slate-800 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">IEC Number:</span>
                <span className="font-mono text-blue-400">{ticket.iec}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">GSTIN:</span>
                <span className="font-mono text-slate-300">{ticket.gstin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Enterprise Scale:</span>
                <span className="text-emerald-400 font-medium">{ticket.profile?.scale}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Annual Turnover:</span>
                <span className="font-mono text-slate-300">{ticket.profile?.turnover}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Registered City:</span>
                <span className="text-slate-300">{ticket.profile?.city}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-2">
            <h4 className="font-semibold text-slate-300 text-xs uppercase tracking-wider">Past Grievances History</h4>
            <div className="p-2 bg-slate-800/60 rounded border border-slate-700/50">
              <div className="flex justify-between font-medium">
                <span className="text-slate-200">APEDA Phytosanitary Cert</span>
                <span className="text-emerald-400">Resolved</span>
              </div>
              <p className="text-slate-400 text-[10px] mt-0.5">Ticket #DG-8921 • Closed 14 May 2026</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: SLA & Compliance */}
      {activeTab === 'sla' && (
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider font-semibold">Citizen Charter SLA</span>
              <span className="text-emerald-400 font-mono text-xs">On Track</span>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">Time Remaining:</span>
                <span className="text-amber-400 font-bold font-mono">3h 42m</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>Opened: Today 10:15 AM</span>
                <span>Max Limit: 48h</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-2">
            <h4 className="font-semibold text-slate-300 text-xs">Immutable Audit Log (Ministry Compliance)</h4>
            <ul className="text-[11px] text-slate-400 space-y-2 border-l-2 border-slate-800 pl-3">
              <li>
                <p className="text-slate-300 font-medium">Ticket Created via Portal</p>
                <p className="text-[10px] text-slate-500">10:15:22 IST</p>
              </li>
              <li>
                <p className="text-blue-300 font-medium">AI Triage: Intent Classified</p>
                <p className="text-[10px] text-slate-500">10:15:24 IST (2 sec)</p>
              </li>
              <li>
                <p className="text-slate-300 font-medium">Assigned to Officer R. Sharma</p>
                <p className="text-[10px] text-slate-500">10:15:25 IST</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
