// data/dummyData.js
const dummyData = {
  metrics: [
    { label: 'Total Budget', value: '$5,000,000', icon: 'money', color: '#f97316' },
    { label: 'Active Contracts', value: '87', icon: 'contracts', color: '#3b82f6' },
    { label: 'Procurement Methods', value: '5', icon: 'procurement', color: '#10b981' },
    { label: 'Active Projects', value: '12', icon: 'projects', color: '#ef4444' },
  ],
  alerts: [
    { id: 1, message: 'Contract #123 expires in 5 days.' },
    { id: 2, message: 'Budget overrun detected in Dept A.' },
  ],
  contractRenewals: [
    { contractId: 'C-001', vendor: 'ABC Corp', renewalDate: '2025-05-10' },
    { contractId: 'C-002', vendor: 'XYZ Inc', renewalDate: '2025-05-15' },
  ],
  chartData: [
    { department: 'Finance', budget: 1000000, actual: 950000 },
    { department: 'IT', budget: 800000, actual: 850000 },
    { department: 'Public Works', budget: 1200000, actual: 1100000 },
    { department: 'Parks', budget: 600000, actual: 500000 },
  ],
  projects: [
    { id: 'PIP-01', name: 'Network Upgrade', type: 'PIP', status: 'In Progress' },
    { id: 'CIP-05', name: 'New City Hall', type: 'CIP', status: 'Planning' },
    { id: 'ENH-02', name: 'ERP Enhancement', type: 'Enhancement', status: 'Completed' },
  ],
};

export default dummyData;
