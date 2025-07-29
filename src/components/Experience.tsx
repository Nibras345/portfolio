import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Faisalabad, Pakistan',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions.',
      achievements: [
        'Increased application performance by 40%',
        'Led team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'StartupHub Inc.',
      location: 'Islamabad, Pakistan',
      period: '2020 - 2022',
      description: 'Developed multiple MVPs and production applications for various clients. Specialized in rapid prototyping and agile development methodologies.',
      achievements: [
        'Delivered 15+ projects on time',
        'Reduced development time by 30%',
        'Implemented automated testing'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Lahore, Pakistan',
      period: '2019 - 2020',
      description: 'Created responsive web applications and collaborated with design teams to implement pixel-perfect user interfaces.',
      achievements: [
        'Improved user engagement by 25%',
        'Optimized website loading speeds',
        'Collaborated with 10+ designers'
      ]
    },
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">
            My professional journey and career milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400 transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-75" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      <Briefcase className="text-purple-400 mr-3" size={24} />
                      <div className="text-sm text-purple-400 font-medium bg-purple-400/20 px-3 py-1 rounded-full">
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center text-gray-400 mb-4">
                      <span className="font-medium text-purple-400">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <MapPin size={16} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center text-gray-400">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;