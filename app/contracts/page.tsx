"use client";

import React, { useMemo, useState } from "react";
import Tabs from "@/components/ui/Tabs";
import KpiCard from "@/components/ui/KpiCard";
import ContractsFilters from "@/components/contracts/ContractsFilters";
import ContractsList from "@/components/contracts/ContractsList";
import ContractForm from "@/components/contracts/ContractForm";
import styles from "@/components/contracts/Contracts.module.css";
import Sidebar from "@/components/layout/Sidebar";


export type Contract = {
  contractId: string;
  partner: string;
  segment: "Corporate" | "Agent" | "OTA" | "Leisure" | "Other";
  validFrom: string;
  validTo: string;
  creditLimit: string;
  creditDays: string;
  billingType: string;
  signature: string;
  status: "Active" | "Pending" | "Expired" | "Draft";
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  partnerType?: string;
  currency?: string;
  notes?: string;
};

const HARD_CODED: Contract[] = [
  {
    contractId: "CT-2025-CO-001",
    partner: "Acme Industries",
    segment: "Corporate",
    validFrom: "01 Apr 2025",
    validTo: "31 Mar 2026",
    creditLimit: "₹ 25,00,000",
    creditDays: "30",
    billingType: "Credit",
    signature: "e-Signed · 26 Mar 2025",
    status: "Active",
    contactName: "Nikhil Verma",
    contactEmail: "nikhil.verma@acmeindustries.com",
    contactPhone: "+91-98765-10001",
    partnerType: "Corporate",
    currency: "INR",
    notes: "Top corporate client"
  },
  {
    contractId: "CT-2025-AG-014",
    partner: "Orbit Travels",
    segment: "Agent",
    validFrom: "01 Jan 2025",
    validTo: "31 Dec 2025",
    creditLimit: "₹ 10,00,000",
    creditDays: "21",
    billingType: "Credit",
    signature: "e-Signed · 20 Dec 2024",
    status: "Active",
    contactName: "Travel Desk Team",
    contactEmail: "contracts@orbittravels.in",
    contactPhone: "+91-98111-22233",
    partnerType: "Agent",
    currency: "INR",
    notes: ""
  },
  {
    contractId: "CT-2025-OT-003",
    partner: "TripNest",
    segment: "OTA",
    validFrom: "01 Jun 2025",
    validTo: "31 May 2026",
    creditLimit: "₹ 50,00,000",
    creditDays: "0",
    billingType: "Prepaid",
    signature: "Awaiting signature",
    status: "Pending",
    contactName: "Supply Team",
    contactEmail: "supply@tripnest.com",
    contactPhone: "+91-99888-33445",
    partnerType: "OTA",
    currency: "INR",
    notes: ""
  },
  {
    contractId: "CT-2024-CO-019",
    partner: "BlueSky Holidays",
    segment: "Leisure",
    validFrom: "01 Apr 2024",
    validTo: "31 Mar 2025",
    creditLimit: "₹ 8,00,000",
    creditDays: "21",
    billingType: "Credit",
    signature: "e-Signed · 20 Mar 2024",
    status: "Expired",
    contactName: "Priya Mehta",
    contactEmail: "priya.mehta@blueskyholidays.com",
    contactPhone: "+91-90000-11223",
    partnerType: "Leisure",
    currency: "INR",
    notes: ""
  }
];

export default function ContractsPage() {
  const [contracts, setContracts] = useState<Contract[]>(HARD_CODED);
  const [selected, setSelected] = useState<Contract | null>(null);

  const [filters, setFilters] = useState({
    q: "",
    status: "All",
    segment: "All"
  });

  const filtered = useMemo(() => {
    const q = filters.q.toLowerCase().trim();
    return contracts.filter(c => {
      if (filters.status !== "All" && c.status !== filters.status) return false;
      if (filters.segment !== "All" && c.segment !== filters.segment) return false;
      if (!q) return true;

      return (
        c.contractId.toLowerCase().includes(q) ||
        c.partner.toLowerCase().includes(q) ||
        (c.contactEmail || "").toLowerCase().includes(q)
      );
    });
  }, [contracts, filters]);

  const kpis = useMemo(() => {
    const active = contracts.filter(c => c.status === "Active").length;
    const expiringSoon = contracts.filter(c => c.status === "Pending").length;
    const signed = contracts.filter(c =>
      c.signature?.toLowerCase().includes("e-signed")
    ).length;

    return { active, expiringSoon, signed };
  }, [contracts]);


  const handleSave = (payload: Contract) => {
    setContracts(prev => {
      const idx = prev.findIndex(c => c.contractId === payload.contractId);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = payload;
        return copy;
      }
      return [payload, ...prev];
    });
    setSelected(payload);
  };

  return (
<div className="app-shell">
  <Sidebar variant="hotel" />
  <main className="main">
    <div className="container">
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 22 }}>Contracts</h1>
          <p style={{ color: "#64748b" }}>Manage partner contracts, rates and allotments.</p>
        </div>

        <div className={styles.headerActions}  style={{ display: "flex", gap: 12 }}>

        <button className="btn">Rate Sheet Export</button>
        <button className="btn btn-primary">New Contract</button>
        </div>

      </div>

      <div className="kpiGrid">
        <KpiCard
          title="Active contracts"
          subtitle="Corporate, agents, OTA & leisure"
          metricValue={<strong style={{ color: "#1e40af" }}>{kpis.active}</strong>}
          metricDetail="Corporate: 7 · Agents: 6 · OTA: 3 · Leisure: 2"
        />

        <KpiCard
          title="Expiring soon"
          subtitle="Within 60 days"
          metricValue={<strong style={{ color: "#1e40af" }}>{kpis.expiringSoon}</strong>}
          metricDetail="Highest value: CT-2025-CO-001 · Alert: 2 renewals"
        />

        <KpiCard
          title="Signed digitally"
          subtitle="Contracts with e-sign status"
          metricValue={<strong style={{ color: "#1e40af" }}>{kpis.signed}</strong>}
          metricDetail="Last signed: CT-2025-AG-014 · Pending: 3"
        />
      </div>


      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Contracts Workspace</div>
            <div className={styles.cardSubtitle}>
              View, add and manage partner contracts and season rates.
            </div>
          </div>
        </div>

        <Tabs
          tabs={[
            {
              id: "list",
              label: "Contracts list",
              content: (
                <>
                  <ContractsFilters onChange={f => setFilters(p => ({ ...p, ...f }))} />

                <ContractsList
                data={filtered}
                onEdit={(id: any) =>
                    setSelected(contracts.find(c => c.contractId === id) || null)
                }
                onView={(id: any) =>
                    setSelected(contracts.find(c => c.contractId === id) || null)
                }
                />

                </>
              )
            },
            {
              id: "edit",
              label: "New / Edit contract",
              content: (
                <ContractForm
                  selectedContract={selected}
                  onSave={handleSave}
                  onCancel={() => setSelected(null)}
                />
              )
            },
            {
              id: "summary",
              label: "Contract summary",
              content:
                selected ? (
                  <div style={{ padding: 20 }}>
                    <h3>{selected.contractId}</h3>
                    <p>{selected.partner}</p>
                  </div>
                ) : (
                  <div style={{ padding: 20, color: "#64748b" }}>No contract selected.</div>
                )
            }
          ]}
        />
      </div>
    </div>
    </main>
    </div>
  );
}
