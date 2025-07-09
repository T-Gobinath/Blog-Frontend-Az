import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// --- Registration Page Component ---
export default function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    mobile: '',
    role: 'User' // Default role
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // A basic validation check
    if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long.');
        setLoading(false);
        return;
    }

    try {
      const response = await axios.post('https://database-1.cng4e8y82av7.eu-north-1.rds.amazonaws.com/api/addUser', formData);
      if (response.data) {
        // Instead of an alert, we can navigate directly or show a success message.
        // For a better user experience, you might want to show a success page or modal.
        navigate('/login', { state: { successMessage: 'Registration successful! Please log in.' } });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // --- Reusable Styles from Login Page for Consistency ---
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
        padding: 2.5rem; /* Adjusted padding for more fields */
        border-radius: 1rem;
        box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 480px; /* Slightly wider for more fields */
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
        margin-bottom: 1rem; /* Tighter spacing for more fields */
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
        margin-bottom: 1rem;
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
        margin-top: 0.5rem;
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
        justify-content: center;
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
          padding: 2rem 1.5rem;
        }

        .heading-1 {
          font-size: 1.75rem;
        }
      }
      
    `}</style>
  );

  return (
    <>
      <Styles />
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-logo">📝</div>
          <h1 className="heading-1">Create Your Account</h1>
          <p className="subheading">Join the Chatee community today!</p>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text" name="name" placeholder="Full Name"
                className="input-field" value={formData.name} onChange={handleChange} required
              />
            </div>
            <div className="input-group">
              <input
                type="text" name="username" placeholder="Username"
                className="input-field" value={formData.username} onChange={handleChange} required
              />
            </div>
            <div className="input-group">
              <input
                type="password" name="password" placeholder="Password"
                className="input-field" value={formData.password} onChange={handleChange} required
              />
            </div>
            <div className="input-group">
              <input
                type="tel" name="mobile" placeholder="Mobile Number"
                className="input-field" value={formData.mobile} onChange={handleChange} required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Create Account'}
            </button>

            <div className="auth-links">
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="nav-link"
              >
                Already have an account? Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
