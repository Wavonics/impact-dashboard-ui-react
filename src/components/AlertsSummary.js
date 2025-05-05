import React, { useState } from 'react';
import '../DashboardWidgets.css'; // ✅ CSS import

export default function AlertsSummary({ alerts }) {
  const [collapsed, setCollapsed] = useState(false);

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

      {/* ✅ centered button */}
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            backgroundColor: '#f97316',
            color: '#fff',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          {collapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>

      {!collapsed && (
        <ul style={listStyle}>
          {alerts.length > 0 ? alerts.map((a, idx) => (
            <li key={idx} style={listItemStyle}>{a.message}</li>
          )) : (
            <li style={{ color: '#9ca3af' }}>No alerts</li>
          )}
        </ul>
      )}
    </div>
  );
}
