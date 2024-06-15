// src/components/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SideNav from '../components/sidenav';
import transition from '../transition';
import '../styles/aboutus.css'

const AboutUs = () => {
  return (
    <div>
      <Header></Header>
      <SideNav></SideNav>
      <div className='aboutus_section'>
        <div className='aboutus-text'>
           <h1>
            Cinefirm  <br></br>
            A Photography & <br></br>
            Videography company.
           </h1>
           <p>We are passionate about our craft & dedication <br></br>
            towards art. We chose this path with the <br></br>
             confidence on our work & adaptability to the <br></br> tough conditions that we face while we work</p>
        </div>

        <div className='aboutus-grid'>
           
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default transition(AboutUs);