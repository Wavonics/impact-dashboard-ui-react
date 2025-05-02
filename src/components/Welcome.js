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
    borderRadius: '12px',
    padding: '50px',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 6px 30px rgba(0,0,0,0.4)',
    backgroundColor: '#1f2937'
  };

  const titleStyle = {
    fontSize: '26px',
    fontWeight: '800',
    marginBottom: '18px',
    color: '#f97316'
  };

  const textStyle = {
    fontSize: '16px',
    marginBottom: '12px',
    lineHeight: '1.5'
  };

  const noteStyle = {
    fontSize: '14px',
    color: '#9ca3af',
    marginBottom: '20px'
  };

  const primaryButtonStyle = {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '12px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '15px',
    fontWeight: '600',
    marginBottom: '12px',
    transition: 'background 0.2s ease'
  };

  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    color: '#f97316',
    border: '2px solid #f97316',
    borderRadius: '6px',
    padding: '12px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '15px',
    fontWeight: '600',
    transition: 'background 0.2s ease'
  };

  const messageStyle = {
    color: '#facc15',
    fontSize: '14px',
    marginBottom: '15px'
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>🎉 Welcome to IMPACT Dashboard!</h1>
        <p style={textStyle}>
          Your account has been created successfully! Please check your email to verify before logging in.
        </p>
        <p style={noteStyle}>Didn’t get the email? Click below to resend.</p>
        {message && <p style={messageStyle}>{message}</p>}
        <button onClick={() => navigate('/login')} style={primaryButtonStyle}>Go to Login</button>
        <button onClick={handleResend} style={secondaryButtonStyle}>Resend Verification Email</button>
      </div>
    </div>
  );
}
