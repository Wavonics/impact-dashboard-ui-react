import React from 'react';
import '../DashboardWidgets.css'; // ✅ CSS import stays

export default function AlertsSummary({ alerts }) {
  const listStyle = {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: '10px',
    fontSize: '14px'
  };

  const listItemStyle = {
    borderBottom: '1px solid #374151',
    padding: '6px 0',
    color: '#d1d5db'
  };

  return (
    <div className="widget-container alerts-summary-container">
      <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Alerts Summary</h3>
      <ul style={listStyle}>
        {alerts.length > 0 ? alerts.map((a, idx) => (
          <li key={idx} style={listItemStyle}>{a.message}</li>
        )) : (
          <li style={{ color: '#9ca3af' }}>No alerts</li>
        )}
      </ul>
    </div>
  );
}
