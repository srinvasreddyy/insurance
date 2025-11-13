import React from 'react'

const AddExtras = () => {
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
      description: "Get the upper-hand in any road-related dispute. Cover any legal costs required to settle disputes or appeal motoring convictions."
    },
    {
      id: 3,
      title: "Courtesy Car upgrade (for theft and total loss)",
      description: "Upgrade your courtesy cover if you'd like a replacement car if yours is stolen or cannot be repaired. Standard courtesy cover (included with all but Be Sure Lightest) only gives you a replacement if your own car can be fixed."
    },
    {
      id: 4,
      title: "No Claims Discount Protection",
      description: "Even good drivers make mistakes. Make up to 2 claims a year without affecting your claim-free record, and protect your well-earned discount."
    },
    {
      id: 5,
      title: "Excess Protection",
      description: "Your excess is the amount you agree to pay if you make a claim (you agree to this amount when you sign up). But with Excess Protection, you'll get it all back! Regardless of what happened or who was at fault."
    },
    {
      id: 6,
      title: "Europe Roaming Pass upgrade",
      description: "Your standard pass gives you Third-party Only cover in Europe for up to 90 days. You can now upgrade that cover to Fully Comprehensive. That means cover for injury and damages to you, as well as any other person involved."
    },
    {
      id: 7,
      title: "Windscreen Protection",
      description: "Protect your windscreen if it gets chipped, cracked or broken. Pay a small amount upfront and we'll cover the cost of any glass repairs or replacements."
    }
  ]

  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-black text-gray-900">②</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4">
            Add your extras
          </h2>
          <p className="text-lg text-gray-700">
            Missed something in your plan? Build the cover you want with any of our optional extras.
          </p>
        </div>

        {/* Extras Grid */}
        <div className="space-y-4">
          {extras.map((extra) => (
            <div
              key={extra.id}
              className="bg-orange-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {extra.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {extra.description}
              </p>

              {/* Sub Items (if any) */}
              {extra.subItems && extra.subItems.length > 0 && (
                <ul className="space-y-2 ml-4">
                  {extra.subItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-gray-700 font-bold mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
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

export default AddExtras
