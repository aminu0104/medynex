import React from "react";
import { motion } from "framer-motion";
import  hero from "../../assets/Care/Macbook_Air_Mockup_3.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
      <section className="relative overflow-hidden bg-white py-20 px-6 md:px-16 isolate">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Smart Hospital Management <br />
            <span className="text-blue-600">Powered by Medynex Record</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            A complete hospital SaaS system designed to manage patient records,
            appointments, billing, pharmacy, lab reports, and staff operations —
            all in one secure cloud platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
       <Link
  to="/book-demo"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition inline-block"
>
  Request Demo
</Link>
         
         <Link
            to="/contact"
  className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
 Learn More
</Link>
         
          </div>
        </motion.div>

  <motion.div
  className="flex justify-center relative"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  {/* Background Glow */}
  <div className="hidden lg:block absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -z-10"></div>

<motion.img
  src={hero}
  alt="Medynex Record Dashboard Mockup"
  className="w-[120%] md:w-[150%] lg:w-[150%] max-w-none drop-shadow-2xl"
  style={{ transformStyle: "preserve-3d" }}
  animate={{
    y: [0, -20, 0],
    rotateX: [0, 5, 0],
    rotateY: [0, -5, 0],
    rotate: [-2, 2, -2],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
</motion.div>

      </div>
    </section>
  );
};

export default Hero;