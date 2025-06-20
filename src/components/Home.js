import React, { useState, useEffect } from 'react';
// Import the real 'useNavigate' hook from react-router-dom.
// IMPORTANT: For this to work in your project, you must have 'react-router-dom' installed
// and you must wrap your <App /> component inside a <BrowserRouter> in your main index.js or App.js file.
import { useNavigate } from 'react-router-dom';

// --- SVG Icons (for cleaner, faster rendering) ---
const CollaborateIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const InnovateIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const GrowIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="20" x2="12" y2="4"></line><polyline points="6 10 12 4 18 10"></polyline></svg>
);


// --- Main App Component ---
export default function App() {
  // Use the actual 'useNavigate' hook from react-router-dom.
  const navigate = useNavigate(); 

  // --- State for the clock ---
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // --- Styles Component (CSS-in-JS pattern) ---
  const Styles = () => (
    <style>{`
      :root {
        --primary: #2563eb;
        --secondary: #1e293b;
        --accent: #3b82f6;
        --background: #f8fafc;
        --surface: #ffffff;
        --text: #0f172a;
        --text-light: #64748b;
        --border: #e2e8f0;
        --shadow: 0 6px 32px -8px rgba(30, 41, 59, 0.08), 0 1.5px 4px rgba(30, 41, 59, 0.04);
        --transition: all 0.25s cubic-bezier(.4,0,.2,1);
      }

      *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        color: var(--text);
        background: var(--background);
        line-height: 1.6;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .app-container { min-height: 100vh; display: flex; flex-direction: column; }
      
      /* --- Status Bar --- */
      .status-bar { background: var(--secondary); color: #e2e8f0; font-size: 0.85rem; padding: 0.4rem 1rem; }
      .status-content { max-width: 1400px; margin: 0 auto; display: flex; justify-content: flex-end; align-items: center; }
      .status-info { display: flex; align-items: center; gap: 0.75rem; }
      .status-user { font-weight: 600; }

      /* --- Header --- */
      .header { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(10px); z-index: 100; border-bottom: 1px solid var(--border); position: sticky; top: 0; }
      .header-content { max-width: 1400px; margin: 0 auto; padding: 1.25rem 2rem; display: flex; justify-content: space-between; align-items: center; }
      .logo { font-size: 1.75rem; font-weight: 800; color: var(--primary); letter-spacing: 1px; user-select: none; }
      .nav-buttons { display: flex; gap: 1rem; }
      
      .btn { padding: 0.7rem 1.5rem; border: 1.5px solid transparent; border-radius: 0.5rem; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: var(--transition); outline: none; }
      .btn-primary { background: var(--primary); color: #fff; }
      .btn-primary:hover { background: var(--accent); transform: translateY(-2px); box-shadow: 0 4px 12px -2px rgba(59,130,246,0.3); }
      .btn-secondary { background: var(--surface); color: var(--primary); border-color: var(--border); }
      .btn-secondary:hover { background: #f0f5ff; border-color: var(--accent); }

      /* --- Hero Section --- */
      .hero { padding: 7rem 2rem; background: radial-gradient(circle at 10% 20%, #e0e8ff, var(--background) 40%); color: var(--text); position: relative; overflow: hidden; }
      .hero-content { max-width: 1400px; margin: 0 auto; z-index: 1; position: relative; text-align: left; }
      .hero h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.1; margin-bottom: 1.5rem; font-weight: 800; color: var(--secondary); max-width: 18ch; }
      .hero p { font-size: clamp(1rem, 2vw, 1.25rem); margin-bottom: 2.5rem; color: var(--text-light); max-width: 55ch; }
      .cta-button { padding: 1rem 2.5rem; background: var(--primary); color: #fff; border: none; border-radius: 0.5rem; font-size: 1.1rem; font-weight: 700; cursor: pointer; transition: var(--transition); display: inline-flex; align-items: center; gap: 0.75rem; box-shadow: var(--shadow); }
      .cta-button:hover { background: var(--accent); transform: translateY(-3px) scale(1.02); box-shadow: 0 8px 20px -5px rgba(59,130,246,0.4); }
      .arrow { font-size: 1.5em; transition: transform 0.2s; }
      .cta-button:hover .arrow { transform: translateX(5px); }
      .hero-visual { position: absolute; right: 0; top: 50%; transform: translateY(-50%); width: 45vw; max-width: 700px; height: 100%; background: radial-gradient(circle at 80% 50%, #c0d3ff 0%, rgba(255,255,255,0) 70%); opacity: 0.7; z-index: 0; pointer-events: none; }
      
      /* --- Features Section --- */
      .features-section { padding: 6rem 2rem; background: var(--surface); }
      .section-title { text-align: center; margin-bottom: 3.5rem; }
      .section-title h2 { font-size: clamp(2rem, 5vw, 2.75rem); font-weight: 800; margin-bottom: 0.75rem; color: var(--secondary); }
      .section-title p { font-size: 1.15rem; color: var(--text-light); max-width: 60ch; margin: 0 auto; }
      .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1400px; margin: 0 auto; }
      .feature-card { background: var(--background); padding: 2.5rem 2rem; border-radius: 0.75rem; transition: var(--transition); border: 1px solid var(--border); }
      .feature-card:hover { transform: translateY(-8px); box-shadow: 0 12px 40px -10px rgba(30, 41, 59, 0.1); border-color: var(--primary); }
      .feature-icon { font-size: 2.5rem; color: var(--primary); margin-bottom: 1.25rem; line-height: 1; }
      .feature-card h3 { font-size: 1.5rem; margin-bottom: 0.5rem; font-weight: 700; }
      .feature-card p { color: var(--text-light); }

      /* --- Responsive Design --- */
      @media (max-width: 768px) {
        .header-content { flex-direction: column; gap: 1rem; padding: 1rem; }
        .nav-buttons { width: 100%; justify-content: center; }
        .hero { padding: 4rem 1.5rem; text-align: center; }
        .hero-content { text-align: center; }
        .hero h1, .hero p { max-width: 100%; }
        .hero-visual { display: none; }
        .features-section { padding: 4rem 1.5rem; }
      }
    `}</style>
  );

  return (
    <>
      <Styles />
      <div className="app-container">
        
        {/* --- Status Bar --- */}
        <div className="status-bar">
          <div className="status-content">
            <div className="status-info">
              <span>{formatDateTime(currentTime)}</span>
              <span className="status-divider">|</span>
              <span className="status-user"> </span>
            </div>
          </div>
        </div>

        {/* --- Header --- */}
        <header className="header">
          <div className="header-content">
            <h1 className="logo">CHATEE</h1>
            <nav className="nav-buttons">
              <button className="btn btn-secondary" onClick={() => navigate('/login')}>Sign In</button>
              <button className="btn btn-primary" onClick={() => navigate('/register')}>Get Started Free</button>
            </nav>
          </div>
        </header>

        <main>
          {/* --- Hero Section --- */}
          <section className="hero">
            <div className="hero-content">
              <h1>Connect, Share, and Grow Together.</h1>
              <p>Chatee is the ultimate community platform for creators, thinkers, and collaborators. Dive into vibrant discussions, share your ideas, and build lasting connections.</p>
              <button className="cta-button" onClick={() => navigate('/register')}>
                Join the Community
                <span className="arrow">→</span>
              </button>
            </div>
            <div className="hero-visual"></div>
          </section>

          {/* --- Features Section --- */}
          <section className="features-section">
            <div className="section-title">
              <h2>A Platform Built for Connection</h2>
              <p>We provide the tools you need to foster a thriving and engaging community.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon"><CollaborateIcon /></div>
                <h3>Seamless Collaboration</h3>
                <p>Engage in real-time conversations, share files effortlessly, and work on projects together in dedicated channels.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><InnovateIcon /></div>
                <h3>Spark Innovation</h3>
                <p>Discover diverse perspectives that fuel creativity. Brainstorm in open forums or private groups to bring ideas to life.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><GrowIcon /></div>
                <h3>Personal Growth</h3>
                <p>Learn from experts, participate in community-led workshops, and expand your network to accelerate your journey.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
