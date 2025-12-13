"use client";

import { useState } from "react";
import ConversationsTopbar from "@/components/conversations/ConversationsTopbar";
import ConversationsList from "@/components/conversations/ConversationsList";
import ConversationThread from "@/components/conversations/ConversationThread";
import styles from "@/components/conversations/Conversations.module.css";
import Sidebar from "@/components/layout/Sidebar";

export default function ConversationsPage() {
  const [activeId, setActiveId] = useState("INV-8844");

  const [conversationData, setConversationData] = useState<Record<string, {
    author: string;
    time: string;
    text: string;
  }[]>>({
    "INV-8843": [
      { author: "Orbit Travels", time: "19 Nov 09:40", text: "Why is GST applied to meals? Contract is room only." },
      { author: "Grand Meridian", time: "19 Nov 10:05", text: "Correct — GST only on room. Revising invoice." }
    ],
    "INV-8844": [
      { author: "BlueSky Holidays", time: "20 Nov 10:05", text: "Discrepancy in no-show charges for GMH-2485." },
      { author: "Grand Meridian", time: "20 Nov 10:32", text: "Guest extended by one night. No-show for first night only." }
    ],
    "INV-8845": [
      { author: "Acme Industries", time: "18 Nov 16:20", text: "Confirm breakfast count for 8 rooms?" }
    ],
    "INV-8846": [
      { author: "TripNest", time: "25 Nov 09:15", text: "Virtual card payment processed ₹25,000." }
    ]
  });

  const handleReply = (text: string) => {
    setConversationData(prev => ({
      ...prev,
      [activeId]: [
        ...(prev[activeId] || []),
        { author: "Grand Meridian", time: "Just now", text }
      ]
    }));
  };

  return (
<div className="app-shell">
  <Sidebar variant="hotel" />
  <main className="main">
    <div className="container">
      <ConversationsTopbar />

      <div className={styles.grid}>
        <div className={styles.leftPane}>
          <ConversationsList
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>

        <div className={styles.rightPane}>
          <ConversationThread
            invoiceId={activeId}
            messages={conversationData[activeId] || []}
            onReply={handleReply}
          />
        </div>
      </div>
      </div>
    </main>
    </div>
  );
}
