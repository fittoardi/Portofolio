import { Code, Palette, Lightbulb, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-warm-brown-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-warm-brown-800 mb-4">
              About Me
            </h1>
            <div className="w-24 h-px bg-warm-brown-400 mx-auto mb-6"></div>
            <p className="text-lg text-warm-brown-600 max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-warm-brown-800 mb-6">
                My Journey
              </h2>
              
              <p className="text-lg text-warm-brown-600 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                digital experiences that seamlessly blend functionality with aesthetic appeal. 
                My approach combines modern technology with timeless design principles.
              </p>
              
              <p className="text-lg text-warm-brown-600 leading-relaxed">
                I believe that great design should be both beautiful and purposeful. Every project 
                I undertake is an opportunity to solve problems creatively while maintaining the 
                highest standards of craftsmanship.
              </p>

              <p className="text-lg text-warm-brown-600 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to 
                open-source projects, or enjoying a good cup of coffee while sketching out ideas 
                for my next creative endeavor.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="px-6 py-3 bg-warm-brown-600 text-cream-50 rounded-sm hover:bg-warm-brown-700 transition-all duration-300 font-medium inline-flex items-center justify-center space-x-2">
                  <Download size={18} />
                  <span>Download Resume</span>
                </button>
                <Link 
                  to="/contact"
                  className="px-6 py-3 border border-warm-brown-600 text-warm-brown-600 rounded-sm hover:bg-warm-brown-600 hover:text-cream-50 transition-all duration-300 font-medium text-center"
                >
                  Let's Work Together
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-warm-brown-100 rounded-lg p-8">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Working setup"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-warm-brown-200 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-warm-brown-200 rounded-lg -z-10 opacity-50"></div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-cream-50 rounded-lg">
              <div className="w-16 h-16 bg-warm-brown-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="text-warm-brown-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-warm-brown-700 mb-4">Clean Code</h3>
              <p className="text-warm-brown-600 leading-relaxed">
                Writing maintainable, efficient code that stands the test of time and scales with your business needs.
              </p>
            </div>
            
            <div className="text-center p-8 bg-cream-50 rounded-lg">
              <div className="w-16 h-16 bg-warm-brown-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="text-warm-brown-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-warm-brown-700 mb-4">Design Focus</h3>
              <p className="text-warm-brown-600 leading-relaxed">
                User-centered design approach that prioritizes usability without compromising on visual appeal.
              </p>
            </div>
            
            <div className="text-center p-8 bg-cream-50 rounded-lg">
              <div className="w-16 h-16 bg-warm-brown-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-warm-brown-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-warm-brown-700 mb-4">Innovation</h3>
              <p className="text-warm-brown-600 leading-relaxed">
                Creative problem solving using the latest technologies and methodologies to deliver exceptional results.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-light text-warm-brown-800 mb-12 text-center">
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 p-6 bg-cream-50 rounded-lg">
                <div className="md:w-1/4">
                  <span className="text-warm-brown-500 font-medium">2022 - Present</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-warm-brown-700 mb-2">Senior Frontend Developer</h3>
                  <p className="text-warm-brown-600 mb-3">TechCorp Solutions</p>
                  <p className="text-warm-brown-600 leading-relaxed">
                    Leading frontend development for enterprise applications, mentoring junior developers, 
                    and implementing modern React architectures that improved performance by 40%.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 p-6 bg-cream-50 rounded-lg">
                <div className="md:w-1/4">
                  <span className="text-warm-brown-500 font-medium">2022 - 2025</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-warm-brown-700 mb-2">Full Stack Developer</h3>
                  <p className="text-warm-brown-600 mb-3">Digital Innovations Inc.</p>
                  <p className="text-warm-brown-600 leading-relaxed">
                    Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. 
                    Collaborated with design teams to create pixel-perfect implementations.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 p-6 bg-cream-50 rounded-lg">
                <div className="md:w-1/4">
                  <span className="text-warm-brown-500 font-medium">2019 - 2020</span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-warm-brown-700 mb-2">Junior Web Developer</h3>
                  <p className="text-warm-brown-600 mb-3">StartUp Studio</p>
                  <p className="text-warm-brown-600 leading-relaxed">
                    Built responsive websites and web applications for various clients. 
                    Gained experience in modern web technologies and agile development practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-warm-brown-50 p-12 rounded-lg">
            <h2 className="text-3xl font-light text-warm-brown-800 mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-warm-brown-600 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-warm-brown-600 text-cream-50 rounded-sm hover:bg-warm-brown-700 transition-all duration-300 font-medium"
            >
              <span>Get In Touch</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;