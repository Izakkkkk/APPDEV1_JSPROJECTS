// src/ProfileCard.js
import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, jobTitle, bio, imageUrl }) => {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={name} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <h3 className="profile-job">{jobTitle}</h3>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default ProfileCard;
