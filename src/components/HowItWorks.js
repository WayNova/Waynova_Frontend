import React, { useEffect, useState } from 'react';

const HowItWorks = () => {
  const [linesAnimated, setLinesAnimated] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !linesAnimated) {
          setLinesAnimated(true);
          animateProcessLines();
        }
      });
    }, observerOptions);

    const section = document.getElementById('how-it-works');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [linesAnimated]);

  const animateProcessLines = () => {
    const lines = document.querySelectorAll('.animate-line-grow');
    lines.forEach((line, index) => {
      setTimeout(() => {
        if (line) {
          line.style.width = '100%';
        }
      }, index * 500);
    });
  };

  const steps = [
    {
      icon: 'fas fa-upload',
      title: 'Define Your Focus',
      description: 'Enter your product, region, and we’ll do the rest',
      delay: 100
    },
    {
      icon: 'fas fa-search',
      title: 'Find the Right Buyers',
      description: 'Discover the agencies that actually fit your criteria',
      delay: 200
    },
    {
      icon: 'fas fa-dollar',
      title: "Know Who's Funded",
      description: 'We surface grants with confidence scores so you know who to target',
      delay: 300
    },
    {
      icon: 'fas fa-file-pdf',
      title: 'Close Deals with Proof',
      description: 'Generate ready-to-share reports that back funding',
      delay: 400
    }
  ];

  return (
  <section id="how-it-works" className="py-40 flex flex-col justify-center items-center text-center" style={{ backgroundColor: '#F9F6F2', minHeight: '200px', paddingTop: '10rem' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="text-center mb-16 w-full">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold mb-4"
            style={{ color: '#0A2240' }} // navy color
          >
             From Hours of Research to Funded Leads in Minutes
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong className="text-gray-800">Tired of chasing dead leads?</strong> With WayNova, you can match your product to buyers backed by active grants
          </p>
        </div>
        
  <div className="flex flex-row items-center justify-center gap-8 mb-16 w-full" style={{ marginTop: '4rem' }}>
  {steps.map((step, index) => (
    <React.Fragment key={index}>
      <div data-aos="fade-up" data-aos-delay={step.delay} className="text-center group min-w-[220px]">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center relative">
          {/* Navy gradient diamond background for all icons */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '68px',
              height: '68px',
              zIndex: 0,
              borderRadius: '5px',
              transform: 'translate(-50%, -50%) rotate(45deg)',
              background: 'linear-gradient(135deg, #0A2240 80%, #06142B 100%)',
              opacity: 1,
              boxShadow: '0 4px 13px 0 #0A2240',
            }}
          />
          <div className="w-16 h-16 border-2 transform rotate-45 flex items-center justify-center bg-white transition-colors relative" style={{ borderColor: '#0A2240', zIndex: 1 }}>
            <div className="w-full h-full flex items-center justify-center" style={{ transform: 'rotate(-45deg)' }}>
              <i
                className={`${step.icon} text-2xl`}
                style={{ color: '#0A2240' }}
              ></i>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
        <p className="text-gray-600 text-sm">{step.description}</p>
      </div>
      {index < steps.length - 1 && (
        <div className="flex items-center justify-center mx-2">
          <i className="fas fa-arrow-right text-2xl text-gray-400"></i>
        </div>
      )}
    </React.Fragment>
  ))}
</div>
      </div>
    </section>
  );
};

export default HowItWorks;



