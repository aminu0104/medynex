import { motion } from "framer-motion";

const partners = [
  "HealthPlus",
  "CareLink",
  "MediCore",
  "LifeBridge",
  "WellNest",
  "MedSecure",
  "CarePro",
];

const TrustedPartners = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-900"
        >
          Trusted by Leading Healthcare Partners
        </motion.h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Hospitals, clinics, and digital health innovators trust Medynex
          to power secure virtual care.
        </p>
      </div>

      {/* Carousel */}
      <div className="mt-14 relative">
        <motion.div
          className="flex gap-10 w-max px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="h-14 min-w-[180px] flex items-center justify-center
              bg-slate-100 rounded-xl shadow-sm
              text-slate-500 font-semibold
              grayscale hover:grayscale-0 hover:text-blue-600
              transition-all duration-300"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;
