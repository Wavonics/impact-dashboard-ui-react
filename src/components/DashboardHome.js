// components/DashboardHome.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    // Simulate loading from dummy data
    setTimeout(() => {
      setMetrics(dummyData.metrics);
      setAlerts(dummyData.alerts);
      setRenewals(dummyData.contractRenewals);
      setProjects(dummyData.projects);
      setLastUpdated(new Date().toLocaleString());
      setLoading(false);
    }, 1000);
  }, []);

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#111827',
    color: '#fff',
    minHeight: '100vh',
    position: 'relative'
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

  const sectionTitle = {
    color: '#f97316',
    fontSize: '18px',
    fontWeight: '600',
    margin: '10px 0'
  };

  const lastUpdatedStyle = {
    fontSize: '12px',
    color: '#9ca3af',
    marginTop: '-10px',
    marginBottom: '10px'
  };

  const greetingStyle = {
    fontSize: '22px',
    fontWeight: '700',
    marginBottom: '10px'
  };

  if (loading) {
    return (
      <div style={{ ...containerStyle, justifyContent: 'center', alignItems: 'center' }}>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={mainStyle}>
        <h1 style={greetingStyle}>Welcome back, User!</h1>
        <p style={lastUpdatedStyle}>Last updated: {lastUpdated}</p>

        <h2 style={sectionTitle}>Key Metrics</h2>
        <div style={metricsGrid}>
          {metrics.map((m) => (
            <Link key={m.label} to={m.link || '#'} style={{ textDecoration: 'none' }}>
              <DashboardMetricCard label={m.label} value={m.value} iconKey={m.iconKey} color={m.color} />
            </Link>
          ))}
        </div>

        <h2 style={sectionTitle}>Trends & Insights</h2>
        <DashboardChart />

        <h2 style={sectionTitle}>Project Planning</h2>
        <ProjectPlanningTable projects={projects} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={sectionTitle}>Alerts Summary</h2>
        <AlertsSummary alerts={alerts} />

        <h2 style={sectionTitle}>Upcoming Contract Renewals</h2>
        <ContractRenewals renewals={renewals} />
      </div>

      {/* Fixed-position AI Chat Box */}
      <AIChatBox style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000
      }} />
    </div>
  );
}
