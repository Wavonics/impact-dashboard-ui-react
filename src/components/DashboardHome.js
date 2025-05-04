// components/DashboardHome.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardMetricCard from './DashboardMetricCard';
import DashboardChart from './DashboardChart';
import ProjectPlanningTable from './ProjectPlanningTable';
import AlertsSummary from './AlertsSummary';
import ContractRenewals from './ContractRenewals';
import AIChatBox from './AIChatBox';
import ImpactAssistant from './ImpactAssistant';
import dummyData from '../data/dummyData';

export default function DashboardHome() {
  const [metrics, setMetrics] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [renewals, setRenewals] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [profileData, setProfileData] = useState({
    displayName: '',
    photoURL: '',
    profileComplete: false
  });
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setMetrics(dummyData.metrics);
      setAlerts(dummyData.alerts);
      setRenewals(dummyData.contractRenewals);
      setProjects(dummyData.projects);
      setActivities(dummyData.activities);
      setProfileData(dummyData.userProfile);
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

  const greetingRow = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #f97316'
  };

  const greetingStyle = {
    fontSize: '22px',
    fontWeight: '700',
    marginBottom: '4px'
  };

  const badgeStyle = {
    backgroundColor: profileData.profileComplete ? '#10b981' : '#ef4444',
    color: '#fff',
    borderRadius: '12px',
    fontSize: '10px',
    padding: '2px 6px',
    fontWeight: '600'
  };

  const subtitleStyle = {
    fontSize: '14px',
    color: '#9ca3af',
    marginBottom: '12px'
  };

  const quickActionsStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '12px'
  };

  const quickButton = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    textDecoration: 'none'
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
      {/* Main column */}
      <div style={mainStyle}>
        <div style={greetingRow}>
          {profileData.photoURL && (
            <img src={profileData.photoURL} alt="Profile" style={avatarStyle} />
          )}
          <div>
            <h1 style={greetingStyle}>Welcome back, {profileData.displayName}!</h1>
            <span style={badgeStyle}>
              {profileData.profileComplete ? 'Profile Complete' : 'Incomplete Profile'}
            </span>
          </div>
        </div>

        <p style={subtitleStyle}>Your central hub for IT Procurement, Budget Tracking, and Contract Visibility.</p>
        <p style={lastUpdatedStyle}>Last updated: {lastUpdated}</p>

        <div style={quickActionsStyle}>
          <Link to="/contracts/new" style={quickButton}>Add Contract</Link>
          <Link to="/po/new" style={quickButton}>Create PO</Link>
          <Link to="/projects/new" style={quickButton}>Add Project</Link>
        </div>

        <h2 style={sectionTitle}>Key Metrics</h2>
        <div style={metricsGrid}>
          {metrics.map((m) => (
            <Link key={m.label} to={m.link || '#'} style={{ textDecoration: 'none' }}>
              <DashboardMetricCard
                label={m.label}
                value={m.value}
                iconKey={m.iconKey}
                color={m.color}
                badge={m.badge}
              />
            </Link>
          ))}
        </div>

        <h2 style={sectionTitle}>Trends & Insights</h2>
        <DashboardChart />

        <h2 style={sectionTitle}>Project Planning</h2>
        <ProjectPlanningTable projects={projects} />

        <h2 style={sectionTitle}>Recent Activity</h2>
        <ul style={{
          fontSize: '14px',
          backgroundColor: '#1f2937',
          padding: '10px',
          borderRadius: '8px'
        }}>
          {activities.map((a, idx) => (
            <li key={idx} style={{
              marginBottom: '6px',
              borderBottom: '1px solid #374151',
              paddingBottom: '4px'
            }}>
              {a}
            </li>
          ))}
          <li>
            <Link to="/activity" style={{ color: '#f97316', fontSize: '12px' }}>View All Activity</Link>
          </li>
        </ul>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2 style={sectionTitle}>Alerts Summary</h2>
        <AlertsSummary alerts={alerts} />

        <h2 style={sectionTitle}>Upcoming Contract Renewals</h2>
        <ContractRenewals renewals={renewals} />
      </div>

      <AIChatBox
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000
        }}
        buttonLabel="Ask IMPACT"
      />
    </div>
  );
}
