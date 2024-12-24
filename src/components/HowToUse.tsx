import { motion } from 'framer-motion';
import { UserPlus, Settings, PlayCircle, BarChart } from 'lucide-react';

export const HowToUse = () => {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Get Started
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Follow these simple steps to start automating your trades
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-indigo-100">
                <UserPlus className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">1. Create Account</h3>
              <p className="mt-2 text-gray-600">
                Sign up and connect your trading accounts from supported brokers
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative text-center"
            >
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-indigo-100">
                <Settings className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">2. Configure Strategy</h3>
              <p className="mt-2 text-gray-600">
                Set up your trading rules, conditions, and risk parameters
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative text-center"
            >
              <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-indigo-100">
                <PlayCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">3. Start Automation</h3>
              <p className="mt-2 text-gray-600">
                Activate your strategy and let it execute trades automatically
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative text-center"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">4. Monitor & Adjust</h3>
              <p className="mt-2 text-gray-600">
                Track performance and fine-tune your strategy as needed
              </p>
            </motion.div>
          </div>

          {/* Video Tutorial Section */}
          <div className="mt-20">
            <div className="relative mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-xl bg-gray-900 shadow-2xl"
              >
                {/* Replace with actual video component */}
                <div className="flex h-full items-center justify-center">
                  <PlayCircle className="h-20 w-20 text-white opacity-80" />
                </div>
              </motion.div>
              <p className="mt-4 text-center text-sm text-gray-500">
                Watch our detailed tutorial to learn more about TradeMade's features
              </p>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-semibold">Need Help?</h3>
            <p className="mt-2 text-gray-600">
              Our support team is available 24/7 to assist you
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/support"
              className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
            >
              Contact Support
              <span className="ml-2">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};
