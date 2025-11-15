import React from 'react'

const PlanSelector = () => {
  const plans = [
    {
      id: 1,
      badge: "①",
      name: "lightest",
      tagline: "Our most streamlined plan.",
      description: "",
      features: [
        { text: "Fully Comprehensive", included: true },
        { text: "Personal injury cover up to £2k", included: true },
        { text: "Cover to drive in Europe (30 days)", included: true },
        { text: "Uninsured driver promise", included: true },
        { text: "Courtesy Car (repairs)", included: false },
        { text: "Windscreen Protection", included: false },
        { text: "Onward travel after an accident", included: false },
        { text: "Driving Other Cars (Third-party only)", included: false },
        { text: "Courtesy Car (theft and total loss)", included: false },
        { text: "Motor Legal Protection", included: false },
        { text: "Breakdown Cover", included: false }
      ]
    },
    {
      id: 2,
      badge: "②",
      name: "essential",
      tagline: "Lightest, with a little bit extra.",
      description: "",
      features: [
        { text: "Fully Comprehensive", included: true },
        { text: "Personal injury cover up to £5k", included: true },
        { text: "Cover to drive in Europe (90 days)", included: true },
        { text: "Uninsured driver promise", included: true },
        { text: "Courtesy Car (repairs)", included: true },
        { text: "Windscreen Protection", included: false },
        { text: "Onward travel after an accident", included: false },
        { text: "Driving Other Cars (Third-party only)", included: false },
        { text: "Courtesy Car (theft and total loss)", included: false },
        { text: "Motor Legal Protection", included: false },
        { text: "Breakdown Cover", included: false }
      ]
    },
    {
      id: 3,
      badge: "③",
      name: "original",
      tagline: "All the essentials. No trimmings.",
      description: "",
      features: [
        { text: "Fully Comprehensive", included: true },
        { text: "Personal injury cover up to £5k", included: true },
        { text: "Cover to drive in Europe (90 days)", included: true },
        { text: "Uninsured driver promise", included: true },
        { text: "Courtesy Car (repairs)", included: true },
        { text: "Windscreen Protection", included: true },
        { text: "Onward travel after an accident", included: true },
        { text: "Driving Other Cars (Third-party only)", included: false },
        { text: "Courtesy Car (theft and total loss)", included: false },
        { text: "Motor Legal Protection", included: false },
        { text: "Breakdown Cover", included: false }
      ]
    },
    {
      id: 4,
      badge: "④",
      name: "plus",
      tagline: "All of Be Sure Original, PLUS...",
      description: "",
      features: [
        { text: "Fully Comprehensive", included: true },
        { text: "Personal injury cover up to £25k", included: true },
        { text: "Cover to drive in Europe (90 days)", included: true },
        { text: "Uninsured driver promise", included: true },
        { text: "Courtesy Car (repairs)", included: true },
        { text: "Windscreen Protection", included: true },
        { text: "Onward travel after an accident", included: true },
        { text: "Driving Other Cars (Third-party only)", included: true },
        { text: "Courtesy Car (theft and total loss)", included: true },
        { text: "Motor Legal Protection", included: true },
        { text: "Breakdown Cover", included: true }
      ]
    }
  ]

  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-black text-gray-900">①</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4">
            Choose your plan
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get the basics with Be Sure Lightest or go full protective bubble with Be Sure Plus. Or anywhere in between.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div key={plan.id} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              
              {/* Plan Header - Pink Background */}
              <div className="bg-teal-500 px-6 py-6">
                <h3 className="text-2xl font-black text-gray-900">
                  be sure<br />{plan.name}
                </h3>
              </div>

              {/* Plan Content */}
              <div className="bg-blue-100 px-6 py-6">
                
                {/* Tagline */}
                <p className="text-sm font-semibold text-gray-800 mb-6 pb-4 border-b border-gray-300">
                  {plan.tagline}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`shrink-0 text-lg font-bold mt-0.5 ${feature.included ? 'text-green-600' : 'text-red-600'}`}>
                        {feature.included ? '✓' : '●'}
                      </span>
                      <span className={`text-sm ${feature.included ? 'text-gray-800' : 'text-gray-600'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PlanSelector
