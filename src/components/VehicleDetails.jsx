import React from 'react';
import { motion } from 'framer-motion';

// This component displays the data from the image
const VehicleDetails = ({ vehicleData, onChangeVehicle, onContinue }) => {
  // Helper component for editable rows
  const EditableRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-4 border-b border-gray-200">
      <div>
        <span className="text-sm text-gray-600">{label}</span>
        <p className="text-gray-900 font-medium">{value}</p>
      </div>
      <button className="font-semibold text-blue-600 hover:text-blue-800 text-sm">
        Edit
      </button>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* "Found it!" message */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Found it!</h2>

      {/* Blue vehicle info box */}
      <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          <div>
            <span className="text-sm text-gray-700">Licence plate:</span>
            <p className="font-bold text-gray-900">{vehicleData.plate}</p>
          </div>
          <div>
            <span className="text-sm text-gray-700">Manufacturer:</span>
            <p className="font-bold text-gray-900">
              {vehicleData.manufacturer}
            </p>
          </div>
          <div className="col-span-2">
            <span className="text-sm text-gray-700">Model:</span>
            <p className="font-bold text-gray-900">{vehicleData.model}</p>
          </div>
          <div className="col-span-2">
            <span className="text-sm text-gray-700">Trim:</span>
            <p className="font-bold text-gray-900">{vehicleData.trim}</p>
          </div>
          <div>
            <span className="text-sm text-gray-700">Year:</span>
            <p className="font-bold text-gray-900">{vehicleData.year}</p>
          </div>
          <div>
            <span className="text-sm text-gray-700">Transmission:</span>
            <p className="font-bold text-gray-900">
              {vehicleData.transmission}
            </p>
          </div>
          <div>
            <span className="text-sm text-gray-700">Fuel type:</span>
            <p className="font-bold text-gray-900">{vehicleData.fuelType}</p>
          </div>
          <div>
            <span className="text-sm text-gray-700">Engine size:</span>
            <p className="font-bold text-gray-900">{vehicleData.engineSize}</p>
          </div>
        </div>
      </div>

      {/* Change vehicle link */}
      <button
        onClick={onChangeVehicle}
        className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 mb-8"
      >
        <span className="text-xl">&larr;</span>
        <span>Change vehicle</span>
      </button>

      {/* Editable information section */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Here's the information we found on your vehicle. Does everything look
        right?
      </h3>
      <div className="divide-y divide-gray-200">
        <EditableRow label="Vehicle value:" value={vehicleData.value} />
        <EditableRow label="Import:" value={vehicleData.isImport} />
        <EditableRow
          label="Right or left hand drive:"
          value={vehicleData.driveSide}
        />
        <EditableRow label="Number of seats:" value={vehicleData.seats} />
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-12">
        <button
          onClick={onChangeVehicle}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors"
        >
          Back
        </button>
        {/* THIS BUTTON triggers the prop */}
        <button
          onClick={onContinue}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
};

export default VehicleDetails;