import React from "react";
import { motion } from "framer-motion";

const WhatIsAI = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src=""
            alt="AI clinical support interface"
            className="w-full max-w-xl rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
            Intelligent Clinical Support
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            An AI Assistant Designed for Modern Healthcare
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Medynex AI Assistant is an advanced intelligence layer integrated
            within your hospital ecosystem. It analyzes structured medical data,
            detects patterns, and provides real-time insights that support
            clinicians and administrators in making faster, more accurate decisions.
          </p>

          <p className="mt-6 text-lg text-gray-600">
            Rather than replacing medical professionals, it enhances their
            capabilities — automating documentation, highlighting critical
            alerts, predicting operational risks, and delivering actionable
            recommendations across departments.
          </p>

          {/* Bullet Points */}
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-purple-600 rounded-full"></div>
              <p className="text-gray-700">
                Seamlessly integrates with Medynex Record
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-purple-600 rounded-full"></div>
              <p className="text-gray-700">
                Provides real-time predictive analytics
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-purple-600 rounded-full"></div>
              <p className="text-gray-700">
                Supports clinical decision-making with AI insights
              </p>
            </li>
          </ul>

        </motion.div>

      </div>
    </section>
  );
};

export default WhatIsAI;