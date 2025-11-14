import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const UKDrivingGuide = () => {
  return (
    <section className="bg-blue-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE - Title */}
          <motion.div 
            className="flex items-start gap-3 sm:gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-500 flex items-center justify-center">
                <FaArrowRight className="text-white text-lg sm:text-xl" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
              New to driving in the UK?
            </h2>
          </motion.div>

          {/* RIGHT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg text-gray-800 mb-6 sm:mb-8 leading-relaxed">
              We have a page for that! Click the link below for answers to questions like:
            </p>

            {/* Questions List */}
            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <span className="font-semibold">"Do I need to swap my licence for a UK one?"</span>
              </div>
              <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <span className="font-semibold">"How are you saving me so much money?!"</span>
              </div>
              <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <span className="font-semibold">"What do I need to do before I'm legally allowed to drive?"</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gray-400 hover:bg-gray-500 text-gray-900 font-bold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full transition-colors duration-200">
              Read more about driving in the UK
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default UKDrivingGuide