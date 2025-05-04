// src/components/ImpactAssistant.jsx
import React, { useState, useEffect } from 'react';
import './DashboardWidgets.css'; // ✅ import CSS for shared widget styles

export default function ImpactAssistant({ buttonLabel = 'Ask IMPACT' }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState([]);
  const [viewHistory, setViewHistory] = useState(false);

  const suggestions = [
    "expiring contracts in 30 days",
    "current procurement methods",
    "budget utilization by department",
    "pending purchase orders",
    "contracts pending legal review"
  ];

  useEffect(() => {
    const saved = localStorage.getItem('impactAssistantHistory');
    if (saved) setResponses(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('impactAssistantHistory', JSON.stringify(responses));
  }, [responses]);

  const fakeAIQuery = async (input) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Insight: Found 3 results for "${input}"`), 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const aiResponse = await fakeAIQuery(query);
    const timestamp = new Date().toLocaleTimeString();
    setResponses((prev) => [...prev, { query, answer: aiResponse, timestamp }]);
    setQuery('');
    setLoading(false);
    setViewHistory(true);
  };

  const handleSuggestionClick = (s) => {
    setQuery(s);
    setViewHistory(false);
  };

  const suggestionButtonStyle = {
    backgroundColor: '#374151',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '6px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    width: '80%',
    display: 'block',
    margin: '4px auto 0 auto'
  };

  const messageStyle = {
    backgroundColor: '#111827',
    borderRadius: '8px',
    padding: '8px',
    marginBottom: '8px',
    fontSize: '13px',
    border: '1px solid #374151'
  };

  const toggleButton = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '6px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    marginBottom: '10px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <div className="widget-container impact-assistant-container">
      <h3 style={{ textAlign: 'center', marginBottom: '8px' }}>IMPACT Agentic Assistant</h3>

      <button onClick={() => setViewHistory(!viewHistory)} style={toggleButton}>
        {viewHistory ? 'Switch to Input' : 'View Chat History'}
      </button>

      {viewHistory ? (
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {responses.length === 0 && (
            <p style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>No history yet.</p>
          )}
          {responses.map((r, i) => (
            <div key={i} style={messageStyle}>
              <div><strong>Q:</strong> {r.query}</div>
              <div><strong>A:</strong> {r.answer}</div>
              <div style={{ fontSize: '10px', color: '#9ca3af' }}>{r.timestamp}</div>
            </div>
          ))}
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <input
            id="ai-query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search contracts, budgets, POs..."
            disabled={loading}
            style={{
              padding: '10px',
              width: '80%',
              display: 'block',
              margin: '0 auto 10px auto',
              borderRadius: '6px',
              border: '1px solid #374151',
              backgroundColor: loading ? '#374151' : '#fff',
              color: loading ? '#9ca3af' : '#000'
            }}
          />

          <div>
            {suggestions.map((s, i) => (
              <button
                key={i}
                type="button"
                style={suggestionButtonStyle}
                onClick={() => handleSuggestionClick(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: '#f97316',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'block',
              margin: '10px auto 0 auto'
            }}
          >
            {loading ? 'Searching…' : buttonLabel}
          </button>
        </form>
      )}

      {loading && (
        <div style={{ marginTop: '10px', fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>
          Loading response...
        </div>
      )}
    </div>
  );
}
