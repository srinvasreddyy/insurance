import React from 'react'
import { motion } from 'framer-motion'
import vanImage from '../assets/Vanimage1.webp'

const VanHero = () => {
  return (
    <motion.section 
      className="relative w-full min-h-screen flex items-center bg-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={vanImage}
          alt="Van driver"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Empty for image prominence */}
          <div className="hidden lg:block"></div>

          {/* Right Side - Text Content */}
          <div className="text-white">
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Get the job<br />done with van<br />cover
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
              The cover you need to keep things running smoothly.
            </p>

            {/* CTA Button */}
            <button className="bg-blue-400 hover:bg-blue-500 text-gray-900 font-bold px-12 py-3 rounded-full mb-10 transition-colors duration-200 text-lg w-full md:w-auto">
              Get a quote
            </button>

            {/* Features List */}
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="text-white text-2xl mt-0.5 shrink-0">⊕</span>
                <span className="text-base md:text-lg text-gray-100 leading-relaxed">
                  Claim-free discount protection if an uninsured driver hits you
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-white text-2xl mt-0.5 shrink-0">⊕</span>
                <span className="text-base md:text-lg text-gray-100 leading-relaxed">
                  Cover for your vehicle whilst carrying work tools and goods
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-white text-2xl mt-0.5 shrink-0">⊕</span>
                <span className="text-base md:text-lg text-gray-100 leading-relaxed">
                  Fully Comprehensive
                </span>
              </li>
            </ul>

          </div>

        </div>
      </div>

    </motion.section>
  )
}

export default VanHero
