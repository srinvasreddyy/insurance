import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import logo from '../assets/logo1.png'; // Using the pink logo

// This header is now shared across the quote flow
const QuoteHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <button
          onClick={() => navigate({ to: '/' })}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          {/* Using the pink logo from the image */}
          <img src={logo} alt="Be Sure" className="h-10 w-auto" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-teal-500 text-sm">★★★★★</span>
          <span className="text-xs sm:text-sm text-gray-600">
            Rated <strong>Excellent</strong> on Trustpilot
          </span>
        </div>
      </div>
    </header>
  );
};

export default QuoteHeader;