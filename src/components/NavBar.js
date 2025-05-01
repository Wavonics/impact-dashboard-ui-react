import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCubes, FaFileContract, FaProjectDiagram, FaFileInvoice, FaMoneyBillWave, FaWarehouse, FaClipboardList, FaPiggyBank, FaBuilding, FaLightbulb, FaHistory, FaBell } from 'react-icons/fa';

export default function NavBar() {
  const location = useLocation();

  const navStyle = {
    padding: '20px 0',
    backgroundColor: '#111827',
    color: '#fff',
    height: '50vh',
    width: '240px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '1px solid #1f2937',
    boxSizing: 'border-box',
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif"
  };

  const logoContainerStyle = {
    border: '2px solid #f97316',
    borderRadius: '8px',
    padding: '8px',
    marginTop: '20px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px'
  };

  const logoStyle = {
    width: '225px',
    height: 'auto',
    objectFit: 'contain'
  };

  const taglineStyle = {
    fontSize: '15px',
    color: '#9ca3af',
    textAlign: 'center',
    maxWidth: '200px',
    marginBottom: '30px',
    fontWeight: '700',
    letterSpacing: '0.5px',
    lineHeight: '1.4'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    width: '100%',
    margin: 0
  };

  const linkStyle = (path) => ({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#fff',
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif",
    fontSize: '16px',
    padding: '12px 20px',
    borderLeft: location.pathname === path ? '4px solid #f97316' : '4px solid transparent',
    backgroundColor: location.pathname === path ? '#1f2937' : 'transparent',
    fontWeight: location.pathname === path ? '600' : '500',
    transition: 'all 0.2s ease',
    marginBottom: '4px',
    width: '100%',
    boxSizing: 'border-box',
    cursor: 'pointer'
  });

  const iconColors = {
    '/': '#ffffff',
    '/assets': '#00ff00',
    '/contracts': '#f97316',
    '/projects': '#00ffff',
    '/po': '#f97316',
    '/budget-lines': '#10b981',
    '/ownership': '#9ca3af',
    '/procurement-methods': '#3b82f6',
    '/funding-sources': '#10b981',
    '/departments': '#9ca3af',
    '/strategic-plans': '#facc15',
    '/audit-logs': '#8b5cf6',
    '/alerts': '#ef4444'
  };

  const iconStyle = (path) => ({
    marginRight: '10px',
    fontSize: '22px',
    color: iconColors[path]
  });

  return (
    <nav style={navStyle}>
      <div style={logoContainerStyle}>
        <img src="/logo.png" alt="IMPACT Logo" style={logoStyle} />
      </div>
      <p style={taglineStyle}>Driving Strategic Impact through IT Spend, Budget Tracking, and Contract Visibility.</p>
      <ul style={listStyle}>
        <li><Link to="/" style={linkStyle('/')}><FaHome style={iconStyle('/')} />Home</Link></li>
        <li><Link to="/assets" style={linkStyle('/assets')}><FaCubes style={iconStyle('/assets')} />Assets</Link></li>
        <li><Link to="/contracts" style={linkStyle('/contracts')}><FaFileContract style={iconStyle('/contracts')} />Contracts</Link></li>
        <li><Link to="/projects" style={linkStyle('/projects')}><FaProjectDiagram style={iconStyle('/projects')} />Projects</Link></li>
        <li><Link to="/po" style={linkStyle('/po')}><FaFileInvoice style={iconStyle('/po')} />Purchase Orders</Link></li>
        <li><Link to="/budget-lines" style={linkStyle('/budget-lines')}><FaMoneyBillWave style={iconStyle('/budget-lines')} />Budget Lines</Link></li>
        <li><Link to="/ownership" style={linkStyle('/ownership')}><FaWarehouse style={iconStyle('/ownership')} />Ownership</Link></li>
        <li><Link to="/procurement-methods" style={linkStyle('/procurement-methods')}><FaClipboardList style={iconStyle('/procurement-methods')} />Procurement Methods</Link></li>
        <li><Link to="/funding-sources" style={linkStyle('/funding-sources')}><FaPiggyBank style={iconStyle('/funding-sources')} />Funding Sources</Link></li>
        <li><Link to="/departments" style={linkStyle('/departments')}><FaBuilding style={iconStyle('/departments')} />Departments</Link></li>
        <li><Link to="/strategic-plans" style={linkStyle('/strategic-plans')}><FaLightbulb style={iconStyle('/strategic-plans')} />Strategic Plans</Link></li>
        <li><Link to="/audit-logs" style={linkStyle('/audit-logs')}><FaHistory style={iconStyle('/audit-logs')} />Audit Logs</Link></li>
        <li><Link to="/alerts" style={linkStyle('/alerts')}><FaBell style={iconStyle('/alerts')} />Alerts</Link></li>
      </ul>
    </nav>
  );
}
