import { motion } from "framer-motion";

// Import logos (Make sure paths are correct)
import healthplus from "../../assets/partners/healthplus.png";
import carelink from "../../assets/partners/carelink.png";
import medicore from "../../assets/partners/medicore.png";
import lifebridge from "../../assets/partners/lifebridge.png";
import wellnest from "../../assets/partners/wellnest.png";
import medsecure from "../../assets/partners/medsecure.png";
import carepro from "../../assets/partners/carepro.png";

const partners = [
  { name: "HealthPlus", logo: healthplus },
  { name: "CareLink", logo: carelink },
  { name: "MediCore", logo: medicore },
  { name: "LifeBridge", logo: lifebridge },
  { name: "WellNest", logo: wellnest },
  { name: "MedSecure", logo: medsecure },
  { name: "CarePro", logo: carepro },
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
          Trusted by Leading <span className=" text-blue-600"> Healthcare Partners</span>
        </motion.h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Hospitals, clinics, and digital health innovators trust Medynex
          to power secure virtual care.
        </p>
      </div>

      {/* Carousel */}
      <div className="mt-14 relative">
        <motion.div
          className="flex gap-8 w-max px-10 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="h-20 min-w-[220px] px-6 flex items-center gap-3
              bg-white border border-slate-200 rounded-xl
              hover:border-blue-200 hover:shadow-lg
              transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
              <span className="text-slate-600 font-medium text-sm">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;