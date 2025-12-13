"use client";

import styles from "./profile.module.css";

export default function ProfileUserSettingsForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 10 }}>

      {/* PROFILE */}
      <div className={styles.label}>Your profile</div>
      <div className={styles.responsiveGrid}>
        <div>
          <label className={styles.label}>Full name</label>
          <input className={styles.input} defaultValue="Aditya Sharma" />
        </div>

        <div>
          <label className={styles.label}>Email (login)</label>
          <input className={styles.input} defaultValue="revenue.manager@grandmeridian.com" />
        </div>

        <div>
          <label className={styles.label}>Role</label>
          <select className={styles.select} defaultValue="Revenue manager">
            <option>Front office</option>
            <option>Revenue manager</option>
            <option>Finance / AR</option>
            <option>General manager</option>
            <option>System admin</option>
          </select>
        </div>

        <div>
          <label className={styles.label}>Mobile</label>
          <input className={styles.input} defaultValue="+91-98765-43210" />
        </div>
      </div>

      {/* PREFERENCES */}
      <div className={styles.label} style={{ marginTop: 14 }}>
        Display & language
      </div>

      <div className={styles.responsiveGrid}>
        <div>
          <label className={styles.label}>Language</label>
          <select className={styles.select} defaultValue="English (India)">
            <option>English (India)</option>
            <option>English (US)</option>
            <option>Hindi</option>
          </select>
        </div>

        <div>
          <label className={styles.label}>Date format</label>
          <select className={styles.select} defaultValue="DD MMM YYYY (e.g. 29 Nov 2025)">
            <option>DD MMM YYYY (e.g. 29 Nov 2025)</option>
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
          </select>
        </div>

        <div>
          <label className={styles.label}>Time format</label>
          <select className={styles.select} defaultValue="24-hour">
            <option>24-hour</option>
            <option>12-hour</option>
          </select>
        </div>

        <div>
          <label className={styles.label}>Default landing page</label>
          <select className={styles.select} defaultValue="Bookings">
            <option>Dashboard</option>
            <option>Bookings</option>
            <option>Invoices</option>
            <option>Payments</option>
          </select>
        </div>
      </div>

      {/* SECURITY */}
      <div className={styles.grid} style={{ marginTop: 14 }}>
        {/* PASSWORD */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Password & login</div>
              <div className={styles.cardSubtitle}>Change password & alerts.</div>
            </div>
          </div>

          <label className={styles.label}>Current password</label>
          <input
            type="password"
            className={styles.input}
            defaultValue="••••••••"
          />

          <label className={styles.label} style={{ marginTop: 10 }}>New password</label>
          <input type="password" className={styles.input} />

          <label className={styles.label} style={{ marginTop: 10 }}>Confirm password</label>
          <input type="password" className={styles.input} />

          <div style={{ marginTop: 10 }}>
            <label><input type="checkbox" defaultChecked /> Email me on new device login</label><br />
            <label><input type="checkbox" /> Email me on failed login attempts</label>
          </div>
        </div>

        {/* TWO FACTOR */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Two-factor authentication</div>
              <div className={styles.cardSubtitle}>Extra security layer.</div>
            </div>
          </div>

          <label><input type="checkbox" defaultChecked /> Require OTP via email</label><br />
          <label><input type="checkbox" /> Enable authenticator app</label><br />
          <label><input type="checkbox" /> OTP only for new devices</label>

          <p style={{ fontSize: 12, color: "#6b7280", marginTop: 8 }}>
            In production, you’d scan a QR code to link the authenticator app.
          </p>
        </div>
      </div>

      {/* ACTIVE SESSIONS */}
      <div className={styles.card} style={{ marginTop: 14 }}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Active sessions</div>
            <div className={styles.cardSubtitle}>Where you are currently logged in.</div>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Device</th>
                <th>Location</th>
                <th>Last active</th>
                <th>Browser</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>MacBook Air</td>
                <td>Pune, India</td>
                <td>Today 11:46</td>
                <td>Chrome</td>
                <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>Current</span></td>
              </tr>

              <tr>
                <td>Windows Desktop</td>
                <td>Pune, India</td>
                <td>Today 09:10</td>
                <td>Edge</td>
                <td><span className={`${styles.badge} ${styles.badgeWarning}`}>Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className={styles.btn} style={{ marginTop: 10 }}>
          Sign out from other devices
        </button>
      </div>

      {/* SAVE */}
      <div className={styles.actionsRow}>
        <button className={`${styles.btn} ${styles.btnPrimary}`}>Save user settings</button>
      </div>
    </form>
  );
}
