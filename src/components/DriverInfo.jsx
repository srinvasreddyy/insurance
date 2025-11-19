import React, { useState } from 'react';
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

const DriverInfo = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    postcode: '',
    propertyOwner: '',
    isStudent: '',
    medicalCondition: '',
    employmentStatus: '',
    referralSource: '',
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
    if (!formData.dobDay || !formData.dobMonth || !formData.dobYear) {
      newErrors.dob = 'Please enter a valid date of birth.';
    }
    if (formData.postcode.length < 5) {
      newErrors.postcode = 'Please enter a valid UK postcode.';
    }
    if (!formData.propertyOwner) {
      newErrors.propertyOwner = 'Please select an option for property ownership.';
    }
    if (!formData.isStudent) {
      newErrors.isStudent = 'Please select an option for student status.';
    }
    if (!formData.medicalCondition) {
      newErrors.medicalCondition = 'Please select an option for medical conditions.';
    }
    if (!formData.employmentStatus) {
      newErrors.employmentStatus = 'Please select your employment status.';
    }
    if (!formData.referralSource) {
      newErrors.referralSource = 'Please let us know where you heard about us.';
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

  const employmentOptions = [
    'Employed',
    'Self-Employed',
    'Unemployed',
    'Student',
    'Retired',
    'Homemaker',
  ];

  const referralOptions = [
    'Google',
    'Facebook',
    'Instagram',
    'TikTok',
    'Trustpilot',
    'A friend or family member',
    'Other',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">
        Let's talk about you
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            What's your date of birth?
          </h2>
          <p className="text-sm text-text-secondary">For example, 27 3 2007</p>
          <div className="flex gap-4">
            <input
              type="number"
              name="dobDay"
              placeholder="DAY"
              value={formData.dobDay}
              onChange={handleChange}
              className="w-1/3 p-3 rounded-lg border border-border-light focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            />
            <input
              type="number"
              name="dobMonth"
              placeholder="MONTH"
              value={formData.dobMonth}
              onChange={handleChange}
              className="w-1/3 p-3 rounded-lg border border-border-light focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            />
            <input
              type="number"
              name="dobYear"
              placeholder="YEAR"
              value={formData.dobYear}
              onChange={handleChange}
              className="w-1/3 p-3 rounded-lg border border-border-light focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            />
          </div>
          {errors.dob && <p className="text-red-600 text-sm">{errors.dob}</p>}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            Where do you live?
          </h2>
          <p className="text-sm text-text-secondary">
            Search using your postcode. This is the last line of your UK address.
            It includes letters and numbers.
          </p>
          <input
            type="text"
            name="postcode"
            placeholder="Enter postcode"
            value={formData.postcode}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-border-light focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          />
          {errors.postcode && (
            <p className="text-red-600 text-sm">{errors.postcode}</p>
          )}
          <p className="text-xs text-gray-500">
            We may ask you for proof of address after you pay. You can provide this
            using one of{' '}
            <a href="#" className="text-primary-600 underline">
              these documents
            </a>.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            Do you own this property, or any other property in the UK?
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <RadioCard
              name="propertyOwner"
              value="yes"
              label="Yes"
              checked={formData.propertyOwner === 'yes'}
              onChange={handleChange}
            />
            <RadioCard
              name="propertyOwner"
              value="no"
              label="No"
              checked={formData.propertyOwner === 'no'}
              onChange={handleChange}
            />
          </div>
          {errors.propertyOwner && (
            <p className="text-red-600 text-sm">{errors.propertyOwner}</p>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            Are you a student?
          </h2>
          <p className="text-sm text-text-secondary">
            If you are currently enrolled at a college, university or similar
            institution, choose 'yes'.
          </p> 
          <div className="grid grid-cols-2 gap-4">
            <RadioCard
              name="isStudent"
              value="yes"
              label="Yes"
              checked={formData.isStudent === 'yes'}
              onChange={handleChange}
            />
            <RadioCard
              name="isStudent"
              value="no"
              label="No"
              checked={formData.isStudent === 'no'}
              onChange={handleChange}
            />
          </div>
          {errors.isStudent && (
            <p className="text-red-600 text-sm">{errors.isStudent}</p>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            Do you have a medical condition that requires you to notify the DVLA?
          </h2>
          <p className="text-sm text-text-secondary">
            If you have a medical condition that could affect your ability to
            drive safely, you must tell the DVLA. You can find a list of these
            medical conditions{' '}
            <a href="#" className="text-primary-600 underline">
              here
            </a>.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <RadioCard
              name="medicalCondition"
              value="yes"
              label="Yes"
              checked={formData.medicalCondition === 'yes'}
              onChange={handleChange}
            />
            <RadioCard
              name="medicalCondition"
              value="no"
              label="No"
              checked={formData.medicalCondition === 'no'}
              onChange={handleChange}
            />
          </div>
          {errors.medicalCondition && (
            <p className="text-red-600 text-sm">{errors.medicalCondition}</p>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            Are you employed?
          </h2>
          <select
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-border-light bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          >
            <option value="">Select an option...</option>
            {employmentOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.employmentStatus && (
            <p className="text-red-600 text-sm">{errors.employmentStatus}</p>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            Where did you hear about us?
          </h2>
          <select
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-border-light bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          >
            <option value="">Select an option...</option>
            {referralOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.referralSource && (
            <p className="text-red-600 text-sm">{errors.referralSource}</p>
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

export default DriverInfo;