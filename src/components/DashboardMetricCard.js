// src/components/DashboardMetricCard.js
import React from 'react';

export default function DashboardMetricCard({ label, value, icon, color }) {
  const cardStyle = {
    backgroundColor: '#1f2937',
    color: '#fff',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    flex: '1 1 200px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    margin: '10px',
  };

  const iconStyle = {
    fontSize: '32px',
    marginBottom: '10px',
    color: color || '#f97316',
  };

  const valueStyle = {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '8px',
  };

  const labelStyle = {
    fontSize: '14px',
    color: '#9ca3af',
    fontWeight: '500',
  };

  return (
    <div style={cardStyle}>
      <div style={iconStyle}>{icon}</div>
      <div style={valueStyle}>{value}</div>
      <div style={labelStyle}>{label}</div>
    </div>
  );
}
