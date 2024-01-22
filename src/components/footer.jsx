// End of page component to display social media links
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/fontawesome-free-brands';

const Footer = () => {
  // Array of social media links with corresponding icons
  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/Rios06' },
    { icon: faInstagram, url: 'https://www.instagram.com/_rios66/' },
    { icon: faFacebook, url: 'https://www.facebook.com/Jennifer.Rios.cll' },
  ];

  return (
    <div className="footer">
       {/* Displaying social media links */}
      <div className="social-icons">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={link.icon} />
            
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
