"use client";

import React from "react";
import styles from "./Contracts.module.css";

export default function ContractSummary(props: any) {
  const { contract, onEdit, onBack } = props;

  if (!contract) {
    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Select a contract</div>
            <div className={styles.cardSubtitle}>
              Pick a contract from the list to view full summary.
            </div>
          </div>
        </div>

        <div style={{ color: "#64748b" }}>No contract selected.</div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>{contract.contractId}</div>
            <div className={styles.cardSubtitle}>{contract.partner}</div>
          </div>
          <span className={styles.metricPill}>{contract.status}</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: 18,
          }}
        >
          <div>
            <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.6 }}>
              <strong>Segment:</strong> {contract.segment} <br />
              <strong>Partner type:</strong> {contract.partnerType || "-"} <br />
              <strong>Validity:</strong> {contract.validFrom} → {contract.validTo} <br />
              <strong>Credit limit:</strong> {contract.creditLimit} <br />
              <strong>Billing type:</strong> {contract.billingType} <br />
              <strong>Credit days:</strong> {contract.creditDays} <br />
            </div>
          </div>

          <div>
            <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.6 }}>
              <strong>Primary contact:</strong> {contract.contactName || "-"} <br />
              <strong>Email:</strong> {contract.contactEmail || "-"} <br />
              <strong>Phone:</strong> {contract.contactPhone || "-"} <br />
              <strong>Signature:</strong> {contract.signature || "-"} <br />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <h4 style={{ margin: "8px 0" }}>Rate snapshot (example)</h4>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Room type</th>
                  <th>Season</th>
                  <th>Rate type</th>
                  <th>Contracted value</th>
                  <th>Meals</th>
                  <th>Allotment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Deluxe King</td>
                  <td>Corporate Shoulder</td>
                  <td>Net</td>
                  <td>₹ 5,200</td>
                  <td>CP</td>
                  <td>10 rooms / day</td>
                </tr>
                <tr>
                  <td>Deluxe Twin</td>
                  <td>Festive High</td>
                  <td>Discount on BAR</td>
                  <td>15% off applicable BAR</td>
                  <td>MAP</td>
                  <td>5 rooms / day</td>
                </tr>
                <tr>
                  <td>Premier King</td>
                  <td>Summer Low</td>
                  <td>Net</td>
                  <td>₹ 4,900</td>
                  <td>CP</td>
                  <td>Free sale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn" onClick={onBack}>Back to list</button>
            {onEdit && (
              <button className="btn btn-primary" onClick={() => onEdit(contract.contractId)}>
                Edit contract
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
