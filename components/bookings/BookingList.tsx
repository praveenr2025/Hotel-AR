import React from "react";
import styles from "./Bookings.module.css";

interface BookingRow {
  id: string;
  guest: string;
  company: string;
  channel: string;
  roomType: string;
  nights: number;
  checkin: string;
  checkout: string;
  value: string;
  invoice?: string;
  status: string;
}

interface BookingListProps {
  setActiveTab: (tab: "list" | "create" | "summary") => void;
  setSelectedBooking: (booking: BookingRow | null) => void;
}

export default function BookingList({
  setActiveTab,
  setSelectedBooking
}: BookingListProps) {
  const rows: BookingRow[] = [
    {
      id: "GMH-2489",
      guest: "Aditya Mehra",
      company: "ClearSkies Corp",
      channel: "Corporate",
      roomType: "Premier King",
      nights: 3,
      checkin: "29 Nov",
      checkout: "02 Dec",
      value: "19,050",
      invoice: "INV-8842",
      status: "Confirmed"
    },
    {
      id: "GMH-2497",
      guest: "Sara D'Souza",
      company: "TripNest",
      channel: "OTA",
      roomType: "Deluxe Twin",
      nights: 2,
      checkin: "28 Nov",
      checkout: "30 Nov",
      value: "11,200",
      invoice: "INV-8843",
      status: "In-house"
    }
  ];

  return (
    <>
      <div className={styles.filtersBar}>
        <input className={styles.input} placeholder="Guest / booking # / company" />
        <select className={styles.select}>
          <option>All channels</option>
          <option>Direct</option>
          <option>OTA</option>
          <option>Corporate</option>
          <option>Agent</option>
        </select>
        <select className={styles.select}>
          <option>All statuses</option>
          <option>Confirmed</option>
          <option>In-house</option>
        </select>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Booking #</th>
              <th>Guest</th>
              <th>Company</th>
              <th>Channel</th>
              <th>Room type</th>
              <th>Nights</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Value (₹)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.guest}</td>
                <td>{row.company}</td>
                <td>{row.channel}</td>
                <td>{row.roomType}</td>
                <td>{row.nights}</td>
                <td>{row.checkin}</td>
                <td>{row.checkout}</td>
                <td>{row.value}</td>

                <td>
                  <span
                    className={
                      row.status === "Confirmed"
                        ? styles.badgeSuccess
                        : styles.badgeInfo
                    }
                  >
                    {row.status}
                  </span>
                </td>

                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      setSelectedBooking(row);
                      setActiveTab("summary");
                    }}
                  >
                    View
                  </button>

                  <button
                    className="btn"
                    onClick={() => {
                      setSelectedBooking(row);
                      setActiveTab("create");
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
