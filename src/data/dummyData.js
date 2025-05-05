const dummyData = {
  metrics: [
    { 
      label: 'Total Assets', value: 120, iconKey: 'cubes', color: '#00ff00', tooltip: 'Total assets tracked in the system',
      chartType: 'bar',
      xAxisKey: 'category', yAxisKey: 'count',
      chartData: [
        { category: 'Servers', count: 40 },
        { category: 'Laptops', count: 50 },
        { category: 'Network', count: 30 }
      ]
    },
    { 
      label: 'Total Contracts', value: 58, iconKey: 'fileContract', color: '#f97316', tooltip: 'Total vendor contracts managed',
      chartType: 'line',
      xAxisKey: 'quarter', yAxisKey: 'contracts',
      chartData: [
        { quarter: 'Q1', contracts: 10 },
        { quarter: 'Q2', contracts: 15 },
        { quarter: 'Q3', contracts: 20 },
        { quarter: 'Q4', contracts: 13 }
      ]
    },
    { 
      label: 'Active Projects', value: 14, iconKey: 'projectDiagram', color: '#00ffff', tooltip: 'Ongoing strategic and CIP projects',
      chartType: 'pie',
      xAxisKey: null, yAxisKey: null,
      chartData: [
        { name: 'In Progress', value: 8 },
        { name: 'Planned', value: 4 },
        { name: 'Completed', value: 2 }
      ]
    },
    { 
      label: 'Open POs', value: 22, iconKey: 'fileInvoice', color: '#0000ff', tooltip: 'Purchase Orders awaiting processing',
      chartType: 'bar',
      xAxisKey: 'month', yAxisKey: 'poCount',
      chartData: [
        { month: 'Jan', poCount: 3 },
        { month: 'Feb', poCount: 5 },
        { month: 'Mar', poCount: 7 },
        { month: 'Apr', poCount: 4 }
      ]
    },
    { 
      label: 'Budget Utilization', value: 75, iconKey: 'moneyBillWave', color: '#10b981', tooltip: 'Overall budget utilization (%)',
      chartType: 'line',
      xAxisKey: 'quarter', yAxisKey: 'utilization',
      chartData: [
        { quarter: 'Q1', utilization: 60 },
        { quarter: 'Q2', utilization: 70 },
        { quarter: 'Q3', utilization: 80 },
        { quarter: 'Q4', utilization: 75 }
      ]
    },
    { 
      label: 'Budget Line Utilization', value: 82, iconKey: 'moneyBillWaveAlt', color: '#fb923c', tooltip: 'Budget line-level utilization (%)',
      chartType: 'bar',
      xAxisKey: 'line', yAxisKey: 'utilization',
      chartData: [
        { line: 'Line A', utilization: 90 },
        { line: 'Line B', utilization: 85 },
        { line: 'Line C', utilization: 70 }
      ]
    },
    { 
      label: 'Expiring Contracts (30d)', value: 5, iconKey: 'fileContract', color: '#facc15', tooltip: 'Contracts expiring within 30 days', badge: '⚠️',
      chartType: 'pie',
      xAxisKey: null, yAxisKey: null,
      chartData: [
        { name: 'Vendor A', value: 2 },
        { name: 'Vendor B', value: 1 },
        { name: 'Vendor C', value: 2 }
      ]
    },
    { 
      label: 'Pending Procurement Requests', value: 8, iconKey: 'clipboardList', color: '#fb923c', tooltip: 'Procurement requests not finalized',
      chartType: 'bar',
      xAxisKey: 'department', yAxisKey: 'requests',
      chartData: [
        { department: 'IT', requests: 3 },
        { department: 'Finance', requests: 2 },
        { department: 'Public Works', requests: 3 }
      ]
    },
    { 
      label: 'Registered Vendors', value: 132, iconKey: 'building', color: '#8b5cf6', tooltip: 'Vendors registered in the procurement system',
      chartType: 'line',
      xAxisKey: 'month', yAxisKey: 'vendorCount',
      chartData: [
        { month: 'Jan', vendorCount: 120 },
        { month: 'Feb', vendorCount: 125 },
        { month: 'Mar', vendorCount: 130 },
        { month: 'Apr', vendorCount: 132 }
      ]
    },
    { 
      label: 'Total Spend YTD', value: '$4.5M', iconKey: 'moneyBill', color: '#0ea5e9', tooltip: 'Total year-to-date spend across contracts and POs',
      chartType: 'bar',
      xAxisKey: 'quarter', yAxisKey: 'spend',
      chartData: [
        { quarter: 'Q1', spend: 1000000 },
        { quarter: 'Q2', spend: 1200000 },
        { quarter: 'Q3', spend: 1300000 },
        { quarter: 'Q4', spend: 1000000 }
      ]
    },
    { 
      label: 'Avg. PO Processing Time', value: '7d', iconKey: 'clock', color: '#ec4899', tooltip: 'Average PO processing time in days',
      chartType: 'line',
      xAxisKey: 'month', yAxisKey: 'days',
      chartData: [
        { month: 'Jan', days: 8 },
        { month: 'Feb', days: 7 },
        { month: 'Mar', days: 6 },
        { month: 'Apr', days: 7 }
      ]
    },
    { 
      label: 'Compliance Issues', value: 1, iconKey: 'exclamationTriangle', color: '#ef4444', tooltip: 'Contracts flagged for compliance review', badge: '⚠️',
      chartType: 'pie',
      xAxisKey: null, yAxisKey: null,
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
