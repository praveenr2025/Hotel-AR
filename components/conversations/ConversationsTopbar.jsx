"use client";

import styles from "./Conversations.module.css";

export default function ConversationsTopbar() {
  return (
    <header className={styles.topbar}>
      <div>
        <h1 className={styles.pageTitle}>Invoice Conversations</h1>
        <p className={styles.pageSubtitle}>
          Two-way communication log for clarifications, disputes and payment coordination.
        </p>
      </div>

      <div className={styles.topbarActions}>
        <button className="btn">Export Thread</button>
        <button className="btn btn-primary">New Message</button>
      </div>
    </header>
  );
}
