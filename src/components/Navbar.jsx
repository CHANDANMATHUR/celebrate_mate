import React from 'react';
import './Navbar.css';

function Navbar({ user }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        CelebrateMate
      </div>

      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/profile">Profile</a></li>
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
