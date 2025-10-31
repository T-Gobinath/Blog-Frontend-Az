import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// --- Login Page Component ---
export default function Login() {
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
      const response = await axios.post('https://blog-bcakend-az-1.onrender.com/api/login', credentials);
      if (response.data) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(response.data.data || response.data));
        // Navigate to the main chat page after successful login
        navigate('/chateemain');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };
  
  // --- Styles for the Login Page ---
  const Styles = () => (
    <style>{`
      .auth-container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        padding: 1rem;
        font-family: 'Inter', sans-serif;
      }

      .auth-card {
        background: #ffffff;
        padding: 3rem;
        border-radius: 1rem;
        box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 450px;
        text-align: center;
        border: 1px solid #e2e8f0;
        animation: fadeIn 0.5s ease-out;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .auth-logo {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #2563eb, #3b82f6);
        border-radius: 50%;
        color: white;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        font-weight: bold;
        box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
      }

      .heading-1 {
        font-size: 2rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 0.5rem;
      }
      
      .subheading {
        color: #64748b;
        margin-bottom: 2rem;
      }

      .input-group {
        margin-bottom: 1.25rem;
        position: relative;
      }

      .input-field {
        width: 100%;
        padding: 0.9rem 1rem;
        border: 1px solid #cbd5e1;
        border-radius: 0.5rem;
        font-size: 1rem;
        transition: border-color 0.2s, box-shadow 0.2s;
        background-color: #f8fafc;
      }

      .input-field:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
      }

      .error-message {
        background: #fee2e2;
        color: #b91c1c;
        padding: 0.75rem;
        border-radius: 0.5rem;
        margin-bottom: 1.25rem;
        font-size: 0.9rem;
        text-align: center;
      }
      
      .btn {
        width: 100%;
        padding: 0.9rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.25s;
      }
      
      .btn-primary {
        background: #2563eb;
        color: #fff;
      }
      
      .btn-primary:hover:not(:disabled) {
        background: #3b82f6;
        box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        transform: translateY(-2px);
      }
      
      .btn:disabled {
        background-color: #94a3b8;
        cursor: not-allowed;
      }
      
      .auth-links {
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
      }
      
      .nav-link {
        color: #2563eb;
        text-decoration: none;
        background: none;
        border: none;
        padding: 0;
        font-size: inherit;
        cursor: pointer;
      }
      
      .nav-link:hover {
        text-decoration: underline;
      }

      /* --- Mobile Responsive Styles --- */
      @media (max-width: 480px) {
        .auth-card {
          padding: 2rem;
        }

        .heading-1 {
          font-size: 1.75rem;
        }

        .auth-links {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }
      }
      
    `}</style>
  );

  return (
    <>
      <Styles />
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-logo">C</div>
          <h1 className="heading-1">Welcome Back!</h1>
          <p className="subheading">Sign in to continue to Chatee</p>
          
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

            <div className="auth-links">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="nav-link"
              >
                ← Back to Home
              </button>
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="nav-link"
              >
                Don't have an account? Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

