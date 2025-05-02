import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { auth } from '../firebase';

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const db = getFirestore();
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email: userCredential.user.email,
        role: 'Viewer'
      });
      await sendEmailVerification(userCredential.user);
      navigate('/welcome');
    } catch (err) {
      setError(err.message);
      console.error(err);
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

  const formContainerStyle = {
    border: '2px solid #f97316',
    borderRadius: '8px',
    padding: '40px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
  };

  const logoStyle = { width: '325px', marginBottom: '20px' };
  const titleStyle = { fontSize: '28px', fontWeight: '700', marginBottom: '10px' };
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
  const iconStyle = { color: '#9ca3af', marginRight: '8px' };
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
  const inputFocusStyle = { outlineColor: '#f97316' };
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
  const errorStyle = { color: '#f87171', fontSize: '14px', marginBottom: '10px' };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <img src="/logo.png" alt="IMPACT Logo" style={logoStyle} />
        <h1 style={titleStyle}>Sign Up for IMPACT Dashboard</h1>
        {error && <p style={errorStyle}>{error}</p>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={inputWrapperStyle}>
            <FaUser style={iconStyle} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.target.style.outlineColor = inputFocusStyle.outlineColor)}
              onBlur={(e) => (e.target.style.outlineColor = '')}
            />
          </div>
          <div style={inputWrapperStyle}>
            <FaLock style={iconStyle} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.target.style.outlineColor = inputFocusStyle.outlineColor)}
              onBlur={(e) => (e.target.style.outlineColor = '')}
            />
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(false)} style={{ ...iconStyle, cursor: 'pointer' }} />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} style={{ ...iconStyle, cursor: 'pointer' }} />
            )}
          </div>
          <div style={inputWrapperStyle}>
            <FaLock style={iconStyle} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.target.style.outlineColor = inputFocusStyle.outlineColor)}
              onBlur={(e) => (e.target.style.outlineColor = '')}
            />
            {showConfirmPassword ? (
              <FaEyeSlash onClick={() => setShowConfirmPassword(false)} style={{ ...iconStyle, cursor: 'pointer' }} />
            ) : (
              <FaEye onClick={() => setShowConfirmPassword(true)} style={{ ...iconStyle, cursor: 'pointer' }} />
            )}
          </div>
          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
