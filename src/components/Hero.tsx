import { motion } from 'framer-motion';
import { ArrowRight, Zap, Clock, TrendingUp, Globe, Shield } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white min-h-screen">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-indigo-50/40" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-0 sm:pt-24 lg:pt-32">
        {/* Mobile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="sm:hidden mb-6"
        >
          <motion.img
            src="/undraw_season-change_ohe6.svg"
            alt="Trading Platform Demo"
            className="w-full h-auto max-w-[280px] mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <h1 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-3">
                <span className="text-gray-900">Seamlessly execute trades</span>{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-blue-500 inline-block text-transparent bg-clip-text">across brokers and accounts</span>{' '}
                <span className="text-gray-900">with real-time news in</span>{' '}
                <span className="relative inline-block">
                  one click
                </span>
                <img 
                  src="/undraw_fun-underline.svg" 
                  alt="underline" 
                  className="absolute -bottom-3 left-0 w-full h-4 scale-125"
                />
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 leading-snug sm:leading-relaxed tracking-wide">
                When <span className="bg-gradient-to-r from-indigo-600 to-blue-500 inline-block text-transparent bg-clip-text font-semibold">#TimeIsMoney</span>,{' '}
                TradeMade makes every second worthwhile.{' '}
                <span className="block mt-1.5">
                  Your <span className="bg-gradient-to-r from-indigo-600 to-blue-500 inline-block text-transparent bg-clip-text font-semibold">#DecisionsShapeDestiny</span>
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700">10X faster execution</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700">Real-time news alerts</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700">Multi-account copying</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700">Cross-broker trading</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700">Advanced risk control</span>
              </div>
            </div>

            <div className="space-y-6 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/login"
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
                <ArrowRight className="ml-2 -mr-1 inline-block h-4 w-4" />
              </motion.a>

              <div>
                <p className="text-sm font-medium text-gray-600 mb-4">Supports all major Brokers</p>
                <div className="flex items-center space-x-6">
                  <img 
                    src="/flattrade_logo.png" 
                    alt="Flattrade" 
                    className="h-8 w-auto hover:opacity-80 transition-opacity"
                  />
                  <img 
                    src="/shoonya_logo.png" 
                    alt="Shoonya" 
                    className="h-8 w-auto hover:opacity-80 transition-opacity"
                  />
                  <span className="text-sm text-gray-500 italic">More coming soon...</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:pl-8 hidden sm:block"
          >
            <motion.img
              src="/undraw_season-change_ohe6.svg"
              alt="Trading Platform Demo"
              className="w-full h-auto max-w-[700px] mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};