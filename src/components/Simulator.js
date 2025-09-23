import React, { useState, useEffect } from 'react';

const Simulator = ({ scrollToDemo }) => {
  const [formData, setFormData] = useState({
    agencyType: '',
    productType: '',
    state: ''
  });
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const grantDatabase = {
    healthcare: [
      {
        title: "Rural Health Infrastructure Grant",
        agency: "Mayo Clinic",
        amount: "$2.5M - $15M",
        confidence: 92,
        deadline: "March 15, 2026",
        description: "Funding for healthcare infrastructure improvements in underserved rural areas."
      },
      {
        title: "Community Mental Health Services Grant",
  agency: "Johns Hopkins Hospital",
        amount: "$500K - $3M",
        confidence: 87,
        deadline: "Dec 30, 2025",
        description: "Support for expanding mental health services and treatment programs."
      }
    ],
    education: [
      {
        title: "STEM Education Innovation Grant",
        agency: "New York City Department of Education",
        amount: "$1M - $8M",
        confidence: 94,
        deadline: "February 28, 2026",
        description: "Funding for innovative STEM education programs and technology integration."
      },
      {
        title: "Title I School Improvement Grant",
        agency: "Los Angeles Unified School District",
        amount: "$800K - $5M",
        confidence: 89,
        deadline: "November 15, 2025",
        description: "Support for improving academic outcomes in high-poverty schools."
      }
    ],
    transportation: [
      {
        title: "Smart City Transportation Grant",
        agency: "Metropolitan Transportation Authority (MTA)",
        amount: "$3M - $20M",
        confidence: 91,
        deadline: "June 1, 2026",
        description: "Funding for intelligent transportation systems and infrastructure modernization."
      },
      {
        title: "Rural Transit Enhancement Program",
        agency: "Chicago Transit Authority",
        amount: "$500K - $4M",
        confidence: 85,
        deadline: "March 30, 2026",
        description: "Support for improving public transit services in rural communities."
      }
    ],
    energy: [
      {
        title: "Clean Energy Infrastructure Grant",
        agency: "Tennessee Valley Authority",
        amount: "$5M - $50M",
        confidence: 88,
        deadline: "October 15, 2025",
        description: "Funding for renewable energy projects and grid modernization initiatives."
      },
      {
        title: "Energy Efficiency Upgrade Program",
        agency: "Pacific Gas and Electric Company",
        amount: "$200K - $2M",
        confidence: 93,
        deadline: "May 30, 2026",
        description: "Support for building energy efficiency improvements and retrofits."
      }
    ],
    defense: [
      {
        title: "Cybersecurity Innovation Grant",
        agency: "U.S. Army Corps of Engineers",
        amount: "$1M - $10M",
        confidence: 86,
        deadline: "March 1, 2026",
        description: "Funding for advanced cybersecurity research and development projects."
      },
      {
        title: "Defense Technology Advancement Program",
        agency: "Naval Research Laboratory",
        amount: "$2M - $25M",
        confidence: 83,
        deadline: "December 25, 2025",
        description: "Support for breakthrough defense technologies and innovations."
      }
    ],
    municipal: [
      {
        title: "Community Development Block Grant",
        agency: "City of Seattle Office of Housing",
        amount: "$500K - $5M",
        confidence: 90,
        deadline: "February 15, 2026",
        description: "Funding for community development and infrastructure improvement projects."
      },
      {
        title: "Smart Cities Initiative Grant",
        agency: "San Francisco Fire Department",
        amount: "$1M - $8M",
        confidence: 87,
        deadline: "April 1, 2026",
        description: "Support for implementing smart city technologies and digital governance solutions."
      }
    ]
  };

  const productOptions = {
    healthcare: [
      'Medical Equipment',
      'Telehealth Platform',
      'Electronic Health Records',
      'Ambulance Services',
      'Mental Health Software'
    ],
    education: [
      'STEM Curriculum',
      'EdTech Platform',
      'Classroom Technology',
      'Tutoring Services',
      'Special Ed Resources'
    ],
    transportation: [
      'Fleet Management',
      'Smart Traffic Lights',
      'Electric Buses',
      'Transit Apps',
      'Road Safety Systems'
    ],
    energy: [
      'Solar Panels',
      'Grid Storage',
      'Smart Meters',
      'EV Charging',
      'Building Automation'
    ],
    defense: [
      'Cybersecurity Suite',
      'Drones',
      'Surveillance Systems',
      'Secure Radios',
      'Simulation Software'
    ],
    municipal: [
      'Water Management',
      'Smart Lighting',
      'Waste Solutions',
      'Public WiFi',
      'Emergency Alert System'
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const runSimulation = () => {
    if (!formData.agencyType || !formData.productType || !formData.state) {
      alert('Please fill in all fields to run the simulation.');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      const mockResults = grantDatabase[formData.agencyType] || grantDatabase.municipal;
      setResults(mockResults);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (results) {
      setTimeout(() => {
        const bars = document.querySelectorAll('.confidence-bar');
        bars.forEach(bar => {
          const width = bar.dataset.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = width + '%';
          }, 100);
        });
      }, 300);
    }
  }, [results]);

  const InitialView = () => (
    <div className="text-center text-gray-500 py-12">
      <i className="fas fa-chart-pie text-4xl mb-4"></i>
      <p className="text-lg">Select your agency details and click "Find Grant Matches" to see potential opportunities</p>
    </div>
  );

  const ResultsView = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Found {results.length} Grant Matches</h3>
        <div className="text-sm text-gray-600">Sorted by confidence score</div>
      </div>
      {[...results].sort((a, b) => b.confidence - a.confidence).map((grant, index) => (
  <div key={index} className="simulator-card p-6 rounded-xl shadow-lg transition-all relative">
          {index === 0 && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
              <span className="inline-block bg-[#072240] text-white text-xs font-bold rounded-full px-4 py-1 shadow ring-2 ring-[#1E4073]/40 animate-pulse">
                Top Match
              </span>
            </div>
          )}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{grant.title}</h4>
              <p className="text-gray-600 mb-3">{grant.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Agency:</span>
                  <div className="font-medium text-gray-900">{grant.agency}</div>
                </div>
                <div>
                  <span className="text-gray-500">Amount:</span>
                  <div className="font-medium text-green-600">{grant.amount}</div>
                </div>
                <div>
                  <span className="text-gray-500">Deadline:</span>
                  <div className="font-medium text-red-600">{grant.deadline}</div>
                </div>
                <div>
                  <span className="text-gray-500">Confidence:</span>
                  <div className="font-medium text-[#1E4073]">{grant.confidence}%</div>
                </div>
              </div>
            </div>
            <div className="ml-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg bg-[#1E4073] ring-4 ring-[#1E4073]/30 shadow-lg transition-all">
                {grant.confidence}%
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="confidence-bar h-2 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-400"
              data-width={grant.confidence}
              style={{width: '0%'}}
            ></div>
          </div>
          <div className="flex space-x-3">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              View Details
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Export to CRM
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Generate Buyer PDF
            </button>
          </div>
        </div>
      ))}
      <div className="mt-6 text-xs text-gray-500 italic text-center">
        WayNova saved you hours by showing only {results.length} fundable matches out of 1,000+ grants.
      </div>
      <div className="text-center pt-6">
        <button 
          onClick={scrollToDemo}
          className="bg-[#1E4073] hover:bg-[#0A2240] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <i className="fas fa-calendar-alt mr-2"></i>
          Schedule Live Demo to See More
        </button>
      </div>
    </div>
  );

  return (
  <section id="simulator" className="simulator-section py-20 w-full bg-[#F9F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-900 mb-4">
            Find Funded Buyers Instantly
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 max-w-3xl mx-auto">
            WayNova shows you which buyers actually have grant funding for your product
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="300" className="bg-[#E6E6FA]/80 rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Input Form */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Agency Information</h3>
                
                <div>
                  <label htmlFor="agencyType" className="block text-sm font-medium text-gray-700 mb-2">
                    Agency Type
                  </label>
                  <select 
                    id="agencyType"
                    name="agencyType"
                    value={formData.agencyType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select agency type...</option>
                    <option value="healthcare">Healthcare Systems</option>
                    <option value="education">Educational Institutions</option>
                    <option value="transportation">Transportation Agencies</option>
                    <option value="energy">Energy & Utilities</option>
                    <option value="defense">Defense & Security</option>
                    <option value="municipal">Municipal Government</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
                    Product Type
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    disabled={!formData.agencyType}
                  >
                    <option value="">{formData.agencyType ? 'Select product type...' : 'Select product'}</option>
                    {formData.agencyType && productOptions[formData.agencyType].map((product) => (
                      <option key={product} value={product}>{product}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                    State/Region
                  </label>
                  <select 
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select state...</option>
                    <option value="ca">California</option>
                    <option value="ny">New York</option>
                    <option value="tx">Texas</option>
                    <option value="fl">Florida</option>
                    <option value="il">Illinois</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <button 
                  onClick={runSimulation}
                  disabled={isLoading}
                  className="w-full bg-[#1E4073] hover:bg-[#0A2240] text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="loading-spinner"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-search mr-2"></i>
                      Find Grant Matches
                    </>
                  )}
                </button>
              </div>
              
              {/* Results Area */}
              <div className="space-y-4">
                {results ? <ResultsView /> : <InitialView />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;