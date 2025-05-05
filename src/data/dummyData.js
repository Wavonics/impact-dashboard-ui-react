const dummyData = {
  metrics: [
    { label: 'Total Assets', value: 120, iconKey: 'cubes', color: '#00ff00', tooltip: 'Total assets tracked in the system' },
    { label: 'Total Contracts', value: 58, iconKey: 'fileContract', color: '#f97316', tooltip: 'Total vendor contracts managed' },
    { label: 'Active Projects', value: 14, iconKey: 'projectDiagram', color: '#00ffff', tooltip: 'Ongoing strategic and CIP projects' },
    { label: 'Open POs', value: 22, iconKey: 'fileInvoice', color: '#0000ff', tooltip: 'Purchase Orders awaiting processing' },
    { label: 'Budget Utilization', value: 75, iconKey: 'moneyBillWave', color: '#10b981', tooltip: 'Overall budget utilization (%)' },
    { label: 'Budget Line Utilization', value: 82, iconKey: 'moneyBillWaveAlt', color: '#fb923c', tooltip: 'Budget line-level utilization (%)' },
    { label: 'Expiring Contracts (30d)', value: 5, iconKey: 'fileContract', color: '#facc15', tooltip: 'Contracts expiring within 30 days', badge: '⚠️' },
    { label: 'Pending Procurement Requests', value: 8, iconKey: 'clipboardList', color: '#fb923c', tooltip: 'Procurement requests not finalized' },
    { label: 'Registered Vendors', value: 132, iconKey: 'building', color: '#8b5cf6', tooltip: 'Vendors registered in the procurement system' },
    { label: 'Total Spend YTD', value: '$4.5M', iconKey: 'moneyBill', color: '#0ea5e9', tooltip: 'Total year-to-date spend across contracts and POs' },
    { label: 'Avg. PO Processing Time', value: '7d', iconKey: 'clock', color: '#ec4899', tooltip: 'Average PO processing time in days' },
    { label: 'Compliance Issues', value: 1, iconKey: 'exclamationTriangle', color: '#ef4444', tooltip: 'Contracts flagged for compliance review', badge: '⚠️' }
  ],
  alerts: [
    { type: 'Critical', date: '2025-04-29', snippet: 'PO #123 exceeded limit.' },
    { type: 'Warning', date: '2025-04-28', snippet: 'Contract expiring soon.' }
  ],
  contractRenewals: [
    { contract: 'Vendor ABC', expiryDate: '2025-05-30', daysLeft: 31 },
    { contract: 'Vendor XYZ', expiryDate: '2025-06-15', daysLeft: 47 }
  ],
  projects: [
    { name: 'PIP-001 Upgrade', status: 'In Progress' },
    { name: 'Enhancement-004', status: 'Planned' },
    { name: 'CIP-12 Water Plant', status: 'Completed' }
  ],
  activities: [
    'Added Contract ABC',
    'Approved PO #456',
    'Updated Project CIP-12',
    'Added new Asset IT-Server',
    'User John updated profile'
  ],
  userProfile: {
    displayName: 'Nicholas',
    photoURL: '/avatar.png',
    profileComplete: true
  },
  chartData: [
    { department: 'IT', budget: 50000, actual: 42000 },
    { department: 'Finance', budget: 40000, actual: 38000 },
    { department: 'HR', budget: 30000, actual: 25000 },
    { department: 'Procurement', budget: 35000, actual: 33000 },
    { department: 'Public Works', budget: 60000, actual: 58000 }
  ]
};

export default dummyData;
