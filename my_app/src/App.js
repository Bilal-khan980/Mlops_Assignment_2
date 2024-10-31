import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/Components/HomePage.js';
import LoginPage from '../src/Components/LoginPage.js';
import SignupPage from '../src/Components/SignUpPage.js';
import ForgotPasswordPage from '../src/Components/ForgotPasswordPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
