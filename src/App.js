import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Assets from './components/Assets';
import Contracts from './components/Contracts';
import Projects from './components/Projects';
import POs from './components/POs';
import BudgetLines from './components/BudgetLines';
import Ownership from './components/Ownership';
import ProcurementMethods from './components/ProcurementMethods';
import FundingSources from './components/FundingSources';
import Departments from './components/Departments';
import StrategicPlans from './components/StrategicPlans';
import AuditLogs from './components/AuditLogs';
import Alerts from './components/Alerts';
import DashboardHome from './components/DashboardHome';

export default function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '250px',
          backgroundColor: '#1f2937',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto', // optional: scroll if sidebar content grows
        }}
      >
        <NavBar />
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#111827',
          color: '#fff',
          overflowY: 'auto', // ✅ allows scrolling only in content area
        }}
      >
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="assets" element={<Assets />} />
            <Route path="contracts" element={<Contracts />} />
            <Route path="projects" element={<Projects />} />
            <Route path="po" element={<POs />} />
            <Route path="budget-lines" element={<BudgetLines />} />
            <Route path="ownership" element={<Ownership />} />
            <Route path="procurement-methods" element={<ProcurementMethods />} />
            <Route path="funding-sources" element={<FundingSources />} />
            <Route path="departments" element={<Departments />} />
            <Route path="strategic-plans" element={<StrategicPlans />} />
            <Route path="audit-logs" element={<AuditLogs />} />
            <Route path="alerts" element={<Alerts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
