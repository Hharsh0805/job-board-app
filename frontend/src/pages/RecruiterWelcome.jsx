import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/RecruiterWelcome.css';

const RecruiterWelcome = () => {
  return (
    <div className="recruiter-welcome">
      <Header />
      <main className="welcome-content">
        <h1>Welcome, [Name] to JobPortal for Recruiters!</h1>
        <p>We're excited to help you find the best talent for your company. Let's get started!</p>
        <div className="welcome-steps">
          <div className="step">
            <h2>Step 1: Complete Your Company Profile</h2>
            <p>Add information about your company to attract top candidates.</p>
            <Link to="/company-profile" className="btn btn-primary">Complete Company Profile</Link>
          </div>
          <div className="step">
            <h2>Step 2: Post a Job</h2>
            <p>Create your first job listing and start receiving applications.</p>
            <Link to="/post-job" className="btn btn-primary">Post a Job</Link>
          </div>
          <div className="step">
            <h2>Step 3: Manage Applications</h2>
            <p>Review and manage incoming applications efficiently.</p>
            <Link to="/manage-applications" className="btn btn-primary">Manage Applications</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecruiterWelcome;

