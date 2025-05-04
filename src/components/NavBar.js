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

  const linkStyle = (path) => ({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme === 'dark' ? '#fff' : '#111827',
    fontSize: '15px',
    padding: '10px 18px',
    borderLeft: location.pathname === path ? '4px solid #f97316' : '4px solid transparent',
    backgroundColor: location.pathname === path
      ? (theme === 'dark' ? '#1f2937' : '#d1d5db')
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
        <li>
          <Link to="/" style={linkStyle('/')}>
            <FaHome style={iconStyle('/')} /> Home
          </Link>
        </li>
        <li>
          <Link to="/assets" style={linkStyle('/assets')}>
            <FaCubes style={iconStyle('/assets')} /> Assets
          </Link>
        </li>
        <li>
          <Link to="/contracts" style={linkStyle('/contracts')}>
            <FaFileContract style={iconStyle('/contracts')} /> Contracts
          </Link>
        </li>
        <li>
          <Link to="/projects" style={linkStyle('/projects')}>
            <FaProjectDiagram style={iconStyle('/projects')} /> Projects
          </Link>
        </li>
        <li>
          <Link to="/po" style={linkStyle('/po')}>
            <FaFileInvoice style={iconStyle('/po')} /> Purchase Orders
          </Link>
        </li>
        <li>
          <Link to="/budget-lines" style={linkStyle('/budget-lines')}>
            <FaMoneyBillWave style={iconStyle('/budget-lines')} /> Budget Lines
          </Link>
        </li>
        <li>
          <Link to="/ownership" style={linkStyle('/ownership')}>
            <FaWarehouse style={iconStyle('/ownership')} /> Ownership
          </Link>
        </li>
        <li>
          <Link to="/procurement-methods" style={linkStyle('/procurement-methods')}>
            <FaClipboardList style={iconStyle('/procurement-methods')} /> Procurement Methods
          </Link>
        </li>
        <li>
          <Link to="/funding-sources" style={linkStyle('/funding-sources')}>
            <FaPiggyBank style={iconStyle('/funding-sources')} /> Funding Sources
          </Link>
        </li>
        <li>
          <Link to="/departments" style={linkStyle('/departments')}>
            <FaBuilding style={iconStyle('/departments')} /> Departments
          </Link>
        </li>
        <li>
          <Link to="/strategic-plans" style={linkStyle('/strategic-plans')}>
            <FaLightbulb style={iconStyle('/strategic-plans')} /> Strategic Plans
          </Link>
        </li>
        <li>
          <Link to="/audit-logs" style={linkStyle('/audit-logs')}>
            <FaHistory style={iconStyle('/audit-logs')} /> Audit Logs
          </Link>
        </li>
        <li>
          <Link to="/alerts" style={linkStyle('/alerts')}>
            <FaBell style={iconStyle('/alerts')} /> Alerts
          </Link>
        </li>
        <li>
          <Link to="/assistant" style={linkStyle('/assistant')}>
            <FaComments style={iconStyle('/assistant')} /> Assistant
          </Link>
        </li>
        <li>
          <Link to="/profile" style={linkStyle('/profile')}>
            <FaUserCircle style={iconStyle('/profile')} /> Profile
          </Link>
        </li>
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
