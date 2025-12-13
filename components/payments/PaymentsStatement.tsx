"use client";
import React from "react";
import styles from "./payments.module.css";
import { PaymentRow } from "../../app/payments/page";

type Props = {
  row: PaymentRow;
};

export default function PaymentsStatement({ row }: Props) {
  const outstanding = Number(row.allocated) + Number(row.unapplied);

  return (
    <section className={styles.statement}>
      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.cardLarge}`}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}><span id="stPayerName">{row.payer}</span></div>
              <div className={styles.cardSubtitle}><span id="stPayerType">Type: {row.payerType}</span></div>
            </div>
            <div className={styles.metricPill} id="stOutstandingTag">Outstanding: ₹ {outstanding.toLocaleString("en-IN")}</div>
          </div>

          <div className={styles.muted}>
            <strong>Total outstanding (all invoices):</strong> ₹ <span id="stOutstandingTotal">{outstanding.toLocaleString("en-IN")}</span><br />
            <strong>Unapplied credits / advances:</strong> ₹ <span id="stUnappliedTotal">{Number(row.unapplied).toLocaleString("en-IN")}</span><br />
            <strong>Last payment:</strong> <span id="stLastPayment">{row.date} · ₹ {Number(row.amount).toLocaleString("en-IN")} via {row.mode}</span><br />
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardSmall}`}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Aging (illustrative)</div>
              <div className={styles.cardSubtitle}>Buckets summarized from invoice data.</div>
            </div>
          </div>

          <div className={styles.muted}>
            <strong>0–15 days:</strong> ₹ <span id="stAge0_15">{Math.round(row.allocated * 0.7)}</span><br />
            <strong>16–30 days:</strong> ₹ <span id="stAge16_30">{Math.round(row.allocated * 0.2)}</span><br />
            <strong>31–60 days:</strong> ₹ <span id="stAge31_60">{Math.round(row.allocated * 0.1)}</span><br />
            <strong>&gt; 60 days:</strong> ₹ <span id="stAge60Plus">0</span><br />
          </div>
        </div>
      </div>

      <div className={`${styles.grid} ${styles.mt16}`}>
        <div className={`${styles.card} ${styles.cardLarge}`}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Recent payments for this payer</div>
              <div className={styles.cardSubtitle}>Latest activity, pulled from the list above.</div>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Receipt #</th>
                  <th>Date</th>
                  <th>Mode</th>
                  <th>Amount</th>
                  <th>Allocated</th>
                  <th>Unapplied</th>
                </tr>
              </thead>
              <tbody id="stPaymentsBody">
                <tr>
                  <td>{row.receiptId}</td>
                  <td>{row.date}</td>
                  <td>{row.mode}</td>
                  <td>₹ {Number(row.amount).toLocaleString("en-IN")}</td>
                  <td>₹ {Number(row.allocated).toLocaleString("en-IN")}</td>
                  <td>₹ {Number(row.unapplied).toLocaleString("en-IN")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardSmall}`}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Notes & follow-ups</div>
              <div className={styles.cardSubtitle}>Use this to plan calls / reminders (illustrative).</div>
            </div>
          </div>

          <div className={styles.muted}>
            <ul>
              <li><strong>Orbit Travels:</strong> Send consolidated SOA every 15 days.</li>
              <li><strong>BlueSky Holidays:</strong> Flag if &gt; 30 days overdue persists on next cycle.</li>
              <li><strong>TripNest:</strong> Link payments to OTA remittance files before marking final.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
