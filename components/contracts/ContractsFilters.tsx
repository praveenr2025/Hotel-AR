"use client";

import React, { useState } from "react";
import styles from "./Contracts.module.css";

interface Props {
  onChange: (payload: { q?: string; status?: string; segment?: string }) => void;
}

export default function ContractsFilters({ onChange }: Props) {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("All");
  const [segment, setSegment] = useState<string>("All");

  function apply() {
    onChange({ q, status, segment });
  }

  return (
    <div className={styles.filters}>
      <input
        className="input"
        placeholder="Search by partner / contract ID"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") apply(); }}
      />

      <select
        className="select"
        value={status}
        onChange={(e) => { setStatus(e.target.value); onChange({ status: e.target.value }); }}
      >
        <option value="All">All validity</option>
        <option value="Active">Current</option>
        <option value="Pending">Upcoming</option>
        <option value="Expired">Expired</option>
        <option value="Draft">Draft</option>
      </select>

      <select
        className="select"
        value={segment}
        onChange={(e) => { setSegment(e.target.value); onChange({ segment: e.target.value }); }}
      >
        <option value="All">All segments</option>
        <option value="Corporate">Corporate</option>
        <option value="Leisure">Leisure</option>
        <option value="OTA">OTA</option>
        <option value="Agent">Agent</option>
        <option value="Other">Other</option>
      </select>

      <button className="btn" onClick={apply}>Apply</button>
      <button className="btn" onClick={() => { setQ(""); setStatus("All"); setSegment("All"); onChange({ q: "", status: "All", segment: "All" }); }}>
        Reset
      </button>
    </div>
  );
}
