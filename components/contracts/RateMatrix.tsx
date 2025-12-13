"use client";

import React from "react";
import styles from "./Contracts.module.css";

export type RateRow = {
  id: string;
  roomType: string;
  season: string;
  rateType: string;
  value: string; // either net number or percent
  meals: string;
  allotment: string;
  releasePeriod: string;
  stopSell: boolean;
};

interface Props {
  rows: RateRow[];
  onChange: (rows: RateRow[]) => void;
}

export default function RateMatrix({ rows, onChange }: Props) {
  const updateRow = (id: string, patch: Partial<RateRow>) => {
    onChange(rows.map(r => r.id === id ? { ...r, ...patch } : r));
  };

  const addRow = () => {
    const newRow: RateRow = {
      id: String(Date.now()),
      roomType: "Deluxe King",
      season: "All year",
      rateType: "Net",
      value: "",
      meals: "CP",
      allotment: "",
      releasePeriod: "",
      stopSell: false
    };
    onChange([...rows, newRow]);
  };

  const cloneRow = (id: string) => {
    const src = rows.find(r => r.id === id);
    if (!src) return;
    const clone = { ...src, id: String(Date.now()) };
    onChange([...rows, clone]);
  };

  const deleteRow = (id: string) => {
    onChange(rows.filter(r => r.id !== id));
  };

  return (
    <div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Room type</th>
              <th>Season</th>
              <th>Rate type</th>
              <th>Net rate / Disc%</th>
              <th>Meals</th>
              <th>Allotment</th>
              <th>Release period</th>
              <th>Stop sell</th>
              <th style={{ width: 120 }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>
                  <select className="select" value={r.roomType} onChange={(e) => updateRow(r.id, { roomType: e.target.value })}>
                    <option>Deluxe King</option>
                    <option>Deluxe Twin</option>
                    <option>Premier King</option>
                    <option>Club Suite</option>
                  </select>
                </td>

                <td>
                  <select className="select" value={r.season} onChange={(e) => updateRow(r.id, { season: e.target.value })}>
                    <option>Corporate Shoulder (01 Apr–30 Sep)</option>
                    <option>Festive High (01 Oct–15 Jan)</option>
                    <option>Summer Low (16 Jan–31 Mar)</option>
                    <option>All year</option>
                  </select>
                </td>

                <td>
                  <select className="select" value={r.rateType} onChange={(e) => updateRow(r.id, { rateType: e.target.value })}>
                    <option>Net</option>
                    <option>Discount on BAR</option>
                    <option>Commissionable</option>
                  </select>
                </td>

                <td>
                  <input className="input" value={r.value} onChange={(e) => updateRow(r.id, { value: e.target.value })} placeholder="e.g. 5200 or 12%" />
                </td>

                <td>
                  <select className="select" value={r.meals} onChange={(e) => updateRow(r.id, { meals: e.target.value })}>
                    <option>EP</option>
                    <option>CP</option>
                    <option>MAP</option>
                    <option>AP</option>
                  </select>
                </td>

                <td>
                  <input className="input" value={r.allotment} onChange={(e) => updateRow(r.id, { allotment: e.target.value })} placeholder="e.g. 10 rooms / day" />
                </td>

                <td>
                  <input className="input" value={r.releasePeriod} onChange={(e) => updateRow(r.id, { releasePeriod: e.target.value })} placeholder="e.g. 2 days" />
                </td>

                <td className={styles.centerCell}>
                  <input type="checkbox" checked={r.stopSell} onChange={(e) => updateRow(r.id, { stopSell: e.target.checked })} />
                </td>

                <td>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button type="button" className="btn btn-sm" onClick={() => cloneRow(r.id)}>Clone</button>
                    <button type="button" className="btn btn-sm" onClick={() => deleteRow(r.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}

            {rows.length === 0 && (
              <tr>
                <td colSpan={9} style={{ padding: 18, color: "#64748b" }}>No rate rows defined.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
        <button type="button" className="btn" onClick={addRow}>Add row</button>
        <div style={{ color: "#64748b", fontSize: 12 }}>Rows are editable on screen in this demo.</div>
      </div>
    </div>
  );
}
