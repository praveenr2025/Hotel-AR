import styles from './bookingsp.module.css';

export default function BookingForm() {
  return (
    <section className="card">
      <div className="card-header">
        <div>
          <div className="card-title">Booking details</div>
          <div className="card-subtitle">
            Traveller, cost centre and approval information.
          </div>
        </div>
      </div>
      <div className={styles.bookingSummary}>
        <div className={styles.bookingSummaryRow}>
          <span className="card-subtitle">Hotel</span>
          <span>-</span>
        </div>

        <div className={styles.bookingSummaryRow}>
          <span className="card-subtitle">Room type</span>
          <span>-</span>
        </div>
      </div>
      <div className={styles.formActions}>
        <button className="btn">Save as draft</button>
        <button className="btn btn-primary">Confirm &amp; book</button>
      </div>
    </section>
  );
}
