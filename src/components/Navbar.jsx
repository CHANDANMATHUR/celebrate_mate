import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ user }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        CelebrateMate
      </div>

      <ul className="navbar-links">
        <Link to="/">LogOut..</Link> |{' '}
      </ul>

      {user && (
        <div className="navbar-user">
          <span className="navbar-user-name">👤 {user.name}</span>
          <span className="navbar-user-email">{user.email}</span>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
