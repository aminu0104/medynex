import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, Brain, Clock } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck size={26} />,
    title: "Secure & Private",
    desc: "Your health data is protected with enterprise-grade security and privacy standards.",
  },
  {
    icon: <Stethoscope size={26} />,
    title: "Certified Professionals",
    desc: "Consult verified and experienced healthcare providers you can trust.",
  },
  {
    icon: <Brain size={26} />,
    title: "AI-Powered Insights",
    desc: "Get smart health guidance backed by intelligent symptom analysis.",
  },
  {
    icon: <Clock size={26} />,
    title: "Anytime, Anywhere",
    desc: "Access healthcare services remotely, without waiting rooms or delays.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Medynex
          </h2>
          <p className="mt-4 text-slate-600">
            Built to simplify healthcare while keeping trust, security, and innovation at the core.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* ICON */}
              <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:scale-110 transition">
                {itemData.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {itemData.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {itemData.desc}
              </p>

              {/* DECORATIVE GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-blue-100/40 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
