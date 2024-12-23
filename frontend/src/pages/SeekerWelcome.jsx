import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/SeekerWelcome.css';

const SeekerWelcome = () => {
  return (
    <div className="seeker-welcome">
      <Header />
      <main className="welcome-content">
        <h1>Welcome, [Name] to JobPortal!</h1>
        <p>We're excited to help you find your dream job. Let's get started!</p>
        <div className="welcome-steps">
          <div className="step">
            <h2>Step 1: Complete Your Profile</h2>
            <p>Add your skills, experience, and preferences to help us match you with the best opportunities.</p>
            <Link to="/profile" className="btn btn-primary">Complete Profile</Link>
          </div>
          <div className="step">
            <h2>Step 2: Explore Job Listings</h2>
            <p>Browse through our extensive list of job openings from top companies.</p>
            <Link to="/jobs" className="btn btn-primary">Explore Jobs</Link>
          </div>
          <div className="step">
            <h2>Step 3: Apply and Track</h2>
            <p>Apply to jobs that interest you and track your application status.</p>
            <Link to="/applications" className="btn btn-primary">View Applications</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SeekerWelcome;

