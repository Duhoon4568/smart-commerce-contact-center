import React from 'react';
import { TrendingUp, Clock, Zap, Award } from 'lucide-react';

export default function AnalyticsView() {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-[#0b1120]">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-slate-800">
          <h1 className="text-xl font-bold text-white">Ministry Contact Center & AI Efficiency Metrics</h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time reporting on query volumes, average resolution time, and AI self-service accuracy
          </p>
        </div>

        {/* KPI Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium uppercase">
              <span>Total Queries (Month)</span>
              <TrendingUp className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-extrabold text-white mt-1">18,429</div>
            <div className="text-[11px] text-emerald-400 mt-1">↑ 14% vs previous month</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium uppercase">
              <span>Avg First Response Time</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-extrabold text-blue-400 mt-1">11 mins</div>
            <div className="text-[11px] text-emerald-400 mt-1">Reduced from 4.2 hours (AI Co-pilot)</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium uppercase">
              <span>AI Knowledge Match</span>
              <Zap className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl font-extrabold text-indigo-400 mt-1">94.8%</div>
            <div className="text-[11px] text-slate-400 mt-1">Valid gazette clause retrieved</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium uppercase">
              <span>Citizen Charter SLA</span>
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-extrabold text-emerald-400 mt-1">98.2%</div>
            <div className="text-[11px] text-slate-400 mt-1">Resolved within 48h limit</div>
          </div>
        </div>

        {/* Query Volume by Sector */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-white">Top Query Drivers across Commerce Sectors</h3>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-slate-300 font-medium">DGFT: RoDTEP & Remission Rates (Agri & Textiles)</span>
                <span className="font-mono text-slate-400">4,120 queries (38%)</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '38%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-slate-300 font-medium">DPIIT: Section 80-IAC Tax Exemption Application Status</span>
                <span className="font-mono text-slate-400">3,240 queries (28%)</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-slate-300 font-medium">GeM: Delayed CRAC & Vendor Payment Release (MSME)</span>
                <span className="font-mono text-slate-400">2,490 queries (21%)</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '21%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-slate-300 font-medium">Multilingual Inquiries (Bhashini Indic Languages: Hindi, Gujarati)</span>
                <span className="font-mono text-slate-400">1,820 queries (13%)</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full rounded-full" style={{ width: '13%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
