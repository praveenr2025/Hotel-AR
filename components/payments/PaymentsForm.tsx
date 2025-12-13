"use client";
import React, { useState, useEffect } from "react";
import styles from "./payments.module.css";
import { PaymentRow } from "../../app/payments/page";

type Props = {
  initial?: PaymentRow;
  onSave: (r: PaymentRow) => void;
  onReset: () => void;
  statusLabel?: string;
};

export default function PaymentsForm({ initial, onSave, onReset, statusLabel }: Props) {
  const [rcpt, setRcpt] = useState(initial?.receiptId ?? "");
  const [payer, setPayer] = useState(initial?.payer ?? "");
  const [payerType, setPayerType] = useState(initial?.payerType ?? "Corporate");
  const [date, setDate] = useState(initial?.date ?? "");
  const [mode, setMode] = useState(initial?.mode ?? "NEFT");
  const [amount, setAmount] = useState(initial?.amount ?? 0);
  const [allocated, setAllocated] = useState(initial?.allocated ?? 0);
  const [unapplied, setUnapplied] = useState(initial?.unapplied ?? 0);
  const [bankRef, setBankRef] = useState(initial?.bankRef ?? "");
  const [customerNotes, setCustomerNotes] = useState("");
  const [internalNotes, setInternalNotes] = useState("");

  useEffect(() => {
    setRcpt(initial?.receiptId ?? "");
    setPayer(initial?.payer ?? "");
    setPayerType(initial?.payerType ?? "Corporate");
    setDate(initial?.date ?? "");
    setMode(initial?.mode ?? "NEFT");
    setAmount(initial?.amount ?? 0);
    setAllocated(initial?.allocated ?? 0);
    setUnapplied(initial?.unapplied ?? 0);
    setBankRef(initial?.bankRef ?? "");
  }, [initial]);

  function handleSave(e?: React.FormEvent) {
    e?.preventDefault();
    const payload: PaymentRow = {
      receiptId: rcpt || `RCPT-${Date.now()}`,
      payer: payer || "Payer",
      payerType,
      invoices: "", 
      date: date || new Date().toLocaleDateString(),
      mode,
      amount: Number(amount),
      allocated: Number(allocated),
      unapplied: Number(unapplied),
      bankRef,
    };
    onSave(payload);
  }

  function addAllocLine() {
  }

  return (
    <form className={styles.paymentForm} onSubmit={handleSave}>
      <div className={styles.formHeader}>Payment header</div>

      <div className={styles.grid}>
        <div>
          <label className={styles.label}>Receipt #</label>
          <input className={styles.input} value={rcpt} onChange={e => setRcpt(e.target.value)} placeholder="Auto or manual e.g. RCPT-2130" />
        </div>
        <div>
          <label className={styles.label}>Payer name</label>
          <input className={styles.input} value={payer} onChange={e => setPayer(e.target.value)} placeholder="Customer / agent / corporate" />
        </div>
        <div>
          <label className={styles.label}>Payer type</label>
          <select className={styles.select} value={payerType} onChange={e => setPayerType(e.target.value)}>
            <option>Corporate</option>
            <option>Agent</option>
            <option>OTA</option>
            <option>Leisure</option>
            <option>Direct guest</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className={styles.label}>Payment date</label>
          <input className={styles.input} value={date} onChange={e => setDate(e.target.value)} placeholder="29 Nov 2025" />
        </div>
        <div>
          <label className={styles.label}>Mode</label>
          <select className={styles.select} value={mode} onChange={e => setMode(e.target.value)}>
            <option>NEFT</option>
            <option>RTGS</option>
            <option>Virtual account</option>
            <option>UPI</option>
            <option>Card</option>
            <option>Cash</option>
            <option>Cheque</option>
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <label className={styles.label}>Amount received (₹)</label>
          <input className={styles.input} type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} placeholder="50000" />
        </div>
        <div>
          <label className={styles.label}>Allocated amount (₹)</label>
          <input className={styles.input} type="number" value={allocated} onChange={e => setAllocated(Number(e.target.value))} placeholder="30000" />
        </div>
        <div>
          <label className={styles.label}>Unapplied balance (₹)</label>
          <input className={styles.input} type="number" value={unapplied} onChange={e => setUnapplied(Number(e.target.value))} placeholder="20000" />
        </div>
        <div>
          <label className={styles.label}>Bank / reference #</label>
          <input className={styles.input} value={bankRef} onChange={e => setBankRef(e.target.value)} placeholder="NEFT/ICICI/123456" />
        </div>
      </div>

      <div className={`${styles.card} ${styles.allocCard}`}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Allocate to invoices</div>
            <div className={styles.cardSubtitle}>Split this payment across one or more invoices.</div>
          </div>
          <button type="button" className={styles.btn} onClick={addAllocLine}>Add allocation line</button>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Payer outstanding before</th>
                <th>Allocate now (₹)</th>
                <th>Remaining on invoice</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input className={styles.input} value="INV-8844" readOnly /></td>
                <td><input className={styles.input} value="78,200" readOnly /></td>
                <td><input className={styles.input} value="30000" readOnly /></td>
                <td><input className={styles.input} value="48,200" readOnly /></td>
                <td><input className={styles.input} value="Part payment – Nov statement" readOnly /></td>
              </tr>
              <tr>
                <td><input className={styles.input} /></td>
                <td><input className={styles.input} /></td>
                <td><input className={styles.input} /></td>
                <td><input className={styles.input} /></td>
                <td><input className={styles.input} /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.smallMuted}>
          In a full system, amounts and remaining balances would auto-calculate using the Invoices workspace.
        </div>
      </div>

      <div className={styles.gridTwo}>
        <div>
          <label className={styles.label}>Notes visible to customer</label>
          <textarea className={styles.textarea} value={customerNotes} onChange={e => setCustomerNotes(e.target.value)} placeholder="e.g. Payment received against November 2025 bookings; thank you." />
        </div>
        <div>
          <label className={styles.label}>Internal notes (finance / AR)</label>
          <textarea className={styles.textarea} value={internalNotes} onChange={e => setInternalNotes(e.target.value)} placeholder="e.g. Keep ₹20,000 unapplied for next cycle; dispute on INV-8844 line item." />
        </div>
      </div>

      <div className={styles.actionsRow}>
        <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit">Save payment</button>
        <button className={styles.btn} type="button" onClick={() => { onReset(); }}>Reset form</button>
        <a className={styles.btn} href="/app/invoices">View related invoices</a>
        <span className={styles.smallMuted}>{statusLabel}</span>
      </div>
    </form>
  );
}
