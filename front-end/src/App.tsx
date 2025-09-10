import React, { useState } from 'react';
import Login from './components/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<string>('');

  const handleLogin = (username: string, password: string) => {
    // Simple hardcoded authentication for demo
    if ((username.toLowerCase() === 'admin' && password === 'password') ||
        (username.toLowerCase() === 'demo' && password === 'password')) {
      setUser(username);
      setIsLoggedIn(true);
    } else {
      alert('AUTHENTICATION FAILED!\nInvalid credentials.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser('');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <div className="scanlines"></div>
      <div className="crt-overlay"></div>
      
      <header className="App-header">
        <div className="retro-container">
          <div className="title-section">
            <h1 className="retro-title">
              <span className="pixel-text">CRYPTO</span>
              <span className="pixel-text neon">DASHBOARD</span>
            </h1>
            <div className="subtitle-bar">
              <span className="blink">★</span> 
              DIGITAL CURRENCY TRACKER 
              <span className="blink">★</span>
            </div>
            <div className="user-info">
              <span className="user-welcome">WELCOME COMMANDER {user.toUpperCase()}</span>
              <button className="logout-btn" onClick={handleLogout}>
                [ LOGOUT ]
              </button>
            </div>
          </div>

          <div className="retro-box">
            <div className="system-status">
              <div className="status-header">[ SYSTEM STATUS ]</div>
              <div className="status-grid">
                <div className="status-line">
                  <span className="status-label">FRONTEND:</span>
                  <span className="status-value online">ONLINE</span>
                </div>
                <div className="status-line">
                  <span className="status-label">BACKEND:</span>
                  <span className="status-value online">CONNECTED</span>
                </div>
                <div className="status-line">
                  <span className="status-label">CRYPTO-NET:</span>
                  <span className="status-value ready">READY</span>
                </div>
                <div className="status-line">
                  <span className="status-label">USER:</span>
                  <span className="status-value online">{user.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="retro-box">
            <div className="welcome-message">
              <div className="message-header">[ MISSION BRIEFING ]</div>
              <p className="pixel-text-small">
                Cryptocurrency surveillance system initialized.<br/>
                Real-time market data acquisition protocols loaded.<br/>
                TypeScript neural networks: ACTIVE<br/>
                Commander {user.toUpperCase()} authenticated and ready for deployment.
              </p>
            </div>
          </div>

          <div className="start-button">
            <button className="retro-btn">
              <span className="btn-text">▶ BEGIN DATA ACQUISITION</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
