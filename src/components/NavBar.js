// components/NavBar.js
import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaCubes,
  FaFileContract,
  FaProjectDiagram,
  FaFileInvoice,
  FaMoneyBillWave,
  FaWarehouse,
  FaClipboardList,
  FaPiggyBank,
  FaBuilding,
  FaLightbulb,
  FaHistory,
  FaBell,
  FaComments,
  FaMoon,
  FaSun,
  FaUserCircle,
  FaSignOutAlt
} from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';
import { auth } from '../firebase';

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
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
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica', sans-serif'"
  };

  const logoContainerStyle = {
    border: '2px solid #f97316',
    borderRadius: '8px',
    padding: '8px',
    marginTop: '18px',
    marginBottom: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px'
  };

  const logoStyle = {
    width: '225px',
    height: 'auto',
    objectFit: 'contain'
  };

  const taglineStyle = {
    fontSize: '14px',
    color: theme === 'dark' ? '#9ca3af' : '#4b5563',
    textAlign: 'center',
    maxWidth: '200px',
    marginBottom: '22px',
    fontWeight: '700',
    letterSpacing: '0.4px',
    lineHeight: '1.4'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    width: '100%',
    margin: 0,
    flexGrow: 1
  };

  const linkStyle = (path, isHovered) => ({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme === 'dark' ? '#fff' : '#111827',
    fontSize: '15px',
    padding: '10px 18px',
    borderLeft: '4px solid', // always reserve 4px
    borderLeftColor: location.pathname === path || isHovered ? '#f97316' : 'transparent',
    backgroundColor:
      location.pathname === path
        ? (theme === 'dark' ? '#1f2937' : '#f3f4f6')
        : isHovered
        ? (theme === 'dark' ? '#1f2937' : '#f9fafb')
        : 'transparent',
    fontWeight: location.pathname === path ? '600' : '500',
    transition: 'all 0.2s ease',
    marginBottom: '3px',
    width: '100%',
    boxSizing: 'border-box',
    cursor: 'pointer'
  });

  const iconColors = {
    '/': theme === 'dark' ? '#ffffff' : '#111827',
    '/assets': '#00ff00',
    '/contracts': '#f97316',
    '/projects': '#00ffff',
    '/po': '#0000ff',
    '/budget-lines': '#10b981',
    '/ownership': '#9ca3af',
    '/procurement-methods': '#3b82f6',
    '/funding-sources': '#10b981',
    '/departments': '#9ca3af',
    '/strategic-plans': '#facc15',
    '/audit-logs': '#8b5cf6',
    '/alerts': '#ef4444',
    '/assistant': '#3b82f6',
    '/profile': '#fb923c'
  };

  const iconStyle = (path) => ({
    marginRight: '8px',
    fontSize: '20px',
    color: iconColors[path]
  });

  const buttonRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: '18px',
    gap: '10px'
  };

  const smallButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: theme === 'dark' ? '#f97316' : '#ea580c',
    fontSize: '20px',
    cursor: 'pointer'
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/assets', label: 'Assets', icon: <FaCubes /> },
    { path: '/contracts', label: 'Contracts', icon: <FaFileContract /> },
    { path: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { path: '/po', label: 'Purchase Orders', icon: <FaFileInvoice /> },
    { path: '/budget-lines', label: 'Budget Lines', icon: <FaMoneyBillWave /> },
    { path: '/ownership', label: 'Ownership', icon: <FaWarehouse /> },
    { path: '/procurement-methods', label: 'Procurement Methods', icon: <FaClipboardList /> },
    { path: '/funding-sources', label: 'Funding Sources', icon: <FaPiggyBank /> },
    { path: '/departments', label: 'Departments', icon: <FaBuilding /> },
    { path: '/strategic-plans', label: 'Strategic Plans', icon: <FaLightbulb /> },
    { path: '/audit-logs', label: 'Audit Logs', icon: <FaHistory /> },
    { path: '/alerts', label: 'Alerts', icon: <FaBell /> },
    { path: '/assistant', label: 'Assistant', icon: <FaComments /> },
    { path: '/profile', label: 'Profile', icon: <FaUserCircle /> }
  ];

  return (
    <nav style={navStyle}>
      <div style={logoContainerStyle}>
        <img src="/logo.png" alt="IMPACT Logo" style={logoStyle} />
      </div>

      {profilePic && (
        <img
          src={profilePic}
          alt="Profile"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '10px',
            border: '2px solid #f97316'
          }}
        />
      )}

      <p style={taglineStyle}>
        Driving Strategic Impact through IT Spend, Budget Tracking, and Contract Visibility.
      </p>

      <ul style={listStyle}>
        {navItems.map((item) => {
          const [isHovered, setIsHovered] = useState(false);
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                style={linkStyle(item.path, isHovered)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span style={iconStyle(item.path)}>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div style={buttonRowStyle}>
        <button
          onClick={() => {
            auth.signOut().then(() => navigate('/login'));
          }}
          style={smallButtonStyle}
          title="Logout"
        >
          <FaSignOutAlt />
        </button>

        <button onClick={toggleTheme} style={smallButtonStyle} title="Toggle Theme">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
