import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:shivaniben021@gmail.com?subject=From ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-400">
              Let's discuss about your next big project
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12" style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="group p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 hover:border-pink-500/50 transition-all duration-300">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Email</h3>
              <a href="mailto:shivaniben021@gmail.com" className="text-gray-300 hover:text-pink-400 transition">
                shivaniben021@gmail.com
              </a>
            </div>

            <div className="group p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 hover:border-pink-500/50 transition-all duration-300">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Phone</h3>
              <a href="tel:267-328-4601" className="text-gray-300 hover:text-pink-400 transition">
                267-328-4601
              </a>
            </div>

            <div className="group p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 hover:border-pink-500/50 transition-all duration-300">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Location</h3>
              <p className="text-gray-300">
                Harleysville, PA 19438, USA
              </p>
            </div>

            <div className="group p-6 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 hover:border-pink-500/50 transition-all duration-300">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Connect</h3>
              <a href="https://www.linkedin.com/in/shivanibenpatel/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition">
                View LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="p-8 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-purple-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-purple-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-purple-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 transition resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
