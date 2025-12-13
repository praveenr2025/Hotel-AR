'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import UserTabs from './UserTabs';
import styles from './page.module.css';
import Sidebar from '@/components/layout/Sidebar';

export default function UsersPage() {
  return (
<div className="app-shell">
 <Sidebar variant="hotel" />
  <main className="main">
    <div className="container">
      <Header
        title="Users & Permissions"
        subtitle="Front office, reservations, sales, finance and admin users, with role and group-based permissions."
        actions={[
          { label: 'Export', variant: 'secondary', onClick: () => console.log('export users') },
          { label: 'Add New User', variant: 'primary', onClick: () => console.log('add user') }
        ]}
      />

      <section className={styles.card}>
        <UserTabs />
      </section>
      </div>
    </main>
    </div>
  );
}
