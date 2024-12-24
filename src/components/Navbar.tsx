import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              TradeMade
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/customize" className="text-gray-600 hover:text-gray-900 transition-colors">
              Customize
            </Link>
            <Link to="/how-to-use" className="text-gray-600 hover:text-gray-900 transition-colors">
              How to Use
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors flex items-center space-x-2"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/customize"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Customize
              </Link>
              <Link
                to="/how-to-use"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                How to Use
              </Link>
              <Link
                to="/pricing"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
              <div className="pt-4 space-y-4">
                <Link
                  to="/login"
                  className="block w-full text-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center bg-indigo-600 text-white px-6 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors"
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