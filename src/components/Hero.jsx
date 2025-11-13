import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-[#f5ede4] min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 lg:py-0">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 max-lg:mt-20 pt-10 gap-8 lg:gap-20 items-center">
        
        {/* LEFT: Image + badges */}
        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* USA → UK Badge - positioned at top-right of image */}
          <motion.div 
            className="absolute top-4 sm:top-6 -left-1 sm:-left-2 z-30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="bg-[#2d5a47] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap shadow-lg">
              USA → UK
            </div>
          </motion.div>

          {/* Square Image Container */}
          <motion.div 
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1200&fit=crop"
              alt="Hero"
              className="w-full h-full object-cover rounded-md"
            />
          </motion.div>

          {/* Miles Driven Badge - bottom left overlap */}
          <motion.div 
            className="absolute -bottom-16 sm:-bottom-20 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-4 lg:left-0 z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div 
              className="text-center shadow-2xl w-40 sm:w-44 md:w-[200px] p-5 sm:p-6 md:p-7"
              style={{
                background: "#a89f84",
                borderRadius: "50%",
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)"
              }}
            >
              <div className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight">
                78,616
              </div>
              <div className="text-[10px] sm:text-xs font-black text-gray-950 tracking-widest mt-2 sm:mt-3 uppercase">
                Miles driven<br />in miami
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Text content side */}
        <motion.div 
          className="relative lg:pl-12 mt-24 sm:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title - large heavy weight */}
          <motion.h1
            className="font-black text-gray-950 text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px]"
            style={{
              lineHeight: 0.95,
              marginBottom: 24,
              letterSpacing: -0.5,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Get your <br className="hidden md:block" />
            miles' worth
          </motion.h1>

          {/* Subtitle paragraph */}
          <motion.p
            className="text-[15px] sm:text-[16px] md:text-[17px]"
            style={{
              color: "#555555",
              maxWidth: 540,
              lineHeight: 1.65,
              marginBottom: 32,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Moved to the UK? You could save an average of{" "}
            <span style={{ fontWeight: 700 }}>£392</span> on your car insurance,
            with fairer prices based on all your driving experience - in any
            country.<span style={{ fontSize: 11, verticalAlign: "super" }}>*</span>
          </motion.p>

          {/* Feature list - green arrow bullet like original */}
          <motion.ul 
            style={{ listStyle: "none", padding: 0, marginBottom: 36 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <li className="flex gap-3 items-start mb-4">
              <FaArrowRight className="mt-1 text-[#0f7a4f] text-lg" />
              <div className="text-[14px] sm:text-[15px] text-[#333] font-semibold">
                Licences from <span style={{ fontWeight: 800 }}>all</span> countries covered
              </div>
            </li>

            <li className="flex gap-3 items-start mb-4">
              <FaArrowRight className="mt-1 text-[#0f7a4f] text-lg" />
              <div className="text-[14px] sm:text-[15px] text-[#333] font-semibold">
                Discounts based on <span style={{ fontWeight: 800 }}>all</span> your driving experience - in any country
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <FaArrowRight className="mt-1 text-[#0f7a4f] text-lg" />
              <div className="text-[14px] sm:text-[15px] text-[#333] font-semibold">
                Flexible payment options, like pay monthly
              </div>
            </li>
          </motion.ul>

          {/* CTA row */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button
              className="text-[15px] sm:text-[16px] px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-extrabold shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                background: "#007AFF",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
              onMouseOver={(e) => e.target.style.background = "blue"}
              onMouseOut={(e) => e.target.style.background = "#007AFF"}
            >
              Get a free quote
            </button>

            <div className="flex items-center gap-2 text-[#666] font-semibold text-[14px] sm:text-[15px]">
              <FaLock className="text-base" />
              <span>Regulated by the <strong>FCA</strong></span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
