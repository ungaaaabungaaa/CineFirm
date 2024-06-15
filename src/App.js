import React, { useState, useEffect } from 'react';
import AppRoutes from './routes';
import './styles/global.css';
import SplashScreen from './components/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 1.5 seconds
    return () => clearTimeout(timer);
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
