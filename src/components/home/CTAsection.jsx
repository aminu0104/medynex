import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-white opacity-95" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center text-white"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Ready to Transform Healthcare?
        </h2>

        <p className="mt-6 text-base md:text-lg text-white/90">
          Experience how <span className="font-semibold">Medynex</span> simplifies
          healthcare delivery with secure virtual care, smart records, and AI-powered
          assistance — all in one platform.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg hover:bg-slate-100 transition"
            >
              Book a Free Demo
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-blue-600 transition"
            >
              Talk to Sales
            </Link>
          </motion.div>
        </div>

        {/* Trust micro-text */}
        <p className="mt-8 text-sm text-white/80">
          No credit card required • Secure & compliant • Built for modern healthcare
        </p>
      </motion.div>
    </section>
  );
};

export default CTASection;
