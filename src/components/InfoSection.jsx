import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa'

const InfoSection = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE - Title with Icon */}
          <motion.div 
            className="flex items-start gap-3 sm:gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-600 flex items-center justify-center">
                <FaArrowRight className="text-white text-lg sm:text-xl" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
              Your difference makes the difference
            </h2>
          </motion.div>

          {/* RIGHT SIDE - Content */}
          <motion.div 
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              People who move to the UK used to pay more for their car insurance than their UK-born friends. Why? Because most insurers only care about the driving experience you gain after you move here.
            </p>

            <p className="text-base sm:text-lg text-gray-900 font-bold">
              So we started Be Sure!
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We give you the chance to tell us your whole story, no matter where you started your driving journey. And it doesn't just mean big savings. We'll also do everything we can to support you, whenever you need us, as you make the UK your new home.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default InfoSection