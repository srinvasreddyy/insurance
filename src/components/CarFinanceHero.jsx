import React from 'react'
import carFinanceImage from '../assets/carfinanceimage.jpg'

const CarFinanceHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 flex items-center">
      
      {/* Background Image - Right Side */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={carFinanceImage}
          alt="Car finance woman driving"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - Text Content */}
          <div className="text-white max-w-xl">
            
            {/* Trustpilot Badge */}
            <div className="flex items-center gap-2 mb-8 pt-5">
              <span className="text-white">Rated Excellent on</span>
              <span className="text-green-500">⭐</span>
              <span className="font-bold">Trustpilot</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">
              Car finance made for UK newcomers
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
              Get a loan to help you spread the cost of a car. Even if you've only just moved here.
            </p>

            {/* CTA Button */}
            <button className="bg-blue-400 hover:bg-blue-500 text-gray-900 font-bold px-10 py-3 rounded-full mb-12 transition-colors duration-200 text-lg">
              Join the waitlist
            </button>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-2xl mt-0.5">⊕</span>
                <span className="text-gray-200 text-base">
                  We look beyond your credit score
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-2xl mt-0.5">⊕</span>
                <span className="text-gray-200 text-base">
                  Build your financial footprint
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-2xl mt-0.5">⊕</span>
                <span className="text-gray-200 text-base">
                  Paper-free application
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - Image (handled by background) */}
          <div className="hidden lg:block"></div>

        </div>
      </div>

    </section>
  )
}

export default CarFinanceHero
