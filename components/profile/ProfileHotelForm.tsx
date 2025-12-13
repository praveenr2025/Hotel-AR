"use client";

import styles from "./profile.module.css";

export default function ProfileHotelForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 10 }}>

      {/* PROPERTY BASICS */}
      <div className={styles.label}>Property basics</div>

      <div className={styles.responsiveGrid}>
        <div>
          <label className={styles.label}>Hotel name</label>
          <input className={styles.input} defaultValue="Grand Meridian Hotel" />
        </div>

        <div>
          <label className={styles.label}>Brand / chain</label>
          <input className={styles.input} defaultValue="Meridian Collection" />
        </div>

        <div>
          <label className={styles.label}>Star rating</label>
          <select className={styles.select} defaultValue="4 Star">
            <option>3 Star</option>
            <option>4 Star</option>
            <option>5 Star</option>
            <option>Luxury / Boutique</option>
          </select>
        </div>

        <div>
          <label className={styles.label}>Property ID (internal)</label>
          <input className={styles.input} defaultValue="GMH-9843" />
        </div>
      </div>

      {/* ADDRESS */}
      <div className={styles.label} style={{ marginTop: 10 }}>
        Address & contact
      </div>

      <div className={styles.responsiveGrid}>
        <div>
          <label className={styles.label}>Address line 1</label>
          <input className={styles.input} defaultValue="18, Riverside Business Park" />
        </div>

        <div>
          <label className={styles.label}>Address line 2</label>
          <input className={styles.input} defaultValue="Baner - Mahalunge Road" />
        </div>

        <div>
          <label className={styles.label}>City</label>
          <input className={styles.input} defaultValue="Pune" />
        </div>

        <div>
          <label className={styles.label}>State</label>
          <input className={styles.input} defaultValue="Maharashtra" />
        </div>

        <div>
          <label className={styles.label}>PIN code</label>
          <input className={styles.input} defaultValue="411045" />
        </div>

        <div>
          <label className={styles.label}>Country</label>
          <select className={styles.select} defaultValue="India">
            <option>India</option>
            <option>UAE</option>
            <option>Singapore</option>
            <option>Other…</option>
          </select>
        </div>
      </div>

      {/* CONTACT */}
      <div className={styles.responsiveGrid} style={{ marginTop: 10 }}>
        <div>
          <label className={styles.label}>Front desk phone</label>
          <input className={styles.input} defaultValue="+91-20-4000-1234" />
        </div>

        <div>
          <label className={styles.label}>Reservations email</label>
          <input className={styles.input} defaultValue="reservations@grandmeridian.com" />
        </div>

        <div>
          <label className={styles.label}>Primary contact (revenue)</label>
          <input className={styles.input} defaultValue="revenue.manager@grandmeridian.com" />
        </div>

        <div>
          <label className={styles.label}>Website</label>
          <input className={styles.input} defaultValue="https://www.grandmeridian.com" />
        </div>
      </div>

      {/* OPERATIONS */}
      <div className={styles.label} style={{ marginTop: 14 }}>
        Operational details
      </div>

      <div className={styles.responsiveGrid}>
        <div>
          <label className={styles.label}>Check-in time</label>
          <input className={styles.input} defaultValue="14:00 hrs" />
        </div>

        <div>
          <label className={styles.label}>Check-out time</label>
          <input className={styles.input} defaultValue="12:00 hrs" />
        </div>

        <div>
          <label className={styles.label}>Default currency</label>
          <select className={styles.select} defaultValue="INR">
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
            <option>AED</option>
          </select>
        </div>

        <div>
          <label className={styles.label}>Timezone</label>
          <select className={styles.select} defaultValue="Asia/Kolkata">
            <option>Asia/Kolkata (IST)</option>
            <option>Asia/Dubai</option>
            <option>Asia/Singapore</option>
          </select>
        </div>
      </div>

      {/* SAVE BUTTON */}
      <div className={styles.actionsRow}>
        <button className={`${styles.btn} ${styles.btnPrimary}`} type="submit">
          Save hotel profile
        </button>
      </div>
    </form>
  );
}
