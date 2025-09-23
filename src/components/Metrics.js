import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Metrics = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
          startCounters();
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [countersStarted]);

  const animateCounter = (target, setCounter) => {
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounter(Math.floor(current));
    }, 16);
  };

  const startCounters = () => {
    animateCounter(25, setCounter1);
    animateCounter(82, setCounter2);
    animateCounter(500, setCounter3);
  };

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [{
      label: 'Grant Matches',
      data: [120, 190, 300, 500, 720, 1100, 1600, 2200, 3000],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#3b82f6',
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#9ca3af'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#9ca3af'
        }
      }
    },
    elements: {
      point: {
        hoverBackgroundColor: '#1d4ed8'
      }
    }
  };

  return (
    <section id="metrics" ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl font-bold mb-4">Proven Results</h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the impact Waynova is making for sales teams across the public sector
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16 items-end">
          {/* Metric 1 */}
          <div data-aos="fade-up" data-aos-delay="100" className="text-center flex flex-col items-center justify-end h-full">
            <div className="text-5xl font-bold text-blue-400 mb-2 counter">
              <span>${counter1}</span>M+
            </div>
            <div className="text-xl text-gray-300 mb-2">Grant Value Surfaced</div>
            <div className="text-gray-400">Helping teams discover more opportunities</div>
          </div>
          
          {/* Metric 2 */}
          <div data-aos="fade-up" data-aos-delay="200" className="text-center flex flex-col items-center justify-end h-full">
            <div className="flex justify-center items-center mb-0">
              <span className="relative flex items-center justify-center w-40 h-40">
                <svg className="w-40 h-40 block" viewBox="0 0 100 100">
                  <polygon points="50,9 62,39 94,39 67,59 77,91 50,72 23,91 33,59 6,39 38,39" fill="#F9F6F2" />
                </svg>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[#308155ff] text-3xl font-bold leading-none">{counter2}%</span>
              </span>
            </div>
            <div className="text-xl text-gray-300 mb-2">Faster Matching</div>
            <div className="text-gray-400">Reduce time from weeks to hours</div>
          </div>
          
          {/* Metric 3 */}
          <div data-aos="fade-up" data-aos-delay="300" className="text-center flex flex-col items-center justify-end h-full">
            <div className="text-5xl font-bold text-purple-400 mb-2 counter">
              <span>{counter3}</span>+
            </div>
            <div className="text-xl text-gray-300 mb-2">Active Users</div>
            <div className="text-gray-400">Sales professionals trust Waynova</div>
          </div>
        </div>
        
        {/* Success Chart */}
        <div data-aos="fade-up" data-aos-delay="400" className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-center mb-8">Monthly Growth in Grant Matches</h3>
            <div style={{ height: '400px' }}>
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;