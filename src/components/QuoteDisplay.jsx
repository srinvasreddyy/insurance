import React from 'react';
import { motion } from 'framer-motion';

const QuoteDisplay = ({ price, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        Your Quote is Ready!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        We've calculated your personalized quote based on your details.
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-marshmallow-green mb-8">
        <p className="text-lg text-gray-600 mb-2">Your annual price</p>
        <p className="text-6xl font-bold text-gray-900 mb-4">£{price}</p>
        <p className="text-sm text-gray-500">
          This price is valid for the next 24 hours.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Accept and Pay
        </button>
      </div>
    </motion.div>
  );
};

export default QuoteDisplay;