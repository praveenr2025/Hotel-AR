'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import styles from './Header.module.css';

interface HeaderAction {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

interface HeaderProps {
  title: string;
  subtitle?: string;
  actions?: HeaderAction[];
  showChip?: boolean;
}

export default function Header({
  title,
  subtitle,
  actions = [],
  showChip = false,    
}: HeaderProps) {
  return (
    <header className={styles.topbar}>
      <div className={styles.topbarTitle}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className={styles.topbarActions}>
        {showChip && <span className={styles.chip}>Live · Auto-sync enabled</span>}

        {actions.map((action, i) => (
          <Button
            key={i}
            onClick={action.onClick}
            variant={action.variant || 'secondary'}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </header>
  );
}
