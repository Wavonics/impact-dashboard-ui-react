const dummyData = {
  metrics: [
    { 
      label: 'Total Assets', value: 120, iconKey: 'cubes', color: '#00ff00', tooltip: 'Total assets tracked in the system',
      chartType: 'bar',
      chartData: [
        { x: 'Servers', y: 40 },
        { x: 'Laptops', y: 50 },
        { x: 'Network', y: 30 }
      ]
    },
    { 
      label: 'Total Contracts', value: 58, iconKey: 'fileContract', color: '#f97316', tooltip: 'Total vendor contracts managed',
      chartType: 'line',
      chartData: [
        { x: 'Q1', y: 10 },
        { x: 'Q2', y: 15 },
        { x: 'Q3', y: 20 },
        { x: 'Q4', y: 13 }
      ]
    },
    { 
      label: 'Active Projects', value: 14, iconKey: 'projectDiagram', color: '#00ffff', tooltip: 'Ongoing strategic and CIP projects',
      chartType: 'pie',
      chartData: [
        { name: 'In Progress', value: 8 },
        { name: 'Planned', value: 4 },
        { name: 'Completed', value: 2 }
      ]
    },
    { 
      label: 'Open POs', value: 22, iconKey: 'fileInvoice', color: '#0000ff', tooltip: 'Purchase Orders awaiting processing',
      chartType: 'bar',
      chartData: [
        { x: 'Jan', y: 3 },
        { x: 'Feb', y: 5 },
        { x: 'Mar', y: 7 },
        { x: 'Apr', y: 4 }
      ]
    },
    { 
      label: 'Budget Utilization', value: 75, iconKey: 'moneyBillWave', color: '#10b981', tooltip: 'Overall budget utilization (%)',
      chartType: 'line',
      chartData: [
        { x: 'Q1', y: 60 },
        { x: 'Q2', y: 70 },
        { x: 'Q3', y: 80 },
        { x: 'Q4', y: 75 }
      ]
    },
    { 
      label: 'Budget Line Utilization', value: 82, iconKey: 'moneyBillWaveAlt', color: '#fb923c', tooltip: 'Budget line-level utilization (%)',
      chartType: 'bar',
      chartData: [
        { x: 'Line A', y: 90 },
        { x: 'Line B', y: 85 },
        { x: 'Line C', y: 70 }
      ]
    },
    { 
      label: 'Expiring Contracts (30d)', value: 5, iconKey: 'fileContract', color: '#facc15', tooltip: 'Contracts expiring within 30 days', badge: '⚠️',
      chartType: 'pie',
      chartData: [
        { name: 'Vendor A', value: 2 },
        { name: 'Vendor B', value: 1 },
        { name: 'Vendor C', value: 2 }
      ]
    },
    { 
      label: 'Pending Procurement Requests', value: 8, iconKey: 'clipboardList', color: '#fb923c', tooltip: 'Procurement requests not finalized',
      chartType: 'bar',
      chartData: [
        { x: 'IT', y: 3 },
        { x: 'Finance', y: 2 },
        { x: 'Public Works', y: 3 }
      ]
    },
    { 
      label: 'Registered Vendors', value: 132, iconKey: 'building', color: '#8b5cf6', tooltip: 'Vendors registered in the procurement system',
      chartType: 'line',
      chartData: [
        { x: 'Jan', y: 120 },
        { x: 'Feb', y: 125 },
        { x: 'Mar', y: 130 },
        { x: 'Apr', y: 132 }
      ]
    },
    { 
      label: 'Total Spend YTD', value: '$4.5M', iconKey: 'moneyBill', color: '#0ea5e9', tooltip: 'Total year-to-date spend across contracts and POs',
      chartType: 'bar',
      chartData: [
        { x: 'Q1', y: 1000000 },
        { x: 'Q2', y: 1200000 },
        { x: 'Q3', y: 1300000 },
        { x: 'Q4', y: 1000000 }
      ]
    },
    { 
      label: 'Avg. PO Processing Time', value: '7d', iconKey: 'clock', color: '#ec4899', tooltip: 'Average PO processing time in days',
      chartType: 'line',
      chartData: [
        { x: 'Jan', y: 8 },
        { x: 'Feb', y: 7 },
        { x: 'Mar', y: 6 },
        { x: 'Apr', y: 7 }
      ]
    },
    { 
      label: 'Compliance Issues', value: 1, iconKey: 'exclamationTriangle', color: '#ef4444', tooltip: 'Contracts flagged for compliance review', badge: '⚠️',
      chartType: 'pie',
      chartData: [
        { name: 'Open', value: 1 },
        { name: 'Resolved', value: 0 }
      ]
    }
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
