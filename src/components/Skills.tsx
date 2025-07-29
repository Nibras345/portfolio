import React, { useEffect, useState } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  const skills = [
    { name: 'React/Next.js', level: 95, color: 'from-green-400 to-green-600' },
    { name: 'PHP', level: 94, color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 88, color: 'from-pink-400 to-pink-600' },
    { name: 'AWS/Cloud', level: 82, color: 'from-purple-400 to-purple-600' },
    { name: 'Design Systems', level: 90, color: 'from-cyan-400 to-cyan-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills one by one
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, skill.name]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-green-400 mx-auto rounded-full" />
          <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-3">
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <span className="text-gray-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out relative`}
                    style={{
                      width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-green-400/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Vue.js', 'Angular', 'Svelte', 'Tailwind CSS', 'SCSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-green-400/20 to-blue-400/20 text-green-400 rounded-full text-sm border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'PHP', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-400/20 to-pink-400/20 text-blue-400 rounded-full text-sm border border-blue-400/30 hover:border-blue-400 transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-pink-400/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-3">
                {['Docker', 'Kubernetes', 'AWS', 'Vercel', 'GitHub Actions', 'Figma'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-pink-400/20 to-purple-400/20 text-pink-400 rounded-full text-sm border border-pink-400/30 hover:border-pink-400 transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;