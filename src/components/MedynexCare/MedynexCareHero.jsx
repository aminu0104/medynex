// File: components/MedynexCare/MedynexCareHero.jsx
import React from "react";
import { motion } from "framer-motion";

const MedynexCareHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 py-24 px-6 md:px-12">
        
        {/* Left Column - Text */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-6 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Medynex <span className="text-blue-600">Care</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Book a doctor for consultation anytime, anywhere with our intuitive mobile app.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4 mt-6">
            <motion.img
              src="" // <-- Add Play Store badge image path
              alt="Download on Play Store"
              className="w-32 h-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src="" // <-- Add App Store badge image path
              alt="Download on App Store"
              className="w-32 h-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>

        {/* Right Column - Mobile Mockup */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="" // <-- Add your mobile mockup image path here
            alt="Medynex Care Mobile App"
            className="w-64 md:w-96 h-auto drop-shadow-2xl rounded-xl"
          />
        </motion.div>

      </div>

      {/* Optional Floating Shapes for Style */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
    </section>
  );
};

export default MedynexCareHero;