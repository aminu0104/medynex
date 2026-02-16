import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Doctor from "../../assets/Record/doctor-1.jpg";
import Man from "../../assets/Record/The Man.jpg";
import  Woman from "../../assets/Record/The Woman.jpg";


import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dr. Aisha Bello",
    role: "General Practitioner",
    quote:
      "Medynex Care completely changed how I access healthcare. Booking a doctor is simple, fast, and stress-free.",
    image: Doctor,
  },
  {
    name: "David Okonkwo",
    role: "Remote Worker",
    quote:
      "I was able to consult a specialist late at night without leaving my home. The experience felt secure and professional.",
    image: Man,
  },
  {
    name: "Fatima Sule",
    role: "Caregiver",
    quote:
      "Managing my mother’s health has become easier. Medynex Care gives me peace of mind knowing help is always available.",
    image: Woman,
  },
  

  
];

const PatientTestimonials = () => {
  return (
    <section className="w-full py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            Patient Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by Patients Everywhere
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real experiences from people who use Medynex Care to connect with
            trusted healthcare professionals.
          </p>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    “{item.quote}”
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover bg-gray-200"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default PatientTestimonials;