import { motion } from "framer-motion";

const MissionCard = ({ icon: Icon, title, text, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-4 rounded-full">
          <Icon className="w-7 h-7 text-blue-600" />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        {title}
      </h3>

      <p className="text-sm text-slate-600">
        {text}
      </p>
    </motion.div>
  );
};

export default MissionCard;
