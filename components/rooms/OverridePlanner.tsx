"use client";
import styles from "./Rooms.module.css";

export default function OverridePlanner() {
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <div>
          <div className={styles["card-title"]}>Plan event / override</div>
          <div className={styles["card-subtitle"]}>
            Configure special date overrides.
          </div>
        </div>
      </div>

      <form className={styles["grid-4"]}>
        <div>
          <label>Date or range</label>
          <input className={styles.input} />
        </div>

        <div>
          <label>Occasion</label>
          <input className={styles.input} />
        </div>

        <div>
          <label>Base season</label>
          <select className={styles.select}>
            <option>Festive High</option>
          </select>
        </div>

        <div>
          <label>Override BAR</label>
          <input className={styles.input} />
        </div>

        <div>
          <label>Min LOS</label>
          <input className={styles.input} />
        </div>

        {/* Full-width label + textarea */}
        <div style={{ gridColumn: "span 4" }}>
          <label>Restrictions</label>
          <textarea className={styles.textarea}></textarea>
        </div>

        <div className={styles.actions}>
          <button className="btn btn-primary" type="button">Save override</button>
          <button className="btn" type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}
