import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background SVG */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 w-1/2 h-full hidden lg:block"
        >
          <img
            src="/undraw_season-change_ohe6.svg"
            alt="Automation Platform"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile SVG - Shown above content on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:hidden order-1 -mt-8 -mb-4"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <img
                src="/undraw_season-change_ohe6.svg"
                alt="Automation Platform"
                className="w-full h-auto max-w-[280px] mx-auto"
              />
            </motion.div>
          </motion.div>

          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              <span className="block">Seamlessly automate your strategy</span>
              <span className="block text-indigo-600">across multiple platforms</span>
              <span className="block">with real-time insights in one click</span>
            </motion.h1>

            {/* CTA Button - Shown immediately after heading */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
              className="mt-8 inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Try Free
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 space-y-4"
            >
              <p className="text-xl text-gray-600">
                When <span className="text-indigo-600 font-semibold">#TimeIsMoney</span>, TradeMade makes every second worthwhile.
              </p>
              <p className="text-xl text-gray-600">
                Your <span className="text-indigo-600 font-semibold">#DecisionsShapeDestiny</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-700">10X faster execution</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="text-gray-700">Real-time news alerts</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-700">Multi-account copying</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-700">Advanced risk control</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Desktop SVG */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block order-2"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <img
                src="/undraw_season-change_ohe6.svg"
                alt="Automation Platform"
                className="w-full max-w-2xl mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Temporarily hidden Broker Logos section */}
        {false && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center lg:text-left">Supports all major Brokers</h3>
            <div className="flex justify-center lg:justify-start space-x-8 lg:space-x-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-lg flex items-center justify-center p-4 hover:shadow-xl transition-shadow duration-300">
                  <img src="/flattrade_logo.png" alt="Flattrade" className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
                </div>
                <span className="text-gray-600">Flattrade</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-lg flex items-center justify-center p-4 hover:shadow-xl transition-shadow duration-300">
                  <img src="/shoonya_logo.png" alt="Shoonya" className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
                </div>
                <span className="text-gray-600">Shoonya</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-lg flex items-center justify-center p-4 hover:shadow-xl transition-shadow duration-300">
                  <span className="text-gray-400 text-sm lg:text-lg font-medium">More coming soon...</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};