// components/MetricDetailsModal.js
import React from 'react';

export default function MetricDetailsModal({ metric, onClose }) {
  if (!metric) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999
  };

  const modalStyle = {
    backgroundColor: '#1f2937',
    color: '#fff',
    padding: '20px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    position: 'relative'
  };

  const closeButton = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '20px',
    cursor: 'pointer'
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <button style={closeButton} onClick={onClose}>&times;</button>
        <h2>{metric.label}</h2>
        <p><strong>Value:</strong> {metric.value}</p>
        <p><strong>Color:</strong> {metric.color}</p>
        <p>Additional details or insights about <em>{metric.label}</em> can go here.</p>
      </div>
    </div>
  );
}
