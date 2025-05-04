// components/AIChatBox.js
import React, { useState, useRef } from 'react';

export default function AIChatBox({
  style = {},
  buttonLabel = 'Ask IMPACT',
  suggestions = [
    "expiring contracts in 30 days",
    "current procurement methods",
    "budget utilization by department",
    "pending purchase orders",
    "contracts in pipeline pending legal review and approval"
  ],
  onQuerySubmit
}) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const contentRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const fakeAIQuery = async (input) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Insight: Found 3 results for "${input}"`), 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const result = await fakeAIQuery(query);
    setResponse(result);
    setLoading(false);
    if (onQuerySubmit) onQuerySubmit(query, result);
  };

  const handleSuggestionClick = (s) => {
    setQuery(s);
    handleSubmit(null, s);
  };

  const outerContainerStyle = {
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
    ...style
  };

  const toggleButtonStyle = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '10px'
  };

  const suggestionContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '10px'
  };

  const getSuggestionButtonStyle = (isHovered) => ({
    backgroundColor: isHovered ? '#4b5563' : '#374151',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '6px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
  });

  const collapsibleContentStyle = {
    overflow: 'hidden',
    transition: 'max-height 0.4s ease, opacity 0.4s ease, padding 0.4s ease',
    maxHeight: collapsed ? '0' : contentRef.current ? `${contentRef.current.scrollHeight}px` : '9999px',
    opacity: collapsed ? 0 : 1
  };

  return (
    <div style={outerContainerStyle}>
      <button onClick={() => setCollapsed(!collapsed)} style={toggleButtonStyle}>
        {collapsed ? 'Show Quick Query' : 'Hide Quick Query'}
      </button>

      <form onSubmit={handleSubmit} style={{ backgroundColor: '#1f2937', borderRadius: '12px', padding: '20px', color: '#fff', maxWidth: '500px', margin: '0 auto' }}>
        <h3 style={{ marginBottom: '8px' }}>IMPACT Quick Query</h3>
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
            marginBottom: '10px'
          }}
        >
          {loading ? 'Searching…' : buttonLabel}
        </button>

        <div style={collapsibleContentStyle} ref={contentRef}>
          <div style={suggestionContainerStyle}>
            {suggestions.map((s, i) => (
              <button
                key={i}
                type="button"
                style={getSuggestionButtonStyle(hoverIndex === i)}
                onClick={() => handleSuggestionClick(s)}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(-1)}
              >
                {s}
              </button>
            ))}
          </div>

          {response && (
            <div style={{
              backgroundColor: '#111827',
              padding: '10px',
              borderRadius: '8px',
              minHeight: '50px',
              marginTop: '10px'
            }}>
              {response}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
