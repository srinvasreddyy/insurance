import React from 'react'
import { useNavigate } from '@tanstack/react-router'

const NewToUkHero = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-gradient-to-b from-slate-50 to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 grid lg:grid-cols-2 items-center gap-8 lg:gap-12">

        {/* LEFT: Blob image + badges */}
        <div className="relative flex justify-center">
          {/* Blob shape with clipped image */}
          <div className="relative w-[200px] h-[280px] sm:w-[280px] sm:h-[400px] md:w-[360px] md:h-[480px] lg:w-[480px] lg:h-[600px]">
            <svg viewBox="0 0 400 520" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <clipPath id="ntuClip">
                  <path d="M80,40 Q0,40 0,180 Q0,380 120,460 Q180,500 280,460 Q400,420 400,300 Q400,140 280,100 Q200,60 80,40 Z" />
                </clipPath>
              </defs>

              {/* colored backdrop for blob (subtle stripes via pattern) */}
              <rect width="400" height="520" fill="#c85f20" />

              {/* image clipped */}
              <image
                href="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c9db7a7f1f3f2c3a263a6f9d1a1b6b0"
                width="400"
                height="520"
                clipPath="url(#ntuClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>

          {/* Nigeria -> UK pill badge (top of image) */}
          <div className="absolute top-3 sm:top-6 left-12 sm:left-20 md:left-24 lg:left-36 z-30">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md">
              NIGERIA → UK
            </div>
          </div>

          {/* Months teardrop badge bottom-left */}
          <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 lg:-bottom-12 left-2 sm:left-4 md:left-6 lg:left-12 z-30">
            <div className="relative flex items-center justify-center">
              <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] bg-teal-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">3</div>
              </div>
              {/* pointer/teardrop */}
              <div className="absolute bottom-[-16px] sm:bottom-[-20px] md:bottom-[-24px] lg:bottom-[-28px] w-0 h-0 border-l-[16px] sm:border-l-[18px] md:border-l-[20px] lg:border-l-[22px] border-l-transparent border-r-[16px] sm:border-r-[18px] md:border-r-[20px] lg:border-r-[22px] border-r-transparent border-t-[20px] sm:border-t-[24px] md:border-t-[26px] lg:border-t-[28px] border-t-teal-600" />
              <div className="absolute bottom-[-50px] sm:bottom-[-60px] md:bottom-[-70px] lg:bottom-[-72px] text-center w-[140px] sm:w-[160px] text-[10px] sm:text-xs md:text-sm font-bold text-gray-900">MONTHS IN<br/>THE UK</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="px-0 sm:px-2 md:px-4 lg:px-8 mt-16 sm:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gray-900 break-words">
            Car. Kar.<br />
            Auto. Motokā.<br />
            Voertuig. Mota.
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
            Whatever you call it, we'll insure it. We could also save you an average of <strong className="text-blue-600">£392</strong>*
          </p>

          <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 max-w-lg">
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-teal-500 text-white rounded-full text-xs sm:text-sm flex-shrink-0 font-bold">→</span>
              <span className="text-sm sm:text-base text-gray-800 font-semibold">Licences from <span className="font-black">all</span> countries covered</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-teal-500 text-white rounded-full text-xs sm:text-sm flex-shrink-0 font-bold">→</span>
              <span className="text-sm sm:text-base text-gray-800 font-semibold">Fairer prices based on <span className="font-black">all</span> your driving experience, in any country</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-teal-500 text-white rounded-full text-xs sm:text-sm flex-shrink-0 font-bold">→</span>
              <span className="text-sm sm:text-base text-gray-800 font-semibold">Flexible payment options, like pay monthly</span>
            </li>
          </ul>

          <div className="mt-8 sm:mt-10">
            <button
              type="button"
              onClick={() => navigate({ to: '/getaquote' })}
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:shadow-lg text-white font-bold px-8 sm:px-12 py-3 rounded-full shadow-md transition-all"
            >
              Get a free quote
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default NewToUkHero