// components/DashboardHome.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardMetricCard from './DashboardMetricCard';
import DashboardChart from './DashboardChart';
import ProjectPlanningTable from './ProjectPlanningTable';
import AlertsSummary from './AlertsSummary';
import ContractRenewals from './ContractRenewals';
import ImpactAssistant from './ImpactAssistant';
import AIChatBox from './AIChatBox';
import MetricDetailsModal from './MetricDetailsModal';  // ✅ import modal
import dummyData from '../data/dummyData';
import '../DashboardWidgets.css';

export default function DashboardHome() {
  const [metrics, setMetrics] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [renewals, setRenewals] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [expandedGroups, setExpandedGroups] = useState({
    procurement: true,
    budget: true,
    asset: true,
    other: true
  });

  const [selectedMetric, setSelectedMetric] = useState(null); // ✅ modal state

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setMetrics(dummyData.metrics);
      setAlerts(dummyData.alerts);
      setRenewals(dummyData.contractRenewals);
      setProjects(dummyData.projects);
      setActivities(dummyData.activities || []);
      setProfileData(dummyData.userProfile || { displayName: 'User', profileComplete: false });
      setLastUpdated(new Date().toLocaleString());
      setLoading(false);
    }, 1000);
  }, []);

  const toggleGroup = (group) => {
    setExpandedGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#111827',
    color: '#fff',
    minHeight: '100vh'
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

  const metricsGroupStyle = {
    backgroundColor: '#1f2937',
    border: '1px solid #374151',
    borderRadius: '12px',
    padding: '10px',
    marginBottom: '20px'
  };

  const iconKeyMap = {
    'Total Contracts': 'contracts',
    'Open POs': 'po',
    'Budget Utilization': 'money',
    'Budget Line Utilization': 'money',
    'Total Assets': 'assets'
  };

  const procurementMetrics = metrics.filter(m => ['Total Contracts', 'Open POs'].includes(m.label));
  const budgetMetrics = metrics.filter(m => ['Budget Utilization', 'Budget Line Utilization'].includes(m.label));
  const assetMetrics = metrics.filter(m => ['Total Assets'].includes(m.label));
  const additionalMetrics = metrics.filter(m => !['Total Contracts', 'Open POs', 'Budget Utilization', 'Budget Line Utilization', 'Total Assets'].includes(m.label));

  const handleMetricClick = (metric) => {
    setSelectedMetric(metric); // ✅ open modal
  };

  const renderMetricGroup = (title, metricsArray, groupKey) => (
    <div style={metricsGroupStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={sectionTitle}>{title}</h2>
        <button
          onClick={() => toggleGroup(groupKey)}
          style={{
            backgroundColor: '#f97316',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '12px',
            padding: '4px 8px',
            cursor: 'pointer'
          }}
        >
          {expandedGroups[groupKey] ? 'Collapse' : 'Expand'}
        </button>
      </div>
      {expandedGroups[groupKey] && (
        <div style={metricsGrid}>
          {metricsArray.map(m => (
            <DashboardMetricCard
              key={m.label}
              label={m.label}
              value={m.value}
              iconKey={iconKeyMap[m.label] || 'clipboardList'}
              color={m.color}
              badge={m.badge}
              tooltip={`Click for details about ${m.label}`}
              onClick={() => handleMetricClick(m)} // ✅ trigger modal
            />
          ))}
        </div>
      )}
    </div>
  );

  if (loading) {
    return (
      <div style={{ ...containerStyle, justifyContent: 'center', alignItems: 'center' }}>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {profileData?.photoURL && (
            <img src={profileData.photoURL} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
          )}
          <h1 style={{ fontSize: '22px', fontWeight: '700' }}>
            Welcome back, {profileData?.displayName || 'User'}!
          </h1>
          <span style={{
            backgroundColor: profileData?.profileComplete ? '#10b981' : '#ef4444',
            color: '#fff',
            borderRadius: '12px',
            fontSize: '10px',
            padding: '2px 6px',
            fontWeight: '600'
          }}>{profileData?.profileComplete ? 'Profile Complete' : 'Incomplete Profile'}</span>
        </div>

        <p style={{ fontSize: '14px', color: '#9ca3af' }}>
          Your central hub for IT Procurement, Budget Tracking, and Contract Visibility.
        </p>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '-10px', marginBottom: '10px' }}>
          Last updated: {lastUpdated}
        </p>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <Link to="/contracts/new" style={{ backgroundColor: '#f97316', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '12px', textDecoration: 'none' }}>Add Contract</Link>
          <Link to="/po/new" style={{ backgroundColor: '#f97316', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '12px', textDecoration: 'none' }}>Create PO</Link>
          <Link to="/projects/new" style={{ backgroundColor: '#f97316', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '12px', textDecoration: 'none' }}>Add Project</Link>
        </div>

        {renderMetricGroup('Procurement Metrics', procurementMetrics, 'procurement')}
        {renderMetricGroup('Budget Metrics', budgetMetrics, 'budget')}
        {renderMetricGroup('Asset Metrics', assetMetrics, 'asset')}
        {additionalMetrics.length > 0 && renderMetricGroup('Other Metrics', additionalMetrics, 'other')}

        <h2 style={sectionTitle}>Trends & Insights</h2>
        <DashboardChart />

        <h2 style={sectionTitle}>Project Planning</h2>
        <ProjectPlanningTable projects={projects} />

        <h2 style={sectionTitle}>Recent Activity</h2>
        <ul style={{ fontSize: '14px', backgroundColor: '#1f2937', padding: '10px', borderRadius: '8px' }}>
          {activities.length > 0 ? activities.map((a, idx) => (
            <li key={idx} style={{ marginBottom: '6px', borderBottom: '1px solid #374151', paddingBottom: '4px' }}>{a}</li>
          )) : (
            <li style={{ color: '#9ca3af' }}>No recent activity</li>
          )}
          <li><Link to="/activity" style={{ color: '#f97316', fontSize: '12px' }}>View All Activity</Link></li>
        </ul>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="widget-container"><AlertsSummary alerts={alerts} /></div>
        <div className="widget-container"><ContractRenewals renewals={renewals} /></div>
        <div className="widget-container"><ImpactAssistant /></div>
        <div className="widget-container"><AIChatBox /></div>
      </div>

      {/* ✅ modal rendering */}
      {selectedMetric && (
        <MetricDetailsModal
          metric={selectedMetric}
          onClose={() => setSelectedMetric(null)}
          onNavigate={() => {
            setSelectedMetric(null);
            navigate(`/metrics/${selectedMetric.label.replace(/\s+/g, '-').toLowerCase()}`);
          }}
        />
      )}
    </div>
  );
}
