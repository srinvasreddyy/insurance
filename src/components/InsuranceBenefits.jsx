import React from 'react'

const InsuranceBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: "🌱",
      iconBg: "#9fb957",
      title: "UK newcomers can save an average of £392*",
      points: [
        "Instant experience-based discounts on all the years you've been driving, in the UK and abroad",
        "Extra discounts for a proven record of claim-free driving (accepted from all insurers, no translation needed)."
      ]
    },
    {
      id: 2,
      icon: "🐷",
      iconBg: "#ff69b4",
      title: "Get help when you need it most",
      points: [
        "Live Chat support open daily.",
        "24/7 phone line for claims and accident support.",
        "£36 million paid out in claims in 2022."
      ]
    },
    {
      id: 3,
      icon: "🦋",
      iconBg: "#7fa3c0",
      title: "Be in control",
      points: [
        "Spread the cost with smaller, monthly payments.",
        "Choose from a range of plans, with the option to add extra features, to suit your budget.",
        "Make changes to your details easily on our 5-star(ish) rated app."
      ]
    }
  ]

  return (
    <section className="bg-[#f5ede4] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 w-12 h-12 rounded-full bg-[#8fa860] flex items-center justify-center">
              <span className="text-white text-xl">→</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-gray-900">
              Your move, our cover
            </h2>
          </div>
          <p className="text-lg text-gray-700">
            Be Sure car insurance, built with you in mind.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-2xl p-8 shadow-sm">
              
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-5xl"
                  style={{ background: benefit.iconBg }}
                >
                  {benefit.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {benefit.title}
              </h3>

              {/* Bullet points */}
              <ul className="space-y-3">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold text-lg mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default InsuranceBenefits