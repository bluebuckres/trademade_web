import { motion } from 'framer-motion';

export const RefundPolicy = () => {
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
            Refund Policy for TradeMade
          </h1>

          <p className="text-gray-600 mb-8">Last Updated: December 23, 2023</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Refund Policy</h2>
            <p className="text-gray-600">
              TradeMade Technologies Private Limited ("Company," "we," "us," or "our") provides a SaaS platform ("Platform") for automated trading. All sales are final, and the Company does not offer any money-back guarantees. You recognize and agree that you shall not be entitled to a refund for any purchase under any circumstances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Subscription Cancellation</h2>
            <p className="text-gray-600">
              Users may cancel their subscription at any time. However, no refunds will be issued for any unused portion of the subscription.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Exceptional Circumstances</h2>
            <p className="text-gray-600">
              In exceptional circumstances, such as a platform malfunction or billing error, users may contact our support team to request a review of their case. The Company reserves the right to grant refunds at its sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. No Warranties</h2>
            <p className="text-gray-600">
              The Platform is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the Platform will always be available, uninterrupted, or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600">
              In no event shall TradeMade Technologies Private Limited be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your use of the Platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to Refund Policy</h2>
            <p className="text-gray-600">
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to the Platform. Your continued use of the Platform following the posting of changes constitutes your acceptance of such changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">For further inquiries, please contact us at:</p>
            <div className="text-gray-600">
              <p>Email: contact@trademade.in</p>
              <p>Address: TradeMade Technologies Private Limited, BF 148/A Rabindrapally, Baguihati, Kolkata, West Bengal 700101, India</p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 italic">
              By subscribing to our services, you acknowledge that you have read, understood, and agree to this Refund Policy.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
