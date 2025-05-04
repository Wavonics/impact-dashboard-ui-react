import React from 'react';
import '../DashboardWidgets.css'; // ✅ keep this import

export default function ContractRenewals({ renewals }) {
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
    <div className="widget-container contract-renewals-container">
      <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>Upcoming Contract Renewals</h3>
      <ul style={listStyle}>
        {renewals.length > 0 ? renewals.map((r, idx) => (
          <li key={idx} style={listItemStyle}>
            <strong>{r.contractName}</strong> expiring on <em>{r.expiryDate}</em>
          </li>
        )) : (
          <li style={{ color: '#9ca3af' }}>No upcoming renewals</li>
        )}
      </ul>
    </div>
  );
}
