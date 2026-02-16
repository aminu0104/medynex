import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

          <Link to="/book-demo">
            <motion.button
              whileHover={{
                y: -3,
                boxShadow: "0px 15px 40px rgba(0,0,0,0.25)",
              }}
              whileTap={{ scale: 0.96 }}
              className="
                bg-white text-blue-600
                px-8 py-4
                rounded-full
                font-semibold
                text-sm md:text-base
                transition-all duration-300
              "
            >
          Request Demo
            </motion.button>
          </Link>

           
      <Link
      to="/contact"
  className="border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition">
    Contact Sales
</Link>

        </div>

      </motion.div>
    </section>
  );
};

export default FinalCTA;