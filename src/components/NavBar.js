import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCubes, FaFileContract, FaProjectDiagram, FaFileInvoice, FaMoneyBillWave, FaWarehouse, FaClipboardList, FaPiggyBank, FaBuilding, FaLightbulb, FaHistory, FaBell } from 'react-icons/fa';

export default function NavBar() {
  const location = useLocation();

  const navStyle = {
    padding: '20px 0',
    backgroundColor: '#111827',
    color: '#fff',
    height: '100vh',
    width: '240px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '1px solid #1f2937',
    boxSizing: 'border-box'
  };

  const logoStyle = {
    width: '160px',
    marginBottom: '30px',
    objectFit: 'contain'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    width: '100%'
  };

  const linkStyle = (path) => ({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#fff',
    padding: '12px 20px',
    borderLeft: location.pathname === path ? '4px solid #f97316' : '4px solid transparent',
    backgroundColor: location.pathname === path ? '#1f2937' : 'transparent',
    fontWeight: location.pathname === path ? '600' : 'normal',
    transition: 'all 0.2s ease',
    marginBottom: '4px'
  });

  const iconStyle = {
    marginRight: '10px',
    fontSize: '18px'
  };

  return (
    <nav style={navStyle}>
      <img src="/logo.png" alt="IMPACT Logo" style={logoStyle} />
      <ul style={listStyle}>
        <li><Link to="/" style={linkStyle('/')}><FaHome style={iconStyle}/>Home</Link></li>
        <li><Link to="/assets" style={linkStyle('/assets')}><FaCubes style={iconStyle}/>Assets</Link></li>
        <li><Link to="/contracts" style={linkStyle('/contracts')}><FaFileContract style={iconStyle}/>Contracts</Link></li>
        <li><Link to="/projects" style={linkStyle('/projects')}><FaProjectDiagram style={iconStyle}/>Projects</Link></li>
        <li><Link to="/po" style={linkStyle('/po')}><FaFileInvoice style={iconStyle}/>Purchase Orders</Link></li>
        <li><Link to="/budget-lines" style={linkStyle('/budget-lines')}><FaMoneyBillWave style={iconStyle}/>Budget Lines</Link></li>
        <li><Link to="/ownership" style={linkStyle('/ownership')}><FaWarehouse style={iconStyle}/>Ownership</Link></li>
        <li><Link to="/procurement-methods" style={linkStyle('/procurement-methods')}><FaClipboardList style={iconStyle}/>Procurement Methods</Link></li>
        <li><Link to="/funding-sources" style={linkStyle('/funding-sources')}><FaPiggyBank style={iconStyle}/>Funding Sources</Link></li>
        <li><Link to="/departments" style={linkStyle('/departments')}><FaBuilding style={iconStyle}/>Departments</Link></li>
        <li><Link to="/strategic-plans" style={linkStyle('/strategic-plans')}><FaLightbulb style={iconStyle}/>Strategic Plans</Link></li>
        <li><Link to="/audit-logs" style={linkStyle('/audit-logs')}><FaHistory style={iconStyle}/>Audit Logs</Link></li>
        <li><Link to="/alerts" style={linkStyle('/alerts')}><FaBell style={iconStyle}/>Alerts</Link></li>
      </ul>
    </nav>
  );
}
