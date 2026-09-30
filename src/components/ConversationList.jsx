import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, Sparkles, FolderArchive, Layers } from 'lucide-react';

export default function ConversationList({ tickets, selectedTicketId, onSelectTicket, activeDesk, setActiveDesk }) {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const desks = [
    { id: 'all', label: 'All Desks' },
    { id: 'DGFT', label: 'DGFT (Trade)' },
    { id: 'DPIIT', label: 'DPIIT (Startups)' },
    { id: 'GeM', label: 'GeM (Procure)' }
  ];

  const filteredTickets = tickets.filter(t => {
    if (activeDesk !== 'all' && t.departmentCode !== activeDesk) return false;
    if (statusFilter === 'unassigned' && t.status !== 'Open') return false;
    if (statusFilter === 'escalated' && t.status !== 'Escalated') return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        t.contactName.toLowerCase().includes(q) ||
        t.title.toLowerCase().includes(q) ||
        t.iec.includes(q) ||
        t.gstin.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="w-84 lg:w-96 bg-[#0c1427] border-r border-slate-800 flex flex-col shrink-0">
      
      {/* Top Department Switcher Bar */}
      <div className="p-3 border-b border-slate-800 space-y-2.5 bg-[#090f1d]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FolderArchive className="w-4 h-4 text-amber-400" />
            <h2 className="font-bold text-xs uppercase tracking-wider text-slate-200">
              Grievance Dossiers
            </h2>
          </div>
          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono font-semibold">
            {filteredTickets.length} Registered
          </span>
        </div>

        {/* Department Chips */}
        <div className="grid grid-cols-4 gap-1 bg-slate-900/90 p-1 rounded-lg text-[11px] font-semibold text-center">
          {desks.map(d => (
            <button
              key={d.id}
              onClick={() => setActiveDesk(d.id)}
              className={`py-1 rounded-md transition ${
                activeDesk === d.id
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Filter subtabs & Search */}
        <div className="flex space-x-1.5 text-[11px] font-medium">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-2.5 py-1 rounded-md transition ${statusFilter === 'all' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
          >
            All Files
          </button>
          <button
            onClick={() => setStatusFilter('unassigned')}
            className={`px-2.5 py-1 rounded-md transition ${statusFilter === 'unassigned' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Pending
          </button>
          <button
            onClick={() => setStatusFilter('escalated')}
            className={`px-2.5 py-1 rounded-md transition ${statusFilter === 'escalated' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Escalated L2/L3
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by File No, IEC, GSTIN..."
            className="w-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:border-blue-500 placeholder-slate-500 font-sans"
          />
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2" />
        </div>
      </div>

      {/* Case Files Docket Feed */}
      <div className="flex-1 overflow-y-auto divide-y divide-slate-800/60 p-2 space-y-1.5">
        {filteredTickets.map((t) => {
          const isSelected = t.id === selectedTicketId;

          return (
            <div
              key={t.id}
              onClick={() => onSelectTicket(t.id)}
              className={`p-3 rounded-xl cursor-pointer transition border ${
                isSelected
                  ? 'bg-slate-800/90 border-blue-500/80 shadow-md shadow-blue-950/40'
                  : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              {/* Card Header: Case File No & Time */}
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-1.5">
                  <span className="font-mono text-[10px] text-amber-400 font-bold bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                    {t.id}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    IEC: {t.iec}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">{t.time}</span>
              </div>

              {/* Enterprise Name */}
              <h3 className="text-xs font-bold text-white truncate mb-1">
                {t.contactName}
              </h3>

              {/* Subject / Grievance Summary */}
              <p className="text-[11px] text-slate-300 font-medium line-clamp-1 mb-2">
                {t.title}
              </p>

              {/* Tags & AI Clause Match Confidence */}
              <div className="flex items-center justify-between pt-1 border-t border-slate-800/70 text-[10px]">
                <div className="flex items-center space-x-1.5">
                  <span className={`px-1.5 py-0.2 rounded font-semibold ${
                    t.departmentCode === 'DGFT' ? 'text-amber-300 bg-amber-500/20' :
                    t.departmentCode === 'DPIIT' ? 'text-blue-300 bg-blue-500/20' :
                    'text-emerald-300 bg-emerald-500/20'
                  }`}>
                    {t.departmentCode}
                  </span>

                  <span className={`px-1.5 py-0.2 rounded font-medium ${
                    t.priority === 'High' || t.priority === 'Urgent'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {t.priority}
                  </span>
                </div>

                <div className="flex items-center space-x-1 text-emerald-400 font-mono font-bold">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>{t.aiMatch} RAG Match</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
