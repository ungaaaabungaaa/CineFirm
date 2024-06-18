// src/components/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SideNav from '../components/sidenav';
import transition from '../transition';
import '../styles/aboutus.css';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <SideNav />
      <div className='aboutus_section'>
        <div className='aboutus-text'>
          <h1>
            Cinefirm <br />
            A Photography & <br />
            Videography company.
          </h1>
          <p>
            We are passionate about our craft & dedication <br />
            towards art. We chose this path with the <br />
            confidence in our work & adaptability to the <br /> tough conditions that we face while we work
          </p>
        </div>

        <div className='aboutus-grid'>
          <div className='scrool_card_layout_1 marquee'>           
              <div className='cards2' id='profile1'></div>
              <div className='cards2'></div>
              <div className='cards2' id='profile2'></div>
              <div className='cards2'></div>
              <div className='cards2' id='profile3'></div>
              <div className='cards2'></div>
          </div>
          <div className='scrool_card_layout_2 marquee2'>
              <div className='cards'></div>
              <div className='cards' id='profile4'></div>
              <div className='cards'></div>
              <div className='cards' id='profile5'></div>
              <div className='cards'></div>
              <div className='cards' id='profile6'></div>
          </div>
          <div className='scrool_card_layout_3 marquee'>
         
              <div className='cards2' id='profile7'></div>
              <div className='cards2'></div>
              <div className='cards2' id='profile8'></div>
              <div className='cards2'></div>
              <div className='cards2' id='profile9'></div>
              <div className='cards2'></div>
             
   
           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default transition(AboutUs);
