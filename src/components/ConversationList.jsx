import React, { useState } from 'react';
import { Search, Filter, Sparkles, FolderArchive, Building2, ChevronRight } from 'lucide-react';

export default function ConversationList({ tickets, selectedTicketId, onSelectTicket, activeDesk, setActiveDesk }) {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const desks = [
    { id: 'all', label: 'All Desks' },
    { id: 'DGFT', label: 'DGFT (Trade)' },
    { id: 'DPIIT', label: 'DPIIT (Industry)' },
    { id: 'GeM', label: 'GeM (PSU Orders)' }
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
        t.gstin.toLowerCase().includes(q) ||
        t.profile?.sector?.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <aside className="w-80 xl:w-96 bg-[#090f21] border-r border-slate-800/80 flex flex-col shrink-0">
      
      {/* Top Filter & Search Controls */}
      <div className="p-4 border-b border-slate-800/80 space-y-3 bg-[#0c142b]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FolderArchive className="w-4 h-4 text-amber-400" />
            <span className="font-extrabold text-xs uppercase tracking-wider text-slate-200">
              Commercial Case Files
            </span>
          </div>
          <span className="text-[11px] bg-slate-800/80 text-blue-300 border border-slate-700/60 px-2.5 py-0.5 rounded-full font-mono font-bold">
            {filteredTickets.length} Active Files
          </span>
        </div>

        {/* Department Switcher */}
        <div className="grid grid-cols-4 gap-1 bg-slate-900/90 p-1 rounded-xl text-xs font-semibold text-center border border-slate-800">
          {desks.map(d => (
            <button
              key={d.id}
              onClick={() => setActiveDesk(d.id)}
              className={`py-1.5 rounded-lg transition ${
                activeDesk === d.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Company, IEC, Sector, HS Code..."
            className="w-full bg-slate-900 border border-slate-700/80 text-slate-200 text-xs rounded-xl pl-9 pr-3 py-2 focus:outline-none focus:border-blue-500 placeholder-slate-500 font-sans"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Case Dossiers List - Spacious & Elegant */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
        {filteredTickets.map((t) => {
          const isSelected = t.id === selectedTicketId;

          return (
            <div
              key={t.id}
              onClick={() => onSelectTicket(t.id)}
              className={`p-4 rounded-2xl cursor-pointer transition border relative ${
                isSelected
                  ? 'bg-slate-800/90 border-blue-500 shadow-lg shadow-blue-950/50'
                  : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              {/* Header: File Number & Time */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {t.id}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">{t.time}</span>
              </div>

              {/* Enterprise Legal Name */}
              <h3 className="text-xs font-bold text-white mb-1 leading-snug">
                {t.contactName}
              </h3>

              {/* Cluster / Location */}
              <p className="text-[11px] text-slate-400 mb-2 truncate font-medium">
                📍 {t.sender}
              </p>

              {/* Subject Snippet */}
              <p className="text-xs text-slate-300 font-normal line-clamp-2 leading-relaxed mb-3">
                {t.title}
              </p>

              {/* Meta tags & AI match */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px]">
                <span className={`px-2 py-0.5 rounded font-semibold text-[10px] ${
                  t.departmentCode === 'DGFT' ? 'text-amber-300 bg-amber-500/10 border border-amber-500/20' :
                  t.departmentCode === 'DPIIT' ? 'text-blue-300 bg-blue-500/10 border border-blue-500/20' :
                  'text-emerald-300 bg-emerald-500/10 border border-emerald-500/20'
                }`}>
                  {t.category.split(' ')[0]}
                </span>

                <div className="flex items-center space-x-1 text-emerald-400 font-mono font-bold text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.aiMatch} Match</span>
                </div>
              </div>

              {isSelected && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-400">
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

    </aside>
  );
}
