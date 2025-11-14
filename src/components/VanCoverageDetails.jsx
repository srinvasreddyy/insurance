import React from 'react'

const VanCoverageDetails = () => {
  const coverageScenarios = [
    {
      id: 1,
      icon: "🚗💔",
      title: "If you're in an accident",
      description: "We'll cover damage to your van, and provide financial support for serious injuries. If someone else is involved, we'll cover any damage to their car or property and any injury compensation payouts."
    },
    {
      id: 2,
      icon: "🍂💔",
      title: "If you're plain unlucky",
      description: "We'll cover you if your van is stolen, or damaged from vandalism, fire or attempted theft - up to the total value of your van."
    },
    {
      id: 3,
      icon: "🔧💔",
      title: "If your van is in for repairs",
      description: "As long as you use one of our approved repairers, we'll do everything we can to get you a courtesy car (or van, if we can) while yours is in the garage. Subject to availability."
    },
    {
      id: 4,
      icon: "🪟💔",
      title: "If your windows are damaged",
      description: "Chipped, cracked, or smashed. Whatever glass repairs or replacements you need, pay a small amount upfront and we'll cover the rest."
    },
    {
      id: 5,
      icon: "🚗🔴",
      title: "If you're hit by an uninsured driver",
      description: "We'll protect your claim-free driving discount and you'll get a full refund on the amount you pay on your initial claim (also called your excess)."
    },
    {
      id: 6,
      icon: "✈️🚗",
      title: "If you're driving in Europe",
      description: "Europe on your bucket list? You're in luck. Our Europe Roaming Pass gives you Third-party Only cover for up to 90 days in lots of European countries."
    }
  ]

  return (
    <section className="bg-blue-50 py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-start gap-3 mb-6">
            <span className="text-3xl font-black text-gray-900">⊕</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              Get great cover as standard.
            </h2>
          </div>
          <p className="text-lg text-gray-700">
            Buy direct with us, and your Fully Comprehensive cover will protect you in all these situations.
          </p>
        </div>

        {/* Coverage Grid - 2 Columns on Desktop, 1 on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {coverageScenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="bg-blue-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              
              {/* Icon */}
              <div className="text-5xl mb-4">
                {scenario.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {scenario.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base">
                {scenario.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default VanCoverageDetails
