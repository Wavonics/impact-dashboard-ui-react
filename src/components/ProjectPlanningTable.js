import React from 'react';

export default function ProjectPlanningTable({ projects }) {
  return (
    <div style={{
      background: '#1f2937',
      padding: '20px',
      borderRadius: '8px'
    }}>
      <h3 style={{ marginBottom: '10px' }}>Project Planning Table</h3>
      <ul>
        {projects.map((p, idx) => (
          <li key={idx}>{p.name} - {p.status}</li>
        ))}
      </ul>
    </div>
  );
}
