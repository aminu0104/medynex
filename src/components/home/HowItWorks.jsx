import { motion } from "framer-motion";
import { UserPlus, Video, HeartPulse, FileText } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={28} />,
    title: "Create an Account",
    desc: "Sign up in minutes and securely access the Medynex platform.",
  },
  {
    icon: <Video size={28} />,
    title: "Book a Consultation",
    desc: "Schedule a virtual session with certified healthcare professionals.",
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Get Medical Care",
    desc: "Consult doctors via video, chat, or secure messaging.",
  },
  {
    icon: <FileText size={28} />,
    title: "Manage Records",
    desc: "Store and access your medical records anytime, anywhere.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            How Medynex <span className=" text-blue-600"> Works</span>
          </h2>
          <p className="mt-4 text-slate-600">
            A simple, secure, and modern way to access healthcare from anywhere.
          </p>
        </motion.div>

        {/* STEPS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group bg-slate-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* ICON */}
              <div className="mx-auto mb-5 w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:scale-110 transition">
                {step.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
