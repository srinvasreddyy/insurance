import React from 'react';

export default function FinanceGuide() {
  const steps = [
    {
      id: 1,
      number: '1',
      title: 'You borrow money to buy a car.',
      description: 'You\'ll agree to an interest rate, a monthly amount and a fixed term for paying back the loan.',
    },
    {
      id: 2,
      number: '2',
      title: 'Drive away. Pay back over time.',
      description: 'During this time we are the legal owners of your car.',
    },
    {
      id: 3,
      number: '3',
      title: 'You own when the loan is paid.',
      description: 'The car is now yours to do whatever you want with it. Keep it, sell it, give it racer stripes – it\'s up to you.',
    },
  ];

  return (
    <section className="bg-[#f9f0e9] py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Title and Intro */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
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
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                How does car finance work?
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We offer Hire Purchase agreements. This is the most common form of car finance in the UK.
            </p>
          </div>

          {/* Right Column - Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-4 md:gap-6">
                {/* Step Number */}
                <div className="bg-[#8fa860] text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 font-bold text-lg md:text-xl">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-base text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
