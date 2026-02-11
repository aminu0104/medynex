import { motion } from "framer-motion";

const MedynexCareFinalCTA = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 px-10 py-16 md:px-16 md:py-20 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to Experience Smarter Healthcare?
              </h2>
              <p className="mt-5 text-lg text-blue-100 max-w-xl">
                Download Medynex Care to book consultations, connect with trusted
                doctors, and manage your health anytime, anywhere.
              </p>
            </div>

            {/* Right CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
              <img
                src=""
                alt="Download on the App Store"
                className="h-14 w-auto cursor-pointer transition-transform hover:scale-105"
              />
              <img
                src=""
                alt="Get it on Google Play"
                className="h-14 w-auto cursor-pointer transition-transform hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MedynexCareFinalCTA;