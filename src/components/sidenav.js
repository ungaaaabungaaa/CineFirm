import React from 'react';
import '../styles/sidenav.css';

const SideNav = () => {
  return (
    <div className='SideNav'>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <span className="mdi--instagram"></span>
      </a>
      <br />
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <span className="pajamas--twitter"></span>
      </a>
      <br />
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <span className="gg--facebook"></span>
      </a>
    </div>
  );
};

export default SideNav;

