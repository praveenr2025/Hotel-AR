"use client";

import styles from "./profile.module.css";

type ProfileTabType = "hotel" | "billing" | "notifications" | "user";

interface ProfileTabsProps {
  active: ProfileTabType;
  setActive: (tab: ProfileTabType) => void;
}

export default function ProfileTabs({ active, setActive }: ProfileTabsProps) {
  return (
    <div className={styles.tabBar} role="tablist">

      <button
        className={`${styles.tab} ${active === "hotel" ? styles.active : ""}`}
        onClick={() => setActive("hotel")}
      >
        Hotel profile
      </button>

      <button
        className={`${styles.tab} ${active === "billing" ? styles.active : ""}`}
        onClick={() => setActive("billing")}
      >
        Billing & taxation
      </button>

      <button
        className={`${styles.tab} ${active === "notifications" ? styles.active : ""}`}
        onClick={() => setActive("notifications")}
      >
        Notifications
      </button>

      <button
        className={`${styles.tab} ${active === "user" ? styles.active : ""}`}
        onClick={() => setActive("user")}
      >
        User preferences & security
      </button>

    </div>
  );
}
