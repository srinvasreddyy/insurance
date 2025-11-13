import React from 'react';

export default function OurStoryHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Header Section */}
      <div className="bg-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 pt-10">
          Our story
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          As told by our founders
        </p>
      </div>

      {/* Hero Image Section with Overlay */}
      <div className="relative w-full h-80 md:h-96 lg:h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop)',
            backgroundPosition: 'center',
          }}
        />

        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      {/* Pink Card Overlay - Mission Statement */}
      <div className="relative -mt-20 md:-mt-28 lg:-mt-32 px-6 md:px-12 lg:px-20 flex justify-center pb-12 md:pb-16 lg:pb-20">
        <div className="bg-blue-400 rounded-3xl p-8 md:p-10 lg:p-12 max-w-3xl w-full shadow-xl">
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="text-xs md:text-sm font-bold text-gray-900 tracking-wide">
              OUR MISSION
            </span>
          </div>

          {/* Mission Statement */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            To back the ones who step outside the norm
          </h2>
        </div>
      </div>
    </section>
  );
}
