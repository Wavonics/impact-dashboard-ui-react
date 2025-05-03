// components/DashboardHome.js
import React, { useState, useEffect } from 'react';
import DashboardMetricCard from './DashboardMetricCard';
import DashboardChart from './DashboardChart';
import ProjectPlanningTable from './ProjectPlanningTable';
import AlertsSummary from './AlertsSummary';
import ContractRenewals from './ContractRenewals';
import AIChatBox from './AIChatBox';
import dummyData from '../data/dummyData';

export default function DashboardHome() {
  const [metrics, setMetrics] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [renewals, setRenewals] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate loading from dummy data
    setMetrics(dummyData.metrics);
    setAlerts(dummyData.alerts);
    setRenewals(dummyData.contractRenewals);
    setProjects(dummyData.projects);
  }, []);

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#111827',
    color: '#fff',
    minHeight: '100vh'
  };

  const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const metricsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px'
  };

  return (
    <div style={containerStyle}>
      <div style={mainStyle}>
        <div style={metricsGrid}>
          {metrics.map((m) => (
            <DashboardMetricCard key={m.label} label={m.label} value={m.value} icon={m.icon} color={m.color} />
          ))}
        </div>
        <DashboardChart />
        <ProjectPlanningTable projects={projects} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <AlertsSummary alerts={alerts} />
        <ContractRenewals renewals={renewals} />
      </div>
      <AIChatBox />
    </div>
  );
}
