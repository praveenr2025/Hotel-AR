'use client';

import { useState } from 'react';
import SearchCard from './SearchCard';
import ResultsMap from './ResultsMap';
import HistoryTable, { DUMMY_BOOKINGS } from './HistoryTable';
import styles from './bookingsp.module.css';
import TravelInsights from './TravelInsights';

type TabKey = 'search' | 'history';

export default function BookingsTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('search');

  return (
    <>
      <div className={styles.tabList} role="tablist">
        <button
          type="button"
          className={`${styles.tab} ${
            activeTab === 'search' ? styles.activeTab : ''
          }`}
          onClick={() => setActiveTab('search')}
        >
          Find &amp; Book
        </button>

        <button
          type="button"
          className={`${styles.tab} ${
            activeTab === 'history' ? styles.activeTab : ''
          }`}
          onClick={() => setActiveTab('history')}
        >
          Bookings &amp; History
        </button>
      </div>
      <div className={styles.tabPanels}>
        {activeTab === 'search' && (
          <section className={styles.layoutMain}>
            <SearchCard />
            <ResultsMap />
          </section>
        )}

        {activeTab === 'history' && (
        <section className={styles.historyLayout}>
            <HistoryTable />
            <TravelInsights bookings={DUMMY_BOOKINGS} />
        </section>
        )}
      </div>    
    </>
  );
}
