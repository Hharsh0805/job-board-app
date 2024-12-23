import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaUser, FaBell } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">JobPortal</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/jobs">Find Jobs</Link></li>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        {user ? (
          <>
            <Link to={user.role === 'jobSeeker' ? '/seeker-dashboard' : '/recruiter-dashboard'} className="btn btn-dashboard">Dashboard</Link>
            <Link to="/profile" className="btn btn-icon"><FaUser /></Link>
            <Link to="/notifications" className="btn btn-icon"><FaBell /></Link>
            <button onClick={logout} className="btn btn-logout">Log Out</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-login">Log In</Link>
            <Link to="/signup" className="btn btn-signup">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

