'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

export default function PermissionScope() {
  const [scope, setScope] = useState<'user'|'group'>('user');

  return (
    <div className={styles.scopeBox}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input type="radio" name="permScope" checked={scope === 'user'} onChange={() => setScope('user')} />
          <span>Apply module access to this user only</span>
        </label>

        <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input type="radio" name="permScope" checked={scope === 'group'} onChange={() => setScope('group')} />
          <span>Treat as group permission preset for selected groups</span>
        </label>
      </div>

      <div style={{ marginTop: 8, fontSize: 12, color: 'var(--muted)' }}>
        When you choose “group permission preset”, the module access below will be stored as a reusable permission set for all users in the selected groups (implementation on backend).
      </div>
    </div>
  );
}
