import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/refer-friend.jpg";

const ReferFriendHero = () => {
  return (
    <motion.section
      className="w-full bg-slate-900 min-h-screen flex items-center justify-center px-6 py-12 lg:px-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Card */}
        <motion.div
          className="bg-blue-100 rounded-3xl p-8 lg:p-12 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Refer a friend.<br />Get rewarded.
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl text-gray-800 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Recommend <span className="font-semibold">Be Sure</span> and get a<br />
            <span className="font-semibold">£50 Amazon voucher</span> each – one for<br />
            you, one for your friend.
          </motion.p>

          <motion.button
                        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 mb-4 w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Refer a friend
          </motion.button>

          <motion.div
            className="flex items-center gap-2 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 1C6.48 1 2 5.48 2 11c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 1 12 1zm-2 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z" />
            </svg>
            <span className="text-sm font-medium">T&Cs Apply</span>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src={heroImage}
            alt="Refer a friend"
            className="rounded-3xl object-cover w-full h-auto max-h-[500px] lg:max-h-[600px] shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ReferFriendHero;
