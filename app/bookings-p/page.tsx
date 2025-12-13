'use client';

import Sidebar from '@/components/layout/Sidebar';
import BookingsHeader from '@/components/bookings-p/BookingsHeader';
import BookingsTabs from '@/components/bookings-p/BookingsTabs';

export default function BookingsPartnerPage() {
  return (
    <div className="app-shell">
      <Sidebar variant="partner" />

      <main className="main">
        <BookingsHeader />
        <BookingsTabs />
      </main>
    </div>
  );
}
