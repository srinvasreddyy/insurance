import React from 'react';

export default function FinanceContactHelp() {
  return (
    <section className="bg-[#2a2a26] py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Contact Information */}
          <div className="text-white z-10">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 leading-tight">
              Hi there!
              <br />
              How can we help?
            </h2>

            {/* Phone Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.384 15.418l-3.35-1.926a1.5 1.5 0 00-2.028.29l-1.26 1.687c-1.645-1.04-3.405-2.8-4.445-4.445l1.687-1.26a1.5 1.5 0 00.29-2.028l-1.926-3.35a1.5 1.5 0 00-2.252-.186l-1.954 1.954a1.5 1.5 0 00-.318 1.582c1.48 4.595 5.028 8.143 9.623 9.623.382.122 1.034.053 1.582-.318l1.954-1.954a1.5 1.5 0 00-.186-2.252z" />
                </svg>
                <span className="font-bold text-base md:text-lg">Phone</span>
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-2">
                020 4572 3405
              </p>
              <p className="text-sm md:text-base text-gray-400">
                Monday - Friday | 10am - 4pm
              </p>
            </div>

            {/* Live Chat Section */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
                <span className="font-bold text-base md:text-lg">Live chat</span>
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-2">
                Monday - Friday | 10am - 4pm
              </p>
              <p className="text-sm md:text-base text-gray-400">
                Weekends and bank holidays | 10am - 4pm
              </p>
            </div>

            {/* Chat Button */}
            <button className="bg-blue-400 hover:bg-blue-500 transition-colors duration-200 text-gray-900 font-bold text-base md:text-lg px-8 py-3 rounded-full w-full sm:w-auto">
              Chat to us
            </button>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative h-96 md:h-full flex items-end justify-end">
            {/* Pink Blob */}
            <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#ff88c7] rounded-full" style={{
              clipPath: 'circle(50% at 50% 50%)',
            }}>
              {/* Inner white circle eyes */}
              <svg
                className="absolute w-full h-full"
                viewBox="0 0 200 200"
                preserveAspectRatio="none"
              >
                {/* Left eye */}
                <circle cx="60" cy="70" r="18" fill="white" />
                {/* Right eye */}
                <circle cx="140" cy="70" r="18" fill="white" />
                {/* Left pupil */}
                <circle cx="65" cy="75" r="8" fill="#2a2a26" />
                {/* Right pupil */}
                <circle cx="135" cy="75" r="8" fill="#2a2a26" />
              </svg>
            </div>

            {/* Brown Head/Face */}
            <div className="absolute bottom-0 right-20 md:right-24 w-56 h-64 md:w-72 md:h-80 bg-[#c97a3a] rounded-t-3xl z-10" style={{
              clipPath: 'polygon(0% 20%, 100% 20%, 100% 100%, 0% 100%)',
            }}>
              {/* Eyes */}
              <svg
                className="absolute w-full h-full"
                viewBox="0 0 200 200"
                preserveAspectRatio="none"
              >
                {/* Left eye white */}
                <circle cx="65" cy="60" r="16" fill="white" />
                {/* Right eye white */}
                <circle cx="135" cy="60" r="16" fill="white" />
                {/* Left pupil */}
                <circle cx="68" cy="65" r="7" fill="#2a2a26" />
                {/* Right pupil */}
                <circle cx="132" cy="65" r="7" fill="#2a2a26" />
              </svg>
            </div>

            {/* Pink Mouth/Chin */}
            <div className="absolute bottom-0 right-12 md:right-16 w-24 h-16 bg-[#ff88c7] rounded-full z-5" style={{
              clipPath: 'polygon(0% 40%, 100% 40%, 100% 100%, 0% 100%)',
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
