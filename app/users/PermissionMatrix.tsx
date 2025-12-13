'use client';

import React, { useState } from 'react';
import DataTable from '@/components/ui/DataTable';
import styles from './page.module.css';

export default function PermissionMatrix() {
  const [subTab, setSubTab] = useState<'role' | 'group'>('role');

  const roleData = [
    {
      role: 'Front Office Supervisor',
      bookings: 'View & Edit',
      rooms: 'View',
      contracts: '-',
      invoices: 'View',
      payments: '-',
      users: '-',
      reports: 'View'
    },
    {
      role: 'Reservations Manager',
      bookings: 'View & Edit',
      rooms: 'View',
      contracts: 'View',
      invoices: 'View',
      payments: '-',
      users: '-',
      reports: 'View'
    }
  ];

  const groupData = [
    {
      role: 'Front Office Team',
      desc: 'Front desk staff',
      bookings: 'View & Edit',
      rooms: 'View',
      contracts: '-',
      invoices: 'View',
      payments: '-',
      users: '-',
      reports: 'View'
    }
  ];

  return (
    <div>

      {/* SUB TABS */}
      <div className={styles.subTabList}>
        <button
          className={`${styles.subTab} ${subTab === "role" ? styles.subActive : ""}`}
          onClick={() => setSubTab("role")}
        >
          By role
        </button>

        <button
          className={`${styles.subTab} ${subTab === "group" ? styles.subActive : ""}`}
          onClick={() => setSubTab("group")}
        >
          By group / team
        </button>
      </div>

      {/* TABLES */}
      {subTab === 'role' && (
        <DataTable
          headers={[
            'Role', 'Bookings', 'Rooms', 'Contracts', 'Invoices',
            'Payments', 'Users', 'Reports'
          ]}
          rowKeys={[
            'role', 'bookings', 'rooms', 'contracts', 'invoices',
            'payments', 'users', 'reports'
          ]}
          data={roleData}
        />
      )}

      {subTab === 'group' && (
        <DataTable
          headers={[
            'Group', 'Description', 'Bookings', 'Rooms', 'Contracts',
            'Invoices', 'Payments', 'Users', 'Reports'
          ]}
          rowKeys={[
            'role', 'desc', 'bookings', 'rooms', 'contracts',
            'invoices', 'payments', 'users', 'reports'
          ]}
          data={groupData}
        />
      )}
    </div>
  );
}
