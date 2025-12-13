"use client";

import React from "react";
import Header from "@/components/layout/Header";
import RoomsTabs from "@/components/rooms/RoomsTabs";
import styles from "./page.module.css";
import Sidebar from "@/components/layout/Sidebar";

export default function RoomsPage() {
  return (
<div className="app-shell">
  <Sidebar variant="hotel" />
  <main className="main">
    <div className="container">
      <Header
        title="Rooms & Property Configuration"
        subtitle="Define room inventory, rateable products and core property details."
        actions={[
          { label: "Bulk Upload", variant: "secondary", onClick: () => {} },
          { label: "Add Room Type", variant: "primary", onClick: () => {} }
        ]}
      />
      <div className={styles.card}>
        <RoomsTabs />
      </div>
    </div>
    </main>
    </div>
  );
}
