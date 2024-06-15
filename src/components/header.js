import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import whitelogo from '../res/CINEFIRM_WHITE.png';
import darklogo from '../res/BLACK_CINEFIRM_.png';
import '../styles/header.css';

const Header = () => {
  const location = useLocation();

  // Determine which logo to use based on the current path
  const getLogo = () => {
    // Check if the current path matches '/contact'
    if (location.pathname === '/contact') {
      return darklogo;
    } else {
      return whitelogo;
    }
  };

  return (
    <div className='header'>
      <Link to="/" className="logo-link">
        <img className="logo" src={getLogo()} alt="CINEFIRM Logo" />
      </Link>
    </div>
  );
};

export default Header;
