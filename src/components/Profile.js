import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/login');
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleResendVerification = () => {
    if (user && !user.emailVerified) {
      sendEmailVerification(user)
        .then(() => setMessage('Verification email sent!'))
        .catch((err) => setMessage('Error sending verification email.'));
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
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '15px'
  };

  const emailStyle = {
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
    marginTop: '10px'
  };

  const handleHover = (e, isEnter) => {
    e.target.style.backgroundColor = isEnter ? '#ea580c' : '#f97316';
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>User Profile</h1>
        {user && <p style={emailStyle}>Email: {user.email} {user.emailVerified ? '(Verified)' : '(Not Verified)'}</p>}
        {!user?.emailVerified && (
          <button
            style={buttonStyle}
            onClick={handleResendVerification}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            Resend Verification Email
          </button>
        )}
        {message && <p style={{ color: '#f97316', marginTop: '10px' }}>{message}</p>}
      </div>
    </div>
  );
}
