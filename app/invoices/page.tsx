"use client";
import React, { useState } from "react";
import InvoicesTopbar from "@/components/invoices/InvoicesTopbar";
import KpiCard from "@/components/ui/KpiCard";
import InvoicesTabs from "@/components/invoices/InvoicesTabs";
import InvoiceList from "@/components/invoices/InvoiceList";
import InvoiceForm, { Reservation } from "@/components/invoices/InvoiceForm";
import InvoiceSummary from "@/components/invoices/InvoiceSummary";
import styles from "@/components/invoices/Invoices.module.css";
import Sidebar from "@/components/layout/Sidebar";

export default function InvoicesPage() {
  const [activeTab, setActiveTab] = useState<"list"|"edit"|"summary">("list");
  const [selectedInvoice, setSelectedInvoice] = useState<any | null>(null);

  const demoReservations: Reservation[] = [
    { id: "GMH-2497", guest: "Sara D'Souza", company: "TripNest", channel: "OTA", nights: 2, value: 11200, status: "In-house", checkinDate: "2025-11-28" },
    { id: "GMH-2504", guest: "Orbit Travels Group", company: "Orbit Travels", channel: "Agent", nights: 2, value: 148000, status: "Group", checkinDate: "2025-11-29" },
    { id: "GMH-2472", guest: "Acme Industries", company: "Acme Industries", channel: "Corporate", nights: 3, value: 112900, status: "Checked out", checkinDate: "2025-11-20" },
    { id: "GMH-2491", guest: "TripNest Guest", company: "TripNest", channel: "OTA", nights: 2, value: 54300, status: "Confirmed", checkinDate: "2025-11-26" }
  ];

  function handleView(invoice: any) {
    setSelectedInvoice({
      invoiceId: invoice.id || invoice.invoiceId,
      customer: invoice.customer,
      type: invoice.type || "Booking",
      invoiceDate: invoice.invoiceDate,
      dueDate: invoice.dueDate,
      bookings: invoice.bookings,
      groupId: invoice.groupId,
      amount: invoice.amount,
      paid: invoice.paid,
      due: invoice.due,
      paymentStatus: invoice.status,
      lines: invoice.lines || []
    });
    setActiveTab("summary");
  }

  function handleEdit(invoice: any) {
    setSelectedInvoice(invoice);
    setActiveTab("edit");
  }

  function openCreate() {
    setSelectedInvoice(null);
    setActiveTab("edit");
  }

  return (
<div className="app-shell">
 <Sidebar variant="hotel" />
  <main className="main">
    <div className="container">
          <InvoicesTopbar openCreate={openCreate} />
          <div className={styles.kpiGrid}>
            <KpiCard
                title="Total outstanding"
                subtitle="Across all open invoices"
                pillText="₹ 4,99,700"
                metricValue={<span></span>}
                metricDetail={
                <>
                    <div><strong>Corporate & agents:</strong> ₹ 4,32,100</div>
                    <div><strong>Others:</strong> ₹ 67,600</div>
                </>
                }
            />

            <KpiCard
                title="Overdue"
                subtitle="Past due date"
                pillText="₹ 1,23,500"
                metricValue={<span></span>}
                metricDetail={
                <>
                    <div><strong>&lt; 15 days:</strong> ₹ 78,200</div>
                    <div><strong>&gt; 15 days:</strong> ₹ 45,300</div>
                </>
                }
            />

            <KpiCard
                title="Partially paid"
                subtitle="Invoices with open balance"
                pillText="3 invoices"
                metricValue={<span></span>}
                metricDetail={
                <>
                    <div><strong>Due this week:</strong> ₹ 1,74,900</div>
                </>
                }
            />

            <KpiCard
                title="Billed this month"
                subtitle="Invoice value raised in Nov 2025"
                pillText="₹ 8,75,400"
                metricValue={<span></span>}
                metricDetail={
                <>
                    <div><strong>Realised:</strong> ₹ 4,76,800</div>
                    <div><strong>Pending:</strong> ₹ 3,98,600</div>
                </>
                }
            />
            </div>


          <InvoicesTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <div>
            {activeTab === "list" && (
              <InvoiceList onView={handleView} onEdit={handleEdit} />
            )}

            {activeTab === "edit" && (
              <InvoiceForm
                reservations={demoReservations}
                initial={selectedInvoice ?? {}}
                onSave={(payload) => {
                  setSelectedInvoice({ ...payload, invoiceId: payload.invoiceId || "New (unsaved)" });
                  setActiveTab("summary");
                }}
                onCancel={() => setActiveTab("list")}
              />
            )}
            {activeTab === "summary" && (
              <InvoiceSummary invoice={selectedInvoice} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
