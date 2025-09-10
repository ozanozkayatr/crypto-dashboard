import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      setIsLoading(true);
      // Simulate loading delay for retro effect
      setTimeout(() => {
        onLogin(username, password);
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <div className="login-container">
      <div className="scanlines"></div>
      <div className="crt-overlay"></div>
      
      <div className="login-terminal">
        <div className="terminal-header">
          <div className="header-bar">
            <span className="terminal-title">[ CRYPTO SECURITY TERMINAL ]</span>
            <div className="status-lights">
              <span className="light red blink-slow"></span>
              <span className="light yellow"></span>
              <span className="light green blink"></span>
            </div>
          </div>
        </div>

        <div className="terminal-content">
          <div className="login-header">
            <div className="ascii-art">
              <pre>{`
   ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
   ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
      ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
      ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
      ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
      ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
              `}</pre>
            </div>
            
            <div className="system-info">
              <div className="info-line">
                <span className="label">SYSTEM:</span>
                <span className="value">CRYPTO SURVEILLANCE v2.0</span>
              </div>
              <div className="info-line">
                <span className="label">STATUS:</span>
                <span className="value online">SECURE CONNECTION ESTABLISHED</span>
              </div>
              <div className="info-line">
                <span className="label">AUTH:</span>
                <span className="value warning">CREDENTIALS REQUIRED</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label className="input-label">
                <span className="label-text">[ USERNAME ]</span>
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="retro-input"
                placeholder="ENTER USER ID..."
                disabled={isLoading}
                autoComplete="username"
              />
            </div>

            <div className="input-group">
              <label className="input-label">
                <span className="label-text">[ PASSWORD ]</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="retro-input"
                placeholder="ENTER ACCESS CODE..."
                disabled={isLoading}
                autoComplete="current-password"
              />
            </div>

            <div className="login-actions">
              <button 
                type="submit" 
                className={`retro-login-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading-text">
                    <span className="spinner">⟲</span> AUTHENTICATING...
                  </span>
                ) : (
                  <span>▶ INITIATE LOGIN SEQUENCE</span>
                )}
              </button>
            </div>
          </form>

          <div className="login-footer">
            <div className="demo-credentials">
              <div className="demo-header">[ DEMO ACCESS CODES ]</div>
              <div className="demo-item">
                <span className="demo-label">USER:</span>
                <span className="demo-value">admin</span>
              </div>
              <div className="demo-item">
                <span className="demo-label">PASS:</span>
                <span className="demo-value">password</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
