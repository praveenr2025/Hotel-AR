import styles from './overview.module.css';

const FINANCE_BUCKETS = [
  { bucket: 'Pending approval', count: 6, amount: '₹ 1,86,200', age: 3 },
  { bucket: 'In clarification', count: 3, amount: '₹ 74,250', age: 5 },
  { bucket: 'Processing for payment', count: 4, amount: '₹ 1,34,520', age: 2 },
  { bucket: 'Paid this month', count: 11, amount: '₹ 5,21,800', age: 9 }
];

export default function TabFinance() {
  return (
    <section className={styles.card}>
      <div className={styles.sectionTitle}>Invoice status buckets</div>
      <div className={styles.sectionSubtitle}>
        Ageing view by status and count.
      </div>

      <div className={styles.tableWrapSmall}>
        <table className="table">
          <thead>
            <tr>
              <th>Bucket</th>
              <th>Count</th>
              <th>Amount</th>
              <th>Avg age (days)</th>
            </tr>
          </thead>
          <tbody>
            {FINANCE_BUCKETS.map(b => (
              <tr key={b.bucket}>
                <td>{b.bucket}</td>
                <td>{b.count}</td>
                <td>{b.amount}</td>
                <td>{b.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
