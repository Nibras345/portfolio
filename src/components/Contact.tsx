import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { supabase, type ContactFormData } from '../lib/supabase';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactForm();
  };

  const submitContactForm = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
       setShowPopup(true);
       setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-900 to-black">
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-8 right-8 z-50 bg-gradient-to-r from-green-400 to-cyan-400 text-black px-6 py-4 rounded-xl shadow-2xl transform transition-all duration-500 ease-out animate-bounce">
          <div className="flex items-center">
            <Send size={20} className="mr-2" />
            <span className="font-bold">Your message has been sent!</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
          <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll do my best 
                  to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">mnibras345@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full flex items-center justify-center border border-green-400/30">
                    <Phone className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-400">+92 303 555 8563</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center border border-blue-400/30">
                    <MapPin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-400">Faisalabad, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center hover:from-cyan-400/20 hover:to-cyan-400/10 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="text-gray-400 hover:text-cyan-400 transition-colors" size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center hover:from-blue-400/20 hover:to-blue-400/10 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="text-gray-400 hover:text-blue-400 transition-colors" size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center hover:from-cyan-400/20 hover:to-cyan-400/10 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="text-gray-400 hover:text-cyan-400 transition-colors" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-400/20 border border-green-400/30 rounded-xl">
                <p className="text-green-400 font-medium">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-400/20 border border-red-400/30 rounded-xl">
                <p className="text-red-400 font-medium">
                  Sorry, there was an error sending your message. Please try again.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-400 to-green-400 text-black font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="mr-2">Send Message</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-24 pt-8 border-t border-gray-800 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400">
            © 2025 Nibras Siddiqi. Built with passion and lots of coffee. ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;