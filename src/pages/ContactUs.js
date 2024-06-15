// src/components/Home.js
import React from 'react';
import Header from '../components/header';
import '../styles/contactus.css';
import Footer from '../components/footer';
import SideNav from '../components/sidenav';
import transition from '../transition';

const ContactUs = () => {
  return (
    <div>
       <Header></Header>
       <SideNav></SideNav>
       <div className='contantus_section'>
        <div className='context'>
          <h1 className='contact_us_h1'>Contact US</h1>
          <br></br>
          <p className='contact_us_p'>Get in touch with us for any photography or videography <br></br>
           requirement. We specialise in food shoots, corporate <br></br>
            events, commercials, weddings and social media videos. <br></br>
             Contact us at +91-9885859637 or send an email to  <br></br>
          cinefirm@gmail.com</p>
        </div>
       </div>
       <Footer></Footer>
    </div>
  );
};

export default transition(ContactUs);