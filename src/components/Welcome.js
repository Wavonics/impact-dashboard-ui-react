import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase';

export default function Welcome() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResend = async () => {
    try {
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        setMessage('Verification email resent! Please check your inbox.');
      } else {
        setMessage('No user is signed in.');
      }
    } catch (error) {
      setMessage(error.message);
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
    padding: '20px'
  };

  const boxStyle = {
    border: '2px solid #f97316',
    borderRadius: '8px',
    padding: '40px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '15px'
  };

  const textStyle = {
    fontSize: '16px',
    marginBottom: '20px'
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
    marginBottom: '10px'
  };

  const messageStyle = {
    color: '#facc15',
    fontSize: '14px',
    marginBottom: '10px'
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>Welcome to IMPACT Dashboard</h1>
        <p style={textStyle}>
          Please check your email to verify your account before logging in.
        </p>
        {message && <p style={messageStyle}>{message}</p>}
        <button onClick={handleResend} style={buttonStyle}>Resend Verification Email</button>
        <button onClick={() => navigate('/login')} style={buttonStyle}>Go to Login</button>
      </div>
    </div>
  );
}
