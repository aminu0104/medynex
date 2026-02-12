import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">

      {/* Subtle Gradient Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            AI-Powered Intelligence
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Smarter Clinical Decisions. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Powered by Artificial Intelligence.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Medynex AI Assistant enhances hospital operations with intelligent
            clinical support, automated documentation, predictive insights,
            and real-time recommendations — seamlessly integrated into your
            healthcare workflow.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6">

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition">
              Request AI Demo
            </button>

            <button className="border border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition">
              Learn More
            </button>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src=""
            alt="Medynex AI Assistant Dashboard"
            className="w-full max-w-xl rounded-2xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;