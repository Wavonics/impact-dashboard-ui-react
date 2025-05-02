import React, { useState } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase';

export default function Welcome() {
  const [message, setMessage] = useState('');

  const handleResend = () => {
    const user = auth.currentUser;
    if (user) {
      sendEmailVerification(user)
        .then(() => {
          setMessage('Verification email resent! Please check your inbox.');
        })
        .catch((err) => {
          setMessage('Error resending verification email.');
          console.error(err);
        });
    } else {
      setMessage('No user found. Please sign in again.');
    }
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

  const buttonStyle = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    transition: 'background-color 0.3s'
  };

  const handleHover = (e, isEnter) => {
    e.target.style.backgroundColor = isEnter ? '#ea580c' : '#f97316';
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
        <button
          style={buttonStyle}
          onClick={handleResend}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Resend Verification Email
        </button>
        {message && <p style={{ marginTop: '15px', color: '#f97316' }}>{message}</p>}
      </div>
    </div>
  );
}
