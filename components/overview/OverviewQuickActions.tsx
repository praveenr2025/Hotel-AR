import Button from '@/components/ui/Button';
import styles from './overview.module.css';

export default function OverviewQuickActions() {
  return (
    <section className={styles.card}>
      <div className={styles.sectionTitle}>Quick actions</div>

      <div className={styles.quickActions}>
        <Button className={styles.fullWidth}>Create booking</Button>
        <Button className={styles.fullWidth} variant="secondary">
          Approve invoice
        </Button>
        <Button className={styles.fullWidth} variant="secondary">
          Create payment run
        </Button>
      </div>
    </section>
  );
}
