import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: authentication logic could go here
    navigate('/dashboard');
  };

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

  const formContainerStyle = {
    border: '2px solid #f97316',
    borderRadius: '8px',
    padding: '40px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
  };

  const logoStyle = {
    width: '325px',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '10px'
  };

  const inputWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f2937',
    borderRadius: '5px',
    padding: '0 10px',
    margin: '10px 0',
    border: '1px solid #1f2937',
    width: '80%'
  };

  const iconStyle = {
    color: '#9ca3af',
    marginRight: '8px'
  };

  const inputStyle = {
    flex: 1,
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    padding: '12px',
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif"
  };

  const inputFocusStyle = {
    outlineColor: '#f97316'
  };

  const buttonStyle = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '12px',
    cursor: 'pointer',
    width: '80%',
    fontSize: '14px',
    fontWeight: '500',
    marginTop: '10px'
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <img src="/logo.png" alt="IMPACT Logo" style={logoStyle} />
        <h1 style={titleStyle}>Login to IMPACT Dashboard</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={inputWrapperStyle}>
            <FaUser style={iconStyle} />
            <input
              type="text"
              placeholder="Username"
              style={inputStyle}
              onFocus={(e) => (e.target.style.outlineColor = inputFocusStyle.outlineColor)}
              onBlur={(e) => (e.target.style.outlineColor = '')}
            />
          </div>
          <div style={inputWrapperStyle}>
            <FaLock style={iconStyle} />
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
              onFocus={(e) => (e.target.style.outlineColor = inputFocusStyle.outlineColor)}
              onBlur={(e) => (e.target.style.outlineColor = '')}
            />
          </div>
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
}
