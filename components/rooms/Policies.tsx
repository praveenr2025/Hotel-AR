"use client";
import styles from "./Rooms.module.css";

export default function Policies() {
  return (
    <div className={styles.pageSection}>
      
      {/* ---- Standard Policies Card ---- */}
      <div className={styles.card}>
        <div className={styles["card-header"]}>
          <div className={styles["card-title"]}>Standard policies</div>
          <div className={styles["card-subtitle"]}>
            Applied as default; override in contracts.
          </div>
        </div>

        <ul className={styles.policyList}>
          <li>Check-in after 14:00 hrs</li>
          <li>Check-out by 11:00 hrs</li>
          <li>Child below 6 stays free</li>
          <li>Standard cancellation: 24 hrs</li>
        </ul>
      </div>

      {/* ---- Core Amenities Card ---- */}
      <div className={styles.card}>
        <div className={styles["card-header"]}>
          <div className={styles["card-title"]}>Core amenities</div>
          <div className={styles["card-subtitle"]}>
            Shown on guest-facing portals
          </div>
        </div>

        <div className={styles.amenitiesGrid}>
          <label><input type="checkbox" defaultChecked /> Free Wi-Fi</label>
          <label><input type="checkbox" defaultChecked /> LED TV</label>
          <label><input type="checkbox" defaultChecked /> Tea/Coffee maker</label>
          <label><input type="checkbox" defaultChecked /> Safe</label>
          <label><input type="checkbox" /> Bathtub</label>
          <label><input type="checkbox" /> Balcony</label>
        </div>
      </div>

    </div>
  );
}
