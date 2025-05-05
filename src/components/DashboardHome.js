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
import MetricDetailsModal from './MetricDetailsModal';
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

  const [selectedMetric, setSelectedMetric] = useState(null);

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
    console.log('Clicked metric:', metric); // DEBUG
    setSelectedMetric(metric);
  };

  const renderMetricGroup = (title, metricsArray, groupKey) => (
    <div style={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '12px', padding: '10px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: '#f97316', fontSize: '18px', fontWeight: '600', margin: '10px 0' }}>{title}</h2>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {metricsArray.map(m => (
            <DashboardMetricCard
              key={m.label}
              metric={{ ...m, iconKey: iconKeyMap[m.label] || m.iconKey }} // ✅ pass entire metric + override iconKey if mapped
              onClick={() => handleMetricClick(m)}
            />
          ))}
        </div>
      )}
    </div>
  );

  if (loading) {
    return (
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', backgroundColor: '#111827', color: '#fff' }}>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '20px', padding: '20px', backgroundColor: '#111827', color: '#fff', minHeight: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Header + Profile */}
        {/* ... same header code ... */}

        {renderMetricGroup('Procurement Metrics', procurementMetrics, 'procurement')}
        {renderMetricGroup('Budget Metrics', budgetMetrics, 'budget')}
        {renderMetricGroup('Asset Metrics', assetMetrics, 'asset')}
        {additionalMetrics.length > 0 && renderMetricGroup('Other Metrics', additionalMetrics, 'other')}

        <h2 style={{ color: '#f97316', fontSize: '18px', fontWeight: '600', margin: '10px 0' }}>Trends & Insights</h2>
        <DashboardChart />

        <h2 style={{ color: '#f97316', fontSize: '18px', fontWeight: '600', margin: '10px 0' }}>Project Planning</h2>
        <ProjectPlanningTable projects={projects} />

        {/* ... activities list ... */}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="widget-container"><AlertsSummary alerts={alerts} /></div>
        <div className="widget-container"><ContractRenewals renewals={renewals} /></div>
        <div className="widget-container"><ImpactAssistant /></div>
        <div className="widget-container"><AIChatBox /></div>
      </div>

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
