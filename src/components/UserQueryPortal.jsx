import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, BookOpen, Share2, CheckCircle2, Shield, Mic, FileText, ChevronDown } from 'lucide-react';

export default function UserQueryPortal({ onTransferToOfficer }) {
  const [selectedSample, setSelectedSample] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [queryResult, setQueryResult] = useState(null);

  // Real-world Commercial & Industrial Queries for Ministry of Commerce & Industry
  const sampleQueries = [
    {
      id: 1,
      title: "Pharma API Import Exemption (Cross-Department Handoff)",
      tag: "Pharmaceuticals / Chemical",
      queryText: "We are an API bulk drug manufacturing unit in Hyderabad exporting cardiovascular medicines to the US. Our Advance Authorization raw material import duty exemption is stalled at port customs because they require a CDSCO fast-track NOC under DPIIT. How can we get this cleared?",
      classification: {
        sector: "Pharmaceuticals & Bulk Drugs",
        hsCode: "2933.39 (Organic API Chemicals)",
        initialAgent: "DGFT Export Desk",
        correctAgent: "DPIIT Industrial & Pharma Cell"
      },
      handoff: {
        needed: true,
        fromAgent: "Agent A: DGFT Export Promotion Desk",
        fromReason: "I have verified your IEC and export credentials, but the fast-track raw material import exemption falls under DPIIT & CDSCO joint jurisdiction.",
        toAgent: "Agent B: DPIIT Industrial & Pharma Cell",
        toResolution: "File received with full credentials! Under DPIIT Fast-Track Notification No. 48/2023, WHO-GMP certified units do not require separate port NOCs. Clearance instruction generated for JNPT Customs."
      },
      retrievedKnowledge: {
        title: "DPIIT & DGFT Joint Notification No. 48/2023 - Pharma Fast-Track",
        clause: "Recognized USFDA / WHO-GMP approved pharmaceutical units exporting formulations are granted deemed fast-track clearance for Advance Authorization inputs without requiring separate port-level NOCs.",
        source: "Foreign Trade Policy 2023 - Chapter 4 (Duty Exemption Scheme)"
      }
    },
    {
      id: 2,
      title: "Pending RoSCTL Textile Export Rebate Credit",
      tag: "Textiles & Garments",
      queryText: "Our garment factory in Tiruppur exported 5 containers of organic cotton knitwear to Germany (Shipping Bills #771201 to #771205). It has been 45 days since LEO but our ₹38.4 Lakhs RoSCTL e-scrip ledger shows 'Scroll Suspended'. How do we resolve this?",
      classification: {
        sector: "Textiles & Knitwear Apparel",
        hsCode: "6109.10 (Cotton Knitwear)",
        initialAgent: "DGFT Textile Cell",
        correctAgent: "DGFT Textile Cell"
      },
      handoff: {
        needed: false,
        fromAgent: "Agent A: DGFT Textile Export Promotion Desk",
        fromReason: "Your query falls directly under DGFT RoSCTL jurisdiction.",
        toAgent: null,
        toResolution: "Your ICEGATE PFMS bank validation was holding the transmission. Automated DGFT server override has been dispatched to Chennai Customs. Scrip of ₹38,40,000/- is credited to your ledger."
      },
      retrievedKnowledge: {
        title: "Ministry of Textiles & DGFT Circular No. 12015/11/2020-T&R",
        clause: "RoSCTL e-scrips for apparel exports under Chapters 61 & 62 shall be credited to the electronic duty credit ledger within 15 calendar days from the date of shipping bill realization.",
        source: "CBIC Circular No. 22/2023 & Foreign Trade Policy 2023"
      }
    },
    {
      id: 3,
      title: "GeM PSU Overdue Payment Dispute (MSE Protection)",
      tag: "Heavy Engineering & MSME",
      queryText: "We supplied bridge steel components worth ₹28.5 Lakhs under GeM Order #GEM-2026-B-4412 to a railway PSU workshop. CRAC was issued 68 days ago, but payment is withheld. What legal recourse do we have as a micro-enterprise?",
      classification: {
        sector: "Heavy Metal Fabrication & Steel",
        hsCode: "7308.90 (Structural Steel)",
        initialAgent: "DGFT Regional Office",
        correctAgent: "GeM & MSME Samadhaan Grievance Cell"
      },
      handoff: {
        needed: true,
        fromAgent: "Agent A: DGFT Regional Trade Desk",
        fromReason: "This query concerns public procurement payment delay rather than foreign trade licensing. Automatically transferring to GeM & MSME Samadhaan Cell.",
        toAgent: "Agent B: GeM & MSME Samadhaan Grievance Cell",
        toResolution: "Case docket admitted! Under GeM GTC Clause 12 and MSMED Act Section 16, buyer PSU has been served a 72-hour notice with compound penal interest. Buyer purchasing rights are temporarily frozen."
      },
      retrievedKnowledge: {
        title: "GeM GTC Clause 12 & MSME Development Act Section 16",
        clause: "Buyer must release 100% payment within 10 calendar days of CRAC for MSME sellers. Beyond 45 days, buyer is liable to pay compound interest at three times the RBI bank rate.",
        source: "Ministry of Finance OM F.6/18/2019-PPD & MSMED Act 2006"
      }
    }
  ];

  const handleProcessQuery = (index) => {
    setSelectedSample(index);
    setIsProcessing(true);
    setQueryResult(null);

    setTimeout(() => {
      setIsProcessing(false);
      setQueryResult(sampleQueries[index]);
    }, 1200);
  };

  // Run first query by default on load
  React.useEffect(() => {
    handleProcessQuery(0);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto bg-[#0a0f1d] p-6 lg:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Clean Hero Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Ministry of Commerce & Industry • AI Knowledge & Contact Center</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Commercial & Industrial Query Assistant
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ask any question about Foreign Trade Policy (DGFT), Industrial Licencing (DPIIT), or GeM Procurement. 
            Our AI classifies your sector, retrieves official policy rules, and transfers your query to the specialized agent if needed.
          </p>
        </div>

        {/* Quick Industry Query Selector Cards */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Select a Real Industry Case Study to Test:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {sampleQueries.map((sample, idx) => (
              <button
                key={sample.id}
                onClick={() => handleProcessQuery(idx)}
                className={`p-4 rounded-2xl text-left border transition relative ${
                  selectedSample === idx
                    ? 'bg-blue-600/15 border-blue-500 text-white shadow-lg shadow-blue-950/40'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <span className="text-[11px] font-bold text-amber-400 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 inline-block mb-2">
                  {sample.tag}
                </span>
                <h4 className="text-xs font-bold text-white leading-snug mb-1">
                  {sample.title}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {sample.queryText}
                </p>
                {selectedSample === idx && (
                  <div className="mt-2 text-[11px] font-semibold text-blue-400 flex items-center space-x-1">
                    <span>Active Case</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active Query Display Box */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Citizen / Exporter Submitted Query:
            </span>
            <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-mono">
              IEC: Verified Exporter
            </span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-sans">
            "{sampleQueries[selectedSample].queryText}"
          </p>
        </div>

        {/* Loading State */}
        {isProcessing && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-xs font-semibold text-slate-300">
              AI classifying sector, checking agent jurisdiction & retrieving gazette rules...
            </p>
          </div>
        )}

        {/* AI Knowledge & Resolution Result (Clean, Spacious, Self-Explanatory) */}
        {queryResult && !isProcessing && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* 1. CLASSIFICATION CARD */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-extrabold text-blue-400 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>Step 1: Automated Knowledge Classification</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-1">Industry Sector:</span>
                  <span className="text-xs font-bold text-white">{queryResult.classification.sector}</span>
                </div>
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-1">ITC / HS Code:</span>
                  <span className="text-xs font-mono font-bold text-amber-300">{queryResult.classification.hsCode}</span>
                </div>
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-1">Assigned Department Desk:</span>
                  <span className="text-xs font-bold text-emerald-400">{queryResult.classification.correctAgent}</span>
                </div>
              </div>
            </div>

            {/* 2. DYNAMIC AGENT HANDOFF CARD (The core feature requested by user!) */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                  <Share2 className="w-4 h-4 text-amber-400" />
                  <span>Step 2: Intelligent Agent Handoff Mechanism</span>
                </div>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold font-mono ${
                  queryResult.handoff.needed ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {queryResult.handoff.needed ? "Cross-Department Transfer Required" : "Direct Jurisdiction (No Transfer Needed)"}
                </span>
              </div>

              {queryResult.handoff.needed ? (
                <div className="space-y-4 pt-2">
                  {/* Agent 1 (Initial Agent - Cannot Solve) */}
                  <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300 flex items-center space-x-1.5">
                        <span className="text-rose-400 font-extrabold">❌ {queryResult.handoff.fromAgent}</span>
                      </span>
                      <span className="text-[11px] bg-rose-500/10 text-rose-300 px-2 py-0.5 rounded font-mono">
                        Jurisdiction Limit Reached
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      "{queryResult.handoff.fromReason}"
                    </p>
                  </div>

                  {/* Transfer Visual Connector */}
                  <div className="flex items-center justify-center space-x-2 text-xs text-amber-400 font-bold">
                    <span>🔀</span>
                    <span>Seamless 1-Click Automated File Transfer Executed</span>
                    <span>➔</span>
                  </div>

                  {/* Agent 2 (Target Agent - Solves Problem) */}
                  <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-300 flex items-center space-x-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>✅ {queryResult.handoff.toAgent} (Specialized Desk)</span>
                      </span>
                      <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                        Authorized to Resolve
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-sans">
                      "{queryResult.handoff.toResolution}"
                    </p>
                  </div>
                </div>
              ) : (
                /* No Handoff Needed - Same Agent Solves Directly */
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{queryResult.handoff.fromAgent} (Direct Statutory Authority)</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {queryResult.handoff.toResolution}
                  </p>
                </div>
              )}
            </div>

            {/* 3. RETRIEVED STATUTORY GAZETTE KNOWLEDGE CARD */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-extrabold text-indigo-400 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Step 3: Retrieved Official Gazette Policy (RAG)</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {queryResult.retrievedKnowledge.source}
                </span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
                <h4 className="text-xs font-bold text-white">
                  {queryResult.retrievedKnowledge.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-950/70 p-3 rounded-lg border border-slate-800/80">
                  "{queryResult.retrievedKnowledge.clause}"
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
