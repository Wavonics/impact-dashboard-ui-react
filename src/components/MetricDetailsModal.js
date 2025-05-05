import React from 'react';
import DashboardChart from './DashboardChart';

export default function MetricDetailsModal({ metric, onClose, onNavigate }) {
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1f2937',
    color: '#fff',
    padding: '20px',
    borderRadius: '12px',
    zIndex: 1000,
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 999
  };

  const buttonStyle = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    marginTop: '10px',
    marginRight: '10px'
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={modalStyle}>
        <h2 style={{ marginBottom: '12px', color: '#f97316' }}>{metric.label}</h2>
        <p style={{ fontSize: '14px', marginBottom: '10px' }}>
          Value: <strong>{metric.value}</strong>
        </p>

        {/* ✅ Embedded chart with all dynamic props */}
        <div style={{ backgroundColor: '#374151', borderRadius: '8px', padding: '10px', minHeight: '150px', marginBottom: '10px' }}>
          <DashboardChart
            data={metric.chartData}
            chartType={metric.chartType}
            xAxisKey={metric.xAxisKey}
            yAxisKey={metric.yAxisKey}
            title={`Details for ${metric.label}`}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={buttonStyle} onClick={onNavigate}>View More</button>
          <button style={{ ...buttonStyle, backgroundColor: '#374151' }} onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}
