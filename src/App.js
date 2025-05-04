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
import DashboardHome from './components/DashboardHome'; // ✅ a simple placeholder dashboard home page

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div style={{ flex: 1, padding: '20px', display: 'block' }}>
        <Routes>
          <Route index element={<DashboardHome />} />  {/* ✅ <-- THIS handles /dashboard */}
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
  );
}
