// client/src/pages/SeekerDashboard.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobList from '../components/JobList';
import NewsFeed from '../components/NewsFeed';
import AppliedJobs from '../components/AppliedJobs';
import '../styles/SeekerDashboard.css';

const SeekerDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [news, setNews] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    // Fetch mock data
    setJobs(mockJobs);
    setNews(mockNews);
    setAppliedJobs(mockAppliedJobs);
  }, []);

  return (
    <div className="seeker-dashboard">
      <Header />
      <main>
        <h1>Welcome, [Name]!</h1>
        <section className="dashboard-content">
          <div className="job-listings">
            <h2>Latest Job Postings</h2>
            <JobList jobs={jobs} />
          </div>
          <div className="news-feed">
            <h2>Latest News and Articles</h2>
            <NewsFeed news={news} />
          </div>
        </section>
        <section className="applied-jobs">
          <h2>Applied Jobs</h2>
          <AppliedJobs jobs={appliedJobs} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SeekerDashboard;

// Mock data
const mockJobs = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Co', location: 'New York, NY' },
  { id: 2, title: 'Data Analyst', company: 'Data Corp', location: 'San Francisco, CA' },
  // Add more mock jobs...
];

const mockNews = [
  { id: 1, title: '10 Tips for a Successful Job Interview', summary: 'Learn how to ace your next job interview...' },
  { id: 2, title: 'The Future of Remote Work', summary: 'Experts predict the trends in remote work...' },
  // Add more mock news...
];

const mockAppliedJobs = [
  { id: 1, title: 'Software Engineer', company: 'Tech Giants Inc', status: 'Pending' },
  { id: 2, title: 'UX Designer', company: 'Design Studio', status: 'Shortlisted' },
  // Add more mock applied jobs...
];