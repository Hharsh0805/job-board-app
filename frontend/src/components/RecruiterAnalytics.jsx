import React from 'react';

const RecruiterAnalytics = () => {
  const analyticsData = {
    totalApplications: 150,
    averageApplicantsPerJob: 12,
    topSkills: ['JavaScript', 'React', 'Node.js', 'Python'],
    applicationTrend: [10, 15, 20, 25, 30, 25, 20], // Last 7 days
  };

  return (
    <div className="recruiter-analytics">
      <h2>Recruitment Analytics</h2>
      <div className="analytics-grid">
        <div className="analytics-item">
          <h3>Total Applications</h3>
          <p className="analytics-number">{analyticsData.totalApplications}</p>
        </div>
        <div className="analytics-item">
          <h3>Avg. Applicants per Job</h3>
          <p className="analytics-number">{analyticsData.averageApplicantsPerJob}</p>
        </div>
        <div className="analytics-item">
          <h3>Top Skills</h3>
          <ul>
            {analyticsData.topSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="analytics-item">
          <h3>Application Trend (Last 7 Days)</h3>
          <div className="trend-graph">
            {analyticsData.applicationTrend.map((value, index) => (
              <div key={index} className="trend-bar" style={{ height: `${value * 3}px` }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterAnalytics;

