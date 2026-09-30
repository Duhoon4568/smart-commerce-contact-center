import React, { useState, useRef, useEffect } from 'react';
import { Send, Lock, FileText, CheckCircle2, Sparkles, Scale, Mic, Shield, Smartphone, Globe, Activity, Check, Download, AlertCircle } from 'lucide-react';

export default function ChatWorkspace({ ticket, onSendMessage, onResolveTicket, onStatusChange }) {
  const [composerMode, setComposerMode] = useState('reply'); // 'reply' (Public Order) or 'note' (Green Sheet)
  const [inputText, setInputText] = useState('');
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState(null);
  const [isAgentRunning, setIsAgentRunning] = useState(false);
  const [agentPipelineSteps, setAgentPipelineSteps] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [ticket?.messages]);

  if (!ticket) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#070c18] text-slate-500 space-y-3">
        <FileText className="w-12 h-12 text-slate-700" />
        <p className="text-sm font-medium">Select a commercial case file to review proceedings</p>
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

  // Simulates Multi-Agent Pipeline Execution
  const triggerMultiAgentPipeline = () => {
    setIsAgentRunning(true);
    setAgentPipelineSteps([]);

    const steps = [
      { agent: "1. PII Masker", result: "Aadhaar, PAN & Mobile masked for MeitY / NIC compliance", time: "14ms" },
      { agent: "2. Bhashini Indic Engine", result: "Language detected & translated to standard regulatory English", time: "52ms" },
      { agent: "3. Triage & Intent", result: `Department: ${ticket.desk} | HS Code: ${ticket.hsCode}`, time: "85ms" },
      { agent: "4. ICEGATE / DGFT Verifier", result: "Verified Shipping Bill & IEC in Customs EDI Gateway", time: "140ms" },
      { agent: "5. Gazette RAG Retriever", result: "Vector Precedent Hit: FTP 2023 Gazette Notification", time: "220ms" },
      { agent: "6. Legal Order Drafter", result: "Formal Government Resolution Order synthesized", time: "310ms" }
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setAgentPipelineSteps((prev) => [...(prev || []), step]);
        if (idx === steps.length - 1) {
          setIsAgentRunning(false);
          setInputText(ticket.suggestedDraft || '');
        }
      }, (idx + 1) * 300);
    });
  };

  const toggleVoiceRecording = () => {
    if (isVoiceRecording) {
      setIsVoiceRecording(false);
    } else {
      setIsVoiceRecording(true);
      setTimeout(() => {
        setIsVoiceRecording(false);
        setVoiceTranscript({
          sourceAudio: "Voice Note Recorded (Hindi Dialect)",
          indicText: "सर, हमारा एक्सपोर्ट रोड़टेप सब्सिडी क्यों रुका है? कृपया मदद करें।",
          translatedText: "Sir, why is our RoDTEP export subsidy on hold? Kindly assist us."
        });
        setInputText(ticket.suggestedDraft || '');
      }, 2000);
    }
  };

  const insertCanned = () => {
    setInputText("GOVERNMENT OF INDIA\nMINISTRY OF COMMERCE & INDUSTRY\nOFFICE OF THE GRIEVANCE REDRESSAL OFFICER\n\nTo,\nThe Authorized Signatory,\n\nSub: Acknowledgement of Trade Grievance Reference No: " + ticket.id + "\n\nSir/Madam,\nYour representation regarding trade facilitation under Foreign Trade Policy (FTP 2023) has been officially logged in the Ministry Register. Scrutiny is in progress under the Citizen Charter SLA.\n\nYours faithfully,\nOfficer on Special Duty (OSD)");
  };

  return (
    <main className="flex-1 flex flex-col bg-[#070c18] overflow-hidden">
      
      {/* Docket Header - Clean & Spacious */}
      <div className="px-6 py-4 bg-[#0c142b] border-b border-slate-800/80 flex items-center justify-between shrink-0">
        <div className="space-y-1">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              {ticket.id}
            </span>
            <h1 className="font-extrabold text-base text-white tracking-tight">
              {ticket.contactName}
            </h1>
            <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full font-mono border border-slate-700/60">
              IEC: {ticket.iec}
            </span>
            <span className="text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-medium flex items-center space-x-1">
              <Shield className="w-3 h-3 text-emerald-400" />
              <span>PII Masked</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <span className="text-slate-300 font-semibold">{ticket.desk}</span>
            <span>•</span>
            <span className="text-amber-300 font-medium">HS Code: {ticket.hsCode}</span>
            <span>•</span>
            <span className="text-slate-400">📍 {ticket.sender}</span>
          </div>
        </div>

        {/* Status Dropdown */}
        <div className="flex items-center space-x-3">
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">Action Status:</span>
          <select
            value={ticket.status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3.5 py-2 focus:outline-none font-bold"
          >
            <option value="Open">Status: Active Inquiry</option>
            <option value="Pending">Status: Pending Verification</option>
            <option value="Escalated">Status: Escalated to Commissioner</option>
            <option value="Resolved">Status: Order Issued & Disposed</option>
          </select>
        </div>
      </div>

      {/* Voice Assistant Notification Banner */}
      {voiceTranscript && (
        <div className="bg-orange-950/40 border-b border-orange-800/50 px-6 py-3 flex items-center justify-between text-xs animate-fadeIn">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center font-bold">
              <Mic className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-orange-300">Bhashini Voice Note Transcribed</p>
              <p className="text-slate-300 mt-0.5">
                <span className="italic text-slate-400">"{voiceTranscript.indicText}"</span>
                <span className="mx-2 text-slate-500">→</span>
                <span className="text-emerald-300 font-medium">"{voiceTranscript.translatedText}"</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => setVoiceTranscript(null)}
            className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/60"
          >
            ✕ Dismiss
          </button>
        </div>
      )}

      {/* Multi-Agent Live Execution Drawer */}
      {agentPipelineSteps && agentPipelineSteps.length > 0 && (
        <div className="bg-slate-900/95 border-b border-indigo-900/50 p-4 space-y-2.5 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-indigo-300 flex items-center space-x-2">
              <Activity className="w-4 h-4 text-indigo-400 animate-spin" />
              <span>Multi-Agent Autonomous Pipeline (6 Specialized Agents)</span>
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              {isAgentRunning ? "Running Agents..." : "Execution Complete • Draft Order Ready"}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
            {agentPipelineSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-xs">
                <div className="flex justify-between items-center text-slate-200 font-semibold mb-1">
                  <span>{step.agent}</span>
                  <span className="font-mono text-emerald-400 text-[10px]">{step.time}</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-snug">{step.result}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Reading & Proceedings Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5">
        
        {ticket.messages.map((m) => {
          if (m.type === 'system') {
            return (
              <div key={m.id || Math.random()} className="flex justify-center my-3">
                <div className="bg-slate-900/90 border border-indigo-500/20 text-indigo-300 text-xs px-4 py-2 rounded-xl flex items-center space-x-2 shadow-sm max-w-2xl">
                  <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="font-medium leading-relaxed">{m.text}</span>
                </div>
              </div>
            );
          }

          // Trader Formal Submission - Paper Document Presentation
          if (m.type === 'user') {
            return (
              <div key={m.id || Math.random()} className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 max-w-4xl shadow-md">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                    <span className="font-extrabold text-xs text-white uppercase tracking-wider">
                      Commercial Exporter Petition / Representation
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 text-xs font-semibold">{m.sender}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                    <span>{m.time}</span>
                    <span className="bg-blue-950 text-blue-300 text-[11px] px-2.5 py-0.5 rounded-full border border-blue-800/40">
                      {ticket.channel}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-slate-200 leading-relaxed whitespace-pre-line font-sans font-normal space-y-2">
                  {m.text}
                </div>
              </div>
            );
          }

          // Officer Official Response (Letterhead Style)
          if (m.type === 'agent') {
            return (
              <div key={m.id || Math.random()} className="bg-blue-950/30 border border-blue-500/40 rounded-2xl p-6 max-w-4xl ml-auto shadow-lg">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-blue-900/40">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="font-extrabold text-xs text-emerald-300 uppercase tracking-wider">
                      Formal Ministry Resolution Order
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-blue-200 text-xs font-semibold">{m.sender}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                    <span>{m.time}</span>
                    <span className="bg-emerald-950 text-emerald-300 text-[11px] px-2.5 py-0.5 rounded-full border border-emerald-700/50">
                      Dispatched
                    </span>
                  </div>
                </div>

                <div className="text-sm text-blue-100 leading-relaxed whitespace-pre-line font-sans">
                  {m.text}
                </div>
              </div>
            );
          }

          // Confidential Internal Noting (Green Sheet)
          if (m.type === 'note') {
            return (
              <div key={m.id || Math.random()} className="bg-emerald-950/20 border-2 border-dashed border-emerald-600/40 rounded-2xl p-5 max-w-3xl mx-auto shadow">
                <div className="flex items-center justify-between font-bold text-xs text-emerald-400 mb-2">
                  <span className="flex items-center space-x-2">
                    <Lock className="w-4 h-4" />
                    <span>e-Office Green-Sheet Note (Confidential Internal Noting)</span>
                  </span>
                  <span className="font-mono text-[11px]">{m.sender} • {m.time}</span>
                </div>
                <p className="text-xs text-emerald-200 leading-relaxed font-sans">{m.text}</p>
              </div>
            );
          }

          return null;
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* AI Quick Actions Bar */}
      <div className="bg-[#0b1329] border-t border-slate-800/80 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3 text-xs">
          <Scale className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-bold text-slate-200">Statutory Gazette Precedent:</span>
          <span className="text-slate-400 truncate max-w-md">
            {ticket.clauses?.[0]?.title || "Gazette clause indexed"}
          </span>
        </div>

        <div className="flex items-center space-x-2.5">
          <button
            onClick={toggleVoiceRecording}
            className={`text-xs px-3.5 py-1.5 rounded-xl font-bold flex items-center space-x-2 transition ${
              isVoiceRecording
                ? 'bg-rose-600 text-white animate-pulse'
                : 'bg-orange-600/20 text-orange-300 border border-orange-500/30 hover:bg-orange-600/30'
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>{isVoiceRecording ? "Listening..." : "🎙️ Bhashini Voice"}</span>
          </button>

          <button
            onClick={triggerMultiAgentPipeline}
            disabled={isAgentRunning}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-4 py-1.5 rounded-xl font-bold flex items-center space-x-2 shadow-md transition disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>Run 6-Agent Pipeline</span>
          </button>
        </div>
      </div>

      {/* Response Drafting Suite */}
      <div className="p-6 bg-[#0c142b] border-t border-slate-800/80 shrink-0 space-y-3">
        
        {/* Mode Selector Tabs */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setComposerMode('reply')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-2 transition ${
                composerMode === 'reply'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white bg-slate-800/80'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Official Resolution Order (Public)</span>
            </button>
            
            <button
              onClick={() => setComposerMode('note')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-2 transition ${
                composerMode === 'note'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white bg-slate-800/80'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>Confidential Internal Noting (L2/L3)</span>
            </button>
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
            <span>Press Ctrl+Enter to Dispatch</span>
          </div>
        </div>

        {/* Text Area */}
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
          className={`w-full rounded-2xl p-4 text-xs focus:outline-none resize-none font-normal leading-relaxed transition ${
            composerMode === 'reply'
              ? 'bg-slate-900 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:border-blue-500'
              : 'bg-emerald-950/20 border border-emerald-700/60 text-emerald-200 placeholder-emerald-400/50 focus:border-emerald-500'
          }`}
        />

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setInputText(ticket.suggestedDraft || '')}
              className="text-xs bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 px-3 py-1.5 rounded-xl flex items-center space-x-1.5 transition font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Auto-Fill AI Draft</span>
            </button>

            <button
              onClick={insertCanned}
              className="text-xs bg-slate-800 text-slate-300 hover:text-white px-3 py-1.5 rounded-xl flex items-center space-x-1.5 transition font-medium"
            >
              <span>Standard Format</span>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onResolveTicket}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-xl font-bold border border-slate-700 transition"
            >
              Mark File Disposed
            </button>

            <button
              onClick={handleSend}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-xl font-extrabold shadow-lg shadow-blue-900/40 flex items-center space-x-2 transition"
            >
              <span>Dispatch Order</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </main>
  );
}
