import React, { useState, useRef, useEffect } from 'react';
import { Send, Lock, MessageSquare, Check, Sparkles, FileText, CornerDownLeft } from 'lucide-react';

export default function ChatWorkspace({ ticket, onSendMessage, onResolveTicket, onStatusChange }) {
  const [composerMode, setComposerMode] = useState('reply'); // 'reply' or 'note'
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [ticket?.messages]);

  if (!ticket) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#0b1120] text-slate-500">
        Select a conversation to start
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
    setInputText("Dear Citizen/Trader,\n\nWe acknowledge receipt of your query submitted to the Ministry of Commerce & Industry. Your documents are currently under verification as per standard guidelines.\n\nExpected turnaround: 48 working hours.\n\nRegards,\nGrievance Redressal Cell");
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0b1120] overflow-hidden">
      {/* Header */}
      <div className="h-14 px-4 bg-[#0f172a] border-b border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-blue-400">
            {ticket.contactName.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-sm text-white">{ticket.contactName}</h3>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono border border-slate-700">
                IEC: {ticket.iec}
              </span>
              <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-medium">
                {ticket.desk}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">{ticket.title}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <select
            value={ticket.status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded px-2.5 py-1 focus:outline-none"
          >
            <option value="Open">Status: Open</option>
            <option value="Pending">Status: Pending Review</option>
            <option value="Escalated">Status: Escalated to L3</option>
            <option value="Resolved">Status: Resolved</option>
          </select>
        </div>
      </div>

      {/* Messages Stream */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {ticket.messages.map((m) => {
          if (m.type === 'system') {
            return (
              <div key={m.id || Math.random()} className="flex justify-center my-2">
                <div className="bg-slate-900/90 border border-slate-800 text-slate-400 text-[11px] px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow-sm">
                  <span>{m.text}</span>
                </div>
              </div>
            );
          }

          if (m.type === 'user') {
            return (
              <div key={m.id || Math.random()} className="flex flex-col space-y-1 max-w-2xl">
                <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-200">{m.sender}</span>
                  <span>•</span>
                  <span className="font-mono">{m.time}</span>
                  <span className="bg-blue-900/40 text-blue-300 text-[10px] px-1.5 py-0.2 rounded border border-blue-800/50">
                    {ticket.channel}
                  </span>
                </div>
                <div className="bg-slate-900 border border-slate-800 text-slate-200 text-xs p-3.5 rounded-2xl rounded-tl-sm shadow leading-relaxed whitespace-pre-line">
                  {m.text}
                </div>
              </div>
            );
          }

          if (m.type === 'agent') {
            return (
              <div key={m.id || Math.random()} className="flex flex-col space-y-1 max-w-2xl ml-auto items-end">
                <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                  <span className="font-semibold text-blue-400">{m.sender}</span>
                  <span>•</span>
                  <span className="font-mono">{m.time}</span>
                  <span className="bg-emerald-900/40 text-emerald-300 text-[10px] px-1.5 py-0.2 rounded border border-emerald-800/50">
                    Official Response
                  </span>
                </div>
                <div className="bg-blue-600/90 text-white text-xs p-3.5 rounded-2xl rounded-tr-sm shadow leading-relaxed whitespace-pre-line border border-blue-500">
                  {m.text}
                </div>
              </div>
            );
          }

          if (m.type === 'note') {
            return (
              <div key={m.id || Math.random()} className="flex justify-center my-2 w-full">
                <div className="bg-amber-950/40 border border-amber-800/60 text-amber-200 text-xs p-3 rounded-lg w-full max-w-xl">
                  <div className="flex items-center justify-between font-bold text-[11px] text-amber-400 mb-1">
                    <span>🔒 Internal Ministry Note ({m.sender})</span>
                    <span className="font-mono text-[10px]">{m.time}</span>
                  </div>
                  <p className="leading-relaxed">{m.text}</p>
                </div>
              </div>
            );
          }

          return null;
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* AI Quick Suggestion Banner */}
      <div className="bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border-t border-blue-900/40 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="font-semibold text-blue-300">AI Knowledge Suggestion Available:</span>
          <span className="text-slate-300 truncate max-w-md">
            {ticket.clauses?.[0]?.title || "Gazette clause matched"}
          </span>
        </div>
        <button
          onClick={applyAiDraft}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-2.5 py-1 rounded font-medium flex items-center space-x-1 shadow transition"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Insert AI Draft</span>
        </button>
      </div>

      {/* Reply Composer */}
      <div className="p-3 bg-[#0f172a] border-t border-slate-800 shrink-0">
        {/* Mode Switch: Public Reply vs Private Note */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setComposerMode('reply')}
              className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1 transition ${
                composerMode === 'reply' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Public Official Reply</span>
            </button>
            <button
              onClick={() => setComposerMode('note')}
              className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1 transition ${
                composerMode === 'note' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Internal Ministry Note (L2/L3)</span>
            </button>
          </div>

          <div className="flex items-center space-x-2 text-[11px] text-slate-400">
            <span className="font-mono bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">/canned</span>
            <span className="font-mono bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 flex items-center space-x-1">
              <span>Ctrl+Enter</span>
              <CornerDownLeft className="w-3 h-3 inline" />
            </span>
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
              ? "Type your official response to the trader or use '/' for canned templates..."
              : "Write an internal note for L2/L3 officers (only ministry staff can view this)..."
          }
          className={`w-full rounded-lg p-2.5 text-xs focus:outline-none resize-none font-normal transition ${
            composerMode === 'reply'
              ? 'bg-slate-900 border border-slate-700 text-slate-200 placeholder-slate-500 focus:border-blue-500'
              : 'bg-amber-950/20 border border-amber-800/60 text-amber-200 placeholder-amber-400/50 focus:border-amber-500'
          }`}
        />

        {/* Bottom Actions */}
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800">
          <div className="flex items-center space-x-2">
            <button
              onClick={applyAiDraft}
              className="text-xs bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-600/50 px-2.5 py-1 rounded flex items-center space-x-1.5 transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Auto-Synthesize Answer</span>
            </button>

            <button
              onClick={insertCanned}
              className="text-xs bg-slate-800 text-slate-300 hover:text-white px-2 py-1 rounded flex items-center space-x-1 transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Canned Template</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onResolveTicket}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded font-medium border border-slate-700 transition flex items-center space-x-1"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Resolve</span>
            </button>
            <button
              onClick={handleSend}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded font-semibold shadow-md flex items-center space-x-1 transition"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
