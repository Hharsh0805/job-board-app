import React, { useState } from 'react';

const JobPostForm = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    description: '',
    salaryRange: '',
    experienceLevel: '',
    skills: '',
    location: '',
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the job data to your backend
    console.log('Job Posted:', jobData);
    // Reset form or show success message
  };

  return (
    <form onSubmit={handleSubmit} className="job-post-form">
      <h2>Post a New Job</h2>
      <input
        type="text"
        name="title"
        value={jobData.title}
        onChange={handleChange}
        placeholder="Job Title"
        required
      />
      <input
        type="text"
        name="company"
        value={jobData.company}
        onChange={handleChange}
        placeholder="Company Name"
        required
      />
      <textarea
        name="description"
        value={jobData.description}
        onChange={handleChange}
        placeholder="Job Description"
        required
      ></textarea>
      <input
        type="text"
        name="salaryRange"
        value={jobData.salaryRange}
        onChange={handleChange}
        placeholder="Salary Range"
      />
      <input
        type="text"
        name="experienceLevel"
        value={jobData.experienceLevel}
        onChange={handleChange}
        placeholder="Experience Level"
      />
      <input
        type="text"
        name="skills"
        value={jobData.skills}
        onChange={handleChange}
        placeholder="Required Skills"
      />
      <input
        type="text"
        name="location"
        value={jobData.location}
        onChange={handleChange}
        placeholder="Job Location"
      />
      <button type="submit" className="btn btn-post-job">Post Job</button>
    </form>
  );
};

export default JobPostForm;

