import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Reusable custom radio button component (with description)
const RadioCardDetailed = ({ name, value, label, description, checked, onChange }) => (
  <label
    className={`relative flex items-start p-4 rounded-lg cursor-pointer transition-all ${
      checked
        ? 'bg-white border-2 border-marshmallow-green shadow-md'
        : 'bg-marshmallow-field border border-gray-200 hover:bg-white'
    }`}
  >
    <span
      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center mr-3 mt-1 ${
        checked ? 'border-marshmallow-green' : 'border-gray-400'
      }`}
    >
      {checked && <span className="w-2.5 h-2.5 rounded-full bg-marshmallow-green" />}
    </span>
    <div>
      <span className="font-semibold text-gray-900">{label}</span>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="absolute opacity-0 w-0 h-0"
    />
  </label>
);

// Standard Radio Card
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

const UsageInfo = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    carUsage: '',
    policyCancelled: '',
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
    if (!formData.carUsage) {
      newErrors.carUsage = 'Please select what you use your car for.';
    }
    if (!formData.policyCancelled) {
      newErrors.policyCancelled = 'Please select an option for cancelled policies.';
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
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        Tell us what you use your car for.
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This decides what kind of journeys we cover you for. Not sure?{' '}
        <a href="#" className="text-blue-600 underline">
          You can read more information here.
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* --- 1. Car Usage --- */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">
            What do you use your car for?
          </h2>
          <div className="space-y-3">
            <RadioCardDetailed
              name="carUsage"
              value="sdp"
              label="Social journeys only (SDP)"
              description="For example, shopping, travel and driving to see friends. Does not include travelling to and from work."
              checked={formData.carUsage === 'sdp'}
              onChange={handleChange}
            />
            <RadioCardDetailed
              name="carUsage"
              value="sdpc"
              label="Driving to and from work (SDPC)"
              description="Social journeys, plus driving to and from one work location. For example, an office, shop or factory."
              checked={formData.carUsage === 'sdpc'}
              onChange={handleChange}
            />
            <RadioCardDetailed
              name="carUsage"
              value="bc1"
              label="Driving during working hours (BC1)"
              description="Business Class 1 also lets you travel between multiple work locations. For example, if you're a real estate agent driving between houses."
              checked={formData.carUsage === 'bc1'}
              onChange={handleChange}
            />
          </div>
          {errors.carUsage && (
            <p className="text-red-600 text-sm">{errors.carUsage}</p>
          )}
        </div>

        {/* --- 2. Policy Cancelled --- */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">
            Have you, or any other driver on this policy, had an insurance
            policy cancelled or voided in the past?
          </h2>
          <p className="text-sm text-gray-600">
            If you've had a policy cancelled or deemed invalid by an insurer,
            choose 'yes'.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <RadioCard
              name="policyCancelled"
              value="yes"
              label="Yes"
              checked={formData.policyCancelled === 'yes'}
              onChange={handleChange}
            />
            <RadioCard
              name="policyCancelled"
              value="no"
              label="No"
              checked={formData.policyCancelled === 'no'}
              onChange={handleChange}
            />
          </div>
          {errors.policyCancelled && (
            <p className="text-red-600 text-sm">{errors.policyCancelled}</p>
          )}
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

export default UsageInfo;