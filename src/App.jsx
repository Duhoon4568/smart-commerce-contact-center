import React, { useState } from 'react';
import Header from './components/Header';
import ConversationList from './components/ConversationList';
import ChatWorkspace from './components/ChatWorkspace';
import RightPanel from './components/RightPanel';
import KnowledgeBaseView from './components/KnowledgeBaseView';
import AnalyticsView from './components/AnalyticsView';
import { initialTickets } from './data/mockTickets';

export default function App() {
  const [currentView, setCurrentView] = useState('inbox');
  const [activeDesk, setActiveDesk] = useState('all');
  const [tickets, setTickets] = useState(initialTickets);
  const [selectedTicketId, setSelectedTicketId] = useState(initialTickets[0].id);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);

  const activeTicket = tickets.find((t) => t.id === selectedTicketId) || tickets[0];

  const handleSendMessage = (text, mode) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setTickets((prev) =>
      prev.map((t) => {
        if (t.id !== selectedTicketId) return t;

        const newMsg = {
          id: Date.now(),
          type: mode === 'reply' ? 'agent' : 'note',
          sender: mode === 'reply' ? 'Rajesh Sharma (Zonal DGFT Officer)' : 'Rajesh Sharma (Internal Noting)',
          time: timeStr,
          text: text
        };

        return {
          ...t,
          messages: [...t.messages, newMsg]
        };
      })
    );
  };

  const handleResolveTicket = () => {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id !== selectedTicketId) return t;

        const systemMsg = {
          id: Date.now(),
          type: 'system',
          text: `✅ Commercial Grievance Marked as 'Disposed / Order Issued' by Officer R. Sharma. Citizen Charter SLA fulfilled.`
        };

        return {
          ...t,
          status: 'Resolved',
          messages: [...t.messages, systemMsg]
        };
      })
    );
  };

  const handleStatusChange = (newStatus) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === selectedTicketId ? { ...t, status: newStatus } : t))
    );
  };

  // 🔀 Inter-Agent / Cross-Department Dossier Transfer Handler
  const handleTransferTicket = (ticketId, targetDeptCode, targetDeskName, reason) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setTickets((prev) =>
      prev.map((t) => {
        if (t.id !== ticketId) return t;

        const transferMsg = {
          id: Date.now(),
          type: 'system',
          text: `🔀 Inter-Agent Dossier Transfer: Re-routed from [${t.desk}] to [${targetDeskName}]. Noting: "${reason}". Complete case history & legal precedents transferred.`
        };

        return {
          ...t,
          departmentCode: targetDeptCode,
          desk: targetDeskName,
          messages: [...t.messages, transferMsg]
        };
      })
    );

    alert(`✅ Case Docket #${ticketId} successfully transferred to ${targetDeskName}!\n\nReason: "${reason}"\n\nThe receiving officer has received the file with full context. Exporter notified via SMS/Portal.`);
  };

  const handleInsertClause = (clauseText) => {
    alert(`Gazette Clause attached to draft order:\n\n"${clauseText}"\n\nYou can review or edit it before final digital dispatch.`);
  };

  const handleProposeFaq = () => {
    alert("✨ Proactive Regulatory Intelligence Triggered!\n\nA new draft Trade Policy Circular has been generated and queued for Joint Secretary review:\n\nTitle: 'Clarification on Bank PFMS Validation for RoSCTL e-Scrip Clearance'\nPolicy Chapter: FTP 2023 > Chapter 4 Remissions");
  };

  return (
    <div className="bg-[#070c18] text-slate-100 h-screen flex flex-col overflow-hidden select-none font-sans">
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        ticketsCount={tickets.length}
        isRightPanelOpen={isRightPanelOpen}
        setIsRightPanelOpen={setIsRightPanelOpen}
      />

      {currentView === 'inbox' && (
        <div className="flex-1 flex overflow-hidden">
          <ConversationList
            tickets={tickets}
            selectedTicketId={selectedTicketId}
            onSelectTicket={setSelectedTicketId}
            activeDesk={activeDesk}
            setActiveDesk={setActiveDesk}
          />

          <ChatWorkspace
            ticket={activeTicket}
            onSendMessage={handleSendMessage}
            onResolveTicket={handleResolveTicket}
            onStatusChange={handleStatusChange}
            onTransferTicket={handleTransferTicket}
          />

          {isRightPanelOpen && (
            <RightPanel
              ticket={activeTicket}
              onInsertClause={handleInsertClause}
              onProposeFaq={handleProposeFaq}
              onClose={() => setIsRightPanelOpen(false)}
            />
          )}
        </div>
      )}

      {currentView === 'kb' && <KnowledgeBaseView />}

      {currentView === 'analytics' && <AnalyticsView />}
    </div>
  );
}
