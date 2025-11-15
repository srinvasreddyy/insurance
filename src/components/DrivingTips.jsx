import React from 'react'

const DrivingTips = () => {
  const tips = [
    {
      id: 1,
      number: 1,
      title: "Get your car ready",
      description: "Before you touch the steering wheel, make sure you've taken care of all the legal stuff. You'll need to register the car, pay the road tax, check the MOT, and get car insurance. All before you drive it.",
      linkText: "Find out more about the legal stuff",
      linkUrl: "#"
    },
    {
      id: 2,
      number: 2,
      title: "Brush up on UK road rules",
      description: "The basics are a doddle. Drive on the left-hand side. Wear a seatbelt. Don't use your phone while you're driving. Remember the speed signs are in miles, not kilometres. If there are two yellow lines at the side of the road, don't park there.",
      linkText: "Read more about what to do on UK roads",
      linkUrl: "#"
    },
    {
      id: 3,
      number: 3,
      title: "Learn how to use a roundabout",
      description: "Not unique to the UK, but still new to many. Let's cover the basics. Always slow down when you approach them. Give way to anything approaching from the right. When the road is clear, go round in a clockwise direction. Indicate before you exit.",
      linkText: "Learn more about roundabouts",
      linkUrl: "#"
    }
  ]

  return (
    <section className="bg-[#f5ede4] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-start">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#8fa860] flex items-center justify-center">
                <span className="text-white text-xl">→</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black leading-tight text-gray-900">
                Driving in the UK: tips and tricks
              </h2>
            </div>
            <p className="text-lg text-gray-700">
              Our beginner's guide.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10">
            {tips.map((tip) => (
              <div key={tip.id}>
                {/* Number Badge + Title */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#8fa860] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{tip.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {tip.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-3 ml-14">
                  {tip.description}
                </p>

                {/* Link */}
                <a
                  href={tip.linkUrl}
                  className="text-blue-600 hover:text-blue-700 font-semibold underline ml-14"
                >
                  {tip.linkText}
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default DrivingTips
