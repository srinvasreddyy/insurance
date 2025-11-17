import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

export default function VehicleSearchByMakeModel() {
  const [selectedMake, setSelectedMake] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const vehicleMakes = [
    'Audi', 'BMW', 'Chevrolet', 'Citroen', 'Dacia', 'Daewoo', 'Daihatsu',
    'Dodge', 'Fiat', 'Ford', 'Hyundai', 'Jeep', 'Kia', 'Lada', 'Lamborghini',
    'Lancia', 'Land Rover', 'Lexus', 'Lotus', 'MG', 'Maserati', 'Mazda',
    'Mercedes', 'MG', 'Mini', 'Mitsubishi', 'Morgan', 'Nissan', 'Opel',
    'Peugeot', 'Porsche', 'Renault', 'Rover', 'Saab', 'Seat', 'Skoda',
    'Smart', 'Ssangyong', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen',
    'Volvo', 'Zenos'
  ];

  const handleLogoClick = () => {
    navigate({ to: '/' });
  };

  const handleSelectMake = (make) => {
    setSelectedMake(make);
    setError('');
  };

  const handleNext = () => {
    if (!selectedMake) {
      setError('Please select a vehicle make');
    } else {
      console.log('Selected make:', selectedMake);
      // Navigate to next step or show confirmation
    }
  };

  return (
    <motion.section
      className="w-full bg-gradient-to-b from-slate-100 to-white min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="bg-white py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto flex items-center gap-4">
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
            <span className="text-teal-500 text-sm">★★★★★</span>
            <span className="text-xs sm:text-sm text-gray-600">Rated Excellent on Trustpilot</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-b from-blue-50 to-white px-4 sm:px-8 py-12 md:py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-2xl mx-auto w-full">
          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            What's the make of the vehicle?
          </motion.h1>

          {/* Dropdown */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <select
              value={selectedMake}
              onChange={(e) => handleSelectMake(e.target.value)}
              className={`w-full px-6 py-4 text-lg rounded-lg border-2 appearance-none cursor-pointer transition-colors focus:outline-none ${
                error
                  ? 'border-red-500 focus:border-red-500 bg-red-50'
                  : 'border-gray-300 focus:border-blue-500 bg-white'
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23666' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                paddingRight: '2.5rem',
              }}
            >
              <option value="">Select an option</option>
              {vehicleMakes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-red-700 text-sm font-semibold flex items-center gap-2">
                <span className="text-lg">⚠️</span> {error}
              </p>
            </motion.div>
          )}

          {/* Progress Bar */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-teal-500 to-pink-400"
                initial={{ width: 0 }}
                animate={{ width: '15%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Next Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold py-3 px-12 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Next
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
