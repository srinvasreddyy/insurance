import React from 'react';
import { motion } from 'framer-motion';

export default function HelpCenter() {
  const categories = [
    {
      id: 1,
      title: 'Buying a policy',
      articles: [
        'What is Be Sure Essential?',
        'What fees do you charge?',
        'Do you offer temporary insurance?',
        'How do I refer a friend?',
        'Do I need to be the registered owner of the vehicle to insure it?'
      ]
    },
    {
      id: 2,
      title: 'Make changes to my cover',
      articles: [
        'How do I change my personal details?',
        'How do I add my UK licence?',
        'Can I pause my insurance policy?',
        'How do I add a driver to my policy?',
        'How do I change the vehicle on my policy?'
      ]
    },
    {
      id: 3,
      title: 'My payments',
      articles: [
        'What happens if I miss a monthly instalment (repeat card charge)?',
        'What happens if I miss a PremFina direct debit payment?',
        'Can I change my bank details for my monthly payments?',
        'Who are PremFina?',
        'Can I change the due date for my monthly payments?'
      ]
    },
    {
      id: 4,
      title: 'Claims and accidents',
      articles: [
        'What happens if my car can\'t be repaired?',
        'How long does a claim take?',
        'What is excess?',
        'Will my price increase if I make a claim?',
        'Who repairs my car?'
      ]
    },
    {
      id: 5,
      title: 'My claim-free discount (NCD)',
      articles: []
    },
    {
      id: 6,
      title: 'Document requests',
      articles: []
    },
    {
      id: 7,
      title: 'What I\'m covered for',
      articles: []
    },
    {
      id: 8,
      title: 'My add-ons',
      articles: []
    }
  ];

  return (
    <motion.section 
      className="w-full bg-gradient-to-b from-white to-blue-50 py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout - 4 columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="bg-blue-100 rounded-2xl p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>

              {/* Articles List */}
              <div className="flex-grow space-y-4 mb-6">
                {category.articles.map((article, index) => (
                  <div key={index} className="flex items-start gap-3 group cursor-pointer">
                    <span className="text-gray-700 text-sm leading-relaxed flex-1 group-hover:text-gray-900 transition-colors">
                      {article}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* View all articles Link */}
              <div className="flex items-center justify-between pt-4 border-t border-blue-200">
                <a href="#" className="text-gray-700 font-semibold text-sm hover:text-gray-900 transition-colors underline">
                  View all articles
                </a>
                <button className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full transition-colors flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
