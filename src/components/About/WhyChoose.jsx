import { motion } from "framer-motion";

const WhyChoose = () => {
  const reasons = [
    {
      title: "Patient-Centered Design",
      text: "Our platform is built around real patient needs, making healthcare simple and accessible."
    },
    {
      title: "Secure Digital Infrastructure",
      text: "We apply modern security standards to protect medical data and user privacy."
    },
    {
      title: "Flexible Healthcare Access",
      text: "Connect with healthcare professionals and manage records without location limits."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid gap-12 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Why Choose Medynex
          </h2>

          <p className="text-slate-600 mb-8">
            Medynex delivers healthcare solutions that balance innovation,
            trust, and human connection.
          </p>

          <div className="space-y-6">
            {reasons.map((item, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-slate-800">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm mt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/about/why-choose.png"
            alt="Why choose Medynex"
            className="w-full max-w-md rounded-3xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChoose;
