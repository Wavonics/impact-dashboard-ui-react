import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #111827, #1f2937)',
    color: '#fff',
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif",
    padding: '20px',
  };

  const boxStyle = {
    border: '2px solid #f97316',
    borderRadius: '12px',
    padding: '40px',
    maxWidth: '600px',
    width: '90%',
    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
    textAlign: 'center',
  };

  const logoStyle = {
    width: '300px',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '15px',
  };

  const taglineStyle = {
    fontSize: '16px',
    color: '#f97316',
    fontWeight: '600',
    marginBottom: '25px',
  };

  const buttonRowStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    width: '160px',
    maxWidth: '90%',
  };

  const handleHover = (e, isEnter) => {
    e.target.style.backgroundColor = isEnter ? '#ea580c' : '#f97316';
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <img src="/logo.png" alt="IMPACT Logo" style={logoStyle} />
        <h1 style={titleStyle}>Welcome to IMPACT Dashboard</h1>
        <p style={taglineStyle}>Driving Strategic Impact through IT Spend, Budget Tracking, and Contract Visibility</p>

        <div style={buttonRowStyle}>
          <Link
            to="/login"
            style={buttonStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            style={buttonStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Sign Up
          </Link>
          <Link
            to="/profile"
            style={buttonStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Profile
          </Link>
          <a
            href="#"
            style={buttonStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
