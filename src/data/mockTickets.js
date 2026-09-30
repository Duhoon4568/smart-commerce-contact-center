export const initialTickets = [
  {
    id: "TICK-DG-4102",
    contactName: "Rajesh Agro Exports Ltd",
    sender: "Kolkata, WB",
    iec: "0508012345",
    gstin: "07AAACR1234F1Z8",
    channel: "Web Portal",
    desk: "DGFT Export Wing",
    departmentCode: "DGFT",
    title: "RoDTEP subsidy claim rejected for organic tea shipment to UK",
    preview: "Our shipping bill #8912301 was rejected for RoDTEP rebate under HS Code 0902. Please review...",
    status: "Open",
    priority: "High",
    time: "12m ago",
    aiMatch: "96%",
    category: "Duty Remission (RoDTEP)",
    hsCode: "0902.40.10",
    sentiment: "Urgent",
    messages: [
      {
        id: 1,
        type: "user",
        sender: "Vikram Sengupta (Rajesh Agro Exports)",
        time: "10:15 AM",
        text: "Respected Officer, our consignment of organic Darjeeling orthodox tea (Shipping Bill No: 8912301, dated 12/05/2026) exported via Kolkata port has been marked 'Ineligible for RoDTEP rebate' on the customs portal. As per DGFT notification, organic black tea under HS Code 0902 is entitled to 2.1% rebate. Kindly clarify why our claim is stalled."
      },
      {
        id: 2,
        type: "system",
        text: "🤖 AI Knowledge Triage: Classified under Foreign Trade Policy (FTP) 2023 - Duty Remission Schemes. Relevant Gazette Notification No. 53/2023 auto-retrieved."
      }
    ],
    clauses: [
      {
        title: "DGFT Notification No. 53/2023 - Appendix 4R",
        citation: "Ministry of Commerce Gazette Notification S.O. 4112(E)",
        text: "Exporters claiming RoDTEP rebate under ITC (HS) 0902.40 must have their electronic shipping bill tagged with APEDA organic export inspection code 'ORG-IND-2023' at the time of Let Export Order (LEO). If omitted, an amendment request under Section 149 of the Customs Act must be submitted to the Jurisdictional Customs Commissioner."
      },
      {
        title: "FTP 2023 - Para 4.14(c) Amendment Window",
        citation: "Handbook of Procedures Vol 1",
        text: "A 90-day grace period is provided to rectify missing scheme codes by presenting APEDA transaction certificate to the EDI Helpdesk."
      }
    ],
    suggestedDraft: "Dear Shri Vikram Sengupta,\n\nWith reference to your query regarding RoDTEP rebate for Shipping Bill No. 8912301 under HS Code 0902.40.10:\n\nAs per DGFT Gazette Notification No. 53/2023 (Appendix 4R), organic tea consignments require the APEDA organic inspection code 'ORG-IND-2023' tagged before the LEO. Since the code was missing in your EDI transmission, your claim was paused.\n\nResolution Steps:\n1. Apply for a post-LEO shipping bill amendment under Section 149 of the Customs Act at Kolkata Customs.\n2. Submit your valid APEDA transaction certificate through the ICEGATE portal.\n3. Upon amendment, the RoDTEP scroll will generate automatically in the next weekly cycle.\n\nBest regards,\nDGFT Export Assistance Desk",
    profile: {
      scale: "Medium Enterprise (MSME)",
      turnover: "₹42.8 Cr / Year",
      city: "Kolkata, West Bengal",
      sector: "Agri-Commodities & Spice Processing"
    }
  },
  {
    id: "TICK-DP-1092",
    contactName: "NexaTech Bio Pvt Ltd",
    sender: "Bengaluru, KA",
    iec: "0719827361",
    gstin: "29AABCN5678P1ZQ",
    channel: "Email",
    desk: "DPIIT Startups Desk",
    departmentCode: "DPIIT",
    title: "Section 80-IAC tax exemption certificate pending past 90 days",
    preview: "We filed Form-1 for 3-year tax holiday under Startup India. Application #DPIIT-89102 pending review...",
    status: "Open",
    priority: "Normal",
    time: "1h ago",
    aiMatch: "91%",
    category: "Startup Tax Exemption",
    hsCode: "N/A (BioTech Services)",
    sentiment: "Neutral",
    messages: [
      {
        id: 1,
        type: "user",
        sender: "Dr. Ananya Rao (NexaTech Bio)",
        time: "09:30 AM",
        text: "Hello DPIIT Support, our startup NexaTech Bio was incorporated in Dec 2023 and holds valid DPIIT Recognition (DIPP-98124). We submitted our Inter-Ministerial Board (IMB) application for 80-IAC certificate 94 days ago. Could you provide the board meeting timeline?"
      },
      {
        id: 2,
        type: "system",
        text: "🤖 AI Knowledge Triage: Classified under Startup India Gazette Notification G.S.R. 127(E). IMB Review Queue verified."
      }
    ],
    clauses: [
      {
        title: "DPIIT Notification G.S.R. 127(E) - Para 4",
        citation: "Inter-Ministerial Board Guidelines",
        text: "Applications for certification under Section 80-IAC of the Income Tax Act are reviewed in chronological order by the Inter-Ministerial Board convened twice a month. Startups can track meeting agenda papers via the Startup India portal dashboard."
      }
    ],
    suggestedDraft: "Dear Dr. Ananya Rao,\n\nThank you for reaching out to the DPIIT Startup India Desk.\n\nYour application #DPIIT-89102 has been cleared by the preliminary technical scrutiny committee and is listed under Agenda Item 4 for the upcoming 84th Inter-Ministerial Board (IMB) meeting scheduled for next Thursday.\n\nYou will receive official intimation and the board's decision directly on your Startup India dashboard within 5 working days of the meeting.\n\nWarm regards,\nDPIIT Startup Support Desk",
    profile: {
      scale: "DPIIT Recognized Startup",
      turnover: "₹3.2 Cr / Year",
      city: "Bengaluru, Karnataka",
      sector: "Biotechnology & Healthcare"
    }
  },
  {
    id: "TICK-GEM-8831",
    contactName: "Precision Tools & Dies",
    sender: "Ludhiana, PB",
    iec: "0301928374",
    gstin: "03AAACP9988K1ZY",
    channel: "WhatsApp",
    desk: "GeM Grievance Desk",
    departmentCode: "GeM",
    title: "GeM portal payment overdue by 65 days from buyer",
    preview: "Consignee Receipt (CRAC) was generated 2 months back. Buyer has not disbursed payment...",
    status: "Escalated",
    priority: "Urgent",
    time: "2h ago",
    aiMatch: "98%",
    category: "MSME Samadhaan / GeM Terms",
    hsCode: "8207.30 (Tooling)",
    sentiment: "Escalated",
    messages: [
      {
        id: 1,
        type: "user",
        sender: "Gurpreet Singh (Precision Tools)",
        time: "08:15 AM",
        text: "Sir, we supplied engineering fixtures worth ₹14.5 Lakhs under GeM Order #GEM-2026-B-1902 to a railway manufacturing unit. CRAC was issued on 15th March. It is now over 65 days, and payment is withheld without explanation. As an MSE unit, our working capital is locked."
      },
      {
        id: 2,
        type: "system",
        text: "🤖 AI Knowledge Triage: Flagged MSME Development Act Section 15 violation. Auto-escalated to GeM Nodal Officer."
      }
    ],
    clauses: [
      {
        title: "GeM General Terms & Conditions (GTC) Clause 12",
        citation: "Ministry of Finance OM F.6/18/2019-PPD",
        text: "Buyer must release 100% payment within 10 calendar days of CRAC generation for MSME sellers. In case of delay beyond 10 days, penal interest of 1% per month is auto-levied on the buyer organization and reported to the Department of Expenditure."
      }
    ],
    suggestedDraft: "Dear Shri Gurpreet Singh,\n\nWe have reviewed GeM Order #GEM-2026-B-1902. Under Clause 12 of GeM GTC and Department of Expenditure guidelines, the buyer was mandated to disburse payment within 10 days of CRAC.\n\nAction Taken:\n1. A high-priority formal notice has been dispatched to the Nodal Finance Officer of the concerned purchasing unit.\n2. In accordance with Section 16 of the MSMED Act, compound penal interest is applicable for this delayed period.\n3. You are also advised to lodge a parallel claim on the MSME Samadhaan portal referencing this ticket ID.\n\nWe are actively monitoring this escalation for resolution within 72 hours.\n\nRegards,\nGeM Seller Assistance Cell",
    profile: {
      scale: "Micro Enterprise (MSE)",
      turnover: "₹1.8 Cr / Year",
      city: "Ludhiana, Punjab",
      sector: "Heavy Engineering & Tooling"
    }
  },
  {
    id: "TICK-BH-9921",
    contactName: "श्री बालाजी टेक्सटाइल्स (सूरत)",
    sender: "Surat, GJ",
    iec: "0812938475",
    gstin: "24AAACS3344M1Z2",
    channel: "Web Portal (Hindi)",
    desk: "DGFT Regional Surat",
    departmentCode: "DGFT",
    title: "कस्टम ड्यूटी छूट और एडवांस ऑथराइजेशन स्कीम के तहत फैब्रिक आयात की अनुमति",
    preview: "हमने पॉलिएस्टर यार्न आयात के लिए एडवांस लाइसेंस आवेदन संख्या #ADV-9901 भरी थी...",
    status: "Open",
    priority: "Normal",
    time: "3h ago",
    aiMatch: "88%",
    category: "Advance Authorization (Textiles)",
    hsCode: "5402.33 (Polyester Yarn)",
    sentiment: "Neutral",
    messages: [
      {
        id: 1,
        type: "user",
        sender: "रमेशभाई पटेल (सूरत)",
        time: "07:30 AM",
        text: "नमस्कार अधिकारी महोदय, हमारी फर्म ने रेडीमेड गारमेंट्स निर्यात के लिए पॉलिएस्टर यार्न शून्य कस्टम ड्यूटी पर आयात करने हेतु एडवांस ऑथराइजेशन के लिए आवेदन किया था। क्या 18 महीने की निर्यात बाध्यता (Export Obligation) में छूट या विस्तार मिल सकता है?"
      },
      {
        id: 2,
        type: "system",
        text: "🌐 Bhashini Indic Engine: Automatically detected Hindi (hi_IN). Translated query available for officer view."
      }
    ],
    clauses: [
      {
        title: "विदेश व्यापार नीति (FTP 2023) - पैरा 4.40",
        citation: "डीजीएफटी अधिसूचना सं. 01/2023",
        text: "एडवांस ऑथराइजेशन के तहत आयातित कच्चे माल पर निर्यात बाध्यता की मानक अवधि आयात की तारीख से 18 महीने है। क्षेत्रीय प्राधिकारी द्वारा 0.5% कंपोज़िशन शुल्क के भुगतान पर 6 महीने का अतिरिक्त विस्तार दिया जा सकता है।"
      }
    ],
    suggestedDraft: "प्रिय रमेशभाई पटेल जी,\n\nआपके आवेदन संख्या #ADV-9901 के संबंध में विदेश व्यापार नीति 2023 के पैरा 4.40 के अनुसार:\n\nएडवांस ऑथराइजेशन में निर्यात बाध्यता (EO) की प्रारंभिक अवधि 18 माह होती है। यदि आप इसे बढ़ाना चाहते हैं, तो सूरत DGFT क्षेत्रीय कार्यालय में 0.5% कंपोज़िशन शुल्क के साथ ऑनलाइन 'Extension of Export Obligation' का आवेदन कर सकते हैं। इससे आपको 6 महीने का अतिरिक्त समय प्रदान किया जाएगा।\n\nसादर,\nडीजीएफटी क्षेत्रीय सहायता केंद्र, सूरत",
    profile: {
      scale: "Small Enterprise (MSME)",
      turnover: "₹12.4 Cr / Year",
      city: "Surat, Gujarat",
      sector: "Manmade Textile & Garments"
    }
  }
];
