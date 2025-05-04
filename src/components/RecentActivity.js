// src/components/RecentActivity.js
import React from 'react';

export default function RecentActivity({ activities }) {
  const containerStyle = {
    backgroundColor: '#1f2937',
    borderRadius: '12px',
    padding: '20px',
    color: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    maxHeight: '250px',
    overflowY: 'auto',
  };

  const itemStyle = {
    fontSize: '14px',
    borderBottom: '1px solid #374151',
    padding: '6px 0',
  };

  const linkStyle = {
    color: '#f97316',
    fontSize: '12px',
    marginTop: '10px',
    display: 'inline-block',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Recent Activity</h3>
      {activities.map((a, idx) => (
        <div key={idx} style={itemStyle}>{a}</div>
      ))}
      <span style={linkStyle}>View All</span>
    </div>
  );
}
