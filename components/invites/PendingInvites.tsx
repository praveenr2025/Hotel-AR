"use client";

import DataTable from "@/components/ui/DataTable";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import styles from "./Invites.module.css";

export default function PendingInvites() {

  const data = [
    {
      recipient: "Amit Desai",
      email: "amit.desai@coppercorporate.com",
      type: "Corporate",
      company: "Copper Corporate Travels",
      modules: "Bookings, Invoices, Payments",
      senton: "26 Nov 2025",
      expires: "03 Dec 2025",
      status: <Badge variant="warning">Pending</Badge>,
      actions: (
        <>
          <Button size="sm">Resend</Button>
          <Button size="sm">Copy link</Button>
          <Button size="sm">Cancel</Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className={styles.filters}>
        <input className="input" placeholder="Search by name / email / company" />
        <select className="select">
          <option>All types</option>
          <option>Customer</option>
          <option>Agent</option>
          <option>Corporate</option>
          <option>OTA</option>
        </select>
        <select className="select">
          <option>All validity</option>
          <option>Expiring in 3 days</option>
          <option>Expiring in 7 days</option>
          <option>Expired</option>
        </select>
      </div>

      <DataTable
        headers={[
          "Recipient",
          "Email",
          "Type",
          "Company",
          "Modules",
          "Sent on",
          "Expires on",
          "Status",
          "Actions",
        ]}
        rowKeys={[
          "recipient",
          "email",
          "type",
          "company",
          "modules",
          "senton",
          "expires",
          "status",
          "actions",
        ]}
        data={data}
      />
    </div>
  );
}
