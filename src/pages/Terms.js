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

    
      
        


      
       <Footer></Footer>
    </div>
  );
};

export default transition(Terms);