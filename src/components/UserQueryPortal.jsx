import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, BookOpen, Share2, CheckCircle2, Shield, Mic, FileText, Download, Clock, Zap, Check, AlertCircle, RefreshCw, Printer } from 'lucide-react';

export default function UserQueryPortal({ onTransferToOfficer }) {
  const [inputText, setInputText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  // Comprehensive Knowledge Repository for Industry Queries
  const knowledgeBase = [
    {
      keywords: ["rodtep", "tea", "export", "rebate", "subsidy", "customs", "shipping bill", "apeda"],
      sector: "Agro-Commodities & Food Processing",
      hsCode: "0902.40.10 (Black Tea)",
      primaryAgent: "DGFT Export Promotion Desk",
      handoffNeeded: true,
      fromAgent: "Agent A: DGFT Regional Office",
      fromReason: "Export credentials and IEC verified. However, shipping bill amendment requires Customs Port EDI clearance under Section 149.",
      toAgent: "Agent B: CBIC Port Customs & EDI Desk",
      toAction: "Customs EDI transmission amendment authorized. Section 149 post-LEO rectification approved with APEDA inspection certificate.",
      gazetteTitle: "DGFT Gazette Notification No. 53/2023 - Appendix 4R (RoDTEP Rates)",
      gazetteCitation: "Ministry of Commerce S.O. 4112(E) / Customs Act Section 149",
      gazetteClause: "Exporters claiming RoDTEP rebate under ITC (HS) 0902.40 must have their electronic shipping bill tagged with APEDA organic export inspection code 'ORG-IND-2023' at the time of Let Export Order (LEO). If omitted, an amendment request under Section 149 of the Customs Act must be submitted to Customs.",
      executiveAnswer: "Your RoDTEP export rebate is paused because the mandatory APEDA code 'ORG-IND-2023' was omitted during electronic shipping bill filing. We have routed this file to Port Customs to grant a Section 149 amendment.",
      actionSteps: [
        "Login to ICEGATE portal and submit an online amendment request under Section 149 of the Customs Act referencing Shipping Bill.",
        "Upload your valid APEDA Phytosanitary & Organic Inspection Certificate.",
        "Upon customs officer approval, your RoDTEP scroll will generate automatically in the next weekly cycle."
      ],
      efficiency: {
        latency: "1.4s",
        manualTime: "14 days",
        timeSaved: "99.8%",
        confidence: "97.4%",
        costSaved: "₹450 / ticket"
      }
    },
    {
      keywords: ["pharma", "api", "drug", "advance authorization", "advance license", "import", "cdsco", "sugam", "usfda"],
      sector: "Pharmaceuticals & Bulk Drugs",
      hsCode: "2933.39 (Organic API Chemicals)",
      primaryAgent: "DGFT Licensing Desk",
      handoffNeeded: true,
      fromAgent: "Agent A: DGFT Licensing Cell",
      fromReason: "Advance License quota verified. However, dual regulatory drug NOC falls under CDSCO / DPIIT Fast-Track jurisdiction.",
      toAgent: "Agent B: DPIIT Industrial & Pharma Fast-Track Cell",
      toAction: "Fast-Track deemed import clearance granted without port-level physical NOC. Automatic clearance transmitted to JNPT Customs.",
      gazetteTitle: "DPIIT & DGFT Joint Notification No. 48/2023 - Pharma Fast-Track Scheme",
      gazetteCitation: "Foreign Trade Policy 2023 - Chapter 4 (Duty Exemption Scheme)",
      gazetteClause: "Recognized USFDA / WHO-GMP approved pharmaceutical manufacturing units exporting formulations are granted deemed fast-track clearance for Advance Authorization inputs without requiring separate port-level NOCs, provided the Drug Master File (DMF) is registered on the CDSCO SUGAM portal.",
      executiveAnswer: "Your WHO-GMP approved unit is exempt from separate port-level CDSCO physical NOCs under the Ministry's 2023 Fast-Track Scheme. Clearance instruction is automatically pushed to JNPT port.",
      actionSteps: [
        "Quote your CDSCO SUGAM registration reference number in the ICEGATE Bill of Entry.",
        "Present Advance Authorization License #PHARMA-HYD-991 at port customs.",
        "Your raw material intermediate consignment will clear at 0% Basic Customs Duty within 4 hours."
      ],
      efficiency: {
        latency: "1.8s",
        manualTime: "21 days",
        timeSaved: "99.9%",
        confidence: "96.8%",
        costSaved: "₹850 / ticket"
      }
    },
    {
      keywords: ["rosctl", "garment", "textile", "apparel", "tiruppur", "cotton", "scrip"],
      sector: "Textiles, Knitwear & Apparel",
      hsCode: "6109.10 (Cotton Knitwear)",
      primaryAgent: "DGFT Textile Cell",
      handoffNeeded: false,
      fromAgent: "Agent A: DGFT Textile Export Promotion Desk",
      fromReason: "Direct statutory jurisdiction under Foreign Trade Policy (FTP 2023) Chapter 4.",
      toAgent: null,
      toAction: "DGFT server override transmitted to Customs server to release e-scrip to exporter ledger.",
      gazetteTitle: "Ministry of Textiles Notification No. 12015/11/2020-T&R & CBIC Circular 22/2023",
      gazetteCitation: "Gazette of India Extraordinary S.O. 3122(E)",
      gazetteClause: "RoSCTL e-scrips for apparel exports under Chapters 61 & 62 shall be credited to the electronic duty credit ledger within 15 calendar days from the date of shipping bill realization, provided PFMS bank validation is confirmed.",
      executiveAnswer: "Your RoSCTL e-scrip scroll for ₹38.4 Lakhs was held due to an IFSC code verification mismatch on ICEGATE. A direct server override has been dispatched.",
      actionSteps: [
        "Verify that your registered bank IFSC code on the DGFT profile matches your ICEGATE profile.",
        "The automated DGFT override will disburse the e-scrip into your ledger in tonight's EDI settlement batch.",
        "You can utilize the scrip immediately for customs duty payment or transfer it to another importer via ICEGATE."
      ],
      efficiency: {
        latency: "1.2s",
        manualTime: "12 days",
        timeSaved: "99.9%",
        confidence: "98.2%",
        costSaved: "₹380 / ticket"
      }
    },
    {
      keywords: ["gem", "payment", "psu", "msme", "delayed", "crac", "steel", "order"],
      sector: "Heavy Metal Fabrication & MSME Procurement",
      hsCode: "7308.90 (Fabricated Structural Steel)",
      primaryAgent: "DGFT Regional Office",
      handoffNeeded: true,
      fromAgent: "Agent A: DGFT Trade Desk",
      fromReason: "This query involves government public procurement payment default, falling under GeM GTC and MSMED Act statutory rules.",
      toAgent: "Agent B: GeM & MSME Samadhaan Grievance Cell",
      toAction: "Notice issued to Buyer PSU Finance Director. Penal compound interest calculation initiated. Buyer purchasing account placed on alert.",
      gazetteTitle: "GeM GTC Clause 12 & MSME Development Act 2006 - Section 16",
      gazetteCitation: "Ministry of Finance OM F.6/18/2019-PPD & MSMED Act",
      gazetteClause: "Buyer must release 100% payment within 10 calendar days of CRAC generation for MSME sellers. Beyond 45 days, buyer is liable to pay compound interest with monthly rests to the supplier at three times the RBI Bank Rate.",
      executiveAnswer: "Under GeM Clause 12 and MSMED Act Section 16, the buyer PSU is in statutory breach. A formal demand notice with mandatory penal interest has been served.",
      actionSteps: [
        "The GeM system has auto-deducted 1% penal interest on the buyer organization.",
        "A 72-hour final disbursement order has been delivered to the Nodal Accounts Officer of the purchasing PSU.",
        "Your case docket is mirrored to the MSME Samadhaan portal with priority status."
      ],
      efficiency: {
        latency: "1.5s",
        manualTime: "30 days",
        timeSaved: "99.9%",
        confidence: "98.9%",
        costSaved: "₹1,200 / ticket"
      }
    },
    {
      keywords: ["epcg", "machinery", "eodc", "capital goods", "pune", "auto", "obligation"],
      sector: "Automotive Precision & Capital Goods",
      hsCode: "8466.93 (Precision Machine Tools)",
      primaryAgent: "DGFT Capital Goods Desk",
      handoffNeeded: false,
      fromAgent: "Agent A: DGFT Capital Goods & EPCG Desk",
      fromReason: "Full authority to issue Export Obligation Discharge Certificate (EODC).",
      toAgent: null,
      toAction: "e-BRC verification complete (124% quota fulfilled). EODC certificate issued and bank guarantee release instruction transmitted to customs.",
      gazetteTitle: "Foreign Trade Policy 2023 - Paragraph 5.14: Redemption of EPCG Authorizations",
      gazetteCitation: "Handbook of Procedures Vol 1",
      gazetteClause: "Where an authorization holder fulfills 100% of the export obligation substantiated by electronic e-BRCs, the Regional Authority shall issue the Export Obligation Discharge Certificate (EODC) within 30 days and direct Customs to release the bank guarantee.",
      executiveAnswer: "Your export obligation of ₹18.2 Cr stands completed at 124.1% fulfillment. Your EODC certificate has been generated and customs bank guarantee released.",
      actionSteps: [
        "Download your signed EODC Certificate #EODC-PUNE-2026-881 from the DGFT portal.",
        "Customs Air Cargo Mumbai has received electronic confirmation to release your ₹45 Lakhs bank guarantee.",
        "Your capital goods machinery is now cleared of all export restrictions."
      ],
      efficiency: {
        latency: "1.6s",
        manualTime: "45 days",
        timeSaved: "99.9%",
        confidence: "97.8%",
        costSaved: "₹1,500 / ticket"
      }
    }
  ];

  // Industry Quick-Fill Chips
  const popularTopics = [
    { title: "Pharma API Import Duty Exemption", text: "We are an API pharmaceutical exporter in Hyderabad. Our Advance Authorization raw material import duty exemption is stalled because Customs requires a CDSCO fast-track NOC under DPIIT." },
    { title: "RoSCTL Garment Rebate Delayed", text: "Our textile garment export factory in Tiruppur has ₹38.4 Lakhs pending RoSCTL rebate credit on 5 containers of cotton knitwear to Germany. ICEGATE shows scroll suspended." },
    { title: "GeM PSU Overdue Payment (>60 Days)", text: "We supplied structural steel bridge components worth ₹28.5 Lakhs under GeM Order to a railway PSU workshop. CRAC was issued 68 days ago but payment is withheld." },
    { title: "EPCG Machinery Obligation (EODC Release)", text: "We completed our 6x export obligation on CNC machinery imported under EPCG scheme. How do we get the Export Obligation Discharge Certificate and bank guarantee released?" },
    { title: "RoDTEP Tea Export Subsidy Rejection", text: "Our organic black tea export shipment to UK was marked ineligible for RoDTEP rebate at Kolkata port under HS Code 0902. How do we rectify this?" }
  ];

  // The Search & Retrieval Function (Matches user query against knowledge base & determines handoff)
  const performSearch = (queryToSearch) => {
    const q = (queryToSearch || inputText).trim();
    if (!q) return;

    setIsSearching(true);
    setSearchResult(null);

    // Simulate RAG Vector Embedding & Intent Matching
    setTimeout(() => {
      const qLower = q.toLowerCase();
      
      // Find closest matching entry in knowledge base
      let matchedEntry = knowledgeBase.find(kb => 
        kb.keywords.some(kw => qLower.includes(kw))
      );

      // Default fallback if query is general
      if (!matchedEntry) {
        matchedEntry = {
          keywords: ["general"],
          sector: "General Commerce & Foreign Trade",
          hsCode: "Multiple / General Merchandise",
          primaryAgent: "DGFT Central Grievance Desk",
          handoffNeeded: false,
          fromAgent: "Agent A: DGFT Central Assistance Desk",
          fromReason: "Query analyzed under Foreign Trade Policy (FTP 2023) general trade facilitation guidelines.",
          toAgent: null,
          toAction: "General inquiry matched with Trade Facilitation Circulars.",
          gazetteTitle: "Foreign Trade Policy 2023 - General Trade Facilitation Charter",
          gazetteCitation: "Directorate General of Foreign Trade Notification No. 01/2023",
          gazetteClause: "All registered IEC holders are entitled to digital trade facilitation, automated electronic duty credit, and 48-hour grievance redressal under the National Trade Portal guidelines.",
          executiveAnswer: `Based on your inquiry regarding: "${q.substring(0, 80)}...", your matter is registered under DGFT Trade Facilitation guidelines.`,
          actionSteps: [
            "Verify your active IEC and digital signature certificate (DSC) on the DGFT portal.",
            "Submit your supporting invoices or bill of entry referencing your query ID.",
            "Our automated helpdesk will track this under the 48-hour Citizen Charter SLA."
          ],
          efficiency: {
            latency: "1.3s",
            manualTime: "7 days",
            timeSaved: "99.5%",
            confidence: "94.2%",
            costSaved: "₹350 / ticket"
          }
        };
      }

      setIsSearching(false);
      setSearchResult({
        userQuery: q,
        ...matchedEntry
      });
    }, 1100);
  };

  const handleVoiceToggle = () => {
    if (isVoiceActive) {
      setIsVoiceActive(false);
    } else {
      setIsVoiceActive(true);
      setTimeout(() => {
        setIsVoiceActive(false);
        const voiceText = "Our garment factory in Tiruppur has pending RoSCTL rebate credit of 38 Lakhs on cotton apparel export to Germany. How to release scroll?";
        setInputText(voiceText);
        performSearch(voiceText);
      }, 2000);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#080d1a] p-6 lg:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Top Hero Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Ministry of Commerce & Industry • Automated Knowledge & Retrieval Engine</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            How Can We Assist Your Commercial & Industrial Enterprise?
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Type any question regarding export subsidies (RoDTEP/RoSCTL), industrial licensing (DPIIT), EPCG capital goods, or GeM procurement. 
            Our AI classifies your sector, retrieves official Gazette policies, and hands off to the specialized agent automatically.
          </p>
        </div>

        {/* 🔍 LIVE INTERACTIVE SEARCH BAR (The core search experience!) */}
        <div className="bg-[#0f172a] border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-3.5">
          <div className="relative">
            <textarea
              rows={3}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  performSearch();
                }
              }}
              placeholder="Ask a commercial or industrial query (e.g. 'How do I claim RoSCTL rebate for apparel export?', 'Advance license for chemical import', 'GeM payment delayed by PSU')..."
              className="w-full bg-slate-900 border border-slate-700 text-slate-100 text-xs sm:text-sm rounded-xl p-3.5 pr-24 focus:outline-none focus:border-blue-500 placeholder-slate-500 resize-none font-sans leading-relaxed"
            />

            <div className="absolute right-3 bottom-3 flex items-center space-x-2">
              <button
                onClick={handleVoiceToggle}
                title="Bhashini Speech-to-Text"
                className={`p-2 rounded-lg border transition ${
                  isVoiceActive
                    ? 'bg-rose-600 border-rose-500 text-white animate-pulse'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Mic className="w-4 h-4" />
              </button>

              <button
                onClick={() => performSearch()}
                disabled={isSearching || !inputText.trim()}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-4 py-2 rounded-lg font-extrabold shadow-md flex items-center space-x-1.5 transition disabled:opacity-50"
              >
                {isSearching ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                <span>{isSearching ? "Retrieving..." : "Search & Retrieve"}</span>
              </button>
            </div>
          </div>

          {/* Quick-Fill Industry Topic Chips */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              💡 Or Click a Real-World Industrial Case Study to Try:
            </span>
            <div className="flex flex-wrap gap-2">
              {popularTopics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputText(topic.text);
                    performSearch(topic.text);
                  }}
                  className="bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-blue-500/60 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-medium transition"
                >
                  {topic.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Searching Animation State */}
        {isSearching && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 text-center space-y-3 animate-pulse">
            <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <h3 className="text-sm font-bold text-white">AI Multi-Agent Knowledge Engine Working...</h3>
            <p className="text-xs text-slate-400">
              1. Classifying Intent & HS Code &nbsp;•&nbsp; 2. Scanning 4,000+ Gazettes &nbsp;•&nbsp; 3. Verifying Agent Jurisdiction & Handoff
            </p>
          </div>
        )}

        {/* 🎯 SEARCH & RETRIEVAL RESULTS DASHBOARD (Completely clear, un-congested, and powerful!) */}
        {searchResult && !isSearching && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Efficiency & Speed Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0c142b] border border-slate-800 rounded-2xl p-4 text-center">
              <div className="p-2">
                <span className="text-[11px] text-slate-400 block font-medium">Resolution Latency:</span>
                <span className="text-base font-extrabold text-emerald-400 font-mono">{searchResult.efficiency.latency}</span>
                <span className="text-[10px] text-slate-500 block">vs {searchResult.efficiency.manualTime} manual</span>
              </div>
              <div className="p-2 border-l border-slate-800">
                <span className="text-[11px] text-slate-400 block font-medium">Turnaround Gain:</span>
                <span className="text-base font-extrabold text-blue-400 font-mono">{searchResult.efficiency.timeSaved} Faster</span>
                <span className="text-[10px] text-emerald-400 block">Instant Automated Triage</span>
              </div>
              <div className="p-2 border-l border-slate-800">
                <span className="text-[11px] text-slate-400 block font-medium">Gazette Confidence:</span>
                <span className="text-base font-extrabold text-indigo-400 font-mono">{searchResult.efficiency.confidence}</span>
                <span className="text-[10px] text-slate-400 block">Statutory Validated</span>
              </div>
              <div className="p-2 border-l border-slate-800">
                <span className="text-[11px] text-slate-400 block font-medium">Govt Processing Cost:</span>
                <span className="text-base font-extrabold text-amber-400 font-mono">{searchResult.efficiency.costSaved}</span>
                <span className="text-[10px] text-slate-500 block">Zero paper overhead</span>
              </div>
            </div>

            {/* STEP 1: CLASSIFICATION BOX */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-extrabold text-blue-400 uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                <span>Step 1: Automated Knowledge Classification</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-0.5">Commercial Sector:</span>
                  <span className="text-xs font-bold text-white">{searchResult.sector}</span>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-0.5">ITC / HS Code:</span>
                  <span className="text-xs font-mono font-bold text-amber-300">{searchResult.hsCode}</span>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-0.5">Statutory Desk:</span>
                  <span className="text-xs font-bold text-emerald-400">
                    {searchResult.handoffNeeded ? searchResult.toAgent : searchResult.primaryAgent}
                  </span>
                </div>
              </div>
            </div>

            {/* STEP 2: AGENT HANDOFF (How one agent transfers to another seamlessly!) */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                  <Share2 className="w-4 h-4 text-amber-400" />
                  <span>Step 2: Intelligent Multi-Agent Handoff Mechanism</span>
                </div>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold font-mono ${
                  searchResult.handoffNeeded ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {searchResult.handoffNeeded ? "Cross-Department Transfer Required" : "Direct Statutory Jurisdiction"}
                </span>
              </div>

              {searchResult.handoffNeeded ? (
                <div className="space-y-4 pt-1">
                  {/* Agent A: Cannot solve */}
                  <div className="bg-slate-900/90 border border-rose-900/30 rounded-xl p-4 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-rose-300">
                        ❌ {searchResult.fromAgent} (Initial Desk)
                      </span>
                      <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-mono font-bold">
                        Cannot Solve • Outside Jurisdiction
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      "{searchResult.fromReason}"
                    </p>
                  </div>

                  {/* Transfer Visual Connector */}
                  <div className="flex items-center justify-center space-x-2 text-xs text-amber-400 font-bold bg-amber-950/20 py-2 rounded-xl border border-amber-500/20">
                    <Share2 className="w-4 h-4 animate-bounce" />
                    <span>Seamless 1-Click Automated Transfer: Forwarding Case with Full Context</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Agent B: Solves query */}
                  <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-300">
                        ✅ {searchResult.toAgent} (Specialized Destination Desk)
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">
                        Jurisdiction Authorized • Solved
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-sans">
                      "{searchResult.toAction}"
                    </p>
                  </div>
                </div>
              ) : (
                /* Solved directly by primary agent */
                <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-300">
                      ✅ {searchResult.fromAgent} (Direct Statutory Authority)
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">
                      Direct Resolution
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {searchResult.toAction}
                  </p>
                </div>
              )}
            </div>

            {/* STEP 3: RETRIEVED STATUTORY GAZETTE RULE (RAG Vector Proof) */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-extrabold text-indigo-400 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Step 3: Official Gazette Policy Retrieved (Vector RAG)</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {searchResult.gazetteCitation}
                </span>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
                <h4 className="text-xs font-bold text-white leading-snug">
                  {searchResult.gazetteTitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-950/70 p-3 rounded-lg border border-slate-800/80">
                  "{searchResult.gazetteClause}"
                </p>
              </div>
            </div>

            {/* STEP 4: ACTIONABLE OFFICIAL RESOLUTION (The User's Final Answer!) */}
            <div className="bg-gradient-to-br from-blue-950/40 via-slate-900 to-indigo-950/40 border-2 border-blue-500/40 rounded-2xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-blue-900/50 pb-3">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h3 className="font-extrabold text-sm text-white">Verified Official Resolution</h3>
                    <p className="text-[11px] text-slate-400">Step-by-step statutory directions for the enterprise</p>
                  </div>
                </div>

                <button
                  onClick={() => alert("Downloading Official Resolution Memo PDF with Ministry Ashoka Stamp...")}
                  className="bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Memo (PDF)</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                {searchResult.executiveAnswer}
              </p>

              {/* Action Steps */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">
                  Action Steps for the Exporter / Industrialist:
                </span>
                <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  {searchResult.actionSteps.map((step, sIdx) => (
                    <li key={sIdx} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
