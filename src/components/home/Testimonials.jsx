import { motion } from "framer-motion";
import doctor1 from "../../assets/testimonials/doctor-1.jpg";
import doctor2 from "../../assets/testimonials/doctor-2.jpg";
import patient1 from "../../assets/testimonials/patient-1.jpg";

const testimonials = [
  {
    name: "Dr. Aisha Bello",
    role: "General Practitioner",
    message:
      "Medynex has completely changed how I consult with patients. It’s fast, secure, and incredibly easy to use.",
    avatar: doctor1,
  },
  {
    name: "Ahmed Musa",
    role: "Patient",
    message:
      "I was able to speak with a doctor from my home and access my records anytime. Medynex makes healthcare stress-free.",
    avatar:   doctor2,
  },
  {
    name: "Sarah Johnson",
    role: "Health Administrator",
    message:
      "Managing patient data and consultations in one platform has improved efficiency across our organization.",
    avatar: patient1 ,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
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
            What People Say <span className=" text-blue-600"> About Medynex</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Trusted by healthcare professionals and patients alike.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-slate-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              {/* MESSAGE */}
              <p className="text-slate-700 leading-relaxed mb-6">
                “{t.message}”
              </p>

              {/* USER */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {t.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
