// src/components/NavBar.js
import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaHome, FaCubes, FaFileContract, FaProjectDiagram, FaFileInvoice,
  FaMoneyBillWave, FaWarehouse, FaClipboardList, FaPiggyBank, FaBuilding,
  FaLightbulb, FaHistory, FaBell, FaMoon, FaSun, FaUserCircle, FaSignOutAlt
} from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';
import { auth } from '../firebase';

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      if (currentUser && currentUser.photoURL) {
        setProfilePic(currentUser.photoURL);
      }
    });
    return unsubscribe;
  }, []);

  const navStyle = {
    padding: '16px 0',
    backgroundColor: theme === 'dark' ? '#0f172a' : '#e5e7eb',
    color: theme === 'dark' ? '#fff' : '#111827',
    height: '100vh',
    width: '240px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: '1px solid #1f2937',
    boxSizing: 'border-box',
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif"
  };

  const linkStyle = path => ({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme === 'dark' ? '#fff' : '#111827',
    padding: '10px 18px',
    borderLeft: location.pathname === path ? '4px solid #f97316' : '4px solid transparent',
    backgroundColor: location.pathname === path
      ? (theme === 'dark' ? '#1f2937' : '#d1d5db')
      : 'transparent',
    fontWeight: location.pathname === path ? '600' : '500',
    marginBottom: '3px',
    width: '100%',
    cursor: 'pointer'
  });

  const iconStyle = { marginRight: '8px', fontSize: '20px' };

  const smallButtonStyle = {
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer'
  };

  return (
    <nav style={navStyle}>
      <div style={{ marginBottom: 20 }}>
        <Link to="/">IMPACT Dashboard</Link>
      </div>

      {profilePic && (
        <img
          src={profilePic}
          alt="Profile"
          style={{ width: 60, height: 60, borderRadius: '50%', marginBottom: 10 }}
        />
      )}

      {[
        ['/', <FaHome />],
        ['/assets', <FaCubes />],
        ['/contracts', <FaFileContract />],
        ['/projects', <FaProjectDiagram />],
        ['/po', <FaFileInvoice />],
        ['/budget-lines', <FaMoneyBillWave />],
        ['/ownership', <FaWarehouse />],
        ['/procurement-methods', <FaClipboardList />],
        ['/funding-sources', <FaPiggyBank />],
        ['/departments', <FaBuilding />],
        ['/strategic-plans', <FaLightbulb />],
        ['/audit-logs', <FaHistory />],
        ['/alerts', <FaBell />],
        ['/profile', <FaUserCircle />]
      ].map(([path, Icon]) => (
        <Link key={path} to={path} style={linkStyle(path)}>
          <Icon style={iconStyle} />
          {path === '/profile' ? 'Profile' : path.slice(1).replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}
        </Link>
      ))}

      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', width: '100%', padding: '20px 0' }}>
        <button onClick={() => auth.signOut().then(() => navigate('/login'))} style={smallButtonStyle} title="Logout">
          <FaSignOutAlt />
        </button>
        <button onClick={toggleTheme} style={smallButtonStyle} title="Toggle Theme">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
