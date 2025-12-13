"use client";
import styles from "./Invoices.module.css";

interface InvoicesTopbarProps {
  openCreate: () => void;   
}

export default function InvoicesTopbar({ openCreate }: InvoicesTopbarProps) {
  return (
    <header className={styles.topbar}>
      <div className={styles.topbarLeft}>
        <h1 className={styles.pageTitle}>Invoices</h1>
        <p className={styles.pageSubtitle}>
          Raise, edit and track invoices against bookings and contracts — including 
          grouped reservations, partial payments and GST compliance.
        </p>
      </div>

      <div className={styles.topbarActions}>
        <button className="btn">Export GST JSON</button>
        <button className="btn btn-primary" onClick={openCreate}>
          Create Invoice
        </button>
      </div>
    </header>
  );
}
