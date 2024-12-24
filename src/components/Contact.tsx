import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const whatsappNumber = "919239161632"; // Format: country code (91) + number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50 blur-3xl"/>
        <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-blue-50 blur-3xl"/>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            Let's Connect
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions about TradeMade? We're here to help you succeed.
          </p>
        </motion.div>

        {/* SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-lg"
        >
          <img 
            src="/undraw_contact-us_kcoa.svg" 
            alt="Contact illustration" 
            className="w-full h-auto"
          />
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-200"
          >
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2.5 relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200"
                  />
                  <div className="absolute inset-0 rounded-md pointer-events-none ring-1 ring-inset ring-gray-300 transition-all duration-200"/>
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5 relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200"
                  />
                  <div className="absolute inset-0 rounded-md pointer-events-none ring-1 ring-inset ring-gray-300 transition-all duration-200"/>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5 relative">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200"
                  />
                  <div className="absolute inset-0 rounded-md pointer-events-none ring-1 ring-inset ring-gray-300 transition-all duration-200"/>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="block w-full rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Connect with us through any of these channels. We're here to assist you!
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                className="flex gap-x-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Email</p>
                  <p className="mt-1 text-sm text-gray-600">contact@trademade.in</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                className="flex gap-x-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Phone</p>
                  <p className="mt-1 text-sm text-gray-600">+91 9239161632</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                className="flex gap-x-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Office</p>
                  <p className="mt-1 text-sm text-gray-600">
                    BF 148/A Rabindrapally<br />
                    Baguihati, Kolkata<br />
                    West Bengal 700101<br />
                    India
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Support Hours */}
            <motion.div 
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              className="rounded-lg bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">Support Hours</h3>
              <dl className="mt-4 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <dt>Monday - Friday</dt>
                  <dd>9:00 AM - 6:00 PM IST</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Saturday</dt>
                  <dd>10:00 AM - 2:00 PM IST</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-4 py-4 text-center text-sm font-semibold text-white shadow-sm hover:from-green-600 hover:to-green-700 transition-all duration-200"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
