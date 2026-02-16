import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto text-center text-white">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Bring Intelligent Automation to Your Hospital
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-blue-100"
        >
          Unlock predictive insights, automated documentation,
          and real-time clinical intelligence with Medynex AI Assistant.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
        >
        <Link
  to="/book-demo"
className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-2">
  Schedule AI Demo
<ArrowRight size={18} />
</Link>

 <Link
  to="/book-demo"
 className="border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition">
Talk to an AI Specialist

</Link>


        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;