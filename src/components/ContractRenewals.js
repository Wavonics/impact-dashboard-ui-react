// components/ContractRenewals.js
import React, { useState, useRef } from 'react';
import '../DashboardWidgets.css'; // ✅ keep this import

export default function ContractRenewals({ renewals }) {
  const [collapsed, setCollapsed] = useState(false);
  const contentRef = useRef(null);

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

  const collapsibleContentStyle = {
    overflow: 'hidden',
    transition: 'max-height 0.4s ease, opacity 0.4s ease, padding 0.4s ease',
    maxHeight: collapsed
      ? '0'
      : contentRef.current
      ? `${contentRef.current.scrollHeight}px`
      : '9999px',
    opacity: collapsed ? 0 : 1
  };

  return (
    <div className="widget-container contract-renewals-container">
      <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Upcoming Contract Renewals</h3>
      <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          backgroundColor: '#f97316',
          color: '#fff',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '6px',
          cursor: 'pointer',
          marginBottom: '10px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {collapsed ? 'Expand' : 'Collapse'}
      </button>

      <div style={collapsibleContentStyle} ref={contentRef}>
        <ul style={listStyle}>
          {renewals.length > 0 ? (
            renewals.map((r, idx) => (
              <li key={idx} style={listItemStyle}>
                <strong>{r.contractName}</strong> expiring on <em>{r.expiryDate}</em>
              </li>
            ))
          ) : (
            <li style={{ color: '#9ca3af' }}>No upcoming renewals</li>
          )}
        </ul>
      </div>
    </div>
  );
}
