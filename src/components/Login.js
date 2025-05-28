import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://bloger-b7ayaeawb0cpf3e5.canadacentral-01.azurewebsites.net/api/login', credentials);
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data.data || response.data));
        navigate('/chateemain'); // Correct route path
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">👤</div>
        <h1 className="heading-1">Welcome Back</h1>
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input-field"
              value={credentials.username}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-field"
              value={credentials.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="nav-link"
              style={{ marginRight: '1rem' }}
            >
              Back to Home
            </button>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="nav-link"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
