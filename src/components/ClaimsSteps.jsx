import React from 'react';
import { motion } from 'framer-motion';

export default function ClaimsSteps() {
  return (
    <motion.section 
      className="w-full bg-gray-50 py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - What happens after */}
          <div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-pink-500">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  What happens after?
                </h2>
                <p className="text-gray-600 text-sm">If you decide to make a claim, we'll get to work.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-pink-500 text-white font-bold text-sm flex-shrink-0">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  We'll organise repairs or replacements.
                </h3>
              </div>
              <p className="text-gray-600 text-sm ml-11">
                We have a huge network of garages and repairers. We'll pick the best one for you, and take care of everything.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-pink-500 text-white font-bold text-sm flex-shrink-0">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Get your replacement courtesy car (if it's included in your plan).
                </h3>
              </div>
              <p className="text-gray-600 text-sm ml-11">
                Have courtesy cover in your plan? Get a replacement car (if available) while yours is being fixed. Have the upgrade? You'll also get one if it's damaged beyond repair, so you can find a new one.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-pink-500 text-white font-bold text-sm flex-shrink-0">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  We'll update you on all progress.
                </h3>
              </div>
              <p className="text-gray-600 text-sm ml-11">
                Sometimes, you'll get updates from our partners, too. And if you have any questions, we're just a Live Chat away.
              </p>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
