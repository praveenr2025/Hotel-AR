"use client";

import React, { useState } from "react";
import styles from "./Rooms.module.css";

import RoomTypesList from "./RoomTypesList";
import RoomTypeForm from "./RoomTypeForm";
import InventoryManager from "./InventoryManager";
import SeasonPlanner from "./SeasonPlanner";
import OverridePlanner from "./OverridePlanner";
import Policies from "./Policies";

export default function RoomsTabs() {
  const [active, setActive] = useState("roomtypes");

  const tabs = [
    { id: "roomtypes", label: "Room types" },
    { id: "addedit", label: "Add & edit room type" },
    { id: "inventory", label: "Inventory & allotments" },
    { id: "rates", label: "Seasons & rates" },
    { id: "policies", label: "Policies & amenities" }
  ];

  return (
    <>
        <div className={styles.tabList}>
        {tabs.map((tab) => (
            <button
            key={tab.id}
            className={`${styles.tab} ${active === tab.id ? styles.active : ""}`}
            onClick={() => setActive(tab.id)}
            >
            {tab.label}
            </button>
        ))}
        </div>


      <div className={styles.content}>
        {active === "roomtypes" && <RoomTypesList />}
        {active === "addedit" && <RoomTypeForm />}
        {active === "inventory" && <InventoryManager />}
        {active === "rates" && (
          <>
            <SeasonPlanner />
            <OverridePlanner />
          </>
        )}
        {active === "policies" && <Policies />}
      </div>
    </>
  );
}
