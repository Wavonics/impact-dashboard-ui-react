import React, { useEffect, useState, useRef } from 'react';
import { auth, db, storage } from '../firebase';
import { sendEmailVerification, updateProfile, updatePassword, deleteUser } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState({ displayName: '', role: '', photoURL: '' });
  const [newDisplayName, setNewDisplayName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showJSON, setShowJSON] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        await currentUser.reload();  // refresh emailVerified status
        setUser({ ...currentUser }); // clone to force re-render
        try {
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setProfileData({ displayName: data.displayName || '', role: data.role || '', photoURL: data.photoURL || '' });
            setNewDisplayName(data.displayName || '');
            if (data.photoURL) setPreviewURL(data.photoURL);
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
      sendEmailVerification(auth.currentUser)
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
      await updateProfile(auth.currentUser, { displayName: newDisplayName });
      await setDoc(doc(db, 'users', user.uid), { ...profileData, displayName: newDisplayName }, { merge: true });
      setProfileData((prev) => ({ ...prev, displayName: newDisplayName }));
      setMessage('Display name updated!');
    } catch {
      setMessage('Error updating display name.');
    }
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
      await updateProfile(auth.currentUser, { photoURL: downloadURL });
      await setDoc(doc(db, 'users', user.uid), { ...profileData, photoURL: downloadURL }, { merge: true });
      setProfileData((prev) => ({ ...prev, photoURL: downloadURL }));
      setMessage('Profile picture uploaded!');
    } catch {
      setMessage('Error uploading photo.');
    }
  };

  const handleChangePassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      setMessage('Password must be at least 6 characters.');
      return;
    }
    try {
      await updatePassword(auth.currentUser, newPassword);
      setNewPassword('');
      setShowPasswordField(false);
      setMessage('Password updated!');
    } catch {
      setMessage('Error updating password.');
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to permanently delete your account? This action cannot be undone.")) {
      try {
        await deleteUser(auth.currentUser);
        navigate('/signup');
      } catch {
        setMessage('Error deleting account. Re-authenticate and try again.');
      }
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
    textAlign: 'center'
  };

  const boxStyle = {
    border: '2px solid #f97316',
    borderRadius: '12px',
    padding: '50px',
    maxWidth: '600px',
    width: '90%',
    boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
  };

  const titleStyle = { fontSize: '28px', fontWeight: '700', marginBottom: '15px' };
  const fieldStyle = { fontSize: '16px', marginBottom: '10px' };
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
    marginTop: '10px',
    width: '100%'
  };

  const dropzoneStyle = {
    border: '2px dashed #f97316',
    borderRadius: '8px',
    padding: '20px',
    cursor: 'pointer',
    marginBottom: '12px'
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>User Profile</h1>
        {previewURL && <img src={previewURL} alt="Preview" style={{ width: '150px', borderRadius: '50%', marginBottom: '15px' }} />}
        {user && (
          <>
            <p style={fieldStyle}><strong>Email:</strong> {user.email} {user.emailVerified ? '(Verified)' : '(Not Verified)'}</p>
            <p style={fieldStyle}><strong>Role:</strong> {profileData.role || 'N/A'}</p>
            <label style={fieldStyle}><strong>Display Name:</strong></label>
            <input type="text" value={newDisplayName} onChange={(e) => setNewDisplayName(e.target.value)} style={inputStyle} />
            <button style={buttonStyle} onClick={handleSaveDisplayName}>Save Display Name</button>

            <div style={dropzoneStyle} onDrop={handleDrop} onDragOver={handleDragOver} onClick={() => fileInputRef.current.click()}>
              Drag & Drop Image Here or Click to Select
              <input type="file" ref={fileInputRef} onChange={handleFileSelect} style={{ display: 'none' }} accept="image/*" />
            </div>
            <button style={buttonStyle} onClick={handleUploadPhoto}>Upload Profile Picture</button>

            {!user.emailVerified && <button style={buttonStyle} onClick={handleResendVerification}>Resend Verification Email</button>}

            {showPasswordField ? (
              <div style={{ marginTop: '10px' }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={inputStyle}
                />
                <button onClick={() => setShowPassword(!showPassword)} style={{ marginBottom: '10px', background: 'none', border: 'none', color: '#f97316' }}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />} Show/Hide
                </button>
                <button style={buttonStyle} onClick={handleChangePassword}>Confirm Password Change</button>
              </div>
            ) : (
              <button style={buttonStyle} onClick={() => setShowPasswordField(true)}>Change Password</button>
            )}

            <button style={buttonStyle} onClick={handleLogout}>Logout</button>
            <button style={{ ...buttonStyle, backgroundColor: '#dc2626' }} onClick={handleDeleteAccount}>Delete Account</button>

            <button style={{ ...buttonStyle, marginTop: '20px' }} onClick={() => setShowJSON(!showJSON)}>
              {showJSON ? 'Hide Profile JSON' : 'View Profile JSON'}
            </button>

            {showJSON && <pre style={{ textAlign: 'left', marginTop: '10px', fontSize: '12px' }}>{JSON.stringify(user, null, 2)}</pre>}

            {message && <p style={{ color: '#facc15', marginTop: '12px' }}>{message}</p>}
          </>
        )}
      </div>
    </div>
  );
}
