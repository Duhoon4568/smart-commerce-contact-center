import React, { useState, useRef, useEffect } from 'react';
import { Send, Lock, FileText, CheckCircle2, Sparkles, Scale, Building, ArrowUpRight, Stamp } from 'lucide-react';

export default function ChatWorkspace({ ticket, onSendMessage, onResolveTicket, onStatusChange }) {
  const [composerMode, setComposerMode] = useState('reply'); // 'reply' (Formal Order) or 'note' (Green Sheet Note)
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [ticket?.messages]);

  if (!ticket) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#080d1a] text-slate-500">
        Select a Grievance Dossier to view official proceedings
      </div>
    );
  }

  const handleSend = () => {
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim(), composerMode);
    setInputText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleSend();
    }
  };

  const applyAiDraft = () => {
    setInputText(ticket.suggestedDraft || '');
  };

  const insertCanned = () => {
    setInputText("GOVERNMENT OF INDIA\nMINISTRY OF COMMERCE & INDUSTRY\nOFFICE OF THE GRIEVANCE REDRESSAL OFFICER\n\nTo,\nThe Authorized Signatory,\n\nSub: Acknowledgement of Trade Grievance Reference No: " + ticket.id + "\n\nSir/Madam,\nYour representation regarding trade facilitation under Foreign Trade Policy (FTP 2023) has been officially logged in the Ministry Register. Scrutiny is in progress under the Citizen Charter SLA.\n\nYours faithfully,\nOfficer on Special Duty (OSD)");
  };

  return (
    <div className="flex-1 flex flex-col bg-[#080d1a] overflow-hidden">
      
      {/* Official Case File Docket Header */}
      <div className="px-5 py-3 bg-[#0c1427] border-b border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sm text-amber-400 font-mono shadow">
            {ticket.departmentCode}
          </div>
          <div>
            <div className="flex items-center space-x-2.5">
              <h2 className="font-extrabold text-sm text-white">{ticket.contactName}</h2>
              <span className="text-[10px] bg-slate-800/90 text-slate-300 px-2 py-0.5 rounded font-mono border border-slate-700">
                IEC: {ticket.iec}
              </span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-semibold">
                {ticket.desk}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              <span className="font-mono text-slate-500">Subject: </span>
              {ticket.title}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2.5">
          <span className="text-[11px] text-slate-400">File Status:</span>
          <select
            value={ticket.status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-lg px-3 py-1.5 focus:outline-none font-semibold"
          >
            <option value="Open">Status: Under Scrutiny</option>
            <option value="Pending">Status: Pending Verification</option>
            <option value="Escalated">Status: Escalated to Commissioner (L3)</option>
            <option value="Resolved">Status: Order Issued & Resolved</option>
          </select>
        </div>
      </div>

      {/* Case Proceedings Timeline & Legal Submissions Stream */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {ticket.messages.map((m) => {
          // Automated AI Triage Event
          if (m.type === 'system') {
            return (
              <div key={m.id || Math.random()} className="flex justify-center my-3">
                <div className="bg-slate-900/95 border border-indigo-500/30 text-indigo-300 text-xs px-4 py-2 rounded-xl flex items-center space-x-2 shadow-lg max-w-2xl">
                  <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="font-medium leading-relaxed">{m.text}</span>
                </div>
              </div>
            );
          }

          // Citizen / Trader Formal Submission (Memorandum Style)
          if (m.type === 'user') {
            return (
              <div key={m.id || Math.random()} className="bg-[#0f172a] border border-slate-700/80 rounded-2xl p-4 max-w-3xl shadow-md">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                      Official Trader Representation
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 font-medium">{m.sender}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-mono">
                    <span>{m.time}</span>
                    <span className="bg-blue-900/30 text-blue-300 text-[10px] px-2 py-0.5 rounded border border-blue-700/40">
                      Channel: {ticket.channel}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-slate-200 leading-relaxed whitespace-pre-line font-sans font-normal">
                  {m.text}
                </div>
              </div>
            );
          }

          // Officer Official Response (Letterhead Style)
          if (m.type === 'agent') {
            return (
              <div key={m.id || Math.random()} className="bg-blue-950/40 border border-blue-500/40 rounded-2xl p-4 max-w-3xl ml-auto shadow-lg">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-blue-900/50">
                  <div className="flex items-center space-x-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-emerald-300 uppercase tracking-wider text-[11px]">
                      Government Clarification Order
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-blue-300 font-semibold">{m.sender}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-mono">
                    <span>{m.time}</span>
                    <span className="bg-emerald-950 text-emerald-300 text-[10px] px-2 py-0.5 rounded border border-emerald-700/50">
                      Digitally Dispatched
                    </span>
                  </div>
                </div>
                <div className="text-xs text-blue-100 leading-relaxed whitespace-pre-line font-sans">
                  {m.text}
                </div>
              </div>
            );
          }

          // Confidential Internal Green Sheet Note (Indian e-Office Style)
          if (m.type === 'note') {
            return (
              <div key={m.id || Math.random()} className="bg-emerald-950/30 border-2 border-dashed border-emerald-600/40 rounded-xl p-3.5 max-w-2xl mx-auto shadow">
                <div className="flex items-center justify-between font-bold text-xs text-emerald-400 mb-1.5">
                  <span className="flex items-center space-x-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    <span>e-Office Green-Sheet Note (Confidential Internal Noting)</span>
                  </span>
                  <span className="font-mono text-[10px]">{m.sender} • {m.time}</span>
                </div>
                <p className="text-xs text-emerald-200 leading-relaxed font-sans">{m.text}</p>
              </div>
            );
          }

          return null;
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* AI Legal Recommendation Bar */}
      <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border-t border-blue-900/60 px-5 py-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs">
          <Scale className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-bold text-amber-300">RAG Legal Precedent Available:</span>
          <span className="text-slate-300 truncate max-w-lg">
            {ticket.clauses?.[0]?.title || "Relevant Trade Gazette Clause Indexed"}
          </span>
        </div>
        <button
          onClick={applyAiDraft}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1.5 rounded-lg font-bold flex items-center space-x-1.5 shadow transition"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Synthesize Gazette Order</span>
        </button>
      </div>

      {/* Official Response Composer */}
      <div className="p-4 bg-[#0c1427] border-t border-slate-800 shrink-0">
        
        {/* Mode Selector */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setComposerMode('reply')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition ${
                composerMode === 'reply'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white bg-slate-800/80'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Official Clarification Order (Public)</span>
            </button>
            <button
              onClick={() => setComposerMode('note')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition ${
                composerMode === 'note'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white bg-slate-800/80'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Confidential Internal Noting (L2/L3)</span>
            </button>
          </div>

          <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-mono">
            <span>Press Ctrl+Enter to Dispatch</span>
          </div>
        </div>

        {/* Text Input */}
        <textarea
          rows={3}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            composerMode === 'reply'
              ? "Draft official communication or Gazette-backed decision to be issued to the exporter..."
              : "Enter confidential remarks or movement instructions for Ministry Joint Secretary / Commissioner..."
          }
          className={`w-full rounded-xl p-3 text-xs focus:outline-none resize-none font-normal transition ${
            composerMode === 'reply'
              ? 'bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-blue-500'
              : 'bg-emerald-950/20 border border-emerald-700/60 text-emerald-200 placeholder-emerald-400/50 focus:border-emerald-500'
          }`}
        />

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-800">
          <div className="flex items-center space-x-2">
            <button
              onClick={applyAiDraft}
              className="text-xs bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-600/50 px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Auto-Fill Legal Draft</span>
            </button>

            <button
              onClick={insertCanned}
              className="text-xs bg-slate-800 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition font-medium"
            >
              <Stamp className="w-3.5 h-3.5" />
              <span>Official Format Template</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onResolveTicket}
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg font-bold border border-slate-700 transition flex items-center space-x-1.5"
            >
              <span>Mark File Disposed</span>
            </button>
            <button
              onClick={handleSend}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-lg font-extrabold shadow-md flex items-center space-x-1.5 transition"
            >
              <span>Dispatch Order</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
