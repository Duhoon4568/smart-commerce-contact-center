import React, { useState } from 'react';
import { Upload, Search, Filter, BookOpen, CheckCircle } from 'lucide-react';

export default function KnowledgeBaseView() {
  const [selectedDesk, setSelectedDesk] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const gazettes = [
    {
      id: 'FTP-2023',
      desk: 'DGFT',
      deskBadge: 'DGFT / FTP-2023',
      deskColor: 'text-amber-400 bg-amber-500/20',
      title: 'Foreign Trade Policy (FTP) 2023 - Duty Remission & EPCG',
      description: 'Comprehensive handbook on Advance Authorization, RoDTEP, RoSCTL, and capital goods export obligation schemes.',
      updated: 'Apr 2026',
      chunks: '1,480 Chunks Embedded'
    },
    {
      id: 'STARTUP-80IAC',
      desk: 'DPIIT',
      deskBadge: 'DPIIT / STARTUP-INDIA',
      deskColor: 'text-blue-400 bg-blue-500/20',
      title: 'Startup India Seed Fund & Section 80-IAC Exemption Guidelines',
      description: 'Guidelines on recognition of startups, 3-year income tax holidays, angel tax relief, and incubator verification processes.',
      updated: 'Feb 2026',
      chunks: '820 Chunks Embedded'
    },
    {
      id: 'GEM-GTC',
      desk: 'GeM',
      deskBadge: 'GeM / PROCUREMENT',
      deskColor: 'text-emerald-400 bg-emerald-500/20',
      title: 'Government e-Marketplace (GeM) GTC & Mandatory Payment Timelines',
      description: 'Mandatory terms for buyer CRAC generation, 10-day payment rule for MSME vendors, and penal interest provisions.',
      updated: 'Mar 2026',
      chunks: '640 Chunks Embedded'
    },
    {
      id: 'IPR-PATENTS',
      desk: 'DPIIT',
      deskBadge: 'DPIIT / IPR-PATENTS',
      deskColor: 'text-purple-400 bg-purple-500/20',
      title: 'Patents (Amendment) Rules 2024 & Expedited Examination for MSMEs',
      description: 'Fast-track patent grant procedures, fee concessions for female entrepreneurs and recognized educational institutions.',
      updated: 'Jan 2026',
      chunks: '512 Chunks Embedded'
    }
  ];

  const filteredGazettes = gazettes.filter(g => {
    if (selectedDesk !== 'all' && g.desk !== selectedDesk) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-[#0b1120]">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>Ministry Knowledge Base & Gazette Ingestion Engine</span>
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded border border-blue-500/30">
                Vector Embeddings
              </span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Unified Ministry Knowledge Repository synced with Foreign Trade Policy (FTP), DPIIT Circulars, and GeM Guidelines
            </p>
          </div>
          <button
            onClick={() => alert("Upload Modal: Select Gazette PDF to extract and ingest chunks into Vector Database.")}
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-2 rounded-lg font-semibold flex items-center space-x-1.5 shadow transition"
          >
            <Upload className="w-4 h-4" />
            <span>+ Ingest New Gazette Circular (PDF)</span>
          </button>
        </div>

        {/* Search & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="md:col-span-2 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gazettes, circular numbers, clauses..."
              className="w-full bg-slate-900 border border-slate-700 text-xs rounded-lg pl-8 pr-3 py-2 text-white focus:outline-none focus:border-blue-500"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-2.5 top-2.5" />
          </div>

          <select
            value={selectedDesk}
            onChange={(e) => setSelectedDesk(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-xs rounded-lg px-3 py-2 text-slate-300 focus:outline-none"
          >
            <option value="all">All Desks (DGFT, DPIIT, GeM)</option>
            <option value="DGFT">DGFT (Foreign Trade)</option>
            <option value="DPIIT">DPIIT (Startup India & IPR)</option>
            <option value="GeM">GeM (Public Procurement)</option>
          </select>

          <div className="flex items-center space-x-2 text-xs text-slate-400 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>4,210 Active Chunks</span>
          </div>
        </div>

        {/* Gazette Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGazettes.map((g) => (
            <div
              key={g.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 hover:border-slate-700 transition"
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-0.5 rounded font-mono font-medium ${g.deskColor}`}>
                  {g.deskBadge}
                </span>
                <span className="text-[10px] text-slate-400">Updated: {g.updated}</span>
              </div>
              <h3 className="text-sm font-bold text-white">{g.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{g.description}</p>
              <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-[11px]">
                <span className="text-emerald-400 font-mono">{g.chunks}</span>
                <span className="text-blue-400 hover:underline cursor-pointer">View Articles →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
