import React from 'react';
import { Shield, BookOpen, BarChart3, FileText, CheckCircle2, Award } from 'lucide-react';

export default function Header({ currentView, setCurrentView, ticketsCount }) {
  return (
    <header className="bg-[#0c1427] border-b border-slate-800 px-4 py-2.5 flex items-center justify-between z-20 shrink-0">
      {/* Ministry Insignia & Platform Branding */}
      <div className="flex items-center space-x-3.5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 flex items-center justify-center font-bold text-white shadow-lg shadow-amber-950/40 text-xl border border-amber-400/40 shrink-0">
          🏛️
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-sm tracking-wider text-white uppercase font-sans">
              AKM-PORTAL
            </span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-semibold flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Gov-AI Active</span>
            </span>
            <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-1.5 py-0.5 rounded font-mono">
              e-Office v3.8
            </span>
          </div>
          <p className="text-[11px] text-slate-400 leading-tight">
            Automated Knowledge Management & Trade Grievance Redressal • Ministry of Commerce & Industry
          </p>
        </div>
      </div>

      {/* Main Command Views */}
      <div className="flex items-center space-x-1.5 bg-slate-900/90 border border-slate-700/80 rounded-xl p-1 text-xs font-semibold">
        <button
          onClick={() => setCurrentView('inbox')}
          className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-2 transition ${
            currentView === 'inbox'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Case Files & Grievances</span>
          <span className="bg-blue-800/80 text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold">
            {ticketsCount}
          </span>
        </button>

        <button
          onClick={() => setCurrentView('kb')}
          className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-2 transition ${
            currentView === 'kb'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Gazette Intelligence (RAG)</span>
        </button>

        <button
          onClick={() => setCurrentView('analytics')}
          className={`px-3.5 py-1.5 rounded-lg flex items-center space-x-2 transition ${
            currentView === 'analytics'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Executive SLA HUD</span>
        </button>
      </div>

      {/* Live Vector Engine Metric & Officer Digital Credentials */}
      <div className="flex items-center space-x-3.5">
        <div className="hidden xl:flex items-center space-x-2 bg-slate-900/80 border border-slate-800 rounded-lg px-3 py-1.5 text-xs">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-300 text-[11px]">
            National Vector Store: <span className="text-emerald-400 font-mono font-bold">4,210 Gazettes Indexed</span>
          </span>
        </div>

        <div className="flex items-center space-x-2.5 pl-3 border-l border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-slate-700 to-slate-600 border border-slate-500/50 flex items-center justify-center font-bold text-xs text-amber-300 shadow">
            RS
          </div>
          <div className="text-left hidden lg:block">
            <div className="text-xs font-bold text-white flex items-center space-x-1.5">
              <span>Rajesh Sharma</span>
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            </div>
            <div className="text-[10px] text-slate-400 font-mono">DGFT Desk Officer • ID: GOI-7721</div>
          </div>
        </div>
      </div>
    </header>
  );
}
