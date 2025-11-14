import React from 'react'

const NewToUkAd = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            {/* Icon + Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center">
                <span className="text-gray-700 text-xl">→</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black leading-tight text-gray-900">
                Moved to the UK?
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-gray-700 leading-relaxed">
              We make car insurance one less thing to worry about.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* First paragraph */}
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              People who move to the UK used to pay more for their car insurance than their UK-born friends. Why? Because most insurers only care about the driving experience you gain after you move here.
            </p>

            {/* Bold highlight */}
            <p className="text-base lg:text-lg font-bold text-gray-900">
              Then came Be Sure!
            </p>

            {/* Second paragraph */}
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              We consider <em className="not-italic font-bold">all</em> your driving history when we price your policy, wherever in the world you lived before.
            </p>

            {/* Third paragraph */}
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              That means we can give you the same experience-based discounts as everyone else. So you can spend more on the things that matter.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default NewToUkAd