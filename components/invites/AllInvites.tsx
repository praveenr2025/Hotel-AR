"use client";

import DataTable from "@/components/ui/DataTable";
import Badge from "@/components/ui/Badge";
import styles from "./Invites.module.css";

export default function AllInvites() {
    const data = [
    {
        inviteId: "INV-2025-00123",
        recipient: "Amit Desai",
        type: "Corporate",
        company: "Copper Corporate Travels",
        modules: "Bookings, Invoices, Payments",
        senton: "26 Nov 2025",
        status: <Badge variant="warning">Pending</Badge>,
        registered: "-",
    },
    {
        inviteId: "INV-2025-00098",
        recipient: "Rahul Shah",
        type: "Corporate",
        company: "Nova Infotech Ltd",
        modules: "Bookings, Invoices",
        senton: "22 Nov 2025",
        status: <Badge variant="success">Accepted</Badge>,
        registered: "Corporate Booker",
    },
    {
        inviteId: "INV-2025-00087",
        recipient: "Anita Thomas",
        type: "Agent",
        company: "WanderQuest Holidays",
        modules: "Bookings",
        senton: "10 Nov 2025",
        status: <Badge variant="danger">Expired</Badge>,  // FIXED
        registered: "-",
    },
    ];


  return (
    <div>
      <div className={styles.filters}>
        <input className="input" placeholder="Search by name / email / company / invite id" />
        <select className="select">
          <option>All statuses</option>
          <option>Pending</option>
          <option>Accepted</option>
          <option>Expired</option>
          <option>Cancelled</option>
        </select>
        <select className="select">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 90 days</option>
          <option>All time</option>
        </select>
      </div>

      <DataTable
        headers={[
          "Invite ID",
          "Recipient",
          "Type",
          "Company",
          "Modules",
          "Sent on",
          "Status",
          "Registered as",
        ]}
        rowKeys={[
          "inviteId",
          "recipient",
          "type",
          "company",
          "modules",
          "senton",
          "status",
          "registered",
        ]}
        data={data}
      />
    </div>
  );
}
