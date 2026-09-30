import React from 'react';
import { MessageSquare, FileText, Sliders, Globe } from 'lucide-react';

export default function Sidebar({ activeDesk, setActiveDesk }) {
  return (
    <div className="w-14 bg-[#090d16] border-r border-slate-800 flex flex-col items-center py-3 space-y-4 shrink-0">
      <button
        title="All Inboxes"
        onClick={() => setActiveDesk('all')}
        className={`w-9 h-9 rounded-lg flex items-center justify-center transition relative ${
          activeDesk === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
        }`}
      >
        <MessageSquare className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-slate-900"></span>
      </button>

      <button
        title="DGFT Desk (Directorate General of Foreign Trade)"
        onClick={() => setActiveDesk('DGFT')}
        className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
          activeDesk === 'DGFT' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
        }`}
      >
        <span className="text-xs font-bold text-amber-400">DG</span>
      </button>

      <button
        title="DPIIT Desk (Startups & Industry Promotion)"
        onClick={() => setActiveDesk('DPIIT')}
        className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
          activeDesk === 'DPIIT' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
        }`}
      >
        <span className="text-xs font-bold text-blue-400">DP</span>
      </button>

      <button
        title="GeM Procurement Escalations"
        onClick={() => setActiveDesk('GeM')}
        className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
          activeDesk === 'GeM' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
        }`}
      >
        <span className="text-xs font-bold text-emerald-400">GM</span>
      </button>

      <div className="w-8 border-b border-slate-800 my-1"></div>

      <button
        title="Canned Responses & Templates"
        className="w-9 h-9 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center transition"
      >
        <FileText className="w-5 h-5" />
      </button>

      <button
        title="Automated Routing Rules"
        className="w-9 h-9 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 flex items-center justify-center transition"
      >
        <Sliders className="w-5 h-5" />
      </button>

      <div className="flex-1"></div>

      {/* Live Bhashini Translation Badge */}
      <button
        title="Bhashini Indic Translation Engine Enabled"
        className="w-9 h-9 rounded-lg bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center font-bold text-xs"
      >
        भा
      </button>
    </div>
  );
}
