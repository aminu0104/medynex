import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does Medynex Care work?",
    answer:
      "Medynex Care allows you to book consultations with licensed healthcare professionals through our mobile app. You can connect via video, voice, or chat from anywhere.",
  },
  {
    question: "Is my medical information secure?",
    answer:
      "Yes. Medynex Care uses advanced encryption and follows strict security standards to ensure your medical data remains private and protected.",
  },
  {
    question: "Can I choose my doctor?",
    answer:
      "Absolutely. You can browse available doctors, view their specialties, and select the healthcare professional that best fits your needs.",
  },
  {
    question: "Is Medynex Care available 24/7?",
    answer:
      "Yes. Our platform provides round-the-clock access to healthcare professionals, so you can get help whenever you need it.",
  },
  {
    question: "Do I need special equipment to use Medynex Care?",
    answer:
      "No special equipment is required. A smartphone, tablet, or computer with an internet connection is all you need.",
  },
];

const MedynexCareFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
              FAQs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-md">
              Everything you need to know about using Medynex Care for secure and
              convenient healthcare consultations.
            </p>
          </motion.div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-blue-600">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MedynexCareFAQ;