"use client";

import { useState } from "react";
import styles from "./Conversations.module.css";

interface Message {
  author: string;
  time: string;
  text: string;
}

interface ThreadProps {
  invoiceId: string;
  messages: Message[];
  onReply: (text: string) => void;
}

export default function ConversationThread({ invoiceId, messages, onReply }: ThreadProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onReply(text);
    setText("");
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>Conversation · {invoiceId}</div>
        <div className={styles.cardSubtitle}>
          All communication logged against the invoice.
        </div>
      </div>

      <div className={styles.threadBody}>
        {messages.map((m, i) => (
          <div key={i} className={styles.messageItem}>
            <div className={styles.messageAuthor}>{m.author} · {m.time}</div>
            <div className={styles.messageText}>{m.text}</div>
          </div>
        ))}

        {messages.length === 0 && (
          <div className={styles.emptyMessage}>
            No messages yet — start the conversation below.
          </div>
        )}
      </div>

      <div className={styles.replyBox}>
      <textarea
        id="replyInput" 
        className={styles.replyBox} 
        placeholder="Type a reply…"
      />

        <div className={styles.replyActions}>
          <button className="btn" type="button">Attach</button>
          <button className="btn btn-primary" type="button" onClick={handleSend}>
            Send Reply
          </button>
        </div>
      </div>
    </div>
  );
}
