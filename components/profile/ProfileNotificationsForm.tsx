"use client";

import styles from "./profile.module.css";

export default function ProfileNotificationsForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 10 }}>

      {/* EVENTS */}
      <div className={styles.label}>Event notifications</div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Booking & room events</div>
              <div className={styles.cardSubtitle}>Where should alerts go?</div>
            </div>
          </div>

          <div style={{ fontSize: 14, lineHeight: 1.8 }}>
            <label><input type="checkbox" defaultChecked /> New booking</label><br />
            <label><input type="checkbox" defaultChecked /> Modification / cancellation</label><br />
            <label><input type="checkbox" /> Same-day no-show</label><br />
            <label><input type="checkbox" /> Early check-in / late check-out</label>
          </div>

          <div style={{ marginTop: 10 }}>
            <label className={styles.label}>Send to email(s)</label>
            <input
              className={styles.input}
              defaultValue="reservations@grandmeridian.com, frontoffice@grandmeridian.com"
            />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Invoice & payment events</div>
              <div className={styles.cardSubtitle}>For finance & AR teams.</div>
            </div>
          </div>

          <div style={{ fontSize: 14, lineHeight: 1.8 }}>
            <label><input type="checkbox" defaultChecked /> Invoice raised / updated</label><br />
            <label><input type="checkbox" defaultChecked /> Payment received & allocated</label><br />
            <label><input type="checkbox" defaultChecked /> Invoice due in 3 days</label><br />
            <label><input type="checkbox" /> Invoice overdue  15 days</label>
          </div>

          <div style={{ marginTop: 10 }}>
            <label className={styles.label}>Send to email(s)</label>
            <input
              className={styles.input}
              defaultValue="finance@grandmeridian.com, ar@grandmeridian.com"
            />
          </div>
        </div>
      </div>

      {/* CHANNELS */}
      <div className={styles.label} style={{ marginTop: 14 }}>
        Delivery channels
      </div>

      <div className={styles.responsiveGrid}>
        <div>
          <label className={styles.label}>Primary notification channel</label>
          <select className={styles.select} defaultValue="Email">
            <option>Email</option>
            <option>WhatsApp</option>
            <option>SMS</option>
          </select>
        </div>

        <div>
          <label className={styles.label}>Copy key events to</label>
          <select className={styles.select} defaultValue="Hotel GM">
            <option>None</option>
            <option>Hotel GM</option>
            <option>Cluster revenue head</option>
          </select>
        </div>
      </div>

      {/* WEBHOOKS */}
      <div className={styles.grid} style={{ marginTop: 14 }}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Webhook endpoints</div>
              <div className={styles.cardSubtitle}>Notify internal systems.</div>
            </div>
          </div>

          <label className={styles.label}>Booking events webhook</label>
          <input
            className={styles.input}
            defaultValue="https://api.yourdomain.com/hooks/hotelhub/bookings"
          />

          <label className={styles.label} style={{ marginTop: 10 }}>Invoice events webhook</label>
          <input
            className={styles.input}
            defaultValue="https://api.yourdomain.com/hooks/hotelhub/invoices"
          />
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>API key (demo)</div>
              <div className={styles.cardSubtitle}>Used for integrations.</div>
            </div>
          </div>

          <label className={styles.label}>Current key (masked)</label>
          <input className={styles.input} readOnly defaultValue="hk_live_9f4d••••••••••••••••" />

          <button className={styles.btn} style={{ marginTop: 10 }} type="button">
            Regenerate key
          </button>
        </div>
      </div>

      {/* SAVE */}
      <div className={styles.actionsRow}>
        <button className={`${styles.btn} ${styles.btnPrimary}`}>Save notification settings</button>
      </div>
    </form>
  );
}
