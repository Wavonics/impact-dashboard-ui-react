import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import ResetPassword from './components/ResetPassword';
import ResetConfirmation from './components/ResetConfirmation';
import Profile from './components/Profile';
import AuditLogs from './components/AuditLogs';
import ImpactAssistant from "./components/ImpactAssistant";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-confirmation" element={<ResetConfirmation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
        <Route path="/dashboard/*" element={<App />} />
        <Route path="/quick-search" element={<AIChatBox style={{ width: 400 }} />} />
        <Route path="/assistant" element={<ImpactAssistant />} />
        <Route path="*" element={<LandingPage />} /> {/* fallback route */}
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
