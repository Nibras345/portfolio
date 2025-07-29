import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with React, Node.js, and Stripe integration',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'AI Dashboard',
      category: 'web',
      description: 'Advanced analytics dashboard with machine learning insights',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'React', 'TensorFlow', 'D3.js'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Biometrics'],
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Brand Identity System',
      category: 'design',
      description: 'Complete brand identity and design system for tech startup',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'Brand Design', 'UI/UX'],
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Real-time Chat App',
      category: 'web',
      description: 'Scalable chat application with real-time messaging and file sharing',
      image: 'https://images.pexels.com/photos/1111367/pexels-photo-1111367.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Socket.io', 'React', 'Node.js', 'Redis'],
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Comprehensive fitness tracking with workout plans and nutrition',
      image: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Flutter', 'Firebase', 'Health Kit'],
      github: '#',
      live: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('portfolio');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">
            A showcase of my latest projects and creative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:text-white border border-gray-700 hover:border-blue-400/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    className="p-2 bg-black/80 rounded-full hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Github size={18} className="text-white" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-black/80 rounded-full hover:bg-gray-800 transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 text-blue-400 rounded-full text-xs border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;