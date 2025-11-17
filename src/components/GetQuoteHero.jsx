import React, { useState } from 'react';
import { motion } from 'framer-motion';

// This component's old header (the blue bar) is removed,
// because GetaQuote.jsx now renders the main QuoteHeader.
export default function GetQuoteHero({
  onFindVehicle,
  onSearchByMakeModel,
  isLoading,
  apiError,
}) {
  const [numberPlate, setNumberPlate] = useState('');
  const [formError, setFormError] = useState('');

  const validateNumberPlate = (plate) => {
    const cleanPlate = plate.replace(/\s/g, '').toUpperCase();
    if (!cleanPlate.trim()) {
      return { valid: false, message: 'Please enter a vehicle number plate' };
    }
    const ukPlateRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{3}$/;
    if (!ukPlateRegex.test(cleanPlate)) {
      return {
        valid: false,
        message:
          'Invalid format. Use format like: AB02XYZ (2 letters, 2 numbers, 3 letters)',
      };
    }
    return { valid: true, message: '' };
  };

  const handleFindClick = () => {
    const validation = validateNumberPlate(numberPlate);
    if (validation.valid) {
      setFormError('');
      onFindVehicle(numberPlate.replace(/\s/g, '').toUpperCase());
    } else {
      setFormError(validation.message);
    }
  };

  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* *** THIS IS THE SUPPORTING FIX ***
        The old <motion.div> header that used to be here is gone.
        This prevents two headers from showing on the first step.
      */}
      <div className="flex flex-col lg:flex-row min-h-full">
        {/* Left Section - Form */}
        <div className="flex-1 bg-white flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Let's add the vehicle you want to insure
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              To get the very best price, please answer the questions as
              accurately as you can.
            </p>

            {/* Number Plate Input Section */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-4">
                Enter vehicle number plate
              </label>

              {/* Input Container */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center bg-gray-200 rounded-lg py-3 px-4 min-w-fit border border-gray-300">
                  <span className="font-bold text-gray-800">GB</span>
                </div>
                <input
                  type="text"
                  placeholder="AB02XYZ"
                  value={numberPlate}
                  onChange={(e) => {
                    setNumberPlate(e.target.value.toUpperCase());
                    setFormError('');
                  }}
                  maxLength="7"
                  className={`flex-1 px-4 py-3 bg-white text-gray-900 placeholder-gray-400 rounded-lg border-2 transition-colors focus:outline-none text-lg font-semibold ${
                    formError
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  disabled={isLoading}
                />
              </div>

              {/* Form Error Message */}
              {formError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm font-semibold flex items-center gap-2">
                    <span className="text-lg">⚠️</span> {formError}
                  </p>
                </div>
              )}

              {/* API Error Message */}
              {apiError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm font-semibold flex items-center gap-2">
                    <span className="text-lg">⚠️</span> {apiError}
                  </p>
                </div>
              )}

              {/* Find Vehicle Button */}
              <button
                onClick={handleFindClick}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Finding...' : 'Find vehicle'}
              </button>
            </div>

            {/* Search Alternative Link */}
            <button
              onClick={onSearchByMakeModel}
              className="text-gray-700 font-semibold underline hover:text-gray-900 transition-colors text-sm disabled:opacity-50"
              disabled={isLoading}
            >
              Search for a vehicle by make and model
            </button>
          </div>
        </div>

        {/* Right Section - Pink Background with Info Card */}
        <div className="flex-1 bg-blue-400 px-4 sm:px-8 py-12 md:py-20 flex flex-col justify-center rounded-lg mt-8 lg:mt-0">
          <div className="max-w-md">
            {/* Info Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Logo/Icon */}
              <div className="mb-6">
                <div className="inline-block bg-gray-900 text-white font-bold px-3 py-2 rounded-lg text-sm">
                  ca
                </div>
              </div>

              {/* Main Text */}
              <p className="text-gray-900 font-semibold text-lg mb-6 leading-relaxed">
                Moved to the UK from somewhere else? We'll count your driving
                experience from the last country you lived in as well, and get
                you an even better price!
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Trustpilot Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-teal-500 text-xl">★★★★★</span>
                  <span className="font-semibold text-gray-900">
                    Trustpilot
                  </span>
                  <span className="text-teal-500">★★★★★</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Rated Excellent based on over 20,000 customer reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}