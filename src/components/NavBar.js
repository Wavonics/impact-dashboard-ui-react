import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCubes, FaFileContract, FaProjectDiagram, FaFileInvoice, FaMoneyBillWave, FaWarehouse, FaClipboardList, FaPiggyBank, FaBuilding, FaLightbulb, FaHistory, FaBell } from 'react-icons/fa';

export default function NavBar() {
  const navStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    height: '100vh',
    width: '200px',
    borderRight: '1px solid #ccc',
    flexShrink: 0
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#333',
    margin: '10px 0',
    padding: '5px 0'
  };

  const iconStyle = {
    marginRight: '8px'
  };

  return (
    <nav style={navStyle}>
      <h3>IMPACT Dashboard</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/" style={linkStyle}><FaHome style={iconStyle}/>Home</Link></li>
        <li><Link to="/assets" style={linkStyle}><FaCubes style={iconStyle}/>Assets</Link></li>
        <li><Link to="/contracts" style={linkStyle}><FaFileContract style={iconStyle}/>Contracts</Link></li>
        <li><Link to="/projects" style={linkStyle}><FaProjectDiagram style={iconStyle}/>Projects</Link></li>
        <li><Link to="/po" style={linkStyle}><FaFileInvoice style={iconStyle}/>Purchase Orders</Link></li>
        <li><Link to="/budget-lines" style={linkStyle}><FaMoneyBillWave style={iconStyle}/>Budget Lines</Link></li>
        <li><Link to="/ownership" style={linkStyle}><FaWarehouse style={iconStyle}/>Ownership</Link></li>
        <li><Link to="/procurement-methods" style={linkStyle}><FaClipboardList style={iconStyle}/>Procurement Methods</Link></li>
        <li><Link to="/funding-sources" style={linkStyle}><FaPiggyBank style={iconStyle}/>Funding Sources</Link></li>
        <li><Link to="/departments" style={linkStyle}><FaBuilding style={iconStyle}/>Departments</Link></li>
        <li><Link to="/strategic-plans" style={linkStyle}><FaLightbulb style={iconStyle}/>Strategic Plans</Link></li>
        <li><Link to="/audit-logs" style={linkStyle}><FaHistory style={iconStyle}/>Audit Logs</Link></li>
        <li><Link to="/alerts" style={linkStyle}><FaBell style={iconStyle}/>Alerts</Link></li>
      </ul>
    </nav>
  );
}
