import React from 'react';

const AppliedJobs = ({ jobs }) => {
  return (
    <div className="applied-jobs">
      {jobs.map((job) => (
        <div key={job.id} className="applied-job-item">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>Status: {job.status}</p>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;

