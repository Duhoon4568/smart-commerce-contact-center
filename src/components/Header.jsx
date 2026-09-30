import React from 'react';
import { Sparkles, FileText, BookOpen, BarChart3, PanelRightClose, PanelRightOpen, CheckCircle2 } from 'lucide-react';

export default function Header({ currentView, setCurrentView, ticketsCount, isRightPanelOpen, setIsRightPanelOpen }) {
  return (
    <header className="bg-[#0b1329] border-b border-slate-800/80 px-6 py-3.5 flex items-center justify-between z-20 shrink-0">
      {/* Brand & Emblem */}
      <div className="flex items-center space-x-3.5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center justify-center font-bold text-white shadow-lg shadow-amber-950/40 text-xl border border-amber-400/30 shrink-0">
          🏛️
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-base tracking-wide text-white font-sans">
              AKM PORTAL
            </span>
            <span className="text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AI Active</span>
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Ministry of Commerce & Industry • Automated Knowledge & Smart Contact Center
          </p>
        </div>
      </div>

      {/* Main Navigation Views - Simple, Clean, Non-Congested */}
      <nav className="flex items-center space-x-2 bg-slate-900/90 border border-slate-800 rounded-xl p-1 text-xs font-semibold">
        
        {/* Core Feature 1: The Exporter Query & Agent Handoff Portal */}
        <button
          onClick={() => setCurrentView('portal')}
          className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition ${
            currentView === 'portal'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40 font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>🎯 AI Query & Agent Handoff</span>
        </button>

        {/* Core Feature 2: Ministry Officer Desk */}
        <button
          onClick={() => setCurrentView('inbox')}
          className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition ${
            currentView === 'inbox'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40 font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>🏛️ Ministry Officer Desk</span>
          <span className="bg-blue-800/80 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold">
            {ticketsCount}
          </span>
        </button>

        {/* Core Feature 3: Gazette Knowledge Base */}
        <button
          onClick={() => setCurrentView('kb')}
          className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition ${
            currentView === 'kb'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40 font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>📚 Gazette Knowledge (RAG)</span>
        </button>

        {/* Core Feature 4: Policy Blindspot Radar */}
        <button
          onClick={() => setCurrentView('analytics')}
          className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition ${
            currentView === 'analytics'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40 font-bold'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>📊 Policy Radar</span>
        </button>
      </nav>

      {/* Right User & Panel Controls */}
      <div className="flex items-center space-x-3">
        {currentView === 'inbox' && (
          <button
            onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 transition ${
              isRightPanelOpen
                ? 'bg-slate-800/90 border-slate-700 text-blue-300'
                : 'bg-blue-950/40 border-blue-800/60 text-blue-300'
            }`}
          >
            {isRightPanelOpen ? <PanelRightClose className="w-4 h-4" /> : <PanelRightOpen className="w-4 h-4" />}
            <span className="hidden xl:inline">{isRightPanelOpen ? "Hide Gazette Panel" : "Show Gazette Panel"}</span>
          </button>
        )}

        <div className="flex items-center space-x-2.5 pl-2 border-l border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-amber-400">
            RS
          </div>
          <div className="text-left hidden lg:block">
            <div className="text-xs font-bold text-white flex items-center space-x-1">
              <span>Rajesh Sharma</span>
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="text-[10px] text-slate-400 font-mono">DGFT Zonal Officer</div>
          </div>
        </div>
      </div>
    </header>
  );
}
