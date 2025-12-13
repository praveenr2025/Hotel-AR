'use client';

import React from 'react';

export default function ModulePermissions({
  modules,
  onToggle
}: {
  modules: Record<string, boolean>;
  onToggle: (k: string) => void;
}) {
  return (
    <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
      {Object.keys(modules).map(k => (
        <label key={k}>
          <input type="checkbox" checked={!!modules[k]} onChange={() => onToggle(k)} /> {k}
        </label>
      ))}
    </div>
  );
}
