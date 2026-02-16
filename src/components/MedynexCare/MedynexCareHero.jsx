
import React from "react";
import { motion } from "framer-motion";
import Phone from "../../assets/Record/Phone.png";
import Apple from "../../assets/Record/Apple.png";
import Play from "../../assets/Record/Play.png";

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
              src={Play}
              alt="Download on Play Store"
              className="w-32 h-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={Apple}
              alt="Download on App Store"
              className="w-32 h-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>

    {/* Right Column - Mobile Mockup */}
<motion.div
  className="w-full md:w-1/2 flex justify-center md:justify-end relative z-10"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <motion.img
    src={Phone}
    alt="Medynex Care Mobile App"
    className="w-[420px] md:w-[550px] lg:w-[700px] xl:w-[800px] h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
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