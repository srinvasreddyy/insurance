import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Reusable custom radio button component
const RadioCard = ({ name, value, label, checked, onChange }) => (
  <label
    className={`relative flex items-center p-4 rounded-lg cursor-pointer transition-all ${
      checked
        ? 'bg-white border-2 border-primary-500 shadow-md'
        : 'bg-background-field border border-border-light hover:bg-white' 
    }`} 
  >
    <input 
      type="radio" 
      name={name} 
      value={value} 
      checked={checked} 
      onChange={onChange} 
      className="absolute opacity-0 w-0 h-0" 
    />
    <span 
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
        checked ? 'border-primary-500' : 'border-border-dark'
      }`}
    >
      {checked && <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />}
    </span>
    <span className="font-semibold text-text-primary">{label}</span>
  </label>
);

// Reusable custom checkbox component
const Checkbox = ({ label, checked, onChange }) => (
  <label className="flex items-center cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="absolute opacity-0 w-0 h-0"
    />
    <span
      className={`w-5 h-5 rounded border-2 flex items-center justify-center mr-3 transition-all ${
        checked
          ? 'bg-primary-500 border-primary-500'
          : 'bg-white border-border-dark'
      }`}
    >
      {checked && <span className="text-white text-sm font-bold">✓</span>}
    </span>
    <span className="text-text-primary">{label}</span>
  </label>
);

const VehicleInfo = ({ vehicleData, onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    buyMonth: '',
    buyYear: '',
    notPurchased: false,
    registeredKeeper: '',
    keeperRelation: '',
    parkingLocation: '',
    mileage: 10000,
    mileageUnit: 'miles',
    householdCars: '',
    otherVehicleAccess: '',
  });

  const [mileageRanges, setMileageRanges] = useState({
    weekMin: 154,
    weekMax: 231,
    dayMin: 22,
    dayMax: 33,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const miles =
      formData.mileageUnit === 'km'
        ? formData.mileage / 1.60934
        : formData.mileage;
    const lowEstimate = 0.8;
    const highEstimate = 1.2;
    const weeklyAvg = miles / 52;
    const dailyAvg = miles / 365;
    setMileageRanges({
      weekMin: Math.floor(weeklyAvg * lowEstimate),
      weekMax: Math.ceil(weeklyAvg * highEstimate),
      dayMin: Math.floor(dailyAvg * lowEstimate),
      dayMax: Math.ceil(dailyAvg * highEstimate),
    });
  }, [formData.mileage, formData.mileageUnit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.notPurchased && (!formData.buyMonth || !formData.buyYear)) {
      newErrors.buyDate = 'Please enter a valid month and year.';
    }
    if (
      formData.buyYear &&
      (formData.buyYear < 1900 || formData.buyYear > 2025)
    ) {
      newErrors.buyDate = 'Please enter a valid year (e.g., 2019).';
    }
    if (
      formData.buyMonth &&
      (formData.buyMonth < 1 || formData.buyMonth > 12)
    ) {
      newErrors.buyDate = 'Please enter a valid month (1-12).';
    }
    if (!formData.registeredKeeper) {
      newErrors.registeredKeeper = 'Please select who the car is registered to.';
    }
    if (
      formData.registeredKeeper === 'someone-else' &&
      !formData.keeperRelation
    ) {
      newErrors.keeperRelation = 'Please select the relation.';
    }
    if (!formData.parkingLocation) {
      newErrors.parkingLocation = 'Please select a parking location.';
    }
    if (!formData.householdCars) {
      newErrors.householdCars = 'Please select the number of cars.';
    }
    if (!formData.otherVehicleAccess) {
      newErrors.otherVehicleAccess =
        'Please select an option for other vehicle access.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const parkingOptions = [
    'In a carport',
    'In an unlocked compound',
    'In an unlocked garage',
    'On the road at home',
    'On the road away from home',
    'On a private driveway',
    'In a work car park',
    'In an open public car park',
    'In an secure public car park',
    'In a locked garage',
    'In a locked compound',
  ];

  const relationOptions = [
    'Spouse / Civil Partner',
    'Common Law Partner',
    'Parent',
    'Sibling',
    'Child',
    'Other family member',
    'Friend / Other',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">
        Let's talk about your {vehicleData.manufacturer} {vehicleData.model}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            When did you buy this vehicle?
          </h2>
          <p className="text-sm text-text-secondary">For example, 3 2007</p>
          <div className="flex gap-4">
            <input
              type="number"
              name="buyMonth"
              placeholder="MONTH"
              value={formData.buyMonth}
              onChange={handleChange}
              disabled={formData.notPurchased}
              className="w-1/2 p-3 rounded-lg border border-border-light focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:bg-gray-100"
            />
            <input
              type="number"
              name="buyYear"
              placeholder="YEAR"
              value={formData.buyYear}
              onChange={handleChange}
              disabled={formData.notPurchased}
              className="w-1/2 p-3 rounded-lg border border-border-light focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:bg-gray-100"
            />
          </div>
          {errors.buyDate && (
            <p className="text-red-600 text-sm">{errors.buyDate}</p>
          )}
          <Checkbox
            label="I haven't purchased the vehicle yet."
            checked={formData.notPurchased}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                notPurchased: e.target.checked,
                buyMonth: '',
                buyYear: '',
              }))
            }
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            Who is this car registered to? Or who will it be registered to?
          </h2>
          <p className="text-sm text-text-secondary">
            You'll find the registered keeper on the vehicle's V5 document.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <RadioCard
              name="registeredKeeper"
              value="me"
              label="Me"
              checked={formData.registeredKeeper === 'me'}
              onChange={handleChange}
            />
            <RadioCard
              name="registeredKeeper"
              value="someone-else"
              label="Someone else"
              checked={formData.registeredKeeper === 'someone-else'}
              onChange={handleChange}
            />
          </div>
          {errors.registeredKeeper && (
            <p className="text-red-600 text-sm">{errors.registeredKeeper}</p>
          )}

          {formData.registeredKeeper === 'someone-else' && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
              className="space-y-2"
            >
              <label className="font-semibold text-text-primary">
                Relation to you
              </label>
              <select
                name="keeperRelation"
                value={formData.keeperRelation}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-border-light focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              >
                <option value="">Select relation...</option>
                {relationOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.keeperRelation && (
                <p className="text-red-600 text-sm">{errors.keeperRelation}</p>
              )}
            </motion.div>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            Where do you usually park your vehicle overnight?
          </h2>
          <p className="text-sm text-text-secondary">
            For example, do you park it on a driveway? On the road outside your
            house? In a car park?
          </p>
          <select
            name="parkingLocation"
            value={formData.parkingLocation}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-border-light bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          >
            <option value="">Select location</option>
            {parkingOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.parkingLocation && (
            <p className="text-red-600 text-sm">{errors.parkingLocation}</p>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            How many miles do you drive in a year?
          </h2>
          <p className="text-sm text-text-secondary">
            This is our estimate based on what you use your car for. But you know
            best! Feel free to adjust.
          </p>

          <div className="bg-background-field p-6 rounded-lg">
            <div className="text-right mb-2">
              <span className="text-sm">up to</span>
              <span className="text-3xl font-bold text-text-primary mx-2">
                {new Intl.NumberFormat().format(formData.mileage)}
              </span>
              <span className="text-sm">{formData.mileageUnit} a year</span>
            </div>
            <input
              type="range"
              name="mileage"
              min="1000"
              max="50000"
              step="500"
              value={formData.mileage}
              onChange={handleChange}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer range-thumb"
            />

            <div className="flex justify-between text-sm text-text-secondary mt-4">
              <p>
                That's roughly <br />
                <strong>
                  {mileageRanges.weekMin} - {mileageRanges.weekMax}
                </strong>{' '}
                {formData.mileageUnit} a week
              </p>
              <p className="text-right">
                <strong>
                  {mileageRanges.dayMin} - {mileageRanges.dayMax}
                </strong>
                <br /> {formData.mileageUnit} a day
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <div className="flex p-1 bg-gray-200 rounded-full">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((p) => ({ ...p, mileageUnit: 'miles' }))
                  }
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    formData.mileageUnit === 'miles'
                      ? 'bg-white shadow'
                      : 'text-text-secondary'
                  }`}
                >
                  Miles
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((p) => ({ ...p, mileageUnit: 'km' }))
                  }
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    formData.mileageUnit === 'km'
                      ? 'bg-white shadow'
                      : 'text-text-secondary'
                  }`}
                >
                  Kilometers
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            How many cars are kept at this household (including this one)?
          </h2>
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <label
                key={num}
                className={`relative flex items-center justify-center p-4 rounded-lg cursor-pointer transition-all ${
                  formData.householdCars === num.toString()
                    ? 'bg-white border-2 border-primary-500 shadow-md'
                    : 'bg-background-field border border-border-light hover:bg-white'
                }`}
              >
                <input
                  type="radio"
                  name="householdCars"
                  value={num.toString()}
                  checked={formData.householdCars === num.toString()}
                  onChange={handleChange}
                  className="absolute opacity-0 w-0 h-0"
                />
                <span className="font-semibold text-text-primary">{num}</span>
              </label>
            ))}
          </div>
          {errors.householdCars && (
            <p className="text-red-600 text-sm">{errors.householdCars}</p>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            Do you have access to any other vehicles?
          </h2>
          <p className="text-sm text-text-secondary">
            If you’re insured to drive any other vehicle, as a main driver or an
            additional driver, choose ‘yes’.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <RadioCard
              name="otherVehicleAccess"
              value="yes"
              label="Yes"
              checked={formData.otherVehicleAccess === 'yes'}
              onChange={handleChange}
            />
            <RadioCard
              name="otherVehicleAccess"
              value="no"
              label="No"
              checked={formData.otherVehicleAccess === 'no'}
              onChange={handleChange}
            />
          </div>
          {errors.otherVehicleAccess && (
            <p className="text-red-600 text-sm">{errors.otherVehicleAccess}</p>
          )}
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-border-light">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-200 hover:bg-gray-300 text-text-primary font-bold py-3 px-8 rounded-full transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-accent-pink hover:bg-accent-pink-hover text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Continue
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default VehicleInfo;