'use client';

import React from 'react';
import styles from './page.module.css';

interface GroupsSelectProps {
  available: string[];
  selected: string[];
  onChange: (vals: string[]) => void;
  onAdd: (name: string) => void;
}

export default function GroupsSelect({
  available,
  selected,
  onChange,
  onAdd
}: GroupsSelectProps) {

  const toggle = (val: string) => {
    if (selected.includes(val)) {
      onChange(selected.filter(s => s !== val));
    } else {
      onChange([...selected, val]);
    }
  };

  return (
    <div>
      <div className={styles.multiSelect}>
        {available.map(group => (
          <div
            key={group}
            style={{
              padding: 6,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <label style={{ cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={selected.includes(group)}
                onChange={() => toggle(group)}
                style={{ marginRight: 8 }}
              />
              {group}
            </label>
          </div>
        ))}
      </div>

      {/* Add New Group */}
      <div style={{ marginTop: 8 }}>
        <button
          type="button"
          className="btn"
          onClick={() => {
            const v = prompt('Add new group / team:');
            if (v && v.trim()) onAdd(v.trim());
          }}
        >
          + Add new group…
        </button>
      </div>
    </div>
  );
}
