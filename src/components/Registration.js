import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    mobile: '',
    role: 'User'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'mobile' ? Number(value) || '' : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://bloger-b7ayaeawb0cpf3e5.canadacentral-01.azurewebsites.net/api/addUser', formData);
      if (response.data) {
        alert('Registration successful!');
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">📝</div>
        <h1 className="heading-1">Create Account</h1>
        
        <form onSubmit={handleSubmit}>
          {[
            { name: 'username', type: 'text', label: 'Username' },
            { name: 'password', type: 'password', label: 'Password' },
            { name: 'name', type: 'text', label: 'Full Name' },
            { name: 'mobile', type: 'tel', label: 'Mobile Number' }
          ].map(field => (
            <div key={field.name} className="input-group">
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className="input-field"
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
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
              onClick={() => navigate('/login')}
              className="nav-link"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;