import React from 'react';
import { Inbox, BookOpen, BarChart3, Database } from 'lucide-react';

export default function Header({ currentView, setCurrentView, ticketsCount }) {
  return (
    <header className="bg-[#0f172a] border-b border-slate-800 px-4 py-2.5 flex items-center justify-between z-20 shrink-0">
      {/* Brand & Emblem */}
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center font-bold text-white shadow-md shadow-amber-900/30 text-lg border border-amber-400/40">
          🏛️
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-sm tracking-wide text-white uppercase">AKM</span>
            <span className="text-xs text-slate-300 font-semibold hidden sm:inline">• Automated Knowledge Management</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded font-medium">AI Smart Desk</span>
            <span className="text-[10px] bg-blue-500/20 text-blue-400 border border-blue-500/30 px-1.5 py-0.5 rounded font-mono">RAG-Engine v2.4</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-none">Automated Knowledge & Contact Center Platform • Ministry of Commerce & Industry</p>
        </div>
      </div>

      {/* View Switcher Navigation */}
      <div className="flex items-center space-x-2">
        <div className="flex bg-slate-900 border border-slate-700/80 rounded-lg p-1 text-xs font-medium">
          <button
            onClick={() => setCurrentView('inbox')}
            className={`px-3 py-1 rounded-md flex items-center space-x-1.5 transition ${
              currentView === 'inbox'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Omnichannel Inbox</span>
            <span className="bg-blue-800 text-[10px] px-1.5 py-0.2 rounded-full font-mono">{ticketsCount}</span>
          </button>

          <button
            onClick={() => setCurrentView('kb')}
            className={`px-3 py-1 rounded-md flex items-center space-x-1.5 transition ${
              currentView === 'kb'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Gazette & Policy KB</span>
          </button>

          <button
            onClick={() => setCurrentView('analytics')}
            className={`px-3 py-1 rounded-md flex items-center space-x-1.5 transition ${
              currentView === 'analytics'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>SLA & Query Trends</span>
          </button>
        </div>
      </div>

      {/* Vector Store Status & Officer Profile */}
      <div className="flex items-center space-x-3">
        <div className="hidden md:flex items-center space-x-1.5 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300 text-[11px]">RAG Vector Store: <span className="text-emerald-400 font-mono">Synced (4,210 Gazettes)</span></span>
        </div>
        <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
          <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center font-bold text-xs text-white">
            RS
          </div>
          <div className="text-left hidden lg:block">
            <div className="text-xs font-semibold text-white leading-none">Rajesh Sharma</div>
            <div className="text-[10px] text-slate-400">DGFT L2 Grievance Officer</div>
          </div>
        </div>
      </div>
    </header>
  );
}
