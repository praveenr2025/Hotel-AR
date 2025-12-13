import OverviewKpis from './OverviewKpis';
import OverviewTrend from './OverviewTrend';
import OverviewFinance from './OverviewFinance';
import OverviewComms from './OverviewComms';
import OverviewHotels from './OverviewHotels';
import OverviewQuickActions from './OverviewQuickActions';
import styles from './overview.module.css';

export default function TabOverview() {
  return (
    <>
      <OverviewKpis />

      <div className={styles.grid2}>
        <OverviewTrend />
        <OverviewFinance />
      </div>

      <div className={styles.grid3}>
        <OverviewComms />
        <OverviewHotels />
        <OverviewQuickActions />
      </div>
    </>
  );
}
