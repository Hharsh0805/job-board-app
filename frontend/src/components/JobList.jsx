import React from 'react';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job.id} className="job-item">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <button className="btn btn-apply">Apply Now</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;

