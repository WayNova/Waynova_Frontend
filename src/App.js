import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Simulator from './components/Simulator';
import AboutUs from './components/AboutUs';
import CallToAction from './components/CallToAction';
function App() {
  useEffect(() => {
    
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

   
    return () => {
      AOS.refresh();
    };
  }, []);

  const scrollToDemo = () => {
    document.getElementById('cta').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' // ensures the top of the section is at the top of the viewport
    });
  };

  const scrollToSimulator = () => {
    document.getElementById('simulator').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="App">
      <Navigation scrollToDemo={scrollToDemo} />
      <Hero scrollToDemo={scrollToDemo} scrollToSimulator={scrollToSimulator} />
  <HowItWorks />
  <Simulator scrollToDemo={scrollToDemo} />
  <Features />
  <AboutUs />
      <CallToAction />
    </div>
    
  );
}

export default App;