import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/ProfileUpdate.css';

const ProfileUpdate = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio || '',
    skills: user.skills || '',
    experience: user.experience || '',
    education: user.education || '',
    company: user.company || '',
    industry: user.industry || '',
  });
  const [profilePicture, setProfilePicture] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    for (const key in formData) {
      updatedData.append(key, formData[key]);
    }
    if (profilePicture) {
      updatedData.append('profilePicture', profilePicture);
    }
    await updateProfile(updatedData);
  };

  return (
    <div className="profile-update-container">
      <h2>Update Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="file" id="profilePicture" onChange={handleFileChange} accept="image/*" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" value={formData.bio} onChange={handleChange}></textarea>
        </div>
        {user.role === 'jobSeeker' && (
          <>
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="experience">Experience</label>
              <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="education">Education</label>
              <textarea id="education" name="education" value={formData.education} onChange={handleChange}></textarea>
            </div>
          </>
        )}
        {user.role === 'recruiter' && (
          <>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="industry">Industry</label>
              <input type="text" id="industry" name="industry" value={formData.industry} onChange={handleChange} />
            </div>
          </>
        )}
        <button type="submit" className="btn btn-update">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileUpdate;

