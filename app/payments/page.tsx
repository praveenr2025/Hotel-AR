"use client";
import React, { useState } from "react";
import PaymentsTopbar from "../../components/payments/PaymentsTopbar";
import PaymentsTabs from "../../components/payments/PaymentsTabs";
import PaymentsList from "../../components/payments/PaymentsList";
import PaymentsForm from "../../components/payments/PaymentsForm";
import PaymentsStatement from "../../components/payments/PaymentsStatement";
import KpiCard from "@/components/ui/KpiCard";
import Sidebar from "@/components/layout/Sidebar";

import styles from "../../components/payments/payments.module.css";

export type PaymentRow = {
  receiptId: string;
  payer: string;
  payerType: string;
  invoices: string;
  date: string;
  mode: string;
  amount: number;
  allocated: number;
  unapplied: number;
  bankRef?: string;
};

const SAMPLE_DATA: PaymentRow[] = [
  {
    receiptId: "RCPT-2123",
    payer: "Orbit Travels",
    payerType: "Agent",
    invoices: "INV-8843 (partial)",
    date: "27 Nov 2025",
    mode: "NEFT",
    amount: 100000,
    allocated: 100000,
    unapplied: 0,
    bankRef: "NEFT/AXIS/827361",
  },
  {
    receiptId: "RCPT-2124",
    payer: "Acme Industries",
    payerType: "Corporate",
    invoices: "INV-8845 (full)",
    date: "21 Nov 2025",
    mode: "RTGS",
    amount: 112900,
    allocated: 112900,
    unapplied: 0,
    bankRef: "RTGS/HDFC/992133",
  },
  {
    receiptId: "RCPT-2126",
    payer: "BlueSky Holidays",
    payerType: "Leisure",
    invoices: "INV-8844 (partial)",
    date: "28 Nov 2025",
    mode: "NEFT",
    amount: 50000,
    allocated: 30000,
    unapplied: 20000,
    bankRef: "NEFT/SBI/339912",
  },
];

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState<"list" | "record" | "statement">(
    "list"
  );
  const [rows, setRows] = useState<PaymentRow[]>(SAMPLE_DATA);
  const [selected, setSelected] = useState<PaymentRow | null>(null);
  const [statusLabel, setStatusLabel] = useState(
    'Fill the form and click "Save payment" – demo only.'
  );

  function handleView(row: PaymentRow) {
    setSelected(row);
    setActiveTab("statement");
  }

  function handleEdit(row: PaymentRow) {
    setSelected(row);
    setActiveTab("record");
  }

  function handleNew() {
    setSelected(null);
    setActiveTab("record");
  }

  function handleSave(row: PaymentRow) {
    setRows((prev) => {
      const idx = prev.findIndex((r) => r.receiptId === row.receiptId);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = row;
        return copy;
      } else {
        return [row, ...prev];
      }
    });
    setSelected(row);
    setActiveTab("list");
    setStatusLabel(`Payment "${row.receiptId}" saved (demo).`);
  }

  function handleReset() {
    setSelected(null);
    setStatusLabel(
      'Fill the form and click "Save payment" – this is a front-end demo only.'
    );
  }

  return (
<div className="app-shell">
  <Sidebar variant="hotel" />
  <main className="main">
    <div className="container">
      <PaymentsTopbar
        title="Payments"
        subtitle="Record receipts, allocate them to invoices and track outstanding balances."
        onRecord={handleNew}
      />

        <div className={styles.kpiGrid}>
        <KpiCard
            title="Total received (30 days)"
            subtitle="Across all modes"
            pillText="₹ 9,83,500"
            metricValue={<span></span>}
            metricDetail={
            <>
                <div><strong>Corporate & agents:</strong> ₹ 8,12,900</div>
                <div><strong>Direct & OTA:</strong> ₹ 1,70,600</div>
            </>
            }
        />

        <KpiCard
            title="Unapplied amount"
            subtitle="Receipts not fully allocated"
            pillText="₹ 36,200"
            metricValue={<span></span>}
            metricDetail={
            <>
                <div><strong>Pending mapping to invoices:</strong> 4 receipts</div>
            </>
            }
        />

        <KpiCard
            title="Reconciled vs bank"
            subtitle="Last statement cycle"
            pillText="98.4%"
            metricValue={<span></span>}
            metricDetail={
            <>
                <div><strong>Matched entries:</strong> 61 · <strong>Unmatched:</strong> 1</div>
            </>
            }
        />

        <KpiCard
            title="Today’s receipts"
            subtitle="Realised cashflows"
            pillText="₹ 1,25,000"
            metricValue={<span></span>}
            metricDetail={
            <>
                <div><strong>High value (&gt; ₹50k):</strong> 1 · <strong>Others:</strong> 3</div>
            </>
            }
        />
        </div>


        <div className={`${styles.card} ${styles.mainCard}`}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Payment Workspace</div>
              <div className={styles.cardSubtitle}>
                Search receipts, record new payments and allocate them across
                multiple invoices.
              </div>
            </div>
          </div>

          <PaymentsTabs active={activeTab} setActive={setActiveTab} />

          <div className={styles.tabPanel}>
            {activeTab === "list" && (
              <PaymentsList
                rows={rows}
                onView={handleView}
                onEdit={handleEdit}
              />
            )}
            {activeTab === "record" && (
              <PaymentsForm
                initial={selected ?? undefined}
                onSave={handleSave}
                onReset={handleReset}
                statusLabel={statusLabel}
              />
            )}
            {activeTab === "statement" && selected && (
              <PaymentsStatement row={selected} />
            )}
            {activeTab === "statement" && !selected && (
              <div className={styles.muted} style={{ padding: 20 }}>
                Select a payment row to preview statement.
              </div>
            )}
          </div>
        </div>
   
      
        </div>
      </main>
    </div>
  );
}
