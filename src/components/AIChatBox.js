// components/AIChatBox.js
import React, { useState } from 'react';

export default function AIChatBox() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const fakeAIQuery = async (input) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Insight: Found 3 contracts matching "${input}"`), 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const result = await fakeAIQuery(query);
    setResponse(result);
    setLoading(false);
  };

  const containerStyle = {
    backgroundColor: '#1f2937',
    borderRadius: '12px',
    padding: '20px',
    color: '#fff'
  };

  return (
    <div style={containerStyle}>
      <h3>AI Assistant</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search contracts, e.g., 'expiring soon'"
          style={{
            padding: '10px',
            width: '100%',
            borderRadius: '6px',
            border: '1px solid #374151',
            marginBottom: '10px'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#f97316',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Searching…' : 'Ask AI'}
        </button>
      </form>
      {response && (
        <div style={{ marginTop: '10px', backgroundColor: '#111827', padding: '10px', borderRadius: '8px' }}>
          {response}
        </div>
      )}
    </div>
  );
}
