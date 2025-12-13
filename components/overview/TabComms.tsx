'use client';

import { useMemo, useState } from 'react';
import styles from './overview.module.css';

const CONVERSATIONS = [
  {
    subject: 'Tax breakup clarification – INV-1201',
    hotel: 'Grand Meridian',
    type: 'Invoice',
    priority: 'High',
    status: 'Open',
    updated: '29 Nov, 10:10'
  },
  {
    subject: 'Rate higher than contracted – OR-2500',
    hotel: 'City Breeze Inn',
    type: 'Invoice',
    priority: 'Medium',
    status: 'Waiting on hotel',
    updated: '28 Nov, 17:05'
  }
];

export default function TabComms() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [priority, setPriority] = useState('');

  const filtered = useMemo(() => {
    return CONVERSATIONS.filter(c => {
      if (type && c.type !== type) return false;
      if (priority && c.priority !== priority) return false;
      if (search) {
        const hay = `${c.subject} ${c.hotel}`.toLowerCase();
        if (!hay.includes(search.toLowerCase())) return false;
      }
      return true;
    });
  }, [search, type, priority]);

  return (
    <section className={styles.card}>
      <div className={styles.sectionTitle}>Open conversations</div>
      <div className={styles.sectionSubtitle}>
        Invoice, booking and contract queries that need attention.
      </div>

      <div className="filters-bar">
        <input
          className="input"
          placeholder="Search subject / hotel"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="select" value={type} onChange={e => setType(e.target.value)}>
          <option value="">All types</option>
          <option>Invoice</option>
          <option>Booking</option>
          <option>Contract</option>
        </select>
        <select
          className="select"
          value={priority}
          onChange={e => setPriority(e.target.value)}
        >
          <option value="">All priorities</option>
          <option>High</option>
          <option>Medium</option>
        </select>
      </div>

      <div className={styles.tableWrapSmall}>
        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Hotel</th>
              <th>Type</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Last updated</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <tr key={i}>
                <td>{c.subject}</td>
                <td>{c.hotel}</td>
                <td>{c.type}</td>
                <td>{c.priority}</td>
                <td>{c.status}</td>
                <td>{c.updated}</td>
              </tr>
            ))}
            {!filtered.length && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', color: '#6b7280' }}>
                  No conversations match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
