import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #111827, #0f172a)', // darker gray
    color: '#fff',
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif",
    padding: '20px'
  };

  const landingStyle = {
    border: '2px solid #f97316',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '650px',
    width: '90%',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
  };

  const logoStyle = {
    width: '350px',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: '800',
    marginBottom: '12px'
  };

  const taglineStyle = {
    fontSize: '16px',
    color: '#f97316',
    fontWeight: '600',
    marginBottom: '20px',
    lineHeight: '1.5'
  };

  const buttonContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    justifyContent: 'center',
    marginTop: '20px'
  };

  const buttonStyle = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 20px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s, transform 0.2s',
    textAlign: 'center'
  };

  const handleHover = (e, isEnter) => {
    e.target.style.backgroundColor = isEnter ? '#ea580c' : '#f97316';
    e.target.style.transform = isEnter ? 'scale(1.04)' : 'scale(1)';
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
          <Link
            to="/profile"
            style={buttonStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Go to Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
