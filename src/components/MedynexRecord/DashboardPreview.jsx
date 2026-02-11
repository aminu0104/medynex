import React from "react";
import { motion } from "framer-motion";

const DashboardPreview = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Platform Overview
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Complete Control Through a Unified Dashboard
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Medynex Record provides hospital administrators with a powerful
            centralized dashboard to monitor patient records, appointments,
            billing activities, and departmental performance in real time.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700">
                Real-time hospital performance analytics
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700">
                Appointment & scheduling management
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700">
                Billing, invoices & financial tracking
              </p>
            </li>
          </ul>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="/images/dashboard-preview.png"
            alt="Medynex Record Dashboard"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default DashboardPreview;