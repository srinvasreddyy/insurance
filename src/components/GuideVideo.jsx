import React from 'react';
import { motion } from 'framer-motion';

export default function GuideVideo() {
  return (
    <motion.section 
      className="w-full bg-white py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Got a question about claims?
          </h1>
          <p className="text-gray-600 text-lg">
            Our video guide has the answers. <br />
            <span className="text-sm">Download our accident checklist for help on-the-go.</span>
          </p>
        </div>

        {/* Video Container */}
        <div className="mb-8">
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="The ultimate guide to making a claim"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Download Checklist Link */}
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 16v-4m0 0V8m0 4h4m-4 0H8m4 16a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            Download the checklist
          </a>

          {/* Read Article Button */}
          <button className="bg-gray-400 hover:bg-gray-500 text-gray-900 font-semibold py-2 px-8 rounded-full transition-colors">
            Read article
          </button>
        </div>

      </div>
    </motion.section>
  );
}
