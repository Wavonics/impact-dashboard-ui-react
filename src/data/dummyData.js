// data/dummyData.js
export default {
  metrics: [
    { label: 'Total Contracts', value: 124, icon: '📄', color: '#f97316' },
    { label: 'Active Projects', value: 32, icon: '🚧', color: '#10b981' },
    { label: 'Upcoming Renewals', value: 5, icon: '⏰', color: '#facc15' },
    { label: 'Open Alerts', value: 3, icon: '⚠️', color: '#ef4444' },
  ],
  alerts: [
    { id: 1, message: 'Contract #123 expires in 5 days.' },
    { id: 2, message: 'Budget threshold exceeded for Project X.' },
    { id: 3, message: 'Vendor ABC missing compliance doc.' },
  ],
  contractRenewals: [
    { id: 1, contract: 'Contract #101', due: '2025-05-10' },
    { id: 2, contract: 'Contract #112', due: '2025-06-01' },
  ],
  projects: [
    { id: 1, name: 'Water Treatment CIP', type: 'CIP', status: 'In Progress' },
    { id: 2, name: 'CRM Enhancement', type: 'Enhancement', status: 'Planning' },
    { id: 3, name: 'Cloud Migration PIP', type: 'PIP', status: 'Completed' },
  ],
};

