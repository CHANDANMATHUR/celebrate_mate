import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!username || !email || !phone || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    // Prepare data dynamically
    const data = {
      name: username,
      email: email,
      phone: Number(phone),
      password: password,
      confirm_password: confirmPassword,
    };

    axios.post('http://localhost:8080/save', data)
      .then(response => {
        console.log(response.data);
        setSuccess('🎉 Account created successfully!');
      })
      .catch(error => {
        console.error('Error posting data:', error);
        setError('Something went wrong while signing up.');
      })
      .finally(() => {
        setLoading(false);
        setUsername('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
      });
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>

        <div className="input-group">
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Phone Number</label>
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

        <div className="input-group password-group">
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <span
            className="toggle"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
