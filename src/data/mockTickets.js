export const initialTickets = [
  {
    id: "FILE-DGFT/2026/0942",
    contactName: "Tiruppur Apparel Exports Ltd",
    sender: "Tiruppur Textile Cluster, Tamil Nadu",
    iec: "3208019482",
    gstin: "33AAACT9182L1Z4",
    channel: "DGFT Exporter Portal",
    desk: "DGFT Export Promotion Desk",
    departmentCode: "DGFT",
    title: "Pending RoSCTL rebate credit of ₹38.4 Lakhs on 5 container shipments of cotton apparel to EU",
    preview: "Shipping bills #771201 to #771205 cleared Chennai port under RoSCTL scheme. E-scrip not generated past 45 days...",
    status: "Open",
    priority: "High Priority",
    time: "15m ago",
    aiMatch: "97%",
    category: "RoSCTL Rebate Scheme (Apparel)",
    hsCode: "6109.10 (Cotton Knitwear)",
    sentiment: "High Business Urgency",
    messages: [
      {
        id: 1,
        type: "user",
        sender: "K. Soundararajan (Managing Director)",
        time: "10:30 AM",
        text: "Respected Officer,\n\nOur textile manufacturing unit in Tiruppur dispatched 5 consignments of 100% organic cotton knitted garments (total export value ₹4.2 Crore, Shipping Bill Nos: 771201 to 771205) via Chennai Port to Hamburg, Germany. \n\nUnder the Ministry's RoSCTL (Rebate of State and Central Taxes and Levies) scheme, we are entitled to a 4.8% rebate rebate scroll worth ₹38.4 Lakhs. It has been over 45 days since Let Export Order (LEO) was granted, but our ICEGATE e-scrip ledger still shows 'Scroll Generation Suspended'.\n\nBecause our working capital is locked, we request immediate technical clearance and release of our scrips."
      },
      {
        id: 2,
        type: "system",
        text: "🤖 AI Intelligence Triage: Identified as RoSCTL Scrip Issue under Foreign Trade Policy (FTP 2023) - Chapter 4. Cross-referenced with CBIC Notification No. 77/2021-Customs."
      }
    ],
    clauses: [
      {
        title: "Ministry of Textiles Notification No. 12015/11/2020-T&R",
        citation: "Gazette of India Extraordinary S.O. 3122(E)",
        text: "RoSCTL e-scrips for apparel exports under Chapters 61 & 62 shall be credited to the exporter's electronic duty credit ledger within 15 calendar days from the date of realization of shipping bill scrolls, provided no active EPCG export obligation default notice is flagged."
      },
      {
        title: "CBIC Circular No. 22/2023 - Port Scrip Rectification",
        citation: "Department of Revenue Trade Circular",
        text: "Where an exporter's e-scrip scroll is paused due to PFMS bank validation mismatch, the Regional DGFT office may issue a manual transmission override to the customs server within 24 hours."
      }
    ],
    suggestedDraft: "Dear Shri K. Soundararajan,\n\nRef: Grievance Dossier #FILE-DGFT/2026/0942 regarding RoSCTL Rebate for Shipping Bills #771201–771205.\n\nUpon automated verification with Chennai Customs EDI, your RoSCTL scroll was held due to a pending PFMS IFSC code validation on the ICEGATE bank management module.\n\nResolution & Directions:\n1. The DGFT Directorate has transmitted an automated API override to Chennai Customs.\n2. Your RoSCTL e-scrip scroll for ₹38,40,000/- is approved and scheduled to credit to your electronic duty ledger in tonight's EDI settlement batch.\n\nIssued with the approval of the Zonal Joint Director General of Foreign Trade.\n\nRegards,\nDGFT Export Assistance Desk",
    profile: {
      scale: "Medium Enterprise (MSME)",
      turnover: "₹64.5 Crore / Year",
      city: "Tiruppur, Tamil Nadu",
      sector: "Textiles, Apparels & Knitwear Manufacturing"
    }
  },
  {
    id: "FILE-DP-2026/1104",
    contactName: "Bharat Bulk Drugs & Pharma Pvt Ltd",
    sender: "Hyderabad Pharma City, Telangana",
    iec: "0711928301",
    gstin: "36AABCB4411P1Z9",
    channel: "National Single Window (NSWS)",
    desk: "DPIIT Industrial Approvals",
    departmentCode: "DPIIT",
    title: "Advance License customs duty exemption on API raw material import for US export formulation",
    preview: "Application for duty-free import of pharmaceutical intermediates for life-saving cardiovascular drugs...",
    status: "Open",
    priority: "Urgent",
    time: "42m ago",
    aiMatch: "95%",
    category: "Pharma Advance Authorization",
    hsCode: "2933.39 (Organic API Chemicals)",
    sentiment: "Urgent Regulatory Filing",
    messages: [
      {
        id: 1,
        type: "user",
        sender: "Dr. Srinivas Reddy (Head of Regulatory Affairs)",
        time: "09:45 AM",
        text: "Dear Department Officers,\n\nBharat Bulk Drugs holds USFDA and WHO-GMP certifications at our Hyderabad facility. We have received an export order worth $2.8 Million for cardiovascular formulations from the United States.\n\nWe applied for an Advance Authorization (File Ref #PHARMA-HYD-991) to import 12 metric tonnes of chemical precursor duty-free. The port customs authority is requiring a dual NOC from CDSCO which is already covered under the Ministry's 2024 Fast-Track Pharma Exemption Circular. We request clarification so customs clearance at JNPT Port is not stalled."
      },
      {
        id: 2,
        type: "system",
        text: "🤖 AI Intelligence Triage: Matched DPIIT & DGFT Joint Notification on Pharmaceutical Export Facilitation. Fast-Track Advance Authorization criteria verified."
      }
    ],
    clauses: [
      {
        title: "DPIIT & DGFT Public Notice No. 48/2023 - Pharma Advance License",
        citation: "Foreign Trade Policy 2023 - Chapter 4 (Duty Exemption Scheme)",
        text: "Recognized USFDA / WHO-GMP approved pharmaceutical manufacturing units exporting formulations are granted deemed fast-track clearance for Advance Authorization inputs without requiring separate port-level NOCs, provided the Drug Master File (DMF) is registered on the CDSCO SUGAM portal."
      }
    ],
    suggestedDraft: "Dear Dr. Srinivas Reddy,\n\nRef: Advance Authorization Fast-Track Clearance for Active Pharmaceutical Intermediates.\n\nIn accordance with DGFT Public Notice No. 48/2023 read with Chapter 4 of FTP 2023:\n\nYour facility's WHO-GMP credentials and SUGAM portal DMF submission have been cross-verified. JNPT Customs EDI has been furnished with an electronic clearance certificate under the National Single Window System (NSWS).\n\nYour raw material consignment may be cleared at 0% basic customs duty under Advance Authorization License #PHARMA-HYD-991.\n\nYours faithfully,\nIndustrial Licencing & Export Desk,\nDPIIT & DGFT Cell",
    profile: {
      scale: "Large Enterprise",
      turnover: "₹185.0 Crore / Year",
      city: "Hyderabad, Telangana",
      sector: "Active Pharmaceutical Ingredients (APIs) & Bulk Drugs"
    }
  },
  {
    id: "FILE-EPCG/2026/3012",
    contactName: "Kirloskar Precision Auto Components",
    sender: "Chakan Industrial Zone, Pune",
    iec: "3104928172",
    gstin: "27AAACK5512N1ZQ",
    channel: "DGFT Portal",
    desk: "DGFT Capital Goods Desk",
    departmentCode: "DGFT",
    title: "EPCG 0% duty machinery import: Export Obligation Discharge Certificate (EODC) issuance delay",
    preview: "We completed 6x export obligation on 5-Axis CNC Milling machines. Bond cancellation pending...",
    status: "Open",
    priority: "Normal",
    time: "1h ago",
    aiMatch: "93%",
    category: "EPCG Scheme (Capital Goods)",
    hsCode: "8466.93 (Precision Machine Tools)",
    sentiment: "Administrative Follow-up",
    messages: [
      {
        id: 1,
        type: "user",
        sender: "Milind Deshmukh (GM - Supply Chain & Trade Compliance)",
        time: "09:00 AM",
        text: "Respected Authorities,\n\nUnder EPCG Authorization #0330018892 dated 14/02/2022, we imported high-precision CNC machinery at 0% customs duty for automotive transmission parts manufacturing.\n\nOur statutory Export Obligation was ₹18.2 Crore within 6 years. We have already exported ₹22.6 Crore worth of precision gears to BMW and Hyundai (verified by Bank Realization Certificates - e-BRC). We submitted our EODC closure docket 60 days ago. Because of the open customs bank guarantee, our credit lines are blocked. Kindly issue the EODC."
      },
      {
        id: 2,
        type: "system",
        text: "🤖 AI Intelligence Triage: Export Obligation fulfilled (124% of quota). Audited against e-BRC repository on DGFT Portal."
      }
    ],
    clauses: [
      {
        title: "FTP 2023 - Paragraph 5.14: Redemption of EPCG Authorizations",
        citation: "Handbook of Procedures Vol 1",
        text: "Where an authorization holder fulfills 100% of the export obligation substantiated by electronic e-BRCs, the Regional Authority shall issue the Export Obligation Discharge Certificate (EODC) within 30 days and direct Customs to release the bank guarantee."
      }
    ],
    suggestedDraft: "Dear Shri Milind Deshmukh,\n\nRef: EPCG Authorization #0330018892 - Grant of EODC & Bank Guarantee Release.\n\nScrutiny of your e-BRC submissions confirms that Kirloskar Precision Auto Components has completed 124.1% of its mandatory export obligation.\n\nAction Taken:\n1. Export Obligation Discharge Certificate (EODC) #EODC-PUNE-2026-881 has been issued.\n2. An automated instruction has been transmitted to Mumbai Air Cargo Customs to cancel the bank guarantee of ₹45,00,000/-.\n\nRegards,\nRegional DGFT Pune Office",
    profile: {
      scale: "Large Enterprise",
      turnover: "₹142.0 Crore / Year",
      city: "Pune, Maharashtra",
      sector: "Automotive Precision Engineering & Capital Goods"
    }
  },
  {
    id: "FILE-GEM/2026/8831",
    contactName: "Shree Jagannath Steel & Fabricators",
    sender: "Rourkela Steel Corridor, Odisha",
    iec: "2401928374",
    gstin: "21AAACJ9988K1ZY",
    channel: "WhatsApp Business (+91 94370-XXXXX)",
    desk: "GeM & MSME Samadhaan Desk",
    departmentCode: "GeM",
    title: "GeM procurement order payment overdue by 68 days from Public Sector Undertaking buyer",
    preview: "Consignee Receipt (CRAC) approved 2 months ago for structural steel girders worth ₹28.5 Lakhs...",
    status: "Escalated",
    priority: "High Priority",
    time: "2h ago",
    aiMatch: "98%",
    category: "MSME Samadhaan / Delayed Payment",
    hsCode: "7308.90 (Fabricated Structural Steel)",
    sentiment: "High Financial Distress",
    messages: [
      {
        id: 1,
        type: "user",
        sender: "Bikram Kishore Jena (Proprietor)",
        time: "08:15 AM",
        text: "Sir, we are an MSE fabrication unit in Rourkela. We supplied fabricated steel bridge components worth ₹28,50,000/- under GeM Order #GEM-2026-B-4412 to a railway PSU manufacturing workshop. \n\nCRAC was generated on 24th January 2026. Today it has been 68 days. The buyer finance branch is neither disbursing payment nor replying to our letters. Our factory workers' wages are held up. Please take penal action under GeM GTC and MSMED Act."
      },
      {
        id: 2,
        type: "system",
        text: "🤖 AI Intelligence Triage: Severe violation of MSMED Act Section 15 and Ministry of Finance OM on GeM GTC. High priority auto-escalation triggered."
      }
    ],
    clauses: [
      {
        title: "GeM General Terms & Conditions (GTC) Clause 12 - 10-Day MSME Rule",
        citation: "Department of Expenditure OM F.6/18/2019-PPD",
        text: "Government buyers must release 100% payment within 10 calendar days of CRAC generation for MSME suppliers. Delayed payments attract mandatory penal interest of 1% per month deducted directly from the buyer organization's budgetary allocation."
      },
      {
        title: "MSME Development Act 2006 - Section 16",
        citation: "Statutory Law of India",
        text: "Where buyer fails to make payment within 45 days, buyer is liable to pay compound interest with monthly rests to the supplier at three times the Bank Rate notified by RBI."
      }
    ],
    suggestedDraft: "Dear Shri Bikram Kishore Jena,\n\nRef: GeM Order #GEM-2026-B-4412 - Urgent Payment Recovery Notice.\n\nThe Ministry takes serious cognizance of delayed payments to MSME manufacturers.\n\nImmediate Actions Executed:\n1. A Red-Flag Non-Compliance Notice has been served to the Director of Finance of the concerned PSU buyer under GeM GTC Clause 12.\n2. The buyer's purchasing rights on the GeM portal are placed on temporary freeze until invoice clearance is confirmed.\n3. Penal interest under Section 16 of the MSMED Act is calculating automatically.\n\nPayment disbursement is tracked under 72-hour emergency escalation.\n\nWarm regards,\nGeM MSME Redressal Cell",
    profile: {
      scale: "Micro Enterprise (MSE)",
      turnover: "₹2.4 Crore / Year",
      city: "Rourkela, Odisha",
      sector: "Heavy Metal Fabrication & Structural Steel"
    }
  },
  {
    id: "FILE-AGRI/2026/5120",
    contactName: "Nashik Valley Agro Cold-Chain Exporters",
    sender: "Nashik Agri-Zone, Maharashtra",
    iec: "0812938475",
    gstin: "27AAACN3344M1Z2",
    channel: "DGFT Portal (Bhashini Indic)",
    desk: "APEDA & Agri-Export Desk",
    departmentCode: "DGFT",
    title: "कोल्ड-चेन कंटेनर में टेबल अंगूर निर्यात: JNPT पोर्ट पर फाइटोसैनिटरी क्लीयरेंस और सब्सिडी प्रक्रिया",
    preview: "नाशिक से यूरोप भेजे जाने वाले 10 रीफर कंटेनरों में अंगूरों की शिपमेंट के लिए लैब टेस्ट रिपोर्ट...",
    status: "Open",
    priority: "Normal",
    time: "3h ago",
    aiMatch: "91%",
    category: "Agri Perishable Exports (Cold-Chain)",
    hsCode: "0806.10 (Fresh Table Grapes)",
    sentiment: "Time-Sensitive Perishable",
    messages: [
      {
        id: 1,
        type: "user",
        sender: "सचिन शिंदे (नाशिक द्राक्ष उत्पादक संघ)",
        time: "07:30 AM",
        text: "नमस्कार अधिकारी महोदय, हमारे नाशिक फार्मर्स कंसोर्टियम ने नीदरलैंड्स (रॉटरडैम) निर्यात के लिए 10 रीफर (रेफ्रिजरेटेड) कंटेनर ताजे टेबल अंगूर तैयार किए हैं। माल JNPT पोर्ट पर 24 घंटे में पहुंच रहा है। \n\nAPEDA के 'GrapeNet' पोर्टल पर फाइटोसैनिटरी डिजिटल सर्टिफिकेट अपलोड कर दिया गया है। क्या पोर्ट पर कस्टम्स द्वारा 'Green Channel' प्राथमिकता क्लीयरेंस और कृषि निर्यात प्रोत्साहन योजना के तहत परिवहन सब्सिडी मिलेगी ताकि तापमान बिगड़ने से फल खराब न हों?"
      },
      {
        id: 2,
        type: "system",
        text: "🌐 Bhashini Indic Engine: Automatically detected Marathi/Hindi (mr/hi). Certified translation generated for officer desk."
      }
    ],
    clauses: [
      {
        title: "कृषि निर्यात नीति (AEP 2023) - परिशिष्ट 3बी (नाशिक क्लस्टर)",
        citation: "वाणिज्य एवं उद्योग मंत्रालय अधिसूचना सं. 14/2023",
        text: "नाशिक क्लस्टर से यूरोप को निर्यात होने वाले प्रमाणित टेबल अंगूरों के लिए JNPT और न्हावा शेवा बंदरगाह पर 'फास्ट-ट्रैक ग्रीन चैनल' अनिवार्य है। शिपिंग बिल पर GrapeNet नंबर लिंक होने पर 4 घंटे में कस्टम्स LEO जारी करना आवश्यक है।"
      }
    ],
    suggestedDraft: "प्रिय श्री सचिन शिंदे जी,\n\nआपके 10 रीफर कंटेनर अंगूर निर्यात (GrapeNet प्रमाणित) के संबंध में कृषि निर्यात नीति 2023 के तहत निर्देश:\n\n1. JNPT पोर्ट पर कस्टम्स कोल्ड-चेन हेल्पडेस्क को आपके कंटेनर नंबरों के साथ अलर्ट भेज दिया गया है।\n2. आपके शिपमेंट को 'ग्रीन चैनल फास्ट-ट्रैक' के तहत 4 घंटे में Let Export Order (LEO) प्रदान किया जाएगा।\n3. कृषि निर्यात नीति के तहत 15% रीफर फ्रेट सब्सिडी आपके ई-बैंकिंग खाते में स्क्रिप रूप में स्वीकृत की जा रही है।\n\nसादर,\nकृषि एवं प्रसंस्कृत खाद्य उत्पाद निर्यात विकास प्राधिकरण (APEDA) हेल्पडेस्क",
    profile: {
      scale: "Farmer Producer Organization (FPO / MSME)",
      turnover: "₹18.5 Crore / Year",
      city: "Nashik, Maharashtra",
      sector: "Horticulture Cold-Chain & Perishable Agro-Exports"
    }
  }
];
