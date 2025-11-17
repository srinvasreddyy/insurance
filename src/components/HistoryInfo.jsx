import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Reusable custom radio button component
const RadioCard = ({ name, value, label, checked, onChange }) => (
  <label
    className={`relative flex items-center p-4 rounded-lg cursor-pointer transition-all ${
      checked
        ? 'bg-white border-2 border-marshmallow-green shadow-md'
        : 'bg-marshmallow-field border border-gray-200 hover:bg-white'
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
        checked ? 'border-marshmallow-green' : 'border-gray-400'
      }`}
    >
      {checked && <span className="w-2.5 h-2.5 rounded-full bg-marshmallow-green" />}
    </span>
    <span className="font-semibold text-gray-900">{label}</span>
  </label>
);

const HistoryInfo = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    claimsLast5Years: '', // <-- New field
    convictionsLast5Years: '', // <-- New field
    previousInsurance: '',
    criminalConvictions: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.claimsLast5Years) { // <-- New validation
      newErrors.claimsLast5Years = 'Please select an option for claims.';
    }
    if (!formData.convictionsLast5Years) { // <-- New validation
      newErrors.convictionsLast5Years = 'Please select an option for motoring convictions.';
    }
    if (!formData.previousInsurance) {
      newErrors.previousInsurance = 'Please select an option for previous insurance.';
    }
    if (!formData.criminalConvictions) {
      newErrors.criminalConvictions = 'Please select an option for convictions.';
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
        Your driving history
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* --- 1. Claims Last 5 Years (NEW) --- */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">
            Have you, or any other driver on this policy, made a claim in the
            last 5 years?
          </h2>
          <p className="text-sm text-gray-600">
            That includes all fault and non-fault claims, settled or
            outstanding.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <RadioCard
              name="claimsLast5Years"
              value="yes"
              label="Yes"
              checked={formData.claimsLast5Years === 'yes'}
              onChange={handleChange}
            />
            <RadioCard
              name="claimsLast5Years"
              value="no"
              label="No"
              checked={formData.claimsLast5Years === 'no'}
              onChange={handleChange}
            />
          </div>
          {errors.claimsLast5Years && (
            <p className="text-red-600 text-sm">{errors.claimsLast5Years}</p>
          )}
        </div>

        {/* --- 2. Motoring Convictions Last 5 Years (NEW) --- */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">
            Have you, or any other driver on the policy, had any motoring
            convictions or fixed penalty notices in the last 5 years?
          </h2>
          <p className="text-sm text-gray-600">
            Convictions don’t always mean higher prices. But if you have any and
            don’t tell us, your policy will be cancelled.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <RadioCard
              name="convictionsLast5Years"
              value="yes"
              label="Yes"
              checked={formData.convictionsLast5Years === 'yes'}
              onChange={handleChange}
            />
            <RadioCard
              name="convictionsLast5Years"
              value="no"
              label="No"
              checked={formData.convictionsLast5Years === 'no'}
              onChange={handleChange}
            />
          </div>
          {errors.convictionsLast5Years && (
            <p className="text-red-600 text-sm">
              {errors.convictionsLast5Years}
            </p>
          )}
        </div>
        
        {/* --- 3. Previous Insurance --- */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">
            Did you have car insurance in India?
          </h2>
          <p className="text-sm text-gray-600">
            We understand insurance isn’t mandatory everywhere, but we offer
            discounts based on your full driving experience, no matter where
            you’ve driven.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <RadioCard
              name="previousInsurance"
              value="yes"
              label="Yes"
              checked={formData.previousInsurance === 'yes'}
              onChange={handleChange}
            />
            <RadioCard
              name="previousInsurance"
              value="no"
              label="No"
              checked={formData.previousInsurance === 'no'}
              onChange={handleChange}
            />
          </div>
          {errors.previousInsurance && (
            <p className="text-red-600 text-sm">{errors.previousInsurance}</p>
          )}
        </div>

        {/* --- 4. Criminal Convictions --- */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">
            Have you got any unspent criminal convictions that are not motor
            related?
          </h2>
          <p className="text-sm text-gray-600">
            If you have a criminal conviction that you're still in the
            rehabilitation process for, choose 'yes'.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <RadioCard
              name="criminalConvictions"
              value="yes"
              label="Yes"
              checked={formData.criminalConvictions === 'yes'}
              onChange={handleChange}
            />
            <RadioCard
              name="criminalConvictions"
              value="no"
              label="No"
              checked={formData.criminalConvictions === 'no'}
              onChange={handleChange}
            />
          </div>
          {errors.criminalConvictions && (
            <p className="text-red-600 text-sm">{errors.criminalConvictions}</p>
          )}
        </div>

        {/* --- Disclaimer --- */}
        <div className="p-4 bg-marshmallow-field rounded-lg border border-gray-200">
          <h3 className="font-bold text-red-900 mb-2">Remember!</h3>
          <p className="text-sm text-gray-600">
            Claims and convictions don’t always mean higher prices. But if you
            have any and don’t tell us, we’ll have to cancel your policy.
          </p>
        </div>

        {/* --- Navigation Buttons --- */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Continue
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default HistoryInfo;