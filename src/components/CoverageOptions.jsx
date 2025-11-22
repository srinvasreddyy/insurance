import React from 'react'
import { motion } from 'framer-motion'
import { FaCar, FaTruck } from 'react-icons/fa'
import { useNavigate } from '@tanstack/react-router'

const CoverageOptions = () => {
  const navigate = useNavigate()
  const coverageOptions = [
    {
      id: 1,
      type: "Car",
      icon: FaCar,
      backgroundColor: "bg-blue-400"
    },
    {
      id: 2,
      type: "Van",
      icon: FaTruck,
      backgroundColor: "bg-green-600"
    }
  ]

  return (
    <section className="bg-blue-50 py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT SECTION - Main Content */}
          <motion.div 
            className="lg:w-1/2 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col justify-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6">
              You drive, we cover
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              If it revvs, spins, humms, zooms, beeps. We cover it. As long as it's a car or a van.
            </p>
          </motion.div>

          {/* RIGHT SECTION - Coverage Cards */}
          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-4 sm:gap-6">
            {coverageOptions.map((option, index) => (
              <motion.div
                key={option.id}
                className="flex-1 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                
                {/* Icon Container */}
                <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 ${option.backgroundColor} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <option.icon className="text-4xl sm:text-5xl md:text-6xl text-white" />
                </div>

                {/* Type Label */}
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 sm:mb-6">
                  {option.type}
                </h3>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => navigate({ to: option.type === 'Car' ? '/car' : '/van' })}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold px-5 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-colors duration-200"
                >
                  Find out more
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default CoverageOptions