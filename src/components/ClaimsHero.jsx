import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ClaimsHero() {
  const [activeTab, setActiveTab] = useState('accident');

  const accidentOptions = [
    'I\'ve been in an accident',
    'My windows are damaged',
    'My car has broken down'
  ];

  const callServices = [
    { label: 'Accident damage', checked: true },
    { label: 'Vandalism damage', checked: true },
    { label: 'Bumps and scrapes', checked: true },
    { label: 'Questions about existing claims (we answer those on Live Chat)', checked: false },
    { label: 'Theft', checked: true },
    { label: 'Fire damage', checked: true },
    { label: 'Injuries', checked: true }
  ];

  return (
    <motion.section 
      className="w-full bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Section - White Background */}
      <div className="bg-white pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Left Content */}
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-4 uppercase">Had an accident?</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Your fault or not,<br />call us today.
              </h1>
            </div>

            {/* Right Content - Call Info */}
            <div className="flex flex-col justify-start">
              <div className="bg-white">
                <h2 className="text-4xl font-bold text-pink-500 mb-4">0800 060 8622</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>You can call us 24/7. It's quick and easy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Dedicated accident and claims support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>£66 million+ paid out in accident support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pink Wave Section */}
      <div className="bg-pink-400 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Help Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              How can we help?
            </h2>
            <p className="text-gray-700">Tell us what happened. We'll point you in the right direction.</p>
          </div>

          {/* Dark Card with Options and Info */}
          <div className="bg-gray-800 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left - Accident Options */}
              <div>
                <h3 className="text-white text-xl font-bold mb-4">I've been in an accident</h3>
                <div className="space-y-3">
                  {accidentOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(option)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeTab === option
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right - Call Info */}
              <div>
                <h3 className="text-white text-xl font-bold mb-4">📞 Call us for:</h3>
                <ul className="space-y-2">
                  {callServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      {service.checked ? (
                        <svg className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="text-sm">{service.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <a href="tel:0800060862" className="text-pink-400 text-2xl font-bold hover:text-pink-300 transition-colors">
                    0800 060 8622
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Want to chat about an existing claim?</h3>
            <p className="text-gray-800">
              Our accident helpline is for new claims only. If you have any questions about an existing claim, please get in touch with us on Live Chat. You'll find it on the app.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
