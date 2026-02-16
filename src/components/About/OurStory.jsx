import { motion } from "framer-motion";
import About from "../../assets/about-us.jpg";

const OurStory = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">
            Our Story
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Who We Are
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed text-base md:text-lg">
    Medynex is a digital healthcare platform designed to make healthcare more accessible and efficient. We help connect
     patients and healthcare professionals through secure virtual care,
     smart systems, and streamlined digital health solutions.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-lg">
  Our focus is on reducing complexity in healthcare delivery while enabling providers to deliver better care through
   technology that is reliable, intuitive, and scalable
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={About}
            alt="About Medynex"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;
