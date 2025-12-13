// app/page.tsx (Server Component - Default Home Route)

import { redirect } from 'next/navigation';

export default function RootPage() {
  // Immediately redirect users to the dashboard route
  redirect('/dashboard');
}