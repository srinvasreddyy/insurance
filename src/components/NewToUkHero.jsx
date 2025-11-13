import React from 'react'

const NewToUkHero = () => {
  return (
    <section className="bg-[#f5ede4] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT: Blob image + badges */}
        <div className="relative flex justify-center">
          {/* Blob shape with clipped image */}
          <div className="relative w-[300px] h-[420px] sm:w-[360px] sm:h-[520px] lg:w-[520px] lg:h-[640px]">
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
          <div className="absolute top-6 left-28 lg:left-36 z-30">
            <div className="bg-[#9aaeb7] text-[#1f2f33] px-6 py-2 rounded-[10px] font-semibold tracking-wide shadow-sm">
              NIGERIA → UK
            </div>
          </div>

          {/* Months teardrop badge bottom-left */}
          <div className="absolute -bottom-8 left-6 lg:left-12 z-30">
            <div className="relative flex items-center justify-center">
              <div className="w-[140px] h-[140px] bg-olive-600 rounded-full flex items-center justify-center shadow-2xl" style={{background:'#7f8a3b'}}>
                <div className="text-4xl font-extrabold text-gray-900">3</div>
              </div>
              {/* pointer/teardrop */}
              <div className="absolute bottom-[-28px] w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-t-[28px]" style={{borderTopColor:'#7f8a3b'}} />
              <div className="absolute bottom-[-72px] text-center w-[160px] left-[-10px] text-xs font-semibold text-gray-900" style={{marginTop:8}}>MONTHS IN<br/>THE UK</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="px-2 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-[88px] font-black leading-[0.95] text-gray-900">
            Car. Kar.
            <br />
            Auto. Motokā.
            <br />
            Voertuig. Mota.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-xl">
            Whatever you call it, we'll insure it. We could also save you an average of <strong>£392</strong>*
          </p>

          <ul className="mt-6 space-y-4 max-w-md">
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 bg-black text-white rounded-full text-sm">→</span>
              <span className="text-gray-800 font-semibold">Licences from <em className="not-italic font-bold">all</em> countries covered</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 bg-black text-white rounded-full text-sm">→</span>
              <span className="text-gray-800 font-semibold">Fairer prices based on <em className="not-italic font-bold">all</em> your driving experience, in any country</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 bg-black text-white rounded-full text-sm">→</span>
              <span className="text-gray-800 font-semibold">Flexible payment options, like pay monthly</span>
            </li>
          </ul>

          <div className="mt-8">
            <button className="bg-blue-400 hover:bg-blue-500 text-gray-900 font-bold px-12 py-3 rounded-full shadow-md transition-colors">
              Get a free quote
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default NewToUkHero