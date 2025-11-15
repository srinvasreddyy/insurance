import React, { useState } from 'react';

export default function FinanceFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Is Be Sure car finance a broker?',
      answer: 'Be Sure is a broker. We help UK newcomers access car finance from our panel of lenders.',
    },
    {
      id: 2,
      question: 'What is the Setup fee?',
      answer: 'The Setup fee covers the cost of setting up your car finance agreement and processing your application.',
    },
    {
      id: 3,
      question: 'What is the Option to Purchase fee?',
      answer: 'The Option to Purchase fee is payable when you decide to own the car at the end of the agreement.',
    },
    {
      id: 4,
      question: 'What\'s the minimum credit score I need?',
      answer: 'We don\'t have a strict minimum credit score requirement. We look at your full financial picture to make a decision.',
    },
    {
      id: 5,
      question: 'Can I change my repayment date once I\'ve been approved?',
      answer: 'Yes, you can contact us to discuss changing your repayment date after approval.',
    },
    {
      id: 6,
      question: 'Can I pay my loan off early?',
      answer: 'Yes, you can pay off your loan early without penalties. Early repayment is encouraged.',
    },
    {
      id: 7,
      question: 'How is my personal information kept safe?',
      answer: 'We use industry-standard encryption and security measures to protect your personal information.',
    },
    {
      id: 8,
      question: 'What if I\'m struggling with payments?',
      answer: 'If you\'re struggling with payments, please contact us to discuss available options and support.',
    },
    {
      id: 9,
      question: 'Can I cancel my loan after signing?',
      answer: 'You have a 14-day cooling-off period after signing during which you can cancel your agreement.',
    },
    {
      id: 10,
      question: 'How do I change my account details?',
      answer: 'You can update your account details through our app or by contacting our customer support team.',
    },
    {
      id: 11,
      question: 'What is voluntary termination and can I use it?',
      answer: 'Voluntary termination allows you to end your agreement early and return the car. Terms and conditions apply.',
    },
    {
      id: 12,
      question: 'How can I see what I\'ve paid and what I still owe?',
      answer: 'You can view your payment history and outstanding balance through your app or account dashboard.',
    },
    {
      id: 13,
      question: 'What if the car is written off or stolen?',
      answer: 'We recommend comprehensive car insurance. If your car is written off or stolen, your insurance should cover the outstanding balance.',
    },
    {
      id: 14,
      question: 'Are there special arrangements for vulnerable customers?',
      answer: 'Yes, we have support options available for vulnerable customers. Please contact us to discuss your specific needs.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#e8dfd6] py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Title */}
          <div className="flex items-start">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
              In case you missed anything
            </h2>
          </div>

          {/* Right Columns - FAQs */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-6 md:px-8 py-4 md:py-5 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg md:text-lg font-bold text-gray-900 text-left">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-600 shrink-0 ml-4 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {/* Answer Section */}
                {openIndex === index && (
                  <div className="px-6 md:px-8 py-4 md:py-5 border-t border-gray-200 bg-gray-50">
                    <p className="text-base md:text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
