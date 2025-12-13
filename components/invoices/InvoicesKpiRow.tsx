import styles from "./Invoices.module.css";

export default function InvoicesKpiRow() {
  const cards = [
    {
      title: "Total outstanding",
      subtitle: "Across all open invoices",
      pill: "₹ 4,99,700",
      details: (
        <>
          <strong>Corporate & agents:</strong> ₹ 4,32,100<br />
          <strong>Others:</strong> ₹ 67,600
        </>
      )
    },
    {
      title: "Overdue",
      subtitle: "Past due date",
      pill: "₹ 1,23,500",
      details: (
        <>
          <strong>{"< 15 days:"}</strong> ₹ 78,200 ·{" "}
          <strong>{"> 15 days:"}</strong> ₹ 45,300
        </>
      )
    },
    {
      title: "Partially paid",
      subtitle: "Invoices with open balance",
      pill: "3 invoices",
      details: (
        <>
          <strong>Due this week:</strong> ₹ 1,74,900
        </>
      )
    },
    {
      title: "Billed this month",
      subtitle: "Invoice value raised in Nov 2025",
      pill: "₹ 8,75,400",
      details: (
        <>
          <strong>Realised:</strong> ₹ 4,76,800 ·{" "}
          <strong>Pending:</strong> ₹ 3,98,600
        </>
      )
    }
  ];

  return (
    <div className={styles.kpiGrid}>
      {cards.map((c, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>{c.title}</div>
              <div className={styles.cardSubtitle}>{c.subtitle}</div>
            </div>
            <span className={styles.metricPill}>{c.pill}</span>
          </div>

          <div className={styles.cardDetail}>{c.details}</div>
        </div>
      ))}
    </div>
  );
}
