import React, { useEffect } from 'react';

const Hero = ({ scrollToDemo, scrollToSimulator }) => {
  
  const requestLiveDemoRef = React.useRef(null);
  const tryGrantSimulatorRef = React.useRef(null);

  
  const [hovered, setHovered] = React.useState({ request: false, simulator: false });
  useEffect(() => {
    
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelectorAll('.floating-element');
      const speed = 0.5;
      
      parallax.forEach(element => {
        const y = scrolled * speed;
        element.style.transform = `translateY(${y}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
  id="hero"
  className="hero-section relative flex items-center justify-center"
  style={{
    height: 800,
    background: 'linear-gradient(180deg, #2C3E64 0%, #F9F6F2 100%)' // lighter navy
  }}
>
      
{/* <div style={{ backgroundColor: 'grey', width: '100%', height: '100%' }}> */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <img
            src="/waynova_logo.png"
            alt="WayNova Logo Background"
            className="absolute left-1/2 top-1/2"
            style={{
              transform: 'translate(-50%, -49%)',
              opacity: 0.25,
              width: '1100px',
              maxWidth: '2500vw',
              zIndex: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
              
          <div data-aos="fade-up" data-aos-duration="800" style={{ position: 'relative', zIndex: 1 }}>
            <h1
              className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ color: '#0A2240' }}
            >
              <br/>
              Accelerate Public Sector Sales with AI-Driven Grant Intelligence{' '}
              <span
                style={{
            background: 'linear-gradient(90deg, #0A2240 0%, #0A2240 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
                }}
              >
                {/* Sell Only to Funded Agencies. */}
              </span>
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" style={{ position: 'relative', zIndex: 1 }}>
            <p
              className="hero-subtitle text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
              style={{ color: '#444444' }}
            >
              WayNova helps sales teams identify funded prospects, streamline engagement, and close deals with confidence

            </p>
          </div>

          
          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="250">
            <p
              className="italic mb-8"
              style={{ color: '#444444ff', fontStyle: 'italic', fontSize: '1.1rem' }}
            >
              A BRIGHTER WAY TO NAVIGATE SALES
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA: Navy only, no gradients or alternate blues */}
          <button
            onClick={scrollToDemo}
            ref={requestLiveDemoRef}
            style={{
              backgroundColor:
                hovered.simulator
                  ? '#F9F6F2'
                  : hovered.request
                  ? '#0A2240'
                  : '#1C3B6E',
              color: hovered.simulator ? '#0A2240' : '#FFFFFF',
              border: hovered.simulator ? '2px solid #0A2240' : 'none',
              borderRadius: '0.75rem',
              padding: '1rem 2rem',
              fontWeight: 600,
              fontSize: '1.125rem',
              transition: 'background 0.2s, color 0.2s, border 0.2s',
              boxShadow: '0 4px 24px 0 rgba(10,34,64,0.10)',
            }}
            onMouseEnter={() => setHovered(h => ({ ...h, request: true }))}
            onMouseLeave={() => setHovered(h => ({ ...h, request: false }))}
          >
            <i className="fas fa-calendar-alt mr-2"></i>
            Request Live Demo
          </button>
          {/* Secondary CTA: White bg, navy border/text, hover solid navy/white text, triggers cream/navy on Request Live Demo */}
          <button
            onClick={scrollToSimulator}
            ref={tryGrantSimulatorRef}
            style={{
              backgroundColor: hovered.simulator ? '#0A2240' : '#FFFFFF',
              color: hovered.simulator ? '#FFFFFF' : '#0A2240',
              border: '2px solid #0A2240',
              borderRadius: '0.75rem',
              padding: '1rem 2rem',
              fontWeight: 600,
              fontSize: '1.125rem',
              transition: 'all 0.2s',
              boxShadow: '0 4px 24px 0 rgba(10,34,64,0.10)',
            }}
            onMouseEnter={() => setHovered(h => ({ ...h, simulator: true }))}
            onMouseLeave={() => setHovered(h => ({ ...h, simulator: false }))}
          >
            <i className="fas fa-play mr-2"></i>
            Try Grant Match Simulator
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <i className="fas fa-chevron-down text-2xl" style={{ color: '#666666' }}></i>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;