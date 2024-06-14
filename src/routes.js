import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import AboutUs from '../src/pages/AboutUs';
import ContactUs from '../src/pages/ContactUs';
import Terms from '../src/pages/Terms';
import Portfolio from '../src/pages/Portfolio';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
