import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='footer'>
        <h3 onClick={() => handleNavigation('/portfolio')}>Portfolio</h3>
        <h3 onClick={() => handleNavigation('/contact')}>Contact Us</h3>
        <h3 onClick={() => handleNavigation('/about')}>About Us</h3>
    </div>
  );
};

export default Footer;
