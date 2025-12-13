import styles from './overview.module.css';

const TREND = [
  { offset: 0, rooms: 38 },
  { offset: 1, rooms: 44 },
  { offset: 2, rooms: 29 },
  { offset: 3, rooms: 52 },
  { offset: 4, rooms: 61 },
  { offset: 5, rooms: 33 },
  { offset: 6, rooms: 27 }
];

export default function OverviewTrend() {
  const max = Math.max(...TREND.map(d => d.rooms));

  return (
    <section className={styles.card}>
      <div className={styles.sectionTitle}>
        Next 7 days – room night trend
      </div>
      <div className={styles.sectionSubtitle}>
        Booked room nights across all hotels. Use this to spot compression / low-occupancy days.
      </div>

      {/* Spark bars */}
      <div className={styles.sparkRow}>
        {TREND.map(d => {
          const height = 12 + (d.rooms / max) * 28;

          return (
            <div
              key={d.offset}
              className={`${styles.sparkBar} ${
                d.offset === 0 ? styles.sparkBarToday : ''
              }`}
              style={{ height }}
              title={`${d.rooms} room nights`}
            />
          );
        })}
      </div>

      {/* Labels */}
      <div className={styles.sparkLegend}>
        <span>Today</span>
        <span>+1</span>
        <span>+2</span>
        <span>+3</span>
        <span>+4</span>
        <span>+5</span>
        <span>+6</span>
      </div>

      {/* Table */}
      <div className={styles.tableWrapSmall} style={{ marginTop: 8 }}>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Room nights</th>
              <th>Key city</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Today</td><td>38</td><td>Pune</td><td>Healthy weekday mix</td></tr>
            <tr><td>+1</td><td>44</td><td>Mumbai</td><td>Corporate movement</td></tr>
            <tr><td>+2</td><td>29</td><td>Pune</td><td>Slight softening</td></tr>
            <tr><td>+3</td><td>52</td><td>Bengaluru</td><td>Weekend event</td></tr>
            <tr><td>+4</td><td>61</td><td>Pune</td><td>High occupancy</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
