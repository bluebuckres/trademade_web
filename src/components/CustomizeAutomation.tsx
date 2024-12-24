import { motion } from 'framer-motion';
import { Settings, Zap, Code, Share2, Shield } from 'lucide-react';

export const CustomizeAutomation = () => {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Customize Your Trading Automation
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Build your perfect trading strategy with our powerful automation tools
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature Cards */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/10"
          >
            <div className="flex items-center">
              <Settings className="h-8 w-8 text-indigo-600" />
              <h3 className="ml-4 text-lg font-semibold">Custom Strategies</h3>
            </div>
            <p className="mt-4 text-gray-600">
              Create and customize trading strategies using our intuitive interface
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/10"
          >
            <div className="flex items-center">
              <Code className="h-8 w-8 text-indigo-600" />
              <h3 className="ml-4 text-lg font-semibold">API Integration</h3>
            </div>
            <p className="mt-4 text-gray-600">
              Connect with multiple brokers through our unified API interface
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/10"
          >
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-indigo-600" />
              <h3 className="ml-4 text-lg font-semibold">Real-time Execution</h3>
            </div>
            <p className="mt-4 text-gray-600">
              Execute trades instantly based on your custom triggers and conditions
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/10"
          >
            <div className="flex items-center">
              <Share2 className="h-8 w-8 text-indigo-600" />
              <h3 className="ml-4 text-lg font-semibold">Strategy Sharing</h3>
            </div>
            <p className="mt-4 text-gray-600">
              Share and collaborate on trading strategies with other traders
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/10"
          >
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600" />
              <h3 className="ml-4 text-lg font-semibold">Risk Management</h3>
            </div>
            <p className="mt-4 text-gray-600">
              Set custom risk parameters and automated stop-loss features
            </p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/register"
            className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Start Customizing
            <Zap className="ml-2 -mr-1 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};
