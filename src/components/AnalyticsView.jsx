import React from 'react';
import { TrendingUp, Clock, Zap, Award, AlertOctagon, MapPin, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export default function AnalyticsView() {
  const anomalies = [
    {
      cluster: "Surat Textile Cluster, Gujarat",
      sector: "Manmade Fibres & Apparel",
      surge: "+82% this week",
      queryCount: 412,
      detectedBlindspot: "Customs Notification No. 14/2026 caused duty drawback confusion on imported polyester filament.",
      recommendation: "Issue Urgent Clarification on FTP Para 4.40 via DGFT Public Notice."
    },
    {
      cluster: "Ludhiana Engineering Hub, Punjab",
      sector: "Industrial Tooling & Machinery",
      surge: "+64% this week",
      queryCount: 289,
      detectedBlindspot: "GeM delayed payment dispute under MSMED Act Section 15.",
      recommendation: "Issue Warning Notice to Public Sector Undertaking Finance Nodal Officers."
    },
    {
      cluster: "Kolkata Agri-Export Zone, West Bengal",
      sector: "Organic Orthodox Tea & Spices",
      surge: "+45% this week",
      queryCount: 194,
      detectedBlindspot: "Missing APEDA electronic inspection code in ICEGATE shipping bill EDI transmission.",
      recommendation: "Publish Portal Step-by-Step FAQ on Section 149 Customs Bill Amendments."
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="pb-4 border-b border-slate-800 flex justify-between items-end">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-mono font-bold">
                Executive HUD
              </span>
              <h1 className="text-xl font-bold text-white">Ministry Contact Center & AI Efficiency Metrics</h1>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Real-time reporting on query volumes, statutory SLA compliance, and AI autonomous triage
            </p>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-[11px] text-slate-500 font-mono">Data Source: National Commerce Vector Grid</span>
          </div>
        </div>

        {/* KPI Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium uppercase">
              <span>Total Grievances (Month)</span>
              <TrendingUp className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-extrabold text-white mt-1">18,429</div>
            <div className="text-[11px] text-emerald-400 mt-1">↑ 14% via Portal & WhatsApp</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium uppercase">
              <span>Avg Turnaround Time</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-extrabold text-blue-400 mt-1">11 mins</div>
            <div className="text-[11px] text-emerald-400 mt-1">Reduced from 4.2 days via AI Drafter</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium uppercase">
              <span>Statutory Gazette Match</span>
              <Zap className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl font-extrabold text-indigo-400 mt-1">94.8%</div>
            <div className="text-[11px] text-slate-400 mt-1">Legally cited circulars</div>
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

        {/* 🌟 POLICY BLINDSPOT DETECTOR (EXECUTIVE ANOMALY RADAR) */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-indigo-900/50 rounded-2xl p-5 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
            <div>
              <h2 className="text-sm font-bold text-white flex items-center space-x-2">
                <AlertOctagon className="w-4 h-4 text-rose-400" />
                <span>Macro Policy Blindspot Detector (Executive Radar)</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                AI detects geographic query surges to recommend proactive clarification circulars before trade disruptions occur
              </p>
            </div>
            <span className="text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full font-bold font-mono">
              3 Active Policy Gaps Flagged
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {anomalies.map((a, idx) => (
              <div key={idx} className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-3.5 space-y-2 hover:border-indigo-500/50 transition">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-200 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{a.cluster}</span>
                  </span>
                  <span className="text-[10px] bg-rose-950 text-rose-300 font-mono font-bold px-1.5 py-0.5 rounded">
                    {a.surge}
                  </span>
                </div>
                
                <p className="text-[10px] text-slate-400 font-mono">{a.sector} • {a.queryCount} queries</p>
                
                <div className="bg-slate-900/80 p-2 rounded text-[11px] text-slate-300 leading-snug border border-slate-800">
                  <span className="text-amber-400 font-bold block mb-0.5">Detected Root Cause:</span>
                  {a.detectedBlindspot}
                </div>

                <div className="bg-indigo-950/30 p-2 rounded text-[11px] text-indigo-200 leading-snug border border-indigo-900/40">
                  <span className="text-indigo-400 font-bold block mb-0.5">Recommended Action:</span>
                  {a.recommendation}
                </div>
              </div>
            ))}
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
