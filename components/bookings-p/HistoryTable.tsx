import styles from './bookingsp.module.css';

export type Booking = {
  id: string;
  traveller: string;
  hotel: string;
  city: string;
  stay: string;
  nights: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  spend: number;
};

export const DUMMY_BOOKINGS: Booking[] = [
  {
    id: 'BK-0001',
    traveller: 'Advik Singh',
    hotel: 'Grand City Business Hotel',
    city: 'Pune',
    stay: '05 Dec 2025 → 08 Dec 2025',
    nights: 3,
    status: 'Confirmed',
    spend: 12600
  },
  {
    id: 'BK-0002',
    traveller: 'Neha Sharma',
    hotel: 'Airport View Corporate Suites',
    city: 'Mumbai',
    stay: '12 Dec 2025 → 14 Dec 2025',
    nights: 2,
    status: 'Pending',
    spend: 12200
  },
  {
    id: 'BK-0003',
    traveller: 'Mumbai Audit Squad',
    hotel: 'Downtown Central Hotel',
    city: 'Mumbai',
    stay: '10 Oct 2025 → 13 Oct 2025',
    nights: 3,
    status: 'Confirmed',
    spend: 13500
  }
];


export default function HistoryTable() {
  return (
    <section className={`${styles.card} ${styles.historyCard}`}>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.cardTitle}>Bookings &amp; history</div>
          <div className={styles.cardSubtitle}>
            Click any row for quick details.
          </div>
        </div>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Traveller / Group</th>
              <th>Hotel</th>
              <th>City</th>
              <th>Stay</th>
              <th>Nights</th>
              <th>Status</th>
              <th>Est. spend</th>
            </tr>
          </thead>

          <tbody>
            {DUMMY_BOOKINGS.map((b) => (
              <tr key={b.id} className={styles.tableRow}>
                <td>{b.id}</td>
                <td>{b.traveller}</td>
                <td>{b.hotel}</td>
                <td>{b.city}</td>
                <td>{b.stay}</td>
                <td>{b.nights}</td>
                <td>
                  <span
                    className={`${styles.statusPill} ${
                      b.status === 'Confirmed'
                        ? styles.confirmed
                        : styles.pending
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
                <td className={styles.amount}>
                  ₹{b.spend.toLocaleString('en-IN')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
