import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="w-full py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          max-w-7xl mx-auto
          rounded-3xl
          bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700
          text-white
          px-8 py-16
          shadow-2xl
          relative overflow-hidden
        "
      >
        {/* Decorative blur */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* TEXT */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Ready to Transform Healthcare Delivery?
            </h2>

            <p className="mt-4 text-blue-100 text-base md:text-lg">
              Experience how Medynex connects patients, doctors, and data
              into one seamless digital healthcare ecosystem.
            </p>
          </div>

          {/* BUTTON */}
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
              Book a Free Demo
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
