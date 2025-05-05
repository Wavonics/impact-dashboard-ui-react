// src/components/DashboardMetricCard.js
import React from 'react';
import CountUp from 'react-countup';
import {
  FaMoneyBillWave,
  FaFileContract,
  FaProjectDiagram,
  FaFileInvoice,
  FaBell,
  FaCubes,
  FaClipboardList,
  FaBuilding,
  FaLightbulb,
  FaPiggyBank,
  FaClock,
  FaExclamationTriangle
} from 'react-icons/fa';

export default function DashboardMetricCard({ label, value, iconKey, color, badge, tooltip }) {
  // Expanded icon mapping
  const iconMap = {
    money: <FaMoneyBillWave />,
    fileContract: <FaFileContract />,
    projectDiagram: <FaProjectDiagram />,
    fileInvoice: <FaFileInvoice />,
    alerts: <FaBell />,
    cubes: <FaCubes />,
    clipboardList: <FaClipboardList />,
    building: <FaBuilding />,
    lightbulb: <FaLightbulb />,
    piggyBank: <FaPiggyBank />,
    clock: <FaClock />,
    exclamationTriangle: <FaExclamationTriangle />
  };

  const cardStyle = {
    backgroundColor: '#1f2937',
    color: '#fff',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    flex: '1 1 200px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    margin: '10px',
    position: 'relative',
    cursor: tooltip ? 'help' : 'default'
  };

  const iconStyle = {
    fontSize: '32px',
    marginBottom: '10px',
    color: color || '#f97316'
  };

  const valueStyle = {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '8px'
  };

  const labelStyle = {
    fontSize: '14px',
    color: '#9ca3af',
    fontWeight: '500'
  };

  const badgeStyle = {
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: '#ef4444',
    color: '#fff',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    fontSize: '12px',
    display: badge ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 4px rgba(0,0,0,0.5)'
  };

  return (
    <div style={cardStyle} title={tooltip || ''} aria-label={`Metric card: ${label}`}>
      {badge && <div style={badgeStyle}>{badge}</div>}
      <div style={iconStyle}>
        {iconMap[iconKey] || <FaCubes />} {/* fallback icon */}
      </div>
      <div style={valueStyle}>
        <CountUp end={typeof value === 'number' ? value : 0} duration={1.5} separator="," />
        {typeof value === 'string' && !isFinite(value) && <span>{value}</span>} {/* handles string values like "$4.5M" */}
      </div>
      <div style={labelStyle}>{label}</div>
    </div>
  );
}
