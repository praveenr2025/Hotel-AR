"use client";

import styles from "./Conversations.module.css";

interface ListProps {
  activeId: string;
  onSelect: (invoiceId: string) => void;
}

export default function ConversationsList({ activeId, onSelect }: ListProps) {
  const rows = [
    { id: "INV-8843", partner: "Orbit Travels", messages: 3, last: "Today 10:12", status: "Awaiting customer" },
    { id: "INV-8844", partner: "BlueSky Holidays", messages: 5, last: "Yesterday 17:48", status: "Awaiting hotel" },
    { id: "INV-8845", partner: "Acme Industries", messages: 1, last: "21 Nov 11:23", status: "Resolved" },
    { id: "INV-8846", partner: "TripNest", messages: 2, last: "Today 09:32", status: "Awaiting hotel" }
  ];

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>Open Conversations</div>
        <div className={styles.cardSubtitle}>Filter by invoice, partner or status.</div>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Partner</th>
              <th>Messages</th>
              <th>Last Activity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {rows.map(row => (
              <tr
                key={row.id}
                onClick={() => onSelect(row.id)}
                className={activeId === row.id ? styles.activeRow : ""}
              >
                <td>{row.id}</td>
                <td>{row.partner}</td>
                <td>{row.messages}</td>
                <td>{row.last}</td>
                <td>
                  <span
                    className={
                      row.status.includes("Awaiting")
                        ? styles.badgeWarning
                        : styles.badgeSuccess
                    }
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
