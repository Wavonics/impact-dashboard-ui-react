import React from 'react';

export default function AIChatBox({ style }) {
  return (
    <div style={{
      background: '#1f2937',
      color: '#fff',
      padding: '15px',
      borderRadius: '8px',
      width: '300px',
      height: '200px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      ...style
    }}>
      <p>🤖 AI Assistant Chat Placeholder</p>
    </div>
  );
}
