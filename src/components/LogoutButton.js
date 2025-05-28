import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login'); // Change '/login' to your login route if different
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        backgroundColor: '#ff4d4f',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        margin: '0.5rem 0'
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;