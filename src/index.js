import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Assets from './components/Assets';
import Contracts from './components/Contracts';
import Projects from './components/Projects';
import POs from './components/POs';
import BudgetLines from './components/BudgetLines';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/assets" element={<Assets />} />
      <Route path="/contracts" element={<Contracts />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/po" element={<POs />} />
      <Route path="/budget-lines" element={<BudgetLines />} />
    </Routes>
  </BrowserRouter>
);
