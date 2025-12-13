'use client';

import React from 'react';
import styles from './DataTable.module.css';

interface DataTableProps {
  headers: string[];
  rowKeys: string[]; 
  data: Array<Record<string, React.ReactNode>>;
}

export default function DataTable({ headers, rowKeys, data }: DataTableProps) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <tr key={ri}>
              {rowKeys.map((k, ci) => (
                <td key={ci}>
                  {row[k]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
