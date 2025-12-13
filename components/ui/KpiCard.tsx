'use client';

import React from 'react';
import styles from './KpiCard.module.css';

interface KpiCardProps {
  title: string;
  subtitle?: string;
  metricValue: React.ReactNode;
  metricDetail?: React.ReactNode;
  pillText?: string;
  gridSpan?: number;
}

export default function KpiCard({
  title, subtitle, metricValue, metricDetail, pillText, gridSpan = 3
}: KpiCardProps) {
  return (
    <div className={styles.card}>

      <div className={styles.cardHeader}>
        <div>
          <div className={styles.cardTitle}>{title}</div>
          {subtitle && <div className={styles.cardSubtitle}>{subtitle}</div>}
        </div>
        {pillText && <span className={styles.metricPill}>{pillText}</span>}
      </div>

      <div className={styles.metricValueDisplay}>{metricValue}</div>

      <div className={styles.cardDetail}>{metricDetail}</div>
    </div>
  );
}
