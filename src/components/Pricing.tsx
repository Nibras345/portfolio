import React, { useEffect, useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      id: 1,
      name: 'Basic Website',
      price: 500,
      period: 'project',
      icon: <Star className="text-green-400" size={32} />,
      description: 'Perfect for small businesses and personal websites',
      features: [
        'Responsive design',
        'Up to 5 pages',
        'Contact form',
        'SEO optimization',
        '3 revisions',
        '30-day support'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Professional App',
      price: 1250,
      period: 'project',
      icon: <Zap className="text-blue-400" size={32} />,
      description: 'Ideal for growing businesses and startups',
      features: [
        'Custom web application',
        'Database integration',
        'User authentication',
        'Admin dashboard',
        'Payment integration',
        'Unlimited revisions',
        '90-day support',
        'Source code included'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise Solution',
      price: 2150,
      period: 'project',
      icon: <Star className="text-purple-400" size={32} />,
      description: 'For large-scale applications and complex requirements',
      features: [
        'Full-stack application',
        'Microservices architecture',
        'Cloud deployment',
        'Advanced security',
        'Performance optimization',
        'Team training',
        '6-month support',
        'Maintenance included'
      ],
      popular: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('pricing');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">
            Transparent pricing for every project size and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-gray-900/50 rounded-2xl p-8 border transition-all duration-1000 hover:scale-105 ${
                plan.popular
                  ? 'border-blue-400 shadow-2xl shadow-blue-400/10'
                  : 'border-gray-800 hover:border-gray-600'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="mb-4 flex justify-center">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>
                  <span className="text-gray-400 ml-2">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-black hover:shadow-lg hover:shadow-blue-400/25'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 hover:border-gray-600'
                }`}
                onClick={scrollToContact}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-6">
            Need something custom? Let's discuss your project requirements.
          </p>
          <button 
            className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25"
            onClick={scrollToContact}
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;