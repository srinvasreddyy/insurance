import React from 'react'

const CoverageExplainer = () => {
  return (
    <section className="bg-emerald-800 text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE - Content */}
          <div>
            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              What is Fully Comprehensive?
            </h2>

            {/* Description */}
            <p className="text-lg leading-relaxed mb-6 text-gray-100">
              Fully Comprehensive policies protect you, your car, and anyone else involved in an accident you cause (including their car or any other property). Third-party Only policies do not cover you or your car - just the other person's. And even though Fully Comprehensive policies give you more cover, they're often cheaper.
            </p>

            {/* Link */}
            <a
              href="#"
              className="text-white underline font-semibold hover:text-teal-300 transition-colors text-lg"
            >
              Read more about Fully Comprehensive policies
            </a>
          </div>

          {/* RIGHT SIDE - Decorative Shapes */}
          <div className="relative h-96 hidden lg:flex items-center justify-center">
            
            {/* Orange Circle - Top Right */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-600 rounded-full transform rotate-12 flex items-center justify-center">
              <span className="text-4xl text-teal-900">👀</span>
            </div>

            {/* Pink Hexagon - Middle Right */}
            <div className="absolute top-1/3 right-12 w-40 h-32 bg-teal-500 rounded-3xl flex items-center justify-center" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}>
              <span className="text-5xl">👀</span>
            </div>

            {/* Blue Diamond - Bottom Right */}
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-400 transform rotate-45 flex items-center justify-center">
              <div className="transform -rotate-45 flex items-center justify-center">
                <span className="text-5xl">👀</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Optional: Mobile shapes positioned differently */}
      <div className="lg:hidden absolute top-0 right-0 w-20 h-20 bg-teal-600 rounded-full opacity-80"></div>
    </section>
  )
}

export default CoverageExplainer
