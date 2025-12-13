"use client";

import React, { useState } from "react";
import styles from "@/components/bookings/Bookings.module.css";
import KpiCard from "@/components/ui/KpiCard";
import Tabs from "@/components/ui/Tabs";
import BookingList from "@/components/bookings/BookingList";
import BookingForm from "@/components/bookings/BookingForm";
import BookingSummary from "@/components/bookings/BookingSummary";
import Sidebar from "@/components/layout/Sidebar";

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<"list" | "create" | "summary">("list");
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  return (

<div className="app-shell">
  <Sidebar variant="hotel" />
    <main className="main">
    <div className={styles.container}>
      <header>
        <h1>Bookings</h1>
        <p>View, create and manage reservations from customers, agents and channels.</p>
      </header>
        <div className={styles.kpiGrid}>
        <KpiCard
            title="Today’s arrivals"
            subtitle="Expected check-ins"
            metricValue="18"
            metricDetail="Corporate: 7 · Agent: 6 · OTA: 5"
        />

        <KpiCard
            title="In-house"
            subtitle="Currently staying guests"
            metricValue="64 rooms"
            metricDetail="Occupancy: 82% · ADR: ₹ 6,350"
        />

        <KpiCard
            title="Today’s departures"
            subtitle="Expected check-outs"
            metricValue="22"
            metricDetail="Late check-outs requested: 4"
        />

        <KpiCard
            title="Cancellations (last 7 days)"
            subtitle="Track trends & no-show risk"
            metricValue="9"
            metricDetail="Same-day cancels: 3 · No-shows: 2"
        />
        </div>


      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Booking Workspace</div>
            <div className={styles.cardSubtitle}>
              One place to search, create, edit and review bookings across all channels.
            </div>
          </div>
        </div>

        <div className={styles.card}>
        <div className={styles.cardHeader}>
            <div>
            <div className={styles.cardTitle}>Booking Workspace</div>
            <div className={styles.cardSubtitle}>
                One place to search, create, edit and review bookings across all channels.
            </div>
            </div>
        </div>

        <Tabs
            tabs={[
            {
                id: "list",
                label: "All bookings",
                content: (
                <BookingList
                    setActiveTab={setActiveTab}
                    setSelectedBooking={setSelectedBooking}
                />
                )
            },
            {
                id: "create",
                label: "Create / Edit booking",
                content: <BookingForm />
            },
            {
                id: "summary",
                label: "Booking summary & timeline",
                content: (
                <BookingSummary booking={selectedBooking} />
                )
            }
            ]}
        />
        </div>
        </div>
    </div>
    </main>
    </div>
  );
}
