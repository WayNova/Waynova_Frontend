// AOS (Animate On Scroll) utility functions for React components
import AOS from 'aos';

export const initializeAOS = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    disable: 'phone' // Disable on mobile for better performance
  });
};

export const refreshAOS = () => {
  AOS.refresh();
};

// Custom animation configurations
export const animationConfigs = {
  fadeUp: {
    'data-aos': 'fade-up',
    'data-aos-duration': '800'
  },
  fadeLeft: {
    'data-aos': 'fade-left',
    'data-aos-duration': '800'
  },
  fadeRight: {
    'data-aos': 'fade-right',
    'data-aos-duration': '800'
  },
  slideUp: {
    'data-aos': 'slide-up',
    'data-aos-duration': '600'
  },
  zoom: {
    'data-aos': 'zoom-in',
    'data-aos-duration': '600'
  }
};

// Delay presets
export const delays = {
  short: 100,
  medium: 200,
  long: 400,
  extraLong: 600
};