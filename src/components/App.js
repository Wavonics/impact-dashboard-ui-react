import React from 'react';

export default function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#111827',
    color: '#fff',
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif",
    padding: '20px'
  };

  const landingStyle = {
    border: '2px solid #f97316',
    borderRadius: '8px',
    padding: '40px',
    maxWidth: '700px',
    textAlign: 'center'
  };

  const logoStyle = {
    width: '200px',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontSize: '38px',
    fontWeight: '700',
    marginBottom: '10px'
  };

  const taglineStyle = {
    fontSize: '16px',
    color: '#f97316',
    fontWeight: '600',
    marginBottom: '20px'
  };

  const buttonStyle = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '12px 24px',
    margin: '0 10px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500'
  };

  return (
    <div style={containerStyle}>
      <div style={landingStyle}>
        <img src="/logo.png" alt="IMPACT Logo" style={logoStyle} />
        <h1 style={titleStyle}>Welcome to IMPACT Dashboard</h1>
        <p style={taglineStyle}>Driving Strategic Impact through IT Spend, Budget Tracking, and Contract Visibility</p>
        <div>
          <a href="#" style={buttonStyle}>Demo</a>
          <a href="#" style={buttonStyle}>Learn More</a>
        </div>
      </div>
    </div>
  );
}
