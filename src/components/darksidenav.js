import React from 'react';
import '../styles/darksidenav.css';

const DarkSideNav = () => {
  return (
    <div className='DarkSideNav'>
      <a href="https://www.instagram.com/cinefirm_official/" target="_blank" rel="noopener noreferrer">
        <span className="mdi--instagram-dark"></span>
      </a>
      <br/>
      <a href="https://x.com/cinefirm" target="_blank" rel="noopener noreferrer">
        <span className="pajamas--twitter-dark"></span>
      </a>
      <br/>
      <a href="https://www.facebook.com/cinefirm/" target="_blank" rel="noopener noreferrer">
        <span className="gg--facebook-dark"></span>
      </a>
    </div>
  );
};

export default DarkSideNav;

