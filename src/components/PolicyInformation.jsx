import React, { useState } from 'react'
import { motion } from 'framer-motion'

const PolicyInformation = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="bg-blue-50 py-8 sm:py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="bg-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Disclaimer Text 1 */}
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
            <span className="font-semibold">*</span>Based on internal data for 4,304 policies sold via Confused.com from January 2025 to June 2025 to those of UK newcomers living in the UK less than 3 years. The average difference between Be Sure's price and the second cheapest price was £392.
          </p>

          {/* Disclaimer Text 2 */}
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
            Drivers from outside the EU/EEA will need to switch to a UK licence 12 months after becoming a UK resident, or drive on a provisional license with the same rules as learner drivers. You can find out more <a href="#" className="text-gray-800 font-semibold hover:underline">here</a>.
          </p>

          {/* Disclaimer Text 3 */}
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
            79% of our customers are new to the UK based on data from all active Be Sure car insurance policyholders from 2018 - 2024.
          </p>

          {/* Expandable Section */}
          <div className="border-t border-gray-300 pt-4 sm:pt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between text-left hover:opacity-75 transition-opacity duration-200"
            >
              <h3 className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">
                Here's how we back up what we say in our ads
              </h3>
              <span className={`shrink-0 text-gray-500 text-lg sm:text-xl transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {/* Expandable Content */}
            {isExpanded && (
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-300">
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">
                  We stand behind our claims with data and transparency. Here's what backs up our advertising:
                </p>
                <ul className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed space-y-2 sm:space-y-3">
                  <li className="flex gap-2 sm:gap-3">
                    <span className="text-gray-400">•</span>
                    <span>All savings claims are based on verified data from major price comparison websites</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="text-gray-400">•</span>
                    <span>Customer satisfaction metrics come from our active policyholder database</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="text-gray-400">•</span>
                    <span>Our coverage options are verified by the FCA and our regulatory partners</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="text-gray-400">•</span>
                    <span>All testimonials and reviews are from real Be Sure customers</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default PolicyInformation