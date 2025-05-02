import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState({ displayName: '', role: '' });
  const [newDisplayName, setNewDisplayName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setProfileData({ displayName: data.displayName || '', role: data.role || '' });
            setNewDisplayName(data.displayName || '');
          } else {
            setMessage('User profile data not found in database.');
          }
        } catch (error) {
          setMessage('Error fetching profile data.');
        }
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

  const handleSaveDisplayName = async () => {
    if (!newDisplayName.trim()) {
      setMessage('Display name cannot be empty.');
      return;
    }
    try {
      await updateProfile(user, { displayName: newDisplayName });
      await setDoc(doc(db, 'users', user.uid), { ...profileData, displayName: newDisplayName }, { merge: true });
      setProfileData((prev) => ({ ...prev, displayName: newDisplayName }));
      setMessage('Display name updated!');
    } catch (error) {
      setMessage('Error updating display name.');
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

  const fieldStyle = {
    fontSize: '16px',
    marginBottom: '15px'
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%',
    marginBottom: '12px'
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
        {user && (
          <>
            <p style={fieldStyle}><strong>Email:</strong> {user.email} {user.emailVerified ? '(Verified)' : '(Not Verified)'}</p>
            <p style={fieldStyle}><strong>Role:</strong> {profileData.role || 'N/A'}</p>
            <label style={fieldStyle}><strong>Display Name:</strong></label>
            <input
              type="text"
              value={newDisplayName}
              onChange={(e) => setNewDisplayName(e.target.value)}
              style={inputStyle}
            />
            <button
              style={buttonStyle}
              onClick={handleSaveDisplayName}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Save Display Name
            </button>
            {!user.emailVerified && (
              <button
                style={buttonStyle}
                onClick={handleResendVerification}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                Resend Verification Email
              </button>
            )}
            {message && <p style={{ color: '#facc15', marginTop: '12px' }}>{message}</p>}
          </>
        )}
      </div>
    </div>
  );
}
