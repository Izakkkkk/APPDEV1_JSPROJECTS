import React from 'react';
import './ProfileCard.css';
import profileImage from './img.jpg'; // Import profile image

const ProfileCard = ({ name, jobTitle, bio, characteristics, hobbies, contact, socialMedia, skills }) => {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-image-wrapper">
          <img src={profileImage} alt={name} className="profile-image" />
        </div>
        <h2 className="profile-name">{name}</h2>
        <h3 className="profile-job">{jobTitle}</h3>
        <p className="profile-bio">{bio}</p>
        <div className="profile-info">
          <h4>Characteristics</h4>
          <ul className="characteristics-list">
            {characteristics.map((char, index) => (
              <li key={index}>{char}</li>
            ))}
          </ul>
          <div className="skills">
          <h4>Skills</h4>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
          <h4>Hobbies</h4>
          <ul className="hobbies-list">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
        <div className="contact-info">
          <h4>Contact</h4>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
        <div className="social-media-links">
          <h4>Social Media</h4>
          <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
          <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">Twitter</a><br />
          <a href={socialMedia.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileCard;
