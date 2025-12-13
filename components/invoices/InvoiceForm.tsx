"use client";
import React, { useState, useEffect } from "react";
import styles from "./Invoices.module.css";

export type Reservation = {
  id: string;
  guest: string;
  company: string;
  channel: string;
  nights: number;
  value: number;
  status?: string;
  checkinDate?: string;
};

export type LineItem = {
  ref: string;
  description: string;
  qty: number;
  net: number;
  taxPct: number;
  total: number;
};

type Props = {
  initial?: Partial<Record<string, any>>;
  reservations?: Reservation[];
  onSave?: (payload: any) => void;
  onCancel?: () => void;
};

export default function InvoiceForm({ initial = {}, reservations = [], onSave, onCancel }: Props) {
  const [invoiceId, setInvoiceId] = useState(initial.invId || "");
  const [customer, setCustomer] = useState(initial.customer || "");
  const [type, setType] = useState(initial.type || "Booking");
  const [invoiceDate, setInvoiceDate] = useState(initial.invoiceDate || "");
  const [dueDate, setDueDate] = useState(initial.dueDate || "");
  const [currency, setCurrency] = useState(initial.currency || "INR");

  const [linkedBookings, setLinkedBookings] = useState<string>((initial.bookings) ?? "");
  const [groupId, setGroupId] = useState(initial.groupId || "");

  const [lineItems, setLineItems] = useState<LineItem[]>(
    (initial.lines as LineItem[]) || [
      { ref: "", description: "", qty: 1, net: 0, taxPct: 18, total: 0 }
    ]
  );

  const [amount, setAmount] = useState<number>(Number(initial.amount ?? 0));
  const [paid, setPaid] = useState<number>(Number(initial.paid ?? 0));
  const [due, setDue] = useState<number>(Number(initial.due ?? 0));
  const [paymentStatus, setPaymentStatus] = useState(initial.paymentStatus || "Unpaid");

  const [selectedResIds, setSelectedResIds] = useState<Set<string>>(new Set());
  const [bills, setBills] = useState<File[]>([]);
  const [statusText, setStatusText] = useState("");

  useEffect(() => {
    const total = lineItems.reduce((s, li) => s + (Number(li.total) || 0), 0);
    setAmount(total);
    setDue(Math.max(0, total - (paid || 0)));
  }, [lineItems, paid]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []) as File[];
    setBills(files);
  }

  function setLineItemAt(index: number, patch: Partial<LineItem>) {
    setLineItems(prev => {
      const copy = prev.map(li => ({ ...li }));
      copy[index] = { ...copy[index], ...patch };
      const net = Number(copy[index].net || 0);
      const tax = Number(copy[index].taxPct || 0);
      const qty = Number(copy[index].qty || 1);
      copy[index].total = Number(((net * qty) * (1 + tax / 100)).toFixed(2));
      return copy;
    });
  }

  function addLine() {
    setLineItems(prev => [...prev, { ref: "", description: "", qty: 1, net: 0, taxPct: 18, total: 0 }]);
  }

  function removeLine(i: number) {
    setLineItems(prev => prev.filter((_, idx) => idx !== i));
  }

  function applySelectedReservations() {
    const selected = reservations.filter(r => selectedResIds.has(r.id));
    if (!selected.length) {
      setStatusText("No reservations selected to link.");
      return;
    }

    const ids = selected.map(s => s.id);
    setLinkedBookings(ids.join(", "));
    if (!customer && selected[0].company) setCustomer(selected[0].company);
    const lines: LineItem[] = selected.map(r => ({
      ref: r.id,
      description: `Room charges for ${r.id}`,
      qty: r.nights || 1,
      net: r.value || 0,
      taxPct: 18,
      total: Number(( (r.value || 0) * (1 + 18/100) ).toFixed(2))
    }));

    setLineItems(lines);
    setStatusText(`Linked ${selected.length} reservation(s) into invoice.`);
  }

  function toggleReservation(id: string) {
    setSelectedResIds(prev => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id); else copy.add(id);
      return copy;
    });
  }

  function cloneLastLine() {
    setLineItems(prev => {
      if (!prev.length) return prev;
      const last = prev[prev.length - 1];
      const clone = { ...last, ref: "", description: last.description, total: last.total };
      return [...prev, clone];
    });
  }

  function handleSave(e?: React.FormEvent) {
    e?.preventDefault();
    const payload = {
      invoiceId, customer, type, invoiceDate, dueDate, currency,
      linkedBookings, groupId, lineItems, amount, paid, due, paymentStatus, bills
    };
    setStatusText(`Saved invoice ${invoiceId || "(unsaved)"} (demo only).`);
    onSave?.(payload);
  }

  function handleReset() {
    setInvoiceId("");
    setCustomer("");
    setType("Booking");
    setInvoiceDate("");
    setDueDate("");
    setCurrency("INR");
    setLinkedBookings("");
    setGroupId("");
    setLineItems([{ ref: "", description: "", qty: 1, net: 0, taxPct: 18, total: 0 }]);
    setAmount(0); setPaid(0); setDue(0); setPaymentStatus("Unpaid");
    setBills([]);
    setSelectedResIds(new Set());
    setStatusText("Form reset (demo).");
    onCancel?.();
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSave}>
      <div className={styles.sectionLabel}>Invoice header</div>

      <div className={styles.gridAuto}>
        <div className={styles.formField}>
          <label>Invoice #</label>
          <input className={styles.input} value={invoiceId} onChange={e => setInvoiceId(e.target.value)} />
        </div>

        <div className={styles.formField}>
          <label>Customer / Agent</label>
          <input className={styles.input} value={customer} onChange={e => setCustomer(e.target.value)} />
        </div>

        <div className={styles.formField}>
          <label>Invoice type</label>
          <select className={styles.select} value={type} onChange={e => setType(e.target.value)}>
            <option>Booking</option>
            <option>Group / consolidated</option>
            <option>No-show</option>
            <option>Cancellation</option>
            <option>Miscellaneous</option>
          </select>
        </div>

        <div className={styles.formField}>
          <label>Invoice date</label>
          <input className={styles.input} value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)} placeholder="27 Nov 2025" />
        </div>

        <div className={styles.formField}>
          <label>Due date</label>
          <input className={styles.input} value={dueDate} onChange={e => setDueDate(e.target.value)} placeholder="11 Dec 2025" />
        </div>

        <div className={styles.formField}>
          <label>Currency</label>
          <select className={styles.select} value={currency} onChange={e => setCurrency(e.target.value)}>
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>

      {/* Reservation picker simplified UI (checkboxes) */}
      <div className={styles.card} style={{ marginTop: 8 }}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Select reservations to include</div>
            <div className={styles.cardSubtitle}>Search and pick one or more bookings to club into this invoice.</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" className="btn" onClick={applySelectedReservations}>Use selected reservations</button>
            <button type="button" className="btn" onClick={() => { setSelectedResIds(new Set()); setStatusText("Cleared selection"); }}>Clear</button>
          </div>
        </div>

        <div className={styles.tableWrap} style={{ marginTop: 8 }}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Booking #</th>
                <th>Guest</th>
                <th>Company</th>
                <th>Channel</th>
                <th>Nights</th>
                <th>Value (₹)</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map(r => (
                <tr key={r.id}>
                  <td><input type="checkbox" checked={selectedResIds.has(r.id)} onChange={() => toggleReservation(r.id)} /></td>
                  <td>{r.id}</td>
                  <td>{r.guest}</td>
                  <td>{r.company}</td>
                  <td>{r.channel}</td>
                  <td>{r.nights}</td>
                  <td>₹ {r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Line items */}
      <div className={styles.card} style={{ marginTop: 12 }}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Invoice line items</div>
            <div className={styles.cardSubtitle}>Editable lines. Amounts drive the invoice total.</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" className="btn" onClick={addLine}>Add line</button>
            <button type="button" className="btn" onClick={cloneLastLine}>Clone last</button>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Booking / Ref</th>
                <th>Description</th>
                <th>Qty</th>
                <th>Net amount (₹)</th>
                <th>Tax %</th>
                <th>Line total (₹)</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {lineItems.map((li, i) => (
                <tr key={i}>
                  <td><input className={styles.input} value={li.ref} onChange={e => setLineItemAt(i, { ref: e.target.value })} /></td>
                  <td><input className={styles.input} value={li.description} onChange={e => setLineItemAt(i, { description: e.target.value })} /></td>
                  <td><input className={styles.input} type="number" value={li.qty} onChange={e => setLineItemAt(i, { qty: Number(e.target.value) })} /></td>
                  <td><input className={styles.input} type="number" value={li.net} onChange={e => setLineItemAt(i, { net: Number(e.target.value) })} /></td>
                  <td><input className={styles.input} type="number" value={li.taxPct} onChange={e => setLineItemAt(i, { taxPct: Number(e.target.value) })} /></td>
                  <td><input className={styles.input} type="number" readOnly value={li.total} /></td>
                  <td><button type="button" className="btn" onClick={() => removeLine(i)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Totals, bills, notes */}
      <div className={styles.gridAuto} style={{ marginTop: 12 }}>
        <div className={styles.formField}>
          <label>Invoice gross amount (₹)</label>
          <input className={styles.input} value={amount} onChange={e => setAmount(Number(e.target.value))} />
        </div>

        <div className={styles.formField}>
          <label>Total paid so far (₹)</label>
          <input className={styles.input} value={paid} onChange={e => setPaid(Number(e.target.value))} />
        </div>

        <div className={styles.formField}>
          <label>Outstanding / due (₹)</label>
          <input className={styles.input} value={due} readOnly />
        </div>

        <div className={styles.formField}>
          <label>Payment / aging status</label>
          <select className={styles.select} value={paymentStatus} onChange={e => setPaymentStatus(e.target.value)}>
            <option>Unpaid</option>
            <option>Partially paid</option>
            <option>Paid in full</option>
            <option>Overdue</option>
          </select>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <label>Attach bills (PDF / image)</label>
        <input type="file" multiple onChange={handleFileChange} />
        <div className={styles.fileList}>
          {bills.length === 0 ? <>No bills selected. (Demo only)</> : <>Selected: {bills.map(f => f.name).join(", ")}</>}
        </div>
      </div>

      {/* actions */}
      <div className={styles.formActions}>
        <button className="btn btn-primary" type="submit">Save invoice</button>
        <button className="btn" type="button" onClick={handleReset}>Reset form</button>
        <span className={styles.statusText}>{statusText}</span>
      </div>
    </form>
  );
}
