import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Assets from './components/Assets';
import Contracts from './components/Contracts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/assets" element={<Assets />} />
      <Route path="/contracts" element={<Contracts />} />
    </Routes>
  </BrowserRouter>
);
