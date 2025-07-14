import { Link } from 'react-router-dom';
import { Heart, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-warm-brown-800 text-cream-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">John Anderson</h3>
            <p className="text-cream-200 leading-relaxed mb-6">
              Creative developer passionate about crafting digital experiences 
              that blend functionality with beautiful design.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#"
                className="w-10 h-10 bg-warm-brown-700 rounded-full flex items-center justify-center text-cream-200 hover:bg-warm-brown-600 hover:text-cream-50 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-warm-brown-700 rounded-full flex items-center justify-center text-cream-200 hover:bg-warm-brown-600 hover:text-cream-50 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-warm-brown-700 rounded-full flex items-center justify-center text-cream-200 hover:bg-warm-brown-600 hover:text-cream-50 transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="text-cream-200 hover:text-cream-50 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="text-cream-200 hover:text-cream-50 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/skills"
                  className="text-cream-200 hover:text-cream-50 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects"
                  className="text-cream-200 hover:text-cream-50 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-cream-200 hover:text-cream-50 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <p className="text-cream-200 mb-2">fittoardiansyah12@gmailcom</p>
            <p className="text-cream-200 mb-2">+62 89699769191</p>
            <p className="text-cream-200">Sidoarjo</p>
          </div>
        </div>

        <div className="border-t border-warm-brown-700 mt-12 pt-8 text-center">
          <p className="text-cream-200 flex items-center justify-center space-x-2">
            <span>© 2024 FittoArd. Made with</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span>and a lot of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;