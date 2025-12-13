"use client";
import { useState } from "react";
import styles from "./Conversations.module.css";

import ConversationsTopbar from "./ConversationsTopbar";
import ConversationsList from "./ConversationsList";
import ConversationThread from "./ConversationThread";

export default function ConversationsPage() {
  const [activeInvoice, setActiveInvoice] = useState(null);
  const [conversationData, setConversationData] = useState({});
  const [selectedRow, setSelectedRow] = useState(null);

return (
    <div className={styles.pageWrapper}>
      <ConversationsTopbar />
      <div className={styles.mainCard}> 
        <div className={styles.grid}>
          <div className={styles.listContainer}>
            <ConversationsList
              activeInvoice={activeInvoice}
              setActiveInvoice={setActiveInvoice}
              conversationData={conversationData}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
            />
          </div>
          <div className={styles.rightPaneWrapper}>
            <ConversationThread
              activeInvoice={activeInvoice}
              conversationData={conversationData}
              setConversationData={setConversationData}
              selectedRow={selectedRow}
            />
          </div>
        </div>
      </div>
    </div>
  );
}