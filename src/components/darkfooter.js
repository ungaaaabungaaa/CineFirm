import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/darkfooter.css';

const DarkFooter = () => {
  
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='darkfooter'>
        <h3 className='h3dark' onClick={() => handleNavigation('/portfolio')}>Portfolio</h3>
        <h3 className='h3dark' onClick={() => handleNavigation('/contact')}>Contact Us</h3>
        <h3 className='h3dark' onClick={() => handleNavigation('/about')}>About Us</h3>
    </div>
  );
};

export default DarkFooter;
