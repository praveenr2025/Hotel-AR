'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import KpiCard from '@/components/ui/KpiCard';
import DataTable from '@/components/ui/DataTable';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';


export default function DashboardPage() {
  const router = useRouter();

  return (
<div className="app-shell">
  <Sidebar variant="hotel" />
  <main className="main">
    <div className="container">
      <Header
        title="Property Control Center"
        subtitle="Single view of users, rooms, contracts, bookings, invoices & conversations."
        showChip={true}
        actions={[

          {
            label: "New Contract",
            variant: "secondary",
            onClick: () => console.log("navigate new contract")
          },
          {
            label: "Add Corporate / Agent",
            variant: "secondary",
            onClick: () => console.log("navigate add agent")
          },
          {
            label: "Create Booking",
            variant: "primary",
            onClick: () => console.log("navigate create booking")
          },
          {
          label: "Switch To Hotel Partner",
          variant: "primary",
          onClick: () => router.push("/overview")
        }
        ]}
      />


      <section className={styles.kpiGrid}>
        <KpiCard
          title="Occupancy Today"
          subtitle="Across all room types"
          metricValue="87%"
          metricDetail="148 / 170 sellable rooms"
          pillText="+6.2% vs last week"
        />

        <KpiCard
          title="ADR (Today)"
          subtitle="Average Daily Rate"
          metricValue="₹ 7,850"
          metricDetail={<>RevPAR: <strong>₹ 6,830</strong> · On-the-books: <strong>₹ 9.1L</strong></>}
          pillText="+4.1% vs LY"
        />

        <KpiCard
          title="Bookings (Next 7 days)"
          subtitle="Including OTA, corporate & agent"
          metricValue="312"
          metricDetail={
            <div style={{ display: 'flex', gap: 8 }}>
              <Badge variant="info">OTAs 54%</Badge>
              <Badge variant="success">Direct 31%</Badge>
            </div>
          }
        />

        <KpiCard
          title="Unpaid Invoices"
          subtitle="Grouped by customer & agent"
          metricValue="₹ 8.4L"
          metricDetail={<span style={{ color: 'var(--danger)' }}>12 invoices overdue &gt; 30 days</span>}
        />
      </section>

      <section className={styles.kpiGrid}>
        <KpiCard
          title="Users & Access"
          subtitle="Users, roles & channels configured"
          metricValue="46 users"
          metricDetail={
            <span style={{ color: '#6b7280' }}>
              5 admin · 18 front office · 11 finance · 12 external
            </span>
          }
        />

        <KpiCard
          title="Channel Health"
          subtitle="Rate parity & allotment signals"
          metricValue=""
          metricDetail={
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7, fontSize: 13, color: '#6b7280' }}>
              <li>2 OTAs near stop-sell threshold</li>
              <li>1 corporate rate lower than BAR on 3 dates</li>
              <li>Weekend shoulder dates under-indexed</li>
            </ul>
          }
        />

        <KpiCard
          title="Open Invoice Conversations"
          subtitle="Two-way messages on billing"
          metricValue="19"
          metricDetail={<span style={{ color: '#6b7280' }}>5 require hotel response today</span>}
        />

        <KpiCard
          title="Exceptions"
          subtitle="Operational & finance outliers"
          metricValue=""
          metricDetail={
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7, fontSize: 13, color: '#6b7280' }}>
              <li>3 rate overrides &gt; 20% discount</li>
              <li>4 bookings without PO / LPO ref</li>
              <li>2 high-value no-shows pending charge</li>
            </ul>
          }
        />
      </section>

      <section className={styles.grid}>
        <div className={styles.cardFull}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Billing Watchlist</div>
              <div className={styles.cardSubtitle}>Recent invoices & payment activity</div>
            </div>
            <Button onClick={() => console.log('Go to invoices')} variant="secondary">
              Invoices
            </Button>
          </div>

          <DataTable
            headers={['Invoice', 'Customer/Agent', 'Amount', 'Paid', 'Status']}
            rowKeys={['invoice', 'customer', 'amount', 'paid', 'status']}
            data={[
              {
                invoice: 'INV-8843',
                customer: 'Orbit Travels',
                amount: '₹ 2,45,600',
                paid: '₹ 1,00,000',
                status: <Badge variant="warning">Partially paid</Badge>
              },
              {
                invoice: 'INV-8844',
                customer: 'BlueSky Holidays',
                amount: '₹ 78,200',
                paid: '₹ 0',
                status: <Badge variant="danger">Overdue 14d</Badge>
              },
              {
                invoice: 'INV-8845',
                customer: 'Acme Industries',
                amount: '₹ 1,12,900',
                paid: '₹ 1,12,900',
                status: <Badge variant="success">Paid</Badge>
              },
              {
                invoice: 'INV-8846',
                customer: 'TripNest',
                amount: '₹ 54,300',
                paid: '₹ 25,000',
                status: <Badge variant="warning">Awaiting remittance</Badge>
              }
            ]}
          />
        </div>
      </section>

      <section className={styles.grid}>
        <div className={styles.cardFull}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Action Center</div>
              <div className={styles.cardSubtitle}>
                Things that require attention in the next 24–48 hours.
              </div>
            </div>
          </div>

          <DataTable
            headers={['Area', 'Action', 'Impact', 'Owner', 'Shortcut']}
            rowKeys={['area', 'action', 'impact', 'owner', 'shortcut']}
            data={[
              {
                area: 'Bookings',
                action: 'Confirm 7 tentative group blocks without payment guarantee.',
                impact: <Badge variant="warning">High</Badge>,
                owner: 'Sales / Front Office',
                shortcut: <Button onClick={() => console.log('Open bookings')}>Open bookings</Button>
              },
              {
                area: 'Contracts',
                action: 'Renew 3 corporate contracts expiring this month.',
                impact: <Badge variant="info">Medium</Badge>,
                owner: 'Sales',
                shortcut: <Button onClick={() => console.log('View contracts')}>View contracts</Button>
              },
              {
                area: 'Invoices',
                action: 'Send reminder on overdue invoices for BlueSky & TripNest.',
                impact: <Badge variant="danger">Critical</Badge>,
                owner: 'Finance',
                shortcut: <Button onClick={() => console.log('Open chat')}>Open chat</Button>
              }
            ]}
          />
        </div>
      </section>
    </div>
    </main>
    </div>
  );
}
