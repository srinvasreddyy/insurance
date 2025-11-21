import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

// --- Year and Month Data ---
const currentYear = new Date().getFullYear();
const yearOptions = Array.from(
  { length: currentYear - 1945 + 1 },
  (_, i) => currentYear - i
);
const monthOptions = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const LicenseInfo = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    licenceType: '',
    ukLicenceMonth: '',
    ukLicenceYear: '',
    licenceNumber: '',
    hasOtherCountryLicence: '',
    otherCountry: '',
    otherLicenceMonth: '',
    otherLicenceYear: '',
    otherLicenceNumber: '',
  });

  const [errors, setErrors] = useState({});

  // Scroll to top when this step mounts so the user always starts at the top
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      if (typeof window !== 'undefined') window.scrollTo(0, 0);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // --- Conditional Logic ---
  const isUkLicence = ['full-uk', 'full-uk-auto', 'provisional-uk'].includes(
    formData.licenceType
  );
  const isNonUkLicence = ['eu', 'non-eu', 'other'].includes(
    formData.licenceType
  );
  const showOtherCountryFields =
    (isUkLicence && formData.hasOtherCountryLicence === 'yes') || isNonUkLicence;

  const validate = () => {
    const newErrors = {};
    if (!formData.licenceType) {
      newErrors.licenceType = 'Please select a licence type.';
    }

    if (isUkLicence) {
      if (!formData.ukLicenceMonth || !formData.ukLicenceYear) {
        newErrors.ukLicenceDate = 'Please select a month and year.';
      }
      if (!formData.licenceNumber) {
        newErrors.licenceNumber = 'Please enter your driving licence number.';
      }
      if (!formData.hasOtherCountryLicence) {
        newErrors.hasOtherCountryLicence = 'Please select an option.';
      }
    }

    if (showOtherCountryFields) {
      if (!formData.otherCountry) {
        newErrors.otherCountry = 'Please enter the country.';
      }
      if (!formData.otherLicenceNumber) {
        newErrors.otherLicenceNumber = 'Please enter your driving licence number from that country.';
      }
      if (!formData.otherLicenceMonth || !formData.otherLicenceYear) {
        newErrors.otherLicenceDate = 'Please select a month and year.';
      }
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

  const licenceTypeOptions = [
    { value: 'full-uk', label: 'Full UK licence' },
    { value: 'full-uk-auto', label: 'Full UK licence (automatic)' },
    { value: 'provisional-uk', label: 'Provisional UK licence' },
    { value: 'eu', label: 'Full European licence (EU)' },
    { value: 'non-eu', label: 'Full European licence (non-EU)' },
    { value: 'other', label: 'Full licence from another country' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
        A little bit about your driver’s licence
      </h1>
      <p className="text-lg text-text-secondary mb-8">
        Don’t have a full UK licence yet? Don’t worry. We can cover full licences
        from any country, as well as provisional UK licences.
      </p>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* --- 1. Licence Type --- */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            What type of licence do you have?
          </h2>
          <p className="text-sm text-text-secondary">
            If you have a UK licence (full or provisional), use that to get our
            best price. We’ll still ask about your driving experience in other
            countries to give you even bigger savings.
          </p>
          <select
            name="licenceType"
            value={formData.licenceType}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-border-light bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          >
            <option value="">Select licence type</option>
            {licenceTypeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.licenceType && (
            <p className="text-red-600 text-sm">{errors.licenceType}</p>
          )}
        </div>

        {/* --- 2. UK Licence Fields (Conditional) --- */}
        <AnimatePresence>
          {isUkLicence && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-10 overflow-hidden"
            >
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-text-primary">
                  When did you get your {licenceTypeOptions.find(o => o.value === formData.licenceType)?.label.toLowerCase()}?
                </h2>
                <p className="text-sm text-text-secondary">
                  Make sure the date matches what is on your licence.
                </p>
                <div className="flex gap-4">
                  <select
                    name="ukLicenceMonth"
                    value={formData.ukLicenceMonth}
                    onChange={handleChange}
                    className="w-1/2 p-3 rounded-lg border border-border-light bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">Select month</option>
                    {monthOptions.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="ukLicenceYear"
                    value={formData.ukLicenceYear}
                    onChange={handleChange}
                    className="w-1/2 p-3 rounded-lg border border-border-light bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">Select year</option>
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.ukLicenceDate && (
                  <p className="text-red-600 text-sm">{errors.ukLicenceDate}</p>
                )}
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-text-primary">
                  Driving licence number
                </h2>
                <p className="text-sm text-text-secondary">
                  This is the 16 character number above your signature.
                </p>
                <input
                  type="text"
                  name="licenceNumber"
                  placeholder="Enter your driving licence number"
                  value={formData.licenceNumber}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-border-light focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
                {errors.licenceNumber && (
                  <p className="text-red-600 text-sm">{errors.licenceNumber}</p>
                )}
                <p className="text-sm text-text-secondary">
                  <a href="#" className="text-primary-600 underline">
                    How to find your driving licence number
                  </a>
                </p>
                <p className="text-xs text-gray-500">
                  By continuing, you agree to Marshmallow sharing your details
                  with the DVLA (Driver and Vehicle Licensing Agency) to verify
                  your licence.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-text-primary">
                  Have you held a full driver’s licence in another country before?
                </h2>
                <p className="text-sm text-text-secondary">
                  We’ll count your driving experience from the last country you
                  lived in as well, and get you a better price.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <RadioCard
                    name="hasOtherCountryLicence"
                    value="yes"
                    label="Yes"
                    checked={formData.hasOtherCountryLicence === 'yes'}
                    onChange={handleChange}
                  />
                  <RadioCard
                    name="hasOtherCountryLicence"
                    value="no"
                    label="No"
                    checked={formData.hasOtherCountryLicence === 'no'}
                    onChange={handleChange}
                  />
                </div>
                {errors.hasOtherCountryLicence && (
                  <p className="text-red-600 text-sm">
                    {errors.hasOtherCountryLicence}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showOtherCountryFields && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-10 overflow-hidden pt-10 border-t"
            >
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-text-primary">
                  In which country did you first pass your driving test?
                </h2>
                <input
                  type="text"
                  name="otherCountry"
                  placeholder="Enter country name"
                  value={formData.otherCountry}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-border-light focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
                {errors.otherCountry && (
                  <p className="text-red-600 text-sm">{errors.otherCountry}</p>
                )}
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-text-primary">
                  Driving licence number (from that country)
                </h2>
                <p className="text-sm text-text-secondary">
                  Please enter the licence number from your {formData.otherCountry || 'other'} licence.
                </p>
                <input
                  type="text"
                  name="otherLicenceNumber"
                  placeholder="Enter your driving licence number"
                  value={formData.otherLicenceNumber}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-border-light focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
                {errors.otherLicenceNumber && (
                  <p className="text-red-600 text-sm">{errors.otherLicenceNumber}</p>
                )}
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-text-primary">
                  When did you pass that first test?
                </h2>
                <p className="text-sm text-text-secondary">
                  You may be able to find this date on your licence.
                </p>
                <div className="flex gap-4">
                  <select
                    name="otherLicenceMonth"
                    value={formData.otherLicenceMonth}
                    onChange={handleChange}
                    className="w-1/2 p-3 rounded-lg border border-border-light bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">Select month</option>
                    {monthOptions.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="otherLicenceYear"
                    value={formData.otherLicenceYear}
                    onChange={handleChange}
                    className="w-1/2 p-3 rounded-lg border border-border-light bg-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">Select year</option>
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.otherLicenceDate && (
                  <p className="text-red-600 text-sm">{errors.otherLicenceDate}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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

export default LicenseInfo;