import { motion } from "framer-motion";

const leftFeatures = [
  {
    title: "Multi-Device Access",
    desc: "Access your healthcare anytime from mobile, tablet, or desktop without losing continuity.",
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Your medical data is protected with advanced encryption and strict compliance standards.",
  },
  {
    title: "Smart Scheduling",
    desc: "AI-powered appointment booking that adapts to your availability and urgency.",
  },
];

const rightFeatures = [
  {
    title: "24/7 Care Access",
    desc: "Connect with healthcare professionals around the clock, wherever you are.",
  },
  {
    title: "Specialist Network",
    desc: "Get matched with verified doctors and specialists across multiple disciplines.",
  },
  {
    title: "Multiple Communication Modes",
    desc: "Consult via video, voice, or chat — based on what works best for you.",
  },
];

const WhyChooseMedynexCare = () => {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            Premium Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Patients Choose Medynex Care
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Healthcare reimagined with patient-centered features built for
            convenience, trust, and quality care.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          {/* Left features */}
          <div className="space-y-10">
            {leftFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-4 h-4 mt-2 rounded-full bg-blue-600 shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="" 
              alt="Medynex Care Mobile App"
              className="max-w-[280px] md:max-w-[320px] drop-shadow-2xl"
            />
          </motion.div>

          {/* Right features */}
          <div className="space-y-10">
            {rightFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-4 h-4 mt-2 rounded-full bg-blue-600 shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMedynexCare;