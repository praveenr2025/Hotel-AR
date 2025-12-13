'use client';

import React from 'react';
import DataTable from '@/components/ui/DataTable';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const users = [
  {
    id: 'u1',
    name: 'Aditi Sharma',
    email: 'aditi.sharma@grandmeridian.com',
    role: 'Front Office Supervisor',
    modules: 'Bookings, Rooms, Invoices',
    status: <Badge variant="success">Active</Badge>,
    login: 'Today 09:15'
  },
  {
    id: 'u2',
    name: 'Rahul Verma',
    email: 'rahul.verma@grandmeridian.com',
    role: 'Reservations Manager',
    modules: 'Bookings, Users, Reports',
    status: <Badge variant="success">Active</Badge>,
    login: 'Yesterday 18:42'
  },
  {
    id: 'u3',
    name: 'Neha Gupta',
    email: 'neha.gupta@grandmeridian.com',
    role: 'Sales Executive',
    modules: 'Contracts, Bookings, Invoices',
    status: <Badge variant="success">Active</Badge>,
    login: '26 Nov 11:10'
  },
  {
    id: 'u4',
    name: 'Front Desk Guest',
    email: 'frontdesk@grandmeridian.com',
    role: 'Limited Front Office',
    modules: 'Bookings',
    status: <Badge variant="warning">Inactive</Badge>,
    login: '14 Nov 08:03'
  }
];

export default function UserList({ onEdit }: { onEdit: (user?: any) => void }) {
  const rows = users.map(u => ({
    name: u.name,
    email: u.email,
    role: u.role,
    modules: u.modules,
    status: u.status,
    login: u.login,
    actions: <Button variant="secondary" onClick={() => onEdit(u)}>View</Button>
  }));

  return (
    <div>
      <DataTable
        headers={['User','Email','Role','Modules','Status','Last login','Actions']}
        rowKeys={['name','email','role','modules','status','login','actions']}
        data={rows}
      />
    </div>
  );
}
