// src/components/DashboardMetricCard.js
import React from 'react';
import CountUp from 'react-countup';
import {
  FaMoneyBillWave, FaFileContract, FaProjectDiagram, FaFileInvoice,
  FaBell, FaCubes, FaClipboardList, FaPiggyBank, FaBuilding
} from 'react-icons/fa';

export default function DashboardMetricCard({ label, value, iconKey, color, badge, tooltip }) {
  // Icon mapping
  const iconMap = {
    money: <FaMoneyBillWave />,
    contracts: <FaFileContract />,
    projects: <FaProjectDiagram />,
    po: <FaFileInvoice />,
    alerts: <FaBell />,
    assets: <FaCubes />,
    procurement: <FaClipboardList />,
    funding: <FaPiggyBank />,
    departments: <FaBuilding />
  };

  const cardStyle = {
    backgroundColor: '#1f2937',
    color: '#fff',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    cursor: tooltip ? 'help' : 'default'
  };

  const iconStyle = {
    fontSize: '32px',
    marginBottom: '10px',
    color: color || '#f97316'
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

  return (
    <div style={cardStyle} title={tooltip || label}>
      <div style={badgeStyle}>{badge}</div>
      <div style={iconStyle}>
        {iconMap[iconKey] || <FaCubes />}
      </div>
      <div style={valueStyle}>
        <CountUp end={value} duration={1.5} separator="," />
      </div>
      <div style={labelStyle}>{label}</div>
    </div>
  );
}
