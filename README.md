# Waynova - AI-Powered Grant Intelligence Platform (React Version)

A modern, professional, and interactive React landing page for Waynova, a SaaS platform that helps public sector sales teams identify and match with government grants using AI-powered intelligence.

## Live Demo

Visit the live website at: [https://waynova.ai/]

##  Project Overview

Waynova's landing page is designed to clearly communicate the value proposition of AI-powered grant intelligence while providing an interactive experience for potential customers. The website showcases how sales teams can accelerate their public sector sales success through intelligent grant matching and comprehensive insights.

### Key Value Propositions
- **Smart Grant Matching**: AI-powered algorithm analyzes thousands of grants
- **Confidence Scoring**: Precise confidence scores for prioritizing efforts
- **CRM Integration**: Seamless workflow integration
- **PDF Reports**: Comprehensive, professional grant match reports
- **Real-time Alerts**: Stay updated with new grants and deadlines
- **Buyer Targeting**: Identify key decision makers and stakeholders

###  Technical Implementation
- **React 18** with modern hooks and functional components
- **Component-based architecture** for maintainability and reusability
- **Responsive design** with Tailwind CSS
- **Custom CSS animations** and transitions
- **React state management** with useState and useEffect hooks
- **Chart.js integration** with React-ChartJS-2 wrapper
- **AOS (Animate On Scroll)** library integration
- **Font Awesome icons** and Google Fonts
- **Accessibility features** (ARIA labels, keyboard navigation, focus styles)
- **Performance optimizations** (component lazy loading, efficient re-renders)

##  Technology Stack

### React Framework
- **React 18**: Modern React with hooks and functional components
- **React DOM**: DOM rendering and manipulation
- **React Scripts**: Development and build tooling

### Frontend Libraries
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Chart.js & React-ChartJS-2**: Interactive charts and data visualization
- **AOS (Animate On Scroll)**: Smooth scroll animations
- **Font Awesome**: Professional icon set
- **Google Fonts (Inter)**: Modern typography

### State Management
- **React Hooks**: useState, useEffect, useRef for component state
- **Custom Hooks**: Reusable logic for animations and interactions

## ⚛️ React Architecture

### Component Structure
```
src/
├── components/
│   ├── Navigation.js      # Fixed navigation with scroll effects
│   ├── Hero.js           # Hero section with animations
│   ├── HowItWorks.js     # Process flow with animated lines
│   ├── Features.js       # Feature cards with hover effects
│   ├── Simulator.js      # Interactive grant matching simulator
│   ├── Metrics.js        # Animated counters and Chart.js integration
│   ├── Testimonials.js   # Carousel with React state management
│   ├── Team.js           # Team member profiles
│   └── CallToAction.js   # Email form with validation
├── utils/
│   └── aos.js           # AOS animation utilities
├── App.js               # Main application component
├── App.css              # Global styles and animations
└── index.js             # React DOM entry point
```

## 🚀 Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Development
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Available Scripts
- `npm start`: Runs the app in development mode on http://localhost:3000
- `npm run build`: Builds the app for production to the `build` folder
- `npm test`: Launches the test runner in interactive watch mode
- `npm run eject`: Removes Create React App abstraction (one-way operation)

### Development Guidelines
- **Components**: Use functional components with hooks
- **Styling**: Tailwind CSS classes with custom CSS for animations
- **State**: Local state with useState, shared state via props
- **Effects**: Clean up side effects in useEffect return functions
- **Performance**: Use React.memo and useMemo for expensive operations

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design with mobile-first approach

## 📄 License

This project is proprietary to Waynova. All rights reserved.

---

**Built with modern web technologies for optimal performance and user experience. Ready for production deployment and continued development.**
