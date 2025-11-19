import React from 'react';
import { motion } from 'framer-motion';

const VehicleDetails = ({ vehicleData, onChangeVehicle, onContinue }) => {
  const formatBool = (v) => (v === true || v === 'true' ? 'Yes' : v === false || v === 'false' ? 'No' : v || '—');

  const EditableRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-4 border-b border-border-light">
      <div>
        <span className="text-sm text-text-secondary">{label}</span>
        <p className="text-text-primary font-medium">{value ?? '—'}</p>
      </div>
      <button className="font-semibold text-primary-600 hover:text-primary-700 text-sm">
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
      <h2 className="text-2xl font-bold text-text-primary mb-4">Found it!</h2>

      <div className="bg-primary-100 border border-blue-200 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          <div>
            <span className="text-sm text-text-secondary">Licence plate:</span>
            <p className="font-bold text-text-primary">{vehicleData.plate || vehicleData.vrm}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Manufacturer:</span>
            <p className="font-bold text-text-primary">
              {vehicleData.manufacturer}
            </p>
          </div>
          <div className="col-span-2">
            <span className="text-sm text-text-secondary">Model:</span>
            <p className="font-bold text-text-primary">{vehicleData.model}</p>
          </div>
          <div className="col-span-2">
            <span className="text-sm text-text-secondary">Trim:</span>
            <p className="font-bold text-text-primary">{vehicleData.trim || vehicleData.subModel || '—'}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Year:</span>
            <p className="font-bold text-text-primary">{vehicleData.year || vehicleData.yearOfManufacture || '—'}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Transmission:</span>
            <p className="font-bold text-text-primary">{vehicleData.transmission || vehicleData.gearbox || 'Unknown'}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Fuel type:</span>
            <p className="font-bold text-text-primary">{vehicleData.fuelType}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Engine size:</span>
            <p className="font-bold text-text-primary">{vehicleData.engineSize || vehicleData.engineCapacity || (vehicleData.engine ? vehicleData.engine : '—')}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Colour:</span>
            <p className="font-bold text-text-primary">{vehicleData.colour || vehicleData.color || '—'}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">CO₂ emissions:</span>
            <p className="font-bold text-text-primary">{vehicleData.co2Emissions ?? vehicleData.co2 ?? '—'}</p>
          </div>
        </div>
      </div>

      <button
        onClick={onChangeVehicle}
        className="flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 mb-8"
      >
        <span className="text-xl">&larr;</span>
        <span>Change vehicle</span>
      </button>

      <h3 className="text-2xl font-bold text-text-primary mb-2">
        Here's the information we found on your vehicle. Does everything look
        right?
      </h3>
      <div className="divide-y divide-border-light">
        <EditableRow label="Vehicle value:" value={vehicleData.value || vehicleData.valuation || '—'} />
        <EditableRow label="Import:" value={formatBool(vehicleData.isImport)} />
        <EditableRow
          label="Right or left hand drive:"
          value={vehicleData.driveSide || vehicleData.drive || 'Right'}
        />
        <EditableRow label="Number of seats:" value={vehicleData.seats || vehicleData.numberOfSeats || '—'} />
      </div>

      <div className="flex justify-between items-center mt-12">
        <button
          onClick={onChangeVehicle}
          className="bg-gray-200 hover:bg-gray-300 text-text-primary font-bold py-3 px-8 rounded-full transition-colors"
        >
          Back
        </button>
        <button
          onClick={onContinue}
          className="bg-accent-pink hover:bg-accent-pink-hover text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
};

export default VehicleDetails;