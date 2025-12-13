import KpiCard from '@/components/ui/KpiCard';
import Badge from '@/components/ui/Badge';
import styles from './overview.module.css';

export default function OverviewKpis() {
  return (
    <div className={styles.metricsRow}>
      <KpiCard
        title="Arrivals today"
        subtitle="Guests checking in"
        metricValue="18"
        metricDetail={
          <>
            <Badge variant="info">Pune · 11</Badge>{' '}
            <Badge variant="info">Mumbai · 7</Badge>
          </>
        }
      />

      <KpiCard
        title="Departures today"
        subtitle="Guests checking out"
        metricValue="14"
        metricDetail="Early 2 · Late 3"
      />

      <KpiCard
        title="Pending invoices"
        subtitle="Awaiting approval"
        metricValue="₹ 1.86L"
        metricDetail="Overdue ₹ 53,250"
      />

      <KpiCard
        title="Open conversations"
        subtitle="Active queries"
        metricValue="9"
        metricDetail="SLA risk: 2"
      />
    </div>
  );
}
