import React from 'react'

const VanPolicy = () => {
  const extras = [
    {
      id: 1,
      title: "Breakdown cover",
      description: "Choose from three breakdown plans, powered by the AA.",
      subItems: [
        "Roadside assistance",
        "UK-wide recovery",
        "European cover"
      ]
    },
    {
      id: 2,
      title: "Motor Legal Protection",
      description: "Don't get caught out by a road-related dispute. We'll cover any legal costs required to settle disputes or to appeal motoring convictions."
    },
    {
      id: 3,
      title: "Courtesy Car upgrade (for theft and total loss)",
      description: "Get a replacement vehicle if your van is stolen or written off (when repairs cost more than your van is worth). Standard courtesy cover only applies to vans being repaired."
    },
    {
      id: 4,
      title: "No Claims Discount Protection",
      description: "Mistakes happen. But with this add-on, you can make up to 2 claims a year without affecting your claim-free record and your well-earned discount."
    },
    {
      id: 5,
      title: "Europe Roaming Pass upgrade",
      description: "All of our policies give you Third-party Only cover in Europe for up to 90 days. Choose this extra to upgrade to Fully Comprehensive which covers injury and damages to you, as well as any other person involved in an accident."
    }
  ]

  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-start gap-3 mb-6">
            <span className="text-3xl font-black text-gray-900">②</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              Personalise it.
            </h2>
          </div>
          <p className="text-lg text-gray-700">
            Build your cover around your day-to-day with our optional extras.
          </p>
        </div>

        {/* Extras Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {extras.map((extra) => (
            <div
              key={extra.id}
              className="bg-blue-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {extra.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4 text-base">
                {extra.description}
              </p>

              {/* Sub Items (if any) */}
              {extra.subItems && extra.subItems.length > 0 && (
                <ul className="space-y-2 ml-4">
                  {extra.subItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-gray-700 font-bold mt-1">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default VanPolicy
