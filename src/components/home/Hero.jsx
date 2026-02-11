import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-6 px-5 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
              Digital Healthcare Ecosystem
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight">
              Healthcare,
              <span className="block text-blue-600">
                Reimagined for Everyone
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Medynex connects patients and healthcare professionals through
              secure virtual care, intelligent systems, and seamless digital
              health management.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/book-demo"
                className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg"
              >
                Book a Free Demo
              </Link>

              <Link
                to="/about"
                className="px-8 py-4 rounded-full border border-slate-300 text-slate-700 font-semibold hover:border-blue-600 hover:text-blue-600 transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* DOCTOR IMAGE */}
            <div className="relative">
              <img
               src="/hero image.jpg"
  alt="        Doctor online consultation"
                className="w-[500px] md:w-[380px] xl:w-[500px] rounded-[1.5rem] shadow-2xl"
              />

              {/* LIVE CONSULTATION CARD */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -right-8 bg-white rounded-2xl shadow-xl p-5 w-64"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-blue-600 animate-pulse" />
                  <h4 className="font-semibold text-slate-800">
                    Live Consultation
                  </h4>
                </div>

                <p className="text-sm text-slate-500 mb-4">
                  Available now with certified doctors.
                </p>

                <button className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                  Connect Now
                </button>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
