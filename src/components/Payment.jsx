import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Reusable custom radio button component (with description)
const RadioCardDetailed = ({ name, value, label, description, checked, onChange }) => (
  <label
    className={`relative flex items-start p-4 rounded-lg cursor-pointer transition-all ${
      checked
        ? 'bg-white border-2 border-primary-500 shadow-md'
        : 'bg-background-field border border-border-light hover:bg-white'
    }`}
  >
    <span
      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center mr-3 mt-1 ${
        checked ? 'border-primary-500' : 'border-border-dark'
      }`}
    >
      {checked && <span className="w-2.5 h-2.5 rounded-full bg-primary-500" />}
    </span>
    <div>
      <span className="font-semibold text-text-primary">{label}</span>
      {description && <p className="text-sm text-text-secondary">{description}</p>}
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

// Get today's and tomorrow's date
const today = new Date('2025-11-17T12:00:00'); 
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const formatDate = (date) => {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
  });
};

const todayString = `Today, ${formatDate(today)}`;
const tomorrowString = `Tomorrow, ${formatDate(tomorrow)}`;

// Function to get today's date in YYYY-MM-DD format
const getTodayISO = () => {
    const today = new Date('2025-11-17T12:00:00'); // Use hardcoded date
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const Payment = ({ onSubmit, onBack, isLoading }) => {
  const [formData, setFormData] = useState({
    startDate: '',
    paymentMethod: '',
    customDate: '',
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
    if (!formData.startDate) {
      newErrors.startDate = 'Please select a policy start date.';
    }
    if (formData.startDate === 'custom' && !formData.customDate) {
      newErrors.customDate = 'Please choose a date.';
    }
    if (formData.startDate === 'custom' && formData.customDate) {
      const selected = new Date(formData.customDate);
      const today = new Date(getTodayISO());
      if (selected < today) {
        newErrors.customDate = 'Please select a date from today onwards.';
      }
    }
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'Please select a payment method.';
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
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">
        One last thing
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            When do you want the policy to start?
          </h2>
          <div className="space-y-3">
            <RadioCardDetailed
              name="startDate"
              value="today"
              label={todayString}
              checked={formData.startDate === 'today'}
              onChange={handleChange}
            />
            <RadioCardDetailed
              name="startDate"
              value="tomorrow"
              label={tomorrowString}
              checked={formData.startDate === 'tomorrow'}
              onChange={handleChange}
            />
            <RadioCardDetailed
              name="startDate"
              value="custom"
              label="Choose a date"
              checked={formData.startDate === 'custom'}
              onChange={handleChange}
            />
          </div>
          {errors.startDate && (
            <p className="text-red-600 text-sm">{errors.startDate}</p>
          )}

          {formData.startDate === 'custom' && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
            >
              <input
                type="date"
                name="customDate"
                value={formData.customDate}
                min={getTodayISO()}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-border-light bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
              {errors.customDate && (
                <p className="text-red-600 text-sm mt-2">{errors.customDate}</p>
              )}
            </motion.div>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            How would you like to pay for your car insurance?
          </h2>
          <p className="text-sm text-text-secondary">
            You can change this later if you need to.
          </p>
          <div className="space-y-3">
            <RadioCardDetailed
              name="paymentMethod"
              value="annual"
              label="One annual payment"
              checked={formData.paymentMethod === 'annual'}
              onChange={handleChange}
            />
            <RadioCardDetailed
              name="paymentMethod"
              value="monthly"
              label="Monthly payments"
              checked={formData.paymentMethod === 'monthly'}
              onChange={handleChange}
            />
          </div>
          {errors.paymentMethod && (
            <p className="text-red-600 text-sm">{errors.paymentMethod}</p>
          )}
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-border-light">
          <button
            type="button"
            onClick={onBack}
            disabled={isLoading}
            className="bg-gray-200 hover:bg-gray-300 text-text-primary font-bold py-3 px-8 rounded-full transition-colors disabled:opacity-50"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-accent-pink hover:bg-accent-pink-hover text-white font-bold py-3 px-8 rounded-full transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Getting quote...' : 'Get my quote'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Payment;