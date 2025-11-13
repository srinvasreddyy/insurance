import React from 'react'

const VanInsuranceDetails = () => {
  return (
    <section className="relative w-full h-96 lg:h-[500px] bg-white flex items-center justify-center py-8">
      
      {/* Background Image - Full Coverage */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695c952952?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Van with tools"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content Card - Centered */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8">
        <div className="bg-gray-900/95 backdrop-blur rounded-2xl p-6 md:p-8 shadow-2xl">
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
            Cover to carry your tools
          </h2>

          {/* Content Paragraphs */}
          <div className="space-y-3 mb-6">
            
            {/* First Paragraph */}
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              Carriage of Own Goods covers your van when you take tools to work. When you sign up, select 'I use it for work (Carriage of Own Goods)'.
            </p>

          </div>

          {/* CTA Button */}
          <button className="bg-blue-400 hover:bg-blue-500 text-gray-900 font-bold px-6 py-2 rounded-full transition-colors duration-200 text-sm w-full md:w-auto">
            Get your cover now
          </button>

        </div>
      </div>

    </section>
  )
}

export default VanInsuranceDetails
