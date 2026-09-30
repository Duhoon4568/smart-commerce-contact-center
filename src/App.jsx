import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
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
          sender: mode === 'reply' ? 'Rajesh Sharma (DGFT Officer)' : 'Rajesh Sharma',
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
          text: `✅ Ticket marked as 'Resolved' by Officer R. Sharma. Citizen Charter SLA fulfilled.`
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

  const handleInsertClause = (clauseText) => {
    // Append clause to active draft or trigger notification
    alert(`Clause copied for insertion:\n\n"${clauseText}"\n\nYou can paste it directly into your official reply.`);
  };

  const handleProposeFaq = () => {
    alert("✨ AI Knowledge Synthesis Triggered!\n\nA new draft FAQ article has been generated and sent to the DGFT Knowledge Administrator for approval:\n\nTitle: 'Resolving Missing APEDA Code in RoDTEP EDI Transmission'\nCategory: Foreign Trade Policy 2023 > Remissions");
  };

  return (
    <div className="bg-[#0b1120] text-slate-100 h-screen flex flex-col overflow-hidden select-none">
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        ticketsCount={tickets.length}
      />

      {currentView === 'inbox' && (
        <div className="flex-1 flex overflow-hidden">
          <Sidebar activeDesk={activeDesk} setActiveDesk={setActiveDesk} />
          
          <ConversationList
            tickets={tickets}
            selectedTicketId={selectedTicketId}
            onSelectTicket={setSelectedTicketId}
            activeDesk={activeDesk}
          />

          <ChatWorkspace
            ticket={activeTicket}
            onSendMessage={handleSendMessage}
            onResolveTicket={handleResolveTicket}
            onStatusChange={handleStatusChange}
          />

          <RightPanel
            ticket={activeTicket}
            onInsertClause={handleInsertClause}
            onProposeFaq={handleProposeFaq}
          />
        </div>
      )}

      {currentView === 'kb' && <KnowledgeBaseView />}

      {currentView === 'analytics' && <AnalyticsView />}
    </div>
  );
}
