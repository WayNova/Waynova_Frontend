import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-search',
      iconColor: 'text-white',
      bgColor: 'bg-[#0A2240] group-hover:bg-[#1C3B6E]',
      hoverColor: 'group-hover:text-white',
      textColor: 'text-[#0A2240]',
      title: 'Smart Grant Matching',
      description: "Stop wasting time, Waynova surfaces only the grants that fits your buyer profile",
      delay: 100
    },
    {
      icon: 'fas fa-chart-line',
      iconColor: 'text-white',
      bgColor: 'bg-[#0A2240] group-hover:bg-[#1C3B6E]',
      hoverColor: 'group-hover:text-white',
      textColor: 'text-[#111111]',
      title: 'Confidence Scoring',
      description: 'See which leads to prioritize with High/Medium/Low confidence scores',
      delay: 200
    },
    {
      icon: 'fas fa-sync-alt',
      iconColor: 'text-white',
      bgColor: 'bg-[#0A2240] group-hover:bg-[#1C3B6E]',
      hoverColor: 'group-hover:text-white',
      textColor: 'text-[#0A2240]',
      title: 'CRM Sync',
      description: 'Push prioritized leads straight into Salesforce or HubSpot',
      delay: 300
    },
    {
      icon: 'fas fa-file-pdf',
      iconColor: 'text-white',
      bgColor: 'bg-[#0A2240] group-hover:bg-[#1C3B6E]',
      hoverColor: 'group-hover:text-white',
      textColor: 'text-[#0A2240]',
      title: 'PDF Generator',
      description: 'Generate instant one-pagers to share with buyers, save hours writing emails',
      delay: 400
    },
    {
      icon: 'fas fa-bell',
      iconColor: 'text-white',
      bgColor: 'bg-[#0A2240] group-hover:bg-[#1C3B6E]',
      hoverColor: 'group-hover:text-white',
      textColor: 'text-[#0A2240]',
      title: 'Smart Alerts',
      description: 'Get real-time notifications when grants open or deadlines approach',
      delay: 500
    },
    {
      icon: 'fas fa-bullseye',
      iconColor: 'text-white',
      bgColor: 'bg-[#0A2240] group-hover:bg-[#1C3B6E]',
      hoverColor: 'group-hover:text-white',
      textColor: 'text-[#0A2240]',
      title: 'Buyer Targeting',
      description: 'Prioritize agencies proven to have funding eligibility and intent - skip guesswork',
      delay: 600
    }
  ];

  return (
  <section id="features" className="py-20" style={{ backgroundColor: '#F9F6F2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform insights into outcomes with capabilities that drive sales rep success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={feature.delay} 
              className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default relative"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 transition-colors`}>
                <i className={`${feature.icon} text-xl ${feature.iconColor}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;