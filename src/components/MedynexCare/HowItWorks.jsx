import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Create Your Account",
    description:
      "Sign up securely and complete your basic health profile in just a few minutes.",
  },
  {
    step: "02",
    title: "Book a Consultation",
    description:
      "Choose a verified doctor, select your preferred time, and book instantly.",
  },
  {
    step: "03",
    title: "Meet Your Doctor",
    description:
      "Consult via video, voice, or chat — from anywhere, on any device.",
  },
  {
    step: "04",
    title: "Get Care & Follow-Up",
    description:
      "Receive prescriptions, medical notes, and continuous care digitally.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How Medynex Care Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Quality healthcare made simple — follow these easy steps to get
            started.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition"
            >
              {/* Step number */}
              <div className="absolute -top-5 left-6 bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
                {item.step}
              </div>

              <h3 className="mt-10 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
        
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;