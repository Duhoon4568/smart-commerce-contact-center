# Automated Knowledge Management (AKM) Platform
### Smart India Hackathon (SIH) — Ministry of Commerce & Industry

An enterprise-grade, omnichannel contact center and automated knowledge management system for the **Ministry of Commerce & Industry (GoI)**, engineered with an intelligent omnichannel architecture and supercharged with **AI Knowledge RAG (Retrieval-Augmented Generation)**.

Built with **React 18 + Vite + Tailwind CSS + Lucide Icons**.

---

## 🌟 Key Platform Capabilities

| Feature | Description |
| :--- | :--- |
| **3-Column Shared Inbox** | Omnichannel ticket queues across DGFT, DPIIT, and GeM desks. |
| **Dual-Mode Response Composer** | Switch seamlessly between **Public Official Reply** and **Internal Ministry Note (L2/L3)**. |
| **Enterprise CRM Profile** | Automatically displays **IEC (Import Export Code)**, **GSTIN**, **Annual Export Turnover**, and **MSME Scale**. |
| **AI Knowledge Co-Pilot (RAG)** | Performs vector search on over 4,000+ official ministry circulars and gazettes (FTP 2023, DPIIT, GeM GTC) to cite exact clauses and draft replies. |
| **Closed-Loop FAQ Generator** | Detects recurring query spikes (knowledge gaps) and auto-drafts public FAQs for administrator approval. |
| **Multilingual Support (Indic / Bhashini)** | Auto-translates regional language inquiries (Hindi, Gujarati, Tamil, etc.). |
| **SLA & Audit Compliance** | Live citizen charter 48-hour compliance timers and immutable audit trails. |

---

## 📁 Project Structure

```
commerce-contact-center/
├── .gitignore
├── index.html                   # HTML entry point for Vite
├── package.json                 # React + Tailwind + Lucide dependencies
├── vite.config.js               # Vite build configuration
├── tailwind.config.js           # Tailwind styling configuration
├── postcss.config.js
├── demo.html                    # Standalone zero-dependency HTML preview
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main application state & view routing
    ├── index.css                # Global Tailwind directives
    ├── data/
    │   └── mockTickets.js       # Real-world Ministry tickets & gazette clauses
    └── components/
        ├── Header.jsx           # Executive Ministry header & National HUD stats
        ├── ConversationList.jsx # Grievance dossiers, department filter chips & search
        ├── ChatWorkspace.jsx    # e-Office grievance redressal & dispatch chamber
        ├── RightPanel.jsx       # Gazette Intelligence (RAG), ICEGATE verification, SLA
        ├── KnowledgeBaseView.jsx# National Gazette & policy vector ingestion
        └── AnalyticsView.jsx    # Resolution metrics & sector query trends
```

---

## 🚀 Quick Start (Local Development)

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📤 How to Push to GitHub

1. Create a new repository on your GitHub account (e.g. `automated-knowledge-management`).
2. Run the following commands in this project folder:

```bash
git add .
git commit -m "feat: initial commit of Automated Knowledge Management platform"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```
