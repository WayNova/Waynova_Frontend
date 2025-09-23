import React, { useState, useEffect } from 'react';

const Navigation = ({ scrollToDemo }) => {
  const [navBgNavy, setNavBgNavy] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        setNavBgNavy(heroRect.bottom <= 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // No hover effect for nav background
  const handleNavMouseEnter = () => {};
  const handleNavMouseLeave = () => {};

  const scrollToSection = (sectionId) => {
    const yOffset = -60; // adjust this value to match nav bar height (in px)
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Use nav-navy/nav-transparent classes for background (only scroll-based)
  // Add tall-nav class only when on hero (navBgNavy is false)
  const navClass = `fixed top-0 w-full z-50 border-b border-gray-200 transition-all ${
    navBgNavy ? 'nav-navy' : 'nav-transparent tall-nav'
  }`;
  return (
    <nav
      className={navClass}
      style={{
        backdropFilter: 'blur(4px)',
        transition: 'background-color 0.3s'
      }}
      onMouseEnter={handleNavMouseEnter}
      onMouseLeave={handleNavMouseLeave}
    >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className={`flex items-center relative ${navBgNavy ? 'h-12' : 'h-16'}`}>
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex items-center">
              <img
                src="/waynova_logo.png" 
                alt="WayNova Logo"
                className="h-21 w-16 mr-[-18px]"
                style={{ objectFit: 'contain', marginTop: '-8px' }}
              />
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-white bg-transparent border-none cursor-pointer focus:outline-none focus-visible:outline-none focus:ring-0"
              style={{ fontFamily: 'Times New Roman, Times, serif', outline: 'none', boxShadow: 'none' }}
            >
              WAYNOVA
            </button>
          </div>
          {/* Centered navigation links */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="nav-link-btn text-white hover:text-[#E6E6FA] px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:outline-none relative bg-transparent border-none"
              style={{ position: 'relative', background: 'transparent', border: 'none' }}
            >
              <span className="relative z-10">How It Works</span>
              <span
                className="nav-link-underline absolute left-1/2 -translate-x-1/2 bottom-1 h-1 w-full rounded-full pointer-events-none transition-all duration-200"
                aria-hidden="true"
              ></span>
            </button>
            <button 
              onClick={() => scrollToSection('simulator')}
              className="nav-link-btn text-white hover:text-[#E6E6FA] px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:outline-none relative bg-transparent border-none"
              style={{ position: 'relative', background: 'transparent', border: 'none' }}
            >
              <span className="relative z-10">Try simulator</span>
              <span
                className="nav-link-underline absolute left-1/2 -translate-x-1/2 bottom-1 h-1 w-full rounded-full pointer-events-none transition-all duration-200"
                aria-hidden="true"
              ></span>
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="nav-link-btn text-white hover:text-[#E6E6FA] px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:outline-none relative bg-transparent border-none"
              style={{ position: 'relative', background: 'transparent', border: 'none' }}
            >
              <span className="relative z-10">Features</span>
              <span
                className="nav-link-underline absolute left-1/2 -translate-x-1/2 bottom-1 h-1 w-full rounded-full pointer-events-none transition-all duration-200"
                aria-hidden="true"
              ></span>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="nav-link-btn text-white hover:text-[#E6E6FA] px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:outline-none relative bg-transparent border-none"
              style={{ position: 'relative', background: 'transparent', border: 'none' }}
            >
              <span className="relative z-10">About Us</span>
              <span
                className="nav-link-underline absolute left-1/2 -translate-x-1/2 bottom-1 h-1 w-full rounded-full pointer-events-none transition-all duration-200"
                aria-hidden="true"
              ></span>
            </button>
      <style>{`
        .nav-link-btn:focus .nav-link-underline,
        .nav-link-btn:active .nav-link-underline {
          opacity: 1 !important;
          background: #a4cff1ff !important;
          height: 3px !important;
          border-radius: 6px !important;
          width: 80% !important;
        }
        .nav-link-underline {
          opacity: 0;
          background: #a4cff1ff;
          height: 3px;
          border-radius: 6px;
          width: 80%;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <button 
              onClick={scrollToDemo}
              className="bg-white text-[#0A2240] px-5 py-2 rounded-lg text-sm font-semibold shadow hover:bg-blue-200 transition-colors focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-[#a4cff1ff]"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;