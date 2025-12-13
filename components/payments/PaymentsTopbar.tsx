"use client";
import React from "react";
import styles from "./payments.module.css";

type Props = {
  title: string;
  subtitle?: string;
  onRecord?: () => void;
};

export default function PaymentsTopbar({ title, subtitle, onRecord }: Props) {
  return (
    <header className={styles.topbar}>
      <div className={styles.topbarTitle}>
        <h1>{title}</h1>
        {subtitle && <p className={styles.muted}>{subtitle}</p>}
      </div>
      <div className={styles.topbarActions}>
        <button className={styles.btn}>Download Statement</button>
        <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={onRecord}>
          Record Payment
        </button>
      </div>
    </header>
  );
}
