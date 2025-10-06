import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              CREATIVE
            </span>
            <span className="block text-white mt-2">DEVELOPER</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-2000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Crafting digital experiences with cutting-edge technology and innovative design. 
            Let's build something extraordinary together.
          </p>

          <div className={`flex justify-center space-x-6 mb-12 transition-all duration-2000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://github.com/Nibras345"
              className="p-3 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/25"
            >
              <Github size={24} className="text-green-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/nibras-siddiqi-113976296/"
              className="p-3 bg-gradient-to-r from-blue-400/20 to-pink-400/20 rounded-full border border-blue-400/30 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/25"
            >
              <Linkedin size={24} className="text-blue-400" />
            </a>
            <a
              href="#"
              className="p-3 bg-gradient-to-r from-pink-400/20 to-green-400/20 rounded-full border border-pink-400/30 hover:border-pink-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-400/25"
            >
              <Mail size={24} className="text-pink-400" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-green-400/25 transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1500ms' }}
          >
            Explore My Work
            <ChevronDown size={20} className="ml-2 animate-bounce" />
          </button>

          {/* Animated scroll indicator */}
          <div className="mt-16">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center mx-auto">
              <div className="w-1 h-3 bg-gradient-to-b from-green-400 to-transparent rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;