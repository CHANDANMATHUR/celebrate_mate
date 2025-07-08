import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please fill out all fields.');
      return;
    }

    setLoading(true);

    // Simulate API login
    setTimeout(() => {
      setLoading(false);


      // Prepare data dynamically
    
      let url = `http://localhost:8080/verify-by-email?email=${username.trim()}&password=${password.trim()}`
      axios.get(url)
        .then(response => {
          console.log(response.data);
          setError('Login successful!');

          setUsername('');
          setPassword('');

        })
        .catch(error => {
          setError('Invalid User');
        })




    }, 1500);
  };

  return (
    <div className="login-box">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="input-group">
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>

        <div className="input-group password-group">
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
          <span
            className="toggle"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;
