import React, { useEffect, useState } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full flex items-center justify-center border border-green-400/30 overflow-hidden">
                <img 
                  src="src/assets/IMG-20250723-WA0004.jpg"
                  alt="Profile"
                  className="w-72 h-72 object-cover rounded-full border border-gray-700"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000" />
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Passionate Full-Stack Developer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                innovative digital solutions that combine cutting-edge technology with exceptional 
                user experience. My passion lies in transforming complex ideas into elegant, 
                functional applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe in continuous learning and staying ahead of industry trends. When I'm 
                not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or mentoring upcoming developers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="#">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                  <Code className="text-green-400 mb-4" size={32} />
                  <h4 className="text-white font-semibold mb-2">Clean Code</h4>
                  <p className="text-gray-400 text-sm">Writing maintainable, scalable code</p>
                </div>
              </a>

              <a href="#">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                  <Palette className="text-blue-400 mb-4" size={32} />
                  <h4 className="text-white font-semibold mb-2">Design Focus</h4>
                  <p className="text-gray-400 text-sm">Creating beautiful user interfaces</p>
                </div>
              </a>

              <a href="#">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
                  <Zap className="text-pink-400 mb-4" size={32} />
                  <h4 className="text-white font-semibold mb-2">Performance</h4>
                  <p className="text-gray-400 text-sm">Optimizing for speed and efficiency</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;