"use client";

import React from "react";
import styles from "@/components/rooms/Rooms.module.css";

export default function RoomTypesList() {
  return (
    <div className={styles.pageSection}>

      {/* FILTER ROW */}
      <div className={styles.filterRow}>
        <input className={styles.input} placeholder="Search by name / code" />
        <select className={styles.select}>
          <option>All statuses</option>
          <option>On sale</option>
          <option>Limited</option>
          <option>Closed</option>
        </select>

        <select className={styles.select}>
          <option>All occupancies</option>
          <option>1–2 pax</option>
          <option>3–4 pax</option>
          <option>5+ pax</option>
        </select>
      </div>

      {/* TABLE */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Base Occ</th>
              <th>Max Occ</th>
              <th>Total Inventory</th>
              <th>Default BAR</th>
              <th>Bed / View</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>DLXK</td>
              <td>Deluxe King</td>
              <td>2</td>
              <td>3</td>
              <td>60</td>
              <td>₹ 5,500</td>
              <td>King / City</td>
              <td><span className={styles.badgeSuccess}>On sale</span></td>
              <td><button className="btn btn-sm">Edit</button></td>
            </tr>

            <tr>
              <td>DLXT</td>
              <td>Deluxe Twin</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
              <td>₹ 5,300</td>
              <td>Twin / City</td>
              <td><span className={styles.badgeSuccess}>On sale</span></td>
              <td><button className="btn btn-sm">Edit</button></td>
            </tr>

            <tr>
              <td>PRMK</td>
              <td>Premier King</td>
              <td>2</td>
              <td>3</td>
              <td>30</td>
              <td>₹ 6,800</td>
              <td>King / Pool</td>
              <td><span className={styles.badgeSuccess}>On sale</span></td>
              <td><button className="btn btn-sm">Edit</button></td>
            </tr>

            <tr>
              <td>CLBS</td>
              <td>Club Suite</td>
              <td>2</td>
              <td>4</td>
              <td>10</td>
              <td>₹ 9,500</td>
              <td>King / Skyline</td>
              <td><span className={styles.badgeWarning}>Limited</span></td>
              <td><button className="btn btn-sm">Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* PROPERTY DETAILS + AMENITIES */}
      <div className={styles.twoCards}>
        
        <div className={styles.card}>
          <h3>Property Details</h3>
          <p>Address, check-in rules and tax profile.</p>

          <div className={styles.cardBody}>
            <p><strong>Property Name:</strong> Grand Meridian Hotel & Convention Centre</p>
            <p><strong>Address:</strong> Plot 18, Tech Park Road, Pune 411045</p>
            <p><strong>Check-in:</strong> 14:00 hrs · <strong>Check-out:</strong> 11:00 hrs</p>
            <p><strong>Time zone:</strong> IST (GMT+5:30)</p>
            <p><strong>GSTIN:</strong> 27AAACG1234Q1ZL</p>
            <p><strong>Invoice Series Prefix:</strong> GMH / 2025-26</p>
            <p><strong>Default Currency:</strong> INR</p>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Amenities & Facilities</h3>
          <p>Shown on contracts & guest-facing portals.</p>

          <div className={styles.cardBody}>
            <ul>
              <li>All-day dining restaurant & speciality restaurant</li>
              <li>Rooftop bar, swimming pool & spa</li>
              <li>Complimentary high-speed Wi-Fi</li>
              <li>Airport transfers (chargeable)</li>
              <li>3 banquet halls & 4 meeting rooms</li>
              <li>24×7 in-room dining & concierge</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
