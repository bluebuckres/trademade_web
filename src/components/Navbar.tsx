import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50">
      {/* Desktop Navigation - Glassmorphism effect */}
      <div className="backdrop-blur-md bg-white/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text">
                TradeMade
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/customize" className="text-gray-800 hover:text-indigo-600 transition-colors">
                Customize
              </Link>
              <Link to="/how-to-use" className="text-gray-800 hover:text-indigo-600 transition-colors">
                How to Use
              </Link>
              <Link to="/pricing" className="text-gray-800 hover:text-indigo-600 transition-colors">
                Pricing
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-indigo-600 transition-colors">
                Contact
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-800 hover:text-indigo-600 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Sign up
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden backdrop-blur-md bg-white/95 border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link 
                to="/customize" 
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Customize
              </Link>
              <Link 
                to="/how-to-use" 
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How to Use
              </Link>
              <Link 
                to="/pricing" 
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 space-y-4">
                <Link 
                  to="/login" 
                  className="block px-4 py-2 text-gray-800 hover:bg-indigo-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Link>
                <Link 
                  to="/signup" 
                  className="block px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};