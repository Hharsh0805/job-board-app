
import React from 'react';

const RecruiterJobBoard = () => {
  const postedJobs = [
    { id: 1, title: "Senior Frontend Developer", applicants: 15, status: "Open" },
    { id: 2, title: "UX Designer", applicants: 8, status: "Closed" },
    { id: 3, title: "Data Analyst", applicants: 20, status: "Open" },
  ];

  return (
    <div className="recruiter-job-board">
      <h2>Your Posted Jobs</h2>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Applicants</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {postedJobs.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.applicants}</td>
              <td>{job.status}</td>
              <td>
                <button className="btn btn-view">View</button>
                <button className="btn btn-edit">Edit</button>
                <button className="btn btn-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecruiterJobBoard;

