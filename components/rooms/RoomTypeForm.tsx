"use client";

import styles from "@/components/rooms/Rooms.module.css";

export default function RoomTypeForm() {
  return (
    <div className={styles.formPage}>
      
      {/* Page intro text */}
      <div className={styles.pageIntro}>
        Use this form to create a new room type or edit an existing one from the list.
      </div>

      {/* ---------------- BASIC DETAILS ---------------- */}
      <div className={styles.sectionTitle}>Basic details</div>

      <div className={styles["grid-4"]}>
        <div>
          <label>Room code</label>
          <input className={styles.input} placeholder="DLXK / PRMK etc." />
        </div>

        <div>
          <label>Room name</label>
          <input className={styles.input} placeholder="Deluxe King" />
        </div>

        <div>
          <label>Status</label>
          <select className={styles.select}>
            <option>On sale</option>
            <option>Limited</option>
            <option>Closed</option>
          </select>
        </div>

        <div>
          <label>Display order</label>
          <input className={styles.input} placeholder="1,2,3..." />
        </div>
      </div>


      {/* ---------------- OCCUPANCY ---------------- */}
      <div className={styles.sectionTitle}>Occupancy & size</div>

      <div className={styles["grid-4"]}>
        <div>
          <label>Base occupancy</label>
          <input className={styles.input} placeholder="2" />
        </div>

        <div>
          <label>Max occupancy</label>
          <input className={styles.input} placeholder="3" />
        </div>

        <div>
          <label>Total inventory</label>
          <input className={styles.input} placeholder="60" />
        </div>

        <div>
          <label>Floor range</label>
          <div className={styles.inlineInputs}>
            <input className={styles.input} placeholder="From" />
            <input className={styles.input} placeholder="To" />
          </div>
        </div>
      </div>

      <div className={styles["grid-4"]}>
        <div>
          <label>Room size (sqm)</label>
          <input className={styles.input} placeholder="28" />
        </div>
      </div>


      {/* ---------------- BEDDING ---------------- */}
      <div className={styles.sectionTitle}>Bedding, view & smoking</div>

      <div className={styles["grid-4"]}>
        <div>
          <label>Bed type</label>
          <select className={styles.select}>
            <option>King</option>
            <option>Twin</option>
            <option>Queen</option>
          </select>
        </div>

        <div>
          <label>View</label>
          <input className={styles.input} placeholder="City / Pool / Garden" />
        </div>

        <div>
          <label>Smoking</label>
          <select className={styles.select}>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
      </div>


      {/* ---------------- PRICING ---------------- */}
      <div className={styles.sectionTitle}>Default pricing</div>

      <div className={styles["grid-4"]}>
        <div>
          <label>Default weekday BAR (₹)</label>
          <input className={styles.input} placeholder="5500" />
        </div>

        <div>
          <label>Default weekend BAR (₹)</label>
          <input className={styles.input} placeholder="6200" />
        </div>

        <div>
          <label>Extra adult (₹)</label>
          <input className={styles.input} placeholder="1500" />
        </div>

        <div>
          <label>Extra child (₹)</label>
          <input className={styles.input} placeholder="800" />
        </div>
      </div>


      {/* ---------------- TAX GROUP ---------------- */}
      <div className={styles.sectionTitle}>Tax group & meal plan</div>

      <div className={styles["grid-4"]}>
        <div>
          <label>Tax group</label>
          <select className={styles.select}>
            <option>Standard 18%</option>
          </select>
        </div>

        <div>
          <label>Default meal plan</label>
          <select className={styles.select}>
            <option>CP - Room + Breakfast</option>
          </select>
        </div>
      </div>


      {/* ---------------- DESCRIPTION ---------------- */}
      <div className={styles.sectionTitle}>Description (for confirmations & contracts)</div>

      <textarea
        className={styles.textarea}
        placeholder="Short description that will appear on confirmations and contracts."
      ></textarea>


      {/* ---------------- ACTIONS ---------------- */}
      <div className={styles.footerActions}>
        <button className="btn btn-primary">Save room type</button>
        <button className="btn">Reset</button>

        <span className={styles.resetNote}>
          Changes will apply to new bookings; existing bookings remain unchanged.
        </span>
      </div>
    </div>
  );
}
