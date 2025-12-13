"use client";

import React, { useMemo, useState } from "react";
import styles from "./Invoices.module.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";


type Booking = {
  id: string;
  guest?: string;
  amount: number;
};

type InvoiceStatus =
  | "Pending review"
  | "Approved"
  | "Processing"
  | "Paid"
  | "Rejected"
  | "Queried";

type Invoice = {
  id: string;
  hotel: string;
  period: string;
  dueDate: string;
  netAmount: number;
  taxAmount: number;
  totalAmount: number;
  status: InvoiceStatus;
  paidOn?: string;
  paymentRef?: string;
  bookings: Booking[];
};


const INVOICES: Invoice[] = [
  {
    id: "INV-CA-1201",
    hotel: "Grand Meridian",
    period: "01–15 Nov 2025",
    dueDate: "2025-12-06",
    netAmount: 78200,
    taxAmount: 7010,
    totalAmount: 85210,
    status: "Pending review",
    bookings: [
      { id: "OR-2481", guest: "Advik Singh", amount: 31200 }
    ]
  },
  {
    id: "INV-OB-3042",
    hotel: "Oasis Bay Business Hotel",
    period: "01–10 Nov 2025",
    dueDate: "2025-11-28",
    netAmount: 56250,
    taxAmount: 5062,
    totalAmount: 61312,
    status: "Processing",
    bookings: [
      { id: "OR-2501", guest: "Corporate Group", amount: 56250 }
    ]
  },
  {
    id: "INV-CA-1192",
    hotel: "Grand Meridian",
    period: "16–31 Oct 2025",
    dueDate: "2025-11-15",
    netAmount: 112900,
    taxAmount: 10161,
    totalAmount: 123061,
    status: "Paid",
    paidOn: "21 Nov 2025",
    paymentRef: "NEFT/AXIS/827361",
    bookings: [
      { id: "OR-2410", guest: "Training Batch", amount: 112900 }
    ]
  }
];


const fmtINR = (n: number) =>
  `₹ ${n.toLocaleString("en-IN")}`;

type Tab = "OPEN" | "PAID" | "GROUPS";


export default function InvoicesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("OPEN");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const openInvoices = useMemo(
    () =>
      INVOICES.filter(
        i =>
          i.status !== "Paid" &&
          (i.id.toLowerCase().includes(search.toLowerCase()) ||
            i.hotel.toLowerCase().includes(search.toLowerCase()))
      ),
    [search]
  );

  const paidInvoices = useMemo(
    () =>
      INVOICES.filter(
        i =>
          i.status === "Paid" &&
          (i.id.toLowerCase().includes(search.toLowerCase()) ||
            i.hotel.toLowerCase().includes(search.toLowerCase()))
      ),
    [search]
  );

  const selectedInvoice = useMemo(
    () => INVOICES.find(i => i.id === selectedId) || null,
    [selectedId]
  );

  const kpis = useMemo(() => {
    const open = INVOICES.filter(i => i.status !== "Paid")
      .reduce((s, i) => s + i.netAmount, 0);
    const processing = INVOICES.filter(i => i.status === "Processing")
      .reduce((s, i) => s + i.netAmount, 0);

    return { open, processing };
  }, []);

  return (
    <div className={styles.appShell}>
      <Sidebar variant="partner" />

      <main className={styles.main}>
        <Header
          title="Invoices & statements"
          subtitle="Review, query and move invoices to payment processing."
        />

        {/* KPIs */}
        <div className={styles.metricsRow}>
          <Metric label="Total open" value={fmtINR(kpis.open)} />
          <Metric label="Processing" value={fmtINR(kpis.processing)} />
        </div>

        <div className={styles.twoPane}>
          {/* LEFT */}
          <section className={styles.leftPane}>
            {/* Tabs */}


            {/* TABLES */}
            <section className={styles.leftPane}>
            {/* Pill Tabs */}
            <div className={styles.tabWrap}>
                <div className={styles.tabGroup}>
                <button
                    className={`${styles.tabItem} ${activeTab === "OPEN" ? styles.active : ""}`}
                    onClick={() => {
                    setActiveTab("OPEN");
                    setSelectedId(null);
                    }}
                >
                    Open invoices
                </button>

                <button
                    className={`${styles.tabItem} ${activeTab === "PAID" ? styles.active : ""}`}
                    onClick={() => {
                    setActiveTab("PAID");
                    setSelectedId(null);
                    }}
                >
                    Paid
                </button>

                <button
                    className={`${styles.tabItem} ${activeTab === "GROUPS" ? styles.active : ""}`}
                    onClick={() => {
                    setActiveTab("GROUPS");
                    setSelectedId(null);
                    }}
                >
                    Payment groups
                </button>
                </div>
            </div>

            {/* Search */}
            <input
                className={styles.input}
                placeholder="Search invoice or hotel"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            {/* TABLE SWITCH */}
            {activeTab === "OPEN" && (
                <TableOpen
                invoices={openInvoices}
                selectedId={selectedId}
                onSelect={setSelectedId}
                />
            )}

            {activeTab === "PAID" && (
                <TablePaid invoices={paidInvoices} />
            )}

            {activeTab === "GROUPS" && (
                <div className={styles.empty}>
                Payment groups will appear here
                </div>
            )}
            </section>


          </section>

          {/* RIGHT */}
          <section className={styles.rightPane}>
            {!selectedInvoice && (
              <div className={styles.empty}>
                Select an invoice to view details
              </div>
            )}

            {selectedInvoice && (
              <>
                <h3>{selectedInvoice.id}</h3>
                <p className={styles.muted}>
                  {selectedInvoice.hotel} · {selectedInvoice.period}
                </p>

                <div className={styles.detailGrid}>
                  <Detail label="Net" value={fmtINR(selectedInvoice.netAmount)} />
                  <Detail label="Tax" value={fmtINR(selectedInvoice.taxAmount)} />
                  <Detail label="Total" value={fmtINR(selectedInvoice.totalAmount)} />
                </div>

                <h4>Bookings</h4>
                <table className={styles.tableSmall}>
                  <tbody>
                    {selectedInvoice.bookings.map(b => (
                      <tr key={b.id}>
                        <td>{b.id}</td>
                        <td>{b.guest}</td>
                        <td>{fmtINR(b.amount)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

/* ======================
   TABLES
====================== */

function TableOpen({
  invoices,
  selectedId,
  onSelect
}: {
  invoices: Invoice[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Invoice #</th>
          <th>Hotel</th>
          <th>Net amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map(inv => (
          <tr
            key={inv.id}
            onClick={() => onSelect(inv.id)}
            className={inv.id === selectedId ? styles.activeRow : ""}
          >
            <td>{inv.id}</td>
            <td>{inv.hotel}</td>
            <td>{fmtINR(inv.netAmount)}</td>
            <td>{inv.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TablePaid({ invoices }: { invoices: Invoice[] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Invoice #</th>
          <th>Hotel</th>
          <th>Net amount</th>
          <th>Paid on</th>
          <th>Payment ref</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map(inv => (
          <tr key={inv.id}>
            <td>{inv.id}</td>
            <td>{inv.hotel}</td>
            <td>{fmtINR(inv.netAmount)}</td>
            <td>{inv.paidOn}</td>
            <td>{inv.paymentRef}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ======================
   UI BITS
====================== */

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.metric}>
      <div className={styles.metricLabel}>{label}</div>
      <div className={styles.metricValue}>{value}</div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className={styles.detailLabel}>{label}</div>
      <div>{value}</div>
    </div>
  );
}
