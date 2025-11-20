import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GetQuoteHero({
  onFindVehicle,
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
      <div className="flex flex-col lg:flex-row min-h-full">
        {/* Left Section - Form */}
        <div className="flex-1 bg-white flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">
              Let's add the vehicle you want to insure
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              To get the very best price, please answer the questions as
              accurately as you can.
            </p>

            <div className="mb-8">
              <label className="block text-text-primary font-semibold mb-4">
                Enter vehicle number plate
              </label>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center bg-gray-200 rounded-lg py-3 px-4 min-w-fit border border-border-light">
                  <span className="font-bold text-text-primary">GB</span>
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
                  className={`flex-1 px-4 py-3 bg-white text-text-primary placeholder-gray-400 rounded-lg border-2 transition-colors focus:outline-none text-lg font-semibold ${
                    formError
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-border-dark focus:border-primary-500'
                  }`}
                  disabled={isLoading}
                />
              </div>

              {formError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm font-semibold flex items-center gap-2">
                    <span className="text-lg">⚠️</span> {formError}
                  </p>
                </div>
              )}

              {apiError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm font-semibold flex items-center gap-2">
                    <span className="text-lg">⚠️</span> {apiError}
                  </p>
                </div>
              )}

              <button
                onClick={handleFindClick}
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Finding...' : 'Find vehicle'}
              </button>
            </div>

            {/* make/model search removed per UX decision */}
          </div>
        </div>

        {/* Right Section - Blue Background with Info Card */}
        <div className="flex-1 bg-primary-600 px-4 sm:px-8 py-12 md:py-20 flex flex-col justify-center rounded-lg mt-8 lg:mt-0">
          <div className="max-w-md">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="inline-block bg-text-primary text-white font-bold px-3 py-2 rounded-lg text-sm">
                  ca
                </div>
              </div>

              <p className="text-text-primary font-semibold text-lg mb-6 leading-relaxed">
                Moved to the UK from somewhere else? We'll count your driving
                experience from the last country you lived in as well, and get
                you an even better price!
              </p>

              <div className="border-t border-border-light my-6"></div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-brand-green text-xl">★★★★★</span>
                  <span className="font-semibold text-text-primary">
                    Trustpilot
                  </span>
                  <span className="text-brand-green">★★★★★</span>
                </div>
                <p className="text-text-secondary text-sm">
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