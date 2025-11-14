import React from "react";
import { motion } from "framer-motion";

const ReferFriend = () => {
  return (
    <motion.section
      className="w-full bg-gradient-to-r from-blue-100 to-teal-100 min-h-[300px] md:min-h-[400px] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Got a friend who's looking for car insurance?
          </h1>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-base md:text-lg text-gray-800 mb-4 leading-relaxed">
            Whether they're new to the UK or not, we'd love to get to know them.
          </p>
          <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
            When they sign up with us, you'll both get a £50 Amazon voucher to spend on whatever you like.
          </p>
          <motion.button
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-base md:text-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Share the love
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReferFriend;
