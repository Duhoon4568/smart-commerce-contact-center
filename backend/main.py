from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from agents import MultiAgentOrchestrator, BhashiniVoiceAgent, PIIMaskingAgent

app = FastAPI(
    title="Ministry of Commerce & Industry AI Agentic Gateway",
    description="Automated Multi-Agent System for Trade Grievances & Gazette Knowledge RAG",
    version="2.0.0"
)

# CORS setup for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GrievancePayload(BaseModel):
    query: str
    iec: str
    trader_name: str
    channel: Optional[str] = "National Portal"

class VoicePayload(BaseModel):
    audio_base64: Optional[str] = None
    transcript_text: str
    source_language: Optional[str] = "hi"

@app.get("/")
def root():
    return {
        "status": "Online",
        "ministry": "Ministry of Commerce & Industry, Government of India",
        "engine": "AKM Multi-Agent Orchestrator (PII + Bhashini + RAG + Legal Drafter)"
    }

@app.post("/api/orchestrate")
def run_agentic_pipeline(payload: GrievancePayload):
    """Executes the full 6-agent pipeline with execution latency benchmarks."""
    try:
        result = MultiAgentOrchestrator.execute_pipeline(
            raw_query=payload.query,
            iec=payload.iec,
            trader_name=payload.trader_name
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/voice-bhashini")
def process_voice_bhashini(payload: VoicePayload):
    """Processes speech input via Bhashini Indic translation pipeline."""
    result = BhashiniVoiceAgent.process_indic_input(
        text=payload.transcript_text,
        source_lang=payload.source_language
    )
    return result

@app.get("/api/policy-heatmap")
def get_macro_policy_heatmap():
    """Policy Blindspot Detector: Returns regional anomaly clusters for Ministry Leadership."""
    return {
        "timestamp": "2026-09-30T10:00:00Z",
        "macro_anomalies": [
            {
                "cluster": "Surat Textile Cluster, Gujarat",
                "sector": "Manmade Fibres & Apparel",
                "surge_percentage": "+82%",
                "query_count_7d": 412,
                "detected_blindspot": "Customs Notification No. 14/2026 caused duty drawback confusion on imported polyester filament.",
                "recommended_circular": "Issue Urgent Clarification on FTP Para 4.40 via DGFT Public Notice."
            },
            {
                "cluster": "Ludhiana Engineering Hub, Punjab",
                "sector": "Industrial Tooling & Machinery",
                "surge_percentage": "+64%",
                "query_count_7d": 289,
                "detected_blindspot": "GeM delayed payment dispute under MSMED Act Section 15.",
                "recommended_circular": "Issue Warning Notice to Public Sector Undertaking Finance Nodal Officers."
            },
            {
                "cluster": "Kolkata Agri-Export Zone, West Bengal",
                "sector": "Organic Orthodox Tea & Spices",
                "surge_percentage": "+45%",
                "query_count_7d": 194,
                "detected_blindspot": "Missing APEDA electronic inspection code in ICEGATE shipping bill EDI transmission.",
                "recommended_circular": "Publish Portal Step-by-Step FAQ on Section 149 Customs Bill Amendments."
            }
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
