import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const founders = [
    {
      id: 1,
      name: 'Alexander Kent-Braham',
      title: 'CO-CEO',
    },
    {
      id: 2,
      name: 'Oliver Kent-Braham',
      title: 'CO-CEO',
    },
    {
      id: 3,
      name: 'David Gooté',
      title: 'CHIEF ARCHITECT',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Story Content */}
        <div className="space-y-6 mb-16 md:mb-20">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            We have always been a purpose-driven company.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We started Be Sure when we found out how unfair insurance prices are for people who move to the UK. Purely because the industry hasn't given this huge cohort of people a second thought, and isn't set up to price them properly.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We now help 100,000s of UK newcomers get a fairer deal on their car insurance every year. We do this by building our own technology, developing pricing and fraud models that let us cater to their unique experiences, and investing time in getting to know them on a deeper level.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            So far we've sold over half a million policies with our app being used every year by hundreds of thousands of people. And according to the Financial times, we were the second fastest growing company in Europe.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
            So what's next?
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            For now, we are still hyper-focused on helping those who are new to the UK.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            But there are millions of marginalised customers out there who find themselves on a different path - either by choice or circumstance. And we know they face unique problems that most companies aren't even aware of.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We believe our future is in helping those people by learning about their experiences, and building our company around their needs.
          </p>

          <p className="text-base md:text-lg text-[#0f7a4f] font-bold leading-relaxed">
            Solving important problems for the people who need it most.
          </p>
        </div>

        {/* Founders Section */}
        <div className="border-t border-gray-300 pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {founders.map((founder) => (
              <div key={founder.id} className="text-center">
                <p className="text-base md:text-lg font-bold text-gray-900 mb-1">
                  {founder.name}
                </p>
                <p className="text-xs md:text-sm font-semibold text-gray-600 tracking-wide">
                  {founder.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
