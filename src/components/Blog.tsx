import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Exploring the latest technologies and frameworks that are shaping the future of web development.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technology',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn how to structure and optimize React applications for better performance and maintainability.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'React',
      date: '2024-01-10',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'The Art of UI/UX Design: Creating Memorable User Experiences',
      excerpt: 'Diving deep into the principles of great design and how to apply them in modern web applications.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design',
      date: '2024-01-05',
      readTime: '6 min read'
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

    const element = document.getElementById('blog');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Latest Articles
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto rounded-full" />
          <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-400/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-pink-400/20 to-cyan-400/20 text-pink-400 px-3 py-1 rounded-full text-sm border border-pink-400/30">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <button className="flex items-center text-pink-400 hover:text-pink-300 transition-colors duration-300 group-hover:translate-x-2 transform transition-transform">
                    <span className="mr-2">Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-gradient-to-r from-pink-400 to-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/25">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;