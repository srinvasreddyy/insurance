import React from 'react'
import { motion } from 'framer-motion'

const CarHero = () => {
  return (
    <motion.section 
      className="bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen flex items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
        
        {/* LEFT SIDE - Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">
            Award-winning<br />car insurance
          </h1>

          <p className="text-lg md:text-xl mb-4 text-gray-100">
            Fully comprehensive.<br />
            Fully flexible. <span className="text-teal-400 font-bold">Fully Be Sure.</span>
          </p>

          {/* CTA Button */}
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-3 rounded-full max-w-xs mb-8 transition-colors duration-200">
            Get a free quote
          </button>

          {/* Stats */}
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <span className="text-blue-400 text-2xl">⊕</span>
              <span className="text-base md:text-lg">Over £200 million paid out in claims</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-400 text-2xl">⊕</span>
              <span className="text-base md:text-lg">Over 300,000 app downloads</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md h-96 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Car interior with mascot"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default CarHero
