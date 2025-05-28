import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
        position: 'relative',
        padding: '1rem'
      }}
    >
      {/* Right-side buttons */}
      <div
        className="home-top-buttons"
        style={{
          position: 'absolute',
          top: 40,
          right: 40,
          display: 'flex',
          gap: '1rem'
        }}
      >
        <button className="btn btn-primary" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/register')}>
          Register
        </button>
      </div>

      <h1 className="home-title">
        Welcome to Chatee Blog!
      </h1>
      <p className="home-description">
        Chatee  is your friendly space to share ideas, connect with others, and express yourself freely. Join our vibrant community and start meaningful conversations today!
      </p>
      <div className="alive-3d-card">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Alive 3D"
        />
      </div>
      <p className="home-footer">
        Explore, connect, and share your thoughts in a lively community!
      </p>
    </div>
  );
};

export default Home;