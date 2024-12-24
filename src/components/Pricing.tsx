import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export const Pricing = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the perfect plan for your trading journey
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Start with our 7-day free trial. No credit card required.
          </p>
        </div>

        {/* Free Trial Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none"
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">7-Day Free Trial</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Experience the full power of TradeMade with our comprehensive free trial. Includes:
            </p>
            <div className="mt-6 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What's included</h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-indigo-600" />
                Full platform access
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-indigo-600" />
                Real-time trading
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-indigo-600" />
                2 broker connections
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-indigo-600" />
                Basic automation
              </li>
            </ul>
          </div>
          <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Get started today</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">₹0</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">for 7 days</span>
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/register"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start your trial
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subscription Plans */}
        <div className="mt-20 grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-8">
          {/* Monthly Plan */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-gray-200"
          >
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Monthly</h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                ₹1,999
                <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">/mo</span>
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Perfect for traders starting their automation journey.
              </p>
            </div>
            <div className="flex flex-1 flex-col p-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                <ul role="list" className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">2 broker accounts included</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">Real-time execution & monitoring</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">Basic automation templates</p>
                  </li>
                </ul>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/register"
                  className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* 6 Months Plan */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-gray-200"
          >
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">6 Months</h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                ₹10,999
                <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">/6mo</span>
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Save 8% with our semi-annual plan.
              </p>
            </div>
            <div className="flex flex-1 flex-col p-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                <ul role="list" className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">Everything in Monthly plan</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">Priority support</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">Advanced automation features</p>
                  </li>
                </ul>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/register"
                  className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Yearly Plan */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-gray-200"
          >
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Yearly</h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                ₹22,999
                <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">/year</span>
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Our best value plan with 20% savings.
              </p>
            </div>
            <div className="flex flex-1 flex-col p-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                <ul role="list" className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">Everything in 6 Months plan</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">Custom strategy development</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-indigo-600" />
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">1-on-1 strategy consultation</p>
                  </li>
                </ul>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/register"
                  className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Account Pricing */}
        <div className="mt-16 rounded-2xl bg-gray-50 p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Additional Accounts</h3>
            <p className="mt-4 text-lg text-gray-600">
              Need to connect more accounts? Add additional broker accounts for ₹500/account/month.
            </p>
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Need Custom Solutions?</h3>
            <p className="mt-4 text-lg text-gray-600">
              Contact us for enterprise-grade solutions and custom requirements.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="mt-8 inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Contact Sales
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </motion.a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              <div className="pt-6">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  What's included in the free trial?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Our 7-day free trial includes full access to the platform, including real-time trading, basic automation features, and connection to 2 broker accounts.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  Can I upgrade or downgrade my plan?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Yes, you can change your plan at any time. The new pricing will be prorated based on your remaining subscription period.
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  How does additional account pricing work?
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Each plan includes 2 broker accounts. Additional accounts can be added for ₹500 per account per month, billed with your regular subscription.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
