// src/components/Home.js
import React from 'react';
import Header from '../components/header';
import '../styles/contactus.css';
import DarkFooter from '../components/darkfooter';
import DarkSideNav from '../components/darksidenav';
import transition from '../transition';
import usePreventActions from '../hooks/usePreventActions';

const ContactUs = () => {
  usePreventActions();
  return (
    <div>
       <Header></Header>
       <DarkSideNav></DarkSideNav>
       <div id='bg-move' className='contantus_section'>
        <div className='context'>
          <h1 className='contact_us_h1'>Contact US</h1>
          <br></br>
          <p className='contact_us_p'>For all your photography and videography needs, we're here to help! Specializing <br></br> in food shoots, corporate events, commercials, weddings, & social media videos, <br></br> we deliver top-notch services tailored to your requirements. <br></br> <br></br> Contact : +91-9885859637 <br></br> Email : cinefirm@gmail.com</p>
        </div>
       </div>
       <DarkFooter></DarkFooter>
    </div>
  );
};

export default transition(ContactUs);