"use client";

import styles from "./Invoices.module.css";

export interface InvoiceRow {
  id: string;
  customer: string;
  bookings: string;
  invoiceDate: string;
  amount: string;
  paid: string;
  due: string;
  status: string;
  conversations: number;
}

interface InvoiceListProps {
  onView: (inv: InvoiceRow) => void;
  onEdit: (inv: InvoiceRow) => void;
}

export default function InvoiceList({ onView, onEdit }: InvoiceListProps) {
  const rows: InvoiceRow[] = [
    {
      id: "INV-8843",
      customer: "Orbit Travels",
      bookings: "GMH-2497, GMH-2504",
      invoiceDate: "27 Nov 2025",
      amount: "245600",
      paid: "100000",
      due: "145600",
      status: "Partially paid",
      conversations: 3
    },
    {
      id: "INV-8844",
      customer: "BlueSky Holidays",
      bookings: "GMH-2481, GMH-2485",
      invoiceDate: "22 Nov 2025",
      amount: "78200",
      paid: "0",
      due: "78200",
      status: "Overdue 14d",
      conversations: 5
    }
  ];

  return (
    <div>
      {/* Filters */}
      <div className={styles.filtersBar}>
        <input className={styles.input} placeholder="Invoice / booking / customer" />
        <select className={styles.select}>
          <option>All payment status</option>
          <option>Paid</option>
          <option>Partially paid</option>
          <option>Unpaid</option>
          <option>Overdue</option>
        </select>
        <select className={styles.select}>
          <option>All types</option>
          <option>Booking</option>
          <option>Group / consolidated</option>
          <option>No-show</option>
          <option>Cancellation</option>
        </select>
        <select className={styles.select}>
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>This month</option>
          <option>All time</option>
        </select>
      </div>

      {/* Table */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Customer</th>
              <th>Bookings</th>
              <th>Invoice date</th>
              <th>Amount</th>
              <th>Paid</th>
              <th>Due</th>
              <th>Status</th>
              <th>Conversation</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.customer}</td>
                <td className={styles.linkText}>{r.bookings}</td>
                <td>{r.invoiceDate}</td>
                <td>₹ {r.amount}</td>
                <td>₹ {r.paid}</td>
                <td>₹ {r.due}</td>

                <td>
                  <span
                    className={
                      r.status.toLowerCase().includes("overdue")
                        ? styles.badgeDanger
                        : r.status.includes("Partially")
                        ? styles.badgeWarning
                        : styles.badgeSuccess
                    }
                  >
                    {r.status}
                  </span>
                </td>

                <td>
                  <a className={styles.linkText}>View ({r.conversations})</a>
                </td>

                <td>
                  <button className="btn" onClick={() => onView(r)}>
                    View
                  </button>
                  <button className="btn" onClick={() => onEdit(r)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
