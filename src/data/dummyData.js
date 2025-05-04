// src/data/dummyData.js
const dummyData = {
  metrics: [
    { label: 'Total Assets', value: 120, color: '#00ff00' },
    { label: 'Total Contracts', value: 58, color: '#f97316' },
    { label: 'Active Projects', value: 14, color: '#00ffff' },
    { label: 'Open POs', value: 22, color: '#0000ff' },
    { label: 'Budget Utilization', value: 75, color: '#10b981' },
    { label: 'Budget Line Utilization', value: 82, color: '#fb923c' },
  ],
  alerts: [
    { type: 'Critical', date: '2025-04-29', snippet: 'PO #123 exceeded limit.' },
    { type: 'Warning', date: '2025-04-28', snippet: 'Contract expiring soon.' },
  ],
  contractRenewals: [
    { contract: 'Vendor ABC', expiryDate: '2025-05-30', daysLeft: 31 },
    { contract: 'Vendor XYZ', expiryDate: '2025-06-15', daysLeft: 47 },
  ],
  projects: [
    { name: 'PIP-001 Upgrade', status: 'In Progress' },
    { name: 'Enhancement-004', status: 'Planned' },
    { name: 'CIP-12 Water Plant', status: 'Completed' },
  ],
  activities: [
    'Added Contract ABC',
    'Approved PO #456',
    'Updated Project CIP-12',
    'Added new Asset IT-Server',
    'User John updated profile',
  ],
  // 🟢 FIX: add user object
  user: {
    displayName: 'Nicholas',
    profileComplete: true,
    unreadAlerts: 2,
    profilePicture: '/avatar-placeholder.png'  // path to profile picture if you have one
  }
};

export default dummyData;
