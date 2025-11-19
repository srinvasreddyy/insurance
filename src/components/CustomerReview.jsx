import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(320)

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth < 640) {
        setSlideWidth(280)
      } else if (window.innerWidth < 1024) {
        setSlideWidth(300)
      } else {
        setSlideWidth(320)
      }
    }

    updateSlideWidth()
    window.addEventListener('resize', updateSlideWidth)
    return () => window.removeEventListener('resize', updateSlideWidth)
  }, [])

  const reviews = [
    {
      id: 1,
      rating: 5,
      title: "I had to upload my uk lic...",
      text: "I had to upload my uk licence and Elsie helped me to do this quickly thank you Elsie",
      author: "bimeesh varghese",
      date: "7 April"
    },
    {
      id: 2,
      rating: 5,
      title: "New policy on imported ...",
      text: "Just joined the company to insure an imported car not yet on UK plates which is not pr...",
      author: "Gill",
      date: "5 April"
    },
    {
      id: 3,
      rating: 5,
      title: "Best for people who con...",
      text: "The best thing I like is that Be Sure understands that (people like me, a non...",
      author: "FIROZ MUHAMMED",
      date: "3 April"
    },
    {
      id: 4,
      rating: 5,
      title: "Updated my Uk license",
      text: "Was using international license to drive and now I have my UK full license. I chatted...",
      author: "Ugochukwu Nsude",
      date: "1 April"
    },
    {
      id: 5,
      rating: 5,
      title: "Thumbs up!",
      text: "I must say using Be Sure is one of the best rewarding decisions I have made comin...",
      author: "Dairo",
      date: "29 March"
    },
    {
      id: 6,
      rating: 5,
      title: "Great service",
      text: "Easy to get a quote and register for foreign license drivers with fair cover and a convinient app to manage.",
      author: "Rita Galanits",
      date: "15 March"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaStar className="text-xl sm:text-2xl text-amber-400" />
            <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest">Trustpilot</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4">
            Trusted by <span className="text-blue-600">25,000+</span> customers
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of happy customers who rated us excellent on Trustpilot
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white text-2xl sm:text-3xl rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
          >
            ‹
          </button>

          {/* Reviews Container */}
          <div className="overflow-hidden px-12 sm:px-16 md:px-20">
            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}px)`
              }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="shrink-0 w-64 sm:w-72 bg-white text-slate-900 p-6 sm:p-7 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-2xl text-blue-200 mb-3" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-sm text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base text-slate-700 mb-5 line-clamp-4 font-medium">
                    "{review.text}"
                  </p>

                  {/* Author & Date */}
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-sm font-semibold text-slate-900">
                      {review.author}
                    </p>
                    <p className="text-xs text-slate-500">
                      {review.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white text-2xl sm:text-3xl rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
          >
            ›
          </button>
        </motion.div>

        {/* Indicator Dots */}
        <motion.div 
          className="flex justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-600 w-8' : 'bg-slate-300 w-2.5 hover:bg-slate-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-lg p-4 sm:p-6 text-center border border-slate-100">
            <p className="text-2xl sm:text-3xl font-black text-blue-600">4.3/5</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Average Rating</p>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-6 text-center border border-slate-100">
            <p className="text-2xl sm:text-3xl font-black text-blue-600">37K+</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Total Reviews</p>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-6 text-center border border-slate-100 col-span-2 md:col-span-1">
            <p className="text-2xl sm:text-3xl font-black text-blue-600">25K+</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Happy Customers</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join 200,000+ customers
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}

export default CustomerReview
