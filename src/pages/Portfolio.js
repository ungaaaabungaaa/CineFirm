// src/components/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SideNav from '../components/sidenav';
import transition from '../transition';
import '../styles/portfolio.css'

const Portfolio = () => {
  return (
    <div>
       <Header></Header>
       <SideNav></SideNav>
       <Footer></Footer>
       <div className='container'>
          <div className='video-grid'>
             <div className='video-layout1'>
                <div className='video-card'></div>
                <div className='video-card'></div>
                <div className='video-card'></div>
                <div className='video-card'></div>
                <div className='video-card'></div>
             </div>
             <div className='video-layout2'>
                <div className='video-card2'></div>
                <div className='video-card2'></div>
                <div className='video-card2'></div>
                <div className='video-card2'></div>
             </div>
             <div className='video-layout3'>
                <div className='video-card'></div>
                <div className='video-card'></div>
                <div className='video-card'></div>
                <div className='video-card'></div>
                <div className='video-card'></div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default transition(Portfolio);
