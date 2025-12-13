"use client";

import React, { useState } from "react";
import styles from "./Tabs.module.css";

export default function Tabs({ tabs }: {
  tabs: { id: string; label: string; content: React.ReactNode }[];
}) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <div>
      <div className={styles.tabList}>
        {tabs.map(t => (
          <button
            key={t.id}
            className={`${styles.tab} ${active === t.id ? styles.active : ""}`}
            onClick={() => setActive(t.id)}
            type="button"
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.tabPanels}>
        {tabs.map(t => (
          <section
            key={t.id}
            style={{ display: active === t.id ? "block" : "none" }}
          >
            {t.content}
          </section>
        ))}
      </div>
    </div>
  );
}
