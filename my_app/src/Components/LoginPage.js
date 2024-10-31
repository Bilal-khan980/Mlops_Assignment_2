import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [data, setData] = useState('');
  const token = localStorage.getItem('token');



  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/protected', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setData(response.data.message);
        } catch (error) {
            setData(error.response.data.error || 'Error accessing protected route');
        }
    };
    fetchData();
}, [token]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      setSuccess(response.data.message);
      // Store JWT in localStorage
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#000', color: '#fff', height: '100vh', justifyContent: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ padding: '10px', width: '250px' }}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ padding: '10px', width: '250px' }}
          required
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#fff', color: '#000' }}>Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <a href="/forgot-password" style={{ color: '#fff' }}>Forgot Password?</a>
    <p>{data}</p>
    </div>

  );
}

export default LoginPage;
