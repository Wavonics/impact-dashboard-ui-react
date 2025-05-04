import React from 'react';

export default function ContractRenewals({ renewals }) {
  return (
    <div style={{
      background: '#1f2937',
      padding: '20px',
      borderRadius: '8px'
    }}>
      <h3>Upcoming Contract Renewals</h3>
      <ul>
        {renewals.map((r, idx) => (
          <li key={idx}>{r.contractName} expiring on {r.expiryDate}</li>
        ))}
      </ul>
    </div>
  );
}
