// client/src/pages/RecruiterDashboard.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostForm from '../components/JobPostForm';
import RecruiterJobBoard from '../components/RecruiterJobBoard';
import RecruiterAnalytics from '../components/RecruiterAnalytics';
import '../styles/RecruiterDashboard.css';

const RecruiterDashboard = () => {
  const [activeTab, setActiveTab] = useState('postJob');

  const renderContent = () => {
    switch (activeTab) {
      case 'postJob':
        return <JobPostForm />;
      case 'viewJobs':
        return <RecruiterJobBoard />;
      case 'analytics':
        return <RecruiterAnalytics />;
      default:
        return null;
    }
  };

  return (
    <div className="recruiter-dashboard">
      <Header />
      <main>
        <h1>Recruiter Dashboard</h1>
        <nav className="dashboard-nav">
          <button onClick={() => setActiveTab('postJob')}>Post a Job</button>
          <button onClick={() => setActiveTab('viewJobs')}>View Posted Jobs</button>
          <button onClick={() => setActiveTab('analytics')}>Analytics</button>
        </nav>
        <div className="dashboard-content">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecruiterDashboard;