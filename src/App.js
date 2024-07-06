import React, { useState, useEffect } from 'react';
import AppRoutes from './routes';
import './styles/global.css';
import SplashScreen from './components/SplashScreen';
import BackgroundImage from './res/background.webp';
import FaviconDark from './res/BLACK_CINEFIRM_.png';
import FaviconLight from './res/CINEFIRM_WHITE.png';
// Main Slider
import Slider1 from './res/slider/1.webp';
import Slider2 from './res/slider/2.webp';
import Slider3 from './res/slider/3.webp';
import Slider4 from './res/slider/4.webp';
import Slider5 from './res/slider/5.webp';
// vertical Slider
import Profile1 from './res/profile/profile1.webp';
import Profile2 from './res/profile/profile2.webp';
import Profile3 from './res/profile/profile3.webp';
import Profile4 from './res/profile/profile4.webp';
import Profile5 from './res/profile/profile5.webp';
import Profile6 from './res/profile/profile6.webp';
import Profile7 from './res/profile/profile7.webp';
import Profile8 from './res/profile/profile8.webp';
import Profile9 from './res/profile/profile9.webp';
// Portfolio
import Portfolio1 from './res/portfolio/FashionPhotography.webp';
import Portfolio2 from './res/portfolio/frenzy.webp';
import Portfolio3 from './res/portfolio/Mewar.webp';
import Portfolio4 from './res/portfolio/wedding.webp';
import Portfolio5 from './res/portfolio/yuki.webp';
import Portfolio6 from './res/portfolio/biryani.webp';
import Portfolio7 from './res/portfolio/lovestory.webp';
import Portfolio8 from './res/portfolio/shezwan.webp';
import Portfolio9 from './res/portfolio/fashionphotography2.webp';


// Function to preload images
const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          console.log(`Image loaded: ${url}`);
          resolve();
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${url}`);
          reject(new Error(`Failed to load image: ${url}`));
        };
      });
    })
  );
};


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload images
    preloadImages([
      BackgroundImage,
      FaviconDark,
      FaviconLight,
      Slider1,
      Slider2,
      Slider3,
      Slider4,
      Slider5,
      Profile1,
      Profile2,
      Profile3,
      Profile4,
      Profile5,
      Profile6,
      Profile7,
      Profile8,
      Profile9,
      Portfolio1,
      Portfolio2,
      Portfolio3,
      Portfolio4,
      Portfolio5,
      Portfolio6,
      Portfolio7,
      Portfolio8,
      Portfolio9,
      // Add more image URLs here if needed
    ])
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
        setLoading(false); // Ensure the app still loads if an image fails to preload
      });
  }, []);

  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <AppRoutes />
      )}
    </div>
  );
}

export default App;
