import React from 'react';
import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <motion.section 
      className="w-full bg-linear-to-b from-slate-100 to-blue-50 py-20 md:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The Campfire
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-center text-gray-700 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Everything you need to know about driving in the UK, and getting insured
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button 
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Driving and UK car insurance
          </motion.button>
          <motion.button 
            className="bg-blue-100 hover:bg-blue-200 text-gray-900 font-semibold py-3 px-8 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Inside Be Sure
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
