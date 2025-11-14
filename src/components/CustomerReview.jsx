import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(280)

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth < 640) {
        setSlideWidth(240) // 224px card + 16px gap
      } else {
        setSlideWidth(280) // 256px card + 24px gap
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
    <section className="bg-gray-900 text-white py-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <FaStar className="text-xl sm:text-2xl text-green-500" />
            <span className="text-xs sm:text-sm font-bold">Trustpilot</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-base sm:text-lg text-green-500" />
              ))}
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2">
            Rated Excellent on Trustpilot.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Look at that! Over 25,000 reviews already.
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div 
          className="relative mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-gray-800/60 hover:bg-gray-700 text-white text-2xl sm:text-3xl rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all"
          >
            ‹
          </button>

          {/* Reviews Container */}
          <div className="overflow-hidden px-10 sm:px-14">
            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}px)`
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="shrink-0 w-56 sm:w-64 bg-white text-gray-900 p-4 sm:p-5 rounded-lg"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-base sm:text-lg text-green-500" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xs sm:text-sm mb-2 line-clamp-1">
                    {review.title}
                  </h3>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-gray-700 mb-4 line-clamp-3">
                    {review.text}
                  </p>

                  {/* Author & Date */}
                  <p className="text-xs font-semibold text-gray-600">
                    {review.author}, <span className="font-normal">{review.date}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-gray-800/60 hover:bg-gray-700 text-white text-2xl sm:text-3xl rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all"
          >
            ›
          </button>
        </motion.div>

        {/* Footer Stats */}
        <motion.div 
          className="text-center mb-6 text-xs sm:text-sm text-gray-400 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>
            Rated 4.3 / 5 based on 37,174 reviews. Showing our favourite reviews.
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <FaStar className="text-green-500" />
            <span className="font-semibold">Trustpilot</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button 
            className="bg-blue-500 hover:bg-blue-600 text-gray-900 font-bold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full transition-colors duration-200"
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
