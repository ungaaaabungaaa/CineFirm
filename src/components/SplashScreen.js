import React from 'react';
import '../styles/splashscreen.css'
import logo from '../res/CINEFIRM_WHITE.png'
const SplashScreen = () => {

    return (
    <>
    <div className='splashscreen'>
        <img className='logo_splashscreen' src={logo} alt="CINEFIRM Logo" />
    </div>
    </>
  );
};

export default SplashScreen;