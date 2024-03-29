// Info component for displaying profile information and social media links
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';

import fotoP from "../assets/profile-photo.png"; 
const Info = () => {
  return (
    <div className="info">
        {/* Displaying profile information and social media links */}
      <img src={fotoP} alt="Profilephoto" className="profilephoto" />
      <h1>Jennifer Rios</h1>
      <div className="buttons">
        <a href="https://github.com/Rios06" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/jennifer-rios-calle-300422296/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Info;

