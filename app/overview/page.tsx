'use client';

import Tabs from '@/components/ui/Tabs';
import TabOverview from '@/components/overview/TabOverview';
import TabBookings from '@/components/overview/TabBookings';
import TabFinance from '@/components/overview/TabFinance';
import TabComms from '@/components/overview/TabComms';
import styles from './page.module.css';
import Sidebar from '@/components/layout/Sidebar';

export default function OverviewPage() {
  return (
<div className="app-shell">
  <Sidebar variant="partner" />
  <main className="main">
    <div className="container">
      <header className={styles.topbar}>
        <div>
          <h1>Overview</h1>
          <p>
            Single view of bookings, invoices, payments and conversations across your hotels.
          </p>
        </div>
      </header>

      <Tabs
        tabs={[
          { id: 'overview', label: 'Overview', content: <TabOverview /> },
          { id: 'bookings', label: 'Bookings snapshot', content: <TabBookings /> },
          { id: 'finance', label: 'Invoices & payments', content: <TabFinance /> },
          { id: 'comms', label: 'Conversations & SLAs', content: <TabComms /> }
        ]}
      />
    </div>
    </main>
    </div>
  );
}
