import React from 'react';

function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#000', color: '#fff', height: '100vh', justifyContent: 'center' }}>
      <h1>Welcome to MLOps Platform</h1>
      <p>Your one-stop solution for deploying scalable applications.</p>
      <a href="/login" style={{ color: '#fff' }}>Login</a>
      <a href="/signup" style={{ color: '#fff' }}>Signup</a>
    </div>
  );
}

export default HomePage;
