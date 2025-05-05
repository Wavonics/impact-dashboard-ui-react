// components/DashboardChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardChart({ data, title = 'Budget vs Actual' }) {
  return (
    <div style={{ backgroundColor: '#1f2937', borderRadius: '12px', padding: '20px', color: '#fff' }}>
      <h3 style={{ marginBottom: '10px' }}>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="department" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Bar dataKey="budget" fill="#f97316" />
          <Bar dataKey="actual" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
