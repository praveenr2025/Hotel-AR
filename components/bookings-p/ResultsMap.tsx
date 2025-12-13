'use client';

import { useEffect, useState } from 'react';
import styles from './bookingsp.module.css';

type Hotel = {
  id: string;
  name: string;
  city: string;
  area: string;
  price: number;
  rating: number;
  distance: string;
  lat: number;
  lng: number;
};

const HOTELS: Hotel[] = [
  {
    id: 'H1',
    name: 'Grand City Business Hotel',
    city: 'Pune · 411057',
    area: 'Hinjewadi Phase 1',
    price: 4200,
    rating: 4.3,
    distance: '1.2 km from office',
    lat: 18.591,
    lng: 73.738
  },
  {
    id: 'H2',
    name: 'TechPark Residency',
    city: 'Pune · 411057',
    area: 'Hinjewadi Phase 2',
    price: 4800,
    rating: 4.5,
    distance: '0.8 km from office',
    lat: 18.599,
    lng: 73.744
  },
  {
    id: 'H3',
    name: 'Airport View Corporate Suites',
    city: 'Mumbai · 400099',
    area: 'Mumbai Airport T2',
    price: 6100,
    rating: 4.1,
    distance: '3.5 km from office',
    lat: 19.096,
    lng: 72.874
  }
];

export default function ResultsMap() {
  const [activeHotel, setActiveHotel] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(css);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';

    script.onload = () => {
      // @ts-ignore
      const L = window.L;
      if (!L) return;

      const map = L.map('orgMap').setView([18.59, 73.74], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
      }).addTo(map);

      HOTELS.forEach(h => {
        const marker = L.marker([h.lat, h.lng]).addTo(map);
        marker.on('click', () => setActiveHotel(h.id));
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section className={styles.card}>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.cardTitle}>Results &amp; map</div>
          <div className={styles.cardSubtitle}>
            Click a hotel to see room types and book.
          </div>
        </div>
        <span className={styles.badgeInfo}>{HOTELS.length} hotels</span>
      </div>

      <div className={styles.resultsLayout}>
        <div className={styles.hotelList}>
          {HOTELS.map(h => (
            <div
              key={h.id}
              className={`${styles.hotelCard} ${
                activeHotel === h.id ? styles.hotelCardActive : ''
              }`}
              onClick={() => setActiveHotel(h.id)}
            >
              <div className={styles.hotelHeader}>
                <div>
                  <div className={styles.hotelName}>{h.name}</div>
                  <div className={styles.hotelLocation}>
                    {h.city} · {h.area}
                  </div>
                </div>
                <div className={styles.hotelPrice}>₹{h.price.toLocaleString()}</div>
              </div>

              <div className={styles.hotelMeta}>
                <span className={styles.rating}>⭐ {h.rating}</span>
                <span>{h.distance}</span>
              </div>

              <div className={styles.hotelActions}>
                <span className={styles.link}>View rooms & details</span>
                <button className={styles.bookBtn}>Book</button>
              </div>
            </div>
          ))}
        </div>

        <div id="orgMap" className={styles.mapContainer} />
      </div>
    </section>
  );
}
