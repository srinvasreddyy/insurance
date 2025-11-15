import React from 'react';

export default function FinanceFeatures() {
  const features = [
    {
      id: 1,
      icon: '💰',
      title: 'We look beyond your credit score',
      description: 'Unlike traditional car finance providers, we don\'t let a lack of UK credit history get in the way of your loan. Instead, we ask smarter questions that help us see the full picture.',
    },
    {
      id: 2,
      icon: '📊',
      title: 'Build your financial footprint',
      description: 'Accessing our car finance and making regular, monthly payments will help improve your UK credit score over time.',
    },
    {
      id: 3,
      icon: '📧',
      title: 'Goodbye paperwork',
      description: 'Send us your details online to help us approve your loan. No extra visits to the dealership. No messy paperwork.',
    },
    {
      id: 4,
      icon: '💷',
      title: 'Impact-free application',
      description: 'Applying for a car finance loan with us won\'t impact your current credit score, even if you\'re unsuccessful.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Be Sure car finance
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Most lenders won't approve UK newcomers.
            <br />
            But we're not most lenders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#f5ede4] rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col"
            >
              {/* Icon */}
              <div className="text-5xl md:text-6xl mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
