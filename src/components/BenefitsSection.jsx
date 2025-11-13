import React from 'react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Fully flexible.",
      description: "Pick from a range of plans to suit your needs and budget. You can also choose to spread the cost across smaller monthly payments, select your own payment date and add on any extras. You decide."
    },
    {
      id: 2,
      title: "The app.",
      description: "Manage your policy, access all your documents, and update your details on-the-go, at any time of day. You can also start a claim, start a Live Chat, and make changes to next year's cover in seconds. 5 stars (or close enough)."
    },
    {
      id: 3,
      title: "24/7 accident phone line.",
      description: "You can tell us about an incident any time of day or night, and we'll start working on your case right away. The more information you can give us, the better! That includes the contact details of anyone else involved."
    },
    {
      id: 4,
      title: "Exclusive perks.",
      description: "Enjoy instant access to a range of great discounts alongside your car cover. From credit builders to gym memberships, each offer has been handpicked to help make life in the UK that little bit sweeter."
    }
  ]

  return (
    <section className="bg-white py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-bold text-gray-600 tracking-widest mb-4 uppercase">
            What people love
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900">
            The 'extra mile' stuff.
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex flex-col">
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BenefitsSection
