'use client';

import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
  variant?: "info" | "success" | "warning" | "danger" | "error";
  children: React.ReactNode;
}

export default function Badge({ variant = 'info', children }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>;
}
