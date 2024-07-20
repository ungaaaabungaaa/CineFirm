// src/components/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SideNav from '../components/sidenav';
import transition from '../transition';
import '../styles/terms.css';
import usePreventActions from '../hooks/usePreventActions';
import Marquee from "react-fast-marquee";

const Terms = () => {
  usePreventActions();
  return (
    <div>
       <Header></Header>
       <SideNav></SideNav>

      <div className='container'>
        <Marquee direction='down'>
          <br></br>
          <div className='cards2' id='profile1'></div>
          <br></br>
          <div className='cards2'></div>
          <br></br>
          <div className='cards2' id='profile2'></div>
          <br></br>
          <div className='cards2'></div>
          <br></br>
          <div className='cards2' id='profile3'></div>
          <br></br>
          <div className='cards2'></div>
        </Marquee>
      </div>
     
        


      
       <Footer></Footer>
    </div>
  );
};

export default transition(Terms);