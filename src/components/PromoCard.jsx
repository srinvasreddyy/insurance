import React from 'react'
import carImage from '../assets/carimage1.webp'

const PromoCard = () => {
  return (
    <section className="relative w-full h-screen flex items-end justify-center overflow-hidden">
      
      {/* Background Image - Full Coverage */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={carImage}
          alt="Car wash"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pink Card - Positioned at Bottom with Curved Top */}
      <div className="relative z-10 w-full">
        <div className="bg-teal-500 rounded-t-full pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 lg:px-20 shadow-2xl">
          
          <div className="max-w-6xl mx-auto">
            
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 leading-tight">
              Protect future you with Be Sure
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-800 font-medium max-w-2xl">
              Get the cover you need at a price that's fair. It's just two steps away.
            </p>

          </div>
        </div>
      </div>

    </section>
  )
}

export default PromoCard
