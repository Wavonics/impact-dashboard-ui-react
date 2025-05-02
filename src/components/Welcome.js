import React from 'react';

export default function Welcome() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#111827',
    color: '#fff',
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif",
    padding: '20px',
    textAlign: 'center'
  };

  const boxStyle = {
    border: '2px solid #f97316',
    borderRadius: '12px',
    padding: '50px',
    maxWidth: '500px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
  };

  const titleStyle = {
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '15px'
  };

  const messageStyle = {
    fontSize: '16px',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>Welcome to IMPACT Dashboard!</h1>
        <p style={messageStyle}>
          Your account has been created successfully.
          <br />
          Please check your email to verify your account before logging in.
        </p>
      </div>
    </div>
  );
}
