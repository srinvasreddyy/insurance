import React from 'react'

const CoverDetails = () => {
  const coverOptions = [
    {
      id: 1,
      title: "Build your own cover",
      description: "Add extra features to your plan and make it just right. We have breakdown cover, legal cover, discount protection - and more."
    },
    {
      id: 2,
      title: "Flexible payments",
      description: "Spread the cost across smaller monthly payments, choose your own payment date, and get extra help if you need it."
    },
    {
      id: 3,
      title: "Help the way you want it",
      description: "Get help fast on Live Chat, call us 24/7 for claims and access support, or browse our FAQs."
    },
    {
      id: 4,
      title: "Only pay for what you need",
      description: "What's right today might not be right tomorrow. We're making it easier than ever to make changes when you need to and stick to budget."
    },
    {
      id: 5,
      title: "Simple. Clear. Straightforward.",
      description: "Insurance sounds a lot more complicated than it actually is. So we're here to cut through the nonsense."
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
              Cover with a little va va vroom
            </h2>
          </div>
          <p className="text-lg text-gray-700">
            Designed to fit your needs and experiences.
          </p>
        </div>

        {/* Cover Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {coverOptions.map((option) => (
            <div
              key={option.id}
              className="bg-[#ede6d8] rounded-2xl p-6 min-h-64 flex flex-col justify-between"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {option.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CoverDetails
