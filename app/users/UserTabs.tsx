'use client';

import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import PermissionMatrix from './PermissionMatrix';
import styles from './page.module.css';

export default function UserTabs() {
  const [active, setActive] = useState<'list' | 'form' | 'matrix'>('list');
  const [editingUser, setEditingUser] = useState<any | null>(null);

  const switchToForm = (user?: any) => {
    setEditingUser(user || null);
    setActive('form');
  };

  return (
    <>
      {/* TABS */}
      <div className={styles.tabList}>
        <button
          className={`${styles.tab} ${active === 'list' ? styles.active : ''}`}
          onClick={() => setActive('list')}
        >
          User list
        </button>

        <button
          className={`${styles.tab} ${active === 'form' ? styles.active : ''}`}
          onClick={() => setActive('form')}
        >
          Add & edit user
        </button>

        <button
          className={`${styles.tab} ${active === 'matrix' ? styles.active : ''}`}
          onClick={() => setActive('matrix')}
        >
          Permissions matrix
        </button>
      </div>

      {/* CONTENT */}
      {active === 'list' && <UserList onEdit={switchToForm} />}
      {active === 'form' && <UserForm user={editingUser} onSaved={() => setActive('list')} />}
      {active === 'matrix' && <PermissionMatrix />}
    </>
  );
}
