import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section 
      className="w-full bg-gray-800 py-16 md:py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-white z-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
              We're here to help
            </h1>

            {/* Section 1 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-2">Tell us about a new accident or incident</h3>
              <p className="text-gray-300">Call us 24/7 on 0800 060 8622</p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-2">Talk to us about an existing claim</h3>
              <p className="text-gray-300">Get in touch on Live Chat</p>
              <p className="text-gray-300">Monday - Friday | 10 am - 4 pm</p>
              <p className="text-gray-300">Weekends and Bank Holidays | Closed</p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-2">Talk to us about everything else</h3>
              <p className="text-gray-300">Get in touch on Live Chat</p>
              <p className="text-gray-300">Monday - Friday | 9am - 7pm</p>
              <p className="text-gray-300">Weekends and bank holidays | 10am - 4pm</p>
            </div>

            {/* Chat Button */}
            <button className="w-full sm:w-96 bg-blue-400 hover:bg-blue-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg">
              Chat to us
            </button>
          </motion.div>

          {/* Right Side - Character Illustration */}
          <motion.div 
            className="relative h-96 md:h-full hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 30, y: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.2 },
              y: { repeat: Infinity, duration: 3 }
            }}
          >
            {/* Pink Character Head */}
            <div className="relative w-72 h-72">
              {/* Large Pink Circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full"></div>
              
              {/* Eyes */}
              <div className="absolute top-20 right-24 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-6 bg-gray-900 rounded-full"></div>
              </div>
              <div className="absolute top-20 right-8 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-6 bg-gray-900 rounded-full"></div>
              </div>

              {/* Orange Character Body/Head */}
              <div className="absolute bottom-0 left-8 w-56 h-48 bg-slate-600 rounded-3xl rounded-br-none"></div>

              {/* Eyes for Orange Character */}
              <div className="absolute bottom-24 left-16 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-4 bg-gray-900 rounded-full"></div>
              </div>
              <div className="absolute bottom-24 left-32 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-4 bg-gray-900 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
