// components/MetricDetailsModal.js
import React from 'react';

export default function MetricDetailsModal({ metric, onClose, onNavigate }) {
  if (!metric) return null;

  const modalOverlay = {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  const modalContent = {
    backgroundColor: '#1f2937',
    color: '#fff',
    padding: '20px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '400px',
    textAlign: 'center',
    boxShadow: '0 4px 16px rgba(0,0,0,0.5)'
  };

  const buttonStyle = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    margin: '10px 5px',
    cursor: 'pointer',
    fontSize: '14px'
  };

  return (
    <div style={modalOverlay} onClick={onClose}>
      <div style={modalContent} onClick={e => e.stopPropagation()}>
        <h2>{metric.label}</h2>
        <p><strong>Value:</strong> {metric.value}</p>
        <p><em>{metric.tooltip || 'Additional info about this metric.'}</em></p>
        <div>
          <button style={buttonStyle} onClick={onClose}>Close</button>
          <button style={buttonStyle} onClick={onNavigate}>View More</button>
        </div>
      </div>
    </div>
  );
}
