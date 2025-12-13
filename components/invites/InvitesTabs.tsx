"use client";

import { useState } from "react";
import styles from "./Invites.module.css";

import PendingInvites from "./PendingInvites";
import AllInvites from "./AllInvites";
import NewInvite from "./NewInvite";
import Templates from "./Templates";

export default function InvitesTabs() {
  const [active, setActive] = useState<
    "pending" | "all" | "new" | "templates"
  >("pending");

  const tabs = [
    { id: "pending", label: "Pending invites" },
    { id: "all", label: "All invites" },
    { id: "new", label: "Invite new" },
    { id: "templates", label: "Templates & defaults" },
  ];

  return (
    <>
      <div className={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              active === tab.id ? styles.active : ""
            }`}
            onClick={() => setActive(tab.id as any)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {active === "pending" && <PendingInvites />}
        {active === "all" && <AllInvites />}
        {active === "new" && <NewInvite />}
        {active === "templates" && <Templates />}
      </div>
    </>
  );
}
