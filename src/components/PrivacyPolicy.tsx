import { motion } from 'framer-motion';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg prose-indigo max-w-none"
        >
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Privacy Policy for TradeMade
          </h1>

          <p className="text-gray-600 mb-8">Last Updated: December 24, 2023</p>

          <div className="text-gray-600 mb-12">
            Thank you for choosing to be part of our community at TradeMade Technologies Private Limited ("Company," "we," "us," or "our"). We are committed to protecting your personal information and your right to privacy.
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Information We Collect</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Name and contact details</li>
                <li>Email address</li>
                <li>Contact information</li>
                <li>Billing information</li>
                <li>Trading account credentials</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Data:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Usage data</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Account Management: To create and manage your account</li>
              <li>Order Fulfillment: To process transactions and billing</li>
              <li>Service Delivery: To provide and improve our services</li>
              <li>Communication: For updates and customer support</li>
              <li>Marketing: To send promotional communications (with consent)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Information Sharing</h2>
            <p className="text-gray-600 mb-4">We share your data only when necessary:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>With service providers who assist in our operations</li>
              <li>For legal compliance and law enforcement</li>
              <li>In the event of a business transfer or merger</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access your personal information</li>
              <li>Request corrections to your data</li>
              <li>Delete your account</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to data processing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
            <div className="text-gray-600">
              <p>For privacy-related inquiries:</p>
              <p className="mt-2">Email: contact@trademade.in</p>
              <p>Address: TradeMade Technologies Private Limited, BF 148/A Rabindrapally, Baguihati, Kolkata, West Bengal 700101, India</p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 italic">
              By using TradeMade's services, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};