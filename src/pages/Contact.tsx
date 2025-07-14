import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-warm-brown-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-warm-brown-800 mb-4">
              Get In Touch
            </h1>
            <div className="w-24 h-px bg-warm-brown-400 mx-auto mb-6"></div>
            <p className="text-lg text-warm-brown-600 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-warm-brown-800 mb-6">
                  Let's Connect
                </h2>
                <p className="text-warm-brown-600 leading-relaxed mb-8 text-lg">
                  I'm always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to say hello, 
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-cream-50 rounded-lg">
                  <div className="w-12 h-12 bg-warm-brown-100 rounded-full flex items-center justify-center">
                    <Mail className="text-warm-brown-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown-700">Email</p>
                    <p className="text-warm-brown-600">fittoardiansyah12@email.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-cream-50 rounded-lg">
                  <div className="w-12 h-12 bg-warm-brown-100 rounded-full flex items-center justify-center">
                    <Phone className="text-warm-brown-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown-700">Phone</p>
                    <p className="text-warm-brown-600">+62 89699769191</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-cream-50 rounded-lg">
                  <div className="w-12 h-12 bg-warm-brown-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-warm-brown-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown-700">Location</p>
                    <p className="text-warm-brown-600">Sidoarjo</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-cream-50 rounded-lg">
                  <div className="w-12 h-12 bg-warm-brown-100 rounded-full flex items-center justify-center">
                    <Clock className="text-warm-brown-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-brown-700">Response Time</p>
                    <p className="text-warm-brown-600">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="font-semibold text-warm-brown-700 mb-6 text-lg">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#"
                    className="w-12 h-12 bg-warm-brown-100 rounded-full flex items-center justify-center text-warm-brown-600 hover:bg-warm-brown-600 hover:text-white transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="#"
                    className="w-12 h-12 bg-warm-brown-100 rounded-full flex items-center justify-center text-warm-brown-600 hover:bg-warm-brown-600 hover:text-white transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#"
                    className="w-12 h-12 bg-warm-brown-100 rounded-full flex items-center justify-center text-warm-brown-600 hover:bg-warm-brown-600 hover:text-white transition-all duration-300"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="#"
                    className="w-12 h-12 bg-warm-brown-100 rounded-full flex items-center justify-center text-warm-brown-600 hover:bg-warm-brown-600 hover:text-white transition-all duration-300"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-warm-brown-50 p-6 rounded-lg">
                <h3 className="font-semibold text-warm-brown-700 mb-3">Current Availability</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-warm-brown-600">Available for new projects</span>
                </div>
                <p className="text-warm-brown-600 text-sm">
                  I'm currently accepting new client work and would love to discuss your project.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream-50 p-8 rounded-lg">
              <h3 className="text-2xl font-light text-warm-brown-800 mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-warm-brown-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-warm-brown-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-brown-500 focus:border-transparent bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-warm-brown-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-warm-brown-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-brown-500 focus:border-transparent bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-warm-brown-700 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-warm-brown-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-brown-500 focus:border-transparent bg-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-warm-brown-700 font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-brown-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-brown-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-plus">$25,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-warm-brown-700 font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-brown-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-brown-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-warm-brown-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-warm-brown-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-warm-brown-500 focus:border-transparent bg-white resize-vertical"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-warm-brown-600 text-white py-3 px-6 rounded-sm hover:bg-warm-brown-700 transition-colors duration-300 font-medium flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-warm-brown-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-px bg-warm-brown-400 mx-auto"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-warm-brown-700 mb-3">What's your typical project timeline?</h3>
              <p className="text-warm-brown-600">
                Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, 
                while a complex web application could take 2-6 months. I'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-warm-brown-700 mb-3">Do you work with international clients?</h3>
              <p className="text-warm-brown-600">
                Absolutely! I work with clients worldwide and am comfortable with different time zones. 
                I use various communication tools to ensure smooth collaboration regardless of location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-warm-brown-700 mb-3">What's included in your development process?</h3>
              <p className="text-warm-brown-600">
                My process includes discovery and planning, design and prototyping, development, testing, 
                deployment, and post-launch support. I believe in transparent communication throughout every phase.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-warm-brown-700 mb-3">Do you provide ongoing maintenance?</h3>
              <p className="text-warm-brown-600">
                Yes, I offer various maintenance packages to keep your website or application running smoothly. 
                This includes updates, security monitoring, performance optimization, and technical support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;