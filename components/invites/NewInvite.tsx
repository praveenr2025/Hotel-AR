"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import styles from "./Invites.module.css";

export default function NewInvite() {
  const [status, setStatus] = useState(
    'No invite generated yet. Fill the form and click "Generate invite".'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Invite generated (demo only).");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.sectionLabel}>Recipient details</div>

      <div className={styles.grid}>
        <div>
          <label className={styles.label}>Invite type</label>
          <select className="select">
            <option>Customer</option>
            <option>Agent</option>
            <option>Corporate</option>
            <option>OTA</option>
            <option>Internal</option>
          </select>
        </div>

        <div>
          <label className={styles.label}>Company / Agency</label>
          <input className="input" placeholder="Company name" />
        </div>

        <div>
          <label className={styles.label}>Contact person</label>
          <input className="input" placeholder="Full name" />
        </div>

        <div>
          <label className={styles.label}>Email</label>
          <input className="input" placeholder="name@example.com" />
        </div>

        <div>
          <label className={styles.label}>Phone</label>
          <input className="input" placeholder="+91-" />
        </div>

        <div>
          <label className={styles.label}>Country</label>
          <input className="input" placeholder="India" />
        </div>
      </div>

      <div className={styles.sectionLabel}>Access scope & modules</div>

      <div className={styles.grid}>
        <div>
          <label className={styles.label}>Access scope</label>
          <select className="select">
            <option>Single property – Grand Meridian</option>
            <option>Multiple properties – Corporate Rate</option>
            <option>All properties – Chain level</option>
          </select>
        </div>

        <div>
          <label className={styles.label}>Suggested role</label>
          <select className="select">
            <option>Corporate Booker</option>
            <option>Travel Agent Owner</option>
            <option>Finance Contact</option>
            <option>OTA Mapping User</option>
          </select>
        </div>

        <div>
          <label className={styles.label}>Invite validity (days)</label>
          <input className="input" placeholder="7" />
        </div>
      </div>

      <div className={styles.sectionLabel}>Module-level access</div>

      <div className={styles.checkGrid}>
        <label><input type="checkbox" defaultChecked /> Bookings dashboard</label>
        <label><input type="checkbox" defaultChecked /> Contracts & rate cards</label>
        <label><input type="checkbox" defaultChecked /> Invoices</label>
        <label><input type="checkbox" /> Payments & statements</label>
        <label><input type="checkbox" /> Analytics & exports</label>
        <label><input type="checkbox" defaultChecked /> Self-service profile</label>
      </div>

      <div className={styles.sectionLabel}>Personal message</div>
      <textarea className={styles.textarea} placeholder="Optional note for the customer or agent"></textarea>

      <div className={styles.actions}>
        <Button variant="primary">Generate invite</Button>
        <Button>Reset</Button>
        <span className={styles.statusNote}>{status}</span>
      </div>
    </form>
  );
}
