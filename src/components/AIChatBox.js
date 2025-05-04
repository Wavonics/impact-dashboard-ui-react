// components/AIChatBox.js
import React, { useState } from 'react';
// Optional: import centralized suggestions if you have aiUtils.js
// import { suggestions as defaultSuggestions } from '../utils/aiUtils';

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
  onQuerySubmit // optional callback if wrapping this in ImpactAssistant
}) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // TEMP: Replace with getAIResponse() for real API
  const fakeAIQuery = async (input) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Insight: Found 3 results for "${input}"`), 1500);
    });
  };

  const handleSubmit = async (e, inputQuery) => {
    e?.preventDefault();
    const finalQuery = inputQuery || query;
    if (!finalQuery.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const result = await fakeAIQuery(finalQuery);
      setResponse(result);
      if (onQuerySubmit) onQuerySubmit(finalQuery, result);
    } catch (err) {
      setError(`Error: ${err.message}`);
      setResponse('');
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    handleSubmit(null, suggestion); // pass clicked suggestion directly
  };

  const outerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px'
  };

  const containerStyle = {
    backgroundColor: '#1f2937',
    borderRadius: '12px',
    padding: '20px',
    color: '#fff',
    width: '100%',
    maxWidth: '600px',
    ...style
  };

  const suggestionButtonStyle = {
    backgroundColor: '#374151',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '6px 12px',
    fontSize: '12px',
    margin: '4px 4px 0 0',
    cursor: 'pointer'
  };

  return (
    <div style={outerContainerStyle}>
      <div style={containerStyle}>
        <h3 style={{ marginBottom: '8px' }}>IMPACT Assistant</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="ai-query" style={{ display: 'none' }}>Query</label>
          <input
            id="ai-query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search contracts, budgets, POs..."
            disabled={loading}
            style={{
              padding: '10px',
              width: '100%',
              borderRadius: '6px',
              border: '1px solid #374151',
              marginBottom: '10px',
              backgroundColor: loading ? '#374151' : '#fff',
              color: loading ? '#9ca3af' : '#000'
            }}
          />
          <div style={{
            marginBottom: '10px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px'
          }}>
            {suggestions.map((s, i) => (
              <button
                key={i}
                type="button"
                style={suggestionButtonStyle}
                onClick={() => handleSuggestionClick(s)}
                aria-label={`Use suggestion: ${s}`}
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
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Searching…' : buttonLabel}
          </button>
        </form>
        {error && (
          <div style={{
            marginTop: '10px',
            backgroundColor: '#dc2626',
            padding: '10px',
            borderRadius: '8px'
          }}>
            {error}
          </div>
        )}
        {response && (
          <div style={{
            marginTop: '10px',
            backgroundColor: '#111827',
            padding: '10px',
            borderRadius: '8px',
            minHeight: '50px'
          }}>
            {response}
          </div>
        )}
      </div>
    </div>
  );
}
