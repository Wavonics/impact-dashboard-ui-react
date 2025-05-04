// src/components/ImpactAssistant.jsx
import React, { useState } from 'react';
import { fakeAIQuery } from '../utils/aiUtils'; // keep or replace with your own

export default function ImpactAssistant() {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const userMsg = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    const result = await fakeAIQuery(query);
    const aiMsg = { sender: 'ai', text: result };
    setMessages((prev) => [...prev, aiMsg]);
    setLoading(false);
    setQuery('');
  };

  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: isOpen ? '320px' : '160px',
    backgroundColor: '#1f2937',
    color: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    overflow: 'hidden',
    zIndex: 1001,
    transition: 'width 0.3s ease',
  };

  const headerStyle = {
    backgroundColor: '#f97316',
    padding: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const chatBoxStyle = {
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '10px',
    backgroundColor: '#111827',
  };

  const messageStyle = (sender) => ({
    backgroundColor: sender === 'user' ? '#3b82f6' : '#374151',
    padding: '8px 12px',
    borderRadius: '12px',
    margin: '4px 0',
    alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
    maxWidth: '80%',
    fontSize: '13px',
    lineHeight: '1.3',
  });

  return (
    <div style={containerStyle}>
      <div style={headerStyle} onClick={() => setIsOpen(!isOpen)}>
        <span>{isOpen ? 'IMPACT Assistant' : 'Open Assistant'}</span>
        <span>{isOpen ? '▼' : '▲'}</span>
      </div>
      {isOpen && (
        <>
          <div style={chatBoxStyle}>
            {messages.map((msg, idx) => (
              <div key={idx} style={messageStyle(msg.sender)}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div style={messageStyle('ai')}>
                <em>Thinking...</em>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', padding: '10px' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask IMPACT..."
              disabled={loading}
              style={{
                flex: 1,
                padding: '8px',
                borderRadius: '6px',
                border: '1px solid #374151',
                marginRight: '6px',
                backgroundColor: loading ? '#374151' : '#fff',
                color: loading ? '#9ca3af' : '#000',
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: '#f97316',
                color: '#fff',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '6px',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? '...' : 'Send'}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
