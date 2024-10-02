import React from 'react';
import ProfileCard from './ProfileCard.jsx';
import './Header.css'; // Import the header CSS
import './ProfileCard.css'; // Import the profile card CSS

const App = () => {
  return (
    <>
      <header className="header">
        <h1>Personal Profile</h1>
      </header>
      <ProfileCard 
        name="Izak Avendano"
        jobTitle="Video Editor"
        bio="Passionate video editor with a knack for storytelling."
        skills={["Video Editing", "Motion Graphics", "Storytelling"]}
        characteristics={["Creative", "Detail-Oriented", "Tech-Savvy"]}
        hobbies={["Photography", "Traveling", "Music"]}
        contact={{ email: "joejoe.aven@gmail.com", phone: "+63999 869 5094" }}
        socialMedia={{ linkedin: "https://www.linkedin.com/in/izak-avenda%C3%B1o-296063328/", twitter: "https://twitter.com/izakavendano", github: "https://github.com/Izakkkkk" }}
      />
    </>
  );
};

export default App;
