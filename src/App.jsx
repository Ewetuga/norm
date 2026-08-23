import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Welcome from './pages/auth/Welcome';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/dashboard/Home';
import Monitor from './pages/dashboard/Monitor';
import Profile from './pages/dashboard/Profile';
import Records from './pages/dashboard/Records';
import AI from './pages/ai/AI';
import Learn from './pages/dashboard/Learn';
import './styles/design-system.css';

// Placeholder pages
const Medication = () => (
  <div className="container">
    <h2>Medication</h2>
    <p className="text-muted">Your medications will appear here.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes (no layout) */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* App routes (with layout) */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="monitor" element={<Monitor />} />
          <Route path="medication" element={<Medication />} />
          <Route path="learn" element={<Learn />} />
          <Route path="profile" element={<Profile />} />
          <Route path="records" element={<Records />} />
          <Route path="ai" element={<AI />} />
        </Route>
        
        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;