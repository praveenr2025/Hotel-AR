'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import GroupsSelect from './GroupsSelect';
import PermissionScope from './PermissionScope';
import type { ReactNode } from 'react';
import PermissionMatrix from './PermissionMatrix';

import styles from './page.module.css';

type User = {
  id?: string;
  name?: string;
  email?: string;
  mobile?: string;
  department?: string;
  role?: string;
  status?: 'Active'|'Inactive';
  groups?: string[];
  modules?: Record<string, boolean>;
};

const MASTER_DEPARTMENTS = ['Front Office','Reservations','Sales','Finance','Admin','Management'];
const MASTER_ROLES = ['Front Office Supervisor','Reservations Manager','Sales Executive','Finance Controller','System Admin'];
const MASTER_GROUPS = ['Front Office Team','Reservations Core','Sales & Revenue','Finance & AR Team','Night Audit'];

export default function UserForm({ user, onSaved }: { user?: User | null, onSaved?: () => void }) {
  const [form, setForm] = useState<User>({
    name: '',
    email: '',
    mobile: '',
    department: '',
    role: '',
    status: 'Active',
    groups: [],
    modules: { bookings: true, rooms: true, contracts: false, invoices: true, payments: false, users: false, reports: false }
  });

  const [departments, setDepartments] = useState<string[]>(MASTER_DEPARTMENTS);
  const [roles, setRoles] = useState<string[]>(MASTER_ROLES);
  const [groups, setGroups] = useState<string[]>(MASTER_GROUPS);

  // load user to edit
  useEffect(() => {
    if (user) {
      setForm({
        id: user.id,
        name: (user.name as string) || '',
        email: (user.email as string) || '',
        mobile: (user as any).mobile || '',
        department: (user as any).department || '',
        role: (user as any).role || '',
        status: (user as any).status || 'Active',
        groups: (user as any).groups || [],
        modules: (user as any).modules || form.modules
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const setField = (k: keyof User, v: any) => {
    setForm(prev => ({ ...prev, [k]: v }));
  };

  const addDepartment = (name: string) => {
    if (!name) return;
    if (!departments.includes(name)) setDepartments(prev => [...prev, name]);
    setField('department', name);
  };

  const addRole = (name: string) => {
    if (!name) return;
    if (!roles.includes(name)) setRoles(prev => [...prev, name]);
    setField('role', name);
  };

  const addGroup = (name: string) => {
    if (!name) return;
    if (!groups.includes(name)) setGroups(prev => [...prev, name]);
    setForm(prev => ({ ...prev, groups: [...(prev.groups || []), name] }));
  };

  const toggleModule = (key: string) => {
    setForm(prev => ({ ...prev, modules: { ...(prev.modules || {}), [key]: !prev.modules?.[key] } }));
  };

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      mobile: '',
      department: '',
      role: '',
      status: 'Active',
      groups: [],
      modules: { bookings: true, rooms: true, contracts: false, invoices: true, payments: false, users: false, reports: false }
    });
  };

  const handleSave = () => {
    console.log('Save user payload:', form);
    if (onSaved) onSaved();
    // in a real app you'd POST / PUT to backend
  };

  return (
    <div>
      <div className={styles.helper} style={{ marginBottom: 8 }}>
        Use this form to add a new user or edit details of an existing user from the list. You can also add new master data (departments, roles, groups) directly from the dropdowns.
      </div>

      <div className={styles.formRow} style={{ marginBottom: 10 }}>
        <div className={`${styles['col-span-2'] || 'col-span-2'}`}><input className={styles.input || 'input'} placeholder="Enter full name" value={form.name} onChange={e => setField('name', e.target.value)} /></div>
        <div className={`${styles['col-span-2'] || 'col-span-2'}`}><input className={styles.input || 'input'} placeholder="name@hotel.com" value={form.email} onChange={e => setField('email', e.target.value)} /></div>
        <div className={`${styles['col-span-1'] || 'col-span-1'}`}><input className={styles.input || 'input'} placeholder="+91-" value={form.mobile} onChange={e => setField('mobile', e.target.value)} /></div>
        <div className={`${styles['col-span-1'] || 'col-span-1'}`}>
          <select className={styles.select || 'select'} value={form.department} onChange={e => setField('department', e.target.value)}>
            <option value="">Select department</option>
            {departments.map(d => <option key={d} value={d}>{d}</option>)}
            <option value="__add_new_dept">+ Add new department…</option>
          </select>
        </div>
        <div className={`${styles['col-span-1'] || 'col-span-1'}`}>
          <select className={styles.select || 'select'} value={form.role} onChange={e => {
            if (e.target.value === '__add_new_role') {
              const v = prompt('Add new role:');
              if (v) addRole(v.trim());
            } else setField('role', e.target.value);
          }}>
            <option value="">Select role</option>
            {roles.map(r => <option key={r} value={r}>{r}</option>)}
            <option value="__add_new_role">+ Add new role…</option>
          </select>
        </div>
        <div className={`${styles['col-span-1'] || 'col-span-1'}`}>
          <select className={styles.select || 'select'} value={form.status} onChange={e => setField('status', e.target.value as any)}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: 8 }}>
        <div style={{ marginBottom: 6, fontSize: 13, color: 'var(--muted)' }}>Groups / Teams</div>
        <GroupsSelect
        available={groups}
        selected={form.groups || []}
        onChange={(selected: string[]) => setField('groups', selected)}
        onAdd={(name: string) => addGroup(name)}
        />

        <div className={styles.helper} style={{ marginTop: 8 }}>
          Group membership is used to apply and report permissions for a group of users.
        </div>
      </div>

      <PermissionScope />

      <div style={{ marginBottom: 8, fontWeight: 600 }}>Module access</div>
      <div className={styles.modulesGrid}>
        <label><input type="checkbox" checked={!!form.modules?.bookings} onChange={() => toggleModule('bookings')} /> Bookings</label>
        <label><input type="checkbox" checked={!!form.modules?.rooms} onChange={() => toggleModule('rooms')} /> Rooms &amp; Inventory</label>
        <label><input type="checkbox" checked={!!form.modules?.contracts} onChange={() => toggleModule('contracts')} /> Contracts</label>
        <label><input type="checkbox" checked={!!form.modules?.invoices} onChange={() => toggleModule('invoices')} /> Invoices</label>
        <label><input type="checkbox" checked={!!form.modules?.payments} onChange={() => toggleModule('payments')} /> Payments</label>
        <label><input type="checkbox" checked={!!form.modules?.users} onChange={() => toggleModule('users')} /> User Management</label>
        <label><input type="checkbox" checked={!!form.modules?.reports} onChange={() => toggleModule('reports')} /> Reports &amp; Analytics</label>
      </div>

      <div className={styles.helper} style={{ marginBottom: 12 }}>
        These permissions are applied according to the selected permission scope (user / group) and group membership. Exact behavior is handled in the backend.
      </div>

      <div className={styles.actionsRow}>
        <Button variant="primary" onClick={handleSave}>Save user</Button>
        <Button variant="secondary" onClick={resetForm}>Reset</Button>
        <div style={{ marginLeft: 8, fontSize: 12, color: 'var(--muted)' }}>Last login: <span style={{ fontWeight: 600 }}>Not yet logged in</span></div>
      </div>
    </div>
  );
}
