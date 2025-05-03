import React, { useEffect, useState, useRef } from 'react';
import { auth, db, storage } from '../firebase';
import { sendEmailVerification, updateProfile, updatePassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState({ displayName: '', role: '', photoURL: '' });
  const [newDisplayName, setNewDisplayName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [showJson, setShowJson] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setProfileData(data);
            setNewDisplayName(data.displayName || '');
            if (data.photoURL) setPreviewURL(data.photoURL);
          } else {
            setMessage('User profile data not found in database.');
          }
        } catch (error) {
          console.error(error);
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
        .catch(() => setMessage('Error sending verification email.'));
    }
  };

  const handleSaveDisplayName = async () => {
    if (!newDisplayName.trim()) {
      setMessage('Display name cannot be empty.');
      return;
    }
    try {
      const currentUser = auth.currentUser;
      await updateProfile(currentUser, { displayName: newDisplayName });
      await setDoc(doc(db, 'users', currentUser.uid), { ...profileData, displayName: newDisplayName }, { merge: true });
      const updatedDocSnap = await getDoc(doc(db, 'users', currentUser.uid));
      if (updatedDocSnap.exists()) {
        setProfileData(updatedDocSnap.data());
      }
      setMessage('Display name updated!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error(error);
      setMessage('Error updating display name.');
    }
  };

  const handleGoToDashboard = () => {
    if (!profileData.displayName || profileData.displayName.trim() === '') {
      setMessage('Please save your display name before returning to dashboard.');
      return;
    }
    navigate('/');
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleUploadPhoto = async () => {
    if (!selectedFile) {
      setMessage('Please select a file first.');
      return;
    }
    try {
      const storageRef = ref(storage, `profile_pics/${user.uid}`);
      await uploadBytes(storageRef, selectedFile);
      const downloadURL = await getDownloadURL(storageRef);
      await updateProfile(user, { photoURL: downloadURL });
      await setDoc(doc(db, 'users', user.uid), { ...profileData, photoURL: downloadURL }, { merge: true });
      const updatedDocSnap = await getDoc(doc(db, 'users', user.uid));
      if (updatedDocSnap.exists()) {
        setProfileData(updatedDocSnap.data());
      }
      setMessage('Profile picture uploaded & saved!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error(error);
      setMessage('Error uploading photo.');
    }
  };

  const handleChangePassword = async () => {
    const newPass = prompt('Enter new password (min 6 chars):');
    if (newPass && newPass.length >= 6) {
      try {
        await updatePassword(user, newPass);
        setMessage('Password updated!');
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        console.error(error);
        setMessage('Error updating password.');
      }
    } else {
      setMessage('Password must be at least 6 characters.');
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => navigate('/login'));
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
    textAlign: 'center',
  };

  const boxStyle = {
    border: '2px solid #f97316',
    borderRadius: '12px',
    padding: '40px',
    maxWidth: '500px',
    width: '90%',
    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
  };

  const fieldStyle = { fontSize: '16px', marginBottom: '10px' };

  const inputStyle = {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '85%',
    marginBottom: '15px',
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
    margin: '5px',
    width: '200px',
    maxWidth: '90%',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
  };

  const buttonRowStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '20px',
  };

  const dropzoneStyle = {
    border: '2px dashed #f97316',
    borderRadius: '8px',
    padding: '20px',
    cursor: 'pointer',
    margin: '15px auto',
    width: '85%',
  };

  const handleHover = (e, isEnter) => {
    e.target.style.backgroundColor = isEnter ? '#ea580c' : '#f97316';
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '15px' }}>User Profile</h1>
        {previewURL && (
          <img
            src={previewURL}
            alt="Preview"
            style={{ width: '150px', borderRadius: '50%', marginBottom: '15px' }}
          />
        )}
        {user && (
          <>
            <p style={fieldStyle}><strong>Email:</strong> {user.email} {user.emailVerified ? '(Verified)' : '(Not Verified)'}</p>
            <p style={fieldStyle}><strong>Role:</strong> {profileData.role || 'N/A'}</p>
            <p style={fieldStyle}><strong>Display Name:</strong> {profileData.displayName || 'N/A'}</p>
            <label style={fieldStyle}><strong>Edit Display Name:</strong></label>
            <input
              type="text"
              value={newDisplayName}
              onChange={(e) => setNewDisplayName(e.target.value)}
              placeholder="Enter display name"
              style={inputStyle}
            />
            <div style={buttonContainerStyle}>
              <button
                type="button"
                style={buttonStyle}
                onClick={handleSaveDisplayName}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                Save Display Name
              </button>
              <button
                type="button"
                style={{ ...buttonStyle, opacity: profileData.displayName ? 1 : 0.7 }}
                onClick={handleGoToDashboard}
                disabled={!profileData.displayName}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                Go to Dashboard
              </button>
            </div>

            <div
              style={dropzoneStyle}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current.click()}
            >
              Drag & Drop Image Here or Click to Select
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                style={{ display: 'none' }}
                accept="image/*"
              />
            </div>

            <div style={buttonRowStyle}>
              <button
                type="button"
                style={buttonStyle}
                onClick={handleUploadPhoto}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                Upload Profile Picture
              </button>
              {!user.emailVerified && (
                <button
                  type="button"
                  style={buttonStyle}
                  onClick={handleResendVerification}
                  onMouseEnter={(e) => handleHover(e, true)}
                  onMouseLeave={(e) => handleHover(e, false)}
                >
                  Resend Verification Email
                </button>
              )}
              <button
                type="button"
                style={buttonStyle}
                onClick={handleChangePassword}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                Change Password
              </button>
              <button
                type="button"
                style={buttonStyle}
                onClick={handleLogout}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                Logout
              </button>
              <button
                type="button"
                style={{ ...buttonStyle, backgroundColor: showJson ? '#10b981' : '#f97316' }}
                onClick={() => setShowJson(!showJson)}
              >
                {showJson ? 'Hide Profile JSON' : 'View Profile JSON'}
              </button>
            </div>

            {showJson && (
              <pre
                style={{
                  textAlign: 'left',
                  fontSize: '12px',
                  backgroundColor: '#1f2937',
                  padding: '10px',
                  marginTop: '10px',
                  borderRadius: '8px',
                  maxHeight: '200px',
                  overflowY: 'auto',
                }}
              >
                {JSON.stringify(profileData, null, 2)}
              </pre>
            )}

            {message && <p style={{ color: '#facc15', marginTop: '12px' }}>{message}</p>}
          </>
        )}
      </div>
    </div>
  );
}
