"use client";

import React from "react";
import InvitesTabs from "@/components/invites/InvitesTabs";
import KpiCard from "@/components/ui/KpiCard";
import styles from "./page.module.css";
import Sidebar from "@/components/layout/Sidebar";

export default function InvitesPage() {
  return (
<div className="app-shell">
  <Sidebar variant="hotel" />
  <main className="main">
    <div className="container">
      <div className={styles.topbar}>
        <div>
          <h1 className={styles.pageTitle}>Invites & Access Management</h1>
          <p className={styles.pageSubtitle}>
            Send access links to customers, agents and partners to self-register on the portal.
          </p>
        </div>

        <div className={styles.actionsRight}>
          <button className="btn">Bulk upload CSV</button>
          <button className="btn btn-primary">New Invite</button>
        </div>
      </div>
      <div className={styles.kpiGrid}>
        <KpiCard
        title="Invites last 7 days"
        subtitle="Across customers & agents"
        metricValue="42 sent"
        metricDetail={
            <>
            <div>Acceptance rate: <strong>76%</strong></div>
            <div>Most active type: <strong>Corporate customers (18 invites)</strong></div>
            </>
        }
        />

        <KpiCard
        title="Pending registration"
        subtitle="Invites not yet used"
        metricValue="13 pending"
        metricDetail={
            <>
            <div>Expiring in 3 days: <strong>4</strong></div>
            <div>Longest pending: <strong>18 days</strong></div>
            </>
        }
        />

        <KpiCard
        title="Most used template"
        subtitle="Last 30 days"
        metricValue="Agent – Standard"
        metricDetail={
            <>
            <div>Applied to: <strong>31 invites</strong></div>
            <div>Modules: <strong>Bookings, Contracts, Invoices</strong></div>
            </>
        }
        />

        </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Portal Invites</div>
            <div className={styles.cardSubtitle}>
              Create and track registration links for customers, agents and internal stakeholders.
            </div>
          </div>
        </div>

        <InvitesTabs />
      </div>
    </div>
    </main>
    </div>
  );
}
