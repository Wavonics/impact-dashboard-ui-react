import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#111827',
    color: '#fff',
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif",
    alignItems: 'center',
    padding: '20px'
  };

  const landingStyle = {
    border: '2px solid #f97316',
    borderRadius: '8px',
    padding: '30px',
    maxWidth: '700px',
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '40px'
  };

  const logoStyle = {
    width: '180px',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '10px'
  };

  const taglineStyle = {
    fontSize: '16px',
    color: '#f97316',
    fontWeight: '600',
    marginBottom: '20px'
  };

  const buttonStyle = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '12px 24px',
    margin: '0 10px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1000px',
    marginTop: '30px'
  };

  const cardStyle = {
    backgroundColor: '#1f2937',
    color: '#fff',
    border: '1px solid #1f2937',
    borderRadius: '10px',
    padding: '40px',
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '20px',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  };

  const hoverStyle = {
    border: '1px solid #f97316',
    transform: 'translateY(-6px)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.4)'
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
      <div style={landingStyle}>
        <img src="/logo.png" alt="IMPACT Logo" style={logoStyle} />
        <h1 style={titleStyle}>Welcome to IMPACT Dashboard</h1>
        <p style={taglineStyle}>Driving Strategic Impact through IT Spend, Budget Tracking, and Contract Visibility</p>
        <div>
          <a href="#" style={buttonStyle}>Demo</a>
          <a href="#" style={buttonStyle}>Learn More</a>
        </div>
      </div>
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
