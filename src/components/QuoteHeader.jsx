import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { FaShieldAlt } from 'react-icons/fa'; // Import an icon
import { motion } from 'framer-motion';

// --- Step Icon Component ---
const Step = ({ name, icon, isActive, isCompleted }) => {
  let iconClasses = '';
  let textClasses = '';

  if (isActive) {
    // Current step: Blue circle, blue text
    iconClasses = 'bg-primary-600 border-primary-600 text-white';
    textClasses = 'text-primary-600 font-bold';
  } else if (isCompleted) {
    // Completed step: Green circle, dark text
    iconClasses = 'bg-brand-green border-brand-green text-white';
    textClasses = 'text-text-primary font-medium';
  } else {
    // Inactive step: Gray border, gray text
    iconClasses = 'border-border-dark text-gray-400';
    textClasses = 'text-text-secondary';
  }

  return (
    <div className="flex flex-col items-center w-12">
      <div
        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-1 transition-all duration-300 ${iconClasses}`}
      >
        {isCompleted ? '✓' : icon}
      </div>
      <span className={`text-xs text-center transition-all duration-300 ${textClasses}`}>{name}</span>
    </div>
  );
};

// --- Connecting Line Component ---
const StepLine = ({ isCompleted }) => {
  return (
    <div className="flex-1 h-0.5 mt-4 mx-2">
      {/* Animate the line fill */}
      <div className="h-full w-full bg-border-light rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-600"
          initial={{ width: '0%' }}
          animate={{ width: isCompleted ? '100%' : '0%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

// --- Main Header Component ---
const QuoteHeader = ({ activeStepId, showProgressBar }) => {
  const navigate = useNavigate();

  const steps = [
    { id: 'vehicle', name: 'Vehicle', icon: '🚗' },
    { id: 'drivers', name: 'Drivers', icon: '👤' },
    { id: 'license', name: 'License', icon: '💳' },
    { id: 'history', name: 'History', icon: '📜' },
    { id: 'usage', name: 'Usage', icon: '📊' },
  ];

  const activeIndex = steps.findIndex((s) => s.id === activeStepId);

  return (
    <header className="bg-white py-6 px-4 sm:px-6 lg:px-8 border-b border-border-light">
      <div className="max-w-4xl mx-auto">
        {/* Top part: Logo and Trustpilot */}
        <div className="flex items-center justify-between">
          {/* --- LOGO FIX --- */}
          <button
            onClick={() => navigate({ to: '/' })}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <FaShieldAlt className="h-8 w-8 text-primary-600" />
            <span className="font-bold text-2xl text-text-primary">be sure</span>
          </button>
          {/* --- END LOGO FIX --- */}
          <div className="flex items-center gap-2">
            <span className="text-brand-green text-sm">★★★★★</span>
            <span className="text-xs sm:text-sm text-text-secondary">
              Rated <strong>Excellent</strong> on Trustpilot
            </span>
          </div>
        </div>

        {/* Bottom part: Progress Bar (Conditional) */}
        {showProgressBar && (
          <motion.div 
            className="w-full flex justify-between items-start pt-6 px-2 sm:px-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ delay: 0.1 }}
          >
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <Step
                  name={step.name}
                  icon={step.icon}
                  isActive={index === activeIndex}
                  isCompleted={index < activeIndex}
                />
                {index < steps.length - 1 && (
                  <StepLine isCompleted={index < activeIndex} />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default QuoteHeader;