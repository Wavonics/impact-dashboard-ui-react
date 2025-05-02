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
    padding: '20px'
  };

  const landingStyle = {
    border: '2px solid #f97316',
    borderRadius: '12px',
    padding: '50px',
    maxWidth: '700px',
    textAlign: 'center',
    boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
  };

  const logoStyle = {
    width: '450px',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontSize: '40px',
    fontWeight: '700',
    marginBottom: '15px'
  };

  const taglineStyle = {
    fontSize: '16px',
    color: '#f97316',
    fontWeight: '600',
    marginBottom: '25px'
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px'
  };

  const buttonStyle = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '14px 28px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '600',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s, transform 0.2s',
    display: 'inline-block'
  };

  const handleHover = (e, isEnter) => {
    e.target.style.backgroundColor = isEnter ? '#ea580c' : '#f97316';
    e.target.style.transform = isEnter ? 'scale(1.05)' : 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <div style={landingStyle}>
        <img src="/logo.png" alt="IMPACT Logo" style={logoStyle} />
        <h1 style={titleStyle}>Welcome to IMPACT Dashboard</h1>
        <p style={taglineStyle}>Driving Strategic Impact through IT Spend, Budget Tracking, and Contract Visibility</p>
        <div style={buttonContainerStyle}>
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
          <a
            href="#"
            style={buttonStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Demo
          </a>
          <a
            href="#"
            style={buttonStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
