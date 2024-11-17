import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>Komal's App</h2>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/campaigns">Campaign Cards</Link>
            </li>
            <li>
              <Link to="/edit-campaign">Edit Campaign</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
