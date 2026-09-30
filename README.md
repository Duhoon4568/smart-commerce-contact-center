# Automated Knowledge Management (AKM) Platform
### Smart India Hackathon (SIH) — Ministry of Commerce & Industry

An enterprise-grade, omnichannel trade grievance redressal and autonomous knowledge management platform for the **Ministry of Commerce & Industry (GoI)**, engineered with a **6-Agent Autonomous Architecture**, **Bhashini Indic Voice Support**, and **Government Gazette RAG (Retrieval-Augmented Generation)**.

Built with **React 18 + Vite + Tailwind CSS + Lucide Icons** (Frontend) and **Python FastAPI Multi-Agent Service** (Backend).

---

## 🌟 The 7 Architectural Pillars

| Pillar | Capability | Technical Implementation |
| :--- | :--- | :--- |
| **1. Multi-Agent Pipeline** | 6 autonomous agents collaborating in sequence (Triage, Verification, RAG, Legal Drafter). | Async Multi-Agent Orchestration with latency telemetry (< 350ms). |
| **2. Bhashini Voice Assistant** | Voice note submission & translation for non-English rural MSMEs and artisans. | National Language Translation Mission (Speech-to-Text & translation). |
| **3. PII & Data Sovereignty** | Automatic redaction of sensitive citizen data (Aadhaar, PAN, Bank details). | Regex PII masking compliant with MeitY / NIC MeghRaj cloud norms. |
| **4. Interoperability Hub** | Cross-verification with official government databases. | Pre-configured connectors for **ICEGATE**, **DGFT IEC**, and **GeM**. |
| **5. Policy Blindspot Detector** | Macro query surge detection across trade clusters (Surat, Ludhiana, Kolkata). | Anomaly clustering recommending proactive ministerial circulars. |
| **6. Statutory SLA Matrix** | Enforces the 48-hour Citizen Charter turnaround with automated escalation. | Countdown timers & auto-escalation to Joint Secretary (L3). |
| **7. Immutable Audit Trail** | Cryptographically hashed records for Right to Information (RTI) compliance. | SHA-256 docket hashing and timestamped movement ledger. |

---

## 🤖 The 6-Agent Autonomous Pipeline

```
[Raw Trader Query / Voice Note]
         │
         ▼
 1. 🛡️ PII Masking Agent (Masks Aadhaar, PAN, Phone for NIC compliance)
         │
         ▼
 2. 🌐 Bhashini Voice & Indic Agent (Detects Hindi/Tamil/Gujarati -> Translates)
         │
         ▼
 3. 🎯 Triage & Intent Classifier (Extracts HS Code, Sector, routes to DGFT/DPIIT/GeM)
         │
         ▼
 4. 🔗 ICEGATE & DGFT Verifier (Cross-checks Shipping Bill & IEC in Customs EDI)
         │
         ▼
 5. 📜 Gazette RAG Retriever (Semantic vector search across Foreign Trade Policy 2023)
         │
         ▼
 6. ✍️ Legal Drafter Agent (Synthesizes formal government order with letterhead & citations)
         │
         ▼
[1-Click Officer Review & Digital Dispatch (e-Office Chamber)]
```

---

## 📁 Repository Structure

```
commerce-contact-center/
├── package.json                 # React 18, Tailwind, Lucide dependencies
├── vite.config.js               # Vite frontend configuration
├── tailwind.config.js           # Government portal design tokens
├── backend/                     # Python Multi-Agent Service
│   ├── requirements.txt         # FastAPI, Uvicorn, Pydantic
│   ├── agents.py                # 6 Autonomous Agents (PII, Bhashini, RAG, Drafter)
│   └── main.py                  # FastAPI server with agentic endpoints
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application state & view routing
    ├── index.css                # Global Tailwind styles
    ├── data/
    │   └── mockTickets.js       # Real-world Commerce Ministry dossiers & gazettes
    └── components/
        ├── Header.jsx           # Executive Ministry header & National HUD stats
        ├── ConversationList.jsx # Grievance dossiers, department filter chips & search
        ├── ChatWorkspace.jsx    # e-Office grievance redressal, Multi-Agent & Voice UI
        ├── RightPanel.jsx       # Gazette Intelligence, Interoperability, RTI Audit Hash
        ├── KnowledgeBaseView.jsx# National Gazette & policy vector ingestion
        └── AnalyticsView.jsx    # Macro Policy Blindspot Detector & Query Trends
```

---

## 🚀 How to Run the Project

### 1. Run the React Frontend
```bash
# In the project root directory
npm install
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 2. Run the Python Multi-Agent Backend (Optional)
```bash
cd backend
pip install -r requirements.txt
python main.py
```
FastAPI interactive docs will be live at: **[http://localhost:8000/docs](http://localhost:8000/docs)**

---

## 📤 Push to GitHub

```bash
git add .
git commit -m "feat: complete AKM platform with Multi-Agent RAG, Bhashini Voice, and Policy Blindspot Detector"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```
