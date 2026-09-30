import React, { useState } from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';

export default function ConversationList({ tickets, selectedTicketId, onSelectTicket, activeDesk }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTickets = tickets.filter(t => {
    // Desk filter
    if (activeDesk !== 'all' && t.departmentCode !== activeDesk) return false;
    // Status filter
    if (filter === 'unassigned' && t.status !== 'Open') return false;
    if (filter === 'escalated' && t.status !== 'Escalated') return false;
    // Search query
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
    <div className="w-80 lg:w-96 bg-[#0f172a] border-r border-slate-800 flex flex-col shrink-0">
      {/* Header & Controls */}
      <div className="p-3 border-b border-slate-800 space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-sm text-white flex items-center space-x-2">
            <span>Conversations</span>
            <span className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded-full font-mono">
              {filteredTickets.length} Active
            </span>
          </h2>
          <button className="text-slate-400 hover:text-white p-1 hover:bg-slate-800 rounded">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        {/* Filter subtabs */}
        <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-lg text-xs text-center font-medium">
          <button
            onClick={() => setFilter('all')}
            className={`py-1 rounded transition ${filter === 'all' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            All ({tickets.length})
          </button>
          <button
            onClick={() => setFilter('unassigned')}
            className={`py-1 rounded transition ${filter === 'unassigned' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Unassigned
          </button>
          <button
            onClick={() => setFilter('escalated')}
            className={`py-1 rounded transition ${filter === 'escalated' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Escalated
          </button>
        </div>

        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by IEC, GSTIN or query..."
            className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:border-blue-500 placeholder-slate-500"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-2.5 top-2" />
        </div>
      </div>

      {/* Ticket List */}
      <div className="flex-1 overflow-y-auto divide-y divide-slate-800/80">
        {filteredTickets.map((t) => {
          const isSelected = t.id === selectedTicketId;

          return (
            <div
              key={t.id}
              onClick={() => onSelectTicket(t.id)}
              className={`p-3.5 cursor-pointer transition ${
                isSelected
                  ? 'bg-slate-800/90 border-l-4 border-blue-500'
                  : 'hover:bg-slate-900/60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white truncate max-w-[170px]">{t.contactName}</span>
                <span className="text-[10px] text-slate-500 font-mono">{t.time}</span>
              </div>
              <p className="text-xs text-slate-300 font-medium line-clamp-1 mb-1.5">{t.title}</p>
              <p className="text-[11px] text-slate-400 line-clamp-1 mb-2">{t.preview}</p>
              
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center space-x-1.5">
                  <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${
                    t.departmentCode === 'DGFT' ? 'text-amber-400 bg-amber-500/10' :
                    t.departmentCode === 'DPIIT' ? 'text-blue-400 bg-blue-500/10' :
                    'text-emerald-400 bg-emerald-500/10'
                  }`}>
                    {t.departmentCode}
                  </span>

                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                    t.priority === 'High' || t.priority === 'Urgent'
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      : 'bg-slate-700 text-slate-300'
                  }`}>
                    {t.priority}
                  </span>
                </div>

                <span className="text-[10px] text-indigo-400 font-mono flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>AI {t.aiMatch}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
