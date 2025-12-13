"use client";

import DataTable from "@/components/ui/DataTable";
import Button from "@/components/ui/Button";
import styles from "./Invites.module.css";

export default function Templates() {
  const templateData = [
    {
      name: "Corporate – Standard",
      type: "Corporate",
      role: "Corporate Booker",
      modules: "Bookings, Invoices, Payments",
      validity: "14 days",
    },
    {
      name: "Agent – Standard",
      type: "Agent",
      role: "Travel Agent Owner",
      modules: "Bookings, Contracts, Invoices",
      validity: "10 days",
    },
  ];

  return (
    <div className={styles.templateGrid}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Invite templates</div>
            <div className={styles.cardSubtitle}>
              Select and manage templates used by sales & revenue teams.
            </div>
          </div>
        </div>

        <DataTable
          headers={["Template name", "Type", "Default role", "Modules", "Validity"]}
          rowKeys={["name", "type", "role", "modules", "validity"]}
          data={templateData}
        />
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Global defaults</div>
            <div className={styles.cardSubtitle}>Used if a template is not picked.</div>
          </div>
        </div>

        <div className={styles.defaults}>
          <label><input type="checkbox" defaultChecked /> Auto-expire invites after <strong>14 days</strong></label>
          <label><input type="checkbox" defaultChecked /> Send reminder email <strong>3 days</strong> before expiry</label>
          <label><input type="checkbox" defaultChecked /> Allow same email to receive multiple invites</label>
          <label><input type="checkbox" /> Restrict invites to approved domains</label>
        </div>

        <label className={styles.label}>Default email footer</label>
        <textarea className={styles.textarea}>Regards,
          Sales & Revenue Team
          Grand Meridian Hotel & Convention Centre</textarea>

        <div className={styles.actions}>
          <Button variant="primary">Save defaults</Button>
          <Button>Revert</Button>
          <span className={styles.statusNote}>Demo only – not saved to backend.</span>
        </div>
      </div>
    </div>
  );
}
