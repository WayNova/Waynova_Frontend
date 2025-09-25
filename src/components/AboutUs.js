import React from 'react';

const AboutUs = () => {
  return (
  <section id="testimonials" className="py-20" style={{ backgroundColor: '#F9F6F2' }}>
  <div className="max-w-screen-xl mx-auto px-2 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
        </div>
        <div className="text-2xl text-gray-700 text-center max-w-5xl mx-auto mt-4 leading-relaxed">
          <div>
            WayNova’s mission is to help sales reps focus on the right leads by revealing not just who to contact but who has the funding to buy. By adding the missing grant layer to the sales stack, we boost rep efficiency, shorten sales cycles, and unlock more closed deals
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
