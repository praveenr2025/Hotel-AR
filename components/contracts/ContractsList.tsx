"use client";

import React from "react";
import styles from "./Contracts.module.css";

export default function ContractsList({ data, onView, onEdit }: any) {
  return (
    <div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Contract ID</th>
              <th>Partner</th>
              <th>Segment</th>
              <th>Valid From</th>
              <th>Valid To</th>
              <th>Credit Limit</th>
              <th>Signature</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((r: any) => (
              <tr key={r.contractId}>
                <td>{r.contractId}</td>
                <td>{r.partner}</td>
                <td>{r.segment}</td>
                <td>{r.validFrom}</td>
                <td>{r.validTo}</td>
                <td>{r.creditLimit}</td>
                <td>{r.signature}</td>

                <td>
                  <span
                    className={
                      r.status === "Active"
                        ? "badge badge-success"
                        : r.status === "Pending"
                        ? "badge badge-warning"
                        : r.status === "Expired"
                        ? "badge badge-danger"
                        : "badge"
                    }
                  >
                    {r.status}
                  </span>
                </td>

                <td>
                  <div className={styles.rowActions}>
                    <button className="btn" onClick={() => onView(r.contractId)}>
                      View
                    </button>
                    <button className="btn" onClick={() => onEdit(r.contractId)}>
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {(!data || data.length === 0) && (
              <tr>
                <td colSpan={9} style={{ color: "#64748b", padding: 18 }}>
                  No contracts match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
