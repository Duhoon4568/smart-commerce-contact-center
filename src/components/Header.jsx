import React from 'react';
import { Shield, BookOpen, BarChart3, FileText, CheckCircle2, PanelRightClose, PanelRightOpen } from 'lucide-react';

export default function Header({ currentView, setCurrentView, ticketsCount, isRightPanelOpen, setIsRightPanelOpen }) {
  return (
    <header className="bg-[#0b1329] border-b border-slate-800/80 px-6 py-3 flex items-center justify-between z-20 shrink-0">
      {/* Brand & Emblem */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center justify-center font-bold text-white shadow-lg shadow-amber-950/40 text-xl border border-amber-400/30 shrink-0">
          🏛️
        </div>
        <div>
          <div className="flex items-center space-x-2.5">
            <span className="font-extrabold text-base tracking-wide text-white font-sans">
              AKM PORTAL
            </span>
            <span className="text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Gov-AI Active</span>
            </span>
            <span className="text-[11px] bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-0.5 rounded font-mono">
              Ministry of Commerce & Industry
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Automated Knowledge & Commercial Trade Grievance Redressal System
          </p>
        </div>
      </div>

      {/* Main Navigation Views - Spacious & Pill Styled */}
      <nav className="flex items-center space-x-2 bg-slate-900/80 border border-slate-800 rounded-xl p-1 text-xs font-semibold">
        <button
          onClick={() => setCurrentView('inbox')}
          className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition ${
            currentView === 'inbox'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Case Dossiers</span>
          <span className="bg-blue-800/80 text-[10px] px-2 py-0.5 rounded-full font-mono font-bold">
            {ticketsCount}
          </span>
        </button>

        <button
          onClick={() => setCurrentView('kb')}
          className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition ${
            currentView === 'kb'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Gazette Intelligence (RAG)</span>
        </button>

        <button
          onClick={() => setCurrentView('analytics')}
          className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition ${
            currentView === 'analytics'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Executive Policy Radar</span>
        </button>
      </nav>

      {/* Officer Credentials & Toggle Right Panel */}
      <div className="flex items-center space-x-4">
        {currentView === 'inbox' && (
          <button
            onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
            title={isRightPanelOpen ? "Collapse Gazette Intelligence" : "Expand Gazette Intelligence"}
            className={`p-2 rounded-lg border transition flex items-center space-x-1.5 text-xs font-medium ${
              isRightPanelOpen
                ? 'bg-slate-800/80 border-slate-700 text-blue-400 hover:bg-slate-800'
                : 'bg-blue-950/40 border-blue-800/60 text-blue-300 hover:bg-blue-900/50'
            }`}
          >
            {isRightPanelOpen ? <PanelRightClose className="w-4 h-4" /> : <PanelRightOpen className="w-4 h-4" />}
            <span className="hidden xl:inline">{isRightPanelOpen ? "Hide Intelligence" : "Show Intelligence"}</span>
          </button>
        )}

        <div className="flex items-center space-x-3 pl-3 border-l border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-amber-400 shadow">
            RS
          </div>
          <div className="text-left hidden lg:block">
            <div className="text-xs font-bold text-white flex items-center space-x-1.5">
              <span>Rajesh Sharma</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-[11px] text-slate-400 font-mono">DGFT Zonal Grievance Officer</div>
          </div>
        </div>
      </div>
    </header>
  );
}
