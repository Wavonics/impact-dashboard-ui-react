import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav style={{ padding: '10px', borderRight: '1px solid #ccc', height: '100vh' }}>
      <h3>IMPACT Dashboard</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/assets">Assets</Link></li>
        <li><Link to="/contracts">Contracts</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/po">Purchase Orders</Link></li>
        <li><Link to="/budget-lines">Budget Lines</Link></li>
        <li><Link to="/ownership">Ownership</Link></li>
        <li><Link to="/procurement-methods">Procurement Methods</Link></li>
        <li><Link to="/funding-sources">Funding Sources</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/strategic-plans">Strategic Plans</Link></li>
        <li><Link to="/audit-logs">Audit Logs</Link></li>
        <li><Link to="/alerts">Alerts</Link></li>
      </ul>
    </nav>
  );
}
