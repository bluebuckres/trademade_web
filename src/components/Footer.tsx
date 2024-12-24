import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">TradeMade</h3>
            <p className="text-gray-400 text-sm">
              BF 148/A Rabindrapally<br />
              Baguihati, Kolkata<br />
              West Bengal 700101<br />
              India
            </p>
            <p className="text-gray-400 text-sm">
              Email: contact@trademade.in<br />
              Phone: +91 9239161632
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Trading Platform</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Copy Trading</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">API Access</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Subscribe to Newsletter</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright {currentYear} TradeMade - All rights reserved
            </p>
            <div className="flex space-x-6">
              <Link to="/terms-of-service" className="text-base text-gray-500 hover:text-gray-900">
                Terms & Conditions
              </Link>
              <Link to="/refund-policy" className="text-base text-gray-500 hover:text-gray-900">
                Refund Policy
              </Link>
              <Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
