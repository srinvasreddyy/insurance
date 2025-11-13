import React from "react";
import { motion } from "framer-motion";

const ReferInstructions = () => {
  return (
    <motion.section
      className="w-full bg-amber-50 py-20 px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Left Section - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight sticky top-20">
              How does it work?
            </h2>
          </motion.div>

          {/* Right Section - Steps */}
          <motion.div className="lg:col-span-2 flex flex-col gap-12">
            {/* Step 1 */}
            <motion.div className="flex items-start gap-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <motion.div className="shrink-0 flex items-center justify-center bg-orange-500 text-white font-bold rounded-full w-12 h-12 text-xl" whileHover={{ scale: 1.1 }}>
                1
              </motion.div>
              <div className="pt-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Tell them about us
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                  You can send them a referral link straight from the app.
                </p>
              </div>
            </motion.div>


            {/* Step 2 */}
            <motion.div className="flex items-start gap-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <motion.div className="shrink-0 flex items-center justify-center bg-orange-500 text-white font-bold rounded-full w-12 h-12 text-xl" whileHover={{ scale: 1.1 }}>
                2
              </motion.div>
              <div className="pt-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Get your £50 voucher
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                  Once your friend has been with us for 21 days without making a claim, we'll send each of you a £50 Amazon voucher.
                </p>
              </div>
            </motion.div>


            {/* Step 3 */}
            <motion.div className="flex items-start gap-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <motion.div className="shrink-0 flex items-center justify-center bg-orange-500 text-white font-bold rounded-full w-12 h-12 text-xl" whileHover={{ scale: 1.1 }}>
                3
              </motion.div>
              <div className="pt-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Keep recommending us
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                  Refer as many friends as you like! And get hundreds of pounds worth of Amazon vouchers every year.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReferInstructions;
