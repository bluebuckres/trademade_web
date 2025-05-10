import { motion } from 'framer-motion';

export const Terms = () => {
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
            Terms and Conditions for TradeMade
          </h1>

          <p className="text-gray-600 mb-8">Last Updated: December 23, 2023</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">AGREEMENT TO TERMS</h2>
            <p className="text-gray-600">
              These Terms and Conditions ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("User" or "you"), and BlueBuck Research LLP ("Company," "we," "us," or "our"), concerning your access to and use of the TradeMade SaaS platform, including any related services, features, or content (collectively, the "Platform"). By accessing or using the Platform, you agree to these Terms. If you do not agree with any part of these Terms, you must discontinue using the Platform immediately.
            </p>
            <p className="text-gray-600 mt-4">
              Supplemental terms, policies, or documents posted on the Platform from time to time are hereby incorporated by reference into these Terms. We reserve the right to make changes or modifications to these Terms at any time. We will notify you of any material changes by updating the "Last Updated" date of these Terms or through other communication channels.
            </p>
            <p className="text-gray-600 mt-4">
              The Platform is intended for use in compliance with the laws of India. Users outside India are responsible for ensuring their use of the Platform complies with local laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">DEFINITIONS</h2>
            <p className="text-gray-600 mb-4">For the purpose of these Terms:</p>
            <div className="space-y-4 text-gray-600">
              <p>"Platform" refers to the TradeMade SaaS application, including all tools, content, and services provided therein.</p>
              <p>"User" refers to any individual or entity accessing or using the Platform.</p>
              <p>"Broker" means any third-party brokerage service integrated into the Platform.</p>
              <p>"Content" includes, but is not limited to, data, text, images, graphics, software, and other material provided by the Platform.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">SERVICES OFFERED</h2>
            <p className="text-gray-600 mb-4">TradeMade provides the following services to Users:</p>
            <ul className="list-none space-y-4 text-gray-600">
              <li><strong>Seamless Trade Execution:</strong> Integration with multiple brokers to facilitate unified trade execution.</li>
              <li><strong>Real-Time News Alerts:</strong> Delivery of curated financial news updates.</li>
              <li><strong>Multi-Account Copy Trading:</strong> Synchronization and copying of trades across multiple accounts.</li>
              <li><strong>Cross-Broker Trading:</strong> Execution of trades across different brokers from a single interface.</li>
              <li><strong>Advanced Risk Control:</strong> Tools to set and manage risk parameters during trading.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">USER ELIGIBILITY</h2>
            <p className="text-gray-600 mb-4">By using the Platform, you represent and warrant that:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You are at least 18 years old or have obtained parental or guardian consent if you are a minor.</li>
              <li>You have the legal capacity to agree to these Terms.</li>
              <li>Your use of the Platform complies with applicable laws and regulations.</li>
              <li>You will not use the Platform for unlawful purposes or activities.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">USER ACCOUNT</h2>
            <p className="text-gray-600 mb-4">Registration: Users must create an account to access certain features of the Platform. You agree to provide accurate and complete information during registration and update it as necessary.</p>
            <p className="text-gray-600 mb-4">Account Security: You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
            <p className="text-gray-600 mb-4">Unauthorized Use: Notify us immediately if you suspect any unauthorized access or use of your account.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">INTELLECTUAL PROPERTY</h2>
            <p className="text-gray-600 mb-4">Ownership: The Platform, including all Content, software, and trademarks, is owned or licensed by TradeMade and protected under Indian copyright and intellectual property laws.</p>
            <p className="text-gray-600 mb-4">License to Use: We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Platform for personal or business purposes.</p>
            <p className="text-gray-600 mb-4">Restrictions: You may not reproduce, distribute, modify, or create derivative works of the Platform without prior written consent.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">FEES AND PAYMENT</h2>
            <p className="text-gray-600 mb-4">Subscription Fees: Certain features of the Platform may require payment of subscription fees as outlined on our pricing page.</p>
            <p className="text-gray-600 mb-4">Billing: Payments will be processed securely through our payment gateway providers. You agree to provide accurate billing information.</p>
            <p className="text-gray-600 mb-4">Refund Policy: Fees are non-refundable unless otherwise specified in our Refund Policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">REFUND & CANCELLATION POLICY</h2>
            <p className="text-gray-600 mb-4">No Refunds: All sales are final, and the Company does not offer any money-back guarantees. You recognize and agree that you shall not be entitled to a refund for any purchase under any circumstances.</p>
            <p className="text-gray-600 mb-4">Cancellation: Users may cancel their subscription at any time. However, no refunds will be issued for any unused portion of the subscription.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">DISCLAIMERS AND WARRANTIES</h2>
            <p className="text-gray-600 mb-4">No Warranties: TradeMade makes no warranties regarding the performance or operation of the Platform. The Company further makes no representations or warranties of any kind, express or implied, as to the information, contents, materials, or services provided through the Platform. To the fullest extent permissible under the law, the Company disclaims all warranties, including implied warranties of merchantability and fitness for a particular purpose.</p>
            <p className="text-gray-600 mb-4">Limitation of Liability: You agree to absolve the Company of any and all liability or loss that you or any associated person or entity may suffer as a result of using the Platform. The Company shall not be liable for any direct, indirect, incidental, special, or consequential damages, including loss of data or profits, arising out of your use of the Platform.</p>
            <p className="text-gray-600 mb-4">Accuracy and Changes: The information, software, products, and services provided on the Platform may include inaccuracies or typographical errors. The Company reserves the right to make improvements and changes to the Platform at any time without notice.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">USER RESPONSIBILITIES</h2>
            <p className="text-gray-600 mb-4">Compliance: You are solely responsible for ensuring compliance with all applicable laws, including SEBI regulations, while using the Platform.</p>
            <p className="text-gray-600 mb-4">Accurate Information: You must ensure the accuracy of information provided through the Platform.</p>
            <p className="text-gray-600 mb-4">No Misuse: Users may not engage in activities that interfere with the Platform’s functionality or violate these Terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">PRIVACY POLICY</h2>
            <p className="text-gray-600 mb-4">Data Protection: Your use of the Platform is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal information.</p>
            <p className="text-gray-600 mb-4">Personal Data Law Compliance: TradeMade complies with applicable Indian laws on personal data protection, including the Information Technology Act, 2000, and related rules.</p>
            <p className="text-gray-600 mb-4">Changes to the Privacy Policy: We may update our Privacy Policy from time to time. Changes will be posted on this page, and you will be notified via email or a prominent notice on the Platform. Please check this page periodically for updates.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">MODIFICATIONS AND INTERRUPTIONS</h2>
            <p className="text-gray-600 mb-4">Changes to Services: We reserve the right to modify or discontinue any part of the Platform at any time without prior notice.</p>
            <p className="text-gray-600 mb-4">Interruptions: The Platform may experience interruptions due to maintenance, technical issues, or other reasons beyond our control. We are not liable for any inconvenience caused by such interruptions.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">DISPUTE RESOLUTION</h2>
            <p className="text-gray-600 mb-4">Governing Law: These Terms are governed by the laws of India.</p>
            <p className="text-gray-600 mb-4">Jurisdiction: Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.</p>
            <p className="text-gray-600 mb-4">Arbitration: Parties may agree to resolve disputes through arbitration under the Arbitration and Conciliation Act, 1996.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">MISCELLANEOUS</h2>
            <p className="text-gray-600 mb-4">Entire Agreement: These Terms, along with our Privacy Policy, constitute the entire agreement between you and TradeMade.</p>
            <p className="text-gray-600 mb-4">Severability: If any provision of these Terms is found invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
            <p className="text-gray-600 mb-4">No Waiver: Failure to enforce any provision of these Terms does not constitute a waiver of such provision.</p>
            <p className="text-gray-600 mb-4">Assignment: TradeMade may assign its rights and obligations under these Terms without prior notice.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">CONTACT US</h2>
            <p className="text-gray-600 mb-4">If you have questions or concerns about these Terms, please contact us at:</p>
            <div className="text-gray-600">
              <p>Email: support@trademade.com</p>
              <p>Address: BlueBuck Research LLP, BF 148/A Rabindrapally, Baguihati, Kolkata, West Bengal 700101, India</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
