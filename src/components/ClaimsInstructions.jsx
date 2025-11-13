import React from 'react';
import { motion } from 'framer-motion';

export default function ClaimsInstructions() {
  const sections = [
    {
      id: 1,
      title: 'First, we\'ll ask you to verify some personal details, like...',
      items: [
        'Your name.',
        'Your policy number (you\'ll find this on the app).',
        'Your date of birth.'
      ]
    },
    {
      id: 2,
      title: 'Then, we\'ll ask about the accident.',
      items: [
        {
          label: 'What happened?',
          description: 'Think about what was happening just before, what you did, and what other people did.'
        },
        {
          label: 'When and where did it happen?',
          description: 'Location is key! But also think about the road. Were you on a junction, or coming up to traffic lights?'
        },
        {
          label: 'What was the weather like?',
          description: 'Think about the driving conditions. Like how clear it was, or how wet the road was'
        }
      ],
      tip: 'Note things like this down as soon as you can. It\'s amazing how quickly we forget things.'
    },
    {
      id: 3,
      title: 'We\'ll want to know about the damage.',
      items: [
        {
          label: 'What\'s the damage?',
          description: 'We\'ll ask you to tell us what was damaged. Is it your car? Someone\'s fence? Is anyone injured?'
        },
        {
          label: 'Is your car safe to drive?',
          description: 'If you\'re not able to drive it away from the scene, we\'ll pick it up for you and take it to a safe place'
        },
        {
          label: 'Where is your car now?',
          description: 'At home? Still on the road? If it was blocking traffic, the police may have taken it to a safe place.'
        }
      ],
      tip: 'Take lots of photos of the damage, and the scene of the accident. We\'ll ask for them later.'
    },
    {
      id: 4,
      title: 'And we\'ll ask if anyone else was involved.',
      items: [
        {
          label: 'What\'s their full name and phone number?',
          description: 'We\'ll make sure they\'re ok, and we\'ll handle any repair or compensation arrangements on your behalf.'
        },
        {
          label: 'What\'s their car\'s registration plate?',
          description: 'This gives us all the information we need about the vehicle. Without it, a claim can take a lot longer to settle'
        },
        {
          label: 'Who are they insured by?',
          description: 'We\'ll need to know who the other driver is insured by. This will make the process quicker and easier!'
        }
      ],
      tip: 'Always collect the details of any other drivers involved, and the phone number of any witnesses.'
    }
  ];

  return (
    <motion.section 
      className="w-full bg-gray-50 py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Title Section */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-3 mb-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Call us within 24 hours. Here's what you'll need.
                </h1>
                <p className="text-gray-600">The quicker you call, the more we can help.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Instructions */}
          <div className="lg:col-span-2 space-y-12">
            {sections.map((section) => (
              <div key={section.id}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>

                <ul className="space-y-4 mb-6">
                  {section.items.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {typeof item === 'string' ? (
                        <span className="flex items-start gap-3">
                          <span className="text-gray-900 font-semibold">•</span>
                          <span>{item}</span>
                        </span>
                      ) : (
                        <div className="flex items-start gap-3">
                          <span className="text-gray-900 font-semibold mt-1">•</span>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{item.label}</p>
                            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                {section.tip && (
                  <div className="bg-green-100 border-l-4 border-green-500 rounded-full py-3 px-4 flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-green-800">{section.tip}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
