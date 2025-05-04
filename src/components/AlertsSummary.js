import React from 'react';

export default function AlertsSummary({ alerts }) {
  const sharedContainerStyle = {
    backgroundColor: '#1f2937',
    color: '#fff',
    padding: '20px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto'
  };

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
    <div className="alerts-summary-container" style={sharedContainerStyle}>
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
