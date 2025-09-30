import React, { useState } from 'react';
import { sendEmail } from '../utils/sendEmail';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [helpText, setHelpText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName.trim()) {
      showMessage('Please enter your first name.', 'error');
      return;
    }
    if (!lastName.trim()) {
      showMessage('Please enter your last name.', 'error');
      return;
    }
    if (!email || !isValidEmail(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await sendEmail({ firstName, lastName, email });
      if (result.ok || result.success) {
        showMessage('Thank you! Your message has been sent to our team.', 'success');
        setEmail('');
        setFirstName('');
        setLastName('');
        setHelpText('');
      } else {
        showMessage('There was a problem sending your message. Please try again.', 'error');
      }
    } catch (error) {
      showMessage('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: '#', label: 'LinkedIn' }
  ];

  const contactLinks = [];

  return (
    <section id="cta" className="py-20 text-white" style={{ backgroundColor: '#0A2240' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <h2 className="text-4xl md:text-4xl font-bold mb-5" >
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join hundreds of sales professionals who are already accelerating their public sector success with WayNova
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200" className="max-w-sm mx-auto mb-12">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4">
            <div className="w-full flex flex-col gap-3">
              <div className="flex gap-4">
                <div className="w-1/2 flex flex-col items-start">
                  <label className="block text-gray-700 text-sm font-medium mb-1 w-full text-left">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="w-1/2 flex flex-col items-start">
                  <label className="block text-gray-700 text-sm font-medium mb-1 w-full text-left">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <label className="block text-gray-700 text-sm font-medium mb-1 w-full text-left">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-col items-start w-full">
                {/* Removed 'How can we help?' text box */}
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm mt-0 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ minWidth: '100px' }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
                {/* Mobile-only Add Buyer Profile button at the very bottom */}
                <button
                  type="button"
                  className="md:hidden block w-full text-[#3a5a8c] hover:text-[#0A2240] text-base font-semibold bg-transparent border-none p-0 mt-3 transition-colors duration-200"
                  style={{ boxShadow: 'none', outline: 'none' }}
                  onClick={() => window.location.href = '/add-buyer-profiles'}
                >
                  Help us Test: Add Buyer Profile
                </button>
          </form>
          
          {/* Success/Error Message */}
          {message.text && (
            <div className={`mt-4 p-4 rounded-lg transition-all ${
              message.type === 'success' 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
            }`}>
              {message.text}
            </div>
          )}
          
          <p className="text-sm text-blue-100 mt-4">
            Join our waitlist for exclusive early access and beta testing opportunities.
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="400" className="border-t border-white/20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center ml-10" style={{marginBottom: '0.5rem'}}>
              <img 
                src="/waynova_logo.png" 
                alt="Waynova Logo" 
                className="h-21 w-16 mr-[-105px]"
                style={{ objectFit: 'contain', marginTop: '-40px', minWidth: 40 }}
              />
              <div>
                <h3
                  className="text-2xl font-bold mb-2 cursor-pointer transition-colors duration-200 hover:text-white-400"
                  style={{ fontFamily: 'Times New Roman, Times, serif' }}
                  onClick={() => {
                    const hero = document.getElementById('hero');
                    if (hero) hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Go to Hero section"
                >
                  WAYNOVA
                </h3>
                <p className="text-blue-100">AI-Powered Grant Intelligence Platform</p>
              </div>
            </div>
            
            <div className="flex space-x-8">
              <div className="flex flex-row items-center space-x-8">
                <div className="flex flex-col items-center">
                  <span className="text-blue-100 text-base mb-2">Connect</span>
                  <a 
                    href={socialLinks[0].href}
                    className="text-white hover:text-blue-200 transition-colors text-xl flex items-center justify-center"
                    aria-label={socialLinks[0].label}
                  >
                    <i className={`${socialLinks[0].icon} text-xl`}></i>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-blue-100 text-base mb-2">Contact</span>
                  <a 
                    href="mailto:johnmcfillin@waynova.ai" 
                    className="text-white hover:text-blue-200 transition-colors text-xl flex items-center justify-center"
                    aria-label="Email John McFillin"
                  >
                    <i className="fas fa-envelope text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-blue-100">&copy; 2025 Waynova. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;