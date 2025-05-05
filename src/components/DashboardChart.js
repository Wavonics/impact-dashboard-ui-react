// components/DashboardChart.js
import React from 'react';
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#f97316', '#3b82f6', '#10b981', '#eab308', '#ef4444'];

export default function DashboardChart({ data, chartType = 'bar', title = 'Metric Details' }) {
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="x" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#f97316" />
          </LineChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Tooltip />
            <Legend />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#f97316"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        );
      case 'bar':
      default:
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="x" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Bar dataKey="y" fill="#f97316" />
          </BarChart>
        );
    }
  };

  return (
    <div style={{ backgroundColor: '#1f2937', borderRadius: '12px', padding: '20px', color: '#fff' }}>
      <h3 style={{ marginBottom: '10px' }}>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
}
