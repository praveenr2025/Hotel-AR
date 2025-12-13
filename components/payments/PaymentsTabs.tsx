"use client";
import React from "react";
import styles from "./payments.module.css";

type Props = {
  active: "list" | "record" | "statement";
  setActive: (t: "list" | "record" | "statement") => void;
};

export default function PaymentsTabs({ active, setActive }: Props) {
  return (
    <div className={styles.tabBar} role="tablist" aria-label="Payments tabs">

      <button
        className={`${styles.tab} ${active === "list" ? styles.active : ""}`}
        onClick={() => setActive("list")}
      >
        Payments list
      </button>

      <button
        className={`${styles.tab} ${active === "record" ? styles.active : ""}`}
        onClick={() => setActive("record")}
      >
        Record / Allocate payment
      </button>

      <button
        className={`${styles.tab} ${active === "statement" ? styles.active : ""}`}
        onClick={() => setActive("statement")}
      >
        Payer statement &amp; aging
      </button>

    </div>
  );
}
