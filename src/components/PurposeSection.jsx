import React from 'react';

export default function PurposeSection() {
  return (
    <div className="bg-white">
      {/* Purpose-Led Section */}
      <section className="bg-[#f5ede4] py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6">
            Purpose-led from the start
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            One of our Founders, Alexander, wrote about why migration matters and how we want to help, in our small way, make moving to the UK easier.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed italic mb-8">
            It's an oldie, but a goodie.
          </p>

          <a
            href="#"
            className="inline-block text-base md:text-lg font-bold text-gray-900 border-b-2 border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors duration-200"
          >
            Read the blog
          </a>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-[#e8dfd6] py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-[#d9cfc3] rounded-full py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join us!
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              We've come a long way already, and we're growing fast. Become a Be Sure member and help shape the next part of our story.
            </p>

            <a
              href="#"
              className="inline-block bg-[#c9bfb3] hover:bg-[#b5aba1] transition-colors duration-200 text-gray-900 font-bold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full"
            >
              Jobs at Be Sure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
