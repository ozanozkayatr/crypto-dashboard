import React from 'react';
import './App.css';

function App() {
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
              </div>
            </div>
          </div>

          <div className="retro-box">
            <div className="welcome-message">
              <div className="message-header">[ WELCOME COMMANDER ]</div>
              <p className="pixel-text-small">
                Initialize your cryptocurrency surveillance system.<br/>
                Real-time market data acquisition protocols loaded.<br/>
                TypeScript neural networks: ACTIVE
              </p>
            </div>
          </div>

          <div className="start-button">
            <button className="retro-btn">
              <span className="btn-text">▶ START MISSION</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
