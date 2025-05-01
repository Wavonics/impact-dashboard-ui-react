import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#111827',
    color: '#fff',
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif",
    padding: '20px'
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '10px'
  };

  const subtitleStyle = {
    fontSize: '18px',
    fontWeight: '400',
    marginBottom: '30px',
    color: '#9ca3af'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '800px'
  };

  const cardStyle = {
    backgroundColor: '#1f2937',
    color: '#fff',
    border: '1px solid #1f2937',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  };

  const hoverStyle = {
    border: '1px solid #f97316',
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
  };

  const modules = [
    { path: '/assets', label: 'Assets' },
    { path: '/contracts', label: 'Contracts' },
    { path: '/projects', label: 'Projects' },
    { path: '/po', label: 'Purchase Orders' },
    { path: '/budget-lines', label: 'Budget Lines' },
    { path: '/ownership', label: 'Ownership' },
    { path: '/procurement-methods', label: 'Procurement Methods' },
    { path: '/funding-sources', label: 'Funding Sources' },
    { path: '/departments', label: 'Departments' },
    { path: '/strategic-plans', label: 'Strategic Plans' },
    { path: '/audit-logs', label: 'Audit Logs' },
    { path: '/alerts', label: 'Alerts' }
  ];

  return (
    <div style={containerStyle}>
      <img src="/logo.png" alt="IMPACT Logo" style={{ width: '140px', marginBottom: '20px' }} />
      <h1 style={titleStyle}>Welcome to IMPACT Dashboard</h1>
      <p style={subtitleStyle}>Track IT Assets, Contracts, Budgets & more in one place</p>
      <div style={gridStyle}>
        {modules.map((mod) => (
          <Link
            to={mod.path}
            key={mod.path}
            style={cardStyle}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            {mod.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
