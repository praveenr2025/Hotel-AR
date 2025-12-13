import styles from "./Bookings.module.css";

interface Booking {
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

interface BookingSummaryProps {
  booking: Booking | null;
}

export default function BookingSummary({ booking }: BookingSummaryProps) {
  if (!booking) {
    return <p style={{ padding: 10, color: "#6b7280" }}>Select a booking</p>;
  }

  return (
    <div className={styles.summaryGrid}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>{booking.id}</div>
            <div className={styles.cardSubtitle}>{booking.guest}</div>
          </div>
          <span className={styles.metricPill}>{booking.status}</span>
        </div>

        <div className={styles.summaryBlock}>
          <strong>Stay:</strong> {booking.checkin} → {booking.checkout}<br />
          <strong>Room type:</strong> {booking.roomType}<br />
          <strong>Channel:</strong> {booking.channel}<br />
          <strong>Company:</strong> {booking.company}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Billing & payment</div>
            <div className={styles.cardSubtitle}>How this booking is billed.</div>
          </div>
        </div>

        <div className={styles.summaryBlock}>
          <strong>Total value:</strong> ₹ {booking.value}<br />
          <strong>Status:</strong> {booking.status}<br />
          <strong>Invoice:</strong> {booking.invoice}
        </div>
      </div>
    </div>
  );
}
