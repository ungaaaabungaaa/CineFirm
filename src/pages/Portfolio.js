// src/components/Home.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SideNav from '../components/sidenav';
import transition from '../transition';
import '../styles/portfolio.css';
import Marquee from 'react-fast-marquee';
import usePreventActions from '../hooks/usePreventActions';

const Portfolio = () => {
  usePreventActions();
  return (
    <div>
       <Header></Header>
       <SideNav></SideNav>
       <Footer></Footer>
       <div className='container'>
          <div className='video-grid'>
             <div className='video-layout1'>
             <Marquee pauseOnClick>
                <div id='card1' className='video-card'></div>
                <div id='card2' className='video-card'></div>
                <div id='card3' className='video-card'></div>
                <div id='card4' className='video-card'></div>
                <div id='card5' className='video-card'></div>
            </Marquee>
             </div>
             <div className='video-layout2'>
             <Marquee direction='right' pauseOnClick>
               <div  id='card6' className='video-card2'></div>
                <div  id='card7' className='video-card2'></div>
                <div  id='card8' className='video-card2'></div>
                <div  id='card9' className='video-card2'></div>
            </Marquee>
             </div>
             <div className='video-layout3'>
             <Marquee pauseOnClick>
               <div id='card10' className='video-card'></div>
                <div id='card11' className='video-card'></div>
                <div id='card12' className='video-card'></div>
                <div id='card13' className='video-card'></div>
            </Marquee>
             </div>
          </div>
       </div>
    </div>
  );
};

export default transition(Portfolio);
