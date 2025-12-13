"use client";

import styles from "./profile.module.css";

export default function ProfileBillingForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 10 }}>

      {/* LEGAL ENTITY & GST */}
      <div className={styles.label}>Legal entity & GST details</div>

      <div className={styles.responsiveGrid}>
        <div>
          <label className={styles.label}>Legal entity name</label>
          <input className={styles.input} defaultValue="Grand Meridian Hotels Pvt. Ltd." />
        </div>

        <div>
          <label className={styles.label}>GSTIN</label>
          <input className={styles.input} defaultValue="27AACCG1234K1Z8" />
        </div>

        <div>
          <label className={styles.label}>PAN</label>
          <input className={styles.input} defaultValue="AACCG1234K" />
        </div>

        <div>
          <label className={styles.label}>Place of supply (State)</label>
          <input className={styles.input} defaultValue="Maharashtra" />
        </div>
      </div>

      {/* BILLING ADDRESS */}
      <div className={styles.responsiveGrid} style={{ marginTop: 14 }}>
        <div>
          <label className={styles.label}>Billing address (as per GST)</label>
          <textarea
            className={styles.textarea}
            defaultValue={`Grand Meridian Hotels Pvt. Ltd.
18, Riverside Business Park, Baner
Pune, Maharashtra 411045, India`}
          />
        </div>

        <div>
          <label className={styles.label}>Finance contact</label>
          <div className={styles.responsiveGrid} style={{ marginTop: 4 }}>
            <input className={styles.input} placeholder="Name" defaultValue="Finance Manager" />
            <input className={styles.input} placeholder="Email" defaultValue="finance@grandmeridian.com" />
            <input className={styles.input} placeholder="Phone" defaultValue="+91-20-4000-5678" />
          </div>
        </div>
      </div>

      {/* BANK DETAILS */}
      <div className={styles.label} style={{ marginTop: 14 }}>
        Bank account for payments
      </div>

      <div className={styles.responsiveGrid}>
        <div>
          <label className={styles.label}>Bank name</label>
          <input className={styles.input} defaultValue="HDFC Bank" />
        </div>
        <div>
          <label className={styles.label}>Branch</label>
          <input className={styles.input} defaultValue="Baner, Pune" />
        </div>
        <div>
          <label className={styles.label}>Account number</label>
          <input className={styles.input} defaultValue="50200012345678" />
        </div>
        <div>
          <label className={styles.label}>IFSC</label>
          <input className={styles.input} defaultValue="HDFC0001234" />
        </div>
      </div>

      {/* TAX RULES */}
      <div className={styles.label} style={{ marginTop: 14 }}>
        Tax configuration (summary)
      </div>

      <div className={styles.card} style={{ marginBottom: 14 }}>
        <div>
          <label className={styles.label}>Room tax rule</label>
          <input
            className={styles.input}
            defaultValue="GST @ 12% for room tariff < ₹7,500; GST @ 18% otherwise."
          />
        </div>

        <div style={{ marginTop: 10 }}>
          <label className={styles.label}>F&B / banquet / other tax rule</label>
          <input
            className={styles.input}
            defaultValue="GST @ 18% for F&B / banquet; service charge optional."
          />
        </div>

        <div style={{ marginTop: 10 }}>
          <label className={styles.label}>Notes for finance (internal)</label>
          <textarea
            className={styles.textarea}
            defaultValue="These rules are indicative. Final rates and tax splits come from contracts and finance configs."
          />
        </div>
      </div>

      {/* INVOICE DEFAULTS */}
      <div className={styles.label} style={{ marginTop: 14 }}>
        Invoice & credit note defaults
      </div>

      <div className={styles.card}>
        <label className={styles.label}>Default payment terms</label>
        <select className={styles.select} defaultValue="15 days from invoice date">
          <option>Advance payment</option>
          <option>15 days from invoice date</option>
          <option>30 days from invoice date</option>
          <option>Custom per contract</option>
        </select>

        <div style={{ marginTop: 10 }}>
          <label className={styles.label}>Default invoice footer note</label>
          <textarea
            className={styles.textarea}
            defaultValue={`All cheques / transfers payable to "Grand Meridian Hotels Pvt. Ltd."
            Please quote invoice number in NEFT/RTGS remarks for faster reconciliation.`}
          />
        </div>
      </div>

      {/* SAVE BUTTON */}
      <div className={styles.actionsRow}>
        <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit">
          Save billing & tax settings
        </button>
      </div>
    </form>
  );
}
