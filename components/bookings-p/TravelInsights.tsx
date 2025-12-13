import styles from './bookingsp.module.css';

type Booking = {
  id: string;
  traveller: string;
  hotel: string;
  city: string;
  stay: string;
  nights: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  spend: number;
};

type Props = {
  bookings: Booking[];
};

export default function TravelInsights({ bookings }: Props) {
  const totalTrips = bookings.length;

  const upcomingTrips = bookings.filter(
    (b) => b.status === 'Pending' || b.status === 'Confirmed'
  ).length;

  const pastSpend = bookings
    .filter((b) => b.status === 'Confirmed')
    .reduce((sum, b) => sum + b.spend, 0);

  const recent = bookings.slice(0, 3);

  return (
    <section className={styles.card}>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.cardTitle}>Travel summary &amp; insights</div>
          <div className={styles.cardSubtitle}>
            High-level view across all trips.
          </div>
        </div>
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Total trips (all-time)</div>
          <div className={styles.metricValue}>{totalTrips}</div>
          <div className={styles.metricHint}>Includes past &amp; upcoming</div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Upcoming / active trips</div>
          <div className={styles.metricValue}>{upcomingTrips}</div>
          <div className={styles.metricHint}>
            Checkout date from today onwards
          </div>
        </div>

        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>Past trips spend</div>
          <div className={styles.metricValue}>
            ₹{pastSpend.toLocaleString('en-IN')}
          </div>
          <div className={styles.metricHint}>Completed trips only</div>
        </div>
      </div>

      <div className={styles.recentSection}>
        <div className={styles.sectionLabel}>Recent activity</div>
        <ul className={styles.activityList}>
          {recent.map((b) => (
            <li key={b.id}>
              {b.id} · {b.hotel} · {b.stay} · ₹
              {b.spend.toLocaleString('en-IN')}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
