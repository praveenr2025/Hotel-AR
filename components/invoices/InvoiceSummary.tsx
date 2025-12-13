import React from "react";
import styles from "./Invoices.module.css";
import { LineItem } from "./InvoiceForm";

type Props = {
  invoice?: {
    invoiceId?: string;
    customer?: string;
    type?: string;
    invoiceDate?: string;
    dueDate?: string;
    bookings?: string;
    groupId?: string;
    amount?: number;
    paid?: number;
    due?: number;
    paymentStatus?: string;
    lines?: LineItem[];
  } | null;
};

export default function InvoiceSummary({ invoice }: Props) {
  if (!invoice) {
    return <p style={{ padding: 12, color: "#6b7280" }}>Select an invoice to see a summary</p>;
  }

  const lines = invoice.lines || [];

  return (
    <div>
      <div className={styles.summaryGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>{invoice.invoiceId}</div>
              <div className={styles.cardSubtitle}>{invoice.customer}</div>
            </div>
            <span className={styles.metricPill}>{invoice.paymentStatus}</span>
          </div>

          <div className={styles.summaryBlock}>
            <strong>Type:</strong> {invoice.type}<br />
            <strong>Invoice & due:</strong> {invoice.invoiceDate} → {invoice.dueDate}<br />
            <strong>Linked bookings:</strong> {invoice.bookings || "—"}<br />
            <strong>Group / statement:</strong> {invoice.groupId || "—"}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Amounts & status</div>
              <div className={styles.cardSubtitle}>Financial snapshot</div>
            </div>
          </div>

          <div className={styles.summaryBlock}>
            <strong>Gross amount:</strong> ₹ {invoice.amount ?? "-"}<br />
            <strong>Paid:</strong> ₹ {invoice.paid ?? "0"}<br />
            <strong>Outstanding:</strong> ₹ {invoice.due ?? "-"}<br />
            <strong>Payment status:</strong> {invoice.paymentStatus}
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Line items</div>
            <div className={styles.cardSubtitle}>Read-only preview</div>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Ref</th>
                <th>Description</th>
                <th>Qty</th>
                <th>Net</th>
                <th>Tax %</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {lines.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ color: "#6b7280", fontSize: 13, padding: 12 }}>
                    No line items captured in this demo.
                  </td>
                </tr>
              ) : (
                lines.map((l, i) => (
                  <tr key={i}>
                    <td>{l.ref}</td>
                    <td>{l.description}</td>
                    <td>{l.qty}</td>
                    <td>₹ {l.net}</td>
                    <td>{l.taxPct}%</td>
                    <td>₹ {l.total}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
