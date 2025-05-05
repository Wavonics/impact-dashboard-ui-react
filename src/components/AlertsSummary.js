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
      <div className="widget-header">
        <h3>Alerts Summary</h3>
        <button className="widget-toggle" onClick={() => setCollapsed(!collapsed)}>
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
