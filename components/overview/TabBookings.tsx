'use client';

import { useMemo, useState } from 'react';
import styles from './overview.module.css';

const BOOKINGS = [
  {
    id: 'BK-0001',
    hotel: 'Grand Meridian',
    city: 'Pune',
    checkIn: '2025-11-30',
    nights: 2,
    status: 'Confirmed'
  },
  {
    id: 'BK-0002',
    hotel: 'Oasis Bay Business Hotel',
    city: 'Mumbai',
    checkIn: '2025-11-30',
    nights: 1,
    status: 'In-house'
  },
  {
    id: 'BK-0003',
    hotel: 'City Breeze Inn',
    city: 'Pune',
    checkIn: '2025-12-01',
    nights: 3,
    status: 'Cancelled'
  }
];

export default function TabBookings() {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState('');

  const filtered = useMemo(() => {
    return BOOKINGS.filter(b => {
      if (city && b.city !== city) return false;
      if (status && b.status !== status) return false;
      if (search) {
        const hay = `${b.id} ${b.hotel} ${b.city}`.toLowerCase();
        if (!hay.includes(search.toLowerCase())) return false;
      }
      return true;
    });
  }, [search, city, status]);

  return (
    <section className={styles.card}>
      <div className={styles.sectionTitle}>Bookings by status – this week</div>
      <div className={styles.sectionSubtitle}>
        Filter by hotel or city to see what is confirmed, cancelled or in-house.
      </div>

      <div className="filters-bar">
        <input
          className="input"
          placeholder="Search booking / hotel / city"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="select" value={city} onChange={e => setCity(e.target.value)}>
          <option value="">All cities</option>
          <option>Pune</option>
          <option>Mumbai</option>
        </select>
        <select className="select" value={status} onChange={e => setStatus(e.target.value)}>
          <option value="">All statuses</option>
          <option>Confirmed</option>
          <option>In-house</option>
          <option>Cancelled</option>
        </select>
      </div>

      <div className={styles.tableWrapSmall}>
        <table className="table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Hotel</th>
              <th>City</th>
              <th>Check-in</th>
              <th>Nights</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(b => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.hotel}</td>
                <td>{b.city}</td>
                <td>{b.checkIn}</td>
                <td>{b.nights}</td>
                <td>{b.status}</td>
              </tr>
            ))}
            {!filtered.length && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', color: '#6b7280' }}>
                  No bookings match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
