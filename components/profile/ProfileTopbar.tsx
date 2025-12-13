"use client";

import styles from "./profile.module.css";

export default function ProfileTopbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.topbarTitle}>
        <h1>Profile & Settings</h1>
        <p>Manage your property profile, billing details, notifications and personal preferences.</p>
      </div>

      <div className={styles.topbarActions}>
        <button className={styles.btn}>Download Property Sheet</button>
        <button className={`${styles.btn} ${styles.btnPrimary}`}>Save All</button>
      </div>
    </header>
  );
}
