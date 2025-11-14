import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-slate-50 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 lg:py-0">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 max-lg:mt-20 pt-10 gap-8 lg:gap-16 items-center">
        
        {/* LEFT: Image with modern card design */}
        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge - USA → UK */}
          <motion.div 
            className="absolute top-6 right-2 z-30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide whitespace-nowrap shadow-lg">
              USA → UK
            </div>
          </motion.div>

          {/* Image Container with Modern Styling */}
          <motion.div 
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1200&fit=crop"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          {/* Stats Badge - Modern circular design */}
          <motion.div 
            className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-0 z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div 
              className="text-center shadow-2xl w-44 sm:w-48 p-6 sm:p-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl text-white"
            >
              <div className="text-4xl sm:text-5xl font-black leading-tight">
                78,616
              </div>
              <div className="text-xs sm:text-sm font-bold tracking-widest mt-3 uppercase opacity-90">
                Miles driven<br />in miami
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Content with refined typography */}
        <motion.div 
          className="relative lg:pl-8 mt-28 sm:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title with modern styling */}
          <motion.h1
            className="font-black text-gray-950 text-5xl sm:text-6xl md:text-7xl lg:text-7xl leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Get your <br className="hidden md:block" />
            miles' <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">worth</span>
          </motion.h1>

          {/* Subtitle with better spacing */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Moved to the UK? You could save an average of{" "}
            <span className="font-bold text-blue-600">£392</span> on your car insurance,
            with fairer prices based on all your driving experience - in any
            country.<span className="text-xs align-super">*</span>
          </motion.p>

          {/* Feature list - modern design */}
          <motion.ul 
            className="space-y-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <li className="flex gap-4 items-start">
              <div className="mt-1 bg-teal-500 text-white p-2 rounded-lg flex-shrink-0">
                <FaArrowRight className="text-sm" />
              </div>
              <div className="text-lg text-gray-800 font-semibold">
                Licences from <span className="font-black">all</span> countries covered
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <div className="mt-1 bg-teal-500 text-white p-2 rounded-lg flex-shrink-0">
                <FaArrowRight className="text-sm" />
              </div>
              <div className="text-lg text-gray-800 font-semibold">
                Discounts based on <span className="font-black">all</span> your driving experience - in any country
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <div className="mt-1 bg-teal-500 text-white p-2 rounded-lg flex-shrink-0">
                <FaArrowRight className="text-sm" />
              </div>
              <div className="text-lg text-gray-800 font-semibold">
                Flexible payment options, like pay monthly
              </div>
            </li>
          </motion.ul>

          {/* CTA with modern styling */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button
              className="text-lg px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:scale-105"
            >
              Get a free quote
            </button>

            <div className="flex items-center gap-3 text-gray-700 font-semibold text-base">
              <FaLock className="text-teal-500" />
              <span>Regulated by the <strong>FCA</strong></span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
