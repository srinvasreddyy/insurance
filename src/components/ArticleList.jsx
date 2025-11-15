import React from 'react'

const ArticleList = () => {
  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "How to provide No Claims Discount proof",
      description: "A step-by-step guide to proving your claims-free driving history. We don't mind what country it's from – find the documents we accept and..."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "What car insurance documents do you need to get UK cover?",
      description: "Take the stress out of signing up for UK car insurance by finding out what documents you need to get cover."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "How to exchange an international driving licence for a British one",
      description: "How and when to exchange an international drivers licence for a British one. Don't miss out!"
    }
  ]

  return (
    <section className="bg-[#f5ede4] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-[#8fa860] flex items-center justify-center">
              <span className="text-white text-xl">→</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-gray-900">
              Know everything about UK car insurance, yet?
            </h2>
          </div>
          <p className="text-lg text-gray-700 pl-16">
            You will after a visit to our blog.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-64">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed mb-6 grow">
                  {article.description}
                </p>

                {/* Button */}
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold px-6 py-2 rounded-full inline-block transition-colors duration-200 w-fit">
                  Read article
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ArticleList
