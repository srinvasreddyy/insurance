import React, { useState } from 'react'
import { motion } from 'framer-motion'

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "Can you cover me if I'm not a UK resident?",
      answer: "Yes, we can provide coverage for non-UK residents. Please contact us for more details about eligibility and requirements."
    },
    {
      id: 2,
      question: "Is car insurance different in the UK?",
      answer: "Yes, car insurance in the UK has different requirements and coverage options compared to other countries. Our team can help you understand the differences."
    },
    {
      id: 3,
      question: "I didn't pass my test in the UK. Can I still get insured?",
      answer: "Yes, we can provide insurance even if you passed your driving test outside the UK. We value your international driving experience."
    },
    {
      id: 4,
      question: "Do you offer translation services?",
      answer: "Yes, we offer translation services to help you understand your policy and other important documents."
    },
    {
      id: 5,
      question: "What is a No Claims Discount?",
      answer: "A No Claims Discount (NCD) is a reduction in your insurance premium for each year you don't make a claim. This rewards safe driving."
    },
    {
      id: 6,
      question: "What is the cheapest insurance you offer?",
      answer: "Our insurance options vary based on your needs and driving profile. Contact us for a personalized quote and to find the best option for you."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-blue-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* LEFT SIDE - Title */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-300 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-900 text-center">
                Answers to important questions
              </h2>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 rounded-xl sm:rounded-2xl"
                  >
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 pr-2">
                      {faq.question}
                    </h3>
                    <span className={`shrink-0 text-gray-400 text-xl sm:text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>

                  {/* Expandable Answer */}
                  {openIndex === index && (
                    <div className="px-4 sm:px-6 pb-3 sm:pb-4 pt-0">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQList