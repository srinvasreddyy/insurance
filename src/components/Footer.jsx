import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaCheckCircle, FaStar, FaSearch, FaChartBar } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section - Social & Navigation */}
        <motion.div 
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-white hover:text-pink-500 transition-colors text-xl sm:text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors text-xl sm:text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors text-xl sm:text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-pink-500 transition-colors text-xl sm:text-2xl">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">SFCR</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Anti-Slavery Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Complaints Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Jobs</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Money Worries</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Refer a friend</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Perks</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Discounts</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Help</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Log in</a>
          </nav>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 py-8 sm:py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          
          {/* Left Side - Certificates & Info */}
          <div>
            {/* Certificates Section */}
            <div className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Certificates & awards</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <FaCheckCircle className="text-xl sm:text-2xl text-green-500" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <FaStar className="text-xl sm:text-2xl text-yellow-500" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <FaSearch className="text-xl sm:text-2xl text-blue-400" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                  <FaChartBar className="text-xl sm:text-2xl text-purple-400" />
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-300">
              <p>
                Marshmallow is a trading name used by the following companies:
              </p>

              <p>
                Marshmallow Financial Services Limited is authorised and regulated by the Financial Conduct Authority(FCA) <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors">under firm reference number 797672</a>. Registered in England and Wales with company number 11005345.
              </p>

              <p>
                Marshmallow Credit Services Limited is is authorised and regulated by the Financial Conduct Authority (FCA) under firm reference number 1024606. Registered in England and Wales with company number 15834468.
              </p>

              <p>
                The registered address for both companies is 66 City Road, London, EC1Y 1BD
              </p>
            </div>
          </div>

          {/* Right Side - Logo */}
          <div className="flex items-end justify-start lg:justify-end">
            <div className="text-left lg:text-right">
              <div className="flex items-center gap-2 justify-start lg:justify-end">
                <span className="text-2xl sm:text-3xl">🎀</span>
                <span className="text-xl sm:text-2xl font-bold">Be Sure</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Bottom Border */}
        <motion.div 
          className="border-t border-gray-700 pt-6 sm:pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs text-gray-500 text-center">
            © 2024 Be Sure. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer