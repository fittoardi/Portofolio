import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';


const Home = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-warm-brown-50 relative pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-warm-brown-200 flex items-center justify-center overflow-hidden">
              <img 
                src="\img\1.jpg" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-semibold text-warm-brown-800 mb-4 tracking-wide">
              Fitto <span>Ardiansyah</span>
            </h1>
            
            <div className="w-24 h-px bg-warm-brown-400 mx-auto mb-6"></div>
            
            <p className="text-xl md:text-2xl text-warm-brown-600 font-light leading-relaxed max-w-2xl mx-auto">
              Creative Developer & Digital Craftsman
            </p>
            
            <p className="text-lg text-warm-brown-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Crafting elegant digital experiences with a passion for clean code and timeless design
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Link 
              to="/projects"
              className="px-8 py-3 bg-warm-brown-600 text-cream-50 rounded-sm hover:bg-warm-brown-700 transition-all duration-300 font-medium tracking-wide inline-flex items-center justify-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-3 border border-warm-brown-600 text-warm-brown-600 rounded-sm hover:bg-warm-brown-600 hover:text-cream-50 transition-all duration-300 font-medium tracking-wide"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToFeatures}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-warm-brown-400 hover:text-warm-brown-600 transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-warm-brown-800 mb-4">
              What I Do
            </h2>
            <div className="w-24 h-px bg-warm-brown-400 mx-auto mb-6"></div>
            <p className="text-lg text-warm-brown-600 max-w-2xl mx-auto">
              Specializing in modern web development with a focus on user experience and clean design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-cream-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-warm-brown-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-warm-brown-600 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-warm-brown-700 mb-4">Frontend Development</h3>
              <p className="text-warm-brown-600 leading-relaxed">
                Creating responsive, interactive user interfaces with modern frameworks and best practices.
              </p>
            </div>

            <div className="text-center p-8 bg-cream-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-warm-brown-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-warm-brown-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-warm-brown-700 mb-4">UI/UX Design</h3>
              <p className="text-warm-brown-600 leading-relaxed">
                Designing intuitive user experiences that balance functionality with aesthetic appeal.
              </p>
            </div>

            <div className="text-center p-8 bg-cream-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-warm-brown-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-warm-brown-600 rounded-lg transform rotate-45"></div>
              </div>
              <h3 className="text-xl font-semibold text-warm-brown-700 mb-4">Full Stack Solutions</h3>
              <p className="text-warm-brown-600 leading-relaxed">
                Building complete web applications from concept to deployment with modern technologies.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/about"
              className="inline-flex items-center space-x-2 text-warm-brown-600 hover:text-warm-brown-800 transition-colors font-medium"
            >
              <span>Learn more about me</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;