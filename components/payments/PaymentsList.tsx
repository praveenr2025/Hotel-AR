"use client";
import React from "react";
import styles from "./payments.module.css";
import { PaymentRow } from "../../app/payments/page";

type Props = {
  rows: PaymentRow[];
  onView: (r: PaymentRow) => void;
  onEdit: (r: PaymentRow) => void;
};

export default function PaymentsList({ rows, onView, onEdit }: Props) {
  return (
    <section className={styles.paymentsList}>
      <div className={styles.filtersBar}>
        <input className={styles.input} placeholder="Customer / agent / receipt #" />
        <select className={styles.select}>
          <option>All modes</option>
          <option>NEFT</option>
          <option>RTGS</option>
          <option>Virtual account</option>
          <option>Card</option>
          <option>Cash</option>
        </select>
        <select className={styles.select}>
          <option>All allocation status</option>
          <option>Fully allocated</option>
          <option>Partially allocated</option>
          <option>Unapplied</option>
        </select>
        <select className={styles.select}>
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>This month</option>
          <option>This financial year</option>
          <option>All time</option>
        </select>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table} aria-label="Payments table">
          <thead>
            <tr>
              <th>Receipt #</th>
              <th>Payer</th>
              <th>Payer type</th>
              <th>Invoices settled</th>
              <th>Payment date</th>
              <th>Mode</th>
              <th>Amount</th>
              <th>Allocated</th>
              <th>Unapplied</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.receiptId} data-receipt-id={r.receiptId}>
                <td>{r.receiptId}</td>
                <td>{r.payer}</td>
                <td>{r.payerType}</td>
                <td>
                  <a className={styles.link} href="/app/invoices">
                    {r.invoices}
                  </a>
                </td>
                <td>{r.date}</td>
                <td>{r.mode}</td>
                <td>₹ {r.amount.toLocaleString("en-IN")}</td>
                <td>₹ {r.allocated.toLocaleString("en-IN")}</td>
                <td>₹ {r.unapplied.toLocaleString("en-IN")}</td>
                <td className={styles.actionsCell}>
                  <button className={styles.btn} onClick={() => onView(r)}>View</button>
                  <button className={styles.btn} onClick={() => onEdit(r)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
