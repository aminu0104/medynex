// File: components/MedynexCare/MedynexCareOverview.jsx
import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/Record/What.jpg";

const MedynexCareOverview = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="flex flex-col md:flex-row items-center gap-14">

        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Small label */}
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            Digital Healthcare
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            What is <span className="text-blue-600">Medynex Care</span>?
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Medynex Care is a modern mobile healthcare solution designed to connect
            patients with qualified medical professionals through secure and
            convenient digital consultations.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Whether it’s routine checkups, urgent medical advice, or follow-up
            consultations, Medynex Care removes barriers to healthcare by bringing
            trusted doctors directly to your device.
          </p>

          {/* Feature bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700">
                Secure video & chat consultations
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700">
                Access to licensed medical professionals
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700">
                Flexible scheduling and fast response
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700">
                Designed for mobile-first healthcare
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt="Medynex Care Consultation"
            className="w-full max-w-lg rounded-2xl shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default MedynexCareOverview;