import styles from './bookingsp.module.css';

export default function SearchCard() {
  return (
    <section className={styles.searchCard}>
      <div className={styles.searchHeader}>
        <div>
          <div className={styles.searchTitle}>Search hotels</div>
          <div className={styles.searchSubtitle}>
            Filter by city, destination, PIN, budget and policy.
          </div>
        </div>
        <button className={styles.clearBtn}>Clear</button>
      </div>
      <div className={styles.formGrid}>
        <input className={styles.input} placeholder="City (e.g. Pune, Mumbai)" />
        <input className={styles.input} placeholder="Destination / landmark" />
        <input className={styles.input} placeholder="PIN / ZIP" />
        <input
          className={styles.input}
          type="number"
          placeholder="Max nightly budget (₹)"
        />
        <select className={styles.select}>
          <option>Any rating</option>
          <option>4.0+</option>
          <option>4.5+</option>
        </select>
        <select className={styles.select}>
          <option>Business</option>
          <option>Training</option>
        </select>
      </div>
      <div className={styles.searchSubtitle}>Stay details</div>
      <div className={styles.stayRow}>
        <input className={styles.input} type="date" />
        <input className={styles.input} type="date" />
        <select className={styles.select}>
          <option>1 guest</option>
          <option>2 guests</option>
        </select>
        <select className={styles.select}>
          <option>1 room</option>
          <option>2 rooms</option>
        </select>
      </div>
      <div className={styles.searchSubtitle} style={{ marginTop: 10 }}>
        Corporate filters
      </div>
      <div className={styles.filtersRow}>
        <span className={styles.filterPill}>Within policy</span>
        <span className={styles.filterPill}>Near office &lt; 5 km</span>
        <span className={styles.filterPill}>Free breakfast</span>
        <span className={styles.filterPill}>Free Wi-Fi</span>
        <span className={styles.filterPill}>Airport pickup</span>
      </div>

      <div className={styles.searchFooter}>
        <div className={styles.searchNote}>
          Showing all mapped corporate hotels.
        </div>
        <button className={styles.searchBtn}>
          🔍 Search &amp; refresh map
        </button>
      </div>
    </section>
  );
}
