import React, { useState } from 'react'

const VanFaq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "What's the maximum weight that you cover?",
      answer: "We cover vans up to 3.5 tonnes. If your van is heavier than this, it may fall outside our standard cover."
    },
    {
      id: 2,
      question: "What is Carriage of Own Goods?",
      answer: "Carriage of Own Goods covers your van when you carry work-related tools and equipment. It does not cover the tools themselves or other people's goods."
    },
    {
      id: 3,
      question: "Do you offer cover for tools?",
      answer: "We don't offer cover for the tools themselves through Carriage of Own Goods. However, you may want to check if your tools are covered under a separate business contents policy."
    },
    {
      id: 4,
      question: "Will you accept my claim-free driving experience from another country?",
      answer: "Yes, we accept claim-free driving experience from any country. We value your international driving history and will use it to determine your No Claims Discount."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-blue-50 py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT SIDE - Title */}
          <div className="lg:col-span-1">
            <div className="bg-gray-400 rounded-3xl p-8 h-full flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center">
                Questions you've asked
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE - FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 rounded-2xl"
                  >
                    <h3 className="text-base md:text-lg font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <span className={`shrink-0 text-gray-400 text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  {openIndex === index && (
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default VanFaq
