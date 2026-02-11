import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24 px-6 md:px-16">
      <motion.div
        className="max-w-5xl mx-auto text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Ready to Digitize Your Hospital Operations?
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-blue-100">
          Transform patient management, billing, and medical records with
          a secure, scalable hospital management platform built for modern healthcare.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">

          {/* Primary Button */}
          <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-2">
            Request a Demo
            <ArrowRight size={18} />
          </button>

          {/* Secondary Button */}
          <button className="border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition">
            Contact Sales
          </button>

        </div>

      </motion.div>
    </section>
  );
};

export default FinalCTA;