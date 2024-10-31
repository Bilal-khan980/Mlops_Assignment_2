import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#333' }}>
      {/* Logo */}
      <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>MLOps Platform</Link>
      </div>
      
      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
        <Link to="/signup" style={{ color: '#fff', textDecoration: 'none' }}>Signup</Link>
        <Link to="/forgot-password" style={{ color: '#fff', textDecoration: 'none' }}>Forgot Password</Link>
      </div>
    </nav>
  );
}

export default Navbar;
