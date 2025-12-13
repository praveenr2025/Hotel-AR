"use client";

import React, { useState } from "react";
import styles from "./Bookings.module.css";

export default function CreateBookingForm() {
  const [bills, setBills] = useState<File[]>([]);
  const [statusLabel, setStatusLabel] = useState("Fill details and click save.");

  const handleBills = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setBills(Array.from(e.target.files));
    }
  };

  const saveForm = () => {
    setStatusLabel(`Booking saved (demo only). ${bills.length} bill(s) attached.`);
  };

  const resetForm = () => {
    setBills([]);
    setStatusLabel("Form reset (demo only).");
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.sectionLabel}>Guest & partner details</div>

      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>Booking #</label>
          <input className={styles.input} placeholder="Auto or manual e.g. GMH-2510" />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Guest name</label>
          <input className={styles.input} placeholder="Primary guest name" />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Email</label>
          <input className={styles.input} placeholder="guest@example.com" />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Phone</label>
          <input className={styles.input} placeholder="+91-" />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Company / Agent</label>
          <input className={styles.input} placeholder="Company, agent or OTA" />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Channel</label>
          <select className={styles.select}>
            <option>Direct</option>
            <option>Corporate</option>
            <option>Agent</option>
            <option>OTA</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className={styles.sectionLabel}>Stay details</div>

      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>Check-in date</label>
          <input className={styles.input} placeholder="29 Nov 2025" />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Check-out date</label>
          <input className={styles.input} placeholder="02 Dec 2025" />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Nights</label>
          <input className={styles.input} placeholder="3" />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Adults</label>
          <input className={styles.input} placeholder="1" />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Children</label>
          <input className={styles.input} placeholder="0" />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Booking status</label>
          <select className={styles.select}>
            <option>Provisional</option>
            <option>Confirmed</option>
            <option>In-house</option>
            <option>Checked out</option>
            <option>Cancelled</option>
            <option>No-show</option>
          </select>
        </div>
      </div>

      <div className={styles.sectionLabel}>Room & rate selection</div>

      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>Room type</label>
          <select className={styles.select}>
            <option>Deluxe King</option>
            <option>Deluxe Twin</option>
            <option>Premier King</option>
            <option>Club Suite</option>
            <option>Superior</option>
          </select>
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Rate plan</label>
          <select className={styles.select}>
            <option>Best Available Rate</option>
            <option>Corporate – Shoulder</option>
            <option>Corporate – All year</option>
            <option>OTA – Dynamic</option>
            <option>Group – Fixed</option>
          </select>
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Meal plan</label>
          <select className={styles.select}>
            <option>EP – Room only</option>
            <option>CP – Room + breakfast</option>
            <option>MAP – Breakfast + one meal</option>
            <option>AP – All meals</option>
          </select>
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Avg. rate per night (₹)</label>
          <input className={styles.input} placeholder="6350" />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Total value (₹)</label>
          <input className={styles.input} placeholder="19050" />
        </div>
      </div>
      <div className={styles.sectionLabel}>Billing & payment</div>

      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>Payment mode</label>
          <select className={styles.select}>
            <option>On credit (invoicing)</option>
            <option>Prepaid</option>
            <option>Pay at hotel</option>
            <option>OTA – Virtual card</option>
          </select>
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Payment / invoice status</label>
          <select className={styles.select}>
            <option>To be invoiced</option>
            <option>Invoice raised</option>
            <option>Partially paid</option>
            <option>Fully paid</option>
          </select>
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Invoice #</label>
          <input className={styles.input} placeholder="INV-XXXX" />
        </div>
      </div>

      <div className={styles.sectionLabel}>Bills & attachments</div>

      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>Attach bills (PDF / image)</label>
          <input type="file" multiple onChange={handleBills} />

          <div className={styles.fileList}>
            {bills.length === 0 ? (
              <>No bills selected. (Demo only)</>
            ) : (
              <>Selected: {bills.map((f) => f.name).join(", ")}</>
            )}
          </div>
        </div>
      </div>

      <div className={styles.sectionLabel}>Preferences & internal notes</div>

      <div className={styles.formGrid}>
        <div className={styles.formField}>
          <label className={styles.formLabel}>Guest preferences</label>
          <textarea
            className={styles.textarea}
            placeholder="e.g. High floor, king bed, early check-in…"
          />
        </div>

        <div className={styles.formField}>
          <label className={styles.formLabel}>Front office / revenue notes</label>
          <textarea
            className={styles.textarea}
            placeholder="Internal notes: approvals, upgrades…"
          />
        </div>
      </div>

      <div className={styles.formActions}>
        <button className="btn btn-primary" onClick={saveForm}>Save booking</button>
        <button className="btn" onClick={resetForm}>Reset form</button>
        <span className={styles.formInfo}>{statusLabel}</span>
      </div>
    </div>
  );
}
