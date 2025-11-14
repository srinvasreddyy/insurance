import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { motion } from 'framer-motion';

export default function GetQuoteHero() {
  const [numberPlate, setNumberPlate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // UK number plate validation
  // Format: 2 letters + 02-52 + 3 letters (e.g., AB02 XYZ)
  const validateNumberPlate = (plate) => {
    const cleanPlate = plate.replace(/\s/g, '').toUpperCase();
    
    // Check if empty
    if (!cleanPlate.trim()) {
      return { valid: false, message: 'Please enter a vehicle number plate' };
    }

    // UK number plate regex - matches modern format (2 letters + 2 digits + 3 letters)
    const ukPlateRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{3}$/;
    
    if (!ukPlateRegex.test(cleanPlate)) {
      return { 
        valid: false, 
        message: 'Invalid number plate format. Use format like: AB02XYZ (2 letters + 2 numbers + 3 letters)' 
      };
    }

    return { valid: true, message: '' };
  };

  const handleFindVehicle = () => {
    const validation = validateNumberPlate(numberPlate);
    
    if (validation.valid) {
      setError('');
      console.log('Searching for vehicle:', numberPlate.replace(/\s/g, '').toUpperCase());
      // Here you would typically make an API call or navigate to the next step
    } else {
      setError(validation.message);
    }
  };

  const handleLogoClick = () => {
    navigate({ to: '/' });
  };

  return (
    <motion.section 
      className="w-full bg-gradient-to-b from-slate-100 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div 
        className="bg-blue-50 py-6 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232563eb'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E" 
              alt="Be Sure" 
              className="w-6 h-6"
            />
            <span className="font-bold text-gray-900">be sure</span>
          </button>
          <div className="flex items-center gap-1">
            <span className="text-teal-500">★★★★★</span>
            <span className="text-sm text-gray-600">Rated Excellent on Trustpilot</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen lg:min-h-96">
        
        {/* Left Section - Form */}
        <div className="flex-1 bg-white px-4 sm:px-8 py-12 md:py-20 flex flex-col justify-center">
          <div className="max-w-2xl">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 leading-tight">
              Let's add the vehicle you want to insure
            </h1>

            {/* Number Plate Input Section */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-4">
                Enter vehicle number plate
              </label>
              
              {/* Input Container */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center bg-blue-200 rounded-lg py-2 px-3 min-w-fit">
                  <span className="font-bold text-gray-800">GB</span>
                </div>
                <input
                  type="text"
                  placeholder="AB02XYZ"
                  value={numberPlate}
                  onChange={(e) => {
                    setNumberPlate(e.target.value.toUpperCase());
                    setError(''); // Clear error on input change
                  }}
                  maxLength="7"
                  className={`flex-1 px-4 py-3 bg-gray-100 text-gray-600 placeholder-gray-400 rounded-lg border-2 transition-colors focus:outline-none text-lg font-semibold ${
                    error ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-blue-300'
                  }`}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm font-semibold flex items-center gap-2">
                    <span className="text-lg">⚠️</span> {error}
                  </p>
                </div>
              )}

              {/* Find Vehicle Button */}
              <button
                onClick={handleFindVehicle}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
              >
                Find vehicle
              </button>
            </div>

            {/* Search Alternative Link */}
            <a
              href="#"
              className="text-gray-700 font-semibold underline hover:text-gray-900 transition-colors text-sm"
            >
              Search for a vehicle by make and model
            </a>
          </div>
        </div>

        {/* Right Section - Pink Background with Info Card */}
        <div className="flex-1 bg-blue-400 px-4 sm:px-8 py-12 md:py-20 flex flex-col justify-center">
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
                Moved to the UK from somewhere else? We'll count your driving experience from the last country you lived in as well, and get you an even better price!
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Trustpilot Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-teal-500 text-xl">★★★★★</span>
                  <span className="font-semibold text-gray-900">Trustpilot</span>
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
