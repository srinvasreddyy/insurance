import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const VehicleDetails = ({ vehicleData, onChangeVehicle, onContinue, onUpdateVehicle }) => {
  const formatBool = (v) => (v === true || v === 'true' ? 'Yes' : v === false || v === 'false' ? 'No' : v || '—');
  const [local, setLocal] = useState(vehicleData || {});

  useEffect(() => {
    setLocal(vehicleData || {});
  }, [vehicleData]);

  const saveField = (key, val) => {
    setLocal((prev) => {
      const next = { ...prev, [key]: val };
      // notify parent if it wants the updated vehicle data
      if (typeof onUpdateVehicle === 'function') {
        try {
          onUpdateVehicle(next);
        } catch (e) {
          // ignore parent errors
        }
      }
      return next;
    });
  };

  const EditableField = ({ label, fieldKey, value, className }) => {
    const [editing, setEditing] = useState(false);
    const [editValue, setEditValue] = useState(value ?? '');

    useEffect(() => {
      setEditValue(value ?? '');
    }, [value]);

    const onSave = () => {
      saveField(fieldKey, editValue);
      setEditing(false);
    };

    const onCancel = () => {
      setEditValue(value ?? '');
      setEditing(false);
    };

    return (
      <div className={`flex justify-between items-center py-4 border-b border-border-light ${className || ''}`}>
        <div>
          <span className="text-sm text-text-secondary">{label}</span>
          {!editing ? (
            <p className="text-text-primary font-medium">{value ?? '—'}</p>
          ) : (
            <input
              className="mt-1 p-2 border rounded w-full max-w-xs"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          )}
        </div>
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="font-semibold text-primary-600 hover:text-primary-700 text-sm"
          >
            Edit
          </button>
        ) : (
          <div className="flex gap-2">
            <button onClick={onSave} className="text-sm font-semibold text-primary-600">Save</button>
            <button onClick={onCancel} className="text-sm text-text-secondary">Cancel</button>
          </div>
        )}
      </div>
    );
  };

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
            <p className="font-bold text-text-primary">{local.plate || local.vrm}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Manufacturer:</span>
            <p className="font-bold text-text-primary">{local.manufacturer}</p>
          </div>
          <div className="col-span-2">
            <span className="text-sm text-text-secondary">Model:</span>
            <p className="font-bold text-text-primary">{local.model}</p>
          </div>
          <div className="col-span-2">
            <span className="text-sm text-text-secondary">Trim:</span>
            <p className="font-bold text-text-primary">{local.trim || local.subModel || '—'}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Year:</span>
            <p className="font-bold text-text-primary">{local.year || local.yearOfManufacture || '—'}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Transmission:</span>
            <p className="font-bold text-text-primary">{local.transmission || local.gearbox || 'Unknown'}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Fuel type:</span>
            <p className="font-bold text-text-primary">{local.fuelType}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Engine size:</span>
            <p className="font-bold text-text-primary">{local.engineSize || local.engineCapacity || (local.engine ? local.engine : '—')}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">Colour:</span>
            <p className="font-bold text-text-primary">{local.colour || local.color || '—'}</p>
          </div>
          <div>
            <span className="text-sm text-text-secondary">CO₂ emissions:</span>
            <p className="font-bold text-text-primary">{local.co2Emissions ?? local.co2 ?? '—'}</p>
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
        <EditableField label="Vehicle value:" fieldKey="value" value={local.value || local.valuation || '—'} />
        <EditableField label="Import:" fieldKey="isImport" value={formatBool(local.isImport)} />
        <EditableField
          label="Right or left hand drive:"
          fieldKey="driveSide"
          value={local.driveSide || local.drive || 'Right'}
        />
        <EditableField label="Number of seats:" fieldKey="seats" value={local.seats || local.numberOfSeats || '—'} />
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