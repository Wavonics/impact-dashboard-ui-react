import React from 'react';

export default function AlertsSummary({ alerts }) {
  return (
    <div style={{
      background: '#1f2937',
      padding: '20px',
      borderRadius: '8px'
    }}>
      <h3>Alerts Summary</h3>
      <ul>
        {alerts.map((a, idx) => (
          <li key={idx}>{a.message}</li>
        ))}
      </ul>
    </div>
  );
}
