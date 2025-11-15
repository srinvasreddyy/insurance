import React from 'react';

export default function CreditScore() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Title with Icon */}
          <div className="flex items-start gap-6">
            <div className="bg-[#8fa860] rounded-full p-3 shrink-0 mt-1">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              You're more than your credit score
            </h2>
          </div>

          {/* Right Column - Description Text */}
          <div className="space-y-6 lg:pt-2">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Buying a car shouldn't mean wrecking your savings. Yet for newcomers who are shut out from car finance options in the UK, just because they haven't borrowed any money yet, that's often exactly what happens.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
              And we don't think that's fair.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We've already spent years helping UK newcomers access fairly-priced car insurance. Now we're using that experience to help us look past what's on paper – so we can often say yes where others say no.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
